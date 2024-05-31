//change the id of the button to general_button
$('.general_button').click(function(){
  let tabID = $(this).data('location');
  $('.general_button').removeClass('active');
  $(this).addClass('active');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
})

//using buttons for specific_button
$('.specific_button').click(function(){
  let tabID = $(this).data('location');
  $('.specific_button').removeClass('active');
  $(this).addClass('active');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
})

