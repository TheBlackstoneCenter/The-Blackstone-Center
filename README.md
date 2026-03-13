# The William E. Blackstone Center

Website source for **The Blackstone Center** — a center dedicated to exploring the human experience through literature and community engagement.

---

## 👁️ View the Mockups Right Now

### ⚡ Instant live preview (no setup needed)

Click the link below — it works immediately, directly from GitHub:

> **[Open Mockup Viewer — Live Preview](https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/copilot/preview-themes-for-mockup/mockups/index.html)**
>
> `https://htmlpreview.github.io/?https://github.com/TheBlackstoneCenter/The-Blackstone-Center/blob/copilot/preview-themes-for-mockup/mockups/index.html`

This uses [htmlpreview.github.io](https://htmlpreview.github.io/), a free service that renders GitHub HTML files directly in your browser.

### 🌐 Permanent GitHub Pages link (one-time setup)

Once you enable GitHub Pages, the mockups will live permanently at:

> **<https://theblackstonecenter.github.io/The-Blackstone-Center/mockups/>**

**To activate it (one click):**
1. Go to → **[Repository Settings → Pages](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/settings/pages)**
2. Under **Source**, select **"GitHub Actions"**
3. Save — the [Deploy workflow](https://github.com/TheBlackstoneCenter/The-Blackstone-Center/actions/workflows/pages.yml) will run automatically and publish the site

---

## 📋 How to View the Mockups

Two theme mockups have been created so you can compare website styles before committing to one. There are **three ways** to view them:

### Option 1 — Open directly in your browser (no setup required)

1. Click the **`mockups/`** folder above (or navigate to it in a file explorer).
2. Download or open **`mockups/index.html`** in any web browser.  
   It shows both theme mockups with toggle buttons and a side-by-side view.

### Option 2 — View on GitHub Pages

Once GitHub Pages is enabled for this repository (Settings → Pages → Source), the mockups will be available at:

> **<https://theblackstonecenter.github.io/The-Blackstone-Center/mockups/>**

### Option 3 — View locally with a simple server

If you have Python installed, run this from the repository root:

```bash
python3 -m http.server 8080
```

Then open **<http://localhost:8080/mockups/>** in your browser.

---

## 🎨 Choosing a Theme

| Theme | Style | Good for |
|-------|-------|----------|
| **PaperMod** | Clean, minimal, fast | Blog / portfolio |
| **Academic** | Feature-rich, structured | Research / academia |

After choosing, open `config.toml` and set the `theme` field:

```toml
theme = "PaperMod"   # or "academic"
```

Then see the **Next Steps** section inside `mockups/index.html` for the full setup guide.

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
