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

$(document).ready(function(){
  $('.footnote').click(function(e){
    e.preventDefault();
    var clickedOn = $(this).attr('href');
    if ($(window).width()>767){
    var goTo = $(clickedOn).offset().top-55;
  } else {
    var goTo = $(clickedOn).offset().top-15;
  }
    $("body").scrollTop(goTo);
  });

  $('a.return').click(function(e){
    e.preventDefault();
    var clickedOn = $(this).attr('href');
        var clickedOn = $(this).attr('href');
        console.log(clickedOn);
        var goTo = $(clickedOn).offset().top-100;
      $("body").scrollTop(goTo);
  });

	$("a[data-mh*='promo'] div").matchHeight();
  $(window).resize(function(){
    $("a[data-mh*='promo'] div").matchHeight();
  })
  // Load FB comments
  if ( $('meta[property="fb:app_id"]').length > 0 )
    add_facebook_comments();
});