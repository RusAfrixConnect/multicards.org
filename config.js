// Configuration WorldCards.org
const WORLDCARDS_CONFIG = {
    // Site Information
    site: {
        name: "WorldCards.org",
        domain: "worldcards.org",
        email: "contact@worldcards.org",
        phone: "+33 1 23 45 67 89",
        address: "Paris, France",
        slogan: "Le marché mondial des cartes collection",
        description: "Plateforme mondiale pour collectionneurs de cartes Pokémon, Football, Hockey et plus"
    },
    
    // Design & Colors
    design: {
        primaryColor: "#ff6b6b",
        secondaryColor: "#ee5a24",
        accentColor: "#3498db",
        darkColor: "#2c3e50",
        lightColor: "#ecf0f1",
        gradient: "linear-gradient(90deg, #ff6b6b, #ee5a24)"
    },
    
    // Features
    features: {
        languages: ["fr", "en", "ru", "zh"],
        currencies: ["EUR", "USD", "RUB"],
        categories: ["pokemon", "football", "clubs", "moments", "hockey", "collection"],
        paymentMethods: ["credit_card", "paypal", "bank_transfer"],
        shippingCountries: 42
    },
    
    // Social Media
    social: {
        instagram: "https://instagram.com/worldcards_org",
        twitter: "https://twitter.com/WorldCardsOrg",
        facebook: "https://facebook.com/worldcardsorg",
        youtube: "https://youtube.com/@worldcards",
        tiktok: "https://tiktok.com/@worldcards",
        telegram: "https://t.me/worldcards",
        discord: "https://discord.gg/worldcards"
    },
    
    // Statistics
    stats: {
        totalCards: 850,
        totalUsers: 5000,
        totalCountries: 42,
        totalValue: 210000,
        dailyVisitors: 1500,
        satisfactionRate: 98
    },
    
    // API Endpoints (for future development)
    api: {
        baseUrl: "https://api.worldcards.org/v1",
        endpoints: {
            products: "/products",
            users: "/users",
            orders: "/orders",
            categories: "/categories",
            search: "/search"
        }
    },
    
    // Default Settings
    defaults: {
        language: "fr",
        currency: "EUR",
        itemsPerPage: 12,
        showPricesIncludingVAT: true,
        shippingCost: 4.99
    },
    
    // Legal
    legal: {
        termsUrl: "/terms",
        privacyUrl: "/privacy",
        cookiesUrl: "/cookies",
        refundPolicy: "/refund",
        shippingPolicy: "/shipping"
    },
    
    // Initialize
    init: function() {
        console.log(`🌍 ${this.site.name} - ${this.site.slogan}`);
        this.applyDesign();
        this.updateStats();
    },
    
    // Apply design colors
    applyDesign: function() {
        document.documentElement.style.setProperty('--world-red', this.design.primaryColor);
        document.documentElement.style.setProperty('--world-orange', this.design.secondaryColor);
        document.design = this.design;
    },
    
    // Update statistics in the DOM
    updateStats: function() {
        const stats = this.stats;
        const elements = {
            totalCards: document.querySelector('.hero-stats .stat:nth-child(1) .number'),
            totalCountries: document.querySelector('.hero-stats .stat:nth-child(2) .number'),
            totalValue: document.querySelector('.hero-stats .stat:nth-child(3) .number')
        };
        
        if (elements.totalCards) elements.totalCards.textContent = `${stats.totalCards}+`;
        if (elements.totalCountries) elements.totalCountries.textContent = stats.totalCountries;
        if (elements.totalValue) elements.totalValue.textContent = `€${(stats.totalValue / 1000).toFixed(0)}K+`;
    },
    
    // Get current configuration
    getConfig: function() {
        return {
            ...this.site,
            ...this.design,
            features: this.features
        };
    },
    
    // Get language settings
    getLanguageSettings: function(lang) {
        const languages = {
            fr: { name: "Français", flag: "🇫🇷", direction: "ltr" },
            en: { name: "English", flag: "🇬🇧", direction: "ltr" },
            ru: { name: "Русский", flag: "🇷🇺", direction: "ltr" },
            zh: { name: "中文", flag: "🇨🇳", direction: "ltr" }
        };
        return languages[lang] || languages.fr;
    },
    
    // Get currency settings
    getCurrencySettings: function(currency) {
        const currencies = {
            EUR: { symbol: "€", name: "Euro", rate: 1 },
            USD: { symbol: "$", name: "US Dollar", rate: 1.08 },
            RUB: { symbol: "₽", name: "Russian Ruble", rate: 98.5 }
        };
        return currencies[currency] || currencies.EUR;
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    WORLDCARDS_CONFIG.init();
    
    // Make config globally available
    window.WorldCards = WORLDCARDS_CONFIG;
    
    // Update page title with site name
    document.title = `${WORLDCARDS_CONFIG.site.name} - ${WORLDCARDS_CONFIG.site.slogan}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = WORLDCARDS_CONFIG.site.description;
    }
});
