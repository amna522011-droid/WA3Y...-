
/* =========================================
   WA3Y - MAIN JAVASCRIPT
   Interactions & Language System
========================================= */


/* ---------- 1. ELEMENTS ---------- */

const languageBtn = document.getElementById("languageBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const html = document.documentElement;
const body = document.body;


/* ---------- 2. LANGUAGE CONTENT ---------- */

const translations = {

    ar: {
        nav: [
            "الرئيسية",
            "اتعلم",
            "المحقق الرقمي",
            "عن المنصة"
        ],

        login: "تسجيل الدخول",

        heroLabel: "✦ مستقبلك الرقمي يبدأ من هنا",
        heroTitle: "عالمك الرقمي...<span>مسؤوليتك!</span>",
        heroDescription:
            "اكتشف عالم الأمن السيبراني، وتعلم إزاي تحمي نفسك وبياناتك وتتعامل بذكاء مع المخاطر الرقمية.",

        startJourney: "ابدأ رحلتك",
        testAwareness: "اختبر وعيك",
        heroNote: "● اتعلم، جرّب، واحمي نفسك.",

        visualCaption: "YOUR DIGITAL IDENTITY",

        awarenessLabel: "كن واعيًا رقميًا",
        awarenessTitle: "خليك دايمًا <span>خطوة قدام</span>",

        features: [
            {
                title: "احمي نفسك",
                description:
                    "اتعلم إزاي تحافظ على حساباتك ومعلوماتك الشخصية."
            },
            {
                title: "فكر بذكاء",
                description:
                    "اكتشف المخاطر الرقمية واعرف إزاي تتعامل معاها."
            },
            {
                title: "خليك واعي",
                description:
                    "افهم تأثير وجودك على الإنترنت واحمي هويتك الرقمية."
            }
        ],

        learningLabel: "رحلة التعلم",
        learningTitle:
            "اكتشف عالم <span>الأمن السيبراني</span>",
        learningDescription:
            "ابدأ من الأساسيات واكتسب مهارات تحميك في العالم الرقمي.",

        courses: [
            {
                level: "مبتدئ",
                title: "أمان كلمات المرور",
                description:
                    "تعلم إنشاء كلمات مرور قوية وحماية حساباتك."
            },
            {
                level: "مبتدئ",
                title: "التصيد الإلكتروني",
                description:
                    "اكتشف الرسائل والروابط المزيفة وتجنب الاحتيال."
            },
            {
                level: "متوسط",
                title: "الخصوصية الرقمية",
                description:
                    "افهم إزاي تحمي بياناتك وهويتك على الإنترنت."
            },
            {
                level: "متوسط",
                title: "الذكاء الاصطناعي والتزييف",
                description:
                    "تعرف على التزييف العميق ومخاطر الذكاء الاصطناعي."
            }
        ],

        startLearning: "ابدأ التعلم ←",
        exploreCourses: "استكشف كل الموضوعات",

        detectiveLabel: "🕵️ تحدي المحقق الرقمي",
        detectiveTitle: "هل تقدر <span>تكتشف الخطر؟</span>",
        detectiveDescription:
            "مش كل حاجة على الإنترنت زي ما بتبان! اختبر مهاراتك واكتشف التهديدات الرقمية من خلال تحديات تفاعلية.",
        startChallenge: "ابدأ التحدي ←",

        suspiciousTitle: "رسالة مشبوهة!",
        suspiciousDescription:
            "تم اكتشاف نشاط غير معتاد في حسابك.",
        suspiciousQuestion: "هل الرسالة آمنة؟",

        journeyLabel: "رحلتك مع WA3Y",
        journeyTitle: "ثلاث خطوات <span>تفرق معاك</span>",

        steps: [
            {
                title: "اكتشف",
                description:
                    "اتعرف على أساسيات الأمن السيبراني والمخاطر الرقمية."
            },
            {
                title: "جرّب",
                description:
                    "اختبر معلوماتك من خلال التحديات والاختبارات."
            },
            {
                title: "اتطور",
                description:
                    "تابع تقدمك واكتسب مهارات جديدة كل يوم."
            }
        ],

        ctaLabel: "مستعد تبدأ؟",
        ctaTitle: "الإنترنت عالم كبير... <span>خليك مستعد ليه.</span>",
        ctaDescription:
            "ابدأ رحلتك مع WA3Y وخلي وعيك الرقمي أول خطوة لحمايتك.",
        ctaButton: "ابدأ رحلتك الآن",

        footerDescription:
            "وعيك هو خط دفاعك الأول في العالم الرقمي.",

        footerHeadings: [
            "روابط سريعة",
            "موضوعاتنا"
        ],

        footerLinks: [
            "الرئيسية",
            "التعلم",
            "المحقق الرقمي",
            "عن المنصة"
        ],

        footerTopics: [
            "أمان كلمات المرور",
            "التصيد الإلكتروني",
            "الخصوصية الرقمية",
            "الذكاء الاصطناعي"
        ],

        copyright: "© 2026 WA3Y. جميع الحقوق محفوظة.",
        slogan: "Think Smart. Stay Safe.",

        menuOpen: "فتح القائمة",
        menuClose: "إغلاق القائمة"
    },


    en: {
        nav: [
            "Home",
            "Learn",
            "Cyber Detective",
            "About"
        ],

        login: "Log In",

        heroLabel: "✦ Your Digital Future Starts Here",
        heroTitle: "Your Digital World...<span>Your Responsibility!</span>",
        heroDescription:
            "Explore cybersecurity and learn how to protect yourself, secure your data, and navigate digital risks with confidence.",

        startJourney: "Start Your Journey",
        testAwareness: "Test Your Awareness",
        heroNote: "● Learn, explore, and stay protected.",

        visualCaption: "YOUR DIGITAL IDENTITY",

        awarenessLabel: "Become Digitally Aware",
        awarenessTitle: "Always Stay <span>One Step Ahead</span>",

        features: [
            {
                title: "Protect Yourself",
                description:
                    "Learn how to keep your accounts and personal information safe."
            },
            {
                title: "Think Smart",
                description:
                    "Recognize digital risks and learn how to handle them."
            },
            {
                title: "Stay Aware",
                description:
                    "Understand your online presence and protect your digital identity."
            }
        ],

        learningLabel: "Your Learning Journey",
        learningTitle:
            "Explore the World of <span>Cybersecurity</span>",
        learningDescription:
            "Start with the basics and build skills that keep you safe online.",

        courses: [
            {
                level: "Beginner",
                title: "Password Security",
                description:
                    "Learn how to create strong passwords and secure your accounts."
            },
            {
                level: "Beginner",
                title: "Phishing & Scams",
                description:
                    "Spot fake messages and suspicious links before they trick you."
            },
            {
                level: "Intermediate",
                title: "Digital Privacy",
                description:
                    "Discover how to protect your personal data and online identity."
            },
            {
                level: "Intermediate",
                title: "AI & Deepfakes",
                description:
                    "Explore deepfakes and understand the risks of artificial intelligence."
            }
        ],

        startLearning: "Start Learning ←",
        exploreCourses: "Explore All Topics",

        detectiveLabel: "🕵️ Cyber Detective Challenge",
        detectiveTitle: "Can You <span>Spot the Threat?</span>",
        detectiveDescription:
            "Not everything online is what it seems! Test your skills and uncover digital threats through interactive challenges.",
        startChallenge: "Start the Challenge ←",

        suspiciousTitle: "Suspicious Message!",
        suspiciousDescription:
            "Unusual activity has been detected on your account.",
        suspiciousQuestion: "Is this message safe?",

        journeyLabel: "Your WA3Y Journey",
        journeyTitle: "Three Steps <span>That Make a Difference</span>",

        steps: [
            {
                title: "Discover",
                description:
                    "Explore cybersecurity basics and understand digital threats."
            },
            {
                title: "Practice",
                description:
                    "Test your knowledge through interactive challenges and quizzes."
            },
            {
                title: "Grow",
                description:
                    "Track your progress and build new digital safety skills."
            }
        ],

        ctaLabel: "Ready to Begin?",
        ctaTitle: "The Internet Is a Big World... <span>Be Ready for It.</span>",
        ctaDescription:
            "Start your journey with WA3Y and make digital awareness your first step toward protection.",
        ctaButton: "Start Your Journey Now",

        footerDescription:
            "Your awareness is your first line of defense in the digital world.",

        footerHeadings: [
            "Quick Links",
            "Our Topics"
        ],

        footerLinks: [
            "Home",
            "Learning",
            "Cyber Detective",
            "About"
        ],

        footerTopics: [
            "Password Security",
            "Phishing & Scams",
            "Digital Privacy",
            "Artificial Intelligence"
        ],

        copyright: "© 2026 WA3Y. All Rights Reserved.",
        slogan: "Think Smart. Stay Safe.",

        menuOpen: "Open Menu",
        menuClose: "Close Menu"
    }

};


/* ---------- 3. LANGUAGE FUNCTIONS ---------- */

function setText(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
        element.innerHTML = value;
    }
}

function setTextList(selector, values) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
        if (values[index] !== undefined) {
            element.textContent = values[index];
        }
    });
}


function changeLanguage(lang) {

    const t = translations[lang];

    if (!t) return;

    // Update document direction and language
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    // Update language button
    languageBtn.textContent = lang === "ar" ? "EN" : "AR";

    // Navigation
    setTextList(".nav-links a", t.nav);
    setText(".login-btn", t.login);

    // Hero
    setText(".hero-label", t.heroLabel);
    setText(".hero h1", t.heroTitle);
    setText(".hero-content > p", t.heroDescription);

    setTextList(
        ".hero-buttons a",
        [t.startJourney, t.testAwareness]
    );

    setText(".hero-note", t.heroNote);
    setText(".visual-caption", t.visualCaption);

    // Awareness section
    setText(".awareness .section-label", t.awarenessLabel);
    setText(".awareness .section-heading h2", t.awarenessTitle);

    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach((card, index) => {
        if (t.features[index]) {
            setTextFromCard(card, "h3", t.features[index].title);
            setTextFromCard(card, "p", t.features[index].description);
        }
    });

    // Learning section
    setText(".learning .section-label", t.learningLabel);
    setText(".learning .section-heading h2", t.learningTitle);
    setText(".learning .section-heading > p", t.learningDescription);

    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach((card, index) => {
        const course = t.courses[index];

        if (!course) return;

        setTextFromCard(card, ".course-level", course.level);
        setTextFromCard(card, "h3", course.title);
        setTextFromCard(card, "p", course.description);
        setTextFromCard(card, "a", t.startLearning);
    });

    setText(".section-action a", t.exploreCourses);

    // Cyber Detective
    setText(".detective-content .section-label", t.detectiveLabel);
    setText(".detective-content h2", t.detectiveTitle);
    setText(".detective-content > p", t.detectiveDescription);
    setText(".detective-content .primary-btn", t.startChallenge);

    setText(".detective-message h3", t.suspiciousTitle);
    setText(".detective-message p", t.suspiciousDescription);
    setText(".message-question", t.suspiciousQuestion);

    // How it works
    setText(".how-it-works .section-label", t.journeyLabel);
    setText(".how-it-works .section-heading h2", t.journeyTitle);

    const stepCards = document.querySelectorAll(".step-card");

    stepCards.forEach((card, index) => {
        if (t.steps[index]) {
            setTextFromCard(card, "h3", t.steps[index].title);
            setTextFromCard(card, "p", t.steps[index].description);
        }
    });

    // Final CTA
    setText(".cta-content .section-label", t.ctaLabel);
    setText(".cta-content h2", t.ctaTitle);
    setText(".cta-content > p", t.ctaDescription);
    setText(".cta-content .primary-btn", t.ctaButton);

    // Footer
    setText(".footer-brand > p", t.footerDescription);

    setTextList(".footer-links h4", t.footerHeadings);

    const footerGroups = document.querySelectorAll(".footer-links");

    if (footerGroups.length >= 2) {
        setTextList(
            ".footer-links:nth-of-type(1) a",
            t.footerLinks
        );

        setTextList(
            ".footer-links:nth-of-type(2) a",
            t.footerTopics
        );
    }

    setText(".footer-bottom p:first-child", t.copyright);
    setText(".footer-bottom p:last-child", t.slogan);

    // Update menu accessibility text
    menuToggle.setAttribute(
        "aria-label",
        navLinks.classList.contains("show") ? t.menuClose : t.menuOpen
    );

    // Close mobile menu after language change
    closeMenu();
}


function setTextFromCard(card, selector, value) {

    const element = card.querySelector(selector);

    if (element) {
        element.innerHTML = value;
    }
}


/* ---------- 4. LANGUAGE BUTTON ---------- */

languageBtn.addEventListener("click", () => {

    const currentLanguage = html.lang;

    const newLanguage =
        currentLanguage === "ar" ? "en" : "ar";

    changeLanguage(newLanguage);

});


/* ---------- 5. MOBILE MENU ---------- */

function openMenu() {

    navLinks.classList.add("show");

    menuToggle.setAttribute("aria-expanded", "true");

    menuToggle.setAttribute(
        "aria-label",
        html.lang === "ar" ? "إغلاق القائمة" : "Close Menu"
    );

    menuToggle.textContent = "✕";
}


function closeMenu() {

    navLinks.classList.remove("show");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
        "aria-label",
        html.lang === "ar" ? "فتح القائمة" : "Open Menu"
    );

    menuToggle.textContent = "☰";
}


menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.contains("show");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

});


/* ---------- 6. CLOSE MENU ON LINK CLICK ---------- */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        closeMenu();
    });

});


/* ---------- 7. CLOSE MENU ON OUTSIDE CLICK ---------- */

document.addEventListener("click", event => {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }

});


/* ---------- 8. CLOSE MENU WITH ESCAPE ---------- */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeMenu();
    }

});


/* ---------- 9. ACTIVE NAVIGATION LINK ---------- */

const sections = document.querySelectorAll(
    "main section[id]"
);

const navItems = document.querySelectorAll(
    ".nav-links a"
);

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);


/* ---------- 10. INITIALIZE WEBSITE ---------- */

document.addEventListener("DOMContentLoaded", () => {

    changeLanguage("ar");

    updateActiveLink();

    console.log("WA3Y website initialized successfully.");

});
