/**
 * <site-header active="home|about|b2b|ops|ir"></site-header>
 * Sticky global nav: logo, primary links, DE/EN switch, contact CTA and a
 * fullscreen hamburger menu with links to every page.
 */
(function () {
  var COPY = {
    de: {
      home: 'Startseite', about: 'Über uns', contact: 'Kontakt aufnehmen', contactShort: 'Kontakt',
      menu: 'Menü öffnen', close: 'Menü schliessen', menuEyebrow: 'Navigation',
      imprint: 'Impressum', privacy: 'Datenschutz',
      links: ['Startseite', 'Über uns', 'B2B Portal', 'Taxi-Operatoren Portal', 'Investor Relations'],
    },
    en: {
      home: 'Home', about: 'About us', contact: 'Get in touch', contactShort: 'Contact',
      menu: 'Open menu', close: 'Close menu', menuEyebrow: 'Navigation',
      imprint: 'Legal notice', privacy: 'Privacy',
      links: ['Home', 'About us', 'B2B Portal', 'Taxi Operator Portal', 'Investor Relations'],
    },
  };
  var HREFS = ['index.html', 'ueber-uns.html', 'b2b-portal.html', 'taxi-operatoren-portal.html', 'investor-relations.html'];

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  class SiteHeaderEl extends HTMLElement {
    connectedCallback() {
      this.menuOpen = false;
      this.active = this.getAttribute('active') || '';
      this.render();
      VerttI18n.onLangChange(() => this.render());
    }

    render() {
      var lang = VerttI18n.getLang();
      var t = COPY[lang] || COPY.de;
      var menuLinks = HREFS.map(function (href, i) {
        return { href: href, label: t.links[i], num: '0' + (i + 1) };
      });

      this.innerHTML =
        '<header class="site-header">' +
          '<a href="index.html" class="site-header__logo"><img src="assets/logo/vertt-lockup-white.png" alt="Vertt"></a>' +
          '<nav class="site-header__nav" data-hide-mobile>' +
            '<a href="index.html" class="site-header__link">' + (this.active === 'home' ? '<span class="site-header__dot"></span>' : '') + esc(t.home) + '</a>' +
            '<a href="ueber-uns.html" class="site-header__link">' + (this.active === 'about' ? '<span class="site-header__dot"></span>' : '') + esc(t.about) + '</a>' +
          '</nav>' +
          '<div class="site-header__actions">' +
            '<div class="lang-switch">' +
              '<button type="button" class="lang-switch__btn' + (lang === 'de' ? ' is-active' : '') + '" data-lang="de" aria-label="Deutsch">DE</button>' +
              '<span class="lang-switch__sep">/</span>' +
              '<button type="button" class="lang-switch__btn' + (lang === 'en' ? ' is-active' : '') + '" data-lang="en" aria-label="English">EN</button>' +
            '</div>' +
            '<a href="ueber-uns.html#kontakt" class="btn btn--accent" data-hide-mobile>' + esc(t.contact) + '</a>' +
            '<button type="button" class="hamburger" aria-label="' + esc(t.menu) + '">' +
              '<span></span><span></span>' +
            '</button>' +
          '</div>' +
        '</header>' +
        '<div class="mobile-menu' + (this.menuOpen ? ' is-open' : '') + '">' +
          '<div class="mobile-menu__bar">' +
            '<img src="assets/logo/vertt-lockup-white.png" alt="Vertt">' +
            '<button type="button" class="mobile-menu__close" aria-label="' + esc(t.close) + '">&times;</button>' +
          '</div>' +
          '<div class="mobile-menu__body">' +
            '<div class="mobile-menu__eyebrow">' + esc(t.menuEyebrow) + '</div>' +
            '<nav class="mobile-menu__links">' +
              menuLinks.map(function (link) {
                return '<a href="' + link.href + '" class="mobile-menu__link"><span class="mobile-menu__num">' + link.num + '</span>' + esc(link.label) + '</a>';
              }).join('') +
            '</nav>' +
            '<div class="mobile-menu__foot">' +
              '<a href="ueber-uns.html#kontakt">' + esc(t.contactShort) + '</a>' +
              '<a href="#">' + esc(t.imprint) + '</a>' +
              '<a href="#">' + esc(t.privacy) + '</a>' +
            '</div>' +
          '</div>' +
        '</div>';

      var self = this;
      this.querySelectorAll('[data-lang]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          VerttI18n.setLang(btn.getAttribute('data-lang'));
        });
      });
      this.querySelector('.hamburger').addEventListener('click', function () {
        self.toggleMenu();
      });
      this.querySelector('.mobile-menu__close').addEventListener('click', function () {
        self.toggleMenu();
      });
      this.querySelectorAll('.mobile-menu__link').forEach(function (a) {
        a.addEventListener('click', function () {
          self.menuOpen = false;
          self.querySelector('.mobile-menu').classList.remove('is-open');
        });
      });
    }

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.querySelector('.mobile-menu').classList.toggle('is-open', this.menuOpen);
    }
  }

  customElements.define('site-header', SiteHeaderEl);
})();
