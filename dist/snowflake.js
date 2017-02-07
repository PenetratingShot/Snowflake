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

//Hide .hide
$(document).ready(function(){
  $('.hide').hide();
});

//Show .show .btn3 (button)
$(document).ready(function(){
  $('body').load(function(){
    $('.show').hide();
  });
  $('.btn3').click(function(){
    $('.show').show();
  });
});
