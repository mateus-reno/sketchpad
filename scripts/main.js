$(document).ready(function() {
  //declare the variables at the top of  your functions...it enables us to change them later
  var columnWidth = 16;
  var columnHeight = 16;

  function makeBoxes() {
    //boxcount lets us set how many times we want the for loop to run...when we change the columns/rows later this variable will be updated
    var boxCount = columnWidth * columnHeight;
  //
    for (var i = 0; i < boxCount; i++) { //loop through each box
    //any code you place in here will execute each time we loop around
      $("<div class='squares'></div>").appendTo('#main');
    }
    //we only want to declare this once so we place it after the loop
    $(".squares").width((500 / columnWidth) - 2);
    $(".squares").height((500 / columnHeight) - 2);
    $('.squares').hover(
      function() {
        $(this).addClass('hover');
      }
    );
  }
  //fire the initial function
  makeBoxes();
});
