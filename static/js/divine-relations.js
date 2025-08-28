/**
 * Gestionnaire interactif pour le diagramme des relations divines
 * Everos - Relations Divines
 */

class DivineRelationsDiagram {
    constructor(containerId, deities, relations) {
        this.container = document.getElementById(containerId);
        this.deities = deities;
        this.relations = relations;
        this.nodes = new Map();
        this.lines = new Map();
        this.tooltip = null;
        this.activeNode = null;
        this.svgNS = 'http://www.w3.org/2000/svg';
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.createStructure();
        this.calculatePositions();
        this.createSVG();
        this.createNodes();
        this.createRelationLines();
        this.createTooltip();
        this.createLegend();
        this.bindEvents();
        
        // Animation d'entrée
        this.animateEntry();
    }
    
    createStructure() {
        this.container.innerHTML = '';
        this.container.className = 'relations-diagram';
        
        // Conteneur pour les relations SVG
        this.svg = document.createElementNS(this.svgNS, 'svg');
        this.svg.setAttribute('class', 'relations-svg');
        this.svg.setAttribute('viewBox', '0 0 1000 600');
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        this.container.appendChild(this.svg);
    }
    
    calculatePositions() {
        const centerX = 500;
        const centerY = 300;
        const radius = 200;
        const angleStep = (2 * Math.PI) / this.deities.length;
        
        this.positions = {};
        
        this.deities.forEach((deity, index) => {
            const angle = index * angleStep - Math.PI / 2; // Commencer en haut
            this.positions[deity.name] = {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle)
            };
        });
    }
    
    createSVG() {
        // Defs pour les gradients et filtres
        const defs = document.createElementNS(this.svgNS, 'defs');
        
        // Gradient pour les lignes
        const gradient = document.createElementNS(this.svgNS, 'linearGradient');
        gradient.setAttribute('id', 'lineGradient');
        
        const stop1 = document.createElementNS(this.svgNS, 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', 'currentColor');
        stop1.setAttribute('stop-opacity', '0.3');
        
        const stop2 = document.createElementNS(this.svgNS, 'stop');
        stop2.setAttribute('offset', '50%');
        stop2.setAttribute('stop-opacity', '1');
        
        const stop3 = document.createElementNS(this.svgNS, 'stop');
        stop3.setAttribute('offset', '100%');
        stop3.setAttribute('stop-color', 'currentColor');
        stop3.setAttribute('stop-opacity', '0.3');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        gradient.appendChild(stop3);
        defs.appendChild(gradient);
        
        // Filtre pour l'effet de lueur
        const filter = document.createElementNS(this.svgNS, 'filter');
        filter.setAttribute('id', 'glow');
        
        const feGaussianBlur = document.createElementNS(this.svgNS, 'feGaussianBlur');
        feGaussianBlur.setAttribute('stdDeviation', '3');
        feGaussianBlur.setAttribute('result', 'coloredBlur');
        
        const feMerge = document.createElementNS(this.svgNS, 'feMerge');
        const feMergeNode1 = document.createElementNS(this.svgNS, 'feMergeNode');
        feMergeNode1.setAttribute('in', 'coloredBlur');
        const feMergeNode2 = document.createElementNS(this.svgNS, 'feMergeNode');
        feMergeNode2.setAttribute('in', 'SourceGraphic');
        
        feMerge.appendChild(feMergeNode1);
        feMerge.appendChild(feMergeNode2);
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feMerge);
        defs.appendChild(filter);
        
        this.svg.appendChild(defs);
    }
    
    createNodes() {
        this.deities.forEach((deity, index) => {
            const position = this.positions[deity.name];
            
            // Créer le nœud
            const node = document.createElement('div');
            node.className = 'deity-node';
            node.style.left = `${(position.x / 1000) * 100}%`;
            node.style.top = `${(position.y / 600) * 100}%`;
            node.style.transform = 'translate(-50%, -50%)';
            node.style.backgroundImage = `url('${deity.image}')`;
            node.style.borderColor = deity.colors.accent;
            node.style.animationDelay = `${index * 0.1}s`;
            node.dataset.deity = deity.slug;
            
            // Créer le nom
            const nameElement = document.createElement('div');
            nameElement.className = 'deity-name';
            nameElement.textContent = deity.name;
            node.appendChild(nameElement);
            
            this.container.appendChild(node);
            this.nodes.set(deity.name, {
                element: node,
                deity: deity,
                position: position
            });
        });
    }
    
    createRelationLines() {
        this.relations.forEach((relation, index) => {
            const fromPos = this.positions[relation.from];
            const toPos = this.positions[relation.to];
            
            if (!fromPos || !toPos) return;
            
            // Créer la ligne SVG
            const line = document.createElementNS(this.svgNS, 'line');
            line.setAttribute('x1', fromPos.x);
            line.setAttribute('y1', fromPos.y);
            line.setAttribute('x2', toPos.x);
            line.setAttribute('y2', toPos.y);
            line.setAttribute('class', `relation-line ${relation.type}`);
            line.dataset.relation = index;
            
            // Animation d'apparition retardée
            line.style.strokeDasharray = this.getLineLength(fromPos, toPos);
            line.style.strokeDashoffset = this.getLineLength(fromPos, toPos);
            line.style.animation = `drawLine 1s ease-out ${0.5 + index * 0.1}s forwards`;
            
            this.svg.appendChild(line);
            this.lines.set(`${relation.from}-${relation.to}`, {
                element: line,
                relation: relation
            });
        });
        
        // Ajouter l'animation CSS pour dessiner les lignes
        if (!document.getElementById('line-animation-style')) {
            const style = document.createElement('style');
            style.id = 'line-animation-style';
            style.textContent = `
                @keyframes drawLine {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    getLineLength(pos1, pos2) {
        const dx = pos2.x - pos1.x;
        const dy = pos2.y - pos1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'relation-tooltip';
        document.body.appendChild(this.tooltip);
    }
    
    createLegend() {
        const legend = document.createElement('div');
        legend.className = 'relations-legend';
        
        const legendItems = [
            { type: 'positive', label: 'Relations Positives' },
            { type: 'negative', label: 'Relations Négatives' },
            { type: 'neutral', label: 'Relations Neutres' }
        ];
        
        legendItems.forEach(item => {
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            
            const line = document.createElement('div');
            line.className = `legend-line ${item.type}`;
            
            const label = document.createElement('span');
            label.textContent = item.label;
            
            legendItem.appendChild(line);
            legendItem.appendChild(label);
            legend.appendChild(legendItem);
        });
        
        this.container.parentElement.appendChild(legend);
    }
    
    bindEvents() {
        // Events pour les nœuds
        this.nodes.forEach((nodeData, deityName) => {
            const node = nodeData.element;
            
            node.addEventListener('mouseenter', (e) => this.handleNodeHover(e, deityName));
            node.addEventListener('mouseleave', (e) => this.handleNodeLeave(e, deityName));
            node.addEventListener('click', (e) => this.handleNodeClick(e, deityName));
        });
        
        // Events pour les lignes
        this.lines.forEach((lineData) => {
            const line = lineData.element;
            
            line.addEventListener('mouseenter', (e) => this.handleLineHover(e, lineData.relation));
            line.addEventListener('mouseleave', (e) => this.handleLineLeave(e));
            line.addEventListener('mousemove', (e) => this.updateTooltipPosition(e));
        });
        
        // Event pour fermer le tooltip
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.deity-node') && !e.target.closest('.relation-line')) {
                this.hideTooltip();
                this.clearHighlights();
            }
        });
        
        // Responsive handling
        window.addEventListener('resize', () => this.handleResize());
    }
    
    handleNodeHover(event, deityName) {
        const node = this.nodes.get(deityName);
        if (!node) return;
        
        // Highlight le nœud
        node.element.classList.add('active');
        
        // Highlight les relations liées
        this.highlightRelatedLines(deityName);
    }
    
    handleNodeLeave(event, deityName) {
        const node = this.nodes.get(deityName);
        if (!node) return;
        
        node.element.classList.remove('active');
        this.clearLineHighlights();
    }
    
    handleNodeClick(event, deityName) {
        event.stopPropagation();
        
        // Toggle active state
        if (this.activeNode === deityName) {
            this.clearHighlights();
            this.activeNode = null;
        } else {
            this.clearHighlights();
            this.activeNode = deityName;
            this.highlightRelatedLines(deityName, true);
        }
    }
    
    handleLineHover(event, relation) {
        this.showRelationTooltip(relation);
        this.updateTooltipPosition(event);
        
        // Highlight la ligne
        event.target.classList.add('highlighted');
        
        // Highlight les nœuds connectés
        const fromNode = this.nodes.get(relation.from);
        const toNode = this.nodes.get(relation.to);
        if (fromNode) fromNode.element.classList.add('active');
        if (toNode) toNode.element.classList.add('active');
    }
    
    handleLineLeave(event) {
        this.hideTooltip();
        event.target.classList.remove('highlighted');
        
        // Retirer le highlight des nœuds si pas d'active node
        if (!this.activeNode) {
            this.nodes.forEach(node => {
                node.element.classList.remove('active');
            });
        }
    }
    
    highlightRelatedLines(deityName, persistent = false) {
        this.lines.forEach((lineData) => {
            const relation = lineData.relation;
            if (relation.from === deityName || relation.to === deityName) {
                lineData.element.classList.add(persistent ? 'highlighted' : 'highlighted');
            }
        });
    }
    
    clearLineHighlights() {
        if (!this.activeNode) {
            this.lines.forEach((lineData) => {
                lineData.element.classList.remove('highlighted');
            });
        }
    }
    
    clearHighlights() {
        this.nodes.forEach(node => {
            node.element.classList.remove('active');
        });
        this.lines.forEach(lineData => {
            lineData.element.classList.remove('highlighted');
        });
    }
    
    showRelationTooltip(relation) {
        const typeLabels = {
            positive: 'Alliance',
            negative: 'Conflit',
            neutral: 'Neutralité'
        };
        
        this.tooltip.innerHTML = `
            <h4>${relation.from} ↔ ${relation.to}</h4>
            <div class="relation-type ${relation.type}">${typeLabels[relation.type]}</div>
            <p>${relation.description}</p>
        `;
        
        this.tooltip.classList.add('visible');
    }
    
    hideTooltip() {
        this.tooltip.classList.remove('visible');
    }
    
    updateTooltipPosition(event) {
        const rect = this.container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        this.tooltip.style.left = `${event.clientX + 10}px`;
        this.tooltip.style.top = `${event.clientY - 10}px`;
        
        // Ajuster si le tooltip sort de l'écran
        const tooltipRect = this.tooltip.getBoundingClientRect();
        if (tooltipRect.right > window.innerWidth) {
            this.tooltip.style.left = `${event.clientX - tooltipRect.width - 10}px`;
        }
        if (tooltipRect.bottom > window.innerHeight) {
            this.tooltip.style.top = `${event.clientY - tooltipRect.height - 10}px`;
        }
    }
    
    animateEntry() {
        // Animation d'apparition des nœuds avec délai
        this.nodes.forEach((nodeData, index) => {
            setTimeout(() => {
                nodeData.element.style.opacity = '1';
                nodeData.element.style.transform = 'translate(-50%, -50%) scale(1)';
            }, index * 100);
        });
    }
    
    handleResize() {
        // Recalculer les positions si nécessaire
        // Pour l'instant, le SVG est responsive grâce au viewBox
    }
    
    // Méthode pour mettre à jour les données
    updateData(newDeities, newRelations) {
        this.deities = newDeities;
        this.relations = newRelations;
        this.init();
    }
    
    // Méthode pour détruire le diagramme
    destroy() {
        if (this.tooltip) {
            this.tooltip.remove();
        }
        this.container.innerHTML = '';
        this.nodes.clear();
        this.lines.clear();
    }
}

// Fonction d'initialisation globale
function initDivineRelations() {
    // Cette fonction sera appelée depuis le template Hugo
    // avec les données des divinités et relations
    
    const container = document.getElementById('relations-diagram');
    if (!container) return;
    
    // Les données seront injectées par Hugo
    if (typeof window.deitiesData !== 'undefined' && typeof window.relationsData !== 'undefined') {
        new DivineRelationsDiagram('relations-diagram', window.deitiesData, window.relationsData);
    }
}

// Auto-initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initDivineRelations);

// Export pour utilisation modulaire si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DivineRelationsDiagram;
}