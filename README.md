# Fun Bunny Games 🐰

A playful, kid-friendly web app showcasing 8 easy bunny-themed party games — inspired by the infographic design with pastel colors, rounded cards, and cute illustrations.

## Features

- **8 game cards** with name, supplies, instructions, and custom SVG illustrations
- **Random Game** button with a fun picker animation
- **Party Mode** checklist to track completed games (saved in localStorage)
- **Mobile-friendly** responsive layout (1 → 2 → 4 column grid)

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   ├── GameIllustration.tsx
│   ├── Header.tsx
│   ├── PartyModeChecklist.tsx
│   ├── RandomGameButton.tsx
│   ├── TipFooter.tsx
│   └── gameStyles.ts
├── data/
│   └── games.ts
├── hooks/
│   └── usePartyMode.ts
├── types/
│   └── game.ts
├── App.tsx
├── main.tsx
└── index.css
```
