# AI Therapist App

A web application that provides AI-powered therapy assistance using the Claude API. Built with React, TypeScript, and Express.

## Features

- Real-time chat interface with Claude AI
- Beautiful, responsive UI with Tailwind CSS
- Token usage tracking
- Secure API key management
- CORS-enabled Express backend

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite
  - Framer Motion
  - Zustand (State Management)

- Backend:
  - Express.js
  - Anthropic Claude API
  - CORS middleware

## Setup

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [repo-name]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Claude API key:
```env
VITE_CLAUDE_API_KEY=your-api-key-here
```

4. Start the development servers:

In one terminal, start the Express server:
```bash
node server.js
```

In another terminal, start the Vite development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser

## Production Deployment

The app is configured for deployment on:
- Frontend: Vercel
- Backend: Render

Make sure to set the following environment variables in your deployment platforms:
- `VITE_CLAUDE_API_KEY`: Your Claude API key
- `VITE_API_URL`: Your backend URL (for the frontend deployment)

## License

MIT
