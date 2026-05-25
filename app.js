/* ============================================================
   Travelers Slices – app.js
   i18n (PT / EN / ES) · BRL prices · Freddy Chat Assistant
   ============================================================ */
'use strict';

// =====================================================================
// i18n – TRANSLATIONS
// =====================================================================
const LANG = {

  /* ── PORTUGUÊS ─────────────────────────────────────────────────── */
  pt: {
    tagline: 'Pizza na Rua, Sabor na Alma',
    tabs: { pizzas: 'Pizzas', special: 'Pizzas Especiais', beverages: 'Bebidas' },
    sections: {
      pizzas:    { title: '🍕 Nossas Pizzas',    subtitle: 'Feitas no forno a lenha, fresquinhas todo dia' },
      special:   { title: '⭐ Pizzas Especiais',  subtitle: 'Criações gourmet para os mais exigentes' },
      beverages: { title: '🥤 Bebidas',           subtitle: 'Bebidas geladas para acompanhar sua pizza' },
    },
    chooseSize:   'Escolha o tamanho',
    sizes: { brotinho: 'Brotinho', small: 'Pequena', medium: 'Média', large: 'Grande', family: 'Família' },
    specialBadge: '⭐ Especial',
    bevGroups:    { water: '💧 Água', soda: '🥤 Refrigerantes', juice: '🍹 Sucos' },
    assistantRole:'🍕 Guia de Pizzas & Mascote',
    restartBtn:   '↺ Recomeçar',
    products: {
      calabresa:        { name: 'Calabresa',              desc: 'Linguiça calabresa defumada, cebola caramelizada, molho de tomate & mozzarella derretida' },
      portuguesa:       { name: 'Portuguesa',              desc: 'Presunto, ovos cozidos, azeitonas pretas, cebola, pimentão verde & mozzarella' },
      mussarela:        { name: 'Mozzarella',              desc: 'Molho de tomate, generosa mozzarella fresca & orégano perfumado' },
      margherita:       { name: 'Margherita',              desc: 'Molho de tomate San Marzano, mozzarella de búfala & manjericão fresco' },
      doce:             { name: 'Pizza Doce',              desc: 'Base de Nutella, morangos frescos, fatias de banana & leite condensado' },
      frango_catupiry:  { name: 'Frango com Catupiry',    desc: 'Peito de frango desfiado, cremoso Catupiry & molho de tomate' },
      vegetariana:      { name: 'Vegetariana',             desc: 'Pimentão, champignon, azeitonas pretas, tomate cereja, brócolis & mozzarella' },
      napolitana:       { name: 'Napolitana',              desc: 'Mozzarella fresca, fatias de tomate maduro, manjericão, alho & azeite extra virgem' },
      pepperoni:        { name: 'Pepperoni Clássico',     desc: 'Generosas fatias de pepperoni, molho de tomate & mozzarella borbulhante' },
      tomate_seco:      { name: 'Tomate Seco',            desc: 'Tomates secos, rúcula fresca, lascas de parmesão, azeitonas pretas & ricota' },
      cogumelos_trufas: { name: 'Cogumelos & Trufas',    desc: 'Cogumelos portobello & shiitake, óleo de trufa, Gorgonzola & tomilho fresco' },
      agua_gas:         { name: 'Água com Gás',           desc: 'Água mineral com gás refrescante – garrafa 500ml' },
      agua_sem:         { name: 'Água sem Gás',           desc: 'Água mineral pura sem gás – garrafa 500ml' },
      coca:             { name: 'Coca-Cola',              desc: 'Coca-Cola clássica – lata 350ml' },
      pepsi:            { name: 'Pepsi',                  desc: 'Pepsi Cola clássica – lata 350ml' },
      guarana:          { name: 'Guaraná Antarctica',     desc: 'Guaraná Antarctica brasileiro – lata 350ml' },
      fanta:            { name: 'Fanta Laranja',          desc: 'Fanta Laranja refrescante – lata 350ml' },
      suco_uva:         { name: 'Suco de Uva',            desc: 'Suco de uva natural – lata 350ml' },
      suco_laranja:     { name: 'Suco de Laranja',        desc: 'Suco de laranja fresco – lata 350ml' },
      suco_caju:        { name: 'Suco de Caju',           desc: 'Exótico suco de caju brasileiro – lata 350ml' },
    },
    flow: [
      {
        id: 'welcome',
        freddy: `Ha, ha, ha! 🎩 Bem-vindo à Travelers Slices! Sou o Freddy, seu guia pessoal de pizzas esta noite.\n\nO que te traz ao nosso estabelecimento, amigo?`,
        options: [
          { label: '🍕 Estou com fome de pizza!', value: 'hungry' },
          { label: '👀 Só dando uma olhada',      value: 'browse' },
          { label: '🎉 Pedindo para o grupo',      value: 'group'  },
        ],
        key: 'intent',
      },
      {
        id: 'flavor',
        freddy: `Excelente! *abana o chapéu* A cozinha preparou algo maravilhoso...\n\nQue tipo de sabor você está com vontade agora?`,
        options: [
          { label: '🥩 Carnes e sabores intensos', value: 'meat'    },
          { label: '🌿 Frescos e vegetarianos',    value: 'veggie'  },
          { label: '🍫 Algo doce',                 value: 'sweet'   },
          { label: '⭐ Gourmet e especial',         value: 'gourmet' },
        ],
        key: 'flavor',
      },
      {
        id: 'hunger',
        freddy: `Oh ho ho! Ótima escolha! Agora me diga...\n\nQual é o seu nível de fome hoje?`,
        options: [
          { label: '😌 Lanche leve (Brotinho)',         value: 'light'  },
          { label: '😊 Fome moderada (Pequena/Média)',  value: 'medium' },
          { label: '😤 Muita fome (Grande)',             value: 'large'  },
          { label: '👨‍👩‍👧‍👦 Alimentando a turma toda',      value: 'family' },
        ],
        key: 'hunger',
      },
      {
        id: 'drink',
        freddy: `*ri quentinho* 🎶 E que tal algo para acompanhar?`,
        options: [
          { label: '💧 Só água, obrigado',  value: 'water' },
          { label: '🥤 Um refri gelado',    value: 'soda'  },
          { label: '🍹 Um suco refrescante',value: 'juice' },
          { label: '🤷 Me surpreenda!',     value: 'any'   },
        ],
        key: 'drink',
      },
    ],
    recs: {
      final:      `Ha, ha, ha! 🎩 Com base nas suas respostas, aqui estão minhas sugestões para o jantar!`,
      closing:    `Bom apetite, amigo! E lembre-se...<br><em style="color:#f0c040">Travelers Slices está sempre de olho... 👀</em><br><br>Ha, ha, ha! Só brincando. Boa noite! 🍕`,
      restart:    '↺ Recomeçar',
      pizzaLabel: '🍕 Sugestões de pizza:',
      drinkLabel: '🥤 Sugestão de bebida:',
      sizeLabels: { light: 'Brotinho', medium: 'Pequena ou Média', large: 'Grande', family: 'Família' },
      candidates: {
        meat:   [
          { name: 'Pepperoni Clássico',   icon: '🍕', note: 'Sucesso garantido!' },
          { name: 'Calabresa',            icon: '🥩', note: 'Rico e defumado' },
          { name: 'Frango com Catupiry',  icon: '🍗', note: 'Cremoso e irresistível 🔥' },
        ],
        veggie: [
          { name: 'Margherita',  icon: '🌿', note: 'Clássico e fresco' },
          { name: 'Vegetariana', icon: '🥗', note: 'Colorida e saudável' },
          { name: 'Napolitana',  icon: '🍅', note: 'Autêntico sabor italiano' },
        ],
        sweet:  [{ name: 'Pizza Doce',         icon: '🍫', note: 'Nutella & frutas – divino!' }],
        gourmet:[
          { name: 'Cogumelos & Trufas', icon: '⭐', note: 'Escolha premium' },
          { name: 'Tomate Seco',        icon: '🍅', note: 'Gourmet com rúcula 🌿' },
        ],
      },
      drinks: {
        water: { name: 'Água com ou sem Gás', icon: '💧', note: '500ml – hidratação pura' },
        soda:  { name: 'Coca-Cola ou Guaraná', icon: '🥤', note: 'Lata 350ml – combinação clássica' },
        juice: { name: 'Laranja ou Caju',      icon: '🍹', note: '350ml – tropical & refrescante' },
        any:   { name: 'Guaraná Antarctica',   icon: '🌟', note: 'Favorito do Freddy! 😄' },
      },
    },
  },

  /* ── ENGLISH ────────────────────────────────────────────────────── */
  en: {
    tagline: 'Pizza on the Street, Flavor in the Soul',
    tabs: { pizzas: 'Pizzas', special: 'Special Pizzas', beverages: 'Beverages' },
    sections: {
      pizzas:    { title: '🍕 Our Pizzas',      subtitle: 'Wood-fired, made fresh daily' },
      special:   { title: '⭐ Special Pizzas',   subtitle: 'Gourmet creations for the discerning palate' },
      beverages: { title: '🥤 Beverages',        subtitle: 'Cold drinks to complement your pizza' },
    },
    chooseSize:   'Choose size',
    sizes: { brotinho: 'Brotinho', small: 'Small', medium: 'Medium', large: 'Large', family: 'Family' },
    specialBadge: '⭐ Special',
    bevGroups:    { water: '💧 Water', soda: '🥤 Sodas', juice: '🍹 Juices' },
    assistantRole:'🍕 Pizza Guide & Mascot',
    restartBtn:   '↺ Start Over',
    products: {
      calabresa:        { name: 'Sausage & Onion',      desc: 'Smoked Italian sausage, caramelized onions, rich tomato sauce & melted mozzarella' },
      portuguesa:       { name: 'Portuguese Style',     desc: 'Ham, hard-boiled eggs, black olives, onion, green peppers & mozzarella' },
      mussarela:        { name: 'Mozzarella',           desc: 'Tomato sauce, generous fresh mozzarella & fragrant oregano' },
      margherita:       { name: 'Margherita',           desc: 'Classic San Marzano tomato sauce, buffalo mozzarella & fresh basil' },
      doce:             { name: 'Sweet Delight',        desc: 'Nutella cream base, fresh strawberries, banana slices & condensed milk drizzle' },
      frango_catupiry:  { name: 'Chicken & Catupiry',  desc: 'Shredded chicken breast, velvety Catupiry cream cheese & tomato sauce' },
      vegetariana:      { name: 'Garden Vegetarian',   desc: 'Bell peppers, mushrooms, black olives, cherry tomatoes, broccoli & mozzarella' },
      napolitana:       { name: 'Neapolitan',           desc: 'Fresh mozzarella, ripe tomato slices, basil, garlic & extra virgin olive oil' },
      pepperoni:        { name: 'Classic Pepperoni',   desc: 'Generous layers of pepperoni slices, tomato sauce & bubbling mozzarella' },
      tomate_seco:      { name: 'Sun-Dried Tomato',    desc: 'Sun-dried tomatoes, fresh arugula, Parmesan shavings, black olives & ricotta' },
      cogumelos_trufas: { name: 'Mushroom & Truffle',  desc: 'Portobello & shiitake mushrooms, truffle oil, Gorgonzola & fresh thyme' },
      agua_gas:         { name: 'Sparkling Water',     desc: 'Refreshing sparkling mineral water – 500ml bottle' },
      agua_sem:         { name: 'Still Water',         desc: 'Pure still mineral water – 500ml bottle' },
      coca:             { name: 'Coca-Cola',           desc: 'Classic Coca-Cola – 350ml can' },
      pepsi:            { name: 'Pepsi',               desc: 'Classic Pepsi Cola – 350ml can' },
      guarana:          { name: 'Guaraná Antarctica',  desc: 'Brazilian guaraná soda – 350ml can' },
      fanta:            { name: 'Fanta Orange',        desc: 'Refreshing Fanta Orange – 350ml can' },
      suco_uva:         { name: 'Grape Juice',         desc: 'Natural grape juice – 350ml can' },
      suco_laranja:     { name: 'Orange Juice',        desc: 'Fresh orange juice – 350ml can' },
      suco_caju:        { name: 'Cashew Juice',        desc: 'Exotic Brazilian cashew fruit juice – 350ml can' },
    },
    flow: [
      {
        id: 'welcome',
        freddy: `Ha, ha, ha! 🎩 Welcome to Travelers Slices! I'm Freddy, your personal pizza guide tonight.\n\nWhat brings you to our establishment this evening, friend?`,
        options: [
          { label: "🍕 I'm hungry for pizza!", value: 'hungry' },
          { label: '👀 Just browsing the menu', value: 'browse' },
          { label: '🎉 Ordering for a group',   value: 'group'  },
        ],
        key: 'intent',
      },
      {
        id: 'flavor',
        freddy: `Excellent! *tips hat* The kitchen has prepared something wonderful...\n\nWhat kind of flavors are you craving right now?`,
        options: [
          { label: '🥩 Meaty & Bold',          value: 'meat'    },
          { label: '🌿 Fresh & Vegetarian',     value: 'veggie'  },
          { label: '🍫 Something Sweet',        value: 'sweet'   },
          { label: '⭐ Gourmet & Special',      value: 'gourmet' },
        ],
        key: 'flavor',
      },
      {
        id: 'hunger',
        freddy: `Oh ho ho! A fine selection! Now tell me...\n\nHow hungry are you tonight?`,
        options: [
          { label: '😌 Light snack (Brotinho)',    value: 'light'  },
          { label: '😊 Medium hunger (Small/Med)', value: 'medium' },
          { label: '😤 Very hungry (Large)',        value: 'large'  },
          { label: '👨‍👩‍👧‍👦 Feeding the whole crew',   value: 'family' },
        ],
        key: 'hunger',
      },
      {
        id: 'drink',
        freddy: `*chuckles warmly* 🎶 And what about something to wash it all down?`,
        options: [
          { label: '💧 Just water, please',  value: 'water' },
          { label: '🥤 A cold soda',         value: 'soda'  },
          { label: '🍹 A refreshing juice',  value: 'juice' },
          { label: '🤷 Surprise me!',        value: 'any'   },
        ],
        key: 'drink',
      },
    ],
    recs: {
      final:      `Ha, ha, ha! 🎩 Based on your answers, here are my top picks for tonight's dinner!`,
      closing:    `Enjoy your meal, friend! And remember...<br><em style="color:#f0c040">Travelers Slices is always watching... 👀</em><br><br>Ha, ha, ha! Just kidding. Have a wonderful evening! 🍕`,
      restart:    '↺ Start over',
      pizzaLabel: '🍕 Pizza picks:',
      drinkLabel: '🥤 Drink pick:',
      sizeLabels: { light: 'Brotinho', medium: 'Small or Medium', large: 'Large', family: 'Family' },
      candidates: {
        meat:   [
          { name: 'Classic Pepperoni',  icon: '🍕', note: 'Perfect crowd-pleaser!' },
          { name: 'Sausage & Onion',    icon: '🥩', note: 'Rich & smoky' },
          { name: 'Chicken & Catupiry', icon: '🍗', note: 'Creamy & satisfying 🔥' },
        ],
        veggie: [
          { name: 'Margherita',        icon: '🌿', note: 'Classic & fresh' },
          { name: 'Garden Vegetarian', icon: '🥗', note: 'Colorful & healthy' },
          { name: 'Neapolitan',        icon: '🍅', note: 'Authentic Italian' },
        ],
        sweet:  [{ name: 'Sweet Delight',      icon: '🍫', note: 'Nutella & fruits – divine!' }],
        gourmet:[
          { name: 'Mushroom & Truffle', icon: '⭐', note: 'Premium choice' },
          { name: 'Sun-Dried Tomato',   icon: '🍅', note: 'Gourmet arugula 🌿' },
        ],
      },
      drinks: {
        water: { name: 'Still or Sparkling Water', icon: '💧', note: '500ml – pure refreshment' },
        soda:  { name: 'Coca-Cola or Guaraná',     icon: '🥤', note: '350ml can – classic combo' },
        juice: { name: 'Orange or Cashew Juice',   icon: '🍹', note: '350ml – tropical & fresh' },
        any:   { name: 'Guaraná Antarctica',        icon: '🌟', note: "Freddy's personal favorite! 😄" },
      },
    },
  },

  /* ── ESPAÑOL ────────────────────────────────────────────────────── */
  es: {
    tagline: 'Pizza en la Calle, Sabor en el Alma',
    tabs: { pizzas: 'Pizzas', special: 'Pizzas Especiales', beverages: 'Bebidas' },
    sections: {
      pizzas:    { title: '🍕 Nuestras Pizzas',   subtitle: 'Horneadas en leña, frescas cada día' },
      special:   { title: '⭐ Pizzas Especiales', subtitle: 'Creaciones gourmet para los más exigentes' },
      beverages: { title: '🥤 Bebidas',           subtitle: 'Bebidas frías para acompañar tu pizza' },
    },
    chooseSize:   'Elige el tamaño',
    sizes: { brotinho: 'Brotinho', small: 'Pequeña', medium: 'Mediana', large: 'Grande', family: 'Familiar' },
    specialBadge: '⭐ Especial',
    bevGroups:    { water: '💧 Agua', soda: '🥤 Gaseosas', juice: '🍹 Jugos' },
    assistantRole:'🍕 Guía de Pizzas & Mascota',
    restartBtn:   '↺ Empezar de nuevo',
    products: {
      calabresa:        { name: 'Salchicha y Cebolla',  desc: 'Salchicha italiana ahumada, cebollas caramelizadas, salsa de tomate & mozzarella derretida' },
      portuguesa:       { name: 'Portuguesa',           desc: 'Jamón, huevos duros, aceitunas negras, cebolla, pimientos verdes & mozzarella' },
      mussarela:        { name: 'Mozzarella',           desc: 'Salsa de tomate, generosa mozzarella fresca & orégano aromático' },
      margherita:       { name: 'Margherita',           desc: 'Clásica salsa de tomate San Marzano, mozzarella de búfala & albahaca fresca' },
      doce:             { name: 'Pizza Dulce',          desc: 'Base de Nutella, fresas frescas, rodajas de banana & leche condensada' },
      frango_catupiry:  { name: 'Pollo con Catupiry',  desc: 'Pechuga de pollo desmenuzada, cremoso Catupiry & salsa de tomate' },
      vegetariana:      { name: 'Vegetariana',          desc: 'Pimientos, champiñones, aceitunas negras, tomates cherry, brócoli & mozzarella' },
      napolitana:       { name: 'Napolitana',           desc: 'Mozzarella fresca, rodajas de tomate maduro, albahaca, ajo & aceite de oliva virgen extra' },
      pepperoni:        { name: 'Pepperoni Clásico',   desc: 'Generosas capas de pepperoni, salsa de tomate & mozzarella burbujeante' },
      tomate_seco:      { name: 'Tomate Seco',         desc: 'Tomates secos, rúcula fresca, virutas de parmesano, aceitunas negras & ricotta' },
      cogumelos_trufas: { name: 'Hongos & Trufas',    desc: 'Hongos portobello & shiitake, aceite de trufa, Gorgonzola & tomillo fresco' },
      agua_gas:         { name: 'Agua con Gas',        desc: 'Refrescante agua mineral con gas – botella 500ml' },
      agua_sem:         { name: 'Agua sin Gas',        desc: 'Pura agua mineral sin gas – botella 500ml' },
      coca:             { name: 'Coca-Cola',           desc: 'Coca-Cola clásica – lata 350ml' },
      pepsi:            { name: 'Pepsi',               desc: 'Pepsi Cola clásica – lata 350ml' },
      guarana:          { name: 'Guaraná Antarctica',  desc: 'Guaraná Antarctica brasileño – lata 350ml' },
      fanta:            { name: 'Fanta Naranja',       desc: 'Refrescante Fanta Naranja – lata 350ml' },
      suco_uva:         { name: 'Jugo de Uva',        desc: 'Jugo natural de uva – lata 350ml' },
      suco_laranja:     { name: 'Jugo de Naranja',    desc: 'Jugo de naranja fresco – lata 350ml' },
      suco_caju:        { name: 'Jugo de Marañón',    desc: 'Exótico jugo de marañón brasileño – lata 350ml' },
    },
    flow: [
      {
        id: 'welcome',
        freddy: `¡Ha, ha, ha! 🎩 ¡Bienvenido a Travelers Slices! Soy Freddy, tu guía personal de pizzas esta noche.\n\n¿Qué te trae a nuestro establecimiento esta noche, amigo?`,
        options: [
          { label: '🍕 ¡Tengo hambre de pizza!', value: 'hungry' },
          { label: '👀 Solo mirando el menú',    value: 'browse' },
          { label: '🎉 Pidiendo para un grupo',  value: 'group'  },
        ],
        key: 'intent',
      },
      {
        id: 'flavor',
        freddy: `¡Excelente! *inclina el sombrero* La cocina ha preparado algo maravilloso...\n\n¿Qué tipo de sabores te apetecen ahora?`,
        options: [
          { label: '🥩 Carnes y sabores intensos', value: 'meat'    },
          { label: '🌿 Frescos y vegetarianos',    value: 'veggie'  },
          { label: '🍫 Algo dulce',                value: 'sweet'   },
          { label: '⭐ Gourmet y especial',         value: 'gourmet' },
        ],
        key: 'flavor',
      },
      {
        id: 'hunger',
        freddy: `¡Oh ho ho! ¡Buena elección! Ahora dime...\n\n¿Cuánta hambre tienes esta noche?`,
        options: [
          { label: '😌 Un aperitivo (Brotinho)',        value: 'light'  },
          { label: '😊 Hambre moderada (Pequeña/Med)', value: 'medium' },
          { label: '😤 Mucha hambre (Grande)',          value: 'large'  },
          { label: '👨‍👩‍👧‍👦 Para toda la familia',          value: 'family' },
        ],
        key: 'hunger',
      },
      {
        id: 'drink',
        freddy: `*ríe cálidamente* 🎶 ¿Y qué hay de algo para beber?`,
        options: [
          { label: '💧 Solo agua, por favor', value: 'water' },
          { label: '🥤 Una gaseosa fría',     value: 'soda'  },
          { label: '🍹 Un jugo refrescante',  value: 'juice' },
          { label: '🤷 ¡Sorpréndeme!',        value: 'any'   },
        ],
        key: 'drink',
      },
    ],
    recs: {
      final:      `¡Ha, ha, ha! 🎩 ¡Basándome en tus respuestas, aquí están mis sugerencias para la cena!`,
      closing:    `¡Buen provecho, amigo! Y recuerda...<br><em style="color:#f0c040">Travelers Slices siempre está mirando... 👀</em><br><br>¡Ha, ha, ha! Solo bromeando. ¡Buenas noches! 🍕`,
      restart:    '↺ Empezar de nuevo',
      pizzaLabel: '🍕 Sugerencias de pizza:',
      drinkLabel: '🥤 Sugerencia de bebida:',
      sizeLabels: { light: 'Brotinho', medium: 'Pequeña o Mediana', large: 'Grande', family: 'Familiar' },
      candidates: {
        meat:   [
          { name: 'Pepperoni Clásico',   icon: '🍕', note: '¡Siempre un éxito!' },
          { name: 'Salchicha y Cebolla', icon: '🥩', note: 'Rico y ahumado' },
          { name: 'Pollo con Catupiry',  icon: '🍗', note: 'Cremoso e irresistible 🔥' },
        ],
        veggie: [
          { name: 'Margherita',  icon: '🌿', note: 'Clásica y fresca' },
          { name: 'Vegetariana', icon: '🥗', note: 'Colorida y saludable' },
          { name: 'Napolitana',  icon: '🍅', note: 'Auténtico sabor italiano' },
        ],
        sweet:  [{ name: 'Pizza Dulce',       icon: '🍫', note: 'Nutella & frutas – ¡divina!' }],
        gourmet:[
          { name: 'Hongos & Trufas', icon: '⭐', note: 'Elección premium' },
          { name: 'Tomate Seco',     icon: '🍅', note: 'Gourmet con rúcula 🌿' },
        ],
      },
      drinks: {
        water: { name: 'Agua con o sin Gas', icon: '💧', note: '500ml – hidratación pura' },
        soda:  { name: 'Coca-Cola o Guaraná', icon: '🥤', note: 'Lata 350ml – combo clásico' },
        juice: { name: 'Naranja o Marañón',   icon: '🍹', note: '350ml – tropical & fresco' },
        any:   { name: 'Guaraná Antarctica',  icon: '🌟', note: '¡El favorito de Freddy! 😄' },
      },
    },
  },
};

// Active language – restored from session or null (shows picker)
let currentLang = sessionStorage.getItem('lang') || null;

function t() { return LANG[currentLang || 'pt']; }

// =====================================================================
// MENU DATA  (prices in BRL – R$)
// =====================================================================
const MENU = {
  pizzas: [
    {
      id: 'calabresa',
      tags: ['meat', 'classic'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 29.90 },
        { key: 'small',    size: '8"',  price: 39.90 },
        { key: 'medium',   size: '12"', price: 54.90 },
        { key: 'large',    size: '14"', price: 69.90 },
        { key: 'family',   size: '18"', price: 89.90 },
      ]
    },
    {
      id: 'portuguesa',
      tags: ['meat', 'classic'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 32.90 },
        { key: 'small',    size: '8"',  price: 42.90 },
        { key: 'medium',   size: '12"', price: 57.90 },
        { key: 'large',    size: '14"', price: 72.90 },
        { key: 'family',   size: '18"', price: 92.90 },
      ]
    },
    {
      id: 'mussarela',
      tags: ['vegetarian', 'classic', 'cheese'],
      promo: true, discount: 15,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 24.90 },
        { key: 'small',    size: '8"',  price: 33.90 },
        { key: 'medium',   size: '12"', price: 46.90 },
        { key: 'large',    size: '14"', price: 59.90 },
        { key: 'family',   size: '18"', price: 74.90 },
      ]
    },
    {
      id: 'margherita',
      tags: ['vegetarian', 'classic'],
      promo: true, discount: 20,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 23.90 },
        { key: 'small',    size: '8"',  price: 31.90 },
        { key: 'medium',   size: '12"', price: 43.90 },
        { key: 'large',    size: '14"', price: 55.90 },
        { key: 'family',   size: '18"', price: 69.90 },
      ]
    },
    {
      id: 'doce',
      tags: ['sweet', 'dessert'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 32.90 },
        { key: 'small',    size: '8"',  price: 42.90 },
        { key: 'medium',   size: '12"', price: 57.90 },
        { key: 'large',    size: '14"', price: 72.90 },
        { key: 'family',   size: '18"', price: 92.90 },
      ]
    },
    {
      id: 'frango_catupiry',
      tags: ['meat', 'chicken', 'creamy'],
      promo: true, discount: 10,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 31.90 },
        { key: 'small',    size: '8"',  price: 44.90 },
        { key: 'medium',   size: '12"', price: 58.90 },
        { key: 'large',    size: '14"', price: 71.90 },
        { key: 'family',   size: '18"', price: 89.90 },
      ]
    },
    {
      id: 'vegetariana',
      tags: ['vegetarian', 'healthy'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 29.90 },
        { key: 'small',    size: '8"',  price: 39.90 },
        { key: 'medium',   size: '12"', price: 54.90 },
        { key: 'large',    size: '14"', price: 69.90 },
        { key: 'family',   size: '18"', price: 89.90 },
      ]
    },
    {
      id: 'napolitana',
      tags: ['vegetarian', 'classic', 'italian'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 29.90 },
        { key: 'small',    size: '8"',  price: 42.90 },
        { key: 'medium',   size: '12"', price: 57.90 },
        { key: 'large',    size: '14"', price: 72.90 },
        { key: 'family',   size: '18"', price: 92.90 },
      ]
    },
    {
      id: 'pepperoni',
      tags: ['meat', 'classic', 'american'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 29.90 },
        { key: 'small',    size: '8"',  price: 39.90 },
        { key: 'medium',   size: '12"', price: 54.90 },
        { key: 'large',    size: '14"', price: 69.90 },
        { key: 'family',   size: '18"', price: 89.90 },
      ]
    },
  ],

  special: [
    {
      id: 'tomate_seco',
      tags: ['gourmet', 'vegetarian'],
      promo: true, discount: 12,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 39.90 },
        { key: 'small',    size: '8"',  price: 52.90 },
        { key: 'medium',   size: '12"', price: 70.90 },
        { key: 'large',    size: '14"', price: 89.90 },
        { key: 'family',   size: '18"', price: 111.90 },
      ]
    },
    {
      id: 'cogumelos_trufas',
      tags: ['gourmet', 'vegetarian', 'premium'],
      promo: false, discount: 0,
      sizes: [
        { key: 'brotinho', size: '6"',  price: 49.90 },
        { key: 'small',    size: '8"',  price: 64.90 },
        { key: 'medium',   size: '12"', price: 89.90 },
        { key: 'large',    size: '14"', price: 114.90 },
        { key: 'family',   size: '18"', price: 139.90 },
      ]
    },
  ],

  beverages: [
    { id: 'agua_gas',     cat: 'water', price: 7.90  },
    { id: 'agua_sem',     cat: 'water', price: 5.90  },
    { id: 'coca',         cat: 'soda',  price: 6.90  },
    { id: 'pepsi',        cat: 'soda',  price: 6.90  },
    { id: 'guarana',      cat: 'soda',  price: 6.90  },
    { id: 'fanta',        cat: 'soda',  price: 6.90  },
    { id: 'suco_uva',     cat: 'juice', price: 8.90  },
    { id: 'suco_laranja', cat: 'juice', price: 8.90  },
    { id: 'suco_caju',    cat: 'juice', price: 8.90  },
  ],
};

// =====================================================================
// IMAGES
// =====================================================================
const IMAGES = {
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

const IMG_VER = '?v=3';

function foodImg(id, alt, fallbackEmoji) {
  const url = (IMAGES[id] || '') + IMG_VER;
  return `<img src="${url}" alt="${alt}" loading="lazy"
    onerror="this.onerror=null;this.parentElement.innerHTML='<span class=\\'img-fallback\\'>${fallbackEmoji}</span>'">`;
}
function pizzaSVG(id)    { return foodImg(id, id.replace(/_/g, ' '), '🍕'); }
function beverageSVG(id) {
  const emoji = ['agua_gas','agua_sem'].includes(id) ? '💧'
    : ['suco_uva','suco_laranja','suco_caju'].includes(id) ? '🍹' : '🥤';
  return foodImg(id, id.replace(/_/g, ' '), emoji);
}

// =====================================================================
// PRICE FORMATTER  (Brazilian Real: R$ 29,90)
// =====================================================================
function formatPrice(n) {
  return 'R$ ' + n.toFixed(2).replace('.', ',');
}

// =====================================================================
// FREDDY SVG
// =====================================================================
function freddySVG() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="30" r="14" fill="#7A5208"/>
    <circle cx="83" cy="30" r="14" fill="#7A5208"/>
    <circle cx="17" cy="30" r="8"  fill="#B87A20"/>
    <circle cx="83" cy="30" r="8"  fill="#B87A20"/>
    <rect x="22" y="20" width="56" height="7" rx="3" fill="#111"/>
    <rect x="30" y="1"  width="40" height="22" rx="4" fill="#111"/>
    <rect x="30" y="18" width="40" height="6"  fill="#8B0000"/>
    <rect x="44" y="19" width="12" height="4" rx="1" fill="#C8A000"/>
    <circle cx="50" cy="62" r="38" fill="#7A5208"/>
    <circle cx="50" cy="65" r="30" fill="#B87A20"/>
    <circle cx="37" cy="57" r="8"  fill="#111"/>
    <circle cx="63" cy="57" r="8"  fill="#111"/>
    <circle cx="39" cy="55" r="3"  fill="white"/>
    <circle cx="65" cy="55" r="3"  fill="white"/>
    <circle cx="39" cy="55" r="1.5" fill="#111"/>
    <circle cx="65" cy="55" r="1.5" fill="#111"/>
    <ellipse cx="50" cy="65" rx="5" ry="4" fill="#111"/>
    <path d="M 34 75 Q 50 88 66 75" stroke="#111" stroke-width="3" fill="none" stroke-linecap="round"/>
    <rect x="40" y="73" width="7" height="9" fill="white" rx="2"/>
    <rect x="53" y="73" width="7" height="9" fill="white" rx="2"/>
    <circle cx="24" cy="70" r="10" fill="#C08820" opacity="0.4"/>
    <circle cx="76" cy="70" r="10" fill="#C08820" opacity="0.4"/>
    <polygon points="34,94 50,100 66,94 50,88" fill="#111"/>
    <circle cx="50" cy="94" r="4" fill="#222"/>
    <circle cx="50" cy="94" r="2" fill="#444"/>
  </svg>`;
}

// =====================================================================
// RENDER: PIZZA CARD
// =====================================================================
function renderPizzaCard(item) {
  const tr      = t();
  const prod    = tr.products[item.id] || { name: item.id, desc: '' };
  const defSize = item.sizes[1];

  const promoHtml = item.promo
    ? `<div class="promo-badge" data-label="−${item.discount}%"></div>` : '';
  const specialBadge = (item.tags.includes('gourmet') || item.tags.includes('premium'))
    ? `<span class="special-badge">${tr.specialBadge}</span>` : '';

  const sizeBtns = item.sizes.map((s, i) => `
    <button class="size-btn ${i === 1 ? 'active' : ''}"
      data-pizza="${item.id}" data-size="${s.key}" data-price="${s.price}"
      data-promo="${item.promo}" data-discount="${item.discount}">
      <span class="size-name">${tr.sizes[s.key]}</span>
      <span class="size-in">${s.size}</span>
    </button>`).join('');

  const origHtml = item.promo
    ? `<span class="card-price-original" id="orig_${item.id}">
         <span class="card-price-original">${formatPrice(defSize.price / (1 - item.discount / 100))}</span>
       </span>` : '';

  return `
    <div class="menu-card ${item.promo ? 'promo-card' : ''}">
      ${promoHtml}
      <div class="card-image-wrap">${pizzaSVG(item.id)}</div>
      <div class="card-body">
        <div class="card-name">${prod.name}</div>
        <div class="card-desc">${prod.desc}</div>
        ${specialBadge}
        <div class="card-price-wrap">
          <span class="card-price" id="price_${item.id}">${formatPrice(defSize.price)}</span>
          ${origHtml}
        </div>
        <div class="size-selector">
          <span class="size-label">${tr.chooseSize}</span>
          <div class="size-btns">${sizeBtns}</div>
        </div>
      </div>
    </div>`;
}

// =====================================================================
// RENDER: BEVERAGE CARD
// =====================================================================
function renderBeverageCard(item) {
  const prod = t().products[item.id] || { name: item.id, desc: '' };
  return `
    <div class="bev-card">
      <div class="bev-img-wrap">${beverageSVG(item.id)}</div>
      <div class="bev-info">
        <div class="bev-name">${prod.name}</div>
        <div class="bev-desc">${prod.desc}</div>
      </div>
      <div class="bev-price">${formatPrice(item.price)}</div>
    </div>`;
}

// =====================================================================
// RENDER TABS
// =====================================================================
function renderPizzas() {
  const s = t().sections.pizzas;
  document.getElementById('pizzas').innerHTML = `
    <div class="section-header"><h2>${s.title}</h2><p>${s.subtitle}</p></div>
    <div class="menu-grid">${MENU.pizzas.map(renderPizzaCard).join('')}</div>`;
}

function renderSpecial() {
  const s = t().sections.special;
  document.getElementById('special').innerHTML = `
    <div class="section-header"><h2>${s.title}</h2><p>${s.subtitle}</p></div>
    <div class="menu-grid">${MENU.special.map(renderPizzaCard).join('')}</div>`;
}

function renderBeverages() {
  const tr  = t();
  const grp = tr.bevGroups;
  let html  = `
    <div class="section-header"><h2>${tr.sections.beverages.title}</h2><p>${tr.sections.beverages.subtitle}</p></div>
    <div class="beverage-grid">`;

  ['water','soda','juice'].forEach(cat => {
    const items = MENU.beverages.filter(b => b.cat === cat);
    if (!items.length) return;
    html += `<div class="beverage-section-title">${grp[cat]}</div>`;
    html += items.map(renderBeverageCard).join('');
  });

  html += '</div>';
  document.getElementById('beverages').innerHTML = html;
}

// =====================================================================
// UPDATE UI TEXT (tabs, tagline, assistant role, restart button)
// =====================================================================
function updateUIText() {
  const tr = t();

  // Tagline
  document.getElementById('logoTagline').textContent = tr.tagline;

  // Tab labels
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const key = btn.dataset.tab;
    btn.querySelector('.tab-label').textContent = tr.tabs[key];
  });

  // Assistant role & restart
  document.getElementById('assistantRole').textContent = tr.assistantRole;
  document.getElementById('restartChat').textContent   = tr.restartBtn;

  // Lang switcher highlight
  document.querySelectorAll('.lang-sw-btn').forEach(b => {
    b.classList.toggle('active-lang', b.dataset.lang === currentLang);
  });
}

// =====================================================================
// RENDER ALL (full redraw in current language)
// =====================================================================
function renderAll() {
  updateUIText();
  renderPizzas();
  renderSpecial();
  renderBeverages();

  // Reset Freddy chat to current language
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatOptions').innerHTML  = '';
  ChatState.step    = 0;
  ChatState.answers = {};
}

// =====================================================================
// TABS
// =====================================================================
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(p => {
        p.classList.toggle('active', p.id === btn.dataset.tab);
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

    const pizzaId  = btn.dataset.pizza;
    const price    = parseFloat(btn.dataset.price);
    const isPromo  = btn.dataset.promo === 'true';
    const discount = parseInt(btn.dataset.discount, 10);

    btn.closest('.size-btns').querySelectorAll('.size-btn')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const priceEl = document.getElementById(`price_${pizzaId}`);
    const origEl  = document.getElementById(`orig_${pizzaId}`);
    if (priceEl) priceEl.textContent = formatPrice(price);
    if (origEl && isPromo) {
      origEl.innerHTML = `<span class="card-price-original">${formatPrice(price / (1 - discount / 100))}</span>`;
    } else if (origEl) {
      origEl.innerHTML = '';
    }
  });
}

// =====================================================================
// TOAST
// =====================================================================
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}

// =====================================================================
// FREDDY CHAT ENGINE
// =====================================================================
const ChatState = { step: 0, answers: {} };

function buildRecsHtml(answers) {
  const r       = t().recs;
  const flavor  = answers.flavor;
  const hunger  = answers.hunger;
  const sizeLabel = r.sizeLabels[hunger] || r.sizeLabels.medium;
  const pizzas  = (r.candidates[flavor] || r.candidates.meat).slice(0, 2);
  const drink   = r.drinks[answers.drink] || r.drinks.any;

  const pizzaItems = pizzas.map(p =>
    `<div class="rec-item">
       <span class="rec-item-icon">${p.icon}</span>
       <div>
         <div class="rec-item-name">${p.name}</div>
         <div class="rec-item-note">${p.note} – ${sizeLabel}</div>
       </div>
     </div>`).join('');

  const drinkItem =
    `<div class="rec-item">
       <span class="rec-item-icon">${drink.icon}</span>
       <div>
         <div class="rec-item-name">${drink.name}</div>
         <div class="rec-item-note">${drink.note}</div>
       </div>
     </div>`;

  return `
    <div class="rec-cards">
      <div style="font-size:12px;color:#b09070;margin-bottom:6px;">${r.pizzaLabel}</div>
      ${pizzaItems}
      <div style="font-size:12px;color:#b09070;margin:8px 0 6px;">${r.drinkLabel}</div>
      ${drinkItem}
    </div>`;
}

function appendMessage(role, html) {
  const msgs = document.getElementById('chatMessages');
  const div  = document.createElement('div');
  div.className = `chat-msg ${role}`;
  div.innerHTML = role === 'freddy'
    ? `<div class="msg-avatar">${freddySVG()}</div><div class="msg-bubble">${html}</div>`
    : `<div class="msg-bubble">${html}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div  = document.createElement('div');
  div.className = 'chat-msg freddy typing-wrap';
  div.innerHTML  = `<div class="msg-avatar">${freddySVG()}</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function removeTyping(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }

function setOptions(options, onSelect) {
  const area = document.getElementById('chatOptions');
  area.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className   = 'chat-opt-btn';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => { setOptions([]); onSelect(opt); });
    area.appendChild(btn);
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

async function runStep(stepIndex) {
  const flow = t().flow;
  const recs = t().recs;

  if (stepIndex >= flow.length) {
    await freddySpeak(recs.final, 600);
    appendMessage('freddy', buildRecsHtml(ChatState.answers));
    await freddySpeak(recs.closing, 1200);
    setOptions([{ label: recs.restart, value: 'restart' }], () => restartChat());
    return;
  }

  const step = flow[stepIndex];
  await freddySpeak(step.freddy, stepIndex === 0 ? 400 : 700);
  setOptions(step.options, async opt => {
    ChatState.answers[step.key] = opt.value;
    appendMessage('user', opt.label);
    await runStep(stepIndex + 1);
  });
}

function restartChat() {
  ChatState.step    = 0;
  ChatState.answers = {};
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatOptions').innerHTML  = '';
  runStep(0);
}

// =====================================================================
// ASSISTANT MODAL
// =====================================================================
function initAssistant() {
  document.getElementById('freddyFabSvg').innerHTML    = freddySVG();
  document.getElementById('assistantAvatarSvg').innerHTML = freddySVG();

  const fab      = document.getElementById('assistantFab');
  const modal    = document.getElementById('assistantModal');
  const overlay  = document.getElementById('assistantOverlay');
  const closeBtn = document.getElementById('assistantClose');

  function openAssistant() {
    modal.classList.add('open');
    overlay.classList.add('visible');
    if (!document.getElementById('chatMessages').children.length) runStep(0);
  }
  function closeAssistant() {
    modal.classList.remove('open');
    overlay.classList.remove('visible');
  }

  fab.addEventListener('click', openAssistant);
  closeBtn.addEventListener('click', closeAssistant);
  overlay.addEventListener('click', closeAssistant);
  document.getElementById('restartChat').addEventListener('click', restartChat);
}

// =====================================================================
// LANGUAGE SWITCHER (header flags)
// =====================================================================
function initLangSwitcher() {
  document.querySelectorAll('.lang-sw-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      sessionStorage.setItem('lang', lang);
      renderAll();
      // Reset chat if open
      if (document.getElementById('assistantModal').classList.contains('open')) {
        restartChat();
      }
    });
  });
}

// =====================================================================
// LANGUAGE PICKER (full-screen on first visit)
// =====================================================================
function showLangPicker() {
  const overlay = document.createElement('div');
  overlay.id        = 'langPicker';
  overlay.className = 'lang-picker-overlay';
  overlay.innerHTML = `
    <div class="lang-picker-box">
      <div class="lang-picker-logo">
        <span class="lang-logo-pizza">🍕</span>
        <h1>Travelers Slices</h1>
        <p>Pizza on the Street, Flavor in the Soul</p>
      </div>
      <p class="lang-picker-prompt">Escolha o idioma<br>Choose your language<br>Elige el idioma</p>
      <div class="lang-options">
        <button class="lang-btn" data-lang="pt">🇧🇷&nbsp; Português</button>
        <button class="lang-btn" data-lang="en">🇺🇸&nbsp; English</button>
        <button class="lang-btn" data-lang="es">🇪🇸&nbsp; Español</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  overlay.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      sessionStorage.setItem('lang', currentLang);
      overlay.classList.add('fade-out');
      setTimeout(() => {
        overlay.remove();
        renderAll();
      }, 400);
    });
  });
}

// =====================================================================
// INIT
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSizeSelectors();
  initAssistant();
  initLangSwitcher();

  if (!currentLang) {
    // First visit – show language picker, render with default (pt) in background
    currentLang = 'pt';
    renderAll();
    currentLang = null; // reset so picker sets it properly
    showLangPicker();
  } else {
    renderAll();
  }
});
