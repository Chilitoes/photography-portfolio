// Local image data — references files under ../images/<country>/...
// Paths are relative to /redesign/index.html

// Encode each path segment so spaces/parens in filenames work everywhere
const IMG = (path) => "../images/" + path.split("/").map(encodeURIComponent).join("/");

window.PORTFOLIO = [
  // Japan
  { id: "jp-01", country: "Japan", city: "Osaka",     title: "Dotonbori canal",         year: 2024, camera: "Sony A7 III · 24-70mm",    src: IMG("Japan/IMG_5583.JPG") },
  { id: "jp-02", country: "Japan", city: "Kyoto",     title: "Rickshaw, sakura",        year: 2024, camera: "Sony A7 III · 35mm f/1.8", src: IMG("Japan/IMG_5305 2.JPG") },
  { id: "jp-03", country: "Japan", city: "Tokyo",     title: "Late night corner",       year: 2024, camera: "Sony A7 III · 35mm f/1.8", src: IMG("Japan/IMG_6785.JPG") },
  { id: "jp-04", country: "Japan", city: "Tokyo",     title: "Sakura after dark",       year: 2024, camera: "Sony A7 III · 24-70mm",    src: IMG("Japan/IMG_6090.JPG") },
  { id: "jp-05", country: "Japan", city: "Tokyo",     title: "Street karts",            year: 2024, camera: "Sony A7 III · 24-70mm",    src: IMG("Japan/IMG_6819 2.JPG") },
  { id: "jp-06", country: "Japan", city: "Osaka",     title: "Tsutenkaku tower",        year: 2024, camera: "Sony A7 III · 24-70mm",    src: IMG("Japan/IMG_5931.JPG") },
  { id: "jp-07", country: "Japan", city: "Kyoto",     title: "Quiet street",            year: 2024, camera: "Sony A7 III · 35mm f/1.8", src: IMG("Japan/IMG_2564.JPG") },
  { id: "jp-08", country: "Japan", city: "Tokyo",     title: "Neon 2 a.m.",             year: 2024, camera: "Sony A7 III · 35mm f/1.8", src: IMG("Japan/IMG_6862 2.JPG") },

  // China
  { id: "cn-01", country: "China", city: "Suzhou",    title: "Hexagon window",          year: 2023, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("China/DSCF8199.JPG") },
  { id: "cn-02", country: "China", city: "Beijing",   title: "Temple incense",          year: 2023, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("China/IMG_9089.JPG") },
  { id: "cn-03", country: "China", city: "Suzhou",    title: "Garden pavilion",         year: 2023, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("China/DSCF8511.JPG") },
  { id: "cn-04", country: "China", city: "Shanghai",  title: "Round heritage, night",   year: 2023, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("China/IMG_7694.JPG") },
  { id: "cn-05", country: "China", city: "Shanghai",  title: "Lanterns",                year: 2023, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("China/DSCF8409.JPG") },
  { id: "cn-06", country: "China", city: "Beijing",   title: "Hutong morning",          year: 2023, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("China/IMG_9090.JPG") },
  { id: "cn-07", country: "China", city: "Suzhou",    title: "Pavilion reflections",    year: 2023, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("China/DSCF8280.JPG") },
  { id: "cn-08", country: "China", city: "Shanghai",  title: "After the rain",          year: 2023, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("China/IMG_7705.JPG") },

  // Taiwan
  { id: "tw-01", country: "Taiwan", city: "Taipei",   title: "Night market",            year: 2024, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("Taiwan/IMG_4112.jpeg") },
  { id: "tw-02", country: "Taiwan", city: "Taipei",   title: "Alley, alone",            year: 2024, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("Taiwan/DSCF3878.jpeg") },
  { id: "tw-03", country: "Taiwan", city: "Jiufen",   title: "Lanterns at dusk",        year: 2024, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("Taiwan/IMG_4169.jpeg") },
  { id: "tw-04", country: "Taiwan", city: "Taipei",   title: "Scooter parade",          year: 2024, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("Taiwan/IMG_3924.jpeg") },
  { id: "tw-05", country: "Taiwan", city: "Tainan",   title: "Temple courtyard",        year: 2024, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("Taiwan/DSCF4191.jpeg") },
  { id: "tw-06", country: "Taiwan", city: "Taipei",   title: "Convenience light",       year: 2024, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("Taiwan/IMG_4289.jpeg") },

  // Malaysia
  { id: "my-01", country: "Malaysia", city: "Kuala Lumpur", title: "City quiet hour",   year: 2023, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("Malaysia/DSCF1058.JPG") },
  { id: "my-02", country: "Malaysia", city: "Kuala Lumpur", title: "Twin towers",       year: 2023, camera: "Fuji X-T4 · 35mm f/1.4",   src: IMG("Malaysia/IMG_6274.JPG") },
  { id: "my-03", country: "Malaysia", city: "Kuala Lumpur", title: "Side street",       year: 2023, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("Malaysia/DSCF1062.JPG") },
  { id: "my-04", country: "Malaysia", city: "Kuala Lumpur", title: "Rooftop, dusk",     year: 2023, camera: "Fuji X-T4 · 23mm f/2",     src: IMG("Malaysia/DSCF1078.JPG") },

  // Singapore
  { id: "sg-01", country: "Singapore", city: "Singapore", title: "Marina, blue hour",   year: 2023, camera: "Sony A7 III · 24-70mm",    src: IMG("Singapore/IMG_6462.JPG") },

  // Brunei
  { id: "br-01", country: "Brunei", city: "Bandar Seri Begawan", title: "Mosque at noon",   year: 2024, camera: "Fuji X-T4 · 23mm f/2",   src: IMG("Brunei/IMG_7969.jpeg") },
  { id: "br-02", country: "Brunei", city: "Bandar Seri Begawan", title: "Riverside",        year: 2024, camera: "Fuji X-T4 · 35mm f/1.4", src: IMG("Brunei/IMG_7949.jpeg") },
  { id: "br-03", country: "Brunei", city: "Bandar Seri Begawan", title: "Stilt village",    year: 2024, camera: "Fuji X-T4 · 23mm f/2",   src: IMG("Brunei/IMG_8029.jpeg") },
  { id: "br-04", country: "Brunei", city: "Bandar Seri Begawan", title: "Quiet courtyard",  year: 2024, camera: "Fuji X-T4 · 23mm f/2",   src: IMG("Brunei/IMG_7966.jpeg") },
];

// Hero image
window.HERO_IMG = IMG("Japan/IMG_2564.JPG");

// Portrait for About
window.PORTRAIT_IMG = IMG("alston shi/_MG_5717.jpeg");

window.COUNTRIES = ["All", "Japan", "China", "Taiwan", "Malaysia", "Singapore", "Brunei"];

window.MARQUEE_CITIES = [
  "TOKYO", "KYOTO", "OSAKA",
  "SHANGHAI", "BEIJING", "SUZHOU",
  "TAIPEI", "JIUFEN",
  "KUALA LUMPUR",
  "SINGAPORE",
  "BANDAR SERI BEGAWAN",
];

// Home grid layout (kept for parity even though Home now uses the swirl)
window.HOME_LAYOUT = [
  { key: "jp-04", cls: "t-wide-2" },
  { key: "cn-06", cls: "t-tall" },
  { key: "jp-03", cls: "t-sq-4" },
  { key: "sg-01", cls: "t-sq-4" },
  { key: "my-01", cls: "t-sq-4" },
  { key: "jp-06", cls: "t-wide-3" },
  { key: "cn-01", cls: "t-wide-3" },
];

// About timeline entries
window.TIMELINE = [
  { year: "2018", place: "Tokyo",                line: "Bought my first real camera. Quit a desk job.", src: IMG("Japan/IMG_2564.JPG") },
  { year: "2019", place: "Kyoto",                line: "Winter alone. Learned to wait.",                src: IMG("Japan/IMG_5305 2.JPG") },
  { year: "2020", place: "Shanghai",             line: "Stuck. Photographed the same three streets.",   src: IMG("China/IMG_7694.JPG") },
  { year: "2022", place: "Kuala Lumpur",         line: "First assignment. Paid in ringgit and kopi.",   src: IMG("Malaysia/IMG_6274.JPG") },
  { year: "2023", place: "Singapore",            line: "A group show at Gillman Barracks.",             src: IMG("Singapore/IMG_6462.JPG") },
  { year: "2024", place: "Bandar Seri Begawan",  line: "A quiet mosque at noon. Nobody around.",        src: IMG("Brunei/IMG_7969.jpeg") },
  { year: "2025", place: "Taipei",               line: "Back to film. Mostly.",                         src: IMG("Taiwan/IMG_4112.jpeg") },
];

window.BIO = [
  "Alston Shi is a travel and documentary photographer based between Singapore and Kyoto.",
  "His work is preoccupied with ordinary places held at unusual light — courtyards at four in the morning, wet markets in the last hour of rain, trains emptying at stations whose names he doesn't know.",
  "He carries a small camera and a notebook. He misses a lot of things on purpose.",
  "Selected work has appeared in editorial features across Asia. For commissions or prints, write.",
];
