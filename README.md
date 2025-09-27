# AI Passive Bot

A full-stack project for monitoring top cryptocurrencies and providing a skeleton for autonomous agent bots.

## Project Structure

- `/backend` — FastAPI backend (Python)
- `/frontend` — Next.js 14 frontend (React, TypeScript, TailwindCSS)
- `/docs` — Shared documentation

## Backend (FastAPI)
- **Endpoints:**
  - `/` — Health check
  - `/coins/top` — Get top 5 coins from CoinGecko
- **Run locally:**
  1. `cd backend`
  2. `pip install -r requirements.txt`
  3. `uvicorn main:app --reload`
- **Docker:**
  1. `cd backend`
  2. `docker build -t ai-passive-bot-backend .`
  3. `docker run -p 8000:8000 ai-passive-bot-backend`

## Frontend (Next.js 14, TypeScript, TailwindCSS)
- **Pages:** `/dashboard`
- **Components:** `CoinTable`, `StatsCard`, dark/light mode toggle
- **Run locally:**
  1. `cd frontend`
  2. `npm install`
  3. `npm run dev`

## Agent Skeleton
- See `/backend/agents/pm_bot.py` for PMBot and CoinGeckoBot skeletons.

## API Connection
- Frontend fetches `/coins/top` from backend and displays live stats.

## Setup
1. Clone this repo
2. Follow backend and frontend instructions above

---

For more details, see `/docs`.
