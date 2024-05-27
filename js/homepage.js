//Working Prototype





const currentButton = new newButton("text", "text", [0,0,0,0,0], ["a", "b", "c"]);

$(".pins").append("<button class= 'new_page' id='theater1'  >Theater Bathroom First Floor</button>");

$('#theater1').click(openTheaterLink);

function openTheaterLink(){

    currentButton = new newButton("theater1", "/images/theater1.jpg", [2,4,5,2,3], ["This is crazy", "It was pretty firty ngl", "Don't use"]);
    window.open("https://fboongal.github.io/Project-P/bathroom/index.html");

}

//name is a string, image is an image link?, ratings is a list of numbers in an array 5 or under, reviews is a list of strings
function newButton(name, image, ratings, reviews){
    this.name = name;
    this.image = image;
    this.ratingList = ratings;
    this.reviewList = reviews;
}

//<img id ="car" src="./img/rusty.jpg">



function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();