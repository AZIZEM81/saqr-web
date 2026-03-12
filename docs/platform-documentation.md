# SAQR Web Platform
## Current Implementation Documentation
Author: AZIZEM81 Project: SAQR Drone Simulation Web Platform Framework: Next.js (App Router)


**Project:** SAQR Drone Simulation Web Platform  
**Framework:** Next.js + TypeScript

---

## 1. Purpose of the Web Platform

The current SAQR web platform provides the **front-end interface** for the drone simulation ecosystem.

At this stage, the website serves three main purposes:

- Present the SAQR product and concept
- Provide access to the simulation interface
- Display example dashboard metrics related to simulation activity

The current platform is a **front-end prototype** focused on user experience, structure, and presentation.

---

## 2. Technology Stack

### Framework
- Next.js (App Router)

### Language
- TypeScript

### Styling
- Tailwind CSS

### 3D Rendering
- Three.js
- React Three Fiber
- `@react-three/drei`

### Fonts
- Inter
- JetBrains Mono

---

## 3. Project Structure

The project follows the Next.js App Router structure.

```text
saqr-web
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── dashboard
│   │   └── page.tsx
│   ├── simulator
│   │   └── page.tsx
│   └── technology
│       └── page.tsx
├── components
│   ├── dashboard
│   │   ├── KpiGrid.tsx
│   │   ├── RunsChart.tsx
│   │   └── RecentSimTable.tsx
│   ├── home
│   │   ├── Hero.tsx
│   │   ├── WhySimulation.tsx
│   │   ├── Capabilities.tsx
│   │   ├── MoroccoBand.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Reveal.tsx
│   ├── simulator
│   │   ├── SimulatorHero.tsx
│   │   └── UnityFrame.tsx
│   ├── technology
│   │   └── DroneScene.tsx
│   ├── layout
│   │   └── BrandLogo.tsx
│   └── ui
│       └── AnimatedNumber.tsx
├── lib
│   └── data
│       └── mockStats.ts
├── public
│   ├── brand
│   │   └── logo-v2.png
│   ├── home
│   │   ├── hero.jpg
│   │   └── capability-*.jpg
│   └── simulator
│       └── sim-logo.png
├── README.md
├── package.json
└── tsconfig.json
````

---

## 4. Global Layout

**File:** `app/layout.tsx`

This file defines the global structure of the website.

### Includes

* Navigation bar
* Global font configuration
* Main page container
* Footer section

### Navigation Menu

The navigation menu provides access to:

* Dashboard
* Simulator
* Technology

The navigation bar also includes the `BrandLogo` component.

---

## 5. Homepage

**File:** `app/page.tsx`

The homepage introduces the SAQR platform.

### Components Used

* `Hero`
* `WhySimulation`
* `Capabilities`
* `MoroccoBand`
* `FinalCTA`
* `Reveal`

### Purpose

* Present the product
* Explain the role of simulation
* Show platform capabilities
* Guide users toward the simulator and dashboard

---

## 6. Dashboard Page

**Route:** `/dashboard`
**File:** `app/dashboard/page.tsx`

The dashboard displays example metrics related to simulation activity.

### Components Used

* `KpiGrid`
* `RunsChart`
* `RecentSimTable`

### KpiGrid

Displays KPI cards with:

* metric labels
* animated numeric values
* delta percentages
* progress indicators

### RunsChart

Displays simulation activity as a chart.

### RecentSimTable

Displays example recent simulation sessions in table form.

### Data Source

The dashboard currently uses mock data from:

```text
lib/data/mockStats.ts
```

---

## 7. Simulator Page

**Route:** `/simulator`
**File:** `app/simulator/page.tsx`

The simulator page acts as the access point for the simulation environment.

### Components Used

* `SimulatorHero`
* `UnityFrame`

### SimulatorHero

This section presents the simulator visually and includes:

* simulator title and description
* animated background effects
* floating SAQR branding
* launch call-to-action

### UnityFrame

This component acts as the current container for the simulator area.

At this stage, it is a placeholder for the future Unity WebGL build.

---

## 8. Technology Page

**Route:** `/technology`
**File:** `app/technology/page.tsx`

The Technology page demonstrates the technical side of the platform.

### Component Used

* `DroneScene`

### DroneScene

This component renders an interactive 3D drone visualization using WebGL.

### Features

* 3D drone model built from geometry primitives
* floating animation
* cursor-based movement
* environment lighting
* simulation-themed visual presentation

This page is used to communicate the technology and simulation concept visually.

---

## 9. Reusable UI Components

### BrandLogo

**File:** `components/layout/BrandLogo.tsx`

Displays the SAQR logo and brand text.

Logo source:

```text
public/brand/logo-v2.png
```

---

### AnimatedNumber

**File:** `components/ui/AnimatedNumber.tsx`

Animates numeric values in the dashboard.

Used in:

* `KpiGrid`

---

## 10. Data Layer

The current application uses a mock data file:

**File:** `lib/data/mockStats.ts`

This file provides the values currently used by:

* `KpiGrid`
* `RunsChart`
* `RecentSimTable`

At this stage, no external API or database is connected.

---

## 11. Static Assets

Static assets are stored in the `public` directory.

### Examples

* `public/brand/logo-v2.png`
* `public/home/hero.jpg`
* `public/home/capability-1.jpg`
* `public/home/capability-2.jpg`
* `public/home/capability-3.jpg`
* `public/home/capability-4.jpg`
* `public/home/capability-5.jpg`
* `public/home/capability-6.jpg`
* `public/simulator/sim-logo.png`

These assets are loaded using the Next.js `Image` component.

---

## 12. Styling System

The application uses Tailwind CSS utility classes for styling.

### Common Visual Patterns

* grid backgrounds
* gradient accents
* glow effects
* blurred overlays
* glass-style cards
* hover transitions
* animated number display

### Main Color Palette

* Background: `#141612`
* Primary accent: `#6B8E23`
* Secondary accent: `#D4A84B`
* Main text: `#F5F3EF`
* Muted text: `#9A958A`

These colors were selected to create an agriculture-focused visual identity with Moroccan-inspired tones.

---

## 13. Development Setup

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Local URL

```text
http://localhost:3000
```

---

## 14. Current Status

The current implementation provides:

* structured website layout
* modular component architecture
* homepage presentation
* dashboard UI
* simulator interface container
* interactive technology visualization

The platform currently functions as a **front-end prototype** of the SAQR system.

---

## 15. Summary

The current SAQR implementation establishes the main web structure of the platform.

It already includes:

* product presentation
* a simulator entry page
* a dashboard interface
* an interactive technology page
* reusable UI and layout components

The current focus of the implementation is the **front-end platform experience**.

````

---

# `docs/system-architecture.md`

```md
# SAQR Platform
## System Architecture Overview

**Project:** SAQR Drone Simulation Platform

---

## 1. Architecture Overview

The current SAQR platform follows a **frontend-first architecture** built with Next.js App Router.

At the current stage, the system is organized into three main layers:

- User Interface Layer
- Application Component Layer
- Local Mock Data Layer

The system does **not yet include a backend or database connection**.

---

## 2. High-Level Architecture

```text
User Browser
    │
    ▼
Next.js Application
    │
    ├── Home Page
    ├── Dashboard Page
    ├── Simulator Page
    └── Technology Page
            │
            ▼
      Reusable Components
            │
            ▼
        Mock Data File
````

---

## 3. Frontend Routing Structure

The application uses the Next.js App Router.

### Current Routes

* `/`
* `/dashboard`
* `/simulator`
* `/technology`

Each route corresponds to a page inside the `app` directory.

```text
app
├── page.tsx
├── dashboard/page.tsx
├── simulator/page.tsx
└── technology/page.tsx
```

---

## 4. Component Architecture

The application uses feature-based component grouping.

```text
components
├── home
├── dashboard
├── simulator
├── technology
├── layout
└── ui
```

### Home Components

* `Hero`
* `WhySimulation`
* `Capabilities`
* `MoroccoBand`
* `FinalCTA`
* `Reveal`

### Dashboard Components

* `KpiGrid`
* `RunsChart`
* `RecentSimTable`

### Simulator Components

* `SimulatorHero`
* `UnityFrame`

### Technology Components

* `DroneScene`

### Shared Components

* `BrandLogo`
* `AnimatedNumber`

---

## 5. Page-to-Component Mapping

### Home Page

```text
app/page.tsx
    ├── Hero
    ├── WhySimulation
    ├── Capabilities
    ├── MoroccoBand
    └── FinalCTA
```

### Dashboard Page

```text
app/dashboard/page.tsx
    ├── KpiGrid
    ├── RunsChart
    └── RecentSimTable
```

### Simulator Page

```text
app/simulator/page.tsx
    ├── SimulatorHero
    └── UnityFrame
```

### Technology Page

```text
app/technology/page.tsx
    └── DroneScene
```

---

## 6. Layout Architecture

The global site structure is managed by:

```text
app/layout.tsx
```

### Responsibilities

* font configuration
* navigation
* footer
* wrapping all pages

### Related component

* `components/layout/BrandLogo.tsx`

---

## 7. Dashboard Data Flow

The dashboard currently uses mock data only.

### Source

```text
lib/data/mockStats.ts
```

### Flow

```text
mockStats.ts
    │
    ├── KpiGrid
    ├── RunsChart
    └── RecentSimTable
```

### KPI Rendering Flow

```text
mockStats.ts
    │
    ▼
KpiGrid.tsx
    │
    ▼
AnimatedNumber.tsx
```

This means dashboard content is fully front-end driven at the current stage.

---

## 8. Simulator Page Architecture

The simulator page is structured in two layers:

### 1. Presentation Layer

* `SimulatorHero`

### 2. Simulation Container Layer

* `UnityFrame`

### Current Flow

```text
Simulator Page
    │
    ├── SimulatorHero
    │      ├── branding
    │      ├── launch CTA
    │      └── animated visuals
    │
    └── UnityFrame
           └── simulator placeholder
```

At the moment, `UnityFrame` acts as the placeholder container where the simulator will later be embedded.

---

## 9. Technology Page Architecture

The technology page uses an interactive 3D rendering component.

### Flow

```text
Technology Page
    │
    ▼
DroneScene.tsx
    │
    ├── React Three Fiber
    ├── Three.js
    └── Drei helpers
```

### Current Behavior

The component renders a drone model that:

* floats
* reacts to cursor movement
* uses 3D scene lighting
* demonstrates simulation-oriented visuals

---

## 10. Static Asset Architecture

Static assets are stored in the `public` directory.

```text
public
├── brand
│   └── logo-v2.png
├── home
│   ├── hero.jpg
│   └── capability-*.jpg
└── simulator
    └── sim-logo.png
```

These assets are referenced by page and component files using Next.js `Image`.

---

## 11. Styling Architecture

Styling is built with Tailwind CSS.

### Main visual system includes

* responsive layout utilities
* gradient backgrounds
* glow effects
* glass-style cards
* grid patterns
* hover transitions

### Main theme colors

* `#141612` background
* `#6B8E23` primary green accent
* `#D4A84B` secondary amber accent
* `#F5F3EF` bright text
* `#9A958A` muted text

---

## 12. Rendering Model

The application uses both server and client rendering depending on the component.

### Examples of interactive/client-side components

* `AnimatedNumber`
* `DroneScene`

These components require client-side behavior because they rely on:

* animations
* browser APIs
* WebGL rendering
* user interaction

---

## 13. Current Limitations

The current implementation does **not** include:

* backend API
* database
* authentication
* user session storage
* real simulator result ingestion

All dynamic information currently shown in the UI is driven by mock data.

---

## 14. Summary

The current architecture already provides:

* a modular page structure
* reusable component organization
* visual separation of product areas
* a dashboard layer
* a simulator container layer
* a 3D technology demonstration layer

The current implementation is best described as a **front-end architecture prototype of the SAQR platform**.