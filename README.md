# Cool App Name

A small Next.js app to let users search movies (TMDb), keep a personal watchlist, and rate movies. Built for CPRG‑306 (Web Development) as a final project.

Authors
- Ryan Richardson — ID: 000558719
- Cale Ryden — ID: 000677864
- Noah McClay — ID: 000955191

Course: CPRG‑306 — Instructor: Hamdy Ibrahim  
Date: Nov 26, 2025

## Table of contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment variables](#environment-variables)
  - [Local development](#local-development)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Demo
(Insert screenshots or link to a demo here)

## Features
- User authentication (Firebase Authentication)
- Movie search via TMDb API (title, poster, genres, release date, director where available)
- Personal watchlist: add/remove movies, mark watched/unwatched
- Movie details page with full metadata
- Responsive UI built with Tailwind CSS

## Tech stack
- Next.js (app router)
- React (server and client components)
- Tailwind CSS
- TMDb API
- Firebase (Authentication, Firestore)

## Architecture
High-level: Presentation (Next.js/React/Tailwind), Application (API client + business logic), Data (Firebase/Firestore). Consider adding architecture diagram(s) in `/docs` or inline images.

## Getting started

### Prerequisites
- Node 18+ (or the version your `package.json` expects)
- npm or yarn
- TMDb API key (register at https://www.themoviedb.org)
- Firebase project and config (for Authentication and Firestore)

### Environment variables
Create a `.env.local` file in project root with (example):

```
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here   # if calling TMDb client-side; prefer server-side call
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

Notes:
- Prefer calling TMDb via a server-side proxy route if you want to keep the key secret. If you must use it client-side, use `NEXT_PUBLIC_` prefix and accept that it will be visible in the browser.
- Put all Firebase secrets into server environment when used server-side.

### Local development
Install dependencies and run dev server:

```bash
npm install
npm run dev
# or
# yarn
# yarn dev
```

Notes:
- `package.json` contains a `dev` script (`next dev`) which starts the local Next.js dev server. There is no `build` or `start` script in `package.json` yet — consider adding:

```json
"build": "next build",
"start": "next start"
```

so you can run a production build with `npm run build` and `npm start`.

## Deployment
Deploy to Vercel (recommended for Next.js) or another provider. Make sure to add environment variables in the deployment settings (TMDb key, Firebase config).

## Project structure (top-level)
- `app/` — Next.js app router files (routes, layout)
- `app/page.js` — Home page
- `app/layout.js` — Root layout / providers
- `search/` — search UI & components
- `lib/` — API client utilities (create `lib/apiClient.js` if missing)
- `styles/` — Tailwind configuration / global styles
- `README.md` — this file

## Security notes
- Never commit API keys or Firebase service account files.
- Use server-side route handlers (`app/api/*`) for secret calls where possible.
- Configure Firestore rules to restrict user data to authenticated owners.

## Contributing
- Open an issue or submit a PR.
- Follow the repo’s code style and lint rules (add ESLint / Prettier if not present).

## License
Add a license here (e.g., MIT) or state project license.

## Acknowledgements
- TMDb (The Movie Database)
- Firebase
