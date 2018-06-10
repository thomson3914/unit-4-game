var random_result;
var lose;
var win;
var previous = 0;

random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ' + random_result);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.html(random);
        
    $(".crystals").append(crystal);
}


$(".crystal").on('click', function () {

   var num = parseInt($(this).attr('data-random'));

   previous += num;

   console.log(previous);

   if(previous > random_result) {
        console.log("You lost!!");
   }
   else if(previous === random_result){
       console.log("You Win!!");
   }



});