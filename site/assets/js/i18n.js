/**
 * Shared language state for the Vertt site.
 * Pages and the site-header/site-footer components all read/write through
 * this module so a language switch anywhere updates every mounted piece
 * without a full page reload.
 */
(function () {
  var STORAGE_KEY = 'vertt-lang';
  var listeners = [];

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'de';
    } catch (e) {
      return 'de';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    listeners.forEach(function (fn) {
      fn(lang);
    });
  }

  function onLangChange(fn) {
    listeners.push(fn);
  }

  window.VerttI18n = { getLang: getLang, setLang: setLang, onLangChange: onLangChange };
})();
