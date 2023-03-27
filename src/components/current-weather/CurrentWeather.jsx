import "./currentweather.css";

function capitalLetter(data) {
  const capLet = data.split(" ");

  for (var i = 0; i < capLet.length; i++) {
    capLet[i] = capLet[i].charAt(0).toUpperCase() + capLet[i].slice(1);
  }

  return capLet.join(" ");
}

function CurrentWeather({ data }) {
  const datex = new Date().toLocaleString();
  const dayx = new Date().getDay();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayCurr = weekday[dayx];

  return (
    <div className="weather-container">
      <div>
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
          </div>
          <img
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather"
            className="weather-icon"
          />
        </div>
        <div className="middle">
          <p className="middle-title">Current Weather: </p>
          <p className="weather-description">
            {capitalLetter(data.weather[0].description)}
          </p>
        </div>
        <div className="bottom">
          <div className="details">
            <div>
              <div className="parameter-row">
                <span className="paramet-label">Details</span>
              </div>
              <div className="parameter-row">
                <span className="paramet-label">RealFeel</span>
                <span className="paramet-value">
                  {Math.round(data.main.feels_like)}°C
                </span>
              </div>
              <div className="parameter-row">
                <span className="paramet-label">Wind</span>
                <span className="paramet-value">{data.wind.speed} m/s</span>
              </div>
              <div className="parameter-row">
                <span className="paramet-label">Humidity</span>
                <span className="paramet-value">{data.main.humidity}%</span>
              </div>
              <div className="parameter-row">
                <span className="paramet-label">Pressure</span>
                <span className="paramet-value">{data.main.pressure} hPa</span>
              </div>
            </div>
          </div>

          <p className="temperature">{Math.round(data.main.temp)}°C</p>
        </div>
        <p className="paramet-value date">
          {datex} {dayCurr}
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
