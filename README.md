# Abdelaziz Ait-Haddou — Executive Engineering Portfolio

Official portfolio and systems showcase for **Abdelaziz Ait-Haddou**, a 0-to-1 Full-Stack Developer & CTO with **7,130+ commits** and **100+ clients**, building software from **React, Vite, Node.js, tRPC, and Python 3.14** to **Unity, Three.js, Blender, Arduino, ESP32, OpenSCAD, and 3D Printing**.

🌐 **Production URL:** [https://abdelaziz-aithaddou-portfolio.vercel.app/](https://abdelaziz-aithaddou-portfolio.vercel.app/)  
📄 **Curriculum Vitae:** [https://abdelaziz-aithaddou-portfolio.vercel.app/cv](https://abdelaziz-aithaddou-portfolio.vercel.app/cv)  
🐙 **GitHub:** [https://github.com/ab99-c](https://github.com/ab99-c)  
💼 **LinkedIn:** [https://www.linkedin.com/in/aithaddou-abdelaziz-806753424](https://www.linkedin.com/in/aithaddou-abdelaziz-806753424)

---

## Key Features

1. **Executive Bento Grid Design**: High-performance dark aesthetic with floating 3D geometry, interactive hardware showcase, and responsive layout across desktop and mobile.
2. **Interactive Case Studies (Problem ➔ Solution ➔ Architecture ➔ Impact)**: Deep-dive dialogs for key platforms (Adrar Tourisme, 3D Virtual Library, ADRAR AI NANO Wearable, Dhikra, Jarida Flipbook, Qahwati, NASSIRI ERP).
3. **Backend & Hardware Bridge Architecture**: Dedicated architectural blueprints documenting full-stack type safety (tRPC, PostgreSQL), IoT/sensor bridges (ESP32, BLE/WiFi, Python FastAPI), and offline-first vector search (React Native, SQLite RAG).
4. **Zero-Touch Live Metrics Sync**: Serverless API (`/api/stats`) automatically fetches fresh GitHub repository metadata and commit milestones with Vercel Edge caching and offline fallbacks.
5. **International Hiring & Relocation Ready**: Tailored for US, EU, and global remote opportunities, contract engineering, senior full-stack roles, and visa sponsorship. English primary with seamless `[عربي]` toggle.

---

## Serverless API Endpoints

- **`GET /api/stats`** (or `/api/github-stats`):
  - Fetches live account statistics and repository metrics from GitHub API for `ab99-c`.
  - Headers: `Cache-Control: s-maxage=3600, stale-while-revalidate=86400`
  - Fallback: Pre-baked verified metrics (`7,130+ commits`, `100+ clients`, `7 public repos`) ensuring 0 downtime or rate-limit failures.

---

## Environment Variables (Optional for Vercel)

| Variable | Description | Default |
| :--- | :--- | :--- |
| `GITHUB_TOKEN` | Optional GitHub Personal Access Token to avoid unauthenticated API rate limits. | None (Gracefully falls back to cached verified metrics) |

---

## Local Development

Serve the root directory with any static server:

```bash
# Python
python -m http.server 4173

# Or with Node
npx serve .
```

Open `http://localhost:4173` in your browser.
