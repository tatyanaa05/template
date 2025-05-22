import { useEffect, useState } from "react";

export function Quote() {
  const [quote, setQuote] = useState<{ quote: string; author: string } | null>(
    null
  );

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "jnu66Uedt4YT97D4SFlGJw==Osehc8h64OKfJceD",
      },
    })
      .then((res) => res.json())
      .then((data) => setQuote(data[0]))
      .catch((err) => console.error("Ошибка при загрузке цитаты:", err));
  }, []);

  if (!quote) return <div>Загрузка цитаты...</div>;

  return (
    <div>
      <h2>💬 Цитата дня</h2>
      <p>"{quote.quote}"</p>
      <p>— {quote.author}</p>
    </div>
  );
}
