# Pirlo TV — Quick Start (English)

## Why http://localhost:3000 did not work

The site only loads when the **development server is running**.  
Opening the URL in a browser without `npm run dev` (or `npm start`) will fail.

---

## Run locally (recommended)

### 1. Open a terminal in the project folder

```text
e:\Cursor Projects\Pirlo TV
```

### 2. Install dependencies (first time only)

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Wait until you see:

```text
✓ Ready
- Local: http://localhost:3000
```

### 4. Open in your browser

[http://localhost:3000](http://localhost:3000)

Keep the terminal **open** while you use the site. Press `Ctrl + C` to stop the server.

---

## Production mode (after build)

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000) again.

---

## Optional: environment file

```bash
copy .env.example .env.local
```

Edit `.env.local` if needed:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Troubleshooting

| Problem | Fix |
|--------|-----|
| **White page / no styles** | Hard refresh: `Ctrl + Shift + R`. Then delete `.next` and run `npm run dev` again |
| **Connection refused** | Run `npm run dev` in the project folder |
| **Port 3000 in use** | Run `npm run dev -- -p 3001` and open http://localhost:3001 |
| **`npm` not found** | Install [Node.js LTS](https://nodejs.org/) (v18+) and restart the terminal |
| **Blank page / errors** | Delete `.next` folder, then `npm run dev` again |
| **Wrong folder** | Commands must run inside `e:\Cursor Projects\Pirlo TV` (where `package.json` is) |

### Fix broken CSS (PowerShell)

```powershell
cd "e:\Cursor Projects\Pirlo TV"
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

Then open http://localhost:3000 and press **Ctrl + Shift + R**.

---

## Main URLs

| Page | URL |
|------|-----|
| Home | http://localhost:3000 |
| Today's matches | http://localhost:3000/partidos-hoy |
| Schedule | http://localhost:3000/schedule/hoy |
| Leagues | http://localhost:3000/ligas |
| World Cup 2026 | http://localhost:3000/mundial-2026 |

---

## Deploy later

1. Push code to GitHub  
2. Import project on [Vercel](https://vercel.com)  
3. Set `NEXT_PUBLIC_SITE_URL=https://pirlotvfutbol.com`  
4. Point Cloudflare DNS to Vercel  
