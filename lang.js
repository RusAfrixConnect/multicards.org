const translations = {
    fr: {
        home: "Accueil",
        categories: "Catégories",
        sell: "Vendre",
        about: "À propos",
        contact: "Contact",
        login: "Connexion",
        register: "Inscription",
        search_placeholder: "Rechercher une carte, un personnage, une équipe...",
        search: "Rechercher",
        hero_title: "La plus grande marketplace de cartes collection",
        hero_subtitle: "Pokémon, One Piece, Football, Hockey et plus encore. Achetez, vendez, échangez en toute sécurité.",
        our_categories: "Nos Catégories",
        featured_cards: "Cartes en Vedette",
        about_us: "À propos",
        about_text: "MultiCards.org est la plateforme spécialisée pour les collectionneurs de cartes. Authenticité garantie.",
        pokemon: "Pokémon",
        onepiece: "One Piece",
        football: "Football",
        teams: "Équipes",
        moments: "Moments Football",
        collector: "Collector Football",
        russia: "Football Russie",
        hockey: "Hockey",
        clubs: "Clubs",
        collection: "Collection",
        add_to_cart: "Ajouter au panier"
    },
    en: {
        home: "Home",
        categories: "Categories",
        sell: "Sell",
        about: "About",
        contact: "Contact",
        login: "Login",
        register: "Register",
        search_placeholder: "Search for a card, character, team...",
        search: "Search",
        hero_title: "The largest marketplace for collectible cards",
        hero_subtitle: "Pokémon, One Piece, Football, Hockey and more. Buy, sell, trade securely.",
        our_categories: "Our Categories",
        featured_cards: "Featured Cards",
        about_us: "About Us",
        about_text: "MultiCards.org is the specialized platform for card collectors. Authenticity guaranteed.",
        pokemon: "Pokémon",
        onepiece: "One Piece",
        football: "Football",
        teams: "Teams",
        moments: "Football Moments",
        collector: "Football Collector",
        russia: "Russian Football",
        hockey: "Hockey",
        clubs: "Clubs",
        collection: "Collection",
        add_to_cart: "Add to Cart"
    },
    ru: {
        home: "Главная",
        categories: "Категории",
        sell: "Продать",
        about: "О нас",
        contact: "Контакты",
        login: "Войти",
        register: "Регистрация",
        search_placeholder: "Поиск карты, персонажа, команды...",
        search: "Поиск",
        hero_title: "Крупнейшая площадка коллекционных карт",
        hero_subtitle: "Покемон, One Piece, Футбол, Хоккей и многое другое. Покупайте, продавайте, обменивайте безопасно.",
        our_categories: "Наши Категории",
        featured_cards: "Рекомендуемые Карты",
        about_us: "О нас",
        about_text: "MultiCards.org - специализированная платформа для коллекционеров карт. Гарантия подлинности.",
        pokemon: "Покемон",
        onepiece: "One Piece",
        football: "Футбол",
        teams: "Команды",
        moments: "Футбольные Моменты",
        collector: "Футбольные Коллекционные",
        russia: "Российский Футбол",
        hockey: "Хоккей",
        clubs: "Клубы",
        collection: "Коллекция",
        add_to_cart: "Добавить в корзину"
    },
    zh: {
        home: "首页",
        categories: "分类",
        sell: "出售",
        about: "关于",
        contact: "联系",
        login: "登录",
        register: "注册",
        search_placeholder: "搜索卡片、角色、球队...",
        search: "搜索",
        hero_title: "最大的收藏卡交易平台",
        hero_subtitle: "宝可梦、海贼王、足球卡、冰球卡等。安全买卖交易。",
        our_categories: "我们的分类",
        featured_cards: "精选卡片",
        about_us: "关于我们",
        about_text: "MultiCards.org 是专业的卡片收藏平台。保证真品。",
        pokemon: "宝可梦",
        onepiece: "海贼王",
        football: "足球",
        teams: "球队",
        moments: "足球时刻",
        collector: "足球收藏",
        russia: "俄罗斯足球",
        hockey: "冰球",
        clubs: "俱乐部",
        collection: "收藏",
        add_to_cart: "加入购物车"
    }
};

let currentLang = 'fr';

function updateLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    updateCurrency();
    localStorage.setItem('multicards_lang', lang);
}

const exchangeRates = {
    EUR: 1,
    USD: 1.08,
    RUB: 98.5
};

function updateCurrency() {
    const currency = document.getElementById('currencySelect').value;
    const rate = exchangeRates[currency];
    const symbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : '₽';
    
    document.querySelectorAll('.product-price').forEach(priceElement => {
        const basePrice = priceElement.getAttribute('data-price-eur');
        if (basePrice) {
            const convertedPrice = (basePrice * rate).toFixed(2);
            priceElement.innerHTML = `${symbol}${convertedPrice} <span class="currency">${currency}</span>`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('multicards_lang') || 'fr';
    document.getElementById('languageSelect').value = savedLang;
    updateLanguage(savedLang);
    
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });
    
    document.getElementById('currencySelect').addEventListener('change', updateCurrency);
});
