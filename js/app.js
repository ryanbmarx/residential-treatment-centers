var add_facebook_comments = function() {
  $("#fb-comments").empty();
  var disclaimer = '<div class="fb-comment-disclaimer">The Tribune is using Facebook comments on stories. To post a comment, log into Facebook and then add your comment. To report spam or abuse, click the "X" in the upper right corner of the comment box. In certain circumstances, we will take down entire comment boards. Our commenting guidelines can be found <a href="http://www.chicagotribune.com/about/chi-discussions-faq,0,980840.htmlstory">here &#187;</a>.</div>';
  var width = $('#fb-comments').width();
  if ( $(window).width() <= 680 )
    width = $(window).width() - 40;
  var fbml = disclaimer + '<fb:comments href="' +
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '" num_posts="10" width="' + width + '"></fb:comments>';
  $("#fb-comments").append(fbml);
};


  //  (function($) {
  //    $.fn.equalHeights = function(minHeight, maxHeight) {
  //     tallest = (minHeight) ? minHeight : 0;
  //     this.each(function() {
  //      if($(this).height() > tallest) {
  //       tallest = $(this).height();
  //     }
  //   });
  //     if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
  //     return this.each(function() {
  //      $(this).height(tallest).css("overflow","auto");
  //    });
  //   }
  // })(jQuery);



$(document).ready(function(){
	$('.promo-panel').matchHeight();
  // Load FB comments
  if ( $('meta[property="fb:app_id"]').length > 0 )
    add_facebook_comments();
});