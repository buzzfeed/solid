//show modal
$('.js-trigger-modal').click(function(){
  $('body').addClass('js-show-modal');
});

//hide modal if click on X button
$('.js-hide-modal').click(function(){
  $('body').removeClass('js-show-modal');
});

//hide modal if click outside of modal
$('.modal').click(function(){
  $('body').removeClass('js-show-modal');
});

//hide modal if click outside of modal
$('.modal__content').click(function(event){
  event.stopPropagation();
});

