$(window).scroll(function() {
  designsVidScroll();
});

$(document).ready(function() {
  var toggleStatus = 0;
  $('.mobile-nav-toggle').click(function() {
    if (toggleStatus == 0) {
      $('.mobile-nav').addClass('is-open');
      toggleStatus = 1;
    } else if (toggleStatus == 1) {
      $('.mobile-nav').removeClass('is-open');
      toggleStatus = 0;
    }
  });
});

function designsVidScroll() {
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
}


$(document).ready(function() {
  var scrollLink = $('.scroll')
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  })

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })
});
