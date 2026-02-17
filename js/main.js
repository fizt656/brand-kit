// ================================
// MAIN APPLICATION LOGIC
// ================================

const ARTICLES = [
  {
    title: 'Why I Think in First Principles',
    kicker: 'The Signal Thread',
    summary: 'A grounding piece on compasses over maps, judgment under uncertainty, and building learning systems that hold up in the real world.',
    href: 'articles/first-principles.html'
  },
  {
    title: 'The Harness Is the Strategy — Part I',
    kicker: 'AI Harness',
    summary: 'Why the differentiator is not raw model horsepower, but the social and technical harness around it.',
    href: 'articles/harness-part-1.html'
  },
  {
    title: 'The Harness Is the Strategy — Part II',
    kicker: 'AI Harness',
    summary: 'How orchestration, trust, and adoption patterns decide outcomes faster than model upgrades do.',
    href: 'articles/harness-part-2.html'
  },
  {
    title: 'The Harness Is the Strategy — Part III',
    kicker: 'AI Harness',
    summary: 'Execution playbook: practical design choices for teams that want durable leverage, not demo theater.',
    href: 'articles/harness-part-3.html'
  }
];

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
  homeBtn: null,
  articlesBtn: null,
  articlesOverlay: null,
  articlesCloseBtn: null,
  articlesGrid: null,

  // Landing page elements
  landing: null,
  enterBtn: null,
  graphContainer: null,
  footer: null,
  hemisphereLabels: null,
  graphInitialized: false,

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
    this.homeBtn = document.getElementById('home-btn');
    this.articlesBtn = document.getElementById('articles-btn');
    this.articlesOverlay = document.getElementById('articles-overlay');
    this.articlesCloseBtn = document.getElementById('articles-close-btn');
    this.articlesGrid = document.getElementById('articles-grid');

    // Landing
    this.landing = document.getElementById('landing');
    this.enterBtn = document.getElementById('enter-btn');
    this.graphContainer = document.getElementById('graph-container');
    this.footer = document.getElementById('footer');
    this.hemisphereLabels = document.getElementById('hemisphere-labels');

    this.renderArticles();
    this.bindGlobalEvents();
    this.bindLanding();
  },

  // Landing → Graph transition
  bindLanding() {
    this.enterBtn.addEventListener('click', () => {
      this.enterMap();
    });

    const view = new URLSearchParams(window.location.search).get('view');
    if (view === 'map') {
      this.enterMap({ instant: true });
    }
    if (view === 'articles') {
      this.openArticles();
    }
  },

  enterMap({ instant = false } = {}) {
    this.landing.classList.add('hidden');
    this.homeBtn.classList.remove('is-hidden');

    const show = () => {
      this.graphContainer.classList.remove('graph-hidden');
      this.footer.classList.remove('graph-hidden');
      this.hemisphereLabels.classList.remove('graph-hidden');

      if (!this.graphInitialized) {
        this.graphInitialized = true;
        Graph.init().then(() => {
          this.bindEvents();
        });
      }
    };

    if (instant) {
      show();
    } else {
      setTimeout(show, 400);
    }
  },

  bindGlobalEvents() {
    this.homeBtn.addEventListener('click', () => this.goHome());

    // Articles panel controls (available on landing + map)
    this.articlesBtn.addEventListener('click', () => this.openArticles());
    this.articlesCloseBtn.addEventListener('click', () => this.closeArticles());
    this.articlesOverlay.addEventListener('click', (e) => {
      if (e.target === this.articlesOverlay) {
        this.closeArticles();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!this.articlesOverlay.classList.contains('hidden')) {
          this.closeArticles();
          return;
        }
        if (this.expandedNodeId) {
          this.collapseNode();
        }
      }
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

    // Articles + keyboard handlers are bound globally in bindGlobalEvents().
  },

  openArticles() {
    this.articlesOverlay.classList.remove('hidden');
    this.articlesOverlay.setAttribute('aria-hidden', 'false');
    this.articlesCloseBtn.focus();
  },

  closeArticles() {
    this.articlesOverlay.classList.add('hidden');
    this.articlesOverlay.setAttribute('aria-hidden', 'true');
    this.articlesBtn.focus();
  },

  goHome() {
    this.closeArticles();
    this.collapseNode();
    this.graphContainer.classList.add('graph-hidden');
    this.footer.classList.add('graph-hidden');
    this.hemisphereLabels.classList.add('graph-hidden');
    this.homeBtn.classList.add('is-hidden');
    this.landing.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderArticles() {
    this.articlesGrid.innerHTML = '';

    ARTICLES.forEach(article => {
      const card = document.createElement('a');
      card.className = 'article-card article-card-link';
      card.href = article.href;
      card.setAttribute('aria-label', `Open article: ${article.title}`);

      card.innerHTML = `
        <div class="kicker">${article.kicker}</div>
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
      `;

      this.articlesGrid.appendChild(card);
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

console.log('%c🧠 gushalwani.com', 'font-size: 16px; font-weight: bold; color: #7a9db8;');
console.log('%cExplore the nodes. Follow the connections.', 'font-size: 12px; color: #8a8a94;');
console.log('%cgushalwani@alum.mit.edu', 'font-size: 11px; color: #cc9a5a; font-family: monospace;');

// ================================
// EXPORT FOR MODULE USAGE
// ================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
