// Translations object
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            contact: "Contact",
            letsTalk: "Let's Talk"
        },
        hero: {
            hello: "HELLO, I'M",
            fullName: "Basam Ali",
            title: "Web & Digital Systems Developer",
            description: "I transform ideas into websites, mobile apps, digital menus and modern POS systems with professional design and efficient, easy-to-use solutions.",
            viewProjects: "View My Projects",
            contactMe: "Contact Me",
            experience: "Years of Learning<br>& Development",
            developer: "Building digital<br>solutions"
        },
        about: {
            title: "ABOUT ME",
            heading: "Transforming ideas into modern",
            headingHighlight: "digital solutions",
            p1: "I am a Computer Science graduate working as a Web and App Developer. I have experience in creating websites and modern systems, digital menus, sales systems (POS), mobile applications, and database-connected software.",
            p2: "I enjoy transforming ideas and needs into clean, efficient, and easy-to-use digital products and solutions. My focus is on creating professional design, beautiful and responsive interfaces, good user experience, and strong system performance.",
            workWithMe: "Start Your Project",
            devTitle: "Development",
            devDesc: "Web, mobile and business systems",
            dbTitle: "Database",
            dbDesc: "Firebase Firestore, SQLite and data management",
            psTitle: "Problem Solving",
            psDesc: "Finding practical, efficient and modern solutions",
            menuTitle: "Digital Menu & POS",
            menuDesc: "Creating modern menus and sales systems"
        },
        skills: {
            title: "MY SKILLS",
            heading: "Technologies and tools",
            headingHighlight: "I work with"
        },
        projects: {
            title: "FEATURED PROJECTS",
            heading: "My work and",
            headingHighlight: "digital products",
            smartServeType: "Business System",
            smartServeTitle: "SmartServe POS",
            smartServeDesc: "A modern system for restaurant and cafe management, featuring POS, cashier tools, product management, expenses, sales reports and digital menu.",
            viewProject: "View Project",
            gradType: "Final Year Project",
            gradTitle: "HeartHealth Analyzer",
            gradDesc: "A web app for heart disease awareness and information, featuring symptom checking, risk assessment, educational content and helpful resources.",
            githubRepo: "GitHub Repository",
            nikeType: "Mobile App",
            nikeTitle: "Nike Shoes Shop",
            nikeDesc: "A modern mobile app for online shopping, to browse products and manage user data using Firebase.",
            viewGithub: "View on GitHub"
        },
        education: {
            title: "EDUCATION & EXPERIENCE",
            heading: "My professional",
            headingHighlight: "journey",
            bsDate: "2020 – 2025",
            bsTitle: "Bachelor of Science in Computer Science",
            uni: "Cihan University – Erbil",
            bsDesc: "I completed my Bachelor's in Computer Science, and during my studies gained expertise in software development, web development, databases, and creating modern computer systems.",
            internDate: "2023 – 2024",
            internTitle: "Professional IT Training",
            company: "Dil Technology",
            internDesc: "During the training, I gained practical experience in IT support, network management, computer troubleshooting, system installation and maintenance, and assisting users."
        },
        languages: {
            title: "LANGUAGES",
            heading: "Language",
            headingHighlight: "Proficiency",
            kurdish: "Kurdish (Sorani)",
            english: "English",
            arabic: "Arabic"
        },
        contact: {
            title: "GET IN TOUCH",
            heading: "Have a project in mind?",
            description: "I am ready to create modern and professional digital solutions for various businesses.",
            service1Title: "Modern Websites",
            service1Desc: "Responsive websites for companies and businesses",
            service2Title: "Mobile Apps",
            service2Desc: "Android and iOS applications",
            service3Title: "POS Systems",
            service3Desc: "For shops, markets, pharmacies, cafes",
            service4Title: "QR Menus",
            service4Desc: "Digital menus for restaurants and cafes",
            service5Title: "Business Management",
            service5Desc: "Custom dashboards for sales and analytics",
            service6Title: "Custom Software",
            service6Desc: "Tailored solutions for your needs",
            ctaHighlight: "Turn your ideas into a smart, fast and professional system.",
            sendEmail: "WhatsApp",
            phone: "Email"
        },
        footer: {
            copyright: "© 2026 Basam Ali. Designed and developed by me."
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            about: "عني",
            skills: "المهارات",
            projects: "المشاريع",
            education: "التعليم",
            contact: "تواصل معي",
            letsTalk: "لنتحدث"
        },
        hero: {
            hello: "مرحباً، أنا",
            fullName: "بسام علي",
            title: "مطور الويب والأنظمة الرقمية",
            description: "أحول الأفكار إلى مواقع وتطبيقات الهاتف المحمول والقوائم الرقمية وأنظمة POS الحديثة بتصميم احترافي وحلول فعالة وسهلة الاستخدام.",
            viewProjects: "عرض مشاريعي",
            contactMe: "تواصل معي",
            experience: "سنوات من التعلم<br>والتطوير",
            developer: "بناء الحلول<br>الرقمية"
        },
        about: {
            title: "عني",
            heading: "تحويل الأفكار إلى حلول",
            headingHighlight: "رقمية حديثة",
            p1: "أنا خريج علوم الحاسوب وأعمل كمطور ويب وتطبيقات. لدي خبرة في إنشاء المواقع والأنظمة الحديثة، والقوائم الرقمية، وأنظمة المبيعات (POS)، وتطبيقات الهاتف المحمول، والبرامج المرتبطة بقواعد البيانات.",
            p2: "أستمتع بتحويل الأفكار والاحتياجات إلى منتجات وحلول رقمية نظيفة وفعالة وسهلة الاستخدام. تركيزي على إنشاء تصميم احترافي، وواجهات جميلة ومتجاوبة، وتجربة مستخدم جيدة، وأداء قوي للأنظمة.",
            workWithMe: "ابدأ مشروعك",
            devTitle: "التطوير",
            devDesc: "الويب والموبايل والأنظمة التجارية",
            dbTitle: "قواعد البيانات",
            dbDesc: "Firebase Firestore و SQLite وإدارة البيانات",
            psTitle: "حل المشكلات",
            psDesc: "إيجاد حلول عملية وفعالة وحديثة",
            menuTitle: "القائمة الرقمية و POS",
            menuDesc: "إنشاء قوائم حديثة وأنظمة المبيعات"
        },
        skills: {
            title: "مهاراتي",
            heading: "التقنيات والأدوات",
            headingHighlight: "التي أعمل بها"
        },
        projects: {
            title: "المشاريع المميزة",
            heading: "أعمالي ومنتجاتي",
            headingHighlight: "الرقمية",
            smartServeType: "نظام تجاري",
            smartServeTitle: "SmartServe POS",
            smartServeDesc: "نظام حديث لإدارة المطاعم والمقاهي، يتضمن نظام POS، أدوات الكاشير، إدارة المنتجات، المصاريف، تقارير المبيعات والقائمة الرقمية.",
            viewProject: "عرض المشروع",
            gradType: "مشروع السنة النهائية",
            gradTitle: "محلل صحة القلب",
            gradDesc: "تطبيق ويب للتوعية بمعلومات أمراض القلب، يتضمن فحص الأعراض، تقييم المخاطر، المحتوى التعليمي والموارد المفيدة.",
            githubRepo: "مستودع GitHub",
            nikeType: "تطبيق الهاتف المحمول",
            nikeTitle: "متجر أحذية Nike",
            nikeDesc: "تطبيق هاتف محمول حديث للتسوق عبر الإنترنت، لتصفح المنتجات وإدارة بيانات المستخدمين باستخدام Firebase.",
            viewGithub: "عرض على GitHub"
        },
        education: {
            title: "التعليم والخبرة",
            heading: "رحلتي المهنية",
            headingHighlight: "",
            bsDate: "٢٠٢٠ – ٢٠٢٥",
            bsTitle: "بكالوريوس علوم الحاسوب",
            uni: "جامعة جيهان – أربيل",
            bsDesc: "أكملت بكالوريوس علوم الحاسوب، وخلال دراستي اكتسبت خبرة في تطوير البرمجيات، تطوير الويب، قواعد البيانات وإنشاء أنظمة الكمبيوتر الحديثة.",
            internDate: "٢٠٢٣ – ٢٠٢٤",
            internTitle: "تدريب احترافي في تقنية المعلومات",
            company: "Dil Technology",
            internDesc: "خلال التدريب، حصلت على خبرة عملية في دعم تقنية المعلومات، إدارة الشبكات، استكشاف أخطاء الكمبيوتر، تثبيت وصيانة الأنظمة، ومساعدة المستخدمين."
        },
        languages: {
            title: "اللغات",
            heading: "اللغة",
            headingHighlight: "الإتقان",
            kurdish: "الكردية (السوراني)",
            english: "الإنجليزية",
            arabic: "العربية"
        },
        contact: {
            title: "تواصل معي",
            heading: "هل لديك مشروع؟",
            description: "أنا مستعد لإنشاء حلول رقمية حديثة واحترافية لمختلف الأعمال.",
            service1Title: "مواقع ويب حديثة",
            service1Desc: "مواقع متجاوبة للشركات والأعمال",
            service2Title: "تطبيقات الجوال",
            service2Desc: "تطبيقات لنظامي Android و iOS",
            service3Title: "أنظمة نقاط البيع",
            service3Desc: "للمتاجر والأسواق والصيدليات والمقاهي",
            service4Title: "قوائم رقمية QR",
            service4Desc: "قوائم رقمية للمطاعم والمقاهي",
            service5Title: "إدارة الأعمال",
            service5Desc: "لوحات تحكم مخصصة للمبيعات والتحليلات",
            service6Title: "برمجيات مخصصة",
            service6Desc: "حلول مخصصة حسب احتياجاتك",
            ctaHighlight: "حول أفكارك إلى نظام ذكي وسريع واحترافي.",
            sendEmail: "واتساب",
            phone: "إيميل"
        },
        footer: {
            copyright: "© 2026 بسام علي. تصميم وتطوير من قبلي."
        }
    },
    ku: {
        nav: {
            home: "سەرەتا",
            about: "دەربارەی من",
            skills: "شارەزاییەکان",
            projects: "پرۆژەکان",
            education: "خوێندن",
            contact: "پەیوەندی",
            letsTalk: "با قسە بکەین"
        },
        hero: {
            hello: "سڵاو، من",
            fullName: "بەسام علی",
            title: "پەرەپێدەری وێب و سیستەمە دیجیتاڵییەکان",
            description: "بیرۆکەکان دەگۆڕم بۆ ماڵپەڕ، ئەپی مۆبایل، مێنیوی دیجیتاڵی و سیستەمی POS ـی مۆدێرن؛ بە دیزاینێکی پیشەیی و چارەسەرێکی کارا و ئاسان بۆ بەکارهێنان.",
            viewProjects: "پرۆژەکانی من ببینە",
            contactMe: "پەیوەندیم پێوە بکە",
            experience: "ساڵی خوێندن<br>و پەرەسەندن",
            developer: "دروستکردنی چارەسەری<br>دیجیتاڵی"
        },
        about: {
            title: "دەربارەی من",
            heading: "گۆڕینی بیرۆکەکان بۆ چارەسەری دیجیتاڵی مۆدێرن",
            headingHighlight: "",
            p1: "من دەرچووی بەشی زانستی کۆمپیوتەرم و وەک پەرەپێدەری وێب و ئەپ کار دەکەم. ئەزموونم هەیە لە دروستکردنی ماڵپەڕ و سیستەمی مۆدێرن، مێنیوی دیجیتاڵی، سیستەمی فرۆشتن (POS)، ئەپەکانی مۆبایل و چارەسەرە نەرمەکاڵاییە پەیوەندیدارەکان بە بنکەدراوە.",
            p2: "حەزم لە گۆڕینی بیرۆکە و پێویستییەکان بۆ بەرهەم و چارەسەری دیجیتاڵی پاک، کارا و ئاسان بۆ بەکارهێنانە. سەرنجم لەسەر دروستکردنی دیزاینێکی پیشەیی، ڕووکاری جوان و وەڵامدەر، ئەزموونی بەکارهێنەری باش و کارکردنی بەهێزی سیستەمەکانە.",
            workWithMe: "پرۆژەکەت دەست پێ بکە",
            devTitle: "پەرەسەندن",
            devDesc: "وێب، ئەپی مۆبایل و سیستەمە بازرگانییەکان",
            dbTitle: "داتابەیس",
            dbDesc: "Firebase Firestore، SQLite و بەڕێوەبردنی داتا",
            psTitle: "چارەسەرکردنی کێشە",
            psDesc: "دۆزینەوەی چارەسەری پراکتیک، کارا و مۆدێرن",
            menuTitle: "مێنیوی دیجیتاڵی و POS",
            menuDesc: "دروستکردنی مێنیوی مۆدێرن و سیستەمی فرۆشتن"
        },
        skills: {
            title: "شارەزاییەکانم",
            heading: "تەکنەلۆژیا و ئامرازەکان",
            headingHighlight: "کە پێیان کار دەکەم"
        },
        projects: {
            title: "پرۆژە هەڵبژێردراوەکان",
            heading: "کار و بەرهەمە دیجیتاڵییەکانم",
            headingHighlight: "",
            smartServeType: "سیستەمی بازرگانی",
            smartServeTitle: "SmartServe POS",
            smartServeDesc: "سیستەمێکی مۆدێرن بۆ بەڕێوەبردنی چێشتخانە و کافێ، کە سیستەمی POS، ئامرازی کاشیر، بەڕێوەبردنی بەرهەم، خەرجی، ڕاپۆرتی فرۆشتن و مێنیوی دیجیتاڵی تێدایە.",
            viewProject: "پرۆژەکە ببینە",
            gradType: "پرۆژەی کۆتایی خوێندن",
            gradTitle: "HeartHealth Analyzer",
            gradDesc: "ئەپی وێبێک بۆ هۆشیاری و زانیاری نەخۆشییەکانی دڵ، کە تایبەتمەندی پشکنینی نیشانەکان، هەڵسەنگاندنی مەترسی، زانیاری پەروەردەیی و سەرچاوە بەسوودەکان پێشکەش دەکات.",
            githubRepo: "کۆگای GitHub",
            nikeType: "ئەپی مۆبایل",
            nikeTitle: "Nike Shoes Shop",
            nikeDesc: "ئەپی مۆبایلێکی مۆدێرن بۆ فرۆشگای ئۆنلاین، بۆ بینینی بەرهەمەکان و بەڕێوەبردنی داتای بەکارهێنەران بە بەکارهێنانی Firebase.",
            viewGithub: "بینین لە GitHub"
        },
        education: {
            title: "خوێندن و ئەزموون",
            heading: "گەشتی پیشەیی من",
            headingHighlight: "",
            bsDate: "٢٠٢٠ – ٢٠٢٥",
            bsTitle: "بەکالۆریۆس لە زانستی کۆمپیوتەر",
            uni: "زانکۆی جیهان – هەولێر",
            bsDesc: "بەکالۆریۆسم لە زانستی کۆمپیوتەر تەواو کردووە، و لە ماوەی خوێندندا شارەزایی لە پەرەپێدانی نەرمەکاڵا، پەرەپێدانی وێب، بنکەدراوەکان (Databases) و دروستکردنی سیستەمە مۆدێرنەکانی کۆمپیوتەر بەدەست هێناوە.",
            internDate: "٢٠٢٣ – ٢٠٢٤",
            internTitle: "ڕاهێنانی پیشەیی لە IT",
            company: "Dil Technology",
            internDesc: "لە ماوەی ڕاهێنانەکەدا ئەزموونی پراکتیکیم لە پشتگیری تەکنیکی (IT Support)، بەڕێوەبردنی تۆڕ، چارەسەرکردنی کێشەکانی کۆمپیوتەر، دامەزراندن و پاراستنی سیستەمەکان، و یارمەتیدانی بەکارهێنەران بەدەست هێنا."
        },
        languages: {
            title: "زمانەکان",
            heading: "زمان",
            headingHighlight: "ڕێژەی زانین",
            kurdish: "کوردی (سۆرانی-بادینی)",
            english: "ئینگلیزی",
            arabic: "عەرەبی"
        },
        contact: {
            title: "پەیوەندی",
            heading: "ئایا پرۆژەیەکت هەیە؟",
            description: "ئامادەم بۆ دروستکردنی چارەسەری دیجیتاڵی مۆدێرن و پیشەیی بۆ کاروبارە جیاوازەکان.",
            service1Title: "وێبسایتی مۆدێرن",
            service1Desc: "وێبسایتی Responsive بۆ کۆمپانیا و کاروبارەکان",
            service2Title: "ئەپی مۆبایل",
            service2Desc: "ئەپی مۆبایل بۆ Android و iOS",
            service3Title: "سیستەمی POS",
            service3Desc: "بۆ فرۆشگا، مارکێت، پزیشکی، کافێ",
            service4Title: "مێنیوی QR",
            service4Desc: "مێنیوی دیجیتاڵی بۆ ڕێستۆرانت و کافێ",
            service5Title: "بەڕێوەبردنی کاروبار",
            service5Desc: "داشبۆردی تایبەت بۆ فرۆشتن و زانیاری",
            service6Title: "نەرمەکاڵای تایبەت",
            service6Desc: "چارەسەری تایبەت بەپێی پێداویستییەکان",
            ctaHighlight: "بیرۆکەکانت بگۆڕە بۆ سیستەمێکی زیرەک، خێرا و پیشەیی.",
            sendEmail: "واتساپ",
            phone: "ئیمەیڵ"
        },
        footer: {
            copyright: "© 2026 بەسام علی. دیزاین و پەرەسەندن لەلایەن من."
        }
    }
};

// Language and Theme Management
class LanguageThemeManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Language switcher
        const langBtn = document.getElementById('lang-btn');
        const langDropdown = document.getElementById('lang-dropdown');
        const langOptions = document.querySelectorAll('.lang-option');

        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            langDropdown.classList.remove('show');
        });

        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
                langDropdown.classList.remove('show');
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        this.applyLanguage(lang);
        this.updateLangDisplay(lang);
    }

    applyLanguage(lang) {
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];
            keys.forEach(k => {
                value = value[k];
            });
            if (value !== undefined) {
                el.innerHTML = value;
            }
        });

        // Set RTL for Arabic and Kurdish
        const isRTL = lang === 'ar' || lang === 'ku';
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        // Update font based on language
        if (isRTL) {
            document.body.style.fontFamily = lang === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Noto Kufi Arabic', sans-serif";
        } else {
            document.body.style.fontFamily = "'Inter', sans-serif";
        }
    }

    updateLangDisplay(lang) {
        const currentLangSpan = document.getElementById('current-lang');
        const currentLangFlag = document.getElementById('current-lang-flag');
        const langOptions = document.querySelectorAll('.lang-option');
        
        const langFlags = {
            'en': 'https://cdn-icons-png.flaticon.com/128/4009/4009124.png',
            'ar': 'https://cdn-icons-png.flaticon.com/128/16022/16022229.png',
            'ku': 'https://cdn-icons-png.flaticon.com/128/12359/12359942.png'
        };
        
        const langCodes = {
            'en': 'EN',
            'ar': 'AR',
            'ku': 'KU'
        };
        
        currentLangSpan.textContent = langCodes[lang];
        currentLangFlag.src = langFlags[lang];
        
        langOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        this.applyTheme(theme);
    }

    applyTheme(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'light') {
            document.documentElement.classList.add('light-theme');
            icon.className = 'fa-solid fa-sun';
        } else {
            document.documentElement.classList.remove('light-theme');
            icon.className = 'fa-solid fa-moon';
        }
    }
}

// Initialize language and theme manager
const langThemeManager = new LanguageThemeManager();

// Typing Animation for Name
class TypingAnimation {
    constructor() {
        this.typingElement = document.querySelector('.typing-name');
        this.cursorElement = document.querySelector('.typing-cursor');
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;
        this.isTyping = false;
        this.init();
    }

    init() {
        if (this.typingElement) {
            this.startTyping();
        }
    }

    startTyping() {
        const fullName = translations[this.currentLang].hero.fullName;
        this.typeText(fullName);
    }

    typeText(text) {
        if (this.isTyping) return;
        this.isTyping = true;
        
        let i = 0;
        this.typingElement.textContent = '';
        
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                this.typingElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                this.isTyping = false;
            }
        }, this.typingSpeed);
    }

    updateLanguage(newLang) {
        this.currentLang = newLang;
        this.startTyping();
    }
}

// Initialize typing animation
const typingAnimation = new TypingAnimation();

// Override the language change to update typing animation
const originalSetLanguage = langThemeManager.setLanguage.bind(langThemeManager);
langThemeManager.setLanguage = function(lang) {
    originalSetLanguage(lang);
    typingAnimation.updateLanguage(lang);
};

// Mobile menu functionality
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .info-card"
);

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "0.3s";
    });
});
