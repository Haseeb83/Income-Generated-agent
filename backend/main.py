from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.coin import router as coin_router

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "AI Passive Bot Backend is running"}

app.include_router(coin_router, prefix="/coins")
