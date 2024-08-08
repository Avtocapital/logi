/**
* Template Name: Logis
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

//language switcher 

const translations = {
  en: {
      "home": "Home",
      "about": "About",
      "contact": "Contact",
      "welcome": "Welcome to MA GLOBAL GROUP",
      "description": "We provide reliable cargo transportation services.",
      "about_description": "Details about the company's main activities.",
      "name": "Name:",
      "email": "Email:",
      "message": "Message:",
      "subject": "Subject",
      "send": "Send",
      "order-btn" : "Act to call",
      "export-import": "Export import",
      "inter-logistic": "International logistics",
      "brand-distribution": "Distribution differnet brands",
      "export-desc": "grains and legumes, equipment, building materials",
      "logist-desc" : "trucks, car transporters, railway, sea transportation and air",
      "distribut-desc": "cosmetics, cereal brands",
      "about-desc" : "MA GLOBAL GROUP provides a wide range of services in the field of freight transportation, customs clearance and cargo handling.By providing strategic supply chain management, we increase our customers' competitiveness by making their logistics as efficient as possible.",
      "Our-services" : "Our services",
      "Our-desc": "Services provided by our company",
      "order-text": "Submit your application",
      "order-desc": "Send us a request and get a consultation",
      "faq-title": "FAQ",
      "contact-title": "Contact us",
      "contact-desc": "Contact with us"
  },
  ru: {
      "home": "Главная",
      "about": "О нас",
      "contact": "Контакты",
      "welcome": "Добро пожаловать в MA GLOBAL GROUP",
      "description": "Мы предоставляем надежные услуги по грузоперевозкам.",
      "about_description": "Подробности о основной деятельности компании.",
      "name": "Имя:",
      "email": "Электронная почта:",
      "message": "Сообщение:",
      "subject": "Тема",
      "send": "Отправить",
      "order-btn" : "Оставить заявку",
      "export-import": "Экспорт импорт",
      "inter-logistic": "Международная логистика",
      "brand-distribution": "Дистрибутор разных брендов",
      "export-desc": "зерновые и бобовые культуры, оборудование, строительные материалы",
      "logist-desc" : "фуры, автовозы, ж/д, морская перевозка и авиа",
      "distribut-desc": "косметика, зерновых брендов",
      "about-desc" : "MA GLOBAL GROUP оказывает широкий спектр услуг в области грузовых перевозок, таможенного оформления и обработки грузов.Обеспечивая стратегическое управление цепочками поставок, мы повышаем конкурентоспособность наших клиентов, делая их логистику максимально эффективной.",
      "Our-services" : "Наши услуги",
      "Our-desc": "Услуги которые предоставляет наша компания",
      "order-text": "Оставить заявку",
      "order-desc": "Отправьте нам запрос и получите консультацию",
      "faq-title": "Часто задаваемые вопросы",
      "contact-title": "Свяжитесь с нами",
      "contact-desc": "Свяжитесь с нами"
  },
  uz: {
      "home": "Bosh sahifa",
      "about": "Biz haqimizda",
      "contact": "Aloqa",
      "welcome": "MA GLOBAL GROUP ga xush kelibsiz",
      "description": "Biz ishonchli yuk tashish xizmatlarini taqdim etamiz.",
      "about_description": "Kompaniyaning asosiy faoliyati haqida batafsil ma'lumot.",
      "name": "Ism:",
      "email": "Elektron pochta:",
      "message": "Xabar:",
      "subject": "Mavzu",
      "send": "Yuborish",
      "order-btn" : "Ariza yuborish",
      "export-import": "Eksport import",
      "inter-logistic": "Xalqaro logistika",
      "brand-distribution": "Turli brendlar distributori",
      "export-desc": "don va dukkakli ekinlar, asbob-uskunalar, qurilish materiallari",
      "logist-desc" : "yuk mashinalari, avtomobil tashuvchilar, temir yo'l, dengiz transporti va havo yo'llari",
      "distribut-desc": "kosmetika, donli brendlar",
      "about-desc" : "MA GLOBAL GROUP yuk tashish, bojxona rasmiylashtiruvi va yuklarni tashish sohasida keng ko'lamli xizmatlarni taqdim etadi.Ta'minot zanjiri strategik boshqaruvini ta'minlash orqali biz mijozlarimizning logistikasini iloji boricha samarali qilish orqali ularning raqobatbardoshligini oshiramiz.",
      "Our-services" : "Bizning xizmatlarimiz",
      "Our-desc": "Kompaniyamiz tomonidan taqdim etiladigan xizmatlar",
      "order-text": "Ariza qoldirish",
      "order-desc": "Bizga so'rov yuboring va maslahat oling",
      "faq-title": "Ko'p so'raladigan savollar",
      "contact-title": "Biz bilan bog'laning",
      "contact-desc": "Biz bilan bog'laning"
  }
};

function changeLanguage(language) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = translations[language][key];
  });
}

// Устанавливаем язык по умолчанию
changeLanguage('en');

