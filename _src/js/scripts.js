$(document).ready(function(){
  

// Adds am active class to navbar links
 $(".navbar-nav a").click(function() {  //use a class, since your ID gets mangled
    $(".navbar-nav a").removeClass("active"); 
    $(this).addClass("active");      //add the class to the clicked element
  });


// Activates owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }
    }
})



//hide box
new WOW().init();

// http://manos.malihu.gr/page-scroll-to-id/
$("a[href*='#top'], a[href*='#section-1'], a[href*='#section-2'],  a[href*='#section-3']").mPageScroll2id({
    offset:30
});



// When resizing the browser window is breaks the responsive owl carousel. This will auto refresh the page to clean things up
var w = 0;
$( window ).load( function(){
    w = $( window ).width();
});

$( window ).resize( function(){
    // wait a second before refreshing the page
    setTimeout( function()
      {
            if( w != $( window ).width() ){
            console.log('window resized..');
            this.location.reload(false);
            w = $( window ).width();
            delete w;
            }
      }, 2000);

});



// End document ready
});