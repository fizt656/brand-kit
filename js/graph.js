// ================================
// GRAPH DATA AND RENDERING
// ================================

const Graph = {
  nodes: [],
  nodesMap: {},
  svg: null,
  edgesGroup: null,
  nodesGroup: null,
  viewBox: { width: 1200, height: 700 },

  // Initialize the graph
  async init() {
    this.svg = document.getElementById('graph-svg');
    this.edgesGroup = document.getElementById('edges-group');
    this.nodesGroup = document.getElementById('nodes-group');

    // Set viewBox for responsive scaling
    this.svg.setAttribute('viewBox', `0 0 ${this.viewBox.width} ${this.viewBox.height}`);

    // Load node data
    await this.loadNodes();

    // Render the graph
    this.renderEdges();
    this.renderNodes();

    // Start entrance animation
    this.animateEntrance();
  },

  // Load nodes from JSON file
  async loadNodes() {
    try {
      const response = await fetch('data/nodes.json');
      const data = await response.json();
      this.nodes = data.nodes;

      // Scale positions from percentage (0-100) to viewBox coordinates
      this.nodes.forEach(node => {
        node.x = (node.x / 100) * this.viewBox.width;
        node.y = (node.y / 100) * this.viewBox.height;
        this.nodesMap[node.id] = node;
      });
    } catch (error) {
      console.error('Failed to load nodes:', error);
      this.loadFallbackNodes();
    }
  },

  // Fallback node data
  loadFallbackNodes() {
    this.nodes = [
      {
        id: 'center',
        label: 'GUS',
        hemisphere: 'center',
        x: 600,
        y: 350,
        connections: ['ai-education', 'flow-state', 'family'],
        content: {
          title: 'Gus Halwani',
          body: 'At the intersection of neuroscience, technology, and the things that demand your full attention.'
        }
      }
    ];
    this.nodes.forEach(node => {
      this.nodesMap[node.id] = node;
    });
  },

  // Render all edges
  renderEdges() {
    const rendered = new Set();

    this.nodes.forEach(node => {
      node.connections.forEach(connId => {
        const connNode = this.nodesMap[connId];
        if (!connNode) return;

        const edgeKey = [node.id, connId].sort().join('-');
        if (rendered.has(edgeKey)) return;
        rendered.add(edgeKey);

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('class', 'edge');
        line.setAttribute('data-from', node.id);
        line.setAttribute('data-to', connId);
        line.setAttribute('x1', node.x);
        line.setAttribute('y1', node.y);
        line.setAttribute('x2', connNode.x);
        line.setAttribute('y2', connNode.y);

        this.edgesGroup.appendChild(line);
      });
    });
  },

  // Render all nodes
  renderNodes() {
    this.nodes.forEach(node => {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('class', `node hemisphere-${node.hemisphere}`);
      group.setAttribute('id', `node-${node.id}`);
      group.setAttribute('data-id', node.id);
      group.setAttribute('tabindex', '0');
      group.setAttribute('role', 'button');
      group.setAttribute('aria-label', node.label);

      // Determine node size - much smaller now
      let radius = 6;
      if (node.id === 'center') {
        radius = 12;
      } else if (node.hemisphere === 'center') {
        radius = 8;
      }

      // Circle element
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('class', 'node-circle');
      circle.setAttribute('cx', node.x);
      circle.setAttribute('cy', node.y);
      circle.setAttribute('r', radius);

      // Label element - always visible, positioned below
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('class', 'node-label');
      label.setAttribute('x', node.x);
      label.setAttribute('y', node.y + radius + 14);
      label.textContent = node.label;

      group.appendChild(circle);
      group.appendChild(label);
      this.nodesGroup.appendChild(group);
    });
  },

  // Animate entrance sequence
  animateEntrance() {
    const edges = document.querySelectorAll('.edge');
    const nodes = document.querySelectorAll('.node');
    const centerNode = document.getElementById('node-center');

    // Show all labels by default after animation
    setTimeout(() => {
      document.querySelectorAll('.node-label').forEach(label => {
        label.classList.add('visible');
      });
    }, 2000);

    // First: fade in center node
    setTimeout(() => {
      if (centerNode) {
        centerNode.classList.add('visible', 'pulse');
      }
    }, 200);

    // Then: draw edges with stagger
    edges.forEach((edge, i) => {
      setTimeout(() => {
        edge.classList.add('visible', 'drawing');
      }, 400 + i * 30);
    });

    // Finally: fade in other nodes with stagger
    nodes.forEach((node) => {
      if (node.id === 'node-center') return;

      const nodeData = this.nodesMap[node.dataset.id];
      if (!nodeData) return;

      const dx = nodeData.x - (this.viewBox.width / 2);
      const dy = nodeData.y - (this.viewBox.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const delay = 500 + distance * 2;

      setTimeout(() => {
        node.classList.add('visible');
      }, delay);
    });

    // Stop center pulse after initial animation
    setTimeout(() => {
      if (centerNode) {
        centerNode.classList.remove('pulse');
      }
    }, 3000);
  },

  // Get node by ID
  getNode(id) {
    return this.nodesMap[id];
  },

  // Get connected nodes
  getConnectedNodes(nodeId) {
    const node = this.nodesMap[nodeId];
    if (!node) return [];

    return node.connections
      .map(id => this.nodesMap[id])
      .filter(Boolean);
  },

  // Highlight connected edges
  highlightConnections(nodeId, highlight = true) {
    const edges = document.querySelectorAll('.edge');

    edges.forEach(edge => {
      const from = edge.dataset.from;
      const to = edge.dataset.to;

      if (from === nodeId || to === nodeId) {
        if (highlight) {
          edge.classList.add('connected');
        } else {
          edge.classList.remove('connected');
        }
      }
    });
  },

  // Set expanded state
  setExpandedState(expandedNodeId) {
    const nodes = document.querySelectorAll('.node');
    const edges = document.querySelectorAll('.edge');
    const connectedIds = expandedNodeId
      ? new Set(this.nodesMap[expandedNodeId]?.connections || [])
      : new Set();

    nodes.forEach(node => {
      const id = node.dataset.id;

      if (!expandedNodeId) {
        node.classList.remove('faded', 'expanded', 'active');
      } else if (id === expandedNodeId) {
        node.classList.add('expanded', 'active');
        node.classList.remove('faded');
      } else if (connectedIds.has(id)) {
        node.classList.remove('faded', 'expanded');
        node.classList.add('active');
      } else {
        node.classList.add('faded');
        node.classList.remove('expanded', 'active');
      }
    });

    edges.forEach(edge => {
      const from = edge.dataset.from;
      const to = edge.dataset.to;

      if (!expandedNodeId) {
        edge.classList.remove('connected', 'faded');
      } else if (from === expandedNodeId || to === expandedNodeId) {
        edge.classList.add('connected');
        edge.classList.remove('faded');
      } else {
        edge.classList.add('faded');
        edge.classList.remove('connected');
      }
    });
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Graph;
}
