/* ============================================================
   Pizza Truck – app.js
   Tabs · Cards · SVG Illustrations · Freddy Chat Assistant
   ============================================================ */
'use strict';

// =====================================================================
// MENU DATA
// =====================================================================
const MENU = {
  pizzas: [
    {
      id: 'calabresa',
      name: 'Sausage & Onion',
      description: 'Smoked Italian sausage, caramelized onions, rich tomato sauce & melted mozzarella',
      tags: ['meat', 'classic'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 9.99  },
        { key: 'small',    label: 'Small',    size: '8"',  price: 13.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 18.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 23.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 29.99 },
      ]
    },
    {
      id: 'portuguesa',
      name: 'Portuguese Style',
      description: 'Ham, hard-boiled eggs, black olives, onion, green peppers & mozzarella',
      tags: ['meat', 'classic'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 10.99 },
        { key: 'small',    label: 'Small',    size: '8"',  price: 14.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 19.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 24.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 31.99 },
      ]
    },
    {
      id: 'mussarela',
      name: 'Mozzarella',
      description: 'Tomato sauce, generous fresh mozzarella & fragrant oregano',
      tags: ['vegetarian', 'classic', 'cheese'],
      promo: true, discount: 15,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 8.99  },
        { key: 'small',    label: 'Small',    size: '8"',  price: 12.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 16.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 21.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 26.99 },
      ]
    },
    {
      id: 'margherita',
      name: 'Margherita',
      description: 'Classic San Marzano tomato sauce, buffalo mozzarella & fresh basil',
      tags: ['vegetarian', 'classic'],
      promo: true, discount: 20,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 8.99  },
        { key: 'small',    label: 'Small',    size: '8"',  price: 12.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 16.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 21.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 26.99 },
      ]
    },
    {
      id: 'doce',
      name: 'Sweet Delight',
      description: 'Nutella cream base, fresh strawberries, banana slices & condensed milk drizzle',
      tags: ['sweet', 'dessert'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 10.99 },
        { key: 'small',    label: 'Small',    size: '8"',  price: 14.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 19.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 24.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 30.99 },
      ]
    },
    {
      id: 'frango_catupiry',
      name: 'Chicken & Catupiry',
      description: 'Shredded chicken breast, velvety Catupiry cream cheese & tomato sauce',
      tags: ['meat', 'chicken', 'creamy'],
      promo: true, discount: 10,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 10.99 },
        { key: 'small',    label: 'Small',    size: '8"',  price: 15.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 20.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 25.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 32.99 },
      ]
    },
    {
      id: 'vegetariana',
      name: 'Garden Vegetarian',
      description: 'Bell peppers, mushrooms, black olives, cherry tomatoes, broccoli & mozzarella',
      tags: ['vegetarian', 'healthy'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 9.99  },
        { key: 'small',    label: 'Small',    size: '8"',  price: 13.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 18.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 23.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 29.99 },
      ]
    },
    {
      id: 'napolitana',
      name: 'Neapolitan',
      description: 'Fresh mozzarella, ripe tomato slices, basil, garlic & extra virgin olive oil',
      tags: ['vegetarian', 'classic', 'italian'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 9.99  },
        { key: 'small',    label: 'Small',    size: '8"',  price: 14.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 19.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 24.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 30.99 },
      ]
    },
    {
      id: 'pepperoni',
      name: 'Classic Pepperoni',
      description: 'Generous layers of pepperoni slices, tomato sauce & bubbling mozzarella',
      tags: ['meat', 'classic', 'american'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 9.99  },
        { key: 'small',    label: 'Small',    size: '8"',  price: 13.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 18.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 23.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 29.99 },
      ]
    },
  ],

  special: [
    {
      id: 'tomate_seco',
      name: 'Sun-Dried Tomato',
      description: 'Sun-dried tomatoes, fresh arugula, Parmesan shavings, black olives & ricotta',
      tags: ['gourmet', 'vegetarian'],
      promo: true, discount: 12,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 14.99 },
        { key: 'small',    label: 'Small',    size: '8"',  price: 19.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 26.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 33.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 41.99 },
      ]
    },
    {
      id: 'cogumelos_trufas',
      name: 'Mushroom & Truffle',
      description: 'Portobello & shiitake mushrooms, truffle oil, Gorgonzola & fresh thyme',
      tags: ['gourmet', 'vegetarian', 'premium'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', label: 'Brotinho', size: '6"',  price: 16.99 },
        { key: 'small',    label: 'Small',    size: '8"',  price: 22.99 },
        { key: 'medium',   label: 'Medium',   size: '12"', price: 30.99 },
        { key: 'large',    label: 'Large',    size: '14"', price: 39.99 },
        { key: 'family',   label: 'Family',   size: '18"', price: 48.99 },
      ]
    },
  ],

  beverages: [
    { id: 'agua_gas',      name: 'Sparkling Water',    description: 'Refreshing sparkling mineral water – 500ml bottle', cat: 'water',  price: 2.99 },
    { id: 'agua_sem',      name: 'Still Water',        description: 'Pure still mineral water – 500ml bottle',           cat: 'water',  price: 2.49 },
    { id: 'coca',          name: 'Coca-Cola',          description: 'Classic Coca-Cola – 350ml can',                     cat: 'soda',   price: 2.99 },
    { id: 'pepsi',         name: 'Pepsi',              description: 'Classic Pepsi Cola – 350ml can',                    cat: 'soda',   price: 2.99 },
    { id: 'guarana',       name: 'Guaraná Antarctica', description: 'Brazilian guaraná soda – 350ml can',                cat: 'soda',   price: 2.99 },
    { id: 'fanta',         name: 'Fanta Orange',       description: 'Refreshing Fanta Orange – 350ml can',               cat: 'soda',   price: 2.99 },
    { id: 'suco_uva',      name: 'Grape Juice',        description: 'Natural grape juice – 350ml can',                   cat: 'juice',  price: 3.49 },
    { id: 'suco_laranja',  name: 'Orange Juice',       description: 'Fresh orange juice – 350ml can',                    cat: 'juice',  price: 3.49 },
    { id: 'suco_caju',     name: 'Cashew Juice',       description: 'Exotic Brazilian cashew fruit juice – 350ml can',   cat: 'juice',  price: 3.49 },
  ],
};

// =====================================================================
// REAL PHOTO IMAGES
// =====================================================================
const IMAGES = {
  // Pizzas – local files (images/pizzas/)
  calabresa:        './images/pizzas/calabresa.jpg',
  portuguesa:       './images/pizzas/portuguesa.jpg',
  mussarela:        './images/pizzas/mussarela.jpg',
  margherita:       './images/pizzas/margherita.jpg',
  doce:             './images/pizzas/doce.jpg',
  frango_catupiry:  './images/pizzas/frango_catupiry.jpg',
  vegetariana:      './images/pizzas/vegetariana.jpg',
  napolitana:       './images/pizzas/napolitana.jpg',
  pepperoni:        './images/pizzas/pepperoni.jpg',
  tomate_seco:      './images/pizzas/tomate_seco.jpg',
  cogumelos_trufas: './images/pizzas/cogumelos_trufas.jpg',
  // Beverages – local files (images/beverages/)
  agua_gas:         './images/beverages/agua_gas.jpg',
  agua_sem:         './images/beverages/agua_sem.jpg',
  coca:             './images/beverages/coca.jpg',
  pepsi:            './images/beverages/pepsi.jpg',
  guarana:          './images/beverages/guarana.jpg',
  fanta:            './images/beverages/fanta.jpg',
  suco_uva:         './images/beverages/suco_uva.jpg',
  suco_laranja:     './images/beverages/suco_laranja.jpg',
  suco_caju:        './images/beverages/suco_caju.jpg',
};

const FALLBACKS = {
  pizza: '🍕', water: '💧', soda: '🥤', juice: '🍹',
};

const IMG_VER = '?v=2';

function foodImg(id, alt, fallbackEmoji) {
  const url = (IMAGES[id] || '') + IMG_VER;
  return `<img src="${url}" alt="${alt}" loading="lazy"
    onerror="this.onerror=null;this.parentElement.innerHTML='<span class=\\'img-fallback\\'>${fallbackEmoji}</span>'">`;
}

function pizzaSVG(id) {
  return foodImg(id, id.replace(/_/g, ' '), '🍕');
}

/* ---- old SVG code removed ---- legacy placeholder below ---- */
function _legacyPizzaSVG_unused(id) {
  const base = (sauce, cheese, toppings) => `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g_crust_${id}" cx="45%" cy="40%" r="60%">
          <stop offset="0%"   stop-color="#D4943A"/>
          <stop offset="100%" stop-color="#7A4010"/>
        </radialGradient>
        <radialGradient id="g_sauce_${id}" cx="50%" cy="50%" r="55%">
          <stop offset="0%"   stop-color="${sauce}" stop-opacity="1"/>
          <stop offset="100%" stop-color="${sauce}" stop-opacity="0.7"/>
        </radialGradient>
        <radialGradient id="g_chz_${id}" cx="40%" cy="38%" r="60%">
          <stop offset="0%"   stop-color="${cheese}"/>
          <stop offset="100%" stop-color="#B8890A"/>
        </radialGradient>
        <filter id="shadow_${id}" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" flood-color="#000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <!-- Crust -->
      <circle cx="100" cy="100" r="92" fill="url(#g_crust_${id})" filter="url(#shadow_${id})"/>
      <!-- Crust bumps -->
      <circle cx="100" cy="13"  r="5" fill="#B87030" opacity="0.6"/>
      <circle cx="150" cy="28"  r="4" fill="#B87030" opacity="0.5"/>
      <circle cx="182" cy="68"  r="5" fill="#B87030" opacity="0.6"/>
      <circle cx="186" cy="120" r="4" fill="#B87030" opacity="0.5"/>
      <circle cx="160" cy="164" r="5" fill="#B87030" opacity="0.6"/>
      <circle cx="110" cy="186" r="4" fill="#B87030" opacity="0.5"/>
      <circle cx="58"  cy="178" r="5" fill="#B87030" opacity="0.6"/>
      <circle cx="20"  cy="140" r="4" fill="#B87030" opacity="0.5"/>
      <circle cx="14"  cy="90"  r="5" fill="#B87030" opacity="0.6"/>
      <circle cx="38"  cy="38"  r="4" fill="#B87030" opacity="0.5"/>
      <!-- Sauce -->
      <circle cx="100" cy="100" r="78" fill="url(#g_sauce_${id})"/>
      <!-- Cheese -->
      <circle cx="100" cy="100" r="70" fill="url(#g_chz_${id})" opacity="0.95"/>
      <!-- Cheese pools -->
      <ellipse cx="88"  cy="82"  rx="16" ry="12" fill="${cheese}" opacity="0.5"/>
      <ellipse cx="118" cy="108" rx="14" ry="10" fill="${cheese}" opacity="0.45"/>
      <ellipse cx="80"  cy="118" rx="12" ry="8"  fill="${cheese}" opacity="0.4"/>
      <!-- TOPPINGS -->
      ${toppings}
      <!-- Gloss -->
      <ellipse cx="76" cy="66" rx="24" ry="14" fill="white" opacity="0.07"/>
    </svg>`;

  const svgs = {
    calabresa: base('#B52B1E','#EDD060',`
      <circle cx="100" cy="62"  r="11" fill="#6A1010"/><circle cx="100" cy="62"  r="7" fill="none" stroke="#C08080" stroke-width="2"/>
      <circle cx="70"  cy="82"  r="11" fill="#6A1010"/><circle cx="70"  cy="82"  r="7" fill="none" stroke="#C08080" stroke-width="2"/>
      <circle cx="130" cy="82"  r="11" fill="#6A1010"/><circle cx="130" cy="82"  r="7" fill="none" stroke="#C08080" stroke-width="2"/>
      <circle cx="80"  cy="118" r="11" fill="#6A1010"/><circle cx="80"  cy="118" r="7" fill="none" stroke="#C08080" stroke-width="2"/>
      <circle cx="125" cy="118" r="11" fill="#6A1010"/><circle cx="125" cy="118" r="7" fill="none" stroke="#C08080" stroke-width="2"/>
      <circle cx="100" cy="135" r="11" fill="#6A1010"/><circle cx="100" cy="135" r="7" fill="none" stroke="#C08080" stroke-width="2"/>`),

    portuguesa: base('#B52B1E','#EDD060',`
      <!-- Ham -->
      <ellipse cx="82"  cy="78"  rx="14" ry="9" fill="#D4728A" transform="rotate(-20,82,78)"/>
      <ellipse cx="120" cy="90"  rx="13" ry="8" fill="#D4728A" transform="rotate(15,120,90)"/>
      <ellipse cx="90"  cy="122" rx="13" ry="9" fill="#D4728A" transform="rotate(10,90,122)"/>
      <!-- Egg halves -->
      <circle cx="118" cy="70"  r="10" fill="#F5E070"/>
      <circle cx="118" cy="70"  r="5"  fill="#F08010"/>
      <circle cx="75"  cy="115" r="10" fill="#F5E070"/>
      <circle cx="75"  cy="115" r="5"  fill="#F08010"/>
      <!-- Olives -->
      <circle cx="105" cy="100" r="6"  fill="#1a1a1a"/>
      <circle cx="105" cy="100" r="2"  fill="#555"/>
      <circle cx="130" cy="130" r="6"  fill="#1a1a1a"/>
      <circle cx="130" cy="130" r="2"  fill="#555"/>
      <!-- Green pepper strips -->
      <rect x="86" y="95" width="16" height="4" rx="2" fill="#5a9a30" transform="rotate(30,94,97)"/>
      <rect x="108" cy="115" width="14" height="4" rx="2" fill="#5a9a30" transform="rotate(-20,115,117)"/>`),

    mussarela: base('#C03020','#F5F0D0',`
      <!-- Fresh mozzarella blobs -->
      <ellipse cx="95"  cy="75"  rx="18" ry="14" fill="#FAFAF0" opacity="0.95"/>
      <ellipse cx="125" cy="95"  rx="15" ry="12" fill="#FAFAF0" opacity="0.95"/>
      <ellipse cx="82"  cy="112" rx="16" ry="13" fill="#FAFAF0" opacity="0.95"/>
      <ellipse cx="115" cy="128" rx="14" ry="11" fill="#FAFAF0" opacity="0.9"/>
      <!-- Oregano sprinkles -->
      <circle cx="100" cy="68"  r="2" fill="#6A8A20" opacity="0.7"/>
      <circle cx="88"  cy="102" r="2" fill="#6A8A20" opacity="0.7"/>
      <circle cx="130" cy="108" r="2" fill="#6A8A20" opacity="0.7"/>
      <circle cx="110" cy="140" r="2" fill="#6A8A20" opacity="0.7"/>
      <circle cx="75"  cy="130" r="2" fill="#6A8A20" opacity="0.7"/>`),

    margherita: base('#C03020','#F5E880',`
      <!-- Mozzarella -->
      <ellipse cx="95"  cy="75"  rx="16" ry="12" fill="#FEFEF0" opacity="0.95"/>
      <ellipse cx="124" cy="98"  rx="14" ry="11" fill="#FEFEF0" opacity="0.95"/>
      <ellipse cx="80"  cy="115" rx="15" ry="12" fill="#FEFEF0" opacity="0.95"/>
      <ellipse cx="115" cy="130" rx="13" ry="10" fill="#FEFEF0" opacity="0.9"/>
      <!-- Basil leaves -->
      <ellipse cx="108" cy="68"  rx="10" ry="5" fill="#2E7D20" transform="rotate(25,108,68)"/>
      <ellipse cx="72"  cy="92"  rx="10" ry="5" fill="#2E7D20" transform="rotate(-30,72,92)"/>
      <ellipse cx="136" cy="120" rx="10" ry="5" fill="#2E7D20" transform="rotate(15,136,120)"/>
      <ellipse cx="96"  cy="138" rx="10" ry="5" fill="#2E7D20" transform="rotate(-15,96,138)"/>
      <!-- Leaf veins -->
      <line x1="104" y1="66" x2="112" y2="70" stroke="#1a5010" stroke-width="1"/>
      <line x1="68"  y1="90" x2="76"  y2="94" stroke="#1a5010" stroke-width="1"/>`),

    doce: base('#5A3010','#F0D080',`
      <!-- Nutella swirl -->
      <path d="M 70 80 Q 100 60 130 80 Q 150 110 130 130 Q 100 150 70 130 Q 50 110 70 80" fill="#6B3010" opacity="0.5"/>
      <!-- Strawberries -->
      <ellipse cx="88"  cy="78"  rx="9" ry="11" fill="#E02030"/>
      <ellipse cx="88"  cy="78"  rx="5" ry="6"  fill="#F04040" opacity="0.5"/>
      <path d="M 85 68 Q 88 62 91 68" fill="#2E7D20"/>
      <ellipse cx="120" cy="95"  rx="9" ry="11" fill="#E02030"/>
      <ellipse cx="120" cy="95"  rx="5" ry="6"  fill="#F04040" opacity="0.5"/>
      <path d="M 117 85 Q 120 79 123 85" fill="#2E7D20"/>
      <ellipse cx="95"  cy="125" rx="9" ry="11" fill="#E02030"/>
      <path d="M 92 115 Q 95 109 98 115" fill="#2E7D20"/>
      <!-- Banana slices -->
      <ellipse cx="72"  cy="112" rx="12" ry="8" fill="#F5D020" opacity="0.9"/>
      <ellipse cx="126" cy="128" rx="12" ry="8" fill="#F5D020" opacity="0.9"/>
      <!-- Condensed milk drizzle -->
      <path d="M 80 80 Q 100 95 120 80 Q 135 100 120 120 Q 100 135 80 120 Q 65 100 80 80" fill="none" stroke="#FFF8E0" stroke-width="2.5" opacity="0.7" stroke-dasharray="4 3"/>`),

    frango_catupiry: base('#C03020','#F0E880',`
      <!-- Catupiry cream blobs -->
      <ellipse cx="92"  cy="74"  rx="18" ry="13" fill="#FFF8F0" opacity="0.97"/>
      <ellipse cx="122" cy="96"  rx="16" ry="12" fill="#FFF8F0" opacity="0.95"/>
      <ellipse cx="82"  cy="118" rx="17" ry="13" fill="#FFF8F0" opacity="0.95"/>
      <ellipse cx="116" cy="130" rx="15" ry="11" fill="#FFF8F0" opacity="0.9"/>
      <!-- Chicken chunks -->
      <ellipse cx="105" cy="80"  rx="9"  ry="6"  fill="#D4A060" transform="rotate(15,105,80)"/>
      <ellipse cx="75"  cy="98"  rx="8"  ry="6"  fill="#C4904A" transform="rotate(-20,75,98)"/>
      <ellipse cx="130" cy="115" rx="9"  ry="6"  fill="#D4A060" transform="rotate(10,130,115)"/>
      <ellipse cx="100" cy="130" rx="8"  ry="5"  fill="#C4904A" transform="rotate(-10,100,130)"/>
      <!-- Shred lines on chicken -->
      <line x1="100" y1="77" x2="110" y2="83" stroke="#A06030" stroke-width="1.5" opacity="0.6"/>
      <line x1="71"  y1="95" x2="79"  y2="101" stroke="#A06030" stroke-width="1.5" opacity="0.6"/>`),

    vegetariana: base('#B52B1E','#EDD060',`
      <!-- Bell peppers -->
      <rect x="72" y="72" width="14" height="18" rx="4" fill="#D42020" transform="rotate(-15,79,81)"/>
      <rect x="112" y="68" width="14" height="18" rx="4" fill="#20A820" transform="rotate(10,119,77)"/>
      <rect x="128" y="105" width="12" height="16" rx="4" fill="#E0A020" transform="rotate(-8,134,113)"/>
      <!-- Mushrooms -->
      <ellipse cx="88" cy="108" rx="12" ry="7"  fill="#9A7040"/>
      <rect    cx="88" cy="108" x="85" y="108" width="6" height="8" rx="1" fill="#C09060"/>
      <ellipse cx="110" cy="130" rx="11" ry="7" fill="#9A7040"/>
      <rect    cx="110" cy="130" x="107" y="130" width="6" height="8" rx="1" fill="#C09060"/>
      <!-- Olives -->
      <circle cx="125" cy="80"  r="6" fill="#2a2a2a"/>
      <circle cx="125" cy="80"  r="2" fill="#555"/>
      <circle cx="75"  cy="130" r="6" fill="#2a2a2a"/>
      <circle cx="75"  cy="130" r="2" fill="#555"/>
      <!-- Broccoli dots -->
      <circle cx="100" cy="95"  r="7" fill="#2E6820"/>
      <circle cx="97"  cy="93"  r="3" fill="#3A8030"/>
      <circle cx="103" cy="92"  r="3" fill="#3A8030"/>
      <circle cx="100" cy="88"  r="3" fill="#3A8030"/>
      <!-- Cherry tomato -->
      <circle cx="72"  cy="95"  r="7" fill="#E02020"/>
      <circle cx="70"  cy="93"  r="2" fill="#F04040" opacity="0.5"/>
      <path   d="M 70 88 Q 72 84 74 88" fill="#2E7D20" stroke-width="0"/>`),

    napolitana: base('#C02820','#F0F0E0',`
      <!-- Tomato slices -->
      <circle cx="92"  cy="75"  r="14" fill="#C83010"/>
      <circle cx="92"  cy="75"  r="10" fill="#E04030"/>
      <line x1="92" y1="61"  x2="92" y2="89"  stroke="#FF6050" stroke-width="1.5" opacity="0.6"/>
      <line x1="78" y1="75"  x2="106" y2="75"  stroke="#FF6050" stroke-width="1.5" opacity="0.6"/>
      <circle cx="122" cy="98"  r="13" fill="#C83010"/>
      <circle cx="122" cy="98"  r="9"  fill="#E04030"/>
      <line x1="122" y1="85"  x2="122" y2="111" stroke="#FF6050" stroke-width="1.5" opacity="0.6"/>
      <line x1="109" y1="98"  x2="135" y2="98"  stroke="#FF6050" stroke-width="1.5" opacity="0.6"/>
      <circle cx="88"  cy="122" r="12" fill="#C83010"/>
      <circle cx="88"  cy="122" r="8"  fill="#E04030"/>
      <!-- Mozzarella -->
      <ellipse cx="112" cy="72"  rx="11" ry="8"  fill="#FEFEF0" opacity="0.95"/>
      <ellipse cx="80"  cy="104" rx="10" ry="7"  fill="#FEFEF0" opacity="0.95"/>
      <ellipse cx="118" cy="128" rx="11" ry="8"  fill="#FEFEF0" opacity="0.9"/>
      <!-- Basil -->
      <ellipse cx="104" cy="88"  rx="9" ry="4" fill="#2E7D20" transform="rotate(-25,104,88)"/>
      <ellipse cx="128" cy="116" rx="9" ry="4" fill="#2E7D20" transform="rotate(20,128,116)"/>
      <!-- Olive oil drops -->
      <circle cx="78"  cy="72"  r="2.5" fill="#C8A040" opacity="0.8"/>
      <circle cx="134" cy="105" r="2.5" fill="#C8A040" opacity="0.8"/>`),

    pepperoni: base('#B52B1E','#EDD060',`
      <circle cx="100" cy="65"  r="13" fill="#8B1515"/><circle cx="100" cy="65"  r="9" fill="#A82020" opacity="0.8"/>
      <circle cx="72"  cy="84"  r="13" fill="#8B1515"/><circle cx="72"  cy="84"  r="9" fill="#A82020" opacity="0.8"/>
      <circle cx="128" cy="84"  r="13" fill="#8B1515"/><circle cx="128" cy="84"  r="9" fill="#A82020" opacity="0.8"/>
      <circle cx="85"  cy="114" r="13" fill="#8B1515"/><circle cx="85"  cy="114" r="9" fill="#A82020" opacity="0.8"/>
      <circle cx="118" cy="114" r="13" fill="#8B1515"/><circle cx="118" cy="114" r="9" fill="#A82020" opacity="0.8"/>
      <circle cx="100" cy="134" r="12" fill="#8B1515"/><circle cx="100" cy="134" r="8" fill="#A82020" opacity="0.8"/>
      <!-- Grease shine dots -->
      <circle cx="96"  cy="61"  r="3" fill="#FFFFFF" opacity="0.25"/>
      <circle cx="68"  cy="80"  r="3" fill="#FFFFFF" opacity="0.25"/>
      <circle cx="124" cy="80"  r="3" fill="#FFFFFF" opacity="0.25"/>`),

    tomate_seco: base('#7A2020','#FFF0E0',`
      <!-- Sun-dried tomatoes -->
      <ellipse cx="90"  cy="74"  rx="13" ry="8" fill="#7A1A10" transform="rotate(-15,90,74)"/>
      <ellipse cx="90"  cy="74"  rx="8"  ry="5" fill="#A02A18" transform="rotate(-15,90,74)"/>
      <ellipse cx="120" cy="90"  rx="12" ry="7" fill="#7A1A10" transform="rotate(20,120,90)"/>
      <ellipse cx="120" cy="90"  rx="7"  ry="4" fill="#A02A18" transform="rotate(20,120,90)"/>
      <ellipse cx="84"  cy="118" rx="12" ry="8" fill="#7A1A10" transform="rotate(-10,84,118)"/>
      <ellipse cx="118" cy="128" rx="11" ry="7" fill="#7A1A10" transform="rotate(15,118,128)"/>
      <!-- Arugula leaves -->
      <path d="M 108 72 Q 112 64 116 72 Q 112 68 108 72" fill="#3A6020"/>
      <path d="M 76  98 Q 80  90 84  98 Q 80  94 76  98"  fill="#3A6020"/>
      <path d="M 125 115 Q 129 107 133 115 Q 129 111 125 115" fill="#3A6020"/>
      <!-- Black olives -->
      <circle cx="105" cy="95"  r="6" fill="#1a1a1a"/>
      <circle cx="105" cy="95"  r="2" fill="#555"/>
      <circle cx="76"  cy="118" r="6" fill="#1a1a1a"/>
      <circle cx="76"  cy="118" r="2" fill="#555"/>
      <!-- Ricotta dollops -->
      <ellipse cx="96"  cy="108" rx="12" ry="8" fill="#FFFAF5" opacity="0.95"/>
      <ellipse cx="128" cy="110" rx="10" ry="7" fill="#FFFAF5" opacity="0.9"/>
      <!-- Parmesan shavings -->
      <ellipse cx="86"  cy="84"  rx="8" ry="3" fill="#F0E0A0" opacity="0.8" transform="rotate(-30,86,84)"/>
      <ellipse cx="115" cy="128" rx="7" ry="3" fill="#F0E0A0" opacity="0.8" transform="rotate(20,115,128)"/>`),

    cogumelos_trufas: base('#2A1800','#D4C8A0',`
      <!-- Portobello mushrooms -->
      <ellipse cx="92"  cy="78"  rx="18" ry="12" fill="#6A4020"/>
      <ellipse cx="92"  cy="78"  rx="14" ry="9"  fill="#8A5A30"/>
      <rect x="88" y="78" width="8" height="10" rx="2" fill="#7A4A28"/>
      <ellipse cx="120" cy="100" rx="16" ry="11" fill="#6A4020"/>
      <ellipse cx="120" cy="100" rx="12" ry="8"  fill="#8A5A30"/>
      <rect x="116" y="100" width="8" height="10" rx="2" fill="#7A4A28"/>
      <!-- Shiitake mushrooms -->
      <ellipse cx="80"  cy="118" rx="13" ry="9" fill="#5A3018"/>
      <ellipse cx="80"  cy="118" rx="9"  ry="6" fill="#7A4A2A"/>
      <ellipse cx="116" cy="132" rx="12" ry="8" fill="#5A3018"/>
      <ellipse cx="116" cy="132" rx="8"  ry="5" fill="#7A4A2A"/>
      <!-- Gorgonzola blobs -->
      <ellipse cx="107" cy="75"  rx="10" ry="7" fill="#E8E0D0" opacity="0.9"/>
      <circle  cx="107" cy="75"  r="3" fill="#5A8A50" opacity="0.7"/>
      <ellipse cx="78"  cy="95"  rx="9"  ry="6" fill="#E8E0D0" opacity="0.85"/>
      <circle  cx="78"  cy="95"  r="2.5" fill="#5A8A50" opacity="0.7"/>
      <!-- Thyme sprigs -->
      <path d="M 130 75 L 135 90" stroke="#5A8040" stroke-width="2"/>
      <circle cx="131" cy="78"  r="2" fill="#7AAA50"/>
      <circle cx="133" cy="83"  r="2" fill="#7AAA50"/>
      <circle cx="135" cy="88"  r="2" fill="#7AAA50"/>
      <!-- Truffle oil drizzle -->
      <path d="M 85 88 Q 100 100 115 88 Q 125 105 110 118 Q 95 128 82 115 Q 72 100 85 88" fill="none" stroke="#C8A860" stroke-width="2" opacity="0.6" stroke-dasharray="3 3"/>`),
  };

  return svgs[id] || svgs['mussarela'];
}

// =====================================================================
// SVG: BEVERAGE ILLUSTRATIONS (replaced by real photos)
// =====================================================================
function beverageSVG(id) {
  const emoji = ['agua_gas','agua_sem'].includes(id) ? '💧'
    : ['suco_uva','suco_laranja','suco_caju'].includes(id) ? '🍹' : '🥤';
  return foodImg(id, id.replace(/_/g, ' '), emoji);
}

function _legacyBeverageSVG_unused(id) {
  const bottle = (color1, color2, label, bubbles) => `
    <svg viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg_${id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="${color1}"/>
          <stop offset="60%"  stop-color="${color2}"/>
          <stop offset="100%" stop-color="${color1}"/>
        </linearGradient>
      </defs>
      <!-- Cap -->
      <rect x="19" y="3" width="18" height="10" rx="3" fill="#888"/>
      <rect x="21" y="4" width="14" height="3" rx="1" fill="#aaa"/>
      <!-- Neck -->
      <rect x="20" y="12" width="16" height="8" rx="2" fill="url(#bg_${id})"/>
      <!-- Body -->
      <rect x="12" y="19" width="32" height="46" rx="6" fill="url(#bg_${id})"/>
      <!-- Highlight -->
      <rect x="15" y="22" width="6" height="36" rx="3" fill="white" opacity="0.2"/>
      <!-- Label -->
      <rect x="14" y="30" width="28" height="24" rx="3" fill="white" opacity="0.15"/>
      <text x="28" y="42" font-family="Arial,sans-serif" font-size="5" font-weight="bold" fill="white" text-anchor="middle" opacity="0.9">${label}</text>
      <text x="28" y="49" font-family="Arial,sans-serif" font-size="4" fill="white" text-anchor="middle" opacity="0.7">500ml</text>
      ${bubbles ? '<circle cx="22" cy="50" r="2" fill="white" opacity="0.25"/><circle cx="30" cy="56" r="1.5" fill="white" opacity="0.2"/><circle cx="26" cy="44" r="1" fill="white" opacity="0.2"/>' : ''}
    </svg>`;

  const can = (color1, color2, color3, label, labelColor) => `
    <svg viewBox="0 0 56 72" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg_${id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="${color1}"/>
          <stop offset="50%"  stop-color="${color2}"/>
          <stop offset="100%" stop-color="${color1}"/>
        </linearGradient>
      </defs>
      <!-- Can body -->
      <rect x="8"  y="14" width="40" height="48" rx="6" fill="url(#cg_${id})"/>
      <!-- Top dome -->
      <ellipse cx="28" cy="14" rx="20" ry="5" fill="${color3}"/>
      <!-- Bottom dome -->
      <ellipse cx="28" cy="62" rx="20" ry="5" fill="${color3}"/>
      <!-- Tab ring -->
      <ellipse cx="28" cy="9"  rx="10" ry="3" fill="#CCC"/>
      <rect x="24" y="7" width="8" height="4" rx="2" fill="#BBB"/>
      <!-- Highlight -->
      <rect x="10" y="18" width="7" height="38" rx="3" fill="white" opacity="0.15"/>
      <!-- Label area -->
      <rect x="10" y="22" width="36" height="28" rx="2" fill="white" opacity="${labelColor === 'dark' ? '0.12' : '0.08'}"/>
      <text x="28" y="36" font-family="Arial,sans-serif" font-size="5.5" font-weight="bold" fill="${labelColor === 'dark' ? '#000' : '#fff'}" text-anchor="middle" opacity="0.9">${label}</text>
      <text x="28" y="43" font-family="Arial,sans-serif" font-size="3.5" fill="${labelColor === 'dark' ? '#333' : '#fff'}" text-anchor="middle" opacity="0.8">350ml</text>
    </svg>`;

  const map = {
    agua_gas:     bottle('#3080C0','#60A8E0','SPARKLING', true),
    agua_sem:     bottle('#2860A0','#5090C8','STILL', false),
    coca:         can('#C01010','#E02020','#A00808','COCA-COLA', 'light'),
    pepsi:        can('#1030A0','#2050C8','#0A2080','PEPSI', 'light'),
    guarana:      can('#206010','#3A9020','#184A0A','GUARANÁ', 'light'),
    fanta:        can('#E06000','#F08010','#C04A00','FANTA', 'light'),
    suco_uva:     can('#601080','#9020B0','#4A0860','GRAPE', 'light'),
    suco_laranja: can('#D06010','#F08820','#A84808','ORANGE', 'light'),
    suco_caju:    can('#C07020','#E09030','#A05A10','CASHEW', 'light'),
  };

  return map[id] || map['coca'];
}

// =====================================================================
// FREDDY SVG
// =====================================================================
function freddySVG(size = 100) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Ears -->
    <circle cx="17" cy="30" r="14" fill="#7A5208"/>
    <circle cx="83" cy="30" r="14" fill="#7A5208"/>
    <circle cx="17" cy="30" r="8"  fill="#B87A20"/>
    <circle cx="83" cy="30" r="8"  fill="#B87A20"/>
    <!-- Hat brim -->
    <rect x="22" y="20" width="56" height="7" rx="3" fill="#111"/>
    <!-- Hat top -->
    <rect x="30" y="1"  width="40" height="22" rx="4" fill="#111"/>
    <!-- Hat band -->
    <rect x="30" y="18" width="40" height="6"  fill="#8B0000"/>
    <!-- Hat buckle -->
    <rect x="44" y="19" width="12" height="4" rx="1" fill="#C8A000"/>
    <!-- Head -->
    <circle cx="50" cy="62" r="38" fill="#7A5208"/>
    <!-- Face -->
    <circle cx="50" cy="65" r="30" fill="#B87A20"/>
    <!-- Eyes -->
    <circle cx="37" cy="57" r="8"  fill="#111"/>
    <circle cx="63" cy="57" r="8"  fill="#111"/>
    <circle cx="39" cy="55" r="3"  fill="white"/>
    <circle cx="65" cy="55" r="3"  fill="white"/>
    <!-- Pupils -->
    <circle cx="39" cy="55" r="1.5" fill="#111"/>
    <circle cx="65" cy="55" r="1.5" fill="#111"/>
    <!-- Nose -->
    <ellipse cx="50" cy="65" rx="5" ry="4" fill="#111"/>
    <!-- Mouth -->
    <path d="M 34 75 Q 50 88 66 75" stroke="#111" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- Teeth -->
    <rect x="40" y="73" width="7" height="9" fill="white" rx="2"/>
    <rect x="53" y="73" width="7" height="9" fill="white" rx="2"/>
    <!-- Cheeks -->
    <circle cx="24" cy="70" r="10" fill="#C08820" opacity="0.4"/>
    <circle cx="76" cy="70" r="10" fill="#C08820" opacity="0.4"/>
    <!-- Bow tie -->
    <polygon points="34,94 50,100 66,94 50,88" fill="#111"/>
    <circle cx="50" cy="94" r="4" fill="#222"/>
    <!-- Bow tie knot dot -->
    <circle cx="50" cy="94" r="2" fill="#444"/>
  </svg>`;
}

// =====================================================================
// RENDER: PIZZA CARD
// =====================================================================
function renderPizzaCard(item) {
  const defaultSize = item.sizes[1]; // "small" as default
  const promoHtml = item.promo
    ? `<div class="promo-badge" data-label="−${item.discount}%"></div>` : '';
  const specialBadge = item.tags.includes('gourmet') || item.tags.includes('premium')
    ? `<span class="special-badge">⭐ Special</span>` : '';

  const sizeBtns = item.sizes.map((s, i) => `
    <button class="size-btn ${i === 1 ? 'active' : ''}"
      data-pizza="${item.id}" data-size="${s.key}" data-price="${s.price}" data-promo="${item.promo}" data-discount="${item.discount}">
      <span class="size-name">${s.label}</span>
      <span class="size-in">${s.size}</span>
    </button>`).join('');

  const origPrice = item.promo
    ? (defaultSize.price / (1 - item.discount / 100)).toFixed(2) : null;
  const origHtml = origPrice
    ? `<span class="card-price-original">$${origPrice}</span>` : '';

  return `
    <div class="menu-card ${item.promo ? 'promo-card' : ''}">
      ${promoHtml}
      <div class="card-image-wrap">
        ${pizzaSVG(item.id)}
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.description}</div>
        ${specialBadge}
        <div class="card-price-wrap">
          <span class="card-price" id="price_${item.id}">$${defaultSize.price.toFixed(2)}</span>
          ${origHtml ? `<span class="card-price-original" id="orig_${item.id}">${origHtml}</span>` : ''}
        </div>
        <div class="size-selector">
          <span class="size-label">Choose size</span>
          <div class="size-btns">${sizeBtns}</div>
        </div>
      </div>
    </div>`;
}

// =====================================================================
// RENDER: BEVERAGE CARD
// =====================================================================
function renderBeverageCard(item) {
  return `
    <div class="bev-card">
      <div class="bev-img-wrap">${beverageSVG(item.id)}</div>
      <div class="bev-info">
        <div class="bev-name">${item.name}</div>
        <div class="bev-desc">${item.description}</div>
      </div>
      <div class="bev-price">$${item.price.toFixed(2)}</div>
    </div>`;
}

// =====================================================================
// RENDER TABS
// =====================================================================
function renderPizzas() {
  const panel = document.getElementById('pizzas');
  panel.innerHTML = `
    <div class="section-header">
      <h2>🍕 Our Pizzas</h2>
      <p>Artisan wood-fired, made fresh daily</p>
    </div>
    <div class="menu-grid">${MENU.pizzas.map(renderPizzaCard).join('')}</div>`;
}

function renderSpecial() {
  const panel = document.getElementById('special');
  panel.innerHTML = `
    <div class="section-header">
      <h2>⭐ Special Pizzas</h2>
      <p>Gourmet creations for the discerning palate</p>
    </div>
    <div class="menu-grid">${MENU.special.map(renderPizzaCard).join('')}</div>`;
}

function renderBeverages() {
  const panel = document.getElementById('beverages');
  const groups = { water: '💧 Water', soda: '🥤 Sodas', juice: '🍹 Juices' };
  let html = `
    <div class="section-header">
      <h2>🥤 Beverages</h2>
      <p>Cold drinks to complement your pizza</p>
    </div>
    <div class="beverage-grid">`;

  Object.entries(groups).forEach(([cat, label]) => {
    const items = MENU.beverages.filter(b => b.cat === cat);
    if (!items.length) return;
    html += `<div class="beverage-section-title">${label}</div>`;
    html += items.map(renderBeverageCard).join('');
  });

  html += '</div>';
  panel.innerHTML = html;
}

// =====================================================================
// TABS
// =====================================================================
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(p => {
        p.classList.toggle('active', p.id === tab);
      });
    });
  });
}

// =====================================================================
// SIZE SELECTION
// =====================================================================
function initSizeSelectors() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.size-btn');
    if (!btn) return;

    const pizzaId   = btn.dataset.pizza;
    const price     = parseFloat(btn.dataset.price);
    const isPromo   = btn.dataset.promo === 'true';
    const discount  = parseInt(btn.dataset.discount, 10);

    // Toggle active in same group
    const parent = btn.closest('.size-btns');
    parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update price display
    const priceEl = document.getElementById(`price_${pizzaId}`);
    const origEl  = document.getElementById(`orig_${pizzaId}`);
    if (priceEl) priceEl.textContent = `$${price.toFixed(2)}`;
    if (origEl && isPromo) {
      const orig = (price / (1 - discount / 100)).toFixed(2);
      origEl.innerHTML = `<span class="card-price-original">$${orig}</span>`;
    } else if (origEl) {
      origEl.innerHTML = '';
    }
  });
}

// =====================================================================
// TOAST
// =====================================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// =====================================================================
// FREDDY ASSISTANT – CHAT ENGINE
// =====================================================================
const ChatState = {
  step: 0,
  answers: {},
};

const FLOW = [
  {
    id: 'welcome',
    freddy: `Ha, ha, ha! 🎩 Welcome to Pizza Truck! I'm Freddy, your personal pizza guide tonight.\n\nWhat brings you to our establishment this evening, friend?`,
    options: [
      { label: "🍕 I'm hungry for pizza!",   value: 'hungry' },
      { label: "👀 Just browsing the menu",   value: 'browse' },
      { label: "🎉 Ordering for a group",     value: 'group'  },
    ],
    key: 'intent',
  },
  {
    id: 'flavor',
    freddy: `Excellent! *tips hat* The kitchen has prepared something wonderful...\n\nWhat kind of flavors are you craving right now?`,
    options: [
      { label: "🥩 Meaty & Bold",                value: 'meat'    },
      { label: "🌿 Fresh & Vegetarian",           value: 'veggie'  },
      { label: "🍫 Something Sweet",              value: 'sweet'   },
      { label: "⭐ Gourmet & Special",            value: 'gourmet' },
    ],
    key: 'flavor',
  },
  {
    id: 'hunger',
    freddy: `Oh ho ho! A fine selection! Now tell me...\n\nHow hungry are you tonight?`,
    options: [
      { label: "😌 Light snack (Brotinho)",    value: 'light'  },
      { label: "😊 Medium hunger (Small/Med)", value: 'medium' },
      { label: "😤 Very hungry (Large)",       value: 'large'  },
      { label: "👨‍👩‍👧‍👦 Feeding the whole crew",  value: 'family' },
    ],
    key: 'hunger',
  },
  {
    id: 'drink',
    freddy: `*chuckles warmly* 🎶 And what about something to wash it all down?`,
    options: [
      { label: "💧 Just water, please",     value: 'water' },
      { label: "🥤 A cold soda",            value: 'soda'  },
      { label: "🍹 A refreshing juice",     value: 'juice' },
      { label: "🤷 Surprise me!",           value: 'any'   },
    ],
    key: 'drink',
  },
];

function getPizzaRecs(answers) {
  const { flavor, hunger } = answers;
  const sizeLabel = {
    light: 'Brotinho',
    medium: 'Small or Medium',
    large: 'Large',
    family: 'Family',
  }[hunger] || 'Medium';

  const candidates = {
    meat: [
      { name: 'Classic Pepperoni',    icon: '🍕', note: `Perfect ${sizeLabel} – crowd-pleaser!` },
      { name: 'Sausage & Onion',      icon: '🥩', note: `Rich & smoky, ${sizeLabel} recommended` },
      { name: 'Chicken & Catupiry',   icon: '🍗', note: `Creamy & satisfying – ${sizeLabel} 🔥` },
    ],
    veggie: [
      { name: 'Margherita',           icon: '🌿', note: `Classic & fresh – ${sizeLabel}` },
      { name: 'Garden Vegetarian',    icon: '🥗', note: `Colorful & healthy – ${sizeLabel}` },
      { name: 'Neapolitan',           icon: '🍅', note: `Authentic Italian – ${sizeLabel}` },
    ],
    sweet: [
      { name: 'Sweet Delight',        icon: '🍫', note: `Nutella & fruits – ${sizeLabel} – divine!` },
    ],
    gourmet: [
      { name: 'Mushroom & Truffle',   icon: '⭐', note: `Premium choice – ${sizeLabel}` },
      { name: 'Sun-Dried Tomato',     icon: '🍅', note: `Gourmet arugula – ${sizeLabel} 🌿` },
    ],
  };

  return (candidates[flavor] || candidates.meat).slice(0, 2);
}

function getDrinkRec(answers) {
  const { drink } = answers;
  const map = {
    water:  { name: 'Still or Sparkling Water', icon: '💧', note: '500ml – pure refreshment' },
    soda:   { name: 'Coca-Cola or Guaraná',      icon: '🥤', note: '350ml can – classic combo' },
    juice:  { name: 'Orange or Cashew Juice',    icon: '🍹', note: '350ml – tropical & fresh' },
    any:    { name: 'Guaraná Antarctica',         icon: '🌟', note: "Freddy's personal favorite! 😄" },
  };
  return map[drink] || map.any;
}

function buildRecsHtml(answers) {
  const pizzas = getPizzaRecs(answers);
  const drink  = getDrinkRec(answers);
  const pizzaItems = pizzas.map(p =>
    `<div class="rec-item"><span class="rec-item-icon">${p.icon}</span><div><div class="rec-item-name">${p.name}</div><div class="rec-item-note">${p.note}</div></div></div>`
  ).join('');
  const drinkItem =
    `<div class="rec-item"><span class="rec-item-icon">${drink.icon}</span><div><div class="rec-item-name">${drink.name}</div><div class="rec-item-note">${drink.note}</div></div></div>`;

  return `
    <div class="rec-cards">
      <div style="font-size:12px;color:#b09070;margin-bottom:6px;">🍕 Pizza picks:</div>
      ${pizzaItems}
      <div style="font-size:12px;color:#b09070;margin:8px 0 6px;">🥤 Drink pick:</div>
      ${drinkItem}
    </div>`;
}

// ===== CHAT UI HELPERS =====

function appendMessage(role, html) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;

  if (role === 'freddy') {
    div.innerHTML = `
      <div class="msg-avatar">${freddySVG(28)}</div>
      <div class="msg-bubble">${html}</div>`;
  } else {
    div.innerHTML = `<div class="msg-bubble">${html}</div>`;
  }

  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg freddy typing-wrap';
  div.innerHTML = `
    <div class="msg-avatar">${freddySVG(28)}</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function removeTyping(el) {
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

function setOptions(options, onSelect) {
  const optArea = document.getElementById('chatOptions');
  optArea.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'chat-opt-btn';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => {
      setOptions([]);
      onSelect(opt);
    });
    optArea.appendChild(btn);
  });
}

function freddySpeak(text, delay = 500) {
  return new Promise(resolve => {
    const typing = showTyping();
    setTimeout(() => {
      removeTyping(typing);
      appendMessage('freddy', text.replace(/\n/g, '<br>'));
      resolve();
    }, delay);
  });
}

// ===== CHAT FLOW =====

async function runStep(stepIndex) {
  if (stepIndex >= FLOW.length) {
    // Final: show recommendations
    await freddySpeak(`Ha, ha, ha! 🎩 Based on your answers, here are my top picks for tonight's show... I mean, dinner!`, 600);
    appendMessage('freddy', buildRecsHtml(ChatState.answers));
    await freddySpeak(`Enjoy your meal, friend! And remember...<br><em style="color:#f0c040">Pizza Truck is always watching... 👀</em><br><br>Ha, ha, ha! Just kidding. Have a wonderful evening! 🍕`, 1200);
    setOptions([
      { label: '↺ Start over', value: 'restart' },
    ], (opt) => {
      restartChat();
    });
    return;
  }

  const step = FLOW[stepIndex];
  await freddySpeak(step.freddy, stepIndex === 0 ? 400 : 700);
  setOptions(step.options, async (opt) => {
    ChatState.answers[step.key] = opt.value;
    appendMessage('user', opt.label);
    await runStep(stepIndex + 1);
  });
}

function restartChat() {
  ChatState.step = 0;
  ChatState.answers = {};
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatOptions').innerHTML = '';
  runStep(0);
}

// ===== ASSISTANT MODAL =====

function initAssistant() {
  // Inject Freddy SVG into FAB and modal avatar
  document.getElementById('freddyFabSvg').innerHTML = freddySVG(48);
  document.getElementById('assistantAvatarSvg').innerHTML = freddySVG(52);

  const fab     = document.getElementById('assistantFab');
  const modal   = document.getElementById('assistantModal');
  const overlay = document.getElementById('assistantOverlay');
  const closeBtn = document.getElementById('assistantClose');
  const restartBtn = document.getElementById('restartChat');

  function openAssistant() {
    modal.classList.add('open');
    overlay.classList.add('visible');
    if (!document.getElementById('chatMessages').children.length) {
      runStep(0);
    }
  }

  function closeAssistant() {
    modal.classList.remove('open');
    overlay.classList.remove('visible');
  }

  fab.addEventListener('click', openAssistant);
  closeBtn.addEventListener('click', closeAssistant);
  overlay.addEventListener('click', closeAssistant);
  restartBtn.addEventListener('click', restartChat);
}

// =====================================================================
// INIT
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPizzas();
  renderSpecial();
  renderBeverages();
  initTabs();
  initSizeSelectors();
  initAssistant();
});
