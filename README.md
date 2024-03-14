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

=> The end to end test is written using cypress.
=> The project has contexts, hooks, components, svgs in js formats.
=> If you are allowing location access it shows you current location wheather, if not it shows Hamburg's Whether
=> The react-open-weather package has so many issues, it is outdated. but due to time constraint I used it. So I created a custom hook to fetch api instead of using from package as package api url is not uptodate.
=> Click here to look at the website without running in your local [Clima Cast](https://clima-cast.monkwall.com/)
=> I used generic typescript imports also, created custom \*.d.ts file also.
=> I used dark and Light themw
=> CI/CD and hosting is done using vercel
=> Look at .env.example and create a .env file and provide your key to make it local workable
