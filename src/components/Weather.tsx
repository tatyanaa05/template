import { useEffect, useState } from "react";


interface WeatherData {
  main: { temp: number };
  name: string;
}

/** Получает погоду и показывает город и температуру. */
export function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "74af3a88b0d6cec389ce45fbe869ff72";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((err) => console.error("Ошибка при получении погоды:", err));
    });
  }, []);

  return (
    <section className="weather">
      <h2>☁️ Погода</h2>
      {weather ? (
        <p>
          В {weather.name} сейчас {Math.round(weather.main.temp)}°C
        </p>
      ) : (
        <p>Загрузка погоды...</p>
      )}
    </section>
  );
}