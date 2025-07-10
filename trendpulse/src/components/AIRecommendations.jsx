const aiCards = [
  {
    title: 'Immediate Action',
    description: 'Transfer 50 raincoats from Delhi to Pune warehouse within 24 hours',
    note: 'Potential Loss Prevention: ₹1.2L in missed sales',
    color: 'red',
    btn: 'Execute Transfer'
  },
  {
    title: 'Plan Ahead',
    description: 'Order 200 winter jackets for Delhi - cold wave expected next week',
    note: 'Lead Time: 3-5 days delivery available',
    color: 'yellow',
    btn: 'Place Order'
  },
  {
    title: 'Optimize',
    description: 'Increase sunscreen stock across all stores - summer season approaching',
    note: 'Confidence: 89% based on historical trends',
    color: 'green',
    btn: 'Schedule Order'
  },
];

const AIRecommendations = () => (
  <div className="ai-actions">
    {aiCards.map((card, i) => (
      <div key={i} className={`ai-card ${card.color}`}>
        <h4>{card.title}</h4>
        <p>{card.description}</p>
        <p className="note">{card.note}</p>
        <button>{card.btn}</button>
      </div>
    ))}
  </div>
);
export default AIRecommendations;
