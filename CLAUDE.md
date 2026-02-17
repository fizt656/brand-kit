# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brain Topology is a personal portfolio site that visualizes professional and personal interests as an interactive knowledge graph. Nodes represent different aspects of life (AI, neuroscience, family, hobbies) organized into three hemispheres: Left (Digital/Blue), Right (Analog/Brass), and Center (White).

## Development Commands

Start local server:
```bash
python3 -m http.server 8000
```

Access the editor at http://localhost:8000/editor.html

On macOS, the `start-editor.command` script launches the server and opens the editor automatically.

## Architecture

**No build system** - This is a static HTML/CSS/JS site with no bundler, package.json, or dependencies.

### Key Files

- `index.html` - Main public-facing website
- `editor.html` - Admin tool for editing the graph
- `data/nodes.json` - Graph data (nodes with positions, connections, content)
- `js/graph.js` - Graph data structure and SVG rendering
- `js/main.js` - Main site interaction and animations
- `js/editor.js` - Editor UI and GitHub integration

### Node Data Structure

```json
{
  "id": "unique-id",
  "label": "Display Name",
  "hemisphere": "left|right|center",
  "x": 0-100,
  "y": 0-100,
  "connections": ["node-id-1", "node-id-2"],
  "content": {
    "title": "Panel Title",
    "body": "Description text",
    "image": null
  }
}
```

Hemispheres: `left` (steel blue, digital topics), `right` (warm brass, analog topics), `center` (off-white, core topics). Position values are percentages (0-100) where 0,0 is top-left.

### CSS Variables

Colors are defined in `css/styles.css`:
- Background: `#faf8f3` (warm ivory)
- Left hemisphere: `#5e8a9e` (muted teal-slate)
- Right hemisphere: `#b8952e` (warm gold/copper)
- Center: `#4a4238` (warm charcoal)

Fonts: Playfair Display (headings), Inter (body), JetBrains Mono (labels/UI)

## Workflow

### Quick Edit & Publish (Recommended)

1. Run `start-editor.command` to launch the editor
2. Make changes to nodes
3. Click **Publish** (auto-commits to GitHub)
4. Site updates at https://fizt656.github.io/brand-kit/ in ~30 seconds

**Note:** Publish button requires a GitHub Personal Access Token configured in editor settings (one-time setup).

### Manual Workflow (Alternative)

1. Edit nodes using `editor.html`
2. Click **Export** to download `nodes.json`
3. Replace `data/nodes.json` with downloaded file
4. Commit and push: `git add data/nodes.json && git commit -m "Update nodes" && git push`

## Deployment

- **Live site:** https://fizt656.github.io/brand-kit/
- **Hosting:** GitHub Pages (auto-deploys from `main` branch)
- **Repository:** https://github.com/fizt656/brand-kit

See `EDITOR.md` for detailed editor documentation.
