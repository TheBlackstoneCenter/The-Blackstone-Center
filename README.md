# The William E. Blackstone Center

## Fix the 404 — merge this pull request

GitHub Pages is live at `https://theblackstonecenter.github.io/The-Blackstone-Center/` but shows a 404 because `main` currently has no root `index.html`. This pull request adds one.

**To fix the 404:**

1. Go to the **[Pull Requests tab](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/pulls)**
2. Open the pull request titled **"Fix live 404…"**
3. Click **"Merge pull request"** → **"Confirm merge"**

GitHub Pages will re-deploy automatically within ~60 seconds and the site will be live.

---

## What's in this repository

| File / Folder | Description |
|---|---|
| `index.html` | Homepage — mission, vision, navigation, links to mockups and PDF |
| `content/_index.md` | Hugo source content for the homepage |
| `config.toml` | Hugo site configuration |
| `themes/layouts/partials/header.html` | Site navigation template |
| `themes/layouts/partials/footer.html` | Site footer template |
| `mockups/academic-mockup.html` | Academic theme design mockup |
| `mockups/papermod-mockup.html` | PaperMod theme design mockup |
| `Rood Emerita CV Winter 2026.pdf` | Uploaded CV document |
| `.github/workflows/pages.yml` | GitHub Actions workflow — deploys site on every push to `main` |
