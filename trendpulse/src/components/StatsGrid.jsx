const stats = [
  { label: 'Active Trends', value: '30', note: '+12% vs yesterday', color: 'blue' },
  { label: 'Demand Spikes', value: '30', note: '5 critical require action', color: 'yellow' },
  { label: 'Cities Monitored', value: '3', note: '100% data coverage', color: 'green' },
  { label: 'Prevented Losses', value: '₹32L', note: 'This month estimated', color: 'cyan' },
];

const StatsGrid = () => (
  <section className="dashboard-section">
    <div className="section-header">
      <h2>Real-Time Dashboard</h2>
      <div className="filter">
        <label>🔵 Live Data</label>
      </div>
    </div>
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <div key={i} className={`stat-card ${stat.color}`}>
          <div className="value">{stat.value}</div>
          <div className="label">{stat.label}</div>
          <div className="note">{stat.note}</div>
        </div>
      ))}
    </div>
  </section>
);
export default StatsGrid;
