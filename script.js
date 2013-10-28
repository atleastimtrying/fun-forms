$(function(){
  // Dependent select
  $('.dependent-select .selectee').hide()
  $('.dependent-select .film').change(function(){
    var opt = $(this).find('option:selected');
    $('.dependent-select .selectee').hide().val('');
    $('.' + opt.data('dependent')).fadeIn();
  });

  //stars
  $('.stars input').on('change', function(){
    $('.stars')
    .removeClass('star1 star2 star3 star4 star5')
    .addClass($(this).val());
  });

  // state buttons
  $('[data-type=statebutton]').each(function(){
    var states = $(this).data('states').split(',');
    var current = 0;
    $(this).click(function(){
      this.className = 'statebutton';
      if(current == states.length -1){
          current = -1;
      }
      current += 1;
      state = states[current];
      $(this).addClass(state);
      $(this).find('input').val(state);
    });
  });
});