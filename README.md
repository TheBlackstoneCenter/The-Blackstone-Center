# The William E. Blackstone Center

---

## 🚨 Fix the 404 — one action required

**GitHub Pages is live and pointing at `main`, but `main` has no homepage yet.**
The homepage (`index.html`) is in this pull request, waiting to be merged.

### ✅ One click fixes it: merge this PR

1. Open the **[Pull Requests tab](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/pulls)** of this repository
2. Click the open pull request titled **"Fix live 404…"**
3. Click the green **"Merge pull request"** button → **"Confirm merge"**

That's it. GitHub Pages will automatically re-deploy from the updated `main` branch within ~60 seconds, and `https://theblackstonecenter.github.io/The-Blackstone-Center/` will show the site.

> **No settings changes are needed.** Pages is already configured to serve from `main`. Merging adds the homepage to `main` and Pages picks it up automatically.

---

## 👉 Works right now — no merge needed

### [Open the live site preview](https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/copilot/preview-themes-for-mockup/index.html)

Click it. It works immediately.

[![Academic theme homepage — dark scholarly design with green/gold header](https://github.com/user-attachments/assets/1fdb4c76-43a7-43c1-87ef-abbcff85dc41)](https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/copilot/preview-themes-for-mockup/index.html)

---

## 🎨 Theme: Academic ✅

The **Academic** theme has been selected and applied. The site homepage (`index.html`) uses the dark scholarly design — dark navy background, green/gold header, team profiles, and publications layout.

| Theme | Style | Status |
|-------|-------|--------|
| PaperMod | Clean, minimal, fast | Not selected |
| **Academic** | **Feature-rich, structured** | ✅ **Chosen** |

To complete the full Hugo-powered build, install the Academic theme as a submodule:

```bash
git submodule add https://github.com/wowchemy/starter-hugo-academic themes/academic
```

Then run `hugo server -D` locally to preview, and push to deploy via GitHub Pages.

---

## 🤖 What Is a "Premium Request"?

When you use **GitHub Copilot**, there are two kinds of AI requests:

| Request Type | What it uses | When it happens |
|---|---|---|
| **Standard request** | Copilot's default (lighter) models | Everyday completions, chat with the standard model |
| **Premium request** | More powerful AI models (e.g. GPT-4o, Claude Sonnet 3.7) | When you ask Copilot to do complex, multi-step tasks — like building the mockups for this site |

Premium requests draw from a monthly quota that comes with your Copilot plan. If you see a notice about premium requests, it means Copilot is using (or has used) one of the more capable models on your behalf.  

You can check your remaining premium quota at **<https://github.com/settings/copilot>**.

---

## 🛠 Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version recommended)
- Git

### Run locally

```bash
git clone --recurse-submodules https://github.com/TheBlackstoneCenter/The-Blackstone-Center.git
cd The-Blackstone-Center
hugo server -D
```

Open <http://localhost:1313> in your browser.

### Deploy

Push to the `main` branch. GitHub Pages will build and publish the site automatically once configured.

---

## 📁 Repository Structure

```
The-Blackstone-Center/
├── index.html           # Homepage (Academic theme, served by GitHub Pages)
├── 404.html             # Custom 404 page (auto-redirects to preview while Pages is being set up)
├── config.toml          # Hugo site configuration (theme = "academic")
├── content/             # Site content in Markdown
│   └── _index.md        # Home page content
├── layouts/             # Hugo template overrides
│   └── partials/        # header.html, footer.html
├── mockups/             # Static HTML theme mockups for preview
│   ├── index.html       # Interactive mockup viewer
│   ├── papermod-mockup.html
│   └── academic-mockup.html
└── .github/workflows/
    └── pages.yml        # Auto-deploy to GitHub Pages on push to main
```
