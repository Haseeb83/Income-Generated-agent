import httpx
from models.coin import Coin
from typing import List

COINGECKO_API = "https://api.coingecko.com/api/v3/coins/markets"

async def fetch_top_coins() -> List[Coin]:
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 5,
        "page": 1,
        "sparkline": False
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(COINGECKO_API, params=params)
        response.raise_for_status()
        data = response.json()
        return [Coin(
            name=coin["name"],
            symbol=coin["symbol"],
            current_price=coin["current_price"],
            market_cap=coin["market_cap"],
            price_change_percentage_24h=coin["price_change_percentage_24h"],
            total_volume=coin["total_volume"]
        ) for coin in data]

def get_top_coins():
    import asyncio
    return asyncio.run(fetch_top_coins())
