/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var gallery = [
    '../../00-shared/img/bell.svg',
    '../../00-shared/img/clock.svg',
    '../../00-shared/img/compass.svg',
    '../../00-shared/img/lemon.svg',
    '../../00-shared/img/map.svg',
  ];

  let i = 0;

  document.querySelector('#next').onclick = () => {
    i++;
    if (i === gallery.length) {
      i = 0;
    }
    document.querySelector('img').setAttribute('src', gallery[i]);
  };
})();
