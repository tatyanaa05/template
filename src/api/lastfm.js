const API_KEY = '319ce416c7407718cfea63db3bde1712';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

/**
 * Получить топ-артистов
 * @returns {Promise<Array>} список артистов
 */
export async function getTopArtists() {
  try {
    const res = await fetch(`${BASE_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json`);
    const data = await res.json();
    return data.artists.artist;
  } catch (error) {
    console.error('Ошибка загрузки артистов:', error);
    return [];
  }
}

/**
 * Получить топ-треки
 * @returns {Promise<Array>} список треков
 */
export async function getTopTracks() {
  try {
    const res = await fetch(`${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&format=json`);
    const data = await res.json();
    return data.tracks.track;
  } catch (error) {
    console.error('Ошибка загрузки треков:', error);
    return [];
  }
}
