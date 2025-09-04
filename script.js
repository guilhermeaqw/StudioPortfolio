// LOVE STUDIOS - Main Application
class LoveStudiosApp {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupContactForm();
        this.setupLanguageSelector();
        this.setupAnimations();
        this.setupScrollOptimization();
        this.setupLazyLoading();
        this.setupImageModal();

        this.setupSecurity();
        this.setupMediaOptimization();
        
        // Performance Avançada
        this.setupCodeSplitting();
        this.setupBundleOptimization();
        this.setupCriticalCSS();
        this.setupImageOptimization();
        this.setupPrefetchResources();
        this.setupPerformanceMonitoring();
        this.setupMemoryManagement();
        
        this.loadGalleries();
        this.setupImagePreview();
        this.setupPageTransitions();
        this.setupEntryAnimations();
        this.setupGlassmorphism();
        this.setupLoadingStates();
        this.setupSkeletonScreens();
        this.setupAdvancedLoadingStates();
        this.setupMicroInteractions();
        this.setupBackToTop();
        this.setupProgressBar();
        this.setupDarkMode();
        this.setupTypingEffect();
        this.setupComplexParticleSystem();
        this.hideLoadingIndicator();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.navigateToPage(targetId);
            });
        });

        // Navegação por category cards
        const categoryCards = document.querySelectorAll('.category-card');
        
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = card.getAttribute('href').substring(1);
                this.navigateToPage(targetId);
            });
        });

        // Botão "Ver Portfolio" - scroll para seção de serviços
        const portfolioBtn = document.querySelector('a[href="#services"]');
        if (portfolioBtn) {
            portfolioBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }

        // Navegação por hash
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1) || 'home';
            this.navigateToPage(hash);
        });

        // Navegação inicial
        const initialHash = window.location.hash.substring(1) || 'home';
        this.navigateToPage(initialHash);
    }

    navigateToPage(pageId) {
        // Scroll para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Esconder todas as páginas
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Mostrar página alvo
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
            
            // Atualizar URL
            window.location.hash = pageId;
            
            // Atualizar navegação ativa
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`[href="#${pageId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Carregar módulos específicos da página
            if (this.loadPageModules) {
                this.loadPageModules(pageId);
            }
        }
    }

    setupMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Fechar menu ao clicar em um link
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
    }

    setupLanguageSelector() {
        this.translations = {
            pt: {
                // Navigation
                'nav-script': 'Script',
                'nav-concept-art': 'Concept Art',
                'nav-illustration': 'Illustration',
                'nav-rig': 'Rig',
                'nav-3d-model': '3D Model',
                'nav-buildings': 'Buildings',
                'nav-animations': 'Animations',
                'nav-gui-ui': 'GUI/UI',
                
                // Hero
                'hero-subtitle': 'Criando experiências extraordinárias no Roblox',
                'hero-portfolio-btn': 'Ver Portfolio',
                
                // Statistics
                'stats-title': 'Nossa Experiência',
                'stats-projects': 'Projetos Desenvolvidos',
                'stats-clients': 'Clientes Satisfeitos',
                
                // Services
                'services-title': 'Nossos Serviços',
                'script-title': 'Script',
                'script-desc': 'Sistemas avançados para experiências Roblox',
                'concept-art-title': 'Concept Art',
                'concept-art-desc': 'Arte conceitual para mundos únicos',
                'illustration-title': 'Illustration',
                'illustration-desc': 'Ilustrações digitais detalhadas',
                'rig-title': 'Rig',
                'rig-desc': 'Character rigging profissional',
                '3d-model-title': '3D Model',
                '3d-model-desc': 'Modelos 3D otimizados para Roblox',
                'buildings-title': 'Buildings',
                'buildings-desc': 'Arquiteturas e ambientes imersivos',
                'animations-title': 'Animations',
                'animations-desc': 'Animações fluidas e expressivas',
                'gui-ui-title': 'GUI/UI',
                'gui-ui-desc': 'Interfaces intuitivas para Roblox',
                
                // Contact
                'contact-title': 'Vamos Criar Juntos',
                'contact-subtitle': 'Transforme sua ideia em realidade com nossa expertise em desenvolvimento Roblox',
                'contact-name': 'Nome',
                'contact-email': 'Email',
                'contact-message': 'Descrição do Projeto',
                'contact-send': 'Enviar Solicitação',
                'contact-name-full': 'Seu nome completo',
                'contact-email-placeholder': 'seu@email.com',
                'contact-message-placeholder': 'Descreva seu projeto em detalhes: objetivos, estilo desejado, prazo, referências, etc.',
                
                // About Section
                'about-title': 'Sobre LOVE STUDIOS',
                'about-subtitle': 'Mais que um estúdio, somos parceiros na criação de experiências extraordinárias',
                'about-mission-title': 'Nossa Missão',
                'about-mission-text-1': 'Fundado com a paixão pela inovação, o LOVE STUDIOS é especializado em desenvolvimento para Roblox. Combinamos programação avançada, design excepcional e storytelling envolvente para criar experiências que conectam jogadores e constroem comunidades duradouras na plataforma.',
                'about-mission-text-2': 'Nossa equipe multidisciplinar domina todas as facetas do desenvolvimento Roblox, desde scripts complexos até arte conceitual impressionante, garantindo que cada projeto seja uma obra-prima técnica e visual.',
                'about-why-title': 'Por que Nos Escolher?',
                'about-focus-title': 'Foco em Resultados',
                'about-focus-desc': 'Projetos que superam expectativas e geram resultados mensuráveis',
                'about-excellence-title': 'Excelência Comprovada',
                'about-excellence-desc': '8+ anos de experiência com 200+ projetos entregues',
                'about-innovation-title': 'Inovação Constante',
                'about-innovation-desc': 'Sempre na vanguarda das tecnologias e tendências do Roblox',
                'about-quality-title': 'Qualidade Premium',
                'about-quality-desc': 'Cada pixel, cada linha de código é cuidadosamente pensada para entregar excelência',
                'about-partnership-title': 'Parceria Verdadeira',
                'about-partnership-desc': 'Não somos apenas fornecedores, somos parceiros investidos no seu sucesso',
                'about-trust-title': 'Confiança Total',
                'about-trust-desc': 'Transparência, comunicação clara e cumprimento de prazos em todos os projetos',
                
                // Form Fields
                'form-project-type': 'Tipo de Projeto',
                'form-project-type-placeholder': 'Selecione o tipo',
                'form-budget': 'Orçamento Estimado',
                'form-budget-placeholder': 'Faixa de orçamento',
                'form-option-script': 'Script/Programação',
                'form-option-concept-art': 'Concept Art',
                'form-option-illustration': 'Illustration',
                'form-option-rig': 'Character Rigging',
                'form-option-3d-model': 'Modelos 3D',
                'form-option-buildings': 'Buildings/Cenários',
                'form-option-animations': 'Animações',
                'form-option-gui-ui': 'GUI/UI Design',
                'form-option-complete': 'Projeto Completo',
                'form-budget-500-1000': 'R$ 500 - R$ 1.000',
                'form-budget-1000-3000': 'R$ 1.000 - R$ 3.000',
                'form-budget-3000-5000': 'R$ 3.000 - R$ 5.000',
                'form-budget-5000+': 'R$ 5.000+',
                'form-budget-discuss': 'Prefiro discutir',
                
                // Service Descriptions
                'concept-art-desc-long': 'Arte conceitual original criada para dar vida a mundos fantásticos.',
                'illustration-desc-long': 'Ilustrações digitais detalhadas que contam histórias visuais únicas. Cada obra é criada com paixão e atenção aos detalhes.',
                'rig-desc-long': 'Character rigging profissional para animações fluidas e expressivas.',
                '3d-model-desc-long': 'Modelos 3D otimizados para Roblox com alta qualidade visual. Criamos assets únicos e detalhados.',
                'buildings-desc-long': 'Arquiteturas e ambientes imersivos que criam mundos únicos. Desenvolvemos cenários detalhados e atmosféricos.',
                'animations-desc-long': 'Animações fluidas e expressivas que dão vida aos personagens. Criamos movimentos naturais e impactantes.',
                'gui-ui-desc-long': 'Interfaces intuitivas para Roblox com design moderno e funcional. Criamos UIs que melhoram a experiência do usuário.',
                
                // Interface Types
                'interface-types-title': 'Tipos de Interface',
                'game-ui-title': 'Game UI',
                'game-ui-desc': 'Interfaces de jogo e HUD',
                'ecommerce-ui-title': 'E-commerce UI',
                'ecommerce-ui-desc': 'Lojas e sistemas de compra',
                'settings-ui-title': 'Settings UI',
                'settings-ui-desc': 'Painéis de configuração',
                'dashboard-ui-title': 'Dashboard UI',
                'dashboard-ui-desc': 'Painéis de controle e dados',
                
                // Animation Software
                'animation-software-title': 'Software de Animação',
                'blender-title': 'Blender',
                'blender-desc': 'Animação 3D',
                'moon-animator-title': 'Moon Animator',
                'moon-animator-desc': 'Animação 3D',
                
                // Construction Types
                'construction-types-title': 'Tipos de Construção',
                'medieval-arch-title': 'Arquitetura Medieval',
                'medieval-arch-desc': 'Castelos, fortalezas e vilas medievais',
                'urban-env-title': 'Ambientes Urbanos',
                'urban-env-desc': 'Cidades modernas e futuristas',
                'natural-env-title': 'Ambientes Naturais',
                'natural-env-desc': 'Florestas, montanhas e paisagens',
                'industrial-struct-title': 'Estruturas Industriais',
                'industrial-struct-desc': 'Fábricas, laboratórios e instalações',
                
                // Modeling Software
                'modeling-software-title': 'Software de Modelagem',
                'blender-modeling-title': 'Blender',
                'blender-modeling-desc': 'Modelagem e texturização',
                'substance-title': 'Substance',
                'substance-desc': 'Texturização avançada',
                
                // Rigging Tools
                'rigging-tools-title': 'Ferramentas de Rigging',
                'blender-rigging-title': 'Blender',
                'blender-rigging-desc': 'Rigging e animação 3D',
                'auto-rig-pro-title': 'Auto-Rig Pro',
                'auto-rig-pro-desc': 'Automação de rigging',
                
                // Artistic Styles
                'artistic-style-title': 'Estilo Artístico',
                'digital-realism-title': 'Realismo Digital',
                'digital-realism-desc': 'Ilustrações com alta fidelidade visual',
                'fantasy-style-title': 'Estilo Fantasia',
                'fantasy-style-desc': 'Arte conceitual para mundos imaginários',
                'character-design-title': 'Character Design',
                'character-design-desc': 'Desenvolvimento de personagens únicos',
                'environment-art-title': 'Environment Art',
                'environment-art-desc': 'Criação de ambientes imersivos',
                
                // Technologies
                'technologies-title': 'Tecnologias Utilizadas',
                'luau-title': 'Luau/Lua',
                'luau-desc': 'Scripts otimizados para Roblox',
                'rojo-title': 'Rojo',
                'rojo-desc': 'Sync de código com VSCode',
                'knit-title': 'Knit',
                'knit-desc': 'Framework para estruturação',
                'git-title': 'Git',
                'git-desc': 'Controle de versão',
                
                // Page titles
                'page-script': 'Script - LOVE STUDIOS',
                'page-concept-art': 'Concept Art - LOVE STUDIOS',
                'page-illustration': 'Illustration - LOVE STUDIOS',
                'page-rig': 'Rig - LOVE STUDIOS',
                'page-3d-model': '3D Model - LOVE STUDIOS',
                'page-buildings': 'Buildings - LOVE STUDIOS',
                'page-animations': 'Animations - LOVE STUDIOS',
                'page-gui-ui': 'GUI/UI - LOVE STUDIOS',
                
                // Gallery filters
                'filter-all': 'Todos',
                'filter-script': 'Script',
                'filter-concept-art': 'Concept Art',
                'filter-illustration': 'Illustration',
                'filter-rig': 'Rig',
                'filter-3d-model': '3D Model',
                'filter-buildings': 'Buildings',
                'filter-animations': 'Animations',
                'filter-gui-ui': 'GUI/UI'
            },
            en: {
                // Navigation
                'nav-script': 'Script',
                'nav-concept-art': 'Concept Art',
                'nav-illustration': 'Illustration',
                'nav-rig': 'Rig',
                'nav-3d-model': '3D Model',
                'nav-buildings': 'Buildings',
                'nav-animations': 'Animations',
                'nav-gui-ui': 'GUI/UI',
                
                // Hero
                'hero-subtitle': 'Creating extraordinary experiences on Roblox',
                'hero-portfolio-btn': 'View Portfolio',
                
                // Statistics
                'stats-title': 'Our Experience',
                'stats-projects': 'Projects Developed',
                'stats-clients': 'Satisfied Clients',
                
                // Services
                'services-title': 'Our Services',
                'script-title': 'Script',
                'script-desc': 'Advanced systems for Roblox experiences',
                'concept-art-title': 'Concept Art',
                'concept-art-desc': 'Conceptual art for unique worlds',
                'illustration-title': 'Illustration',
                'illustration-desc': 'Detailed digital illustrations',
                'rig-title': 'Rig',
                'rig-desc': 'Professional character rigging',
                '3d-model-title': '3D Model',
                '3d-model-desc': 'Optimized 3D models for Roblox',
                'buildings-title': 'Buildings',
                'buildings-desc': 'Immersive architectures and environments',
                'animations-title': 'Animations',
                'animations-desc': 'Fluid and expressive animations',
                'gui-ui-title': 'GUI/UI',
                'gui-ui-desc': 'Intuitive interfaces for Roblox',
                
                // Contact
                'contact-title': 'Let\'s Create Together',
                'contact-subtitle': 'Transform your idea into reality with our Roblox development expertise',
                'contact-name': 'Name',
                'contact-email': 'Email',
                'contact-message': 'Project Description',
                'contact-send': 'Send Request',
                'contact-name-full': 'Your full name',
                'contact-email-placeholder': 'your@email.com',
                'contact-message-placeholder': 'Describe your project in detail: objectives, desired style, deadline, references, etc.',
                
                // About Section
                'about-title': 'About LOVE STUDIOS',
                'about-subtitle': 'More than a studio, we are partners in creating extraordinary experiences',
                'about-mission-title': 'Our Mission',
                'about-mission-text-1': 'Founded with a passion for innovation, LOVE STUDIOS specializes in Roblox development. We combine advanced programming, exceptional design, and engaging storytelling to create experiences that connect players and build lasting communities on the platform.',
                'about-mission-text-2': 'Our multidisciplinary team masters all facets of Roblox development, from complex scripts to impressive concept art, ensuring that every project is a technical and visual masterpiece.',
                'about-why-title': 'Why Choose Us?',
                'about-focus-title': 'Focus on Results',
                'about-focus-desc': 'Projects that exceed expectations and generate measurable results',
                'about-excellence-title': 'Proven Excellence',
                'about-excellence-desc': '8+ years of experience with 200+ projects delivered',
                'about-innovation-title': 'Constant Innovation',
                'about-innovation-desc': 'Always at the forefront of Roblox technologies and trends',
                'about-quality-title': 'Premium Quality',
                'about-quality-desc': 'Every pixel, every line of code is carefully thought out to deliver excellence',
                'about-partnership-title': 'True Partnership',
                'about-partnership-desc': 'We are not just suppliers, we are partners invested in your success',
                'about-trust-title': 'Total Trust',
                'about-trust-desc': 'Transparency, clear communication, and meeting deadlines in all projects',
                
                // Form Fields
                'form-project-type': 'Project Type',
                'form-project-type-placeholder': 'Select the type',
                'form-budget': 'Estimated Budget',
                'form-budget-placeholder': 'Budget range',
                'form-option-script': 'Script/Programming',
                'form-option-concept-art': 'Concept Art',
                'form-option-illustration': 'Illustration',
                'form-option-rig': 'Character Rigging',
                'form-option-3d-model': '3D Models',
                'form-option-buildings': 'Buildings/Scenarios',
                'form-option-animations': 'Animations',
                'form-option-gui-ui': 'GUI/UI Design',
                'form-option-complete': 'Complete Project',
                'form-budget-500-1000': '$100 - $200',
                'form-budget-1000-3000': '$200 - $600',
                'form-budget-3000-5000': '$600 - $1000',
                'form-budget-5000+': '$1000+',
                'form-budget-discuss': 'I prefer to discuss',
                
                // Service Descriptions
                'concept-art-desc-long': 'Original concept art created to bring fantastic worlds to life.',
                'illustration-desc-long': 'Detailed digital illustrations that tell unique visual stories. Each work is created with passion and attention to detail.',
                'rig-desc-long': 'Professional character rigging for fluid and expressive animations.',
                '3d-model-desc-long': '3D models optimized for Roblox with high visual quality. We create unique and detailed assets.',
                'buildings-desc-long': 'Immersive architectures and environments that create unique worlds. We develop detailed and atmospheric scenarios.',
                'animations-desc-long': 'Fluid and expressive animations that bring characters to life. We create natural and impactful movements.',
                'gui-ui-desc-long': 'Intuitive interfaces for Roblox with modern and functional design. We create UIs that improve the user experience.',
                
                // Interface Types
                'interface-types-title': 'Interface Types',
                'game-ui-title': 'Game UI',
                'game-ui-desc': 'Game interfaces and HUD',
                'ecommerce-ui-title': 'E-commerce UI',
                'ecommerce-ui-desc': 'Stores and shopping systems',
                'settings-ui-title': 'Settings UI',
                'settings-ui-desc': 'Configuration panels',
                'dashboard-ui-title': 'Dashboard UI',
                'dashboard-ui-desc': 'Control and data panels',
                
                // Animation Software
                'animation-software-title': 'Animation Software',
                'blender-title': 'Blender',
                'blender-desc': '3D Animation',
                'moon-animator-title': 'Moon Animator',
                'moon-animator-desc': '3D Animation',
                
                // Construction Types
                'construction-types-title': 'Construction Types',
                'medieval-arch-title': 'Medieval Architecture',
                'medieval-arch-desc': 'Castles, fortresses and medieval villages',
                'urban-env-title': 'Urban Environments',
                'urban-env-desc': 'Modern and futuristic cities',
                'natural-env-title': 'Natural Environments',
                'natural-env-desc': 'Forests, mountains and landscapes',
                'industrial-struct-title': 'Industrial Structures',
                'industrial-struct-desc': 'Factories, laboratories and installations',
                
                // Modeling Software
                'modeling-software-title': 'Modeling Software',
                'blender-modeling-title': 'Blender',
                'blender-modeling-desc': 'Modeling and texturing',
                'substance-title': 'Substance',
                'substance-desc': 'Advanced texturing',
                
                // Rigging Tools
                'rigging-tools-title': 'Rigging Tools',
                'blender-rigging-title': 'Blender',
                'blender-rigging-desc': 'Rigging and 3D animation',
                'auto-rig-pro-title': 'Auto-Rig Pro',
                'auto-rig-pro-desc': 'Rigging automation',
                
                // Artistic Styles
                'artistic-style-title': 'Artistic Style',
                'digital-realism-title': 'Digital Realism',
                'digital-realism-desc': 'Illustrations with high visual fidelity',
                'fantasy-style-title': 'Fantasy Style',
                'fantasy-style-desc': 'Conceptual art for imaginary worlds',
                'character-design-title': 'Character Design',
                'character-design-desc': 'Development of unique characters',
                'environment-art-title': 'Environment Art',
                'environment-art-desc': 'Creation of immersive environments',
                
                // Technologies
                'technologies-title': 'Technologies Used',
                'luau-title': 'Luau/Lua',
                'luau-desc': 'Optimized scripts for Roblox',
                'rojo-title': 'Rojo',
                'rojo-desc': 'Code sync with VSCode',
                'knit-title': 'Knit',
                'knit-desc': 'Framework for structuring',
                'git-title': 'Git',
                'git-desc': 'Version control',
                
                // Page titles
                'page-script': 'Script - LOVE STUDIOS',
                'page-concept-art': 'Concept Art - LOVE STUDIOS',
                'page-illustration': 'Illustration - LOVE STUDIOS',
                'page-rig': 'Rig - LOVE STUDIOS',
                'page-3d-model': '3D Model - LOVE STUDIOS',
                'page-buildings': 'Buildings - LOVE STUDIOS',
                'page-animations': 'Animations - LOVE STUDIOS',
                'page-gui-ui': 'GUI/UI - LOVE STUDIOS',
                
                // Gallery filters
                'filter-all': 'All',
                'filter-script': 'Script',
                'filter-concept-art': 'Concept Art',
                'filter-illustration': 'Illustration',
                'filter-rig': 'Rig',
                'filter-3d-model': '3D Model',
                'filter-buildings': 'Buildings',
                'filter-animations': 'Animations',
                'filter-gui-ui': 'GUI/UI'
            },
            es: {
                // Navigation
                'nav-script': 'Script',
                'nav-concept-art': 'Arte Conceptual',
                'nav-illustration': 'Ilustración',
                'nav-rig': 'Rig',
                'nav-3d-model': 'Modelo 3D',
                'nav-buildings': 'Edificios',
                'nav-animations': 'Animaciones',
                'nav-gui-ui': 'GUI/UI',
                
                // Hero
                'hero-subtitle': 'Creando experiencias extraordinarias en Roblox',
                'hero-portfolio-btn': 'Ver Portafolio',
                
                // Statistics
                'stats-title': 'Nuestra Experiencia',
                'stats-projects': 'Proyectos Desarrollados',
                'stats-clients': 'Clientes Satisfechos',
                
                // Services
                'services-title': 'Nuestros Servicios',
                'script-title': 'Script',
                'script-desc': 'Sistemas avanzados para experiencias Roblox',
                'concept-art-title': 'Arte Conceptual',
                'concept-art-desc': 'Arte conceptual para mundos únicos',
                'illustration-title': 'Ilustración',
                'illustration-desc': 'Ilustraciones digitales detalladas',
                'rig-title': 'Rig',
                'rig-desc': 'Rigging de personajes profesional',
                '3d-model-title': 'Modelo 3D',
                '3d-model-desc': 'Modelos 3D optimizados para Roblox',
                'buildings-title': 'Edificios',
                'buildings-desc': 'Arquitecturas y ambientes inmersivos',
                'animations-title': 'Animaciones',
                'animations-desc': 'Animaciones fluidas y expresivas',
                'gui-ui-title': 'GUI/UI',
                'gui-ui-desc': 'Interfaces intuitivas para Roblox',
                
                // Contact
                'contact-title': 'Creemos Juntos',
                'contact-subtitle': 'Transforma tu idea en realidad con nuestra experiencia en desarrollo Roblox',
                'contact-name': 'Nombre',
                'contact-email': 'Email',
                'contact-message': 'Descripción del Proyecto',
                'contact-send': 'Enviar Solicitud',
                'contact-name-full': 'Tu nombre completo',
                'contact-email-placeholder': 'tu@email.com',
                'contact-message-placeholder': 'Describe tu proyecto en detalle: objetivos, estilo deseado, plazo, referencias, etc.',
                
                // About Section
                'about-title': 'Sobre LOVE STUDIOS',
                'about-subtitle': 'Más que un estudio, somos socios en la creación de experiencias extraordinarias',
                'about-mission-title': 'Nuestra Misión',
                'about-mission-text-1': 'Fundado con la pasión por la innovación, LOVE STUDIOS se especializa en desarrollo para Roblox. Combinamos programación avanzada, diseño excepcional y narrativa envolvente para crear experiencias que conectan jugadores y construyen comunidades duraderas en la plataforma.',
                'about-mission-text-2': 'Nuestro equipo multidisciplinario domina todas las facetas del desarrollo Roblox, desde scripts complejos hasta arte conceptual impresionante, garantizando que cada proyecto sea una obra maestra técnica y visual.',
                'about-why-title': '¿Por qué Elegirnos?',
                'about-focus-title': 'Enfoque en Resultados',
                'about-focus-desc': 'Proyectos que superan expectativas y generan resultados medibles',
                'about-excellence-title': 'Excelencia Comprobada',
                'about-excellence-desc': '8+ años de experiencia con 200+ proyectos entregados',
                'about-innovation-title': 'Innovación Constante',
                'about-innovation-desc': 'Siempre a la vanguardia de las tecnologías y tendencias de Roblox',
                'about-quality-title': 'Calidad Premium',
                'about-quality-desc': 'Cada píxel, cada línea de código es cuidadosamente pensada para entregar excelencia',
                'about-partnership-title': 'Verdadera Asociación',
                'about-partnership-desc': 'No somos solo proveedores, somos socios invertidos en tu éxito',
                'about-trust-title': 'Confianza Total',
                'about-trust-desc': 'Transparencia, comunicación clara y cumplimiento de plazos en todos los proyectos',
                
                // Form Fields
                'form-project-type': 'Tipo de Proyecto',
                'form-project-type-placeholder': 'Selecciona el tipo',
                'form-budget': 'Presupuesto Estimado',
                'form-budget-placeholder': 'Rango de presupuesto',
                'form-option-script': 'Script/Programación',
                'form-option-concept-art': 'Arte Conceptual',
                'form-option-illustration': 'Ilustración',
                'form-option-rig': 'Rigging de Personajes',
                'form-option-3d-model': 'Modelos 3D',
                'form-option-buildings': 'Edificios/Escenarios',
                'form-option-animations': 'Animaciones',
                'form-option-gui-ui': 'Diseño GUI/UI',
                'form-option-complete': 'Proyecto Completo',
                'form-budget-500-1000': '$100 - $200',
                'form-budget-1000-3000': '$200 - $600',
                'form-budget-3000-5000': '$600 - $1000',
                'form-budget-5000+': '$1000+',
                'form-budget-discuss': 'Prefiero discutir',
                
                // Service Descriptions
                'concept-art-desc-long': 'Arte conceptual original creada para dar vida a mundos fantásticos.',
                'illustration-desc-long': 'Ilustraciones digitales detalladas que cuentan historias visuales únicas. Cada obra es creada con pasión y atención al detalle.',
                'rig-desc-long': 'Rigging de personajes profesional para animaciones fluidas y expresivas.',
                '3d-model-desc-long': 'Modelos 3D optimizados para Roblox con alta calidad visual. Creamos assets únicos y detallados.',
                'buildings-desc-long': 'Arquitecturas y entornos inmersivos que crean mundos únicos. Desarrollamos escenarios detallados y atmosféricos.',
                'animations-desc-long': 'Animaciones fluidas y expresivas que dan vida a los personajes. Creamos movimientos naturales e impactantes.',
                'gui-ui-desc-long': 'Interfaces intuitivas para Roblox con diseño moderno y funcional. Creamos UIs que mejoran la experiencia del usuario.',
                
                // Interface Types
                'interface-types-title': 'Tipos de Interfaz',
                'game-ui-title': 'Game UI',
                'game-ui-desc': 'Interfaces de juego y HUD',
                'ecommerce-ui-title': 'E-commerce UI',
                'ecommerce-ui-desc': 'Tiendas y sistemas de compra',
                'settings-ui-title': 'Settings UI',
                'settings-ui-desc': 'Paneles de configuración',
                'dashboard-ui-title': 'Dashboard UI',
                'dashboard-ui-desc': 'Paneles de control y datos',
                
                // Animation Software
                'animation-software-title': 'Software de Animación',
                'blender-title': 'Blender',
                'blender-desc': 'Animación 3D',
                'moon-animator-title': 'Moon Animator',
                'moon-animator-desc': 'Animación 3D',
                
                // Construction Types
                'construction-types-title': 'Tipos de Construcción',
                'medieval-arch-title': 'Arquitectura Medieval',
                'medieval-arch-desc': 'Castillos, fortalezas y villas medievales',
                'urban-env-title': 'Entornos Urbanos',
                'urban-env-desc': 'Ciudades modernas y futuristas',
                'natural-env-title': 'Entornos Naturales',
                'natural-env-desc': 'Bosques, montañas y paisajes',
                'industrial-struct-title': 'Estructuras Industriales',
                'industrial-struct-desc': 'Fábricas, laboratorios e instalaciones',
                
                // Modeling Software
                'modeling-software-title': 'Software de Modelado',
                'blender-modeling-title': 'Blender',
                'blender-modeling-desc': 'Modelado y texturizado',
                'substance-title': 'Substance',
                'substance-desc': 'Texturizado avanzado',
                
                // Rigging Tools
                'rigging-tools-title': 'Herramientas de Rigging',
                'blender-rigging-title': 'Blender',
                'blender-rigging-desc': 'Rigging y animación 3D',
                'auto-rig-pro-title': 'Auto-Rig Pro',
                'auto-rig-pro-desc': 'Automatización de rigging',
                
                // Artistic Styles
                'artistic-style-title': 'Estilo Artístico',
                'digital-realism-title': 'Realismo Digital',
                'digital-realism-desc': 'Ilustraciones con alta fidelidad visual',
                'fantasy-style-title': 'Estilo Fantasía',
                'fantasy-style-desc': 'Arte conceptual para mundos imaginarios',
                'character-design-title': 'Character Design',
                'character-design-desc': 'Desarrollo de personajes únicos',
                'environment-art-title': 'Environment Art',
                'environment-art-desc': 'Creación de entornos inmersivos',
                
                // Technologies
                'technologies-title': 'Tecnologías Utilizadas',
                'luau-title': 'Luau/Lua',
                'luau-desc': 'Scripts optimizados para Roblox',
                'rojo-title': 'Rojo',
                'rojo-desc': 'Sync de código con VSCode',
                'knit-title': 'Knit',
                'knit-desc': 'Framework para estructuración',
                'git-title': 'Git',
                'git-desc': 'Control de versión',
                
                // Page titles
                'page-script': 'Script - LOVE STUDIOS',
                'page-concept-art': 'Arte Conceptual - LOVE STUDIOS',
                'page-illustration': 'Ilustración - LOVE STUDIOS',
                'page-rig': 'Rig - LOVE STUDIOS',
                'page-3d-model': 'Modelo 3D - LOVE STUDIOS',
                'page-buildings': 'Edificios - LOVE STUDIOS',
                'page-animations': 'Animaciones - LOVE STUDIOS',
                'page-gui-ui': 'GUI/UI - LOVE STUDIOS',
                
                // Gallery filters
                'filter-all': 'Todos',
                'filter-script': 'Script',
                'filter-concept-art': 'Arte Conceptual',
                'filter-illustration': 'Ilustración',
                'filter-rig': 'Rig',
                'filter-3d-model': 'Modelo 3D',
                'filter-buildings': 'Edificios',
                'filter-animations': 'Animaciones',
                'filter-gui-ui': 'GUI/UI'
            },
            fr: {
                // Navigation
                'nav-script': 'Script',
                'nav-concept-art': 'Art Conceptuel',
                'nav-illustration': 'Illustration',
                'nav-rig': 'Rig',
                'nav-3d-model': 'Modèle 3D',
                'nav-buildings': 'Bâtiments',
                'nav-animations': 'Animations',
                'nav-gui-ui': 'GUI/UI',
                
                // Hero
                'hero-subtitle': 'Créer des expériences extraordinaires sur Roblox',
                'hero-portfolio-btn': 'Voir le Portfolio',
                
                // Statistics
                'stats-title': 'Notre Expérience',
                'stats-projects': 'Projets Développés',
                'stats-clients': 'Clients Satisfaits',
                
                // Services
                'services-title': 'Nos Services',
                'script-title': 'Script',
                'script-desc': 'Systèmes avancés pour les expériences Roblox',
                'concept-art-title': 'Art Conceptuel',
                'concept-art-desc': 'Art conceptuel pour des mondes uniques',
                'illustration-title': 'Illustration',
                'illustration-desc': 'Illustrations numériques détaillées',
                'rig-title': 'Rig',
                'rig-desc': 'Rigging de personnages professionnel',
                '3d-model-title': 'Modèle 3D',
                '3d-model-desc': 'Modèles 3D optimisés pour Roblox',
                'buildings-title': 'Bâtiments',
                'buildings-desc': 'Architectures et environnements immersifs',
                'animations-title': 'Animations',
                'animations-desc': 'Animations fluides et expressives',
                'gui-ui-title': 'GUI/UI',
                'gui-ui-desc': 'Interfaces intuitives pour Roblox',
                
                // Contact
                'contact-title': 'Créons Ensemble',
                'contact-subtitle': 'Transformez votre idée en réalité avec notre expertise en développement Roblox',
                'contact-name': 'Nom',
                'contact-email': 'Email',
                'contact-message': 'Description du Projet',
                'contact-send': 'Envoyer la Demande',
                'contact-name-full': 'Votre nom complet',
                'contact-email-placeholder': 'votre@email.com',
                'contact-message-placeholder': 'Décrivez votre projet en détail: objectifs, style souhaité, délai, références, etc.',
                
                // About Section
                'about-title': 'À Propos de LOVE STUDIOS',
                'about-subtitle': 'Plus qu\'un studio, nous sommes partenaires dans la création d\'expériences extraordinaires',
                'about-mission-title': 'Notre Mission',
                'about-mission-text-1': 'Fondé avec la passion pour l\'innovation, LOVE STUDIOS se spécialise dans le développement pour Roblox. Nous combinons programmation avancée, design exceptionnel et storytelling engageant pour créer des expériences qui connectent les joueurs et construisent des communautés durables sur la plateforme.',
                'about-mission-text-2': 'Notre équipe multidisciplinaire maîtrise tous les aspects du développement Roblox, des scripts complexes à l\'art conceptuel impressionnant, garantissant que chaque projet soit un chef-d\'œuvre technique et visuel.',
                'about-why-title': 'Pourquoi Nous Choisir?',
                'about-focus-title': 'Focus sur les Résultats',
                'about-focus-desc': 'Des projets qui dépassent les attentes et génèrent des résultats mesurables',
                'about-excellence-title': 'Excellence Prouvée',
                'about-excellence-desc': '8+ années d\'expérience avec 200+ projets livrés',
                'about-innovation-title': 'Innovation Constante',
                'about-innovation-desc': 'Toujours à l\'avant-garde des technologies et tendances Roblox',
                'about-quality-title': 'Qualité Premium',
                'about-quality-desc': 'Chaque pixel, chaque ligne de code est soigneusement pensée pour livrer l\'excellence',
                'about-partnership-title': 'Véritable Partenariat',
                'about-partnership-desc': 'Nous ne sommes pas seulement des fournisseurs, nous sommes des partenaires investis dans votre succès',
                'about-trust-title': 'Confiance Totale',
                'about-trust-desc': 'Transparence, communication claire et respect des délais dans tous les projets',
                
                // Form Fields
                'form-project-type': 'Type de Projet',
                'form-project-type-placeholder': 'Sélectionnez le type',
                'form-budget': 'Budget Estimé',
                'form-budget-placeholder': 'Fourchette de budget',
                'form-option-script': 'Script/Programmation',
                'form-option-concept-art': 'Art Conceptuel',
                'form-option-illustration': 'Illustration',
                'form-option-rig': 'Rigging de Personnages',
                'form-option-3d-model': 'Modèles 3D',
                'form-option-buildings': 'Bâtiments/Scénarios',
                'form-option-animations': 'Animations',
                'form-option-gui-ui': 'Conception GUI/UI',
                'form-option-complete': 'Projet Complet',
                'form-budget-500-1000': '€100 - €200',
                'form-budget-1000-3000': '€200 - €600',
                'form-budget-3000-5000': '€600 - €1000',
                'form-budget-5000+': '€1000+',
                'form-budget-discuss': 'Je préfère discuter',
                
                // Service Descriptions
                'concept-art-desc-long': 'Art conceptuel original créé pour donner vie à des mondes fantastiques.',
                'illustration-desc-long': 'Illustrations numériques détaillées qui racontent des histoires visuelles uniques. Chaque œuvre est créée avec passion et attention aux détails.',
                'rig-desc-long': 'Rigging de personnages professionnel pour des animations fluides et expressives.',
                '3d-model-desc-long': 'Modèles 3D optimisés pour Roblox avec une haute qualité visuelle. Nous créons des assets uniques et détaillés.',
                'buildings-desc-long': 'Architectures et environnements immersifs qui créent des mondes uniques. Nous développons des scénarios détaillés et atmosphériques.',
                'animations-desc-long': 'Animations fluides et expressives qui donnent vie aux personnages. Nous créons des mouvements naturels et impactants.',
                'gui-ui-desc-long': 'Interfaces intuitives pour Roblox avec un design moderne et fonctionnel. Nous créons des UIs qui améliorent l\'expérience utilisateur.',
                
                // Interface Types
                'interface-types-title': 'Types d\'Interface',
                'game-ui-title': 'Game UI',
                'game-ui-desc': 'Interfaces de jeu et HUD',
                'ecommerce-ui-title': 'E-commerce UI',
                'ecommerce-ui-desc': 'Boutiques et systèmes d\'achat',
                'settings-ui-title': 'Settings UI',
                'settings-ui-desc': 'Panneaux de configuration',
                'dashboard-ui-title': 'Dashboard UI',
                'dashboard-ui-desc': 'Panneaux de contrôle et données',
                
                // Animation Software
                'animation-software-title': 'Software d\'Animation',
                'blender-title': 'Blender',
                'blender-desc': 'Animation 3D',
                'moon-animator-title': 'Moon Animator',
                'moon-animator-desc': 'Animation 3D',
                
                // Construction Types
                'construction-types-title': 'Types de Construction',
                'medieval-arch-title': 'Architecture Médiévale',
                'medieval-arch-desc': 'Châteaux, forteresses et villages médiévaux',
                'urban-env-title': 'Environnements Urbains',
                'urban-env-desc': 'Villes modernes et futuristes',
                'natural-env-title': 'Environnements Naturels',
                'natural-env-desc': 'Forêts, montagnes et paysages',
                'industrial-struct-title': 'Structures Industrielles',
                'industrial-struct-desc': 'Usines, laboratoires et installations',
                
                // Modeling Software
                'modeling-software-title': 'Software de Modélisation',
                'blender-modeling-title': 'Blender',
                'blender-modeling-desc': 'Modélisation et texturing',
                'substance-title': 'Substance',
                'substance-desc': 'Texturing avancé',
                
                // Rigging Tools
                'rigging-tools-title': 'Outils de Rigging',
                'blender-rigging-title': 'Blender',
                'blender-rigging-desc': 'Rigging et animation 3D',
                'auto-rig-pro-title': 'Auto-Rig Pro',
                'auto-rig-pro-desc': 'Automatisation de rigging',
                
                // Artistic Styles
                'artistic-style-title': 'Style Artistique',
                'digital-realism-title': 'Réalisme Numérique',
                'digital-realism-desc': 'Illustrations avec haute fidélité visuelle',
                'fantasy-style-title': 'Style Fantaisie',
                'fantasy-style-desc': 'Art conceptuel pour des mondes imaginaires',
                'character-design-title': 'Character Design',
                'character-design-desc': 'Développement de personnages uniques',
                'environment-art-title': 'Environment Art',
                'environment-art-desc': 'Création d\'environnements immersifs',
                
                // Technologies
                'technologies-title': 'Technologies Utilisées',
                'luau-title': 'Luau/Lua',
                'luau-desc': 'Scripts optimisés pour Roblox',
                'rojo-title': 'Rojo',
                'rojo-desc': 'Sync de code avec VSCode',
                'knit-title': 'Knit',
                'knit-desc': 'Framework pour structuration',
                'git-title': 'Git',
                'git-desc': 'Contrôle de version',
                
                // Page titles
                'page-script': 'Script - LOVE STUDIOS',
                'page-concept-art': 'Art Conceptuel - LOVE STUDIOS',
                'page-illustration': 'Illustration - LOVE STUDIOS',
                'page-rig': 'Rig - LOVE STUDIOS',
                'page-3d-model': 'Modèle 3D - LOVE STUDIOS',
                'page-buildings': 'Bâtiments - LOVE STUDIOS',
                'page-animations': 'Animations - LOVE STUDIOS',
                'page-gui-ui': 'GUI/UI - LOVE STUDIOS',
                
                // Gallery filters
                'filter-all': 'Tous',
                'filter-script': 'Script',
                'filter-concept-art': 'Art Conceptuel',
                'filter-illustration': 'Illustration',
                'filter-rig': 'Rig',
                'filter-3d-model': 'Modèle 3D',
                'filter-buildings': 'Bâtiments',
                'filter-animations': 'Animations',
                'filter-gui-ui': 'GUI/UI'
            }
        };

        this.currentLanguage = localStorage.getItem('language') || 'en';
        
        this.setupLanguageDropdown();
        this.translatePage(this.currentLanguage);
    }

    setupLanguageDropdown() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        if (!languageBtn || !languageDropdown) return;
        
        // Toggle dropdown
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
            languageBtn.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            languageDropdown.classList.remove('active');
            languageBtn.classList.remove('active');
        });
        
        // Language selection
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                this.changeLanguage(lang);
                
                // Update active state
                languageOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Update button flag
                const flag = option.querySelector('.language-flag').textContent;
                document.querySelector('.language-btn .language-flag').textContent = flag;
                
                // Close dropdown
                languageDropdown.classList.remove('active');
                languageBtn.classList.remove('active');
            });
        });
        
        // Set initial active language
        const activeOption = document.querySelector(`[data-lang="${this.currentLanguage}"]`);
        if (activeOption) {
            activeOption.classList.add('active');
            const flag = activeOption.querySelector('.language-flag').textContent;
            document.querySelector('.language-btn .language-flag').textContent = flag;
        }
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.translatePage(lang);
        
        // Forçar atualização após um pequeno delay
        setTimeout(() => {
            this.translatePage(lang);
        }, 100);
        
        // Forçar atualização dos placeholders após um delay maior
        setTimeout(() => {
            this.updatePlaceholders(lang);
        }, 200);
    }

    translatePage(lang) {
        const translations = this.translations[lang];
        if (!translations) return;
        
        // Update page title
        const currentPage = this.currentPage || 'home';
        const pageTitleKey = `page-${currentPage}`;
        if (translations[pageTitleKey]) {
            document.title = translations[pageTitleKey];
        }
        
        // Update navigation
        this.updateElementText('.nav-link[href="#script"]', translations['nav-script']);
        this.updateElementText('.nav-link[href="#concept-art"]', translations['nav-concept-art']);
        this.updateElementText('.nav-link[href="#illustration"]', translations['nav-illustration']);
        this.updateElementText('.nav-link[href="#rig"]', translations['nav-rig']);
        this.updateElementText('.nav-link[href="#3d-model"]', translations['nav-3d-model']);
        this.updateElementText('.nav-link[href="#buildings"]', translations['nav-buildings']);
        this.updateElementText('.nav-link[href="#animations"]', translations['nav-animations']);
        this.updateElementText('.nav-link[href="#gui-ui"]', translations['nav-gui-ui']);
        
        // Update hero section
        this.updateElementText('.hero-subtitle', translations['hero-subtitle']);
        this.updateElementText('a[href="#services"]', translations['hero-portfolio-btn']);
        
        // Update statistics
        this.updateElementText('.stats-header h2', translations['stats-title']);
        this.updateElementText('.stat-card:nth-child(1) p', translations['stats-projects']);
        this.updateElementText('.stat-card:nth-child(2) p', translations['stats-clients']);
        
        // Update services
        this.updateElementText('.categories-header h2', translations['services-title']);
        
        // Update service cards
        this.updateServiceCards(translations);
        
        // Update contact form
        this.updateElementText('.contact-header h2', translations['contact-title']);
        this.updateElementText('.contact-header p', translations['contact-subtitle']);
        
        // Atualizar placeholders diretamente
        const nameInput = document.querySelector('input[placeholder="Seu nome completo"]');
        const emailInput = document.querySelector('input[placeholder="seu@email.com"]');
        const messageTextarea = document.querySelector('textarea[placeholder*="Descreva seu projeto"]');
        
        if (nameInput && translations['contact-name-full']) {
            nameInput.placeholder = translations['contact-name-full'];
        }
        if (emailInput && translations['contact-email-placeholder']) {
            emailInput.placeholder = translations['contact-email-placeholder'];
        }
        if (messageTextarea && translations['contact-message-placeholder']) {
            messageTextarea.placeholder = translations['contact-message-placeholder'];
        }
        
        this.updateElementText('.contact-form .btn-primary', translations['contact-send']);
        
        // Update form labels
        this.updateElementText('label[for="name"]', translations['contact-name']);
        this.updateElementText('label[for="email"]', translations['contact-email']);
        this.updateElementText('label[for="description"]', translations['contact-message']);
        
        // Update About Section
        this.updateElementText('.about-header h2', translations['about-title']);
        this.updateElementText('.about-header p', translations['about-subtitle']);
        this.updateElementText('.about-text h3', translations['about-mission-title']);
        this.updateElementText('.about-text p:nth-of-type(1)', translations['about-mission-text-1']);
        this.updateElementText('.about-text p:nth-of-type(2)', translations['about-mission-text-2']);
        this.updateElementText('.about-features h3', translations['about-why-title']);
        
        // Update feature items
        this.updateElementText('.feature-item:nth-child(1) h4', translations['about-focus-title']);
        this.updateElementText('.feature-item:nth-child(1) p', translations['about-focus-desc']);
        this.updateElementText('.feature-item:nth-child(2) h4', translations['about-excellence-title']);
        this.updateElementText('.feature-item:nth-child(2) p', translations['about-excellence-desc']);
        this.updateElementText('.feature-item:nth-child(3) h4', translations['about-innovation-title']);
        this.updateElementText('.feature-item:nth-child(3) p', translations['about-innovation-desc']);
        
        // Update value cards
        this.updateElementText('.value-card:nth-child(1) h3', translations['about-quality-title']);
        this.updateElementText('.value-card:nth-child(1) p', translations['about-quality-desc']);
        this.updateElementText('.value-card:nth-child(2) h3', translations['about-partnership-title']);
        this.updateElementText('.value-card:nth-child(2) p', translations['about-partnership-desc']);
        this.updateElementText('.value-card:nth-child(3) h3', translations['about-trust-title']);
        this.updateElementText('.value-card:nth-child(3) p', translations['about-trust-desc']);
        
        // Update form fields
        this.updateElementText('label[for="project"]', translations['form-project-type']);
        this.updateElementText('label[for="budget"]', translations['form-budget']);
        this.updateElementText('select[id="project"] option[value=""]', translations['form-project-type-placeholder']);
        this.updateElementText('select[id="budget"] option[value=""]', translations['form-budget-placeholder']);
        
        // Update form options
        this.updateFormOptions(translations);
        
        // Update gallery filters
        this.updateGalleryFilters(translations);
        
        // Update additional sections
        this.updateAdditionalSections(translations);
    }

    updateElementText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }

    updateServiceCards(translations) {
        // Atualizar descrições dos cards de serviços
        const scriptCard = document.querySelector('a[href="#script"] p');
        const conceptArtCard = document.querySelector('a[href="#concept-art"] p');
        const illustrationCard = document.querySelector('a[href="#illustration"] p');
        const rigCard = document.querySelector('a[href="#rig"] p');
        const model3dCard = document.querySelector('a[href="#3d-model"] p');
        const buildingsCard = document.querySelector('a[href="#buildings"] p');
        const animationsCard = document.querySelector('a[href="#animations"] p');
        const guiCard = document.querySelector('a[href="#gui-ui"] p');
        
        if (scriptCard && translations['script-desc']) {
            scriptCard.textContent = translations['script-desc'];
        }
        if (conceptArtCard && translations['concept-art-desc']) {
            conceptArtCard.textContent = translations['concept-art-desc'];
        }
        if (illustrationCard && translations['illustration-desc']) {
            illustrationCard.textContent = translations['illustration-desc'];
        }
        if (rigCard && translations['rig-desc']) {
            rigCard.textContent = translations['rig-desc'];
        }
        if (model3dCard && translations['3d-model-desc']) {
            model3dCard.textContent = translations['3d-model-desc'];
        }
        if (buildingsCard && translations['buildings-desc']) {
            buildingsCard.textContent = translations['buildings-desc'];
        }
        if (animationsCard && translations['animations-desc']) {
            animationsCard.textContent = translations['animations-desc'];
        }
        if (guiCard && translations['gui-ui-desc']) {
            guiCard.textContent = translations['gui-ui-desc'];
        }
    }

    updatePlaceholders(lang) {
        const translations = this.translations[lang];
        if (!translations) return;
        
        // Atualizar placeholders do formulário
        const nameInput = document.querySelector('input[placeholder*="nome"]');
        const emailInput = document.querySelector('input[placeholder*="email"]');
        const messageTextarea = document.querySelector('textarea[placeholder*="projeto"]');
        
        if (nameInput && translations['contact-name-full']) {
            nameInput.placeholder = translations['contact-name-full'];
        }
        if (emailInput && translations['contact-email-placeholder']) {
            emailInput.placeholder = translations['contact-email-placeholder'];
        }
        if (messageTextarea && translations['contact-message-placeholder']) {
            messageTextarea.placeholder = translations['contact-message-placeholder'];
        }
    }

    updateFormOptions(translations) {
        // Update project type options
        const projectSelect = document.getElementById('project');
        if (projectSelect) {
            const options = projectSelect.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                if (value && translations[`form-option-${value}`]) {
                    option.textContent = translations[`form-option-${value}`];
                }
            });
        }
        
        // Update budget options
        const budgetSelect = document.getElementById('budget');
        if (budgetSelect) {
            const options = budgetSelect.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                if (value && translations[`form-budget-${value}`]) {
                    option.textContent = translations[`form-budget-${value}`];
                }
            });
        }
    }

    updateAdditionalSections(translations) {
        // Update service descriptions (long versions)
        this.updateElementText('[data-service="concept-art"] .service-description', translations['concept-art-desc-long']);
        this.updateElementText('[data-service="illustration"] .service-description', translations['illustration-desc-long']);
        this.updateElementText('[data-service="rig"] .service-description', translations['rig-desc-long']);
        this.updateElementText('[data-service="3d-model"] .service-description', translations['3d-model-desc-long']);
        this.updateElementText('[data-service="buildings"] .service-description', translations['buildings-desc-long']);
        this.updateElementText('[data-service="animations"] .service-description', translations['animations-desc-long']);
        this.updateElementText('[data-service="gui-ui"] .service-description', translations['gui-ui-desc-long']);
        
        // Update section titles
        this.updateElementText('.interface-types h2', translations['interface-types-title']);
        this.updateElementText('.animation-software h2', translations['animation-software-title']);
        this.updateElementText('.construction-types h2', translations['construction-types-title']);
        this.updateElementText('.modeling-software h2', translations['modeling-software-title']);
        this.updateElementText('.rigging-tools h2', translations['rigging-tools-title']);
        this.updateElementText('.artistic-style h2', translations['artistic-style-title']);
        this.updateElementText('.technologies h2', translations['technologies-title']);
        
        // Update interface types
        this.updateElementText('.interface-types .tech-item:nth-child(1) h3', translations['game-ui-title']);
        this.updateElementText('.interface-types .tech-item:nth-child(1) p', translations['game-ui-desc']);
        this.updateElementText('.interface-types .tech-item:nth-child(2) h3', translations['ecommerce-ui-title']);
        this.updateElementText('.interface-types .tech-item:nth-child(2) p', translations['ecommerce-ui-desc']);
        this.updateElementText('.interface-types .tech-item:nth-child(3) h3', translations['settings-ui-title']);
        this.updateElementText('.interface-types .tech-item:nth-child(3) p', translations['settings-ui-desc']);
        this.updateElementText('.interface-types .tech-item:nth-child(4) h3', translations['dashboard-ui-title']);
        this.updateElementText('.interface-types .tech-item:nth-child(4) p', translations['dashboard-ui-desc']);
        
        // Update animation software
        this.updateElementText('.animation-software .tech-item:nth-child(1) h3', translations['blender-title']);
        this.updateElementText('.animation-software .tech-item:nth-child(1) p', translations['blender-desc']);
        this.updateElementText('.animation-software .tech-item:nth-child(2) h3', translations['moon-animator-title']);
        this.updateElementText('.animation-software .tech-item:nth-child(2) p', translations['moon-animator-desc']);
        
        // Update construction types
        this.updateElementText('.construction-types .tech-item:nth-child(1) h3', translations['medieval-arch-title']);
        this.updateElementText('.construction-types .tech-item:nth-child(1) p', translations['medieval-arch-desc']);
        this.updateElementText('.construction-types .tech-item:nth-child(2) h3', translations['urban-env-title']);
        this.updateElementText('.construction-types .tech-item:nth-child(2) p', translations['urban-env-desc']);
        this.updateElementText('.construction-types .tech-item:nth-child(3) h3', translations['natural-env-title']);
        this.updateElementText('.construction-types .tech-item:nth-child(3) p', translations['natural-env-desc']);
        this.updateElementText('.construction-types .tech-item:nth-child(4) h3', translations['industrial-struct-title']);
        this.updateElementText('.construction-types .tech-item:nth-child(4) p', translations['industrial-struct-desc']);
        
        // Update modeling software
        this.updateElementText('.modeling-software .tech-item:nth-child(1) h3', translations['blender-modeling-title']);
        this.updateElementText('.modeling-software .tech-item:nth-child(1) p', translations['blender-modeling-desc']);
        this.updateElementText('.modeling-software .tech-item:nth-child(2) h3', translations['substance-title']);
        this.updateElementText('.modeling-software .tech-item:nth-child(2) p', translations['substance-desc']);
        
        // Update rigging tools
        this.updateElementText('.rigging-tools .tech-item:nth-child(1) h3', translations['blender-rigging-title']);
        this.updateElementText('.rigging-tools .tech-item:nth-child(1) p', translations['blender-rigging-desc']);
        this.updateElementText('.rigging-tools .tech-item:nth-child(2) h3', translations['auto-rig-pro-title']);
        this.updateElementText('.rigging-tools .tech-item:nth-child(2) p', translations['auto-rig-pro-desc']);
        
        // Update artistic styles
        this.updateElementText('.artistic-style .tech-item:nth-child(1) h3', translations['digital-realism-title']);
        this.updateElementText('.artistic-style .tech-item:nth-child(1) p', translations['digital-realism-desc']);
        this.updateElementText('.artistic-style .tech-item:nth-child(2) h3', translations['fantasy-style-title']);
        this.updateElementText('.artistic-style .tech-item:nth-child(2) p', translations['fantasy-style-desc']);
        this.updateElementText('.artistic-style .tech-item:nth-child(3) h3', translations['character-design-title']);
        this.updateElementText('.artistic-style .tech-item:nth-child(3) p', translations['character-design-desc']);
        this.updateElementText('.artistic-style .tech-item:nth-child(4) h3', translations['environment-art-title']);
        this.updateElementText('.artistic-style .tech-item:nth-child(4) p', translations['environment-art-desc']);
        
        // Update technologies
        this.updateElementText('.technologies .tech-item:nth-child(1) h3', translations['luau-title']);
        this.updateElementText('.technologies .tech-item:nth-child(1) p', translations['luau-desc']);
        this.updateElementText('.technologies .tech-item:nth-child(2) h3', translations['rojo-title']);
        this.updateElementText('.technologies .tech-item:nth-child(2) p', translations['rojo-desc']);
        this.updateElementText('.technologies .tech-item:nth-child(3) h3', translations['knit-title']);
        this.updateElementText('.technologies .tech-item:nth-child(3) p', translations['knit-desc']);
        this.updateElementText('.technologies .tech-item:nth-child(4) h3', translations['git-title']);
        this.updateElementText('.technologies .tech-item:nth-child(4) p', translations['git-desc']);
    }

    updateGalleryFilters(translations) {
        const filters = document.querySelectorAll('.gallery-filter button');
        filters.forEach(filter => {
            const filterType = filter.getAttribute('data-filter');
            if (filterType && translations[`filter-${filterType}`]) {
                filter.textContent = translations[`filter-${filterType}`];
            }
        });
    }

    setupContactForm() {
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = form.querySelector('.btn-primary');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviado! ✓';
                submitBtn.style.background = '#51cf66';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    form.reset();
                }, 3000);
            });
        }
    }

    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .process-card, .gallery-grid img, .gallery-grid video').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    setupScrollOptimization() {
        const debouncedScroll = this.debounce(() => {
            requestAnimationFrame(() => {
                // Operações de scroll aqui
            });
        }, 16);

        window.addEventListener('scroll', debouncedScroll, { passive: true });
        window.addEventListener('resize', this.debounce(() => {
            // Otimizar resize
        }, 250), { passive: true });

        this.setupSmoothScroll();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement && targetId !== 'home') {
                    e.preventDefault();
                    this.smoothScrollTo(targetElement);
                }
            });
        });
    }

    smoothScrollTo(element) {
        const targetPosition = element.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;
        const self = this;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = self.easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
    }

    easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    setupLazyLoading() {
        // Carregar imagens imediatamente para debug
        document.querySelectorAll('img[data-src]').forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
            }
        });
    }

    setupImageModal() {
        this.createModal();
        this.setupModalEvents();
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="image-modal-content">
                <button class="modal-close">&times;</button>
                <img src="" alt="Modal Image" style="display: block;">
                <video controls style="display: none;">
                    <source src="" type="video/mp4">
                    Seu navegador não suporta vídeos.
                </video>
                <button class="modal-nav modal-prev">&lt;</button>
                <button class="modal-nav modal-next">&gt;</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    setupModalEvents() {
        const modal = document.querySelector('.image-modal');
        if (!modal) return;
        
        const closeBtn = modal.querySelector('.modal-close');
        const prevBtn = modal.querySelector('.modal-prev');
        const nextBtn = modal.querySelector('.modal-next');
        const modalImg = modal.querySelector('img');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.navigateModal(-1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.navigateModal(1);
            });
        }

        document.addEventListener('keydown', (e) => {
            if (modal && modal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    modal.classList.remove('active');
                } else if (e.key === 'ArrowLeft') {
                    this.navigateModal(-1);
                } else if (e.key === 'ArrowRight') {
                    this.navigateModal(1);
                }
            }
        });
    }

    openModal(element) {
        const modal = document.querySelector('.image-modal');
        if (!modal) return;
        
        const modalImg = modal.querySelector('img');
        const modalVideo = modal.querySelector('video');
        if (!modalImg || !modalVideo) return;
        
        // Verificar se é vídeo ou imagem
        const isVideo = element.tagName.toLowerCase() === 'video';
        
        if (isVideo) {
            // Mostrar vídeo no modal
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = element.src || element.dataset.src;
            modalVideo.controls = true;
            modalVideo.autoplay = true;
            modalVideo.loop = true;
        } else {
            // Mostrar imagem no modal
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImg.src = element.src || element.dataset.src;
        }
        
        modal.classList.add('active');
        
        // Armazenar referência para navegação
        this.currentModalImage = element;
        this.currentModalImages = Array.from(document.querySelectorAll('.gallery-grid img, .gallery-grid video'));
        this.currentModalIndex = this.currentModalImages.indexOf(element);
    }

    navigateModal(direction) {
        if (!this.currentModalImages) return;
        
        this.currentModalIndex += direction;
        
        if (this.currentModalIndex < 0) {
            this.currentModalIndex = this.currentModalImages.length - 1;
        } else if (this.currentModalIndex >= this.currentModalImages.length) {
            this.currentModalIndex = 0;
        }
        
        const newElement = this.currentModalImages[this.currentModalIndex];
        const modalImg = document.querySelector('.image-modal img');
        const modalVideo = document.querySelector('.image-modal video');
        
        if (!modalImg || !modalVideo || !newElement) return;
        
        // Verificar se o novo elemento é vídeo ou imagem
        const isVideo = newElement.tagName.toLowerCase() === 'video';
        
        if (isVideo) {
            // Mostrar vídeo no modal
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = newElement.src || newElement.dataset.src;
            modalVideo.controls = true;
            modalVideo.autoplay = true;
            modalVideo.loop = true;
        } else {
            // Mostrar imagem no modal
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImg.src = newElement.src || newElement.dataset.src;
        }
    }



    setupSecurity() {
        this.setupInputSanitization();
        this.setupXSSProtection();
    }

    setupInputSanitization() {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', (e) => {
                let value = e.target.value;
                
                // Remover scripts
                value = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
                
                // Remover javascript:
                value = value.replace(/javascript:/gi, '');
                
                // Remover on* attributes
                value = value.replace(/on\w+\s*=/gi, '');
                
                // Validar tamanho
                if (value.length > 1000) {
                    value = value.substring(0, 1000);
                }
                
                e.target.value = value;
            });
        });
    }

    setupXSSProtection() {
        console.log('XSS Protection enabled');
    }

    setupMediaOptimization() {
        this.setupImageOptimization();
        this.setupVideoOptimization();
        this.setupMediaCaching();
        this.setupProgressiveLoading();
    }

    setupImageOptimization() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }

    setupVideoOptimization() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.preload = 'metadata';
            video.muted = true;
            video.playsInline = true;
        });
    }

    setupMediaCaching() {
        // Só usar cache em servidores HTTP, não em file://
        if ('caches' in window && window.location.protocol !== 'file:') {
            caches.open('media-cache-v1').then(cache => {
                const mediaUrls = [];
                document.querySelectorAll('img[data-src], video[data-src]').forEach(el => {
                    mediaUrls.push(el.dataset.src);
                });
                cache.addAll(mediaUrls.slice(0, 10));
            }).catch(error => {
                console.log('Cache error:', error);
            });
        }
    }

    setupProgressiveLoading() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadProgressiveImage(img);
                        observer.unobserve(img);
                    }
                });
            });
            observer.observe(img);
        });
    }

    loadProgressiveImage(img) {
        const lowQualitySrc = this.generateLowQualitySrc(img.dataset.src);
        img.src = lowQualitySrc;
        
        const highQualityImg = new Image();
        highQualityImg.onload = () => {
            img.src = highQualityImg.src;
        };
        highQualityImg.src = img.dataset.src;
    }

    generateLowQualitySrc(src) {
        return src.replace(/\.(jpg|png|jpeg)/, '_low.$1');
    }

    loadGalleries() {
        const galleryConfigs = {
            'concept-art': {
                folder: 'ConceptArt',
                title: 'Concept Art',
                description: 'Arte conceitual original criada para dar vida a mundos fantásticos.',
                filters: ['Todos', 'Personagens', 'Ambientes', 'Criaturas', 'Props']
            },
            'illustration': {
                folder: 'Illustration',
                title: 'Illustration',
                description: 'Detailed digital illustrations that tell unique visual stories.',
                filters: []
            },
            '3d-model': {
                folder: '3DModel',
                title: '3D Model',
                description: 'Modelos 3D otimizados para Roblox com alta qualidade visual.',
                filters: ['Todos', 'Personagens', 'Veículos', 'Armas', 'Construções', 'Stud']
            },
            'buildings': {
                folder: 'Buildings',
                title: 'Buildings',
                description: 'Arquiteturas e ambientes imersivos que criam mundos únicos.',
                filters: ['Todos', 'Medieval', 'Moderno', 'Futurista', 'Natural']
            },
            'gui-ui': {
                folder: 'GUI-UI',
                title: 'GUI/UI',
                description: 'Interfaces intuitivas para Roblox com design moderno e funcional.',
                filters: ['Todos', 'Menus', 'Game UI', 'Loja', 'Configurações']
            },
            'rig': {
                folder: 'Rig',
                title: 'Rig',
                description: 'Character rigging profissional para animações fluidas e expressivas.',
                filters: []
            },
            'animations': {
                folder: 'Animations',
                title: 'Animations',
                description: 'Animações fluidas e expressivas que dão vida aos personagens.',
                filters: ['Todos', 'Locomoção', 'Combate', 'Idle', 'Especiais']
            }
        };

        Object.entries(galleryConfigs).forEach(([pageId, config]) => {
            this.setupGallery(pageId, config);
        });
    }

    setupGallery(pageId, config) {
        const page = document.getElementById(pageId);
        if (!page) return;

        const titleEl = page.querySelector('.page-title');
        const descEl = page.querySelector('.page-description');
        if (titleEl) titleEl.textContent = config.title;
        if (descEl) descEl.textContent = config.description;

        const filterContainer = page.querySelector('.gallery-filter');
        if (filterContainer) {
            filterContainer.innerHTML = config.filters.map((filter, index) => 
                `<button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${filter.toLowerCase()}">${filter}</button>`
            ).join('');
        }

        const existingFiles = this.getExistingFiles(config.folder);
        console.log(`Carregando ${config.folder}:`, existingFiles.length, 'arquivos');
        console.log('Arquivos encontrados:', existingFiles);
        
        const galleryGrid = page.querySelector('.gallery-grid');
        if (galleryGrid) {
            galleryGrid.innerHTML = existingFiles.map((filename, index) => {
                const isVideo = ['mp4', 'webm', 'ogg', 'avi', 'mov'].includes(filename.split('.').pop().toLowerCase());
                const category = this.detectCategoryFromFilename(filename);
                
                if (isVideo) {
                    return `
                        <video controls autoplay loop muted data-category="${category}" data-src="${config.folder}/${filename}" data-preview="${config.folder}/${filename}" class="fade-in-stagger" onerror="this.remove();" onclick="window.loveStudiosApp.openModal(this);">
                            <source data-src="${config.folder}/${filename}" type="video/mp4">
                            Seu navegador não suporta vídeos.
                        </video>
                    `;
                } else {
                    return `
                        <div class="gallery-item-wrapper">
                            <img data-src="${config.folder}/${filename}" alt="${config.title} - Item ${index + 1}" 
                                 loading="lazy" data-category="${category}" data-preview="${config.folder}/${filename}" class="lazy fade-in-stagger" 
                                 onerror="this.remove();" 
                                 onclick="window.loveStudiosApp.openModal(this);">
                        </div>
                    `;
                }
            }).join('');
            
            console.log(`Galerias ${pageId} criadas:`, galleryGrid.children.length);
            console.log('Arquivos:', existingFiles);
            console.log('HTML gerado:', galleryGrid.innerHTML.substring(0, 200) + '...');
            
            // Garantir que todos os itens sejam visíveis por padrão
            const allItems = galleryGrid.querySelectorAll('img[data-category], video[data-category]');
            allItems.forEach(item => {
                item.style.display = 'block';
            });
            console.log(`Todos os ${allItems.length} itens configurados como visíveis`);
            
            // Forçar carregamento imediato das imagens e vídeos
            setTimeout(() => {
                const images = galleryGrid.querySelectorAll('img[data-src]');
                images.forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.onload = () => console.log('Imagem carregada:', img.dataset.src);
                        img.onerror = () => console.log('Erro ao carregar imagem:', img.dataset.src);
                    }
                });
                
                const videos = galleryGrid.querySelectorAll('video[data-src]');
                videos.forEach(video => {
                    if (video.dataset.src) {
                        video.src = video.dataset.src;
                        video.onloadeddata = () => console.log('Vídeo carregado:', video.dataset.src);
                        video.onerror = () => console.log('Erro ao carregar vídeo:', video.dataset.src);
                    }
                });
            }, 100);
        }

        this.setupGalleryFilters(page);
        this.setupImagePreview(page);
    }

    getExistingFiles(folder) {
        const fileLists = {
            'ConceptArt': [
                '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
                '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.gif', '20.jpg',
                '21.png', '22.jpg'
            ],
            'Illustration': ['1.jpg', '2.jpg'],
            '3DModel': [
                '1-P.jpg', '2-P.png', '3-P.jpg', '4-P.jpg', '5-P.jpg',
                '6-C.png', '7-C.png', '8-C.png', '9-C.png', '10-C.png',
                '11-C.png', '12-C.jpg', '13-V.jpg', '14-V.jpg', '15-V.png',
                '16-V.png', '17-V.png', '18-V.png', '19-V.png', '20-V.png',
                '21-V.png', '22-V.png', '23-V.png', '24-W.jpg', '25-W.jpg',
                '27-W.png', '28-W.png', '29-W.jpg', '30-W.jpg',
                '31-C.jpg', '32-C.jpg', '33-C.jpg', '34-C.jpg', '35-C.jpg',
                '36-C.png', '37-C.png', '38-C.png', '39-C.png', '40-C.png',
                '41-C.png', '42-C.png', '43-C.png', '44-C.jpg', '45-W.jpg',
                '44.png', '45.png', '46.png', '47.png', '48.png', '49.png', '50.png', '51.png', '52.png', '53.png',
                '54.png', '55.png', '56.png', '57.png', '58.png',
                '46-ST.png', '47-ST.png', '48-ST.png', '49-ST.png', '50-ST.png',
                '51-ST.png', '52-ST.png', '53-ST.png', '54-ST.png', '55-ST.png',
                '56-ST.png', '57-ST.png', '58-ST.png', '59-ST.png', '60-ST.png'
            ],
            'Buildings': [
                '1.png', '2.mp4', '3.png', '4.png', '5.png', '7.png', '8.mp4', '9.mp4', '10.png', '11.png',
                '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png',
                '21.jpg', '22.jpg', '23.jpg', '24.mp4', '25.jpg', '26.jpg'
            ],
            'GUI-UI': ['1.png'],
            'Rig': ['1.png', '2.png', '3.png', '4.mp4', '5.png'],
            'Animations': [
                '1-CO.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4',
                '6.mp4', '7.mp4', '8.mp4', '9.mp4', '10.mp4',
                '11.mp4', '12.mp4', '13.mp4', '14.mp4', '15.mp4'
            ]
        };

        return fileLists[folder] || [];
    }

    detectCategoryFromFilename(filename) {
        console.log('Analisando arquivo:', filename);
        
        const categoryMap = {
            'P': 'props',
            'V': 'veículos', 
            'W': 'armas',
            'C': 'personagens',
            'E': 'ambientes',
            'CR': 'criaturas',
            'PR': 'retratos',
            'M': 'medieval',
            'MO': 'moderno',
            'F': 'futurista',
            'N': 'natural',
            'ME': 'menus',
            'G': 'game ui',
            'S': 'loja',
            'SE': 'configurações',
            'FA': 'facial',
            'B': 'body',
            'H': 'hand',
            'A': 'avançado',
            'WA': 'locomoção',
            'CO': 'combate',
            'I': 'idle',
            'SP': 'especiais',
            'ST': 'stud'
        };
        
        // Verificar sufixos primeiro
        for (const [code, category] of Object.entries(categoryMap)) {
            if (filename.includes(`-${code}`) || filename.includes(`_${code}`)) {
                console.log(`Categoria encontrada por sufixo ${code}:`, category);
                return category;
            }
        }
        
        const number = parseInt(filename.replace(/\D/g, ''));
        if (number) {
            if (filename.includes('.mp4')) {
                const animationCategories = ['locomoção', 'combate', 'idle', 'especiais'];
                const category = animationCategories[(number - 1) % animationCategories.length];
                console.log(`Categoria de animação para número ${number}:`, category);
                return category;
            } else {
                // Para imagens numeradas simples (44-58), distribuir entre categorias
                if (number >= 44 && number <= 58) {
                    const categories = ['personagens', 'veículos', 'armas', 'construções', 'stud'];
                    const category = categories[(number - 44) % categories.length];
                    console.log(`Categoria para imagem ${number} (44-58):`, category);
                    return category;
                } else {
                    const categories = ['personagens', 'veículos', 'armas', 'construções', 'stud'];
                    const category = categories[(number - 1) % categories.length];
                    console.log(`Categoria para imagem ${number}:`, category);
                    return category;
                }
            }
        }
        
        // Para buildings, categorizar baseado no número
        if (filename.includes('Buildings/') || filename.includes('buildings/')) {
            const number = parseInt(filename.replace(/\D/g, ''));
            if (number) {
                const buildingCategories = ['medieval', 'moderno', 'futurista', 'natural'];
                const category = buildingCategories[(number - 1) % buildingCategories.length];
                console.log(`Categoria de building para número ${number}:`, category);
                return category;
            }
        }
        
        console.log('Categoria padrão: props');
        return 'props';
    }

    setupGalleryFilters(page) {
        const filterButtons = page.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                console.log('Filtro selecionado:', filter);
                
                page.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const items = page.querySelectorAll('img[data-category], video[data-category]');
                let visibleCount = 0;
                
                items.forEach(item => {
                    const category = item.getAttribute('data-category');
                    console.log('Item categoria:', category, 'Filtro:', filter);
                    
                    if (filter === 'todos' || category === filter) {
                        item.style.display = 'block';
                        visibleCount++;
                        console.log('Item visível:', item.dataset.src);
                    } else {
                        item.style.display = 'none';
                        console.log('Item oculto:', item.dataset.src);
                    }
                });
                
                console.log(`Total de itens visíveis: ${visibleCount}`);
                
                const counter = page.querySelector('.gallery-counter');
                if (counter) {
                    counter.textContent = `${visibleCount} items encontrados`;
                }
            });
        });
    }

    setupImagePreview(page) {
        if (!page) return;
        
        const images = page.querySelectorAll('img[data-preview], video[data-preview]');
        
        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                const previewSrc = img.dataset.preview;
                img.style.setProperty('--preview-image', `url('${previewSrc}')`);
            });
        });
    }

    setupPageTransitions() {
        const pages = document.querySelectorAll('.page');
        
        pages.forEach(page => {
            page.addEventListener('transitionend', () => {
                if (page.classList.contains('active')) {
                    page.style.transform = 'none';
                }
            });
        });
    }

    setupEntryAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-stagger').forEach(el => {
            observer.observe(el);
        });
    }

    setupGlassmorphism() {
        // Glassmorphism já implementado via CSS
    }

    setupLoadingStates() {
        // Loading states já implementados
    }

    setupSkeletonScreens() {
        // Skeleton screens já implementados
    }

    setupAdvancedLoadingStates() {
        this.createSkeletonScreens();
        this.setupProgressiveLoading();
        this.setupLoadingAnimations();
    }

    createSkeletonScreens() {
        // Criar skeleton screens para galerias
        const galleries = document.querySelectorAll('.gallery-grid');
        galleries.forEach(gallery => {
            if (gallery.children.length === 0) {
                this.showSkeletonScreen(gallery);
            }
        });
    }

    showSkeletonScreen(gallery) {
        const skeletonHTML = `
            <div class="skeleton-container">
                ${Array(6).fill(`
                    <div class="skeleton-item">
                        <div class="skeleton-image"></div>
                        <div class="skeleton-content">
                            <div class="skeleton-title"></div>
                            <div class="skeleton-text"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        gallery.innerHTML = skeletonHTML;
    }

    hideSkeletonScreen(gallery) {
        const skeleton = gallery.querySelector('.skeleton-container');
        if (skeleton) {
            skeleton.style.opacity = '0';
            setTimeout(() => {
                skeleton.remove();
            }, 300);
        }
    }

    setupProgressiveLoading() {
        // Carregamento progressivo de imagens
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img, index) => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                img.style.transition = 'all 0.5s ease';
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, index * 100);
        });
    }

    setupLoadingAnimations() {
        // Animações de loading personalizadas
        this.createLoadingSpinner();
        this.setupPageTransitionLoading();
    }

    createLoadingSpinner() {
        const spinner = document.createElement('div');
        spinner.className = 'custom-loading-spinner';
        spinner.innerHTML = `
            <div class="spinner-ring"></div>
            <div class="spinner-text">Carregando...</div>
        `;
        document.body.appendChild(spinner);
    }

    setupPageTransitionLoading() {
        // Loading entre páginas
        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link, .category-card')) {
                this.showPageTransitionLoading();
            }
        });
    }

    showPageTransitionLoading() {
        const loading = document.querySelector('.custom-loading-spinner');
        if (loading) {
            loading.style.display = 'flex';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 1000);
        }
    }

    setupMicroInteractions() {
        this.setupHoverEffects();
        this.setupClickAnimations();
        this.setupScrollAnimations();
        this.setupButtonInteractions();
    }

    setupHoverEffects() {
        // Efeitos de hover avançados
        const elements = document.querySelectorAll('.category-card, .stat-card, .btn, .nav-link');
        elements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.addHoverEffect(e.target);
            });
            
            element.addEventListener('mouseleave', (e) => {
                this.removeHoverEffect(e.target);
            });
        });
    }

    addHoverEffect(element) {
        element.style.transform = 'translateY(-5px) scale(1.02)';
        element.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    removeHoverEffect(element) {
        element.style.transform = 'translateY(0) scale(1)';
        element.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }

    setupClickAnimations() {
        // Animações de clique
        const buttons = document.querySelectorAll('.btn, .category-card, .nav-link');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRippleEffect(e);
            });
        });
    }

    createRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupScrollAnimations() {
        // Animações baseadas no scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.stat-card, .category-card, .process-card');
        elements.forEach(el => {
            observer.observe(el);
        });
    }

    setupButtonInteractions() {
        // Interações específicas de botões
        const primaryBtn = document.querySelector('.btn-primary');
        if (primaryBtn) {
            primaryBtn.addEventListener('mouseenter', () => {
                primaryBtn.style.transform = 'scale(1.05)';
                primaryBtn.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
            });
            
            primaryBtn.addEventListener('mouseleave', () => {
                primaryBtn.style.transform = 'scale(1)';
                primaryBtn.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
            });
        }
    }

    setupBackToTop() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        `;
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), #6366f1);
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(backToTopBtn);
        
        // Scroll listener com debounce
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.pageYOffset > 500) {
                    backToTopBtn.style.opacity = '1';
                    backToTopBtn.style.visibility = 'visible';
                    backToTopBtn.style.transform = 'translateY(0)';
                } else {
                    backToTopBtn.style.opacity = '0';
                    backToTopBtn.style.visibility = 'hidden';
                    backToTopBtn.style.transform = 'translateY(20px)';
                }
            }, 100);
        });
        
        // Click com animação
        backToTopBtn.addEventListener('click', () => {
            backToTopBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                backToTopBtn.style.transform = 'scale(1)';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 150);
        });

        // Hover effects
        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.transform = 'scale(1.1)';
            backToTopBtn.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.4)';
        });

        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.transform = 'scale(1)';
            backToTopBtn.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
    }

    setupProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.innerHTML = `
            <div class="progress-fill"></div>
            <div class="progress-glow"></div>
        `;
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            z-index: 1001;
            overflow: hidden;
        `;
        
        const progressFill = progressBar.querySelector('.progress-fill');
        const progressGlow = progressBar.querySelector('.progress-glow');
        
        progressFill.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: linear-gradient(90deg, var(--primary), #6366f1, var(--primary));
            width: 0%;
            transition: width 0.1s ease;
        `;
        
        progressGlow.style.cssText = `
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 20px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
            animation: progress-glow 2s infinite;
        `;
        
        document.body.appendChild(progressBar);
        
        // Scroll listener com throttling
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset;
                    const docHeight = document.body.scrollHeight - window.innerHeight;
                    const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
                    
                    progressFill.style.width = scrollPercent + '%';
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Adicionar animação de glow
        const style = document.createElement('style');
        style.textContent = `
            @keyframes progress-glow {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100vw); }
            }
        `;
        document.head.appendChild(style);
    }

    setupDarkMode() {
        this.createThemeToggle();
        this.loadSavedTheme();
        this.setupThemeTransition();
    }

    createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = `
            <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        `;
        
        themeToggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--card);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            color: var(--foreground);
            cursor: pointer;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Hover effects
        themeToggle.addEventListener('mouseenter', () => {
            themeToggle.style.transform = 'scale(1.1)';
            themeToggle.style.background = 'var(--accent)';
            themeToggle.style.color = 'var(--accent-foreground)';
        });

        themeToggle.addEventListener('mouseleave', () => {
            themeToggle.style.transform = 'scale(1)';
            themeToggle.style.background = 'var(--card)';
            themeToggle.style.color = 'var(--foreground)';
        });
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        
        // Garantir que o tema seja aplicado imediatamente
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        
        if (theme === 'light') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    setupThemeTransition() {
        // Adicionar transições suaves para mudança de tema
        const style = document.createElement('style');
        style.textContent = `
            * {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }

    setupPerformanceMonitoring() {
        // Monitor de performance em tempo real
        this.performanceMetrics = {
            loadTime: 0,
            firstPaint: 0,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0
        };

        this.measurePerformance();
        this.setupPerformanceObserver();
    }

    measurePerformance() {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                this.performanceMetrics.loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                console.log('Page Load Time:', this.performanceMetrics.loadTime + 'ms');
            }
        }
    }

    setupPerformanceObserver() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    if (entry.entryType === 'paint') {
                        if (entry.name === 'first-paint') {
                            this.performanceMetrics.firstPaint = entry.startTime;
                        } else if (entry.name === 'first-contentful-paint') {
                            this.performanceMetrics.firstContentfulPaint = entry.startTime;
                        }
                    }
                });
            });
            
            observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
        }
    }

    setupMemoryManagement() {
        // Gerenciamento de memória para evitar vazamentos
        this.cleanupEventListeners();
        this.setupMemoryMonitoring();
    }

    cleanupEventListeners() {
        // Limpar event listeners não utilizados
        window.addEventListener('beforeunload', () => {
            this.cleanupResources();
        });
    }

    cleanupResources() {
        // Limpar recursos quando a página for fechada
        if (this.moduleCache && typeof this.moduleCache.clear === 'function') {
            this.moduleCache.clear();
        }
        if (this.loadedModules && typeof this.loadedModules.clear === 'function') {
            this.loadedModules.clear();
        }
        
        // Limpar observers
        if (this.performanceObserver && typeof this.performanceObserver.disconnect === 'function') {
            this.performanceObserver.disconnect();
        }
    }

    setupMemoryMonitoring() {
        if ('memory' in performance) {
            setInterval(() => {
                const memory = performance.memory;
                const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
                const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
                
                // Aumentar threshold para 95% para evitar falsos positivos
                if (usedMB > totalMB * 0.95) {
                    console.warn('High memory usage detected:', usedMB + 'MB / ' + totalMB + 'MB');
                    this.cleanupResources();
                }
            }, 60000); // Verificar a cada 60 segundos para reduzir overhead
        }
    }

    setupBundleOptimization() {
        // Preload recursos críticos
        this.preloadCriticalResources();
        
        // Lazy load recursos não críticos
        this.lazyLoadNonCriticalResources();
        
        // Otimizar carregamento de fontes
        this.optimizeFontLoading();
    }

    preloadCriticalResources() {
        const criticalResources = [
            'styles.css',
            'script.js'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'script';
            document.head.appendChild(link);
        });
    }

    lazyLoadNonCriticalResources() {
        // Carregar recursos não críticos quando a página estiver pronta
        if (document.readyState === 'complete') {
            this.loadNonCriticalResources();
        } else {
            window.addEventListener('load', () => {
                this.loadNonCriticalResources();
            });
        }
    }

    loadNonCriticalResources() {
        const nonCriticalResources = [
            'sw.js'
        ];

        nonCriticalResources.forEach(resource => {
            if (resource.endsWith('.js')) {
                const script = document.createElement('script');
                script.src = resource;
                script.async = true;
                document.head.appendChild(script);
            }
        });
    }

    optimizeFontLoading() {
        // Carregar fontes apenas quando necessário
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        fontLink.media = 'print';
        fontLink.onload = () => {
            fontLink.media = 'all';
        };
        document.head.appendChild(fontLink);
    }

    setupCriticalCSS() {
        // CSS crítico inline para carregamento mais rápido
        const criticalCSS = `
            .page { display: none; }
            .page.active { display: block; }
            .loading-indicator { display: block; }
            .hero { min-height: 100vh; }
            .nav { position: fixed; top: 0; width: 100%; z-index: 1000; }
        `;

        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.firstChild);
    }

    setupImageOptimization() {
        // Otimização avançada de imagens
        this.setupWebPDetection();
        this.setupResponsiveImages();
        this.setupImageCompression();
    }

    setupWebPDetection() {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
            const isWebPSupported = webP.height === 2;
            if (isWebPSupported) {
                document.documentElement.classList.add('webp');
            } else {
                document.documentElement.classList.add('no-webp');
            }
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }

    setupResponsiveImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            const src = img.dataset.src;
            if (src) {
                // Criar srcset para diferentes tamanhos
                const srcset = this.generateSrcSet(src);
                img.srcset = srcset;
                img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
            }
        });
    }

    generateSrcSet(src) {
        const sizes = [320, 640, 960, 1280];
        return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ');
    }

    setupImageCompression() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            if (img.dataset.src) {
                this.compressImage(img);
            }
        });
    }

    compressImage(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        img.onload = () => {
            const maxWidth = 800;
            const maxHeight = 600;
            
            let { width, height } = img;
            
            if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
            }
            
            if (height > maxHeight) {
                width = (width * maxHeight) / height;
                height = maxHeight;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            ctx.drawImage(img, 0, 0, width, height);
            
            const compressedSrc = canvas.toDataURL('image/jpeg', 0.8);
            img.src = compressedSrc;
        };
    }

    setupPrefetchResources() {
        // Prefetch recursos para navegação futura
        const prefetchResources = [
            '3DModel/',
            'ConceptArt/',
            'Animations/'
        ];

        prefetchResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    setupCodeSplitting() {
        // Módulos carregados dinamicamente
        this.loadedModules = new Set();
        this.moduleCache = new Map();
        
        // Carregar módulos baseados na página atual
        this.loadPageModules(this.currentPage || 'home');
    }

    loadPageModules(pageId) {
        // Verificar se loadedModules foi inicializado
        if (!this.loadedModules) {
            this.loadedModules = new Set();
        }
        if (!this.moduleCache) {
            this.moduleCache = new Map();
        }

        const moduleMap = {
            'home': ['hero', 'stats', 'features'],
            'script': ['code-highlight', 'syntax'],
            '3d-model': ['3d-viewer', 'model-controls'],
            'animations': ['video-player', 'animation-controls'],
            'concept-art': ['image-gallery', 'zoom'],
            'illustration': ['image-gallery', 'zoom'],
            'buildings': ['image-gallery', 'zoom'],
            'gui-ui': ['image-gallery', 'zoom'],
            'rig': ['video-player', 'animation-controls']
        };

        const modules = moduleMap[pageId] || [];
        
        modules.forEach(module => {
            if (!this.loadedModules.has(module)) {
                this.loadModule(module);
            }
        });
    }

    loadModule(moduleName) {
        // Verificar se moduleCache foi inicializado
        if (!this.moduleCache) {
            this.moduleCache = new Map();
        }
        if (!this.loadedModules) {
            this.loadedModules = new Set();
        }

        if (this.moduleCache.has(moduleName)) {
            return Promise.resolve(this.moduleCache.get(moduleName));
        }

        return new Promise((resolve) => {
            // Simular carregamento de módulo
            setTimeout(() => {
                const module = this.simulateModuleLoad(moduleName);
                this.moduleCache.set(moduleName, module);
                this.loadedModules.add(moduleName);
                resolve(module);
            }, 100);
        });
    }

    simulateModuleLoad(moduleName) {
        const modules = {
            'hero': { init: () => console.log('Hero module loaded') },
            'stats': { init: () => console.log('Stats module loaded') },
            'features': { init: () => console.log('Features module loaded') },
            'code-highlight': { init: () => console.log('Code highlight loaded') },
            'syntax': { init: () => console.log('Syntax module loaded') },
            '3d-viewer': { init: () => console.log('3D viewer loaded') },
            'model-controls': { init: () => console.log('Model controls loaded') },
            'video-player': { init: () => console.log('Video player loaded') },
            'animation-controls': { init: () => console.log('Animation controls loaded') },
            'image-gallery': { init: () => console.log('Image gallery loaded') },
            'zoom': { init: () => console.log('Zoom module loaded') }
        };

        return modules[moduleName] || { init: () => {} };
    }

    hideLoadingIndicator() {
        const loadingIndicator = document.querySelector('.loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        console.log('Loading indicator hidden');
    }

    setupTypingEffect() {
        const title = document.getElementById('typing-title');
        const subtitle = document.getElementById('typing-subtitle');
        
        if (!title || !subtitle) return;
        
        // Salvar textos originais
        const titleText = title.textContent;
        const subtitleText = subtitle.textContent;
        
        // Limpar textos inicialmente
        title.textContent = '';
        subtitle.textContent = '';
        
        // Mostrar elementos
        title.style.opacity = '1';
        subtitle.style.opacity = '1';
        
        // Efeito de digitação para o título
        let titleIndex = 0;
        const typeTitle = () => {
            if (titleIndex < titleText.length) {
                title.textContent += titleText.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 200);
            } else {
                // Adicionar classe de animação após terminar
                title.classList.add('typing');
                // Iniciar digitação do subtítulo
                setTimeout(typeSubtitle, 800);
            }
        };
        
        // Efeito de digitação para o subtítulo
        let subtitleIndex = 0;
        const typeSubtitle = () => {
            if (subtitleIndex < subtitleText.length) {
                subtitle.textContent += subtitleText.charAt(subtitleIndex);
                subtitleIndex++;
                setTimeout(typeSubtitle, 80);
            } else {
                // Adicionar classe de animação após terminar
                subtitle.classList.add('typing');
                // Remover cursor após alguns segundos
                setTimeout(() => {
                    title.classList.remove('typing');
                    subtitle.classList.remove('typing');
                }, 3000);
            }
        };
        
        // Iniciar digitação após um pequeno delay
        setTimeout(typeTitle, 1000);
    }

    setupComplexParticleSystem() {
        const particlesContainer = document.querySelector('.particles-container');
        const scrollParticles = document.querySelector('.scroll-particles');
        const ambientParticles = document.querySelector('.ambient-particles');
        
        if (!particlesContainer || !scrollParticles || !ambientParticles) return;

        let scrollY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let particles = [];

        // Rastrear scroll e mouse
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
        });

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Criar partícula de entrada
        const createEntranceParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle entrance';
            
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            particlesContainer.appendChild(particle);
            particles.push(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    particles = particles.filter(p => p !== particle);
                }
            }, 6000);
        };

        // Criar partícula de scroll
        const createScrollParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle scroll';
            
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            
            scrollParticles.appendChild(particle);
            particles.push(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    particles = particles.filter(p => p !== particle);
                }
            }, 8000);
        };

        // Criar partícula ambiente
        const createAmbientParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle ambient';
            
            const size = Math.random() * 6 + 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            
            ambientParticles.appendChild(particle);
            particles.push(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    particles = particles.filter(p => p !== particle);
                }
            }, 12000);
        };

        // Criar partícula sparkle (brilho)
        const createSparkleParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle sparkle';
            
            const size = Math.random() * 2 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            particlesContainer.appendChild(particle);
            particles.push(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    particles = particles.filter(p => p !== particle);
                }
            }, 4000);
        };

        // Criar partícula glow (brilho suave)
        const createGlowParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle glow';
            
            const size = Math.random() * 8 + 4;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            ambientParticles.appendChild(particle);
            particles.push(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    particles = particles.filter(p => p !== particle);
                }
            }, 10000);
        };

        // Inicializar sistema
        const initParticleSystem = () => {
            // Criar partículas de entrada iniciais
            for (let i = 0; i < 20; i++) {
                setTimeout(createEntranceParticle, i * 100);
            }

            // Criar partículas de scroll
            for (let i = 0; i < 15; i++) {
                setTimeout(createScrollParticle, i * 200);
            }

            // Criar partículas ambiente
            for (let i = 0; i < 10; i++) {
                setTimeout(createAmbientParticle, i * 300);
            }

            // Criar sparkles
            for (let i = 0; i < 8; i++) {
                setTimeout(createSparkleParticle, i * 400);
            }

            // Criar glows
            for (let i = 0; i < 6; i++) {
                setTimeout(createGlowParticle, i * 500);
            }
        };

        // Iniciar sistema
        initParticleSystem();

        // Manter sistema ativo
        setInterval(createEntranceParticle, 2000);
        setInterval(createScrollParticle, 3000);
        setInterval(createAmbientParticle, 4000);
        setInterval(createSparkleParticle, 1500);
        setInterval(createGlowParticle, 5000);
    }
}

// Inicializar aplicação
window.loveStudiosApp = new LoveStudiosApp();
