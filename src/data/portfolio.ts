export const personal = {
  name: "Kevin Alexander Mayorga Martínez",
  title: { es: "Ingeniero en Ciencias de la Computación", en: "Computer Science Engineer" },
  email: "kmayorga1995@gmail.com",
  phone: "7220-2142",
  location: "San Salvador, El Salvador",
  github: "https://github.com/Kerro16",
  linkedin: "",
};

export const experience = [
  {
    role:    { es: "Líder Técnico Oracle",     en: "Oracle Technical Lead" },
    company: "Bancoagrícola",
    period:  "Mar 2024 – Present",
    current: true,
    description: {
      es: "Responsable de la continuidad operativa y estabilidad de la plataforma IBM Portal. Lidero la gestión de incidentes de alta complejidad, coordinando equipos técnicos para asegurar tiempos de respuesta óptimos (SLA). Especialista en diagnóstico avanzado de sistemas financieros mediante análisis de trazas y logs de servidor.",
      en: "Responsible for operational continuity and stability of the IBM Portal platform. Lead high-complexity incident management, coordinating technical teams to ensure optimal SLA response times. Specialist in advanced financial system diagnostics via server trace and log analysis.",
    },
    tags: ["IBM Portal", "WebSphere", "SLA Management", "Incident Response", "Java", "IBM DB2"],
  },
  {
    role:    { es: "Jr Engineer",     en: "Jr Engineer" },
    company: "Rulesware",
    period:  "Sep 2021 – Jul 2022",
    current: false,
    description: {
      es: "Desarrollo de soluciones fintech internacionales combinando Java con plataformas low-code (Mendix y PEGA). Gestión del ciclo de vida completo del software en el sector financiero.",
      en: "Development of international fintech solutions combining Java with low-code platforms (Mendix & PEGA). Full software lifecycle management in the financial sector.",
    },
    tags: ["Java", "Mendix", "PEGA", "Fintech", "Spring Boot", "Agile/Scrum"],
  },
  {
    role:    { es: "Freelance BackEnd Developer", en: "Freelance BackEnd Developer" },
    company: { es: "Independiente", en: "Self-employed" },
    period:  "Sep 2021 – Jul 2022",
    current: false,
    description: {
      es: "Desarrollo de sitios E-Commerce a medida con WordPress, Shopify y WooCommerce. Levantamiento de requerimientos, soporte y capacitación al cliente.",
      en: "Custom E-Commerce site development using WordPress, Shopify, and WooCommerce. Requirements gathering, support, and client training.",
    },
    tags: ["WordPress", "Shopify", "WooCommerce", "JavaScript", "PHP", "E-Commerce"],
  },
  {
    role:    { es: "Web Developer", en: "Web Developer" },
    company: "Efectiva Perú",
    period:  "Jun 2020 – Dec 2020",
    current: false,
    description: {
      es: "Desarrollo de un simulador de cuotas y montos de crédito para entidad financiera peruana.",
      en: "Development of a credit installment and amount simulator for a Peruvian financial entity.",
    },
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Financial Systems"],
  },
];

export const skills = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    items: ["Java", "Go", "C#", "C++", "Python", "TypeScript", "JavaScript", "Kotlin", "PHP", "Dart", "Bash"],
  },
  {
    category: { es: "Frameworks & Runtimes", en: "Frameworks & Runtimes" },
    items: ["Spring Boot", ".NET 8", "Next.js", "Angular", "Flutter", "Node.js"],
  },
  {
    category: { es: "Bases de datos", en: "Databases" },
    items: ["MySQL", "PostgreSQL", "PostGIS", "Microsoft SQL Server", "IBM DB2", "SQLite", "Firebase"],
  },
  {
    category: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: ["Microsoft Azure", "Docker", "Git", "GitHub", "Maven", "Gradle"],
  },
  {
    category: { es: "Enterprise & Tools", en: "Enterprise & Tools" },
    items: ["IBM WebSphere", "IBM Portal", "IBM MQBroker", "Mendix", "PEGA", "Postman", "VMware"],
  },
  {
    category: { es: "IA & Automatización", en: "AI & Automation" },
    items: ["Claude AI", "Claude Code", "GitHub Copilot", "ChatGPT", "Cursor", "Prompt Engineering"],
  },
];

export const projects = [
  {
    name: "CheckPOS SV",
    description: {
      es: "Mapa crowdsourced de El Salvador que muestra qué negocios aceptan tarjeta, Chivo Wallet o solo efectivo — y si su ubicación en Maps sigue siendo válida. Backend en Go con queries geoespaciales nativas via PostGIS (ST_DWithin, ST_MakeEnvelope), frontend Leaflet.js sobre OpenStreetMap sin costo. 5,900+ negocios importados desde OpenStreetMap via Overpass API.",
      en: "Crowdsourced map of El Salvador showing which businesses accept card, Chivo Wallet, or cash only — and whether their Maps location is still valid. Go backend with native geospatial queries via PostGIS (ST_DWithin, ST_MakeEnvelope), Leaflet.js frontend on OpenStreetMap at zero cost. 5,900+ businesses seeded from OpenStreetMap via Overpass API.",
    },
    highlights: {
      es: [
        "Queries geoespaciales con ST_DWithin sobre PostGIS a <10ms por radio",
        "Carga de viewport por bounding box — solo se transfieren los negocios visibles",
        "Sistema de confianza crowdsourced: reportes de 3 IPs distintos auto-flagean un negocio",
        "Rate limiting por IP (token bucket), headers de seguridad, gzip 76% compresión",
        "Importador OSM: 5,900+ negocios de El Salvador via Overpass API con upsert idempotente",
      ],
      en: [
        "Geospatial queries with ST_DWithin on PostGIS at <10ms per radius search",
        "Viewport bounding-box loading — only visible businesses are transferred",
        "Crowdsourced trust system: reports from 3 distinct IPs auto-flag a business",
        "Per-IP rate limiting (token bucket), security headers, 76% gzip compression",
        "OSM importer: 5,900+ El Salvador businesses via Overpass API with idempotent upsert",
      ],
    },
    tags: ["Go", "PostgreSQL", "PostGIS", "Leaflet.js", "OpenStreetMap", "Docker", "REST API"],
    github: "https://github.com/Kerro16/checkpos-sv",
    type: "Personal",
  },
  {
    name: "Emulator",
    description: {
      es: "Servidor privado completo para el MMORPG Angels Online, reconstruido mediante ingeniería inversa. Implementa networking TCP custom, IA de monstruos con A*, pathfinding, sistema de combate, inventario, gremios y más de 120 opcodes del protocolo original. Las herramientas de RE están escritas en C++ (DLL injection).",
      en: "Full private server for the MMORPG Angels Online, reconstructed via reverse engineering. Implements custom TCP networking, A* monster AI, pathfinding, combat system, inventory, guilds, and 120+ original protocol opcodes. Reverse engineering tools written in C++ (DLL injection).",
    },
    highlights: {
      es: ["Monster AI con A* + walkability grid aprendida", "120+ opcodes del protocolo original", "DLL injection en C++ para RE", "Sistema de guilds, war totems y economía"],
      en: ["Monster AI with A* + learned walkability grid", "120+ original protocol opcodes", "C++ DLL injection for reverse engineering", "Guild system, war totems, and economy"],
    },
    tags: ["C#", ".NET 8", "C++", "MySQL", "Docker", "TCP/IP", "Reverse Engineering"],
    github: "https://github.com/Kerro16",
    type: "Personal",
  },
  {
    name: "AO Platform",
    description: {
      es: "Ecosistema full-stack para el servidor privado: portal web (Next.js + TypeScript), API REST (Spring Boot + Java), launcher con auto-update (C# WPF) y herramientas de gestión de assets (Python).",
      en: "Full-stack ecosystem for the private server: web portal (Next.js + TypeScript), REST API (Spring Boot + Java), auto-update launcher (C# WPF), and asset management tools (Python).",
    },
    highlights: {
      es: ["Portal web de registro y dashboard", "Auto-update con verificación de integridad", "REST API con auth Blowfish", "Asset manager PAK/SHP en Python"],
      en: ["Web portal with registration and dashboard", "Auto-update with integrity verification", "REST API with Blowfish auth", "Python PAK/SHP asset manager"],
    },
    tags: ["Next.js", "TypeScript", "Spring Boot", "Java", "C#", "WPF", "Python", "MySQL"],
    github: "https://github.com/Kerro16",
    type: "Personal",
  },
  {
    name: "Launcher",
    description: {
      es: "Launcher con auto-actualización. Descarga parches de forma incremental, verifica integridad por hash, aplica anti-cheat básico y autentica al jugador contra el backend antes de lanzar el cliente.",
      en: "Auto-update launcher. Incrementally downloads patches, verifies file integrity by hash, applies basic anti-cheat, and authenticates the player against the backend before launching the client.",
    },
    highlights: {
      es: ["Auto-update incremental con verificación de hash", "Anti-cheat básico integrado", "Autenticación contra API REST (Blowfish)", "Interfaz WPF moderna"],
      en: ["Incremental auto-update with hash verification", "Built-in basic anti-cheat", "REST API authentication (Blowfish)", "Modern WPF interface"],
    },
    tags: ["C#", ".NET 8", "WPF", "Blowfish", "Auto-Update"],
    github: "https://github.com/Kerro16",
    type: "Personal",
  },
  {
    name: "AngelsSpy",
    description: {
      es: "DLL de ingeniería inversa en C++ que se inyecta en el cliente del MMORPG Angels Online. Hookea las funciones recv y send del proceso para capturar y loguear todos los paquetes de red en tiempo real, permitiendo documentar el protocolo propietario del juego.",
      en: "C++ reverse engineering DLL injected into the Angels Online MMORPG client. Hooks the process's recv and send functions to capture and log all network packets in real time, enabling documentation of the game's proprietary protocol.",
    },
    highlights: {
      es: ["Hook de recv/send via DLL injection", "Logging en modo RAW y MAPPED_ONLY", "Captura en tiempo real sin modificar el cliente"],
      en: ["recv/send hook via DLL injection", "RAW and MAPPED_ONLY logging modes", "Real-time capture without client modification"],
    },
    tags: ["C++", "DLL Injection", "Reverse Engineering", "Win32 API", "Network"],
    github: "https://github.com/Kerro16",
    type: "Personal",
  },
  {
    name: "AOInyector",
    description: {
      es: "Herramienta de inyección de DLL en C++ para el proceso angel.exe. Utiliza CreateRemoteThread para cargar AngelsSpy u ObtainData en el proceso objetivo, simplificando el flujo de captura de paquetes durante la fase de ingeniería inversa.",
      en: "C++ DLL injection tool targeting the angel.exe process. Uses CreateRemoteThread to load AngelsSpy or ObtainData into the target process, streamlining the packet capture workflow during the reverse engineering phase.",
    },
    highlights: {
      es: ["Inyección via CreateRemoteThread", "Soporte para múltiples DLLs (AngelsSpy / ObtainData)", "Requiere elevación de administrador", "Herramienta CLI liviana"],
      en: ["Injection via CreateRemoteThread", "Multi-DLL support (AngelsSpy / ObtainData)", "Requires administrator elevation", "Lightweight CLI tool"],
    },
    tags: ["C++", "DLL Injection", "Win32 API", "Reverse Engineering", "CLI"],
    github: "https://github.com/Kerro16",
    type: "Personal",
  },
  {
    name: "StoreAPI + FrontStore",
    description: {
      es: "API REST para tienda en línea construida en Java con Spring Boot, y su frontend en TypeScript. Gestión de productos, órdenes, usuarios y autenticación.",
      en: "REST API for an online store built in Java with Spring Boot, paired with a TypeScript frontend. Product management, orders, users, and authentication.",
    },
    highlights: {
      es: ["API REST con Spring Boot", "Frontend en TypeScript", "CRUD completo de productos y órdenes", "Autenticación y gestión de usuarios"],
      en: ["Spring Boot REST API", "TypeScript frontend", "Full CRUD for products and orders", "Authentication and user management"],
    },
    tags: ["Java", "Spring Boot", "TypeScript", "REST API"],
    github: "https://github.com/Kerro16/StoreAPI",
    type: "Personal",
  },
  {
    name: "SistemaGestionGimnasio",
    description: {
      es: "Sistema de gestión completo para un gimnasio: control de membresías, pagos, asistencia y clientes. Desarrollado en Java con interfaz de escritorio.",
      en: "Complete gym management system: membership control, payments, attendance, and client management. Built in Java with a desktop interface.",
    },
    highlights: {
      es: ["Gestión de membresías y pagos", "Control de asistencia", "Módulo de clientes y reportes", "Interfaz de escritorio en Java"],
      en: ["Membership and payment management", "Attendance tracking", "Client module and reports", "Java desktop interface"],
    },
    tags: ["Java", "CRUD", "Desktop App", "Management System"],
    github: "https://github.com/Kerro16/SistemaGestionGimnasio",
    type: "Personal",
  },
  {
    name: "InventarioCasa",
    description: {
      es: "Aplicación móvil en Flutter/Dart para llevar el inventario de alimentos en el hogar. Seguimiento de existencias, fechas de vencimiento y alertas.",
      en: "Flutter/Dart mobile app for tracking household food inventory. Stock tracking, expiration dates, and alerts.",
    },
    highlights: {
      es: ["App móvil con Flutter/Dart", "Inventario de alimentos", "Alertas de vencimiento", "Backend HTML/REST"],
      en: ["Flutter/Dart mobile app", "Food inventory tracking", "Expiration date alerts", "HTML/REST backend"],
    },
    tags: ["Flutter", "Dart", "Mobile", "HTML"],
    github: "https://github.com/Kerro16/InventarioCasa",
    type: "Personal",
  },
  {
    name: "KerroAuthenticator",
    description: {
      es: "Sistema de autenticación en Java. Implementación de flujos de login, gestión de sesiones y seguridad de credenciales.",
      en: "Authentication system in Java. Implementation of login flows, session management, and credential security.",
    },
    highlights: {
      es: ["Autenticación en Java", "Gestión de sesiones", "Seguridad de credenciales", "Flujos de login"],
      en: ["Java authentication", "Session management", "Credential security", "Login flows"],
    },
    tags: ["Java", "Security", "Authentication"],
    github: "https://github.com/Kerro16/KerroAuthenticator",
    type: "Personal",
  },
];

export const education = [
  {
    degree:      { es: "Ingeniería en Ciencias de la Computación", en: "Computer Science Engineering" },
    institution: "Universidad Francisco Gavidia",
    period:      "2015 – 2022",
    location:    "San Salvador, El Salvador",
  },
  {
    degree:      { es: "Bachillerato General", en: "High School Diploma" },
    institution: "Liceo Ladislao Leiva",
    period:      "2013 – 2014",
    location:    "El Salvador",
  },
];
