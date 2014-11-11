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

// set the footnote clicks so they take you back to where you were

var returnTo = '#';
$('.footnote').click(function(){
  returnTo = $(this).attr('id');
  console.log(returnTo);
});

$('.return').click(function(e){
  console.log(returnTo);
  e.preventDefault();
  var scrollReturn = ($('#'+returnTo).parent().offset().top) + 120;
    console.log(scrollReturn);
    $('html, body').scrollTop(scrollReturn);

})


$(document).ready(function(){
	console.log('document is ready');
  // Load FB comments
  if ( $('meta[property="fb:app_id"]').length > 0 )
    add_facebook_comments();
});