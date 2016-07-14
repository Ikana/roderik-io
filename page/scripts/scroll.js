var gate = true;

var onScrollFn = debounce(function(evt) {
  var scroll = $(window).scrollTop();

  if((scroll > 100) && gate){
    $('.navbar-inverse').animate({
            backgroundColor: "#000"
    }, 250 );

    gate = false;
  } else if ((scroll < 100) && (!gate)){
    $('.navbar-inverse').animate({
            backgroundColor: "transparent"
    }, 250 );


    gate = true;
  }
}, 25);

window.onscroll = onScrollFn;


$('.nav.navbar-nav li a[href^="#"]').not('.dropdown-toggle')
.not('.dropdown')
.on('click', function(event) {
  var target;
  target = this.hash;

  event.preventDefault();

  var navOffset;
  navOffset = $('#navbar').height();

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset
  }, 300, function() {
    return window.history.pushState(null, null, target);
  });
});

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
