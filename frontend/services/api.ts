import axios from 'axios';

export async function getTopCoins() {
  const res = await axios.get('http://localhost:8000/coins/top');
  return res.data;
}
