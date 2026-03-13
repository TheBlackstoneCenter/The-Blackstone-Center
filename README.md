# The William E. Blackstone Center

---

## 🚨 Site says "live" but still getting a 404?

The live URL is `https://theblackstonecenter.github.io/The-Blackstone-Center/`

This happens because GitHub Pages is currently serving the **`main` branch**, which has no homepage yet. The homepage (`index.html`) is in this repository — you just need to point Pages at the right branch.

### Two-step fix

**Step 1 — merge (or wait for) this pull request.** That adds the `index.html` homepage to `main` and creates a `gh-pages` branch with all the site files built and ready.

**Step 2 — point Pages at the `gh-pages` branch:**

1. Go to **[Settings → Pages](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/settings/pages)**
2. Under **Build and deployment → Source** → keep **"Deploy from a branch"**
3. Change the branch dropdown from **`main`** to **`gh-pages`**
4. Folder stays **`/ (root)`**
5. Click **Save**

Within ~60 seconds `https://theblackstonecenter.github.io/The-Blackstone-Center/` will show the full site.

> **Why `gh-pages` and not `main`?** The deploy workflow in this repo automatically pushes the finished site files to the `gh-pages` branch whenever you push to `main`. That way `main` stays clean (source code) and `gh-pages` always has the latest built site.

---

## 👉 Works right now — no setup needed

### [Open the live site preview](https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/main/index.html)

Click it. It works.

[![Academic theme homepage — dark scholarly design with green/gold header](https://github.com/user-attachments/assets/1fdb4c76-43a7-43c1-87ef-abbcff85dc41)](https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/main/index.html)

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
