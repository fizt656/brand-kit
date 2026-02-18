# Brain Topology Editor

A local admin tool for editing the brain topology site content and structure.

## Quick Start

1. Start a local server:
   ```bash
   cd /Users/delorean_m2/AI/brand_kit
   python3 -m http.server 8000
   ```

2. Open http://localhost:8000/editor.html in your browser

3. Edit nodes, then click **Export JSON** to download the updated `nodes.json`

4. Replace `data/nodes.json` with the downloaded file

5. Deploy to GoDaddy

---

## Interface Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│  BRAIN TOPOLOGY EDITOR                          [+ Add Node] [Export]│
├───────────────────────────────────┬─────────────────────────────────┤
│                                   │  EDIT NODE                      │
│                                   │                                 │
│      Graph Preview                │  ID, Label, Hemisphere          │
│      (click nodes to select)      │  Position (X, Y)                │
│                                   │  Content (Title, Body)          │
│                                   │  Connections (checkboxes)       │
│                                   │                                 │
│                                   │  [Delete Node]                  │
└───────────────────────────────────┴─────────────────────────────────┘
```

---

## Features

### Selecting Nodes

- Click any node in the graph preview to select it
- Selected nodes display a white glow ring
- The edit form populates with the node's current data

### Editing Node Properties

| Field | Description |
|-------|-------------|
| **ID** | Read-only unique identifier |
| **Label** | Short name displayed on the graph |
| **Hemisphere** | Left (blue), Right (gold), or Center (white) |
| **X Position** | Horizontal position (0-100) |
| **Y Position** | Vertical position (0-100) |
| **Title** | Content panel heading |
| **Body** | Content panel description text |

All changes update the graph preview immediately.

### Managing Connections

- Connections appear as checkboxes in a grid
- Each checkbox shows the target node's label and hemisphere color
- Check/uncheck to add/remove connections
- Connections are bidirectional (adding A→B also adds B→A)

### Adding Nodes

1. Click **+ Add Node** in the header
2. A new node appears at the center (50, 50)
3. The node is automatically selected for editing
4. Edit the label, position, and other properties
5. Add connections to other nodes

### Deleting Nodes

1. Select the node you want to delete
2. Click **Delete Node** at the bottom of the edit panel
3. Confirm the deletion in the dialog
4. All connections to the deleted node are automatically removed

### Exporting

1. Click **Export JSON** in the header
2. A `nodes.json` file downloads to your computer
3. Replace `data/nodes.json` with the downloaded file
4. Refresh the main site to see changes

---

## File Structure

```
brand_kit/
├── editor.html          ← Editor page
├── css/
│   ├── styles.css       ← Shared styles
│   └── editor.css       ← Editor-specific styles
├── js/
│   ├── editor.js        ← Editor logic
│   ├── graph.js         ← Main site graph rendering
│   └── main.js          ← Main site interaction
└── data/
    └── nodes.json       ← Node data (edit this via the editor)
```

---

## Node Data Format

Each node in `nodes.json` has this structure:

```json
{
  "id": "unique-id",
  "label": "Display Name",
  "hemisphere": "left|right|center",
  "x": 50,
  "y": 50,
  "connections": ["other-node-id", "another-node-id"],
  "content": {
    "title": "Panel Title",
    "body": "Description text...",
    "image": null
  }
}
```

### Hemispheres

| Value | Color | Meaning |
|-------|-------|---------|
| `left` | Steel blue | Digital/technical topics |
| `right` | Warm brass | Analog/personal topics |
| `center` | Off-white | Core/connecting topics |

### Position

- X and Y are percentages (0-100)
- 0,0 is top-left
- 100,100 is bottom-right
- 50,50 is center

---

## Tips

- **Keep labels short** - They appear below nodes on the graph
- **Use hemisphere colors meaningfully** - Left for digital, right for analog
- **Connect related nodes** - Connections create the visual web structure
- **Position nodes logically** - Left hemisphere nodes on the left side, etc.
- **Test on the main site** - After exporting, refresh the main site to verify

---

## Troubleshooting

### Editor won't load
- Make sure you're running a local server (not opening the file directly)
- Check the browser console for errors

### Changes don't appear on main site
- Did you replace `data/nodes.json` with the exported file?
- Clear browser cache and refresh

### Node won't delete
- The center node can be deleted (no protection)
- Make sure you confirm the deletion dialog
