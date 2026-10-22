export type Language = "en" | "pt";

export type ProjectType = "professional" | "personal" | "automation";

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  url2?: string;
  url2Label?: string;
  type: ProjectType;
}

const sharedProjects = (lang: Language): ProjectItem[] => {
  if (lang === "en") {
    return [
      {
        title: "BolTech ERP — multi-company",
        description:
          "ERP for several tracking companies: staged sales, credit analysis, billing, inventory, SIM cards, service orders, commissions and NF-e/NFS-e (Focus NFe). Documented API, queues, WebSocket, an audit trail and collection routines.",
        technologies: ["PHP 8.3", "Laravel 11", "PostgreSQL", "Redis", "RabbitMQ", "Reverb", "REST", "Swagger/OpenAPI", "Sanctum", "Focus NFe", "PHPUnit", "Pint"],
        type: "professional",
      },
      {
        title: "Finance Module — Itaú bolecode and e.Rede cards",
        description:
          "Separate service, own database, tied to the ERP: receivables and payables, duplicatas, boletos and PIX (Itaú bolecode), credit and debit cards on e.Rede (3DS, token, recurrence and refunds), cash drawers, withdrawals, write-off approval and reports.",
        technologies: ["Laravel 11", "PostgreSQL", "Itaú bolecode microservice", "e.Rede", "PIX", "Boletos", "REST"],
        type: "professional",
      },
      {
        title: "Support Module — service desk",
        description:
          "Support apart from the ERP: tickets, sub-tickets, pending items, types, channels, checklists, a knowledge base and attachments. Login stays on the ERP.",
        technologies: ["Laravel 11", "PostgreSQL", "REST", "Sanctum"],
        type: "professional",
      },
      {
        title: "New Tracking Platform (Boltech Platform)",
        description:
          "Backend of the new platform, connected to the ERP and the old system. App and panel with JWT, roles and permissions, an audit trail, alarms, notices, geofences, push and position history with addresses. Flyway migrations, tests on GitHub Actions, OpenAPI docs and a Postman collection.",
        technologies: ["Java 25", "Spring Boot 4", "Spring Security", "OAuth2/JWT", "JPA", "Flyway", "Redis", "PostgreSQL 16", "OpenAPI/springdoc", "Gradle", "GitHub Actions", "Postman"],
        type: "professional",
      },
      {
        title: "Arvyn — AI agent harness for development",
        description:
          "Orchestrator I wrote in TypeScript and Node 22, on the Claude Agent SDK. A task goes through planning, code, tests (PHPUnit, Pint, Gradle), QA and review, in parallel worktrees with an isolated database. It queues requests, pauses when I need to decide, pings Discord and delivers by branch. I use it with Cursor and Claude Code.",
        technologies: ["TypeScript", "Node.js 22", "Claude Agent SDK", "Claude Code", "Cursor", "Claude Opus 5.5", "Claude Fable", "Grok", "MCP", "PowerShell", "Git worktrees", "PostgreSQL"],
        type: "professional",
      },
      {
        title: "Server infrastructure and operations",
        description:
          "Debian and Apache VPS, development and production on the same machine. Supervisor workers per queue, daily database (pg_dump) and file backups, and version switches that keep the app up.",
        technologies: ["Debian", "Apache", "Supervisor", "PostgreSQL", "pg_dump", "Redis", "Scheduler", "Nginx", "SSL", "PowerShell"],
        type: "professional",
      },
      {
        title: "AI Customer Service Analysis & Monitoring — Digisac",
        description:
          "Reads past Digisac conversations and follows open tickets. OpenAI handles text, audio, images, video and PDFs. It writes guidance, schedules follow-ups, builds reports with the evidence and tracks API cost. Data stays in JSON, with cache, a lock against duplicate actions, a simulation mode and tests. (Sep–Oct/2026)",
        technologies: ["Node.js 22+", "JavaScript", "ESM", "HTML", "CSS", "Digisac REST API", "OpenAI API", "GPT-4.1 mini", "GPT-4o mini Transcribe", "FFmpeg", "FFprobe", "PDF.js", "Canvas", "JSON", "Local Cache", "Git", "npm", "PM2", "Node.js Native Tests"],
        type: "professional",
      },
      {
        title: "Vehicle Tracking System",
        description:
          "Built from scratch with a monitoring dashboard, GPS device integration and real-time notifications.",
        technologies: ["Java", "PHP", "PostgreSQL", "Bootstrap 3", "jQuery"],
        url: "https://rastreio.boltech.com.br/",
        type: "professional",
      },
      {
        title: "Mobile App — BolTech Trackers",
        description:
          "Layout improvements, bug fixes and new features for the vehicle tracking mobile app.",
        technologies: ["Ionic", "Angular", "TypeScript"],
        url: "https://play.google.com/store/apps/details?id=io.ionic.boltechrastreadores",
        url2: "https://apps.apple.com/br/app/boltech-rastreadores-v2/id6504941062?platform=iphone",
        url2Label: "App Store",
        type: "professional",
      },
      {
        title: "BolTech Institutional Website",
        description:
          "Institutional website for BolTech Trackers, presenting vehicle tracking and monitoring services.",
        technologies: ["WordPress", "Elementor"],
        url: "https://boltech.com.br",
        type: "professional",
      },
      {
        title: "Bolpar Distributor E-commerce",
        description:
          "Complete platform with product catalog, quote cart and authentication. ERP integration via WebService.",
        technologies: ["PHP", "PostgreSQL", "NuSoap", "WebService"],
        url: "https://www.bolpar.com.br/",
        type: "professional",
      },
      {
        title: "WhatsApp Bulk Messaging System",
        description:
          "Mass message automation with dynamic fields and support for multiple campaigns.",
        technologies: ["PHP", "PostgreSQL", "Laravel", "Queues", "WhatsApp API"],
        type: "professional",
      },
      {
        title: "WhatsApp Self-service Bot",
        description:
          "Bot integrated with the Bolpar website that searches products 24/7, speeding up the sales team.",
        technologies: ["Node.js", "WhatsApp API", "Web Integration"],
        type: "professional",
      },
      {
        title: "WhatsApp Audio Campaigns with TTS",
        description:
          "Non-aggressive marketing system with personalized audio, purchase history, smart broadcasts and professional voice profiles.",
        technologies: ["PHP", "Laravel", "PostgreSQL", "Tailwind CSS", "Google Cloud TTS"],
        type: "personal",
      },
      {
        title: "Financial Control System",
        description:
          "Complete business financial management — income, expenses, cash flow and reports for decision making.",
        technologies: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
        type: "personal",
      },
      {
        title: "WhatsApp + Bling Order Automation",
        description:
          "Automatic order creation in Bling through conversational flows on WhatsApp.",
        technologies: ["Node.js", "Google Cloud Run", "ReplyAgent", "Bling API"],
        type: "automation",
      },
      {
        title: "Sales Participation Tracking",
        description:
          "Automatic tracking and attribution of participation credits on sold orders from Bling.",
        technologies: ["Node.js", "Google Cloud Run", "AppScript", "Bling API", "Google Sheets"],
        type: "automation",
      },
      {
        title: "Geocoding Microservice & Local Nominatim Server",
        description:
          "Turns a tracking coordinate into an address, with Google Geocoding, Photon and Nominatim, Redis cache and a BullMQ queue. I also run a local Nominatim (OpenStreetMap, Docker, Nginx, PostGIS) on Ubuntu under WSL2, with a PowerShell startup script and Python monitoring. (April–May/2026)",
        technologies: ["Node.js", "BullMQ", "Redis", "Google Geocoding API", "Photon", "Nominatim", "OpenStreetMap", "Docker Compose", "Nginx", "PostgreSQL/PostGIS", "Ubuntu/WSL2", "PowerShell", "Python"],
        type: "automation",
      },
    ];
  }
  return [
    {
      title: "ERP BolTech — multi-empresa",
      description:
        "ERP para várias empresas de rastreamento: venda em etapas, análise de crédito, faturamento, estoque, chip, ordem de serviço, comissão e NF-e/NFS-e (Focus NFe). API documentada, fila, WebSocket, auditoria e rotina de cobrança.",
      technologies: ["PHP 8.3", "Laravel 11", "PostgreSQL", "Redis", "RabbitMQ", "Reverb", "REST", "Swagger/OpenAPI", "Sanctum", "Focus NFe", "PHPUnit", "Pint"],
      type: "professional",
    },
    {
      title: "Módulo Financeiro — bolecode Itaú e cartão e.Rede",
      description:
        "Serviço à parte, com banco próprio, ligado ao ERP: conta a receber e a pagar, duplicata, boleto e PIX (bolecode Itaú), cartão de crédito e débito na e.Rede (3DS, token, recorrência e estorno), caixa, sangria, aprovação de baixa e relatório.",
      technologies: ["Laravel 11", "PostgreSQL", "Microserviço bolecode Itaú", "e.Rede", "PIX", "Boletos", "REST"],
      type: "professional",
    },
    {
      title: "Módulo de Suporte — atendimentos",
      description:
        "Atendimento separado do ERP: ticket, subticket, pendência, tipo, canal, checklist, base de conhecimento e anexo. O login fica no ERP.",
      technologies: ["Laravel 11", "PostgreSQL", "REST", "Sanctum"],
      type: "professional",
    },
    {
      title: "Nova Plataforma de Rastreamento (Boltech Platform)",
      description:
        "Backend da plataforma nova, ligado ao ERP e ao sistema antigo. App e painel com JWT, papel e permissão, auditoria, alarme, aviso, cerca virtual, push e histórico de posição com endereço. Migração com Flyway, teste no GitHub Actions, documentação OpenAPI e collection do Postman.",
      technologies: ["Java 25", "Spring Boot 4", "Spring Security", "OAuth2/JWT", "JPA", "Flyway", "Redis", "PostgreSQL 16", "OpenAPI/springdoc", "Gradle", "GitHub Actions", "Postman"],
      type: "professional",
    },
    {
      title: "Arvyn — Harness de agentes de IA para desenvolvimento",
      description:
        "Orquestrador que escrevi em TypeScript e Node 22, em cima do Claude Agent SDK. A tarefa passa por planejamento, código, teste (PHPUnit, Pint, Gradle), QA e revisão, em worktrees paralelos com banco isolado. Tem fila, pausa quando eu preciso decidir, aviso no Discord e entrega por branch. Uso junto com Cursor e Claude Code.",
      technologies: ["TypeScript", "Node.js 22", "Claude Agent SDK", "Claude Code", "Cursor", "Claude Opus 5.5", "Claude Fable", "Grok", "MCP", "PowerShell", "Git worktrees", "PostgreSQL"],
      type: "professional",
    },
    {
      title: "Infraestrutura e operação do servidor",
      description:
        "VPS Debian e Apache, com desenvolvimento e produção na mesma máquina. Workers do Supervisor por fila, backup diário de banco (pg_dump) e de arquivos, e troca de versão sem derrubar o aplicativo.",
      technologies: ["Debian", "Apache", "Supervisor", "PostgreSQL", "pg_dump", "Redis", "Scheduler", "Nginx", "SSL", "PowerShell"],
      type: "professional",
    },
    {
      title: "Análise e Monitoramento de Atendimentos com IA — Digisac",
      description:
        "Lê conversas antigas da Digisac e acompanha chamado aberto. A OpenAI trata texto, áudio, imagem, vídeo e PDF. Gera orientação, agenda retorno, monta relatório com a evidência e controla o custo da API. Os dados ficam em JSON, com cache, trava contra ação duplicada, modo simulado e teste. (set–out/2026)",
      technologies: ["Node.js 22+", "JavaScript", "ESM", "HTML", "CSS", "API REST Digisac", "API OpenAI", "GPT-4.1 mini", "GPT-4o mini Transcribe", "FFmpeg", "FFprobe", "PDF.js", "Canvas", "JSON", "Cache Local", "Git", "npm", "PM2", "Testes Nativos Node.js"],
      type: "professional",
    },
    {
      title: "Sistema de Rastreamento de Veículos",
      description:
        "Desenvolvido do zero com painel de monitoramento, integração com dispositivos GPS e notificações em tempo real.",
      technologies: ["Java", "PHP", "PostgreSQL", "Bootstrap 3", "jQuery"],
      url: "https://rastreio.boltech.com.br/",
      type: "professional",
    },
    {
      title: "App Mobile — BolTech Rastreadores",
      description:
        "Melhoria de layout, correção de bugs e implementação de novas funcionalidades no aplicativo mobile de rastreamento de veículos.",
      technologies: ["Ionic", "Angular", "TypeScript"],
      url: "https://play.google.com/store/apps/details?id=io.ionic.boltechrastreadores",
      url2: "https://apps.apple.com/br/app/boltech-rastreadores-v2/id6504941062?platform=iphone",
      url2Label: "App Store",
      type: "professional",
    },
    {
      title: "Site Institucional BolTech",
      description:
        "Site institucional da BolTech Rastreadores, apresentando serviços de rastreamento e monitoramento veicular.",
      technologies: ["WordPress", "Elementor"],
      url: "https://boltech.com.br",
      type: "professional",
    },
    {
      title: "E-commerce Bolpar Distribuidora",
      description:
        "Plataforma completa com catálogo de produtos, carrinho de cotações e autenticação. Integração com ERP via WebService.",
      technologies: ["PHP", "PostgreSQL", "NuSoap", "WebService"],
      url: "https://www.bolpar.com.br/",
      type: "professional",
    },
    {
      title: "Sistema de Disparo via WhatsApp",
      description:
        "Automatização de envios em massa com campos dinâmicos e suporte a múltiplas campanhas.",
      technologies: ["PHP", "PostgreSQL", "Laravel", "Queues", "API WhatsApp"],
      type: "professional",
    },
    {
      title: "Robô de Autoatendimento WhatsApp",
      description:
        "Robô integrado ao site da Bolpar que pesquisa produtos 24/7, agilizando o atendimento para o time de vendas.",
      technologies: ["Node.js", "WhatsApp API", "Integração Web"],
      type: "professional",
    },
    {
      title: "Campanhas de Áudio via WhatsApp com TTS",
      description:
        "Sistema de marketing não agressivo com áudio personalizado, histórico de compras, disparos inteligentes e perfis de voz profissionais.",
      technologies: ["PHP", "Laravel", "PostgreSQL", "Tailwind CSS", "Google Cloud TTS"],
      type: "personal",
    },
    {
      title: "Sistema de Controle Financeiro",
      description:
        "Gestão financeira empresarial completa — receitas, despesas, fluxo de caixa e relatórios para tomada de decisão.",
      technologies: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
      type: "personal",
    },
    {
      title: "Automação de Pedidos via WhatsApp + Bling",
      description:
        "Criação automática de pedidos no Bling através de fluxos conversacionais no WhatsApp.",
      technologies: ["Node.js", "Google Cloud Run", "ReplyAgent", "Bling API"],
      type: "automation",
    },
    {
      title: "Identificação de Participação em Vendas",
      description:
        "Rastreamento e atribuição automática de créditos de participação em pedidos vendidos do Bling.",
      technologies: ["Node.js", "Google Cloud Run", "AppScript", "Bling API", "Google Sheets"],
      type: "automation",
    },
    {
      title: "Microsserviço de Geocoding e Servidor Local Nominatim",
      description:
        "Transforma coordenada do rastreamento em endereço, com Google Geocoding, Photon e Nominatim, cache no Redis e fila no BullMQ. Também deixo um Nominatim local no ar (OpenStreetMap, Docker, Nginx, PostGIS), em Ubuntu no WSL2, com script de subida em PowerShell e monitoramento em Python. (abril–maio/2026)",
      technologies: ["Node.js", "BullMQ", "Redis", "Google Geocoding API", "Photon", "Nominatim", "OpenStreetMap", "Docker Compose", "Nginx", "PostgreSQL/PostGIS", "Ubuntu/WSL2", "PowerShell", "Python"],
      type: "automation",
    },
  ];
};

export const translations = {
  en: {
    nav: {
      timeline: "Journey",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      resume: "Résumé PDF",
      resumeHref: "/resume-wellington-alves.pdf",
      resumeFile: "Resume-Wellington-G-Alves.pdf",
    },
    languageToggle: "Switch to Portuguese",
    summary: {
      title: "Summary",
      subtitle: "> Quick overview",
      paragraphs: [
        "Full stack developer for 8+ years, in Curitiba. I work on vehicle tracking, e-commerce, WhatsApp and the integrations between them — from the screen down to the server.",
        "Day to day the stack is PHP and Laravel, Node.js, Java and TypeScript, Angular and Ionic, PostgreSQL, MySQL and Redis.",
        "At BolTech since 2018. Right now I carry the ERP (Laravel 11), the new tracking platform (Java 25 and Spring Boot 4) and the production server. I code with Cursor and Claude Code, and with Arvyn, an orchestrator I wrote myself.",
      ],
      highlights: [
        { label: "Years", value: "8+" },
        { label: "Projects shipped", value: "11+" },
        { label: "Main stack", value: "Full Stack" },
        { label: "Based in", value: "Curitiba, BR" },
      ],
    },
    hero: {
      role: "> Full Stack Developer",
      tagline:
        "+8 years on tracking, e-commerce and WhatsApp — from the screen down to the server.",
      available: "🚀 Available for freelance projects",
      footerStart: "💬 I'll review your project and share my opinion ",
      footerHighlight: "with no commitment",
      footerEnd: ". Let's talk!",
      whatsapp: "(41) 9 9637-4950",
    },
    timeline: {
      title: "Journey",
      subtitle: "> From construction worker to full stack developer",
      items: [
        {
          year: "2015",
          title: "Education Begins",
          subtitle: "Uni/Opet — Systems Analysis and Development",
          description:
            "Started college in Systems Analysis, diving into the world of software development.",
          icon: "education" as const,
        },
        {
          year: "2017",
          title: "First Certifications",
          subtitle: "DevMedia — Bootstrap, JavaScript",
          description:
            "Certifications in Bootstrap and JavaScript/TypeScript, consolidating front-end fundamentals.",
          icon: "education" as const,
        },
        {
          year: "2018",
          title: "Full Stack Developer",
          subtitle: "BolTech Trackers & Bolpar Distributor",
          description:
            "Started my career as a full stack dev. Built the company's main product — the vehicle tracking system — from scratch.",
          icon: "work" as const,
        },
        {
          year: "2019-2020",
          title: "Project Expansion",
          subtitle: "Integrations & E-commerce",
          description:
            "Developed the Bolpar e-commerce, WhatsApp messaging system, and integrations between systems via API, Webhook and WebSocket.",
          icon: "work" as const,
        },
        {
          year: "2021",
          title: "Angular Specialization",
          subtitle: "desenvolvedor.io — SPA and Advanced Angular",
          description:
            "Deep dive into Angular with SPA and advanced development courses.",
          icon: "education" as const,
        },
        {
          year: "2022-2024",
          title: "Smart Automations",
          subtitle: "Personal and corporate projects",
          description:
            "Built financial systems, order automation via Bling, image processing scripts and audio campaigns with TTS.",
          icon: "work" as const,
        },
        {
          year: "2025",
          title: "AI & Self-service",
          subtitle: "Integrated WhatsApp bot",
          description:
            "Developed a WhatsApp self-service bot integrated with the Bolpar website, searching products 24/7 with intelligence.",
          icon: "work" as const,
        },
        {
          year: "2026",
          title: "Mobile App — Tracking",
          subtitle: "BolTech Trackers — Ionic + Angular",
          description:
            "Layout improvements, bug fixes and new features for BolTech's vehicle tracking mobile app.",
          icon: "work" as const,
        },
        {
          year: "Apr/2026",
          title: "Geocoding Microservice",
          subtitle: "Node.js + BullMQ + Redis",
          description:
            "Built a microservice to convert GPS coordinates into addresses with Google Geocoding, Photon and Nominatim, integrated cache and queue support — plugged into the vehicle tracking system.",
          icon: "work" as const,
        },
        {
          year: "May/2026",
          title: "Local Geocoding Server",
          subtitle: "Nominatim — OpenStreetMap",
          description:
            "Local Nominatim with OpenStreetMap, Docker, Nginx and PostGIS on WSL2, plus a startup script and monitoring.",
          icon: "work" as const,
        },
        {
          year: "Sep/2026 – Oct/2026",
          title: "AI Customer Service Analysis & Monitoring",
          subtitle: "Digisac + OpenAI — Full Stack",
          description:
            "App on Digisac to review past conversations and follow open tickets, with audio, images, video, PDFs and reports.",
          icon: "work" as const,
        },
        {
          year: "Jun/2026 – Present",
          title: "ERP, New Tracking Platform and AI Harness",
          subtitle: "BolTech Trackers — Full Stack / Backend",
          description:
            "Still at BolTech, with the tracking system in production. I build the ERP, finance, support and the new platform, and I look after the server, backups and what gets published.",
          icon: "work" as const,
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "> What I've shipped",
      typeLabels: {
        professional: "professional",
        personal: "personal",
        automation: "automation",
      },
      visitSite: "Visit site",
      items: sharedProjects("en"),
    },
    skills: {
      title: "Technologies",
      subtitle: "> What I use",
      categories: [
        { name: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Ionic", "jQuery", "Bootstrap CSS", "Tailwind CSS"] },
        { name: "Backend", skills: ["PHP 8.3", "Laravel 11", "Java 25", "Spring Boot 4", "Spring Security", "JPA/Hibernate", "Flyway", "Gradle", "Node.js", "BullMQ", "RabbitMQ", "Reverb (WebSockets)", "Sanctum", "Python"] },
        { name: "AI-Assisted Development", skills: ["Claude Code", "Cursor", "Claude Agent SDK", "MCP", "Claude Opus 5.5", "Claude Fable", "Grok", "Arvyn (custom harness)"] },
        { name: "Database", skills: ["PostgreSQL", "PostGIS", "MySQL", "Redis", "Data Modeling", "SQL"] },
        { name: "Integrations", skills: ["RESTful API", "Digisac API", "OpenAI API", "Itaú bolecode microservice (boletos/PIX)", "e.Rede (cards)", "Focus NFe (NF-e/NFS-e)", "Swagger/OpenAPI", "Postman", "JSON", "XML", "NuSOAP", "Webhook", "WebSocket"] },
        { name: "DevOps & Tools", skills: ["Git", "Linux", "Debian", "Ubuntu/WSL2", "Apache", "Supervisor", "Docker", "Docker Compose", "Nginx", "PowerShell", "GitHub Actions (CI)", "PHPUnit", "Laravel Pint", "Gradle test", "Git worktrees", "pg_dump", "Composer", "NPM", "PM2", "Node.js Native Tests", "SSL"] },
        { name: "Digital Marketing", skills: ["Google Ads", "Facebook Ads", "Google Analytics", "Tag Manager", "SEO", "Pixel"] },
        { name: "Cloud & Infrastructure", skills: ["AWS (VPS)", "Google Cloud Run", "Google Cloud TTS", "Google Cloud (VPS)", "Hostinger (VPS)", "Google Sheets API", "AppScript"] },
        { name: "Geolocation", skills: ["Nominatim", "OpenStreetMap", "Reverse Geocoding"] },
        { name: "AI & Media", skills: ["GPT-4.1 mini", "GPT-4o mini Transcribe", "FFmpeg", "FFprobe", "PDF.js", "Canvas"] },
      ],
    },
    contact: {
      title: "Let's Work Together?",
      lead: "I'm available for freelance projects — from a complete system to one-off automations.",
      cta: "💬 I'll review your project and share my opinion with no commitment!",
      whatsappLabel: "WhatsApp",
      whatsappValue: "(41) 9 9637-4950",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Wellington Alves",
      githubLabel: "GitHub",
      footer: (year: number) => `© ${year} Wellington G. Alves — Curitiba, PR`,
    },
  },
  pt: {
    nav: {
      timeline: "Trajetória",
      projects: "Projetos",
      skills: "Skills",
      contact: "Contato",
      resume: "Currículo PDF",
      resumeHref: "/curriculo-wellington-alves.pdf",
      resumeFile: "Curriculo-Wellington-G-Alves.pdf",
    },
    languageToggle: "Mudar para inglês",
    summary: {
      title: "Resumo",
      subtitle: "> Visão geral rápida",
      paragraphs: [
        "Desenvolvedor full stack há mais de 8 anos, em Curitiba. Trabalho com rastreamento de veículos, e-commerce, WhatsApp e a integração entre eles — da tela até o servidor.",
        "No dia a dia a stack é PHP e Laravel, Node.js, Java e TypeScript, Angular e Ionic, PostgreSQL, MySQL e Redis.",
        "Na BolTech desde 2018. Agora levo o ERP (Laravel 11), a plataforma nova de rastreamento (Java 25 e Spring Boot 4) e o servidor de produção. Programo com Cursor e Claude Code, e com o Arvyn, um orquestrador que eu mesmo escrevi.",
      ],
      highlights: [
        { label: "Anos", value: "8+" },
        { label: "Projetos entregues", value: "11+" },
        { label: "Stack principal", value: "Full Stack" },
        { label: "Baseado em", value: "Curitiba, BR" },
      ],
    },
    hero: {
      role: "> Desenvolvedor Full Stack",
      tagline:
        "+8 anos em rastreamento, e-commerce e WhatsApp — da tela até o servidor.",
      available: "🚀 Disponível para projetos freelancer",
      footerStart: "💬 Analiso seu projeto e dou minha opinião ",
      footerHighlight: "sem compromisso",
      footerEnd: ". Vamos conversar!",
      whatsapp: "(41) 9 9637-4950",
    },
    timeline: {
      title: "Trajetória",
      subtitle: "> De servente de obra a desenvolvedor full stack",
      items: [
        {
          year: "2015",
          title: "Início da Formação",
          subtitle: "Uni/Opet — Análise e Desenvolvimento de Sistemas",
          description:
            "Início da graduação em ADS, mergulhando no mundo do desenvolvimento de software.",
          icon: "education" as const,
        },
        {
          year: "2017",
          title: "Primeiros Certificados",
          subtitle: "DevMedia — Bootstrap, JavaScript",
          description:
            "Certificações em Bootstrap e JavaScript/TypeScript, consolidando fundamentos front-end.",
          icon: "education" as const,
        },
        {
          year: "2018",
          title: "Desenvolvedor Full Stack",
          subtitle: "BolTech Rastreadores & Bolpar Distribuidora",
          description:
            "Início da carreira como dev full stack. Criação do sistema de rastreamento de veículos do zero — o projeto principal da empresa.",
          icon: "work" as const,
        },
        {
          year: "2019-2020",
          title: "Expansão de Projetos",
          subtitle: "Integrações & E-commerce",
          description:
            "Desenvolvimento do e-commerce Bolpar, sistema de disparo via WhatsApp e integrações entre sistemas via API, Webhook e WebSocket.",
          icon: "work" as const,
        },
        {
          year: "2021",
          title: "Especialização Angular",
          subtitle: "desenvolvedor.io — SPA e Angular Avançado",
          description:
            "Aprofundamento em Angular com cursos de SPA e desenvolvimento avançado.",
          icon: "education" as const,
        },
        {
          year: "2022-2024",
          title: "Automações Inteligentes",
          subtitle: "Projetos pessoais e corporativos",
          description:
            "Criação de sistemas financeiros, automação de pedidos via Bling, scripts de processamento de imagens e campanhas de áudio com TTS.",
          icon: "work" as const,
        },
        {
          year: "2025",
          title: "IA & Autoatendimento",
          subtitle: "Robô WhatsApp integrado",
          description:
            "Desenvolvimento de robô de autoatendimento via WhatsApp integrado ao site da Bolpar, pesquisando produtos 24/7 com inteligência.",
          icon: "work" as const,
        },
        {
          year: "2026",
          title: "App Mobile — Rastreamento",
          subtitle: "BolTech Rastreadores — Ionic + Angular",
          description:
            "Melhoria de layout, correção de bugs e implementação de novas funcionalidades no aplicativo mobile de rastreamento de veículos da BolTech.",
          icon: "work" as const,
        },
        {
          year: "abr/2026",
          title: "Microsserviço de Geocoding",
          subtitle: "Node.js + BullMQ + Redis",
          description:
            "Criação de microsserviço para converter coordenadas GPS em endereços usando Google Geocoding, Photon e Nominatim, com cache integrado e suporte a fila — acoplado ao sistema de rastreamento de veículos.",
          icon: "work" as const,
        },
        {
          year: "maio/2026",
          title: "Servidor Local de Geocodificação",
          subtitle: "Nominatim — OpenStreetMap",
          description:
            "Nominatim local com OpenStreetMap, Docker, Nginx e PostGIS no WSL2, com script de subida e monitoramento.",
          icon: "work" as const,
        },
        {
          year: "set/2026 – out/2026",
          title: "Análise e Monitoramento de Atendimentos com IA",
          subtitle: "Digisac + OpenAI — Full Stack",
          description:
            "Aplicação na Digisac para avaliar conversa antiga e acompanhar chamado aberto, com áudio, imagem, vídeo, PDF e relatório.",
          icon: "work" as const,
        },
        {
          year: "jun/2026 – Atual",
          title: "ERP, Nova Plataforma de Rastreamento e Harness de IA",
          subtitle: "BolTech Rastreadores — Full Stack / Backend",
          description:
            "Sigo na BolTech, com o rastreamento em produção. Desenvolvo o ERP, o financeiro, o suporte e a plataforma nova, e cuido do servidor, do backup e do que sobe para o ar.",
          icon: "work" as const,
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "> O que eu já entreguei",
      typeLabels: {
        professional: "profissional",
        personal: "pessoal",
        automation: "automação",
      },
      visitSite: "Visitar site",
      items: sharedProjects("pt"),
    },
    skills: {
      title: "Tecnologias",
      subtitle: "> O que eu uso",
      categories: [
        { name: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Ionic", "jQuery", "Bootstrap CSS", "Tailwind CSS"] },
        { name: "Backend", skills: ["PHP 8.3", "Laravel 11", "Java 25", "Spring Boot 4", "Spring Security", "JPA/Hibernate", "Flyway", "Gradle", "Node.js", "BullMQ", "RabbitMQ", "Reverb (WebSockets)", "Sanctum", "Python"] },
        { name: "Desenvolvimento assistido por IA", skills: ["Claude Code", "Cursor", "Claude Agent SDK", "MCP", "Claude Opus 5.5", "Claude Fable", "Grok", "Arvyn (harness próprio)"] },
        { name: "Banco de Dados", skills: ["PostgreSQL", "PostGIS", "MySQL", "Redis", "Modelagem de Dados", "SQL"] },
        { name: "Integrações", skills: ["API RESTful", "API Digisac", "API OpenAI", "Microserviço bolecode Itaú (boletos/PIX)", "e.Rede (cartão)", "Focus NFe (NF-e/NFS-e)", "Swagger/OpenAPI", "Postman", "JSON", "XML", "NuSOAP", "Webhook", "WebSocket"] },
        { name: "DevOps & Ferramentas", skills: ["Git", "Linux", "Debian", "Ubuntu/WSL2", "Apache", "Supervisor", "Docker", "Docker Compose", "Nginx", "PowerShell", "GitHub Actions (CI)", "PHPUnit", "Laravel Pint", "Gradle test", "Git worktrees", "pg_dump", "Composer", "NPM", "PM2", "Testes Nativos Node.js", "SSL"] },
        { name: "Marketing Digital", skills: ["Google Ads", "Facebook Ads", "Google Analytics", "Tag Manager", "SEO", "Pixel"] },
        { name: "Cloud & Infraestrutura", skills: ["AWS (VPS)", "Google Cloud Run", "Google Cloud TTS", "Google Cloud (VPS)", "Hostinger (VPS)", "Google Sheets API", "AppScript"] },
        { name: "Geolocalização", skills: ["Nominatim", "OpenStreetMap", "Geocodificação Reversa"] },
        { name: "IA & Mídia", skills: ["GPT-4.1 mini", "GPT-4o mini Transcribe", "FFmpeg", "FFprobe", "PDF.js", "Canvas"] },
      ],
    },
    contact: {
      title: "Vamos Trabalhar Juntos?",
      lead: "Estou disponível para projetos freelancer — desde um sistema completo até automações pontuais.",
      cta: "💬 Analiso seu projeto e dou minha opinião sem compromisso!",
      whatsappLabel: "WhatsApp",
      whatsappValue: "(41) 9 9637-4950",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Wellington Alves",
      githubLabel: "GitHub",
      footer: (year: number) => `© ${year} Wellington G. Alves — Curitiba, PR`,
    },
  },
};

export type TranslationDict = typeof translations.en;
