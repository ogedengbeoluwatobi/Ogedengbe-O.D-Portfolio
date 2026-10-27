# Ogedengbe Oluwatobi Daniel — Portfolio

```
client/   React + Vite + Tailwind frontend
server/   Express API (contact form → Gmail SMTP via Nodemailer)
```

## Setup
```bash
npm run install:all
cp server/.env.example server/.env   # add your Gmail App Password
npm run dev                          # client :5173, server :5000
```

## Deploy
- **Server** (Render): root `server`, build `npm install`, start `npm start`.
  Env: `CLIENT_URL` (your Vercel URL), `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`.
- **Client** (Vercel): root `client`, framework Vite, output `dist`.
  Env: `VITE_API_URL` (your Render URL).
