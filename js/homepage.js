// Set toggle for expand buttons to 0(off)
let TAOw = 0;
let TAOm = 0;
let S2w = 0;
let S2m = 0;
let S5w = 0;
let S5m = 0;
let MTw = 0;
let MTm = 0;
let NBw = 0;
let NBm = 0;
let BBw = 0;
let BBm = 0;
let DARCw = 0;
let DARCm = 0;

// Temporary Buttons
// $('.general_button').click(function(){
//   console.log("1");
//   console.log("this is " + this);
//   let tabID = $(this).data('location');
//   $('.general_button').removeClass('active');
//   $(this).addClass('active');
//   $('.tab-pane').removeClass('active');
//   $('[data-location-content="' + tabID + '"]').addClass('active');
// });

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

// Togglable button for S2 Women
$('.S2-Women').click(function(){
  let tabID = $(this).data('location');
  $('.S2-Women').removeClass('active');
  $(this).addClass('active');
  if (S2w == 0) {
    $('.exS2-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S2-Women').html("Collapse");
    S2w = 1;
  } else {
    $('.exS2-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S2-Women').html("Expand");
    S2w = 0;
  }
})

// Togglable button for S2 Men
$('.S2-Men').click(function(){
  let tabID = $(this).data('location');
  $('.S2-Men').removeClass('active');
  $(this).addClass('active');
  if (S2m == 0) {
    $('.exS2-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S2-Men').html("Collapse");
    S2m = 1;
  } else {
    $('.exS2-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S2-Men').html("Expand");
    S2m = 0;
  }
})

// Togglable button for S5 Women
$('.S5-Women').click(function(){
  let tabID = $(this).data('location');
  $('.S5-Women').removeClass('active');
  $(this).addClass('active');
  if (S5w == 0) {
    $('.exS5-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S5-Women').html("Collapse");
    S5w = 1;
  } else {
    $('.exS5-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S5-Women').html("Expand");
    S5w = 0;
  }
})

// Togglable button for S5 Men
$('.S5-Men').click(function(){
  let tabID = $(this).data('location');
  $('.S5-Men').removeClass('active');
  $(this).addClass('active');
  if (S5m == 0) {
    $('.exS5-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.S5-Men').html("Collapse");
    S5m = 1;
  } else {
    $('.exS5-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.S5-Men').html("Expand");
    S5m = 0;
  }
})

// Togglable button for MT Women
$('.MT-Women').click(function(){
  let tabID = $(this).data('location');
  $('.MT-Women').removeClass('active');
  $(this).addClass('active');
  if (MTw == 0) {
    $('.exMT-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.MT-Women').html("Collapse");
    MTw = 1;
  } else {
    $('.exMT-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.MT-Women').html("Expand");
    MTw = 0;
  }
})

// Togglable button for MT Men
$('.MT-Men').click(function(){
  let tabID = $(this).data('location');
  $('.MT-Men').removeClass('active');
  $(this).addClass('active');
  if (MTm == 0) {
    $('.exMT-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.MT-Men').html("Collapse");
    MTm = 1;
  } else {
    $('.exMT-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.MT-Men').html("Expand");
    MTm = 0;
  }
})

// Togglable button for NB Women
$('.NB-Women').click(function(){
  let tabID = $(this).data('location');
  $('.NB-Women').removeClass('active');
  $(this).addClass('active');
  if (NBw == 0) {
    $('.exNB-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.NB-Women').html("Collapse");
    NBw = 1;
  } else {
    $('.exNB-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.NB-Women').html("Expand");
    NBw = 0;
  }
})

// Togglable button for NB Men
$('.NB-Men').click(function(){
  let tabID = $(this).data('location');
  $('.NB-Men').removeClass('active');
  $(this).addClass('active');
  if (NBm == 0) {
    $('.exNB-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.NB-Men').html("Collapse");
    NBm = 1;
  } else {
    $('.exNB-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.NB-Men').html("Expand");
    NBm = 0;
  }
})

// Togglable button for BB Women
$('.BB-Women').click(function(){
  let tabID = $(this).data('location');
  $('.BB-Women').removeClass('active');
  $(this).addClass('active');
  if (BBw == 0) {
    $('.exBB-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.BB-Women').html("Collapse");
    BBw = 1;
  } else {
    $('.exBB-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.BB-Women').html("Expand");
    BBw = 0;
  }
})

// Togglable button for BB Men
$('.BB-Men').click(function(){
  let tabID = $(this).data('location');
  $('.BB-Men').removeClass('active');
  $(this).addClass('active');
  if (BBm == 0) {
    $('.exBB-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.BB-Men').html("Collapse");
    BBm = 1;
  } else {
    $('.exBB-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.BB-Men').html("Expand");
    BBm = 0;
  }
})

// Togglable button for DARC Women
$('.DARC-Women').click(function(){
  let tabID = $(this).data('location');
  $('.DARC-Women').removeClass('active');
  $(this).addClass('active');
  if (DARCw == 0) {
    $('.exDARC-Women').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.DARC-Women').html("Collapse");
    DARCw = 1;
  } else {
    $('.exDARC-Women').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.DARC-Women').html("Expand");
    DARCw = 0;
  }
})

// Togglable button for DARC Men
$('.DARC-Men').click(function(){
  let tabID = $(this).data('location');
  $('.DARC-Men').removeClass('active');
  $(this).addClass('active');
  if (DARCm == 0) {
    $('.exDARC-Men').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.DARC-Men').html("Collapse");
    DARCm = 1;
  } else {
    $('.exDARC-Men').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $(this).html("Expand");
    DARCm = 0;
  }
})






// Pin Buttons

// Media Theater Pin
// Defines what happens with the click event 
$(".mediaTheaterPin").click(function(){
// "this" is the thing that is clicked and data is a method that takes the parameter of the location
  let tabID = $(this).data('location');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
  $(".title").html("<p>Media Theater</p>");
})

// Second Stage Bathroom Pin
$(".secondStageBathroomPin").click(function(){
  let tabID = $(this).data('location');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
  $(".title").html("<p>Second Stage Restrooms</p>");
})

// Fifth Stage Bathroom Pin 
$(".fifthStageBathroomPin").click(function(){
  let tabID = $(this).data('location');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
  $(".title").html("<p>Fifth Stage Restrooms</p>");
})

// Theater Arts Offices Pin
$(".theaterArtsOfficesPin").click(function(){
  let tabID = $(this).data('location');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
  $(".title").html("<p>Theater Arts Offices</p>");
})

// N Art Building Pin
$(".nArtBuildingPin").click(function(){
  let tabID = $(this).data('location');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
  $(".title").html("<p>Visual Arts N Building Restrooms</p>");
})

// B Art Building Pin
$(".bArtBuildingPin").click(function(){
  let tabID = $(this).data('location');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
  $(".title").html("<p>Visual Arts B Building Restrooms</p>");
})

// DARC Building Pin
$(".digitalArtsResearchCenterPin").click(function(){
  let tabID = $(this).data('location');
  $('.tab-pane').removeClass('active');
  $('[data-location-content="' + tabID + '"]').addClass('active');
  $(".title").html("<p>Digital Arts Research Center</p>");
})


