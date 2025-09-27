from fastapi import APIRouter, HTTPException
from services.coingecko import get_top_coins
from models.coin import Coin
from typing import List

router = APIRouter()

@router.get("/top", response_model=List[Coin])
def top_coins():
    try:
        return get_top_coins()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
