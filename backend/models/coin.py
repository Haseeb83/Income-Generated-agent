from pydantic import BaseModel

class Coin(BaseModel):
    name: str
    symbol: str
    current_price: float
    market_cap: int
    price_change_percentage_24h: float
    total_volume: int
