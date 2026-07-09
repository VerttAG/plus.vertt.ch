/**
 * Lightweight placeholder for pages not yet built out (About, B2B Portal,
 * Taxi Operator Portal, Investor Relations). Keeps header/footer nav and
 * links working while those pages are implemented in a later task.
 * The page key is read from <main data-stub="about|b2b|ops|ir">.
 */
(function () {
  var COPY = {
    de: {
      backHome: 'Zur Startseite',
      pages: {
        about: { eyebrow: 'Über uns', title: 'Diese Seite entsteht gerade.', text: 'Mission, Vision, Team und Kontaktformular folgen in Kürze. Bis dahin erreichen Sie uns direkt per E-Mail.', meta: 'Vertt AG — Über uns' },
        b2b: { eyebrow: 'B2B Portal', title: 'Diese Seite entsteht gerade.', text: 'Das vollständige B2B-Portal für Unternehmen, Hotels, Kliniken und institutionelle Kunden folgt in Kürze.', meta: 'Vertt AG — B2B Portal' },
        ops: { eyebrow: 'Taxi-Operatoren Portal', title: 'Diese Seite entsteht gerade.', text: 'Dispatch, Flottenmanagement und das Partner-Formular für Taxi-Operatoren folgen in Kürze.', meta: 'Vertt AG — Taxi-Operatoren Portal' },
        ir: { eyebrow: 'Investor Relations', title: 'Diese Seite entsteht gerade.', text: 'Investment Highlights, strategische Wachstumstreiber und der Investorenbereich folgen in Kürze.', meta: 'Vertt AG — Investor Relations' },
      },
    },
    en: {
      backHome: 'Back to home',
      pages: {
        about: { eyebrow: 'About us', title: 'This page is coming soon.', text: 'Mission, vision, team and contact form will follow shortly. Until then, reach us directly by email.', meta: 'Vertt AG — About us' },
        b2b: { eyebrow: 'B2B Portal', title: 'This page is coming soon.', text: 'The full B2B portal for businesses, hotels, clinics and institutional clients will follow shortly.', meta: 'Vertt AG — B2B Portal' },
        ops: { eyebrow: 'Taxi Operator Portal', title: 'This page is coming soon.', text: 'Dispatch, fleet management and the operator partner form will follow shortly.', meta: 'Vertt AG — Taxi Operator Portal' },
        ir: { eyebrow: 'Investor Relations', title: 'This page is coming soon.', text: 'Investment highlights, strategic growth drivers and the investor area will follow shortly.', meta: 'Vertt AG — Investor Relations' },
      },
    },
  };

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function render(lang) {
    var t = COPY[lang] || COPY.de;
    var key = document.getElementById('app').getAttribute('data-stub');
    var p = t.pages[key];
    document.documentElement.lang = lang;
    document.title = p.meta;

    document.getElementById('app').innerHTML =
      '<section class="stub" id="kontakt"><div class="stub__inner">' +
        '<span class="stub__eyebrow">' + esc(p.eyebrow) + '</span>' +
        '<h1 class="stub__title">' + esc(p.title) + '</h1>' +
        '<p class="stub__text">' + esc(p.text) + '</p>' +
        '<div class="stub__ctas">' +
          '<a href="index.html" class="btn btn--dark">' + esc(t.backHome) + '</a>' +
          '<a href="mailto:hello@vertt.ch" class="btn btn--accent">hello@vertt.ch</a>' +
        '</div>' +
      '</div></section>';
  }

  render(VerttI18n.getLang());
  VerttI18n.onLangChange(render);
})();
