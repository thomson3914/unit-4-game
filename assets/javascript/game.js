// create variables
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// function to reset and start the game
var resetAndStart = function () {

    // this empties the crystals
    $(".crystals").empty(); 

    // images for crystals
    var images = [
        './assets/images/crystal1.jpg', 
        './assets/images/crystal2.jpg', 
        './assets/images/crystal3.jpg', 
        './assets/images/crystal4.jpg'];
    
    // generates new random target number
    random_result = Math.floor(Math.random() * 69) + 30;

    // Add to the DOM
    $("#result").html(random_result);

    // for loop to create the 4 crystals
    for(var i = 0; i < 4; i++){

        // generates the crystals random number
        var random = Math.floor(Math.random() * 11) + 1;
    
        // creates the div for ramdom number and put it to this attribute
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random            
            });
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

            });
            
        // the crystal were we put everything back
        $(".crystals").append(crystal);
    }

    $("#previous").html(previous);

}



// reload the page and go through the function above
resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

   var num = parseInt($(this).attr('data-random'));

   previous += num;

   $("#previous").html(previous);

   console.log(previous);

    // if you lose = resetAndStrart
   if(previous > random_result) {
        lost++;

        $("#lost").html(lost);

        previous = 0;

        resetAndStart(); 
   }

    // if you win = resetAndStrart
   else if(previous === random_result){
       win++;

       $("#win").html(win);

       previous = 0;

       resetAndStart(); 
   }

});