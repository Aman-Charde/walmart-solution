import streamlit as st
import pandas as pd
import numpy as np
import joblib
from datetime import datetime

# Load artifacts
model = joblib.load("walmart_model.pkl")
le_product = joblib.load("encoder_product.pkl")
le_category = joblib.load("encoder_category.pkl")

# Load Google Trends
trends = pd.read_csv("trends.csv")
trends['date'] = pd.to_datetime(trends['date'])

# Load product data for dropdown
df = pd.read_csv("indore_warehouse_sales.csv")
products = df[['product_id', 'product_name', 'category']].drop_duplicates().sort_values('product_name')

# UI
st.set_page_config(page_title="Walmart Sales Predictor", layout="wide")
st.title("📦 Walmart Sales Forecasting Dashboard")

# Sidebar Inputs
st.sidebar.header("🔮 Predict Sales")
product_name = st.sidebar.selectbox("Select Product", products['product_name'].unique())
inventory = st.sidebar.slider("Inventory Level", min_value=10, max_value=200, step=5)
selected_date = st.sidebar.date_input("Select Date", value=datetime.today())

# Get matching product_id and category
row = products[products['product_name'] == product_name].iloc[0]
product_id = row['product_id']
category = row['category']

# Feature Engineering
month = selected_date.month
day = selected_date.day
dayofweek = selected_date.weekday()

# Google Trends (safe fallback)
trend_row = trends[trends['date'] == pd.to_datetime(selected_date)]
ac_voltas = int(trend_row['ac_voltas'].values[0]) if not trend_row.empty else 0
ceiling_fan = int(trend_row['ceiling_fan'].values[0]) if not trend_row.empty else 0
realme_narzo = int(trend_row['realme_narzo'].values[0]) if not trend_row.empty else 0
india_gate_rice = int(trend_row['india_gate_rice'].values[0]) if not trend_row.empty else 0
aashirvaad_atta = int(trend_row['aashirvaad_atta'].values[0]) if not trend_row.empty else 0

# Encoding
product_encoded = le_product.transform([product_id])[0]
category_encoded = le_category.transform([category])[0]

# Prediction
input_features = [[
    inventory, month, day, dayofweek,
    product_encoded, category_encoded,
    ac_voltas, ceiling_fan, realme_narzo,
    india_gate_rice, aashirvaad_atta
]]
prediction = model.predict(input_features)[0]

st.sidebar.markdown(f"### 📈 Predicted Units Sold: **{int(prediction)}**")

# --- Dashboard Overview ---
st.subheader("📊 Data Overview")

# Category-wise sales
category_sales = df.groupby("category")["units_sold"].sum().sort_values(ascending=False)
st.bar_chart(category_sales)

# Top products
top_products = df.groupby("product_name")["units_sold"].sum().sort_values(ascending=False).head(10)
st.subheader("🏆 Top 10 Products by Units Sold")
st.bar_chart(top_products)

# Time-series view
df['date'] = pd.to_datetime(df['date'])
daily_sales = df.groupby("date")["units_sold"].sum()
st.subheader("📅 Daily Units Sold Over Time")
st.line_chart(daily_sales)
