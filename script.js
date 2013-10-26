$(function(){
  $('button').click(function(){
    $(this).parents('section')[0].className = this.className
  });
});