/* scroll to a div with the ID "scrollToThis" by clicking a link with the class "scrollLink" */
$('.scrollLink1').click( function() {
     $('html, body').animate({
          scrollTop: $('#contact').offset().top
     }, 400);
});

$('.scrollLink2').click( function() {
     $('html, body').animate({
          scrollTop: $('#portfolio').offset().top
     }, 300);
});

$('.scrollLink3').click( function() {
     $('html, body').animate({
          scrollTop: $('#about').offset().top
     }, 400);
});

/* scroll to the top of the page */
if ($('.scrollToTop')[0]){
     $('.scrollToTop').click(function(){
          $('html,body').animate({ scrollTop: 0 }, 400);
     });
}