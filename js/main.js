// ================================
// MAIN APPLICATION LOGIC
// ================================

const App = {
  expandedNodeId: null,
  overlay: null,
  contentPanel: null,
  contentTitle: null,
  contentBody: null,
  connectionsList: null,
  linksSection: null,
  linksList: null,
  closeBtn: null,

  // Initialize the application
  init() {
    // Cache DOM elements
    this.overlay = document.getElementById('content-overlay');
    this.contentPanel = document.getElementById('content-panel');
    this.contentTitle = document.getElementById('content-title');
    this.contentBody = document.getElementById('content-body');
    this.connectionsList = document.getElementById('connections-list');
    this.linksSection = document.getElementById('content-links');
    this.linksList = document.getElementById('links-list');
    this.closeBtn = document.getElementById('close-btn');

    // Initialize graph
    Graph.init().then(() => {
      this.bindEvents();
    });
  },

  // Bind event listeners
  bindEvents() {
    // Node click events
    document.querySelectorAll('.node').forEach(node => {
      node.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleNodeClick(node.dataset.id);
      });

      // Keyboard accessibility
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleNodeClick(node.dataset.id);
        }
      });

      // Hover effects
      node.addEventListener('mouseenter', () => {
        if (!this.expandedNodeId) {
          Graph.highlightConnections(node.dataset.id, true);
        }
      });

      node.addEventListener('mouseleave', () => {
        if (!this.expandedNodeId) {
          Graph.highlightConnections(node.dataset.id, false);
        }
      });
    });

    // Close button
    this.closeBtn.addEventListener('click', () => {
      this.collapseNode();
    });

    // Click outside to close
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.collapseNode();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.expandedNodeId) {
        this.collapseNode();
      }
    });
  },

  // Handle node click
  handleNodeClick(nodeId) {
    const node = Graph.getNode(nodeId);
    if (!node) return;

    // If clicking the same node, collapse
    if (this.expandedNodeId === nodeId) {
      this.collapseNode();
      return;
    }

    // Expand the new node
    this.expandNode(nodeId);
  },

  // Expand a node to show content
  expandNode(nodeId) {
    const node = Graph.getNode(nodeId);
    if (!node) return;

    this.expandedNodeId = nodeId;

    // Update content
    this.contentTitle.textContent = node.content.title;
    this.contentBody.textContent = node.content.body;

    // Build connections list
    this.renderConnections(node);

    // Build external links list
    this.renderLinks(node);

    // Update graph state
    Graph.setExpandedState(nodeId);

    // Show overlay
    this.overlay.classList.remove('hidden');

    // Focus management
    this.closeBtn.focus();
  },

  // Collapse expanded node
  collapseNode() {
    if (!this.expandedNodeId) return;

    const previousNodeId = this.expandedNodeId;
    this.expandedNodeId = null;

    // Hide overlay
    this.overlay.classList.add('hidden');

    // Reset graph state
    Graph.setExpandedState(null);

    // Return focus to the node
    const nodeElement = document.getElementById(`node-${previousNodeId}`);
    if (nodeElement) {
      nodeElement.focus();
    }
  },

  // Render connection buttons
  renderConnections(node) {
    this.connectionsList.innerHTML = '';

    node.connections.forEach(connId => {
      const connNode = Graph.getNode(connId);
      if (!connNode) return;

      const btn = document.createElement('button');
      btn.className = `connection-btn hemisphere-${connNode.hemisphere}`;
      btn.textContent = connNode.label;
      btn.setAttribute('data-id', connId);

      btn.addEventListener('click', () => {
        this.navigateToNode(connId);
      });

      this.connectionsList.appendChild(btn);
    });
  },

  // Render external links
  renderLinks(node) {
    this.linksList.innerHTML = '';

    const links = node.content?.links || [];
    if (!links.length) {
      this.linksSection.classList.add('hidden');
      return;
    }

    links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.className = 'external-link';
      anchor.href = link.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener';
      anchor.textContent = link.label;
      this.linksList.appendChild(anchor);
    });

    this.linksSection.classList.remove('hidden');
  },

  // Navigate to a connected node (traversal)
  navigateToNode(nodeId) {
    // Smooth transition: briefly fade content
    this.contentPanel.style.opacity = '0';
    this.contentPanel.style.transform = 'translateY(10px)';

    setTimeout(() => {
      this.expandNode(nodeId);
      this.contentPanel.style.opacity = '1';
      this.contentPanel.style.transform = 'translateY(0)';
    }, 200);
  }
};

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// ================================
// CONSOLE EASTER EGG
// ================================

console.log('%c\u{1F9E0} gushalwani.com', 'font-size: 16px; font-weight: bold; color: #7ab8cc;');
console.log('%cExplore the nodes. Follow the connections.', 'font-size: 12px; color: #8a8a94;');
console.log('%cgushalwani@alum.mit.edu', 'font-size: 11px; color: #cc9a5a; font-family: monospace;');

// ================================
// EXPORT FOR MODULE USAGE
// ================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
