//FadeIn .fadeIn
$(document).ready(function(){
  $('body').load(function(){
    $('.fadeIn').fadeIn('3000');
  });
});

//FadeIn .fadeIn .btn1 (button)
$(document).ready(function(){
  $('.btn').click(function(){
    $('.fadeIn').fadeIn('3000');
  });
});

//FadeOut .fadeOut .btn2 (button)
$(document).ready(function(){
  $('.btn2').click(function(){
    $('fadeOut').fadeOut('3000');
  });
});
