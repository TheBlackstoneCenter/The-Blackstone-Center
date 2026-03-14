# The William E. Blackstone Center

The live site is at **<https://theblackstonecenter.github.io/The-Blackstone-Center/>**.

---

## What's in this repository

| File / Folder | Description |
|---|---|
| `index.html` | Homepage — mission, vision, navigation, links to mockups and PDF |
| `404.html` | Custom 404 error page |
| `content/_index.md` | Hugo source content for the homepage |
| `config.toml` | Hugo site configuration |
| `mockups/academic-mockup.html` | Academic theme design mockup |
| `mockups/papermod-mockup.html` | PaperMod theme design mockup |
| `mockups/index.html` | Side-by-side theme comparison page |
| `Rood Emerita CV Winter 2026.pdf` | Uploaded CV document |
| `.github/workflows/pages.yml` | GitHub Actions workflow — deploys site on every push to `main` |

---

## How the site is deployed

Every push to `main` triggers the **Deploy to GitHub Pages** workflow (`.github/workflows/pages.yml`).  
The workflow copies the repository root to the `gh-pages` branch, which GitHub Pages serves automatically.
