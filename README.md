# SpaceX Mission Explorer

Angular application for browsing SpaceX launches with REST API data, year filtering, and mission details.

## App Description

This project displays SpaceX launch missions in a responsive Angular interface. Users can browse the full launch list, filter launches by year, and open a mission details page for more information. The app uses the SpaceX REST API and Angular Material for the UI.

## Features Implemented

- Mission list loaded from the SpaceX REST API
- Filter launches by launch year
- Mission details page for each launch
- Mission patch, rocket name, rocket type, and mission details display
- External links to article, Wikipedia, and video where available
- Angular Material components for cards, buttons, form fields, and loading states
- Client-side routing for mission details
- Responsive layout for desktop and mobile

## Instructions To Run The Project

### Local Development

```bash
npm install
npm start
```

Open the app in your browser at `http://localhost:4200`.

### Build For Production

```bash
npm run build
```

### Run Tests

```bash
npm test -- --watch=false
```

## Deployment

The app is configured for Vercel deployment with the Angular browser output directory.

## Tech Stack

- Angular 21
- Angular Router
- Angular Material
- SpaceX REST API
