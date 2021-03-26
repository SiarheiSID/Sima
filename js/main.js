(function(){

	$('.slider_inner, .news_slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});

	// $('select').styler();

	$('.header_btn-menu').on('click',function(){
		$('.menu ul').slideToggle();

	});

	$('.kitchen-slider_img').fancybox({
		protect: true
	});
	$('.furniture-slider_img').fancybox({
		protect: true
	});







})();


// $(function() {
				
//   var Page = (function() {
    
//     var $navArrows = $( '#nav-arrows' ).hide(),
//         $shadow = $( '#shadow' ).hide(),
//         slicebox = $( '#sb-slider' ).slicebox( {
//           onReady : function() {
            
//             $navArrows.show();
//             $shadow.show();
            
//          },
//           orientation : 'r',
//           cuboidsRandom : true,
//           disperseFactor : 30
//         } ),
        
//         init = function() {
          
//           initEvents();
          
//         },
//         initEvents = function() {
          
//           // add navigation events
//           $navArrows.children( ':first' ).on( 'click', function() {
            
//             slicebox.next();
//             return false;
            
//           } );
          
//           $navArrows.children( ':last' ).on( 'click', function() {
            
//             slicebox.previous();
//             return false;
            
//           } );
          
//         };
    
//     return { init : init };
    
//   })();
  
//   Page.init();
  
// });