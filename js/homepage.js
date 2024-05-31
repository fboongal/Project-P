//change the id of the button to general_button
$('.general_button').click(function(){
  let tabID = $(this).data('location');
  $('.general_button').removeClass('active');
  $(this).addClass('active');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
})

let TAOw = 0;
let TAOm = 0;

// Togglable button for TAO Women Tab
$('.TAO-Women').click(function(){
  let tabID = $(this).data('location');
  $('.TAO-Women').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exTAO-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.TAO-Women').html("Collapse");
    TAOw = 1;
  } else {
    $('.exTAO-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.TAO-Women').html("Expand");
    TAOw = 0;
  }
})

// Togglable button for TAO Men Tab
$('.TAO-Men').click(function(){
  let tabID = $(this).data('location');
  $('.TAO-Men').removeClass('active');
  $(this).addClass('active');
  if (TAOm == 0) {
    $('.exTAO-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.TAO-Men').html("Collapse");
    TAOm = 1;
  } else {
    $('.exTAO-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.TAO-Men').html("Expand");
    TAOm = 0;
  }
})

//Togglable button for S2 Women
$('.S2-Women').click(function(){
  let tabID = $(this).data('location');
  $('.S2-Women').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exS2-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S2-Women').html("Collapse");
    TAOw = 1;
  } else {
    $('.exS2-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S2-Women').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for S2 Men
$('.S2-Men').click(function(){
  let tabID = $(this).data('location');
  $('.S2-Men').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exS2-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S2-Men').html("Collapse");
    TAOw = 1;
  } else {
    $('.exS2-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S2-Men').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for S5 Women
$('.S5-Women').click(function(){
  let tabID = $(this).data('location');
  $('.S5-Women').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exS5-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S5-Women').html("Collapse");
    TAOw = 1;
  } else {
    $('.exS5-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S5-Women').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for S5 Men
$('.S5-Men').click(function(){
  let tabID = $(this).data('location');
  $('.S5-Men').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exS5-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S5-Men').html("Collapse");
    TAOw = 1;
  } else {
    $('.exS5-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S5-Men').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for MT Women
$('.MT-Women').click(function(){
  let tabID = $(this).data('location');
  $('.MT-Women').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exMT-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.MT-Women').html("Collapse");
    TAOw = 1;
  } else {
    $('.exMT-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.MT-Women').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for MT Men
$('.MT-Men').click(function(){
  let tabID = $(this).data('location');
  $('.MT-Men').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exMT-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.MT-Men').html("Collapse");
    TAOw = 1;
  } else {
    $('.exMT-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.MT-Men').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for NB Women
$('.NB-Women').click(function(){
  let tabID = $(this).data('location');
  $('.NB-Women').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exNB-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.NB-Women').html("Collapse");
    TAOw = 1;
  } else {
    $('.exNB-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.NB-Women').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for NB Men
$('.NB-Men').click(function(){
  let tabID = $(this).data('location');
  $('.NB-Men').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exNB-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.NB-Men').html("Collapse");
    TAOw = 1;
  } else {
    $('.exNB-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.NB-Men').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for BB Women
$('.BB-Women').click(function(){
  let tabID = $(this).data('location');
  $('.BB-Women').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exBB-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.BB-Women').html("Collapse");
    TAOw = 1;
  } else {
    $('.exBB-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.BB-Women').html("Expand");
    TAOw = 0;
  }
})

//Togglable button for BB Men
$('.BB-Men').click(function(){
  let tabID = $(this).data('location');
  $('.BB-Men').removeClass('active');
  $(this).addClass('active');
  if (TAOw == 0) {
    $('.exBB-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.BB-Men').html("Collapse");
    TAOw = 1;
  } else {
    $('.exBB-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.BB-Men').html("Expand");
    TAOw = 0;
  }
})