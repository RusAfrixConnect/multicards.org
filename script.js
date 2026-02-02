// WorldCards.org - Script Principal Simplifié
console.log('🌍 WorldCards.org - Chargement...');

// ============================================
// 1. DONNÉES DES PRODUITS
// ============================================

// Toutes les catégories
const categories = [
    { id: 'pokemon', name: 'Pokémon', icon: 'fa-dragon', color: '#ffcb05', count: 21 },
    { id: 'football', name: 'Football', icon: 'fa-futbol', color: '#27ae60', count: 31 },
    { id: 'clubs', name: 'Clubs', icon: 'fa-shield-alt', color: '#ff9f43', count: 21 },
    { id: 'moments', name: 'Moments', icon: 'fa-trophy', color: '#f1c40f', count: 7 },
    { id: 'collection', name: 'Collection', icon: 'fa-crown', color: '#9b59b6', count: 13 },
    { id: 'hockey', name: 'Hockey', icon: 'fa-hockey-puck', color: '#1e88e5', count: 3 }
];

// Tous les produits (simplifiés sans images)
const allProducts = [
    // ========== FOOTBALL PLAYERS ==========
    { id: 1, name: 'Lionel Messi', category: 'football', price: 500, rarity: 'GOAT', team: 'Inter Miami', position: 'ATT', country: 'Argentine' },
    { id: 2, name: 'Cristiano Ronaldo', category: 'football', price: 450, rarity: 'GOAT', team: 'Al Nassr', position: 'ATT', country: 'Portugal' },
    { id: 3, name: 'Kylian Mbappé', category: 'football', price: 350, rarity: 'Icon', team: 'Paris SG', position: 'ATT', country: 'France' },
    { id: 4, name: 'Erling Haaland', category: 'football', price: 320, rarity: 'Icon', team: 'Manchester City', position: 'ATT', country: 'Norvège' },
    { id: 5, name: 'Kevin De Bruyne', category: 'football', price: 250, rarity: 'Super Rare', team: 'Manchester City', position: 'MIL', country: 'Belgique' },
    { id: 6, name: 'Vinicius Junior', category: 'football', price: 280, rarity: 'Icon', team: 'Real Madrid', position: 'ATT', country: 'Brésil' },
    { id: 7, name: 'Jude Bellingham', category: 'football', price: 300, rarity: 'Phénomène', team: 'Real Madrid', position: 'MIL', country: 'Angleterre' },
    { id: 8, name: 'Harry Kane', category: 'football', price: 220, rarity: 'Icon', team: 'Bayern Munich', position: 'ATT', country: 'Angleterre' },
    { id: 9, name: 'Mohamed Salah', category: 'football', price: 200, rarity: 'Icon', team: 'Liverpool', position: 'ATT', country: 'Égypte' },
    { id: 10, name: 'Neymar Jr', category: 'football', price: 280, rarity: 'Icon', team: 'Al Hilal', position: 'ATT', country: 'Brésil' },
    
    // Joueurs que tu as demandés
    { id: 11, name: 'Raphinha', category: 'football', price: 85, rarity: 'Rare', team: 'FC Barcelone', position: 'ATT', country: 'Brésil' },
    { id: 12, name: 'Antonio Rüdiger', category: 'football', price: 75, rarity: 'Rare', team: 'Real Madrid', position: 'DEF', country: 'Allemagne' },
    { id: 13, name: 'Cristian Romero', category: 'football', price: 90, rarity: 'Rare', team: 'Tottenham', position: 'DEF', country: 'Argentine' },
    { id: 14, name: 'Yann Sommer', category: 'football', price: 65, rarity: 'Rare', team: 'Inter Milan', position: 'GAR', country: 'Suisse' },
    { id: 15, name: 'Nicolò Barella', category: 'football', price: 120, rarity: 'Super Rare', team: 'Inter Milan', position: 'MIL', country: 'Italie' },
    
    // ========== POKÉMON CARDS ==========
    { id: 101, name: 'Scizor', category: 'pokemon', price: 45, rarity: 'Rare Holo', type: 'Metal', generation: '2' },
    { id: 102, name: 'Aegislash', category: 'pokemon', price: 85, rarity: 'Ultra Rare', type: 'Metal/Ghost', generation: '6' },
    { id: 103, name: 'Simisear', category: 'pokemon', price: 25, rarity: 'Rare', type: 'Fire', generation: '5' },
    { id: 104, name: 'Calyrex', category: 'pokemon', price: 120, rarity: 'Secret Rare', type: 'Psychic/Grass', generation: '8' },
    { id: 105, name: 'Sinistcha', category: 'pokemon', price: 65, rarity: 'Illustration Rare', type: 'Grass/Ghost', generation: '9' },
    { id: 106, name: 'Celebi', category: 'pokemon', price: 350, rarity: 'Mythical', type: 'Psychic/Grass', generation: '2' },
    { id: 107, name: 'Porygon2', category: 'pokemon', price: 180, rarity: 'Rare Holo', type: 'Normal', generation: '2' },
    { id: 108, name: 'Togekiss', category: 'pokemon', price: 55, rarity: 'Rare Holo', type: 'Fairy/Flying', generation: '4' },
    { id: 109, name: 'Lapras', category: 'pokemon', price: 150, rarity: 'Rare Holo', type: 'Water/Ice', generation: '1' },
    { id: 110, name: 'Noivern', category: 'pokemon', price: 40, rarity: 'Rare Holo', type: 'Flying/Dragon', generation: '6' },
    
    // ========== CLUBS ==========
    { id: 201, name: 'Real Madrid', category: 'clubs', price: 800, rarity: 'Legendary', country: 'Espagne', trophies: 98, founded: 1902 },
    { id: 202, name: 'Liverpool FC', category: 'clubs', price: 650, rarity: 'Historic', country: 'Angleterre', trophies: 68, founded: 1892 },
    { id: 203, name: 'Juventus', category: 'clubs', price: 550, rarity: 'Legendary', country: 'Italie', trophies: 70, founded: 1897 },
    { id: 204, name: 'Atalanta', category: 'clubs', price: 280, rarity: 'Rising', country: 'Italie', trophies: 2, founded: 1907 },
    { id: 205, name: 'Aston Villa', category: 'clubs', price: 350, rarity: 'Historic', country: 'Angleterre', trophies: 25, founded: 1874 },
    { id: 206, name: 'River Plate', category: 'clubs', price: 450, rarity: 'Legendary', country: 'Argentine', trophies: 70, founded: 1901 },
    { id: 207, name: 'Benfica', category: 'clubs', price: 400, rarity: 'Historic', country: 'Portugal', trophies: 84, founded: 1904 },
    { id: 208, name: 'RB Leipzig', category: 'clubs', price: 250, rarity: 'Modern', country: 'Allemagne', trophies: 1, founded: 2009 },
    { id: 209, name: 'Celtic Glasgow', category: 'clubs', price: 380, rarity: 'Historic', country: 'Écosse', trophies: 113, founded: 1887 },
    { id: 210, name: 'Stade Brestois', category: 'clubs', price: 180, rarity: 'Rising', country: 'France', trophies: 0, founded: 1950 },
    
    // ========== MOMENTS ==========
    { id: 301, name: 'Man City vs Inter Milan 2023', category: 'moments', price: 450, rarity: 'Champions', competition: 'Finale LDC', year: 2023 },
    { id: 302, name: 'Real Madrid vs Atlético 2016', category: 'moments', price: 380, rarity: 'Historic', competition: 'Finale LDC', year: 2016 },
    { id: 303, name: 'Barcelone vs Liverpool 2019', category: 'moments', price: 550, rarity: 'Iconic', competition: 'Demi-finale LDC', year: 2019 },
    { id: 304, name: 'Real Madrid vs Liverpool 2018', category: 'moments', price: 480, rarity: 'Iconic', competition: 'Finale LDC', year: 2018 },
    { id: 305, name: 'Bayern vs Arsenal 2017', category: 'moments', price: 220, rarity: 'Historic', competition: 'Ligue des Champions', year: 2017 },
    
    // ========== COLLECTION ==========
    { id: 401, name: 'Zinedine Zidane', category: 'collection', price: 1200, rarity: 'Iconic', type: 'Legend', year: 2006 },
    { id: 402, name: 'Luka Modrić', category: 'collection', price: 850, rarity: 'Golden', type: 'Legend', year: 2018 },
    { id: 403, name: 'Fernando Torres', category: 'collection', price: 650, rarity: 'Legend', type: 'Legend', year: 2008 },
    { id: 404, name: 'Zlatan Ibrahimović', category: 'collection', price: 950, rarity: 'Iconic', type: 'Legend', year: 2023 },
    { id: 405, name: 'Endrick', category: 'collection', price: 450, rarity: 'Elite Prospect', type: 'Young Talent', year: 2024 },
    { id: 406, name: 'Francesco Camarda', category: 'collection', price: 300, rarity: 'Record Breaker', type: 'Young Talent', year: 2023 },
    
    // ========== HOCKEY ==========
    { id: 501, name: 'Connor McDavid', category: 'hockey', price: 450, rarity: 'Superstar', league: 'NHL', position: 'Forward' },
    { id: 502, name: 'Alexander Ovechkin', category: 'hockey', price: 380, rarity: 'Legend', league: 'NHL', position: 'Forward' },
    { id: 503, name: 'Sidney Crosby', category: 'hockey', price: 420, rarity: 'Legend', league: 'NHL', position: 'Forward' }
];

// ============================================
// 2. GESTION DU PANIER
// ============================================

let cart = JSON.parse(localStorage.getItem('worldcards_cart')) || [];

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} ajouté au panier !`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    showNotification('Produit retiré du panier', 'info');
}

function saveCart() {
    localStorage.setItem('worldcards_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
        countElement.textContent = total;
        countElement.style.display = total > 0 ? 'flex' : 'none';
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ============================================
// 3. FONCTIONS D'AFFICHAGE
// ============================================

function loadCategories() {
    const grid = document.querySelector('.categories-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = `category-card ${cat.id}`;
        card.innerHTML = `
            <i class="fas ${cat.icon}"></i>
            <h3>${cat.name}</h3>
            <p>${cat.count} cartes</p>
            <a href="#${cat.id}" class="btn-view">Voir →</a>
        `;
        
        card.addEventListener('click', () => {
            scrollToSection(cat.id);
        });
        
        grid.appendChild(card);
    });
}

function loadFeaturedProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;
    
    // Prendre 8 produits au hasard
    const featured = [...allProducts].sort(() => Math.random() - 0.5).slice(0, 8);
    
    grid.innerHTML = '';
    
    featured.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function loadFootballPlayers() {
    const grid = document.querySelector('.players-grid');
    if (!grid) return;
    
    const footballPlayers = allProducts.filter(p => p.category === 'football');
    
    grid.innerHTML = '';
    
    footballPlayers.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <div class="player-image" style="background: linear-gradient(135deg, #27ae60, #2ecc71)">
                <div class="player-rarity">${player.rarity}</div>
                <div class="player-price">€${player.price}</div>
                <div class="player-country">${player.country || ''}</div>
            </div>
            <div class="player-info">
                <h3 class="player-name">${player.name}</h3>
                <div class="player-details">
                    <span class="player-team">${player.team}</span>
                    <span class="player-position">${player.position}</span>
                </div>
                <div class="player-stats">
                    <div class="stat">
                        <i class="fas fa-star"></i>
                        <span>Note: 9.2</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-chart-line"></i>
                        <span>+15% value</span>
                    </div>
                </div>
                <button class="btn-add-cart" data-id="${player.id}">
                    <i class="fas fa-cart-plus"></i> Ajouter
                </button>
            </div>
        `;
        
        card.querySelector('.btn-add-cart').addEventListener('click', () => {
            addToCart(player);
        });
        
        grid.appendChild(card);
    });
}

function loadPokemonCards() {
    const grid = document.querySelector('.pokemon-grid');
    if (!grid) return;
    
    const pokemonCards = allProducts.filter(p => p.category === 'pokemon');
    
    grid.innerHTML = '';
    
    pokemonCards.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <div class="pokemon-card-header" style="background: linear-gradient(135deg, #6a11cb, #2575fc)">
                <div class="pokemon-card-type">${pokemon.type}</div>
                <div class="pokemon-card-rarity">${pokemon.rarity}</div>
                <div class="pokemon-card-gen">Gen ${pokemon.generation}</div>
            </div>
            <div class="pokemon-card-body">
                <div class="pokemon-card-name">
                    <h3>${pokemon.name}</h3>
                    <span class="pokemon-card-generation">#${pokemon.id}</span>
                </div>
                <div class="pokemon-card-set">
                    <span>Édition spéciale</span>
                    <span>${pokemon.generation}e Gen</span>
                </div>
                <div class="pokemon-card-footer">
                    <div class="pokemon-card-price">
                        €${pokemon.price} <span class="currency">EUR</span>
                    </div>
                    <button class="btn-pokemon-add" data-id="${pokemon.id}">
                        <i class="fas fa-pokeball"></i> Ajouter
                    </button>
                </div>
            </div>
        `;
        
        card.querySelector('.btn-pokemon-add').addEventListener('click', () => {
            addToCart(pokemon);
        });
        
        grid.appendChild(card);
    });
}

function loadClubCards() {
    const grid = document.querySelector('.clubs-grid');
    if (!grid) return;
    
    const clubCards = allProducts.filter(p => p.category === 'clubs');
    
    grid.innerHTML = '';
    
    clubCards.forEach(club => {
        const card = document.createElement('div');
        card.className = 'club-card';
        card.innerHTML = `
            <div class="club-card-header" style="background: linear-gradient(135deg, #0c2461, #1e3799)">
                <div class="club-card-country">${club.country}</div>
                <div class="club-card-founded">${club.founded}</div>
                <div class="club-card-trophies">${club.trophies} titres</div>
            </div>
            <div class="club-card-body">
                <div class="club-card-title">
                    <span>${club.name}</span>
                    <span class="club-card-league">${club.rarity}</span>
                </div>
                <div class="club-card-stats">
                    <div class="club-stat-item">
                        <span class="club-stat-value">${club.trophies}</span>
                        <span class="club-stat-label">Titres</span>
                    </div>
                    <div class="club-stat-item">
                        <span class="club-stat-value">${club.founded}</span>
                        <span class="club-stat-label">Fondé</span>
                    </div>
                </div>
                <div class="club-card-footer">
                    <div class="club-card-price">
                        €${club.price} <span class="currency">EUR</span>
                    </div>
                    <button class="btn-club-add" data-id="${club.id}">
                        <i class="fas fa-shield-alt"></i> Collectionner
                    </button>
                </div>
            </div>
        `;
        
        card.querySelector('.btn-club-add').addEventListener('click', () => {
            addToCart(club);
        });
        
        grid.appendChild(card);
    });
}

function loadMomentCards() {
    const grid = document.querySelector('.moments-grid');
    if (!grid) return;
    
    const momentCards = allProducts.filter(p => p.category === 'moments');
    
    grid.innerHTML = '';
    
    momentCards.forEach(moment => {
        const card = document.createElement('div');
        card.className = 'moment-card';
        card.innerHTML = `
            <div class="moment-card-header" style="background: linear-gradient(135deg, #1a1a2e, #16213e)">
                <div class="moment-card-competition">${moment.competition}</div>
                <div class="moment-card-year">${moment.year}</div>
            </div>
            <div class="moment-card-body">
                <h3 class="moment-card-title">${moment.name}</h3>
                <div class="moment-card-subtitle">
                    <span class="moment-card-date">${moment.year}</span>
                    <span class="moment-card-rarity">${moment.rarity}</span>
                </div>
                <div class="moment-card-footer">
                    <div class="moment-card-price">
                        €${moment.price} <span class="currency">EUR</span>
                    </div>
                    <button class="btn-moment-add" data-id="${moment.id}">
                        <i class="fas fa-trophy"></i> Collectionner
                    </button>
                </div>
            </div>
        `;
        
        card.querySelector('.btn-moment-add').addEventListener('click', () => {
            addToCart(moment);
        });
        
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <i class="fas ${getCategoryIcon(product.category)}"></i>
        </div>
        <div class="product-info">
            <div class="product-title">${product.name}</div>
            <div class="product-category">${getCategoryName(product.category)}</div>
            <div class="product-rarity">${product.rarity || ''}</div>
            <div class="product-price" data-price-eur="${product.price}">
                €${product.price} <span class="currency">EUR</span>
            </div>
            <button class="btn-add-cart" data-id="${product.id}">
                <i class="fas fa-cart-plus"></i> Ajouter
            </button>
        </div>
    `;
    
    card.querySelector('.btn-add-cart').addEventListener('click', () => {
        addToCart(product);
    });
    
    return card;
}

// ============================================
// 4. FONCTIONS UTILITAIRES
// ============================================

function getCategoryIcon(category) {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : 'fa-question';
}

function getCategoryName(category) {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : category;
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message, type = 'info') {
    // Créer une notification simple
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : '#3498db'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <span>${message}</span>
        <button style="margin-left: 15px; background: none; border: none; color: white; cursor: pointer;">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Fermer après 3 secondes
    setTimeout(() => {
        notification.remove();
    }, 3000);
    
    // Fermer au clic
    notification.querySelector('button').addEventListener('click', () => {
        notification.remove();
    });
}

function performSearch() {
    const input = document.querySelector('.search-bar input');
    if (!input) return;
    
    const query = input.value.trim().toLowerCase();
    if (query) {
        const results = allProducts.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            (product.team && product.team.toLowerCase().includes(query)) ||
            (product.country && product.country.toLowerCase().includes(query))
        );
        
        if (results.length > 0) {
            showNotification(`Trouvé ${results.length} résultat(s) pour "${query}"`, 'success');
            // Tu pourras ajouter un affichage des résultats plus tard
        } else {
            showNotification(`Aucun résultat pour "${query}"`, 'info');
        }
    }
}

// ============================================
// 5. INITIALISATION
// ============================================

function setupEventListeners() {
    // Recherche
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
    
    // Navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = this.getAttribute('href').substring(1);
                scrollToSection(target);
            }
        });
    });
    
    // Filtres football
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Tu pourras ajouter le filtrage plus tard
        });
    });
    
    // Types Pokémon
    document.querySelectorAll('.type-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.type-filter').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Tu pourras ajouter le filtrage plus tard
        });
    });
    
    // Continents clubs
    document.querySelectorAll('.continent-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.continent-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Tu pourras ajouter le filtrage plus tard
        });
    });
    
    // Bouton CTA
    document.querySelector('.btn-primary')?.addEventListener('click', () => {
        scrollToSection('football');
    });
    
    // Newsletter
    const newsletterBtn = document.querySelector('.newsletter button');
    const newsletterInput = document.querySelector('.newsletter input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', () => {
            if (newsletterInput.value.includes('@')) {
                showNotification('Merci pour votre inscription à la newsletter !', 'success');
                newsletterInput.value = '';
            } else {
                showNotification('Veuillez entrer un email valide', 'info');
            }
        });
    }
}

function initializeApp() {
    console.log('🚀 Initialisation de WorldCards.org');
    
    // Charger les données
    loadCategories();
    loadFeaturedProducts();
    loadFootballPlayers();
    loadPokemonCards();
    loadClubCards();
    loadMomentCards();
    
    // Mettre à jour le panier
    updateCartCount();
    
    // Configurer les événements
    setupEventListeners();
    
    // Afficher un message de bienvenue
    setTimeout(() => {
        console.log('✅ WorldCards.org est prêt !');
        showNotification('Bienvenue sur WorldCards.org ! 🌍', 'success');
    }, 1000);
}

// ============================================
// 6. DÉMARRAGE
// ============================================

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', initializeApp);

// Exposer certaines fonctions globalement (pour la console)
window.WorldCards = {
    cart: () => cart,
    products: () => allProducts,
    addToCart,
    removeFromCart,
    clearCart: () => {
        cart = [];
        saveCart();
        updateCartCount();
        showNotification('Panier vidé', 'info');
    },
    getTotal: getCartTotal
};
