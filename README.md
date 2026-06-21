# Jurassic Vault — KRONOS

![Jurassic Vault Telemetry Deck](https://res.cloudinary.com/dkev7ein3/image/upload/v1782022939/Thumbnail_nundw9.jpg)

<p align="center">
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://motion.dev/"><img src="https://img.shields.io/badge/Motion-12.x-black?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
</p>

An immersive, high-fidelity biological chronicle of the Mesozoic era. Styled with a curved liquid glassmorphic aesthetic, the **Jurassic Vault** acts as a secure telemetry registry containing 1:1 ratio visual cataloging, interactive bio-scans, and a continuous chronological ledger of deep time.

Live Site Preview: [jurassic-vault.vercel.app](https://jurassic-vault.vercel.app)

---

## 🦖 Core Features & Visual Systems

*   **Immersive Videosphere Hero**: Responsive display typography laid over high-impact central videosphere assets with subtle ambient masking.
*   **The Species Ledger**: High-fidelity carousel cataloging with custom curved 1:1 image containers. Optimizes page painting by eager-loading priority viewport cards and asynchronously preloading remaining models into the browser cache.
*   **Prehistoric Ledger**: A responsive, 3-column vertical infinite scrolling telemetry marquee. Features a customized `hover-pause` trigger allowing users to pause the timeline ledger seamlessly.
*   **Liquid Glassmorphic UI**: High-end styling elements combining light frosted backdrops (`backdrop-filter: blur`), linear border highlights, and hover-triggered radial-glow masks.
*   **Dynamic Custom Scroll Navigation**: Scroll triggers integrated into the navigation bar dynamically calculate targets based on section identifiers.

---

## 🛠️ Technology Stack

*   **Framework**: [Vite](https://vitejs.dev/) (React SPA bundle compilation)
*   **Core Library**: [React 18](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**: [Motion / Framer Motion](https://motion.dev/)
*   **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Repository Structure

```text
Jurassic-Vault/
├── public/                 # Static assets (dinosaur renders, SVG logos, metadata thumbnail)
├── src/
│   ├── components/         # Shared visual components
│   │   ├── Navbar.tsx      # Responsive header with liquid-glass overlay menu
│   │   ├── Hero.tsx        # High-impact video canvas with interactive scroll down triggers
│   │   ├── SpeciesArchive.tsx # Carousel layout with warm-cache asset preloader and biometric modal
│   │   ├── Discoveries.tsx  # 3-column vertical infinite marquee ledgers
│   │   └── Footer.tsx      # Centered footer with dynamic positioning overlay
│   ├── data/               # Pure data models and static lists
│   │   ├── dinosaurs.ts    # Dinosaur facts and high-res asset coordinates
│   │   └── discoveries.ts  # Prehistoric chronologies (#01 to #25) mapped to Lucide key markers
│   ├── App.tsx             # Main shell rendering layers & smooth-scroll navigation engine
│   ├── index.css           # Styling system configurations, liquid-glass classes, and animation keyframes
│   ├── main.tsx            # DOM mounting target
│   └── vite-env.d.ts       # Global build type declarations
├── index.html              # Entry shell with configured SEO, OG, and Twitter card metadata
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # Global compiler configurations
└── vite.config.ts          # Vite compiler and tailwind integration configuration
```

---

## 🚀 Installation & Local Development

Follow these steps to run the telemetry deck locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed.

### 2. Clone the Repository
```bash
git clone https://github.com/panduthegang/Jurassic-Vault.git
cd Jurassic-Vault
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
Spins up a local server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
Compiles optimization bundles under `dist/`:
```bash
npm run build
```

---

## 📄 License

Distributed under the MIT License. See [LICENSE](https://github.com/panduthegang/Jurassic-Vault/blob/main/LICENSE) for more details.

---

<p align="center">
  Crafted with 🖤 by <a href="https://github.com/panduthegang">Harsh Rathod</a> &bull; <a href="https://harshrathod-portfolio.vercel.app/">Portfolio</a>
</p>
