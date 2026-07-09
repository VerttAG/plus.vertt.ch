/**
 * Startseite (home page) content + interactions.
 * Renders the full page body from a DE/EN dictionary so language switches
 * are instant and don't require a reload. The booking widget is a
 * front-end-only lead-capture prototype (see chats/chat1.md) — submitting
 * shows a thank-you state locally, nothing is sent to a backend yet.
 */
(function () {
  var COPY = {
    de: {
      metaTitle: 'Vertt AG — Mobilität, die sich verbindet',
      metaDescription: 'Vertt verbindet Unternehmen, Passagiere, Flotten und Mobilitätspartner über eine digitale Plattform für Buchung, Dispatch und professionelle Mobilität.',
      heroEyebrow: 'Schweizer Mobilitätsplattform',
      heroTitle: 'Mobilität, die sich verbindet.',
      heroSub: 'Vertt verbindet Unternehmen, Passagiere, Flotten und Mobilitätspartner über eine digitale Plattform für Buchung, Dispatch, multimodale Reisen und professionelle Mobilität.',
      ctaBook: 'Fahrt buchen', ctaB2b: 'Vertt für Ihr Unternehmen', ctaMore: 'Mehr über Vertt erfahren',
      heroFacts: [
        { value: 'B2B & B2B2C', label: 'Plattformmodell für professionelle Mobilität' },
        { value: '1 Plattform', label: 'Buchung, Dispatch, Flotte, Reporting, APIs' },
        { value: 'CH · DACH · EU', label: 'Skalierbar über Märkte und Partner' },
      ],
      wNow: 'Sofortfahrt', wLater: 'Vorausbuchung', wNote: 'Schnell. Transparent. Professionell.',
      wPickup: 'Abholort', wPickupPh: 'Bahnhofstrasse 1, Zürich', wDrop: 'Zielort', wDropPh: 'Flughafen Zürich',
      wDate: 'Datum', wTime: 'Uhrzeit', wPax: 'Personen', wCat: 'Kategorie',
      pax: ['1 Person', '2 Personen', '3 Personen', '4+ Personen'], paxDefault: '2 Personen',
      cat: ['Standard', 'Business', 'Van', 'Barrierefrei'], catDefault: 'Business',
      wCompliance: 'Lizenzierte Operatoren. Transparente Preise.',
      wSubmit: 'Fahrt suchen',
      wThanks: 'Vielen Dank für Ihre Anfrage.', wThanksSub: 'Unser Team meldet sich zeitnah bei Ihnen und bestätigt Ihre Fahrt.', wReset: 'Neue Anfrage starten',
      osTitle: 'Das Betriebssystem für professionelle Mobilität.',
      osText: 'Vertt verbindet Buchung, Dispatch, Flottensteuerung, Reporting, APIs und Zahlungsabwicklung in einer digitalen Plattform – für Unternehmen, Operatoren, Fahrer und Passagiere.',
      osLeft: ['Unternehmen', 'Hotels', 'Kliniken', 'Taxi-Operatoren', 'Fahrer'],
      osRight: ['Passagiere', 'Öffentliche Mobilität', 'APIs', 'Payment', 'Reporting'],
      b2bEyebrow: 'Für Unternehmen', b2bTitle: 'Mobilität für Unternehmen und Organisationen',
      b2bText: 'Vertt unterstützt Unternehmen, Hotels, Kliniken, Versicherungen und institutionelle Kunden mit digitalen Lösungen für Buchung, Mobilitätssteuerung, Reporting und Abrechnung.',
      b2bCta: 'B2B Portal entdecken', b2bMockTitle: 'Corporate Mobility Portal',
      b2bStat1: 'Fahrten / Monat', b2bStat2: 'Kosten / Monat', b2bStat3: 'SLA erfüllt',
      b2bRows: [
        { id: 'VT-4821', route: 'Zürich HB → Hauptsitz', status: 'live', statusLabel: 'Unterwegs' },
        { id: 'VT-4820', route: 'Flughafen → Hotel Baur au Lac', status: 'scheduled', statusLabel: 'Geplant' },
        { id: 'VT-4818', route: 'Klinik Hirslanden → Zuhause', status: 'completed', statusLabel: 'Abgeschlossen' },
      ],
      opsEyebrow: 'Für Operatoren', opsTitle: 'Mehr Kontrolle für Taxi-Operatoren und Flotten',
      opsText: 'Vertt unterstützt Taxi-Operatoren mit digitalen Tools für Dispatch, Auftragssteuerung, Fahrer, Flotten und neue B2B-Aufträge.',
      opsCta: 'Taxi-Operatoren Portal entdecken', opsMockTitle: 'Live Dispatch', opsMockTrip: 'Aktive Fahrt', opsMockDest: 'Flughafen',
      opsStats: [
        { value: '24', label: 'Fahrzeuge online' },
        { value: '9', label: 'Aktive Fahrten' },
        { value: '4.2 Min', label: 'Ø Anfahrtszeit' },
      ],
      mmEyebrow: 'Multimodal', mmTitle: 'Alle Wege auf einer Plattform',
      mmText: 'Vertt entwickelt Mobilität weiter: von der einzelnen Fahrt zur vernetzten, multimodalen Reise – über Verkehrsmittel, Anbieter und digitale Kanäle hinweg.',
      journey: [
        { num: '01', title: 'Zuhause', sub: 'Buchung per App, Portal oder API', dot: 'var(--neutral-400)' },
        { num: '02', title: 'ÖV & Bahnhof', sub: 'Anschluss an die öffentliche Mobilität', dot: 'var(--blue-500)' },
        { num: '03', title: 'Vertt Fahrzeug', sub: 'Lizenzierte Operatoren, live disponiert', dot: 'var(--swiss-red)' },
        { num: '04', title: 'Ziel', sub: 'Hotel, Büro, Klinik oder Flughafen', dot: 'var(--green-500)' },
      ],
      mmChips: ['Taxi', 'Ride-Hailing', 'Öffentliche Mobilität', 'Corporate Mobility', 'Hotel Transfers', 'Klinikfahrten', 'API Integrationen', 'Zahlungsanbieter', 'Mobilitätsplattformen'],
      closeTitle: 'Bereit für eine neue Art von Mobilität?',
      closeContact: 'Kontakt aufnehmen', closeB2b: 'B2B Portal entdecken',
    },
    en: {
      metaTitle: 'Vertt AG — Mobility that connects',
      metaDescription: 'Vertt connects businesses, passengers, fleets and mobility partners through one digital platform for booking, dispatch and professional mobility.',
      heroEyebrow: 'Swiss mobility platform',
      heroTitle: 'Mobility that connects.',
      heroSub: 'Vertt connects businesses, passengers, fleets and mobility partners through one digital platform for booking, dispatch, multimodal journeys and professional mobility.',
      ctaBook: 'Book a ride', ctaB2b: 'Vertt for your business', ctaMore: 'Learn more about Vertt',
      heroFacts: [
        { value: 'B2B & B2B2C', label: 'Platform model for professional mobility' },
        { value: '1 platform', label: 'Booking, dispatch, fleet, reporting, APIs' },
        { value: 'CH · DACH · EU', label: 'Built to scale across markets and partners' },
      ],
      wNow: 'Ride now', wLater: 'Pre-book', wNote: 'Fast. Transparent. Professional.',
      wPickup: 'Pickup location', wPickupPh: 'Bahnhofstrasse 1, Zurich', wDrop: 'Destination', wDropPh: 'Zurich Airport',
      wDate: 'Date', wTime: 'Time', wPax: 'Passengers', wCat: 'Category',
      pax: ['1 passenger', '2 passengers', '3 passengers', '4+ passengers'], paxDefault: '2 passengers',
      cat: ['Standard', 'Business', 'Van', 'Accessible'], catDefault: 'Business',
      wCompliance: 'Licensed operators. Transparent pricing.',
      wSubmit: 'Find a ride',
      wThanks: 'Thank you for your request.', wThanksSub: 'Our team will get back to you shortly to confirm your ride.', wReset: 'Start a new request',
      osTitle: 'The operating system for professional mobility.',
      osText: 'Vertt brings booking, dispatch, fleet control, reporting, APIs and payments together on one digital platform — for businesses, operators, drivers and passengers.',
      osLeft: ['Businesses', 'Hotels', 'Clinics', 'Taxi operators', 'Drivers'],
      osRight: ['Passengers', 'Public transport', 'APIs', 'Payments', 'Reporting'],
      b2bEyebrow: 'For businesses', b2bTitle: 'Mobility for businesses and organisations',
      b2bText: 'Vertt supports companies, hotels, clinics, insurers and institutional clients with digital solutions for booking, mobility management, reporting and billing.',
      b2bCta: 'Explore the B2B Portal', b2bMockTitle: 'Corporate mobility portal',
      b2bStat1: 'Trips / month', b2bStat2: 'Spend / month', b2bStat3: 'SLA met',
      b2bRows: [
        { id: 'VT-4821', route: 'Zurich HB → Headquarters', status: 'live', statusLabel: 'En route' },
        { id: 'VT-4820', route: 'Airport → Hotel Baur au Lac', status: 'scheduled', statusLabel: 'Scheduled' },
        { id: 'VT-4818', route: 'Hirslanden Clinic → Home', status: 'completed', statusLabel: 'Completed' },
      ],
      opsEyebrow: 'For operators', opsTitle: 'More control for taxi operators and fleets',
      opsText: 'Vertt supports taxi operators with digital tools for dispatch, order management, drivers, fleets and new B2B demand.',
      opsCta: 'Explore the Operator Portal', opsMockTitle: 'Live dispatch', opsMockTrip: 'Active trip', opsMockDest: 'Airport',
      opsStats: [
        { value: '24', label: 'Vehicles online' },
        { value: '9', label: 'Active trips' },
        { value: '4.2 min', label: 'Avg. pickup time' },
      ],
      mmEyebrow: 'Multimodal', mmTitle: 'Every journey on one platform',
      mmText: 'Vertt takes mobility further: from the single ride to the connected, multimodal journey — across modes, providers and digital channels.',
      journey: [
        { num: '01', title: 'Home', sub: 'Booked via app, portal or API', dot: 'var(--neutral-400)' },
        { num: '02', title: 'Public transport', sub: 'Connected to rail and urban transit', dot: 'var(--blue-500)' },
        { num: '03', title: 'Vertt vehicle', sub: 'Licensed operators, dispatched live', dot: 'var(--swiss-red)' },
        { num: '04', title: 'Destination', sub: 'Hotel, office, clinic or airport', dot: 'var(--green-500)' },
      ],
      mmChips: ['Taxi', 'Ride-hailing', 'Public transport', 'Corporate mobility', 'Hotel transfers', 'Clinic transport', 'API integrations', 'Payment providers', 'Mobility platforms'],
      closeTitle: 'Ready for a new kind of mobility?',
      closeContact: 'Get in touch', closeB2b: 'Explore the B2B Portal',
    },
  };

  var ICON_CHECK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>';
  var ICON_SHIELD = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>';
  var ICON_ARROW = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>';
  var ICON_CHEVRON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>';
  var ICON_UP = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"></path></svg>';

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s == null ? '' : String(s);
    return d.innerHTML;
  }

  var widget = { mode: 'now', sent: false };

  function statCard(label, value, unit, delta, dir) {
    var deltaHtml = '';
    if (delta != null) {
      var cls = dir === 'up' ? 'is-up' : dir === 'down' ? 'is-down' : '';
      deltaHtml =
        '<div class="stat-card__delta-row"><span class="stat-card__delta ' + cls + '">' +
        (dir === 'up' || dir === 'down' ? ICON_UP : '') + esc(delta) + '</span></div>';
    }
    return (
      '<div class="stat-card">' +
        '<div class="stat-card__head"><span class="stat-card__label">' + esc(label) + '</span></div>' +
        '<div class="stat-card__value-row"><span class="stat-card__value">' + esc(value) + '</span>' +
        (unit ? '<span class="stat-card__unit">' + esc(unit) + '</span>' : '') + '</div>' +
        deltaHtml +
      '</div>'
    );
  }

  function statusPill(status, label) {
    var variant = status === 'live' ? 'status-pill--live' : status === 'completed' ? 'status-pill--completed' : 'status-pill--scheduled';
    var pulse = status === 'live' ? '<span class="pulse"></span>' : '';
    return (
      '<span class="status-pill ' + variant + '"><span class="status-pill__dot"><span></span>' + pulse + '</span>' + esc(label) + '</span>'
    );
  }

  function render(lang) {
    var t = COPY[lang] || COPY.de;
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.metaDescription);

    var heroFactsHtml = t.heroFacts.map(function (f) {
      return '<div class="hero__fact"><span class="hero__fact-value">' + esc(f.value) + '</span><span class="hero__fact-label">' + esc(f.label) + '</span></div>';
    }).join('');

    var hero =
      '<section class="hero" data-screen-label="Hero">' +
        '<div class="hero__inner">' +
          '<div class="hero__eyebrow"><span class="hero__eyebrow-dot"><span></span><span></span></span>' + esc(t.heroEyebrow) + '</div>' +
          '<h1 class="hero__title">' + esc(t.heroTitle) + '</h1>' +
          '<p class="hero__sub">' + esc(t.heroSub) + '</p>' +
          '<div class="hero__ctas">' +
            '<a href="#buchen" class="btn btn--accent">' + esc(t.ctaBook) + '</a>' +
            '<a href="b2b-portal.html" class="btn btn--white">' + esc(t.ctaB2b) + '</a>' +
            '<a href="ueber-uns.html" class="btn btn--outline">' + esc(t.ctaMore) + '</a>' +
          '</div>' +
          '<div class="hero__facts">' + heroFactsHtml + '</div>' +
        '</div>' +
      '</section>';

    var widgetInner;
    if (widget.sent) {
      widgetInner =
        '<div class="widget-thanks">' +
          '<span class="widget-thanks__icon">' + ICON_CHECK + '</span>' +
          '<div class="widget-thanks__title">' + esc(t.wThanks) + '</div>' +
          '<p class="widget-thanks__sub">' + esc(t.wThanksSub) + '</p>' +
          '<button type="button" class="widget-thanks__reset" data-action="reset-widget">' + esc(t.wReset) + '</button>' +
        '</div>';
    } else {
      var isNow = widget.mode === 'now';
      widgetInner =
        '<div class="widget-open">' +
          '<div class="widget-toolbar">' +
            '<div class="widget-toggle">' +
              '<button type="button" class="widget-toggle__btn' + (isNow ? ' is-active' : '') + '" data-action="mode-now">' + esc(t.wNow) + '</button>' +
              '<button type="button" class="widget-toggle__btn' + (!isNow ? ' is-active' : '') + '" data-action="mode-later">' + esc(t.wLater) + '</button>' +
            '</div>' +
            '<span class="widget-note">' + esc(t.wNote) + '</span>' +
          '</div>' +
          '<div class="widget-fields">' +
            '<div class="field"><label class="field__label">' + esc(t.wPickup) + '</label><div class="field__control"><input class="field__input" type="text" placeholder="' + esc(t.wPickupPh) + '"></div></div>' +
            '<div class="field"><label class="field__label">' + esc(t.wDrop) + '</label><div class="field__control"><input class="field__input" type="text" placeholder="' + esc(t.wDropPh) + '"></div></div>' +
            '<div class="field"><label class="field__label">' + esc(t.wDate) + '</label><div class="field__control"><input class="field__input" type="date"></div></div>' +
            '<div class="field"><label class="field__label">' + esc(t.wTime) + '</label><div class="field__control"><input class="field__input" type="time"></div></div>' +
            '<div class="field field--select"><label class="field__label">' + esc(t.wPax) + '</label><div class="field__control"><select class="field__select">' +
              t.pax.map(function (p) { return '<option' + (p === t.paxDefault ? ' selected' : '') + '>' + esc(p) + '</option>'; }).join('') +
              '</select>' + ICON_CHEVRON.replace('<svg ', '<svg class="field__select-icon" ') + '</div></div>' +
            '<div class="field field--select"><label class="field__label">' + esc(t.wCat) + '</label><div class="field__control"><select class="field__select">' +
              t.cat.map(function (c) { return '<option' + (c === t.catDefault ? ' selected' : '') + '>' + esc(c) + '</option>'; }).join('') +
              '</select>' + ICON_CHEVRON.replace('<svg ', '<svg class="field__select-icon" ') + '</div></div>' +
          '</div>' +
          '<div class="widget-footer">' +
            '<span class="widget-compliance">' + ICON_SHIELD + esc(t.wCompliance) + '</span>' +
            '<button type="button" class="btn btn--accent btn--submit" data-action="submit-widget">' + esc(t.wSubmit) + ICON_ARROW + '</button>' +
          '</div>' +
        '</div>';
    }
    var widgetSection =
      '<section id="buchen" class="widget-section" data-screen-label="Fahrt-Widget"><div class="widget-card">' + widgetInner + '</div></section>';

    var osLeftHtml = t.osLeft.map(function (n) {
      return '<div class="os-diagram__row"><span class="os-diagram__node">' + esc(n) + '</span><span class="os-diagram__line" data-hide-mobile></span></div>';
    }).join('');
    var osRightHtml = t.osRight.map(function (n) {
      return '<div class="os-diagram__row"><span class="os-diagram__line" data-hide-mobile></span><span class="os-diagram__node">' + esc(n) + '</span></div>';
    }).join('');

    var osSection =
      '<section class="os-section" data-screen-label="Vertt OS"><div class="os-section__inner">' +
        '<div class="section-intro"><span class="section-eyebrow">Vertt OS</span><h2 class="section-title">' + esc(t.osTitle) + '</h2><p class="section-text">' + esc(t.osText) + '</p></div>' +
        '<div class="os-diagram">' +
          '<div class="os-diagram__col">' + osLeftHtml + '</div>' +
          '<div class="os-diagram__badge"><img src="assets/logo/vertt-badge-on-black.png" alt="Vertt OS"><span class="os-diagram__badge-label">Vertt OS</span></div>' +
          '<div class="os-diagram__col">' + osRightHtml + '</div>' +
        '</div>' +
      '</div></section>';

    var b2bStatsHtml =
      statCard(t.b2bStat1, '412', null, '+8%', 'up') +
      statCard(t.b2bStat2, '18’240', 'CHF') +
      statCard(t.b2bStat3, '98.6', '%', '+0.4', 'up');
    var b2bRowsHtml = t.b2bRows.map(function (r) {
      return '<div class="mock-panel__row"><span class="mock-panel__row-id">' + esc(r.id) + '</span><span class="mock-panel__row-route">' + esc(r.route) + '</span>' + statusPill(r.status, r.statusLabel) + '</div>';
    }).join('');

    var b2bTeaser =
      '<section class="teaser" data-screen-label="B2B Teaser"><div class="teaser__inner">' +
        '<div class="teaser__copy">' +
          '<span class="section-eyebrow section-eyebrow--muted">' + esc(t.b2bEyebrow) + '</span>' +
          '<h2 class="section-title section-title--md">' + esc(t.b2bTitle) + '</h2>' +
          '<p class="section-text section-text--narrow">' + esc(t.b2bText) + '</p>' +
          '<a href="b2b-portal.html" class="btn btn--dark">' + esc(t.b2bCta) + ICON_ARROW + '</a>' +
        '</div>' +
        '<div class="mock-panel">' +
          '<div class="mock-panel__head"><span class="mock-panel__title">' + esc(t.b2bMockTitle) + '</span><span class="mock-panel__badge">Vertt OS</span></div>' +
          '<div class="mock-panel__stats">' + b2bStatsHtml + '</div>' +
          '<div class="mock-panel__rows">' + b2bRowsHtml + '</div>' +
        '</div>' +
      '</div></section>';

    var opsStatsHtml = t.opsStats.map(function (s) {
      return '<div class="ops-mock__stat"><span class="ops-mock__stat-value">' + esc(s.value) + '</span><span class="ops-mock__stat-label">' + esc(s.label) + '</span></div>';
    }).join('');

    var opsTeaser =
      '<section class="teaser" data-screen-label="Operator Teaser"><div class="teaser__inner">' +
        '<div class="ops-mock">' +
          '<div class="ops-mock__head"><span class="ops-mock__title">' + esc(t.opsMockTitle) + '</span><span class="ops-mock__live"><span class="ops-mock__live-dot"><span></span><span></span></span>Live</span></div>' +
          '<div class="ops-mock__map">' +
            '<svg viewBox="0 0 400 230" preserveAspectRatio="none">' +
              '<path d="M40 190 L120 150 L150 90 L250 70 L330 40" fill="none" stroke="#DA291C" stroke-width="2.5" stroke-linecap="round"></path>' +
              '<circle cx="40" cy="190" r="5" fill="#FFFFFF"></circle>' +
              '<circle cx="330" cy="40" r="5" fill="#DA291C"></circle>' +
              '<circle cx="205" cy="140" r="4" fill="#1F8A5B"></circle>' +
              '<circle cx="110" cy="60" r="4" fill="#1F8A5B"></circle>' +
              '<circle cx="300" cy="170" r="4" fill="#C77A08"></circle>' +
            '</svg>' +
            '<div class="ops-mock__label"><span class="ops-mock__label-eyebrow">' + esc(t.opsMockTrip) + '</span><span class="ops-mock__label-value">VT-4821 · Zürich HB → ' + esc(t.opsMockDest) + '</span></div>' +
          '</div>' +
          '<div class="ops-mock__stats">' + opsStatsHtml + '</div>' +
        '</div>' +
        '<div class="teaser__copy">' +
          '<span class="section-eyebrow section-eyebrow--muted">' + esc(t.opsEyebrow) + '</span>' +
          '<h2 class="section-title section-title--md">' + esc(t.opsTitle) + '</h2>' +
          '<p class="section-text section-text--narrow">' + esc(t.opsText) + '</p>' +
          '<a href="taxi-operatoren-portal.html" class="btn btn--dark">' + esc(t.opsCta) + ICON_ARROW + '</a>' +
        '</div>' +
      '</div></section>';

    var journeyHtml = t.journey.map(function (step) {
      return (
        '<div class="journey__step"><span class="journey__dot" style="background:' + step.dot + '"></span>' +
        '<span class="journey__num">' + esc(step.num) + '</span>' +
        '<span class="journey__title">' + esc(step.title) + '</span>' +
        '<span class="journey__sub">' + esc(step.sub) + '</span></div>'
      );
    }).join('');
    var chipsHtml = t.mmChips.map(function (c) { return '<span class="chip">' + esc(c) + '</span>'; }).join('');

    var multimodal =
      '<section class="multimodal" data-screen-label="Multimodal"><div class="multimodal__inner">' +
        '<div class="section-intro"><span class="section-eyebrow">' + esc(t.mmEyebrow) + '</span><h2 class="section-title">' + esc(t.mmTitle) + '</h2><p class="section-text">' + esc(t.mmText) + '</p></div>' +
        '<div class="journey">' + journeyHtml + '</div>' +
        '<div class="chips">' + chipsHtml + '</div>' +
      '</div></section>';

    var closing =
      '<section class="closing" data-screen-label="Closing CTA"><div class="closing__inner">' +
        '<h2 class="closing__title">' + esc(t.closeTitle) + '</h2>' +
        '<div class="closing__ctas">' +
          '<a href="ueber-uns.html#kontakt" class="btn btn--accent">' + esc(t.closeContact) + '</a>' +
          '<a href="b2b-portal.html" class="btn btn--white">' + esc(t.closeB2b) + '</a>' +
          '<a href="#buchen" class="btn btn--outline">' + esc(t.ctaBook) + '</a>' +
        '</div>' +
      '</div></section>';

    var app = document.getElementById('app');
    app.innerHTML = hero + widgetSection + osSection + b2bTeaser + opsTeaser + multimodal + closing;

    app.querySelectorAll('[data-action]').forEach(function (el) {
      el.addEventListener('click', function () {
        var action = el.getAttribute('data-action');
        if (action === 'mode-now') widget.mode = 'now';
        if (action === 'mode-later') widget.mode = 'later';
        if (action === 'submit-widget') widget.sent = true;
        if (action === 'reset-widget') widget.sent = false;
        render(VerttI18n.getLang());
      });
    });
  }

  render(VerttI18n.getLang());
  VerttI18n.onLangChange(render);
})();
