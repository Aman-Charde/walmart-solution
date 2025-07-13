import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from xgboost import XGBRegressor

# Load warehouse data
df = pd.read_csv("indore_warehouse_sales.csv")
df['date'] = pd.to_datetime(df['date'])

# Load Google Trends
trends = pd.read_csv("trends.csv")
trends['date'] = pd.to_datetime(trends['date'])

# Merge
df = pd.merge(df, trends, on='date', how='left')
df.fillna(0, inplace=True)  # Fill missing trend values

# Feature engineering
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['dayofweek'] = df['date'].dt.dayofweek

# Encode product_id and category
le_product = LabelEncoder()
df['product_id_enc'] = le_product.fit_transform(df['product_id'])

le_category = LabelEncoder()
df['category_enc'] = le_category.fit_transform(df['category'])

# Final features
features = [
    'inventory', 'month', 'day', 'dayofweek',
    'product_id_enc', 'category_enc',
    'ac_voltas', 'ceiling_fan', 'realme_narzo',
    'india_gate_rice', 'aashirvaad_atta'
]

X = df[features]
y = df['units_sold']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=5, random_state=42)
model.fit(X_train, y_train)

# Save model and encoders
joblib.dump(model, "walmart_model.pkl")
joblib.dump(le_product, "encoder_product.pkl")
joblib.dump(le_category, "encoder_category.pkl")

print("✅ Model and encoders saved successfully!")
