const alerts = [
  { item: 'raincoat - Mumbai', spike: '68%', status: 'CRITICAL' },
  { item: 'umbrella - Mumbai', spike: '68%', status: 'CRITICAL' },
  { item: 'sunglasses - Mumbai', spike: '31%', status: 'CRITICAL' },
];

const Alerts = () => (
  <div className="alerts">
    <h3>Critical Demand Alerts</h3>
    <div className="alerts-grid">
      {alerts.map((alert, i) => (
        <div key={i} className="alert-card">
          <div className="alert-item">{alert.item}</div>
          <div className="alert-note">{alert.spike} spike in mention detected</div>
          <div className="alert-status">{alert.status}</div>
          <div className="alert-buttons">
            <button className="red-btn">Restock Now</button>
            <button className="outline-btn">View Details</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Alerts;
