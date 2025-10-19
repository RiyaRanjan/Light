# Photon

A simple vanilla TypeScript project designed for deployment on GitHub Pages.

## Features

- 🚀 Built with TypeScript
- 🎨 Modern, responsive design
- ⚡ Interactive demo with click counter
- 🔄 Automated deployment via GitHub Actions
- 📱 Mobile-friendly interface

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd photon
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Serve locally (optional):
```bash
npm run serve
```

## Available Scripts

- `npm run build` - Compiles TypeScript and copies static files to dist/
- `npm run dev` - Runs TypeScript compiler in watch mode
- `npm run serve` - Serves the built project locally on port 8000
- `npm run clean` - Removes all files from the dist directory

## Project Structure

```
photon/
├── src/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Stylesheet
│   └── index.ts        # TypeScript source code
├── dist/               # Built files (generated)
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on pushes to `main` or `master` branch
2. Installs dependencies
3. Builds the TypeScript project
4. Deploys the `dist` folder to GitHub Pages

### Setting up GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy when you push to the main branch

## Development

The project uses TypeScript with modern ES2020 features. The build process compiles TypeScript to JavaScript and copies static assets to the `dist` directory.

## License

MIT License - feel free to use this project as a starting point for your own GitHub Pages projects!
