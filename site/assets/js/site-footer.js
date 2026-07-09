/**
 * <site-footer></site-footer>
 * Dark global footer: brand claim, nav/legal/contact columns, copyright bar.
 */
(function () {
  var COPY = {
    de: {
      claim: 'Eine Plattform. Eine Partnerschaft. Alle Wege.',
      navTitle: 'Navigation', legalTitle: 'Rechtliches', contactTitle: 'Kontakt',
      location: 'Zürich, Schweiz', madeIn: 'Entwickelt in der Schweiz',
      nav: ['Startseite', 'Über uns', 'B2B Portal', 'Taxi-Operatoren Portal', 'Investor Relations'],
      legal: ['Impressum', 'AGB', 'Datenschutz'],
    },
    en: {
      claim: 'One platform. One partnership. Every journey.',
      navTitle: 'Navigation', legalTitle: 'Legal', contactTitle: 'Contact',
      location: 'Zurich, Switzerland', madeIn: 'Built in Switzerland',
      nav: ['Home', 'About us', 'B2B Portal', 'Taxi Operator Portal', 'Investor Relations'],
      legal: ['Legal notice', 'Terms', 'Privacy'],
    },
  };
  var HREFS = ['index.html', 'ueber-uns.html', 'b2b-portal.html', 'taxi-operatoren-portal.html', 'investor-relations.html'];

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  class SiteFooterEl extends HTMLElement {
    connectedCallback() {
      this.render();
      VerttI18n.onLangChange(() => this.render());
    }

    render() {
      var lang = VerttI18n.getLang();
      var t = COPY[lang] || COPY.de;
      var navLinks = HREFS.map(function (href, i) { return { href: href, label: t.nav[i] }; });
      var legalLinks = t.legal.map(function (label) { return { href: '#', label: label }; });

      this.innerHTML =
        '<footer class="site-footer">' +
          '<div class="site-footer__inner">' +
            '<div class="site-footer__grid">' +
              '<div class="site-footer__brand">' +
                '<img src="assets/logo/vertt-lockup-white.png" alt="Vertt">' +
                '<p class="site-footer__claim">' + esc(t.claim) + '</p>' +
                '<div class="site-footer__social">' +
                  '<a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg></a>' +
                  '<a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 0 0 2.12-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg></a>' +
                '</div>' +
              '</div>' +
              '<div class="site-footer__col">' +
                '<div class="site-footer__heading">' + esc(t.navTitle) + '</div>' +
                navLinks.map(function (l) { return '<a href="' + l.href + '">' + esc(l.label) + '</a>'; }).join('') +
              '</div>' +
              '<div class="site-footer__col">' +
                '<div class="site-footer__heading">' + esc(t.legalTitle) + '</div>' +
                legalLinks.map(function (l) { return '<a href="' + l.href + '">' + esc(l.label) + '</a>'; }).join('') +
              '</div>' +
              '<div class="site-footer__col">' +
                '<div class="site-footer__heading">' + esc(t.contactTitle) + '</div>' +
                '<a href="mailto:hello@vertt.ch">hello@vertt.ch</a>' +
                '<a href="tel:+41440000000" class="vx-tabular">+41 44 000 00 00</a>' +
                '<span>' + esc(t.location) + '</span>' +
              '</div>' +
            '</div>' +
            '<div class="site-footer__bottom">' +
              '<span>&copy; 2026 Vertt AG. All rights reserved.</span>' +
              '<span class="site-footer__madein"><span class="site-footer__dot"></span>' + esc(t.madeIn) + '</span>' +
            '</div>' +
          '</div>' +
        '</footer>';
    }
  }

  customElements.define('site-footer', SiteFooterEl);
})();
