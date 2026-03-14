# The William E. Blackstone Center

**Live site → <https://theblackstonecenter.github.io/The-Blackstone-Center/>**

---

## ⚠️ Before you leave — two steps to do right now

> Do these before closing your browser so nothing is lost.

### Step 1 — Close the "delete everything" pull request

A draft pull request titled **"Remove GitHub Pages site and deployment workflow"** (PR #2) is currently open.  
**If it is ever accidentally merged, all site files will be deleted.**

1. Go to **[Pull Requests](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/pulls)**
2. Click **"Remove GitHub Pages site and deployment workflow"** (PR #2)
3. Scroll to the bottom → click **"Close pull request"**

### Step 2 — Merge this cleanup pull request into `main`

Pull request **#3 — "Restore repository to clean working state"** contains today's final housekeeping (fixed deployment workflow, updated README, added `.gitignore`).  
Merging it locks those changes into `main` permanently.

1. Go to **[Pull Requests](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/pulls)**
2. Click **"Restore repository to clean working state"** (PR #3)
3. Click **"Merge pull request"** → **"Confirm merge"**

---

## Everything saved in this repository

All work from today is committed to the `main` branch. Nothing will disappear while you are away.

| File / Folder | What it is | Status |
|---|---|---|
| `index.html` | Full homepage (green/gold design, nav, mission, vision, mockup links, footer) | ✅ Saved |
| `404.html` | Custom "page not found" page | ✅ Saved |
| `content/_index.md` | Hugo source text for the homepage | ✅ Saved |
| `config.toml` | Hugo site configuration (title, baseURL, theme) | ✅ Saved |
| `mockups/academic-mockup.html` | Academic theme design mockup | ✅ Saved |
| `mockups/papermod-mockup.html` | PaperMod theme design mockup | ✅ Saved |
| `mockups/index.html` | Side-by-side theme comparison page | ✅ Saved |
| `Rood Emerita CV Winter 2026.pdf` | Uploaded CV document | ✅ Saved |
| `.github/workflows/pages.yml` | Auto-deploy to GitHub Pages on every push to `main` | ✅ Saved |
| `.gitignore` | Keeps build artifacts out of the repository | ✅ Saved |

---

## When you come back next week

1. Go to **<https://github.com/TheBlackstoneCenter/The-Blackstone-Center>**
2. Everything will be exactly as you left it in the `main` branch
3. Open a new Copilot session and say what you'd like to work on next — Copilot will read this README and pick up right where you left off

### Suggested next steps (pick one when you return)

- **Add real content** — replace the placeholder team names in `mockups/academic-mockup.html` with actual Blackstone Center people
- **Add more pages** — create `about.html`, `books.html`, `articles.html`, etc. to fill in the nav links
- **Upload more documents** — add books, articles, or media files to the repository
- **Choose a theme** — decide between the Academic style (dark navy/gold) or PaperMod style and build the full site around it

---

## How the site is deployed

Every push to `main` automatically triggers the **Deploy to GitHub Pages** workflow.  
The workflow copies all files to the `gh-pages` branch, which GitHub Pages serves at the live URL above.  
Changes are usually live within 60 seconds of merging.
