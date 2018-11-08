import $ from 'jquery';

// Delay link redirect
// const delayRedirect = (url) => {
//   setTimeout(() => window.location = url, 2000);
// };

// const mobile = window.matchMedia('(max-width: 769px)');

$(document).ready(() => {
  const desktop = window.matchMedia('(min-width: 48em)');

  $('.item-content_wrap-link').click((e) => {
    e.preventDefault();
    // e.currentTarget.href = delayRedirect(e.currentTarget.href);
    if (desktop.matches) {
      const block = document.querySelector('.hero-animation');
      const blockLines = document.querySelectorAll('.hero-animation_item');
      
      block.style.display = 'block';

      const DELAY = 150;

      for (let i = 0; i < blockLines.length; i++) {
        blockLines[i].classList.add('hero-animation_item--animated');

        if (i) {
          blockLines[i].style.animationDelay = `${DELAY * i}ms`;
        }
      }
    } else {
      $('.item-content_circle-bg').addClass('circle-animation');
      $('.hero_control').addClass('opacity-animation');
      setTimeout(() => $('.item-content_circle-bg').removeClass('circle-animation') && $('.hero_control').removeClass('opacity-animation'), 3000);
    }
  });
});