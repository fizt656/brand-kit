// ================================
// EDITOR APPLICATION
// ================================

const Editor = {
  // State
  nodes: [],
  nodesMap: {},
  selectedNodeId: null,

  // SVG config
  svg: null,
  edgesGroup: null,
  nodesGroup: null,
  viewBox: { width: 1200, height: 700 },

  // DOM references
  editForm: null,
  emptyState: null,

  // GitHub config
  github: {
    token: null,
    repo: 'fizt656/brand-kit',
    filePath: 'data/nodes.json',
    branch: 'main'
  },

  // ================================
  // INITIALIZATION
  // ================================

  async init() {
    // Cache DOM elements
    this.svg = document.getElementById('graph-svg');
    this.edgesGroup = document.getElementById('edges-group');
    this.nodesGroup = document.getElementById('nodes-group');
    this.editForm = document.getElementById('edit-form');
    this.emptyState = document.getElementById('empty-state');

    // Set viewBox
    this.svg.setAttribute('viewBox', `0 0 ${this.viewBox.width} ${this.viewBox.height}`);

    // Load GitHub settings from localStorage
    this.loadGitHubSettings();

    // Load data
    await this.loadNodes();

    // Render graph
    this.render();

    // Bind events
    this.bindEvents();

    // Update publish button state
    this.updatePublishButton();
  },

  // ================================
  // GITHUB SETTINGS
  // ================================

  loadGitHubSettings() {
    const saved = localStorage.getItem('github-settings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        this.github.token = settings.token || null;
        this.github.repo = settings.repo || 'fizt656/brand-kit';
      } catch (e) {
        console.error('Failed to load GitHub settings:', e);
      }
    }
  },

  saveGitHubSettings() {
    localStorage.setItem('github-settings', JSON.stringify({
      token: this.github.token,
      repo: this.github.repo
    }));
  },

  updatePublishButton() {
    const btn = document.getElementById('publish-btn');
    if (!this.github.token) {
      btn.disabled = true;
      btn.title = 'Configure GitHub settings first';
    } else {
      btn.disabled = false;
      btn.title = 'Publish changes to GitHub';
    }
  },

  // ================================
  // DATA LOADING
  // ================================

  async loadNodes() {
    try {
      const response = await fetch('data/nodes.json');
      const data = await response.json();
      this.nodes = data.nodes;
      this.rebuildNodesMap();
    } catch (error) {
      console.error('Failed to load nodes:', error);
      this.nodes = [];
    }
  },

  rebuildNodesMap() {
    this.nodesMap = {};
    this.nodes.forEach(node => {
      this.nodesMap[node.id] = node;
    });
  },

  // ================================
  // RENDERING
  // ================================

  render() {
    this.renderEdges();
    this.renderNodes();
    this.renderConnectionsGrid();
  },

  renderEdges() {
    // Clear existing edges
    this.edgesGroup.innerHTML = '';

    const rendered = new Set();

    this.nodes.forEach(node => {
      const nodeX = (node.x / 100) * this.viewBox.width;
      const nodeY = (node.y / 100) * this.viewBox.height;

      node.connections.forEach(connId => {
        const connNode = this.nodesMap[connId];
        if (!connNode) return;

        const edgeKey = [node.id, connId].sort().join('-');
        if (rendered.has(edgeKey)) return;
        rendered.add(edgeKey);

        const connX = (connNode.x / 100) * this.viewBox.width;
        const connY = (connNode.y / 100) * this.viewBox.height;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('class', 'edge visible');
        line.setAttribute('data-from', node.id);
        line.setAttribute('data-to', connId);
        line.setAttribute('x1', nodeX);
        line.setAttribute('y1', nodeY);
        line.setAttribute('x2', connX);
        line.setAttribute('y2', connY);

        this.edgesGroup.appendChild(line);
      });
    });
  },

  renderNodes() {
    // Clear existing nodes
    this.nodesGroup.innerHTML = '';

    this.nodes.forEach(node => {
      const x = (node.x / 100) * this.viewBox.width;
      const y = (node.y / 100) * this.viewBox.height;

      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('class', `node hemisphere-${node.hemisphere} visible`);
      group.setAttribute('id', `node-${node.id}`);
      group.setAttribute('data-id', node.id);
      group.setAttribute('tabindex', '0');
      group.setAttribute('role', 'button');
      group.setAttribute('aria-label', node.label);

      // Add selected class if this is the selected node
      if (node.id === this.selectedNodeId) {
        group.classList.add('selected');
      }

      // Determine node size
      let radius = 6;
      if (node.id === 'center') {
        radius = 12;
      } else if (node.hemisphere === 'center') {
        radius = 8;
      }

      // Circle element
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('class', 'node-circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', radius);

      // Label element
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('class', 'node-label visible');
      label.setAttribute('x', x);
      label.setAttribute('y', y + radius + 14);
      label.textContent = node.label;

      group.appendChild(circle);
      group.appendChild(label);
      this.nodesGroup.appendChild(group);
    });

    // Re-bind node click events
    this.bindNodeEvents();
  },

  renderConnectionsGrid() {
    const grid = document.getElementById('connections-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // Get current node's connections
    const currentConnections = this.selectedNodeId
      ? new Set(this.nodesMap[this.selectedNodeId]?.connections || [])
      : new Set();

    // Create checkbox for each node (except the selected one)
    this.nodes.forEach(node => {
      if (node.id === this.selectedNodeId) return;

      const isConnected = currentConnections.has(node.id);

      const label = document.createElement('label');
      label.className = `connection-checkbox${isConnected ? ' checked' : ''}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = isConnected;
      checkbox.dataset.nodeId = node.id;
      checkbox.addEventListener('change', () => this.handleConnectionToggle(node.id, checkbox.checked));

      const dot = document.createElement('span');
      dot.className = `hemisphere-dot ${node.hemisphere}`;

      const text = document.createElement('span');
      text.className = 'connection-label';
      text.textContent = node.label;

      label.appendChild(checkbox);
      label.appendChild(dot);
      label.appendChild(text);
      grid.appendChild(label);
    });
  },

  // ================================
  // EVENT BINDING
  // ================================

  bindEvents() {
    // Add node button
    document.getElementById('add-node-btn').addEventListener('click', () => {
      this.addNode();
    });

    // Export button
    document.getElementById('export-btn').addEventListener('click', () => {
      this.exportJSON();
    });

    // Publish button
    document.getElementById('publish-btn').addEventListener('click', () => {
      this.publish();
    });

    // Settings button
    document.getElementById('settings-btn').addEventListener('click', () => {
      this.openSettings();
    });

    // Settings modal
    document.getElementById('settings-cancel').addEventListener('click', () => {
      this.closeSettings();
    });

    document.getElementById('settings-save').addEventListener('click', () => {
      this.saveSettings();
    });

    // Close modal on backdrop click
    document.getElementById('settings-modal').addEventListener('click', (e) => {
      if (e.target.id === 'settings-modal') {
        this.closeSettings();
      }
    });

    // Delete node button
    document.getElementById('delete-node-btn').addEventListener('click', () => {
      this.deleteNode();
    });

    // Form input changes
    document.getElementById('node-label').addEventListener('input', (e) => {
      this.updateNodeProperty('label', e.target.value);
    });

    document.getElementById('node-x').addEventListener('input', (e) => {
      const value = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
      this.updateNodeProperty('x', value);
    });

    document.getElementById('node-y').addEventListener('input', (e) => {
      const value = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
      this.updateNodeProperty('y', value);
    });

    document.getElementById('content-title').addEventListener('input', (e) => {
      this.updateNodeContent('title', e.target.value);
    });

    document.getElementById('content-body').addEventListener('input', (e) => {
      this.updateNodeContent('body', e.target.value);
    });

    // Hemisphere radio buttons
    document.querySelectorAll('input[name="hemisphere"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.updateNodeProperty('hemisphere', e.target.value);
      });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeSettings();
      }
    });
  },

  bindNodeEvents() {
    document.querySelectorAll('.node').forEach(nodeEl => {
      nodeEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectNode(nodeEl.dataset.id);
      });

      nodeEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.selectNode(nodeEl.dataset.id);
        }
      });
    });
  },

  // ================================
  // SETTINGS MODAL
  // ================================

  openSettings() {
    const modal = document.getElementById('settings-modal');
    const tokenInput = document.getElementById('github-token');
    const repoInput = document.getElementById('github-repo');

    tokenInput.value = this.github.token || '';
    repoInput.value = this.github.repo || '';

    modal.classList.remove('hidden');
    tokenInput.focus();
  },

  closeSettings() {
    document.getElementById('settings-modal').classList.add('hidden');
  },

  saveSettings() {
    const tokenInput = document.getElementById('github-token');
    const repoInput = document.getElementById('github-repo');

    this.github.token = tokenInput.value.trim() || null;
    this.github.repo = repoInput.value.trim() || 'fizt656/brand-kit';

    this.saveGitHubSettings();
    this.updatePublishButton();
    this.closeSettings();

    this.showToast('Settings saved', 'success');
  },

  // ================================
  // NODE SELECTION
  // ================================

  selectNode(nodeId) {
    this.selectedNodeId = nodeId;
    const node = this.nodesMap[nodeId];

    if (!node) {
      this.clearSelection();
      return;
    }

    // Update visual selection
    document.querySelectorAll('.node').forEach(el => {
      el.classList.toggle('selected', el.dataset.id === nodeId);
    });

    // Show edit form
    this.emptyState.classList.add('hidden');
    this.editForm.classList.remove('hidden');

    // Populate form
    document.getElementById('node-id').value = node.id;
    document.getElementById('node-label').value = node.label;
    document.getElementById('node-x').value = node.x;
    document.getElementById('node-y').value = node.y;
    document.getElementById('content-title').value = node.content?.title || '';
    document.getElementById('content-body').value = node.content?.body || '';

    // Set hemisphere radio
    document.querySelectorAll('input[name="hemisphere"]').forEach(radio => {
      radio.checked = radio.value === node.hemisphere;
    });

    // Render connections
    this.renderConnectionsGrid();
  },

  clearSelection() {
    this.selectedNodeId = null;

    document.querySelectorAll('.node').forEach(el => {
      el.classList.remove('selected');
    });

    this.emptyState.classList.remove('hidden');
    this.editForm.classList.add('hidden');
  },

  // ================================
  // NODE EDITING
  // ================================

  updateNodeProperty(property, value) {
    if (!this.selectedNodeId) return;

    const node = this.nodesMap[this.selectedNodeId];
    if (!node) return;

    node[property] = value;

    // Update only what's needed instead of full re-render
    const nodeEl = document.getElementById(`node-${this.selectedNodeId}`);
    if (!nodeEl) return;

    switch (property) {
      case 'label':
        // Update just the label text
        const labelEl = nodeEl.querySelector('.node-label');
        if (labelEl) labelEl.textContent = value;
        break;

      case 'hemisphere':
        // Update node class
        nodeEl.className = `node hemisphere-${value} visible selected`;
        break;

      case 'x':
      case 'y':
        // Update node position and edges
        this.updateNodePosition(node);
        break;

      default:
        // Full re-render for other properties
        this.render();
    }
  },

  updateNodePosition(node) {
    const x = (node.x / 100) * this.viewBox.width;
    const y = (node.y / 100) * this.viewBox.height;

    const nodeEl = document.getElementById(`node-${node.id}`);
    if (!nodeEl) return;

    // Update circle position
    const circle = nodeEl.querySelector('.node-circle');
    if (circle) {
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
    }

    // Update label position
    const label = nodeEl.querySelector('.node-label');
    if (label) {
      const radius = parseFloat(circle?.getAttribute('r') || 6);
      label.setAttribute('x', x);
      label.setAttribute('y', y + radius + 14);
    }

    // Update connected edges
    document.querySelectorAll('.edge').forEach(edge => {
      const from = edge.getAttribute('data-from');
      const to = edge.getAttribute('data-to');

      if (from === node.id) {
        edge.setAttribute('x1', x);
        edge.setAttribute('y1', y);
      }
      if (to === node.id) {
        edge.setAttribute('x2', x);
        edge.setAttribute('y2', y);
      }
    });
  },

  updateNodeContent(property, value) {
    if (!this.selectedNodeId) return;

    const node = this.nodesMap[this.selectedNodeId];
    if (!node) return;

    if (!node.content) {
      node.content = { title: '', body: '', image: null };
    }

    node.content[property] = value;
    // No re-render needed - content only shows in the exported data
  },

  handleConnectionToggle(targetNodeId, isConnected) {
    if (!this.selectedNodeId) return;

    const currentNode = this.nodesMap[this.selectedNodeId];
    const targetNode = this.nodesMap[targetNodeId];

    if (!currentNode || !targetNode) return;

    if (isConnected) {
      // Add connection (bidirectional)
      if (!currentNode.connections.includes(targetNodeId)) {
        currentNode.connections.push(targetNodeId);
      }
      if (!targetNode.connections.includes(this.selectedNodeId)) {
        targetNode.connections.push(this.selectedNodeId);
      }
    } else {
      // Remove connection (bidirectional)
      currentNode.connections = currentNode.connections.filter(id => id !== targetNodeId);
      targetNode.connections = targetNode.connections.filter(id => id !== this.selectedNodeId);
    }

    // Update checkbox visual state
    const checkbox = document.querySelector(`input[data-node-id="${targetNodeId}"]`);
    if (checkbox) {
      checkbox.closest('.connection-checkbox').classList.toggle('checked', isConnected);
    }

    // Re-render edges
    this.renderEdges();
  },

  // ================================
  // ADD/DELETE NODES
  // ================================

  addNode() {
    // Generate unique ID
    const baseId = 'new-node';
    let id = baseId;
    let counter = 1;

    while (this.nodesMap[id]) {
      id = `${baseId}-${counter}`;
      counter++;
    }

    // Create new node with defaults
    const newNode = {
      id: id,
      label: 'New Node',
      hemisphere: 'center',
      x: 50,
      y: 50,
      connections: [],
      content: {
        title: 'New Node',
        body: '',
        image: null
      }
    };

    // Add to data
    this.nodes.push(newNode);
    this.rebuildNodesMap();

    // Render and select
    this.render();
    this.selectNode(id);
  },

  deleteNode() {
    if (!this.selectedNodeId) return;

    const nodeId = this.selectedNodeId;

    // Confirmation dialog
    if (!confirm(`Delete node "${this.nodesMap[nodeId].label}"?\n\nThis will also remove all connections to this node.`)) {
      return;
    }

    // Remove connections from other nodes
    this.nodes.forEach(node => {
      node.connections = node.connections.filter(id => id !== nodeId);
    });

    // Remove the node
    this.nodes = this.nodes.filter(node => node.id !== nodeId);
    this.rebuildNodesMap();

    // Clear selection and re-render
    this.clearSelection();
    this.render();
  },

  // ================================
  // EXPORT
  // ================================

  getExportData() {
    return {
      nodes: this.nodes.map(node => ({
        id: node.id,
        label: node.label,
        hemisphere: node.hemisphere,
        x: node.x,
        y: node.y,
        connections: node.connections,
        content: {
          title: node.content?.title || '',
          body: node.content?.body || '',
          image: node.content?.image || null
        }
      }))
    };
  },

  exportJSON() {
    const exportData = this.getExportData();
    const jsonString = JSON.stringify(exportData, null, 2);

    // Create download
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'nodes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    this.showToast('Downloaded nodes.json', 'success');
  },

  // ================================
  // GITHUB PUBLISH
  // ================================

  async publish() {
    if (!this.github.token) {
      this.openSettings();
      return;
    }

    // Guard against accidental double-click / double-submit.
    if (this.isPublishing) {
      return;
    }

    const btn = document.getElementById('publish-btn');
    const originalText = btn.textContent;

    this.isPublishing = true;

    try {
      btn.textContent = 'Publishing...';
      btn.classList.add('publishing');
      btn.disabled = true;

      // Prepare content once
      const exportData = this.getExportData();
      const jsonString = JSON.stringify(exportData, null, 2);
      const content = btoa(unescape(encodeURIComponent(jsonString))); // Base64 encode

      // Publish with optimistic-lock retries (helps when repo moves between edits)
      const publishResult = await this.publishWithRetries(content, 3);

      if (!publishResult.ok) {
        throw new Error(publishResult.errorMessage || 'Failed to publish');
      }

      this.showToast('Published to GitHub!', 'success');

    } catch (error) {
      console.error('Publish failed:', error);
      this.showToast(`Publish failed: ${error.message}`, 'error');
    } finally {
      btn.textContent = originalText;
      btn.classList.remove('publishing');
      btn.disabled = false;
      this.isPublishing = false;
    }
  },

  async publishWithRetries(content, maxAttempts = 3) {
    let attempt = 0;
    let lastResult = { ok: false, errorMessage: 'Unknown publish error' };

    while (attempt < maxAttempts) {
      attempt += 1;
      const sha = await this.getFileSHA();
      const result = await this.updateGitHubFile(content, sha);

      if (result.ok) {
        return result;
      }

      lastResult = result;

      // Retry only on optimistic-lock style conflicts.
      if (!this.isShaMismatchError(result.errorMessage) && result.status !== 409 && result.status !== 422) {
        break;
      }

      // Backoff before next SHA refresh/retry (helps with GitHub edge caching).
      await new Promise(resolve => setTimeout(resolve, 400 * attempt));
    }

    return lastResult;
  },

  async updateGitHubFile(content, sha) {
    const response = await fetch(
      `https://api.github.com/repos/${this.github.repo}/contents/${this.github.filePath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${this.github.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          message: 'Update nodes.json via editor',
          content,
          sha,
          branch: this.github.branch
        })
      }
    );

    if (response.ok) {
      return { ok: true };
    }

    let errorMessage = `HTTP ${response.status}`;
    try {
      const error = await response.json();
      errorMessage = error?.message || errorMessage;
    } catch (_) {
      // Keep fallback message
    }

    return { ok: false, status: response.status, errorMessage };
  },

  isShaMismatchError(message = '') {
    const text = String(message).toLowerCase();
    return text.includes('does not match') ||
      (text.includes('sha') && text.includes('match')) ||
      text.includes('stale');
  },

  async getFileSHA() {
    // Cache-bust the GitHub contents endpoint. After a successful PUT, the
    // GET can briefly return a stale SHA via intermediary caching.
    const url = `https://api.github.com/repos/${this.github.repo}/contents/${this.github.filePath}?ref=${this.github.branch}&_=${Date.now()}`;

    const response = await fetch(
      url,
      {
        headers: {
          'Authorization': `Bearer ${this.github.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to get file info');
    }

    const data = await response.json();
    return data.sha;
  },

  // ================================
  // TOAST NOTIFICATIONS
  // ================================

  showToast(message, type = 'info') {
    const toast = document.getElementById('status-toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    // Force reflow for animation
    toast.offsetHeight;

    toast.classList.remove('hidden');

    // Auto-hide after 3 seconds
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
};

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
  Editor.init();
});
