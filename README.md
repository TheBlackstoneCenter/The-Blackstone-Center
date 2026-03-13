# The William E. Blackstone Center

---

## ✅ Your live link — works right now, no setup needed

### 👉 [Open your website mockups](https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/main/mockups/index.html)

Click it. It works. Nothing to install or configure.

[![Mockup viewer showing PaperMod and Academic themes side by side](https://github.com/user-attachments/assets/1fdb4c76-43a7-43c1-87ef-abbcff85dc41)](https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/main/mockups/index.html)

The viewer shows both theme options — **PaperMod** (green/gold, clean and bold) and **Academic** (dark navy, scholarly feel — ✅ **chosen**) — with buttons to toggle or compare side by side.

---

## ❓ Why does `https://theblackstonecenter.github.io/…` give a 404?

That URL uses **GitHub Pages**, which needs to be switched on once in your repository settings. The deploy workflow is ready and waiting — it just needs one click to unlock:

1. Go to **[Settings → Pages](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/settings/pages)** for this repository
2. Under **"Build and deployment → Source"**, select **"GitHub Actions"** from the dropdown
3. Click **Save**

GitHub will run the deploy automatically. Within about 60 seconds the URL `https://theblackstonecenter.github.io/The-Blackstone-Center/mockups/` will be live.

> **Nothing else is broken.** The workflow file is correct, the mockup files are correct. The only missing piece is that one Settings toggle.

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
├── config.toml          # Hugo site configuration (set your theme here)
├── content/             # Site content in Markdown
│   └── _index.md        # Home page content
├── mockups/             # Static HTML theme mockups for preview
│   ├── index.html       # Interactive mockup viewer ← start here
│   ├── papermod-mockup.html
│   └── academic-mockup.html
└── themes/              # Hugo theme(s) (added as Git submodules)
```
