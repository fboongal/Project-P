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
let BBag = 0;
let DARCw = 0;
let DARCm = 0;
let DARCag = 0;

// audio for background
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    //const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
      audio.volume = 0.5;
      audio.play().catch(error => {
        console.log('Error:', error);
      });
  });
});
/* audio references

https://freesound.org/people/PNMCarrieRailfan/sounds/682417/
https://freesound.org/people/bankfraudd/sounds/145103/
https://freesound.org/people/ycbcr/sounds/249583/
*/

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
$('.BB-AG').click(function(){
  let tabID = $(this).data('location');
  $('.BB-AG').removeClass('active');
  $(this).addClass('active');
  if (BBag == 0) {
    $('.exBB-AG').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.BB-AG').html("Collapse");
    BBag = 1;
  } else {
    $('.exBB-AG').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $('.BB-AG').html("Expand");
    BBag = 0;
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

// Togglable button for DARC All-Gender
$('.DARC-AG').click(function(){
  let tabID = $(this).data('location');
  $('.DARC-AG').removeClass('active');
  $(this).addClass('active');
  if (DARCag == 0) {
    $('.exDARC-AG').removeClass('hidden');
    $('[data-location-content="' + tabID + '"]').addClass('active');
    $('.DARC-AG').html("Collapse");
    DARCag = 1;
  } else {
    $('.exDARC-AG').addClass('hidden');
    $('[data-location-content="' + tabID + '"]').removeClass('active');
    $(this).html("Expand");
    DARCag = 0;
  }
})











// Pin Buttons

// Media Theater Pin
// Defines what happens with the click event 
$(document).ready(function() {
  $(".mediaTheaterPin").click(function() {
      let tabID = $(this).data('location');
      let tabContent = $('[data-location-content="' + tabID + '"]');

    const audioFiles = ["./js/audio/sink1.m4a", "./js/audio/sink2.m4a", "./js/audio/sink3.m4a", "./js/audio/papertowel.m4a" , "./js/audio/shart.wav", "./js/audio/fart.wav", "./js/audio/fart2.mp3"];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio (audioFiles[randomIndex]);
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Error:', error);
    });

      if (tabContent.hasClass('active')) {
          tabContent.removeClass('active');
          $(".title").html("<p>Click a Pin!</p>");
      } else {
          $('.tab-pane').removeClass('active');
          tabContent.addClass('active');
          $(".title").html("<p>Media Theater</p>");
      }
  });
});

// Second Stage Bathroom Pin
$(document).ready(function() {
  $(".secondStageBathroomPin").click(function(){
    let tabID = $(this).data('location');
    let tabContent = $('[data-location-content="' + tabID + '"]');
    
    const audioFiles = ["./js/audio/sink1.m4a", "./js/audio/sink2.m4a", "./js/audio/sink3.m4a", "./js/audio/papertowel.m4a" , "./js/audio/shart.wav", "./js/audio/fart.wav", "./js/audio/fart2.mp3"];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio (audioFiles[randomIndex]);
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Error:', error);
    });

    if (tabContent.hasClass('active')) {
        tabContent.removeClass('active');
        $(".title").html("<p>Click a Pin!</p>");
    } else {
      $('.tab-pane').removeClass('active');
      tabContent.addClass('active');
      $(".title").html("<p>Second Stage Restrooms</p>");
    }
  });
});

// Fifth Stage Bathroom Pin 
$(document).ready(function() {
  $(".fifthStageBathroomPin").click(function(){
    let tabID = $(this).data('location');
    let tabContent = $('[data-location-content="' + tabID + '"]');
    
    const audioFiles = ["./js/audio/sink1.m4a", "./js/audio/sink2.m4a", "./js/audio/sink3.m4a", "./js/audio/papertowel.m4a" , "./js/audio/shart.wav", "./js/audio/fart.wav", "./js/audio/fart2.mp3"];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio (audioFiles[randomIndex]);
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Error:', error);
    });
    
    if (tabContent.hasClass('active')) {
        tabContent.removeClass('active');
        $(".title").html("<p>Click a Pin!</p>");
    } else {
      $('.tab-pane').removeClass('active');
      tabContent.addClass('active');
      $(".title").html("<p>Fifth Stage Restrooms</p>");
    }
  });
});

// Theater Arts Offices Pin
$(document).ready(function() {
  $(".theaterArtsOfficesPin").click(function(){
    let tabID = $(this).data('location');
    let tabContent = $('[data-location-content="' + tabID + '"]');

    
    const audioFiles = ["./js/audio/sink1.m4a", "./js/audio/sink2.m4a", "./js/audio/sink3.m4a", "./js/audio/papertowel.m4a" , "./js/audio/shart.wav", "./js/audio/fart.wav", "./js/audio/fart2.mp3"];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio (audioFiles[randomIndex]);
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Error:', error);
    });
    

    if (tabContent.hasClass('active')) {
        tabContent.removeClass('active');
        $(".title").html("<p>Click a Pin!</p>");
    } else {
      $('.tab-pane').removeClass('active');
      tabContent.addClass('active');
      $(".title").html("<p>Theater Arts Offices</p>");
    }
  });
});

// N Art Building Pin
$(document).ready(function() {
  $(".nArtBuildingPin").click(function(){
    let tabID = $(this).data('location');
    let tabContent = $('[data-location-content="' + tabID + '"]');

    
    const audioFiles = ["./js/audio/sink1.m4a", "./js/audio/sink2.m4a", "./js/audio/sink3.m4a", "./js/audio/papertowel.m4a" , "./js/audio/shart.wav", "./js/audio/fart.wav", "./js/audio/fart2.mp3"];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio (audioFiles[randomIndex]);
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Error:', error);
    });
    

    if (tabContent.hasClass('active')) {
        tabContent.removeClass('active');
        $(".title").html("<p>Click a Pin!</p>");
    } else {
      $('.tab-pane').removeClass('active');
      tabContent.addClass('active');
      $(".title").html("<p>Visual Arts N Building Restrooms</p>");
    }
  });
});


// B Art Building Pin
$(document).ready(function() {
  $(".bArtBuildingPin").click(function(){
    let tabID = $(this).data('location');
    let tabContent = $('[data-location-content="' + tabID + '"]');

    
    const audioFiles = ["./js/audio/sink1.m4a", "./js/audio/sink2.m4a", "./js/audio/sink3.m4a", "./js/audio/papertowel.m4a" , "./js/audio/shart.wav", "./js/audio/fart.wav", "./js/audio/fart2.mp3"];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio (audioFiles[randomIndex]);
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Error:', error);
    });
    

    if (tabContent.hasClass('active')) {
        tabContent.removeClass('active');
        $(".title").html("<p>Click a Pin!</p>");
    } else {
      $('.tab-pane').removeClass('active');
      tabContent.addClass('active');
      $(".title").html("<p>Visual Arts B Building Restrooms</p>");
    }
  });
});

// DARC Building Pin
$(document).ready(function() {
  $(".darcPin").click(function(){
    let tabID = $(this).data('location');
    let tabContent = $('[data-location-content="' + tabID + '"]');

    
    const audioFiles = ["./js/audio/sink1.m4a", "./js/audio/sink2.m4a", "./js/audio/sink3.m4a", "./js/audio/papertowel.m4a" , "./js/audio/shart.wav", "./js/audio/fart.wav", "./js/audio/fart2.mp3"];
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio (audioFiles[randomIndex]);
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Error:', error);
    });
    

    if (tabContent.hasClass('active')) {
        tabContent.removeClass('active');
        $(".title").html("<p>Click a Pin!</p>");
    } else {
      $('.tab-pane').removeClass('active');
      tabContent.addClass('active');
      $(".title").html("<p>Digital Arts Research Center</p>");
    }
  });
});








// Floor tabs for DARC Building

// Womens floor tabs
$('.wtab').click(function() {

  
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  audio.volume = 0.5;
  audio.play().catch(error => {
    console.log('Error:', error);
  });
  
  // remove active class from previous clicked tab
  $('.wtab').removeClass('active');
  // make recent clicked tab green
  $(this).addClass('active');

  // find and store tab data 
  let floorNumW = $(this).data('tab');
  // make all divs with class="floorsDARCBuildingW" hidden
  $('.floorsDARCBuildingW').addClass('hidden');
 
  // find div with the class = to the floorNum and remove hidden class
  $('.' + floorNumW ).removeClass('hidden'); 
});



// Mens floor tabs
$('.mtab').click(function() {

  
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  audio.volume = 0.5;
  audio.play().catch(error => {
    console.log('Error:', error);
  });
  
  // remove active class from previous clicked tab
  $('.mtab').removeClass('active');
  // make recent clicked tab green
  $(this).addClass('active');

  // find and store tab data 
  let floorNumM = $(this).data('tab');
  // make all divs with class="floorsDARCBuildingM" hidden
  $('.floorsDARCBuildingM').addClass('hidden');
 
  // find div with the class = to the floorNum and remove hidden class
  $('.' + floorNumM ).removeClass('hidden'); 
});



// All-Gender floor tabs
$('.agtab').click(function() {

  
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  audio.volume = 0.5;
  audio.play().catch(error => {
    console.log('Error:', error);
  });
  
  // remove active class from previous clicked tab
  $('.agtab').removeClass('active');
  // make recent clicked tab green
  $(this).addClass('active');

  // find and store tab data 
  let floorNumAG = $(this).data('tab');
  // make all divs with class="floorsDARCBuildingAG" hidden
  $('.floorsDARCBuildingAG').addClass('hidden');
 
  // find div with the class = to the floorNum and remove hidden class
  $('.' + floorNumAG ).removeClass('hidden');  
});








// comment section
let commentsData = {};

// Load comments from localStorage
function loadComments() {
    const storedComments = localStorage.getItem('commentsData');
    if (storedComments) {
        commentsData = JSON.parse(storedComments);
    }
}

// Save comments to localStorage
function saveComments() {
    localStorage.setItem('commentsData', JSON.stringify(commentsData));
}

// Function to add a comment
function addComment(productId) {
    const input = document.querySelector(`.comment-input[data-product-id="${productId}"]`);
    const commentText = input.value.trim();

    if (commentText) {
        if (!commentsData[productId]) {
            commentsData[productId] = [];
        }
        commentsData[productId].push(commentText);
        saveComments();
        displayComments(productId);
        input.value = '';
    }
}

// Function to delete a comment
function deleteComment(productId, commentIndex) {
    if (commentsData[productId]) {
        commentsData[productId].splice(commentIndex, 1);
        saveComments();
        displayComments(productId);
    }
}

// Function to display comments for a product
function displayComments(productId) {
    const commentsList = document.getElementById(`comments-${productId}`);
    commentsList.innerHTML = '';

    if (commentsData[productId]) {
        commentsData[productId].forEach((comment, index) => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';

            const commentText = document.createElement('p');
            commentText.textContent = comment;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-comment';
            deleteButton.addEventListener('click', () => deleteComment(productId, index));

            commentDiv.appendChild(commentText);
            commentDiv.appendChild(deleteButton);
            commentsList.appendChild(commentDiv);
        });
    }
}

// Event listener for submit buttons
document.querySelectorAll('.submit-comment').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        addComment(productId);
    });
});

// Load and display initial comments from localStorage
document.addEventListener('DOMContentLoaded', () => {
    loadComments();
    Object.keys(commentsData).forEach(productId => {
        displayComments(productId);
    });
});








// Slideshow JavaScript
// Intializing Every Bathroom
let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11", "mySlides12", "mySlides13", "mySlides14", "mySlides15", "mySlides16", "mySlides17", "mySlides18", "mySlides19"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);

// Previous/Next Slide Function
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}



