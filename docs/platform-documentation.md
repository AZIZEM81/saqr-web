SAQR Web Platform

Technical Documentation (Current Implementation)

Author: AZIZEM81
Project: SAQR Drone Simulation Web Platform
Framework: Next.js (App Router)

⸻

1. Project Purpose

The SAQR web platform provides the front-end interface for the drone simulation ecosystem being developed by the company.

The website currently serves three main functions:
	1.	Present the SAQR product and concept.
	2.	Provide access to the drone simulation interface.
	3.	Display example metrics related to simulation activity.

At this stage the platform focuses on user experience, visual presentation, and system structure.
Backend services and data storage are not yet connected.

⸻

2. Technology Stack

The application is built using the following technologies.

Framework

Next.js (App Router)

Next.js manages routing, page rendering, and application structure.

⸻

Language

TypeScript

Used to provide type safety and better maintainability.

⸻

Styling

Tailwind CSS

Used for layout, spacing, typography, and component styling.

⸻

3D Rendering

React Three Fiber
Three.js
@react-three/drei

Used in the Technology page to render an interactive drone visualization.

⸻

Fonts

Google Fonts configured in the global layout:

Inter
JetBrains Mono


⸻

3. Project Structure

The project follows the Next.js App Router structure.

saqr-web
│
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── dashboard
│   │   └── page.tsx
│   │
│   ├── simulator
│   │   └── page.tsx
│   │
│   └── technology
│       └── page.tsx
│
├── components
│   ├── dashboard
│   │   ├── KpiGrid.tsx
│   │   ├── RunsChart.tsx
│   │   └── RecentSimTable.tsx
│   │
│   ├── home
│   │   ├── Hero.tsx
│   │   ├── WhySimulation.tsx
│   │   ├── Capabilities.tsx
│   │   ├── MoroccoBand.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Reveal.tsx
│   │
│   ├── simulator
│   │   ├── SimulatorHero.tsx
│   │   └── UnityFrame.tsx
│   │
│   ├── technology
│   │   └── DroneScene.tsx
│   │
│   ├── layout
│   │   └── BrandLogo.tsx
│   │
│   └── ui
│       └── AnimatedNumber.tsx
│
├── lib
│   └── data
│       └── mockStats.ts
│
└── public
    ├── brand
    │   └── logo-v2.png
    │
    ├── home
    │   ├── hero.jpg
    │   └── capability-*.jpg
    │
    └── simulator
        └── sim-logo.png


⸻

4. Global Layout

File:

app/layout.tsx

This file defines the global structure of the website.

It includes:
	•	Navigation bar
	•	Global font configuration
	•	Page container
	•	Footer section

Navigation Menu

The navigation menu provides access to three main sections:

Dashboard
Simulator
Technology

Each menu item routes to a different application page.

The navigation also uses the BrandLogo component.

⸻

5. Homepage

File:

app/page.tsx

The homepage introduces the SAQR platform.

It is composed of several components located in:

components/home

Components Used

Hero
Main introduction section.

WhySimulation
Explains the benefits of drone simulation.

Capabilities
Displays platform capabilities with images.

MoroccoBand
Highlights the Moroccan origin of the technology.

FinalCTA
Call-to-action section encouraging users to try the simulator.

Reveal
Used for simple reveal animations.

⸻

6. Dashboard Page

Route:

/dashboard

File:

app/dashboard/page.tsx

Purpose:

Display metrics related to drone simulation usage.

Components

KpiGrid
RunsChart
RecentSimTable


⸻

KpiGrid

Displays KPI cards.

Each card contains:
	•	metric label
	•	animated numeric value
	•	percentage delta
	•	progress bar indicator

The numeric animation is implemented using the AnimatedNumber component.

⸻

RunsChart

Displays a chart representing simulation runs.

This component currently uses mock data.

⸻

RecentSimTable

Displays a table of recent simulation sessions.

The content is currently static.

⸻

7. Simulator Page

Route:

/simulator

File:

app/simulator/page.tsx

Purpose:

Provide an interface where users can launch the drone simulation.

Components Used

SimulatorHero
UnityFrame


⸻

SimulatorHero

Introductory section for the simulator.

Features:
	•	SAQR simulator branding
	•	animated background
	•	grid effects
	•	floating logo animation

⸻

UnityFrame

Acts as the container for the simulator.

It is designed to embed a Unity WebGL build.

At the moment it functions as a placeholder frame where the simulation will run.

⸻

8. Technology Page

Route:

/technology

File:

app/technology/page.tsx

Purpose:

Demonstrate technology concepts behind the simulation.

⸻

DroneScene

File:

components/technology/DroneScene.tsx

This component renders a 3D drone model using WebGL.

Features:
	•	3D scene rendered using React Three Fiber
	•	drone model constructed using geometry primitives
	•	cursor-based interaction
	•	floating animation
	•	environmental lighting

Libraries used:

three
@react-three/fiber
@react-three/drei


⸻

9. UI Components

AnimatedNumber

File:

components/ui/AnimatedNumber.tsx

Purpose:

Animate numeric values when they appear in the dashboard.

Used in:

KpiGrid


⸻

BrandLogo

File:

components/layout/BrandLogo.tsx

Displays the SAQR logo and brand text.

The logo image is loaded from:

public/brand/logo-v2.png


⸻

10. Data Source

Dashboard data is currently stored in:

lib/data/mockStats.ts

This file contains mock KPI values used for demonstration purposes.

These values are used by:

KpiGrid
RunsChart
RecentSimTable


⸻

11. Static Assets

Static assets are located in the public directory.

Examples:

public/home/hero.jpg
public/home/capability-1.jpg
public/home/capability-2.jpg
public/home/capability-3.jpg
public/home/capability-4.jpg
public/home/capability-5.jpg
public/home/capability-6.jpg

public/brand/logo-v2.png
public/simulator/sim-logo.png

These files are loaded using the Next.js Image component.

⸻

12. Styling

Styling is implemented using Tailwind CSS utility classes.

Common visual elements include:
	•	grid backgrounds
	•	blurred gradient effects
	•	glass-style cards
	•	hover animations
	•	animated numeric displays

Primary colors used:

Background: #141612
Primary accent: #6B8E23
Secondary accent: #D4A84B
Primary text: #F5F3EF
Muted text: #9A958A


⸻

13. Development Setup

Install dependencies:

npm install

Run development server:

npm run dev

The application runs locally at:

http://localhost:3000


⸻

14. Current Status

The current implementation provides:
	•	structured website layout
	•	modular component architecture
	•	homepage presentation
	•	dashboard UI
	•	simulator interface container
	•	interactive technology visualization

