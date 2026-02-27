# AGENTS.md

## Cursor Cloud specific instructions

### Overview

SCTR Ranking Tracker — a single-service Python Flask app that scrapes StockCharts SCTR rankings, enriches them via yfinance, and displays them in a web dashboard on port 5000. No database; data is persisted as `sctr_data.json`.

### Running the app

```bash
python3 app.py
```

Serves on `http://localhost:5000`. Use `python3` (not `python`) — the system default is `python3`.

### Key API endpoints

- `GET /` — dashboard UI
- `GET /api/data` — JSON stock data
- `POST /api/update` — trigger background scrape + yfinance enrichment
- `POST /api/export` — export to Google Sheets (requires `google_credentials.json`)
- `GET /api/stock/<symbol>` — individual stock detail via yfinance
- `GET /api/status` — check if an update is in progress

### Notes

- There is no test suite, linter config, or build step in this project. The repo has no `Makefile`, no `.flake8`, no `pyproject.toml`, and no `tests/` directory.
- The scraper tries three methods in order: Jina AI Reader API, Playwright (if installed), then plain `requests` + BeautifulSoup. The third fallback works without extra system dependencies.
- Google Sheets export requires a `google_credentials.json` service account file — the app runs fine without it; only `/api/export` will fail.
- The `sctr_data.json` file ships with seed data so the dashboard works immediately without triggering a scrape.
- The scheduled daily scrape runs at 22:00 UTC (06:00 Taiwan time) via the `schedule` library in a daemon thread.
