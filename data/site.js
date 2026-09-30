export const phoneLabel = "+38 068 667 39 37";
export const phoneHref = "tel:+380686673937";

const phoneIntl = "380686673937";

export const messengers = [
  { id: "telegram", label: "Telegram", href: `https://t.me/+${phoneIntl}` },
  { id: "whatsapp", label: "WhatsApp", href: `https://wa.me/${phoneIntl}` },
  { id: "viber", label: "Viber", href: `viber://chat?number=%2B${phoneIntl}` },
];

export const menu = [
  { href: "#services", label: "Послуги" },
  { href: "#business", label: "Бізнесу" },
  { href: "#extra", label: "Додаткові послуги" },
  { href: "#service", label: "Сервіс" },
  { href: "#steps", label: "Як працюємо" },
  { href: "#geography", label: "Географія" },
  { href: "#contacts", label: "Контакти" },
];

export const categories = [
  {
    id: "home",
    title: "Для дому",
    items: [
      {
        title: "Переїзди",
        text: "Перевеземо меблі, техніку та особисті речі на нове місце.",
        image: "/images/services/move.jpg",
      },
      {
        title: "Особисті речі",
        text: "Коробки, речі та інший домашній вантаж.",
        image: "/images/services/personal.jpg",
      },
      {
        title: "Будівельні матеріали",
        text: "Матеріали, сантехніка, інструменти",
        image: "/images/services/materials.jpg",
      },
      {
        title: "Меблі та техніка",
        text: "Перевезення меблів, побутової техніки та великогабаритних речей.",
        image: "/images/services/furniture.jpg",
      },
    ],
  },
  {
    id: "business",
    title: "Для бізнесу",
    items: [
      {
        title: "Магазини та підприємці",
        text: "Доставка товарів зі складу або магазину безпосередньо покупцю.",
        image: "/images/services/shops.jpg",
      },
      {
        title: "Фермери та агровиробники",
        text: "Продукція, тара, матеріали та обладнання.",
        image: "/images/services/farm.jpg",
      },
      {
        title: "Будівельні бригади",
        text: "Матеріали, інструменти та обладнання на об'єкт.",
        image: "/images/services/crew.jpg",
      },
      {
        title: "Організації",
        text: "Разові та регулярні перевезення за попереднім замовленням.",
        image: "/images/services/org.jpg",
      },
    ],
  },
];

export const cooperation = [
  {
    id: "shop",
    title: "Від магазину до клієнта",
    text: "Доставляємо меблі, побутову техніку, сантехніку, будівельні матеріали та інші великогабаритні товари.",
  },
  {
    id: "cargo",
    title: "Допомога з вантажем",
    text: "Пакування, підготовка до перевезення, завантаження та розвантаження.",
  },
  {
    id: "regular",
    title: "Разово або регулярно",
    text: "Можна замовити окрему доставку або домовитися про постійну співпрацю.",
  },
  {
    id: "fleet",
    title: "Не потрібно утримувати власний транспорт",
    text: "Ми можемо взяти доставку ваших товарів клієнтам на себе. Це зручно, вигідно та надійно",
    accent: true,
  },
];

export const extraServices = [
  {
    title: "Запакуємо",
    text: "Підготуємо речі, меблі та техніку до перевезення.",
  },
  {
    title: "Завантажимо",
    text: "Допоможемо винести, завантажити та розвантажити речі.",
  },
  {
    title: "Занесемо",
    text: "Занесемо меблі, техніку або інший важкий вантаж у будинок чи квартиру.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Телефонуєте заздалегідь",
    text: "Розкажіть, що потрібно перевезти, звідки забрати та куди доставити.",
  },
  {
    number: "02",
    title: "Узгоджуємо деталі",
    text: "Уточнюємо маршрут, обсяг вантажу, дату, час, додаткові послуги та вартість.",
  },
  {
    number: "03",
    title: "Забираємо вантаж",
    text: "Приїжджаємо у погоджений час. За потреби допомагаємо з пакуванням і завантаженням.",
  },
  {
    number: "04",
    title: "Доставляємо вантаж",
    text: "Перевозимо вантаж за адресою, розвантажуємо та за потреби заносимо.",
  },
];

export const legend = [
  { id: "country", label: "Територія України" },
  { id: "region", label: "Дніпропетровська область" },
  { id: "district", label: "Криворізький район" },
  { id: "cities", label: "Міста України" },
  { id: "town", label: "Зеленодольськ" },
  { id: "routes", label: "Міжміські перевезення" },
];

export const footerColumns = [
  {
    title: "Послуги",
    links: [
      { href: "#services", label: "Послуги" },
      { href: "#business", label: "Бізнесу" },
      { href: "#extra", label: "Додаткові послуги" },
    ],
  },
  {
    title: "Сервіс",
    links: [
      { href: "#service", label: "Сервіс" },
      { href: "#steps", label: "Як працюємо" },
      { href: "#geography", label: "Географія" },
    ],
  },
];
