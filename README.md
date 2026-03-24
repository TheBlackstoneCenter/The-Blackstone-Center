# The Blackstone Center

A professional research center website built with **Next.js**, **React**, and **Tailwind CSS**.

## Project Structure

```
the-blackstone-center/
├── public/
│   └── images/          # Place logo.png and other images here
├── src/
│   ├── app/
│   │   ├── layout.js    # Root layout (metadata, HTML shell)
│   │   ├── page.js      # Home page
│   │   └── globals.css  # Global styles + Tailwind imports
│   ├── components/
│   │   ├── Header.js    # Site header with logo and navigation
│   │   ├── Navigation.js # Main navigation (desktop + mobile)
│   │   ├── Footer.js    # Site footer
│   │   └── Layout.js    # Page layout wrapper
│   ├── styles/
│   │   └── variables.css # CSS custom properties (colors, spacing)
│   └── utils/
│       └── constants.js  # Site-wide constants and nav links
├── .env.local            # Environment variables (not committed)
├── jsconfig.json         # JS path aliases (@/ → src/)
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
└── tailwind.config.js    # Tailwind CSS with brand colors
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add the logo:**  
   Place `logo.png` in `public/images/`.

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Technology Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework (App Router) |
| [React 18](https://react.dev/) | UI components |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| JavaScript | No TypeScript — beginner-friendly |

## Brand Colors

| Name | Hex | Usage |
|---|---|---|
| Primary Green | `#4a7c59` | Buttons, links, accents |
| Cream / Ivory | `#f5f1e8` | Page background |
| White | `#ffffff` | Cards, panels |
| Dark Navy | `#1a2f4a` | Header, footer, headings |
| Gold / Amber | `#d4a574` | Hover states, highlights |

## Site Structure

### Main Level — The Blackstone Center
- **Home** — Center overview and mission
- **About** — William E. Blackstone, The Blackstone Forest, The Center, About Us, Paul W. Rood Bio, Judith Mendelson Rood Bio
- **Publications** — Scholarly works
- **Blog** — Articles and essays

### Sub-section — Beauty for Ashes
- Home · About the Book · Photos · Endorsements · Reviews  
- Table of Contents · Excerpt · About the Author · Blog · Contact the Author

---

## What's in this repository

| File / Folder | Description |
|---|---|
| `Rood Emerita CV Winter 2026.pdf` | Uploaded CV document |
