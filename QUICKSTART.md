# Quick Start Guide

**No coding experience needed!** Follow these steps to build your website.

---

## Step 1: Download (2 minutes)

1. **[Download the ZIP file](https://github.com/Luki3532/web-workshop-starter/archive/refs/heads/main.zip)**

2. **Find it** in your Downloads folder (`web-workshop-starter-main.zip`)

3. **Unzip it** - double-click the file (or right-click  Extract All on Windows)

---

## Step 2: Edit Your Info (10 minutes)

### Replace the files:
1. **Delete** `index.html` (the tutorial page)
2. **Delete** `styles.css` (the tutorial styling)
3. **Rename** `starter.html`  `index.html`
4. **Rename** `starter.css`  `styles.css`

### Edit your information:
1. **Open** `index.html` in any text editor (VS Code, Notepad, etc.)

2. **Find and replace** these placeholders:

| Find this | Replace with |
|-----------|--------------|
| `Your Name` | Your actual name |
| `your.email@example.com` | Your email |
| `yourusername` | Your GitHub/social username |
| `Skill 1`, `Skill 2`... | Your skills |
| `Project Name` | Your projects |

**Tip:** Use Ctrl+H (Cmd+H on Mac) for Find & Replace!

### Preview your changes:
Just double-click `index.html` to open it in your browser!

---

## Step 3: Change Colors (Optional)

Open `styles.css` and change the color at the top:

```css
--main-color: #3b82f6;
```

Try these:
- `#10b981` - Green
- `#8b5cf6` - Purple
- `#f59e0b` - Orange
- `#ef4444` - Red

---

## Step 4: Publish Online (10 minutes)

### Create accounts (both free):
1. **GitHub** - [github.com/signup](https://github.com/signup)
2. **Cloudflare** - [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)

### Upload to GitHub:
1. Go to [github.com/new](https://github.com/new) and create a repository
2. Click **"uploading an existing file"**
3. Drag your files into the upload area
4. Click **"Commit changes"**

### Connect to Cloudflare:
1. Go to Cloudflare  **Workers & Pages**  **Create**  **Pages**
2. Click **"Connect to Git"** and select your repository
3. Set **Build command**: `npm run build`
4. Set **Build output**: `dist`
5. Click **Save and Deploy**

---

##  Done!

Your site is live at: `https://your-project.pages.dev`

---

## Troubleshooting

**Site looks broken?**
Make sure you renamed `starter.css` to `styles.css`

**Changes not showing?**
Save the file (Ctrl+S) and refresh your browser (F5)

**Cloudflare build failed?**
Check that build command is exactly `npm run build` and output is `dist`
