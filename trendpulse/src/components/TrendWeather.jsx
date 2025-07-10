const products = [
  ['Raincoat', '+62%'],
  ['Umbrella', '+68%'],
  ['Sunglasses', '+31%'],
  ['Sunscreen', '+46%'],
  ['Jacket', '+17%']
];

const TrendWeather = () => (
  <div className="trend-weather">
    <div>
      <h4>Trending Products by City</h4>
      <ul>
        {products.map(([item, trend], i) => (
          <li key={i}><span>{item}</span><span className="trend">{trend}</span></li>
        ))}
      </ul>
    </div>
    <div>
      <h4>Weather & Events Impact</h4>
      <div className="weather-placeholder"></div>
    </div>
  </div>
);
export default TrendWeather;
