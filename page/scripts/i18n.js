import jqueryI18next from 'jquery-i18next'
import i18next from 'i18next';

$('.dropdown-menu a').click(function(){

  let lang = this.innerHTML.toLowerCase();

  i18next.changeLanguage(lang, (err, t) => {
    $(".i18n").localize();
  });

  if(lang === 'en'){
    $('.dropdown-menu .first').html('ES');
    $('.dropdown-menu .second').html('DE');
  } else if(lang === 'es'){
    $('.dropdown-menu .first').html('EN');
    $('.dropdown-menu .second').html('DE');
  } else if(lang === 'de'){
    $('.dropdown-menu .first').html('ES');
    $('.dropdown-menu .second').html('EN');
  }

});

import es from './locales/es.js';
import en from './locales/en.js';
console.log(es);

i18next.init({
  lng: 'es',
  resources: {
    es: es,
    en: en,
    de: {
      translation: {
        nav: {
          lang : 'DE'
        }
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  const hw = i18next.t('key'); // hw = 'hello world'

  jqueryI18next.init(i18next, $, {
    tName: 't', // --> appends $.t = i18next.t
    i18nName: 'i18n', // --> appends $.i18n = i18next
    handleName: 'localize', // --> appends $(selector).localize(opts);
    selectorAttr: 'data-i18n', // selector for translating elements
    targetAttr: 'i18n-target', // data-() attribute to grab target element to translate (if diffrent then itself)
    optionsAttr: 'i18n-options', // data-() attribute that contains options, will load/set if useOptionsAttr = true
    useOptionsAttr: false, // see optionsAttr
    parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text
  });

  $(".i18n").localize();
});
