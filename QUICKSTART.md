# Quick Start Guide

**Time needed: 15 minutes**

## Step 1: Get the Files (2 min)

```bash
git clone https://github.com/Luki3532/web-workshop-starter.git my-website
cd my-website
npm install
```

## Step 2: Start Editing (1 min)

```bash
npm run dev
```

Your site opens at http://localhost:5173

## Step 3: Replace the Files (2 min)

1. **Delete** `index.html`
2. **Rename** `starter.html` → `index.html`
3. **Delete** `styles.css`  
4. **Rename** `starter.css` → `styles.css`

Your page will auto-reload with the new template!

## Step 4: Edit Your Info (10 min)

Open `index.html` and find the comments that say **STEP 1**, **STEP 2**, etc.

| Step | What to Change |
|------|----------------|
| 1 | Page title (browser tab) |
| 2 | Your name and tagline |
| 3 | About Me paragraph |
| 4 | Your skills |
| 5 | Your projects |
| 6 | Contact links |
| 7 | Footer year/name |

**Save the file** → Page updates automatically!

## Step 5: Change Colors (Optional)

Open `styles.css` and find the `:root` section at the top:

```css
:root {
    --main-color: #3b82f6;  /* Change this! */
}
```

Try these colors:
- `#10b981` - Green
- `#8b5cf6` - Purple  
- `#f59e0b` - Orange
- `#ef4444` - Red
- `#06b6d4` - Cyan

## Step 6: Deploy to the Internet

```bash
git add .
git commit -m "My personal website"
git push
```

If connected to Cloudflare, your site goes live automatically!

---

## Common Questions

**Q: How do I add more projects?**
Copy an `<article class="project">` block and paste it below the others.

**Q: How do I add an image?**
```html
<img src="photo.jpg" alt="Description">
```
Put the image file in your project folder.

**Q: How do I change fonts?**
Add this inside `<head>` in your HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```
Then in CSS:
```css
body {
    font-family: 'Inter', sans-serif;
}
```

**Q: My changes aren't showing?**
- Save the file (Ctrl+S / Cmd+S)
- Check the terminal for errors
- Try refreshing the page (F5)
