"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tags?: string[];
};

type Category = {
  id: string;
  label: string;
  items: MenuItem[];
  note?: string;
};

const categories: Category[] = [
  {
    id: "cafe-negro",
    label: "Café Negro",
    items: [
      { name: "Espresso", price: "$3.800" },
      { name: "Americano", price: "$4.200" },
      { name: "Doppio", price: "$4.200" },
    ],
  },
  {
    id: "cafe-con-leche",
    label: "Café con Leche",
    items: [
      { name: "Flat White", price: "$5.200" },
      { name: "Capuccino", price: "$5.200" },
      { name: "Café con leche", price: "$5.200" },
      { name: "Latte", price: "$4.900" },
    ],
  },
  {
    id: "cafe-especial",
    label: "Café Especial",
    items: [
      { name: "Cinnamon Latte", price: "$5.500" },
      { name: "Vainilla Latte", price: "$5.500" },
      { name: "Mocha", price: "$5.500" },
      { name: "Café del mes", price: "$5.800", tags: ["✨"] },
      { name: "Cold Brew 330cc", price: "$7.000" },
    ],
    note: "Preguntale a nuestro barista cuál es el sabor del mes.",
  },
  {
    id: "bebidas-calientes",
    label: "Bebidas Calientes",
    items: [
      { name: "Té negro", price: "$4.000" },
      { name: "Té hibiscus", price: "$4.000" },
      { name: "Chocolate", price: "$5.200" },
      { name: "Chai Latte", price: "$5.200" },
    ],
  },
  {
    id: "bebidas-frias",
    label: "Bebidas Frías",
    items: [
      { name: "Limonada menta / maracuyá", price: "$6.500" },
      { name: "Limonada hibiscus", price: "$6.500" },
      { name: "Limonada frutos rojos", price: "$6.500" },
      { name: "Licuado", price: "$6.500" },
      { name: "Frapuchino DDL", price: "$6.500" },
      { name: "Frapuchino chocolate", price: "$6.500" },
    ],
  },
  {
    id: "gaseosas-aguas",
    label: "Gaseosas y Aguas",
    items: [
      { name: "Gaseosa lata", price: "$3.800" },
      { name: "Levité", price: "$3.800" },
      { name: "Agua con/sin gas", price: "$3.800" },
      { name: "Jugo de naranja", price: "$5.500" },
    ],
    note: "Pedí tu café frío o caliente y elegí la leche que más te guste, sin costo adicional.",
  },
  {
    id: "laminados",
    label: "Laminados",
    items: [
      { name: "Medialuna", price: "$2.500" },
      { name: "Medialuna rellena", price: "$3.600" },
      { name: "Croissant", price: "$5.200" },
      { name: "Croissant rellena", price: "$5.800" },
      { name: "Chipa", price: "$5.800" },
      { name: "Scon de queso", price: "$5.800" },
    ],
  },
  {
    id: "rolls",
    label: "Rolls",
    items: [
      { name: "Roll de canela", price: "$5.800" },
      { name: "Roll de Nutella", price: "$6.200" },
      { name: "Roll de frutos rojos", price: "$6.200" },
      { name: "Roll pepperoni pizza", price: "$6.200" },
      { name: "Stromboli acelga ricotta", price: "$6.200" },
    ],
  },
  {
    id: "cookies",
    label: "Cookies",
    items: [
      { name: "Red velvet", price: "$6.200" },
      { name: "Pistacho", price: "$6.200" },
      { name: "Doble chocolate", price: "$6.200" },
      { name: "Vainilla chips y Nutella", price: "$6.200" },
      { name: "Key Lime", price: "$6.200" },
      { name: "Cookie del mes", price: "$6.200", tags: ["✨"] },
    ],
  },
  {
    id: "pasteleria",
    label: "Pastelería",
    items: [
      { name: "Alfajor chocolates", price: "$6.000" },
      { name: "Alfajor almendras", price: "$6.000" },
      { name: "Budín amapolas", price: "$5.800" },
      { name: "Budín Red Velvet", price: "$5.800" },
      { name: "Brownie", price: "$5.800" },
      { name: "Brownie del mes", price: "$6.200", tags: ["✨"] },
      { name: "Porción torta", price: "$11.500" },
    ],
  },
  {
    id: "brunch",
    label: "All Day Brunch",
    items: [
      { name: "Granola con yogurt y frutas de estación", price: "$9.800" },
      {
        name: "Avocado Toast",
        price: "$10.800",
        description: "Palta, huevo revuelto, tomate y mix de semillas",
      },
      {
        name: "Avocado Croissant",
        price: "$11.500",
        description: "Palta, huevo revuelto, tomate y mix de semillas",
      },
      {
        name: "Tostadas",
        price: "$6.800",
        description: "Acompañadas de queso crema y mermelada",
      },
      { name: "Tostado de jamón y queso", price: "$10.200" },
      { name: "Medialuna lomito y queso", price: "$6.500" },
      { name: "Croissant de jamón y queso", price: "$7.200" },
      { name: "Sandwich Chipa", price: "$10.500" },
    ],
    note: "Tenemos pan keto o pan vegano — ¡no te olvides de pedirlo!",
  },
  {
    id: "sanguches",
    label: "Sánguches",
    items: [
      {
        name: "Focaccia",
        price: "$12.500",
        description: "Jamón crudo, queso, pesto, albahaca y tomate",
      },
      {
        name: "Club Chicken",
        price: "$13.500",
        description: "Pollo desmechado, panceta, queso, lechuga, tomate y mayonesa de ajo",
      },
      {
        name: "Ciabatta Parmesana",
        price: "$13.500",
        description: "Milanesa de pollo, queso patégras, pesto rojo y rúgula",
      },
    ],
  },
  {
    id: "ensaladas",
    label: "Ensaladas",
    items: [
      {
        name: "César",
        price: "$12.500",
        description: "Pollo, lechuga, dressing César, crotones, parmesano y bacon",
      },
      {
        name: "Atún",
        price: "$12.500",
        description: "Atún, lechuga, tomate, parmesano y dressing de soja y jengibre",
      },
    ],
    note: "Combo almuerzo de 12 a 16hs: incluye bebida y café chico, todo por $7.000 más.",
  },
  {
    id: "promos",
    label: "Promociones",
    items: [
      { name: "Bebida caliente + Medialuna XL", price: "$6.500" },
      { name: "Bebida caliente + cookie o roll", price: "$9.800" },
      { name: "Bebida caliente + tostadas", price: "$9.500" },
      { name: "Bebida caliente + avocado toast", price: "$14.500" },
      { name: "Bebida caliente + tostado de jamón y queso", price: "$12.500" },
      {
        name: "2 bebidas calientes + 1 tostado de jamón y queso + 1 cookie",
        price: "$24.000",
      },
      {
        name: "Bebida caliente + pan de campo, mermelada, queso, huevo revuelto y jugo de naranja",
        price: "$18.500",
      },
      {
        name: "Bebida caliente + jugo de naranja + tostadas francesas",
        price: "$14.500",
      },
      {
        name: "Bebida caliente + Avocado Croissant + jugo de naranja",
        price: "$19.500",
      },
      {
        name: "Bebida caliente + avocado toast + granola y yogurt",
        price: "$22.500",
      },
      {
        name: "2 bebidas calientes + 2 jugos o limonada + tostado de jamón y queso o Chipa Relleno + 2 cookies",
        price: "$38.500",
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-primary mb-4 reveal">
          Nuestra Carta
        </h2>
        <p className="text-center text-ink/60 mb-12 reveal">
          También podés pedir por{" "}
          <a
            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/frucupi--belgrano-71275fc3-ee55-4893-ba3a-ad108c2cd7a5-menu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            PedidosYa
          </a>
        </p>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          role="tablist"
          aria-label="Categorías del menú"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-sans transition-all ${
                active === cat.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-cream text-ink/70 hover:bg-cream-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {current.items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start py-3 border-b border-cream-dark"
            >
              <div>
                <span className="font-sans text-ink">{item.name}</span>
                {item.tags && (
                  <span className="ml-2 text-xs">{item.tags.join(" ")}</span>
                )}
                {item.description && (
                  <p className="text-sm text-ink/50 mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="font-sans font-medium text-accent ml-4 shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {current.note && (
          <p className="mt-6 text-sm text-ink/60 italic text-center">
            {current.note}
          </p>
        )}
      </div>
    </section>
  );
}
