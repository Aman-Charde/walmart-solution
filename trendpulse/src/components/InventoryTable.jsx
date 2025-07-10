const data = [
  ['Raincoats', 'Seasonal Wear', 'Pune Store', '12 / 50', 'Critical', '+287%', 'Urgent Restock'],
  ['Sunglasses', 'Accessories', 'Mumbai Store', '28 / 40', 'Warning', '+189%', 'Increase Stock'],
  ['Cotton T-Shirts', 'Clothing', 'Delhi Store', '156 / 100', 'Good', '+156%', 'Monitor'],
  ['Winter Jackets', 'Seasonal Wear', 'Delhi Store', '45 / 60', 'Warning', '+78%', 'Increase Stock'],
  ['Power Banks', 'Electronics', 'Mumbai Store', '89 / 75', 'Good', '+134%', 'Monitor'],
  ['Umbrellas', 'Accessories', 'Mumbai Store', '67 / 80', 'Warning', '+245%', 'Increase Stock']
];

const InventoryTable = () => (
  <section className="inventory-section">
    <h2>Inventory Management</h2>
    <div className="inventory-stats">
      <div className="status-card green"><h4>Well Stocked</h4><p>2 products above safety threshold</p></div>
      <div className="status-card yellow"><h4>Needs Attention</h4><p>3 products approaching reorder point</p></div>
      <div className="status-card red"><h4>Critical Stock</h4><p>1 product requires immediate restocking</p></div>
    </div>
    <table className="inventory-table">
      <thead>
        <tr>
          <th>Product</th><th>Category</th><th>Location</th><th>Current Stock</th>
          <th>Status</th><th>Trend Impact</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([prod, cat, loc, stock, status, impact, action], i) => (
          <tr key={i}>
            <td>{prod}</td><td>{cat}</td><td>{loc}</td><td>{stock}</td>
            <td><span className={`status-label ${status.toLowerCase()}`}>{status}</span></td>
            <td className="trend">{impact}</td>
            <td><button className={`action-btn ${action.replace(/\\s/g, '-').toLowerCase()}`}>{action}</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
export default InventoryTable;

