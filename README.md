# Personal Website Workshop 🚀

Build and deploy your own personal website in under an hour!

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A [GitHub](https://github.com) account
- A [Cloudflare](https://cloudflare.com) account (free)

## Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Your site will open at `http://localhost:3000`

## Customizing Your Site

### Edit the content
- Open `index.html` and update the text, sections, and content
- Modify `styles.css` to change colors and styling
- Edit `script.ts` to add interactivity

### Key customizations:
1. **Logo & Name**: Change "MyWebsite" to your name in the header
2. **Hero Section**: Update the headline and tagline
3. **About Section**: Write about yourself
4. **Services/Skills**: Showcase what you do
5. **Contact**: Update or connect to a form service

## Deploying to Cloudflare Pages

### 1. Push to GitHub
```bash
git add .
git commit -m "My personal website"
git push origin main
```

### 2. Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Select your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

Your site will be live at `https://your-project.pages.dev` in minutes!

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.ts       # TypeScript for interactivity
├── vite.config.ts  # Vite configuration
├── tsconfig.json   # TypeScript configuration
└── package.json    # Dependencies and scripts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Tips for Participants

- 🎨 Use [coolors.co](https://coolors.co) to generate color palettes
- 🖼️ Get free images from [unsplash.com](https://unsplash.com)
- 🔤 Try different fonts from [Google Fonts](https://fonts.google.com)
- ✨ Add icons from [heroicons.com](https://heroicons.com)

## Need Help?

Raise your hand or ask the workshop facilitator!

---

Made with ❤️ at Personal Website Workshop
