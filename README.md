This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **End-to-End Testing**: The end-to-end test is written using Cypress.
- **Project Structure**: The project includes contexts, hooks, components, and SVGs in JavaScript formats.
- **Location-based Weather**: If you allow location access, it shows you the current weather. Otherwise, it shows Hamburg's weather as default.
- **Custom API Fetching**: Due to issues with the `react-open-weather` package being outdated, a custom hook is created to fetch the API instead of using the package's API URL.
- **Demo**: Click [Clima Cast](https://clima-cast.monkwall.com/) to view the website in production.
- **TypeScript Imports**: Generic TypeScript imports are used, and a custom `*.d.ts` file is created for type definitions.
- **Themes**: The app supports both dark and light themes.
- **CI/CD and Hosting**: CI/CD and Hosting are done using Vercel.
- **Environment Variables**: Look at `.env.example` and create a `.env` file to provide your API key to make it work locally.
