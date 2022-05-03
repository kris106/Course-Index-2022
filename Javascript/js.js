/*$(document).click(function() {
    $(".container").css("grid-template-columns", "repeat(8, 1fr)")
})*/

var array = ["element 1", "element 1", "element 1", "element 1"]
console.log(array);
var i = 1;

$(document) .mousemove(function() {
//$(".item").css("color", "coral")
if($(".item1:hover").length == 1){
    $(".item1").css("color", "yellow")
    //$("#title1").css("font-size", "40px")
    //$("#title1").css("letter-spacing", "20px")
    //$("#title1").css("filter", "blur(0px)")
}
else {
    $(".item1").css("color", "black")
    //$("#title1").css("font-size", "20px")
    //$("#title1").css("letter-spacing", "normal")
    //$("#title1").css("filter", "blur(2px)")
}

if($(".item2:hover").length == 1){
    $(".item2").css("color", "yellow")
    //$("#title1").css("font-size", "40px")
    //$("#title1").css("letter-spacing", "20px")
    //$("#title1").css("filter", "blur(0px)")
}
else {
    $(".item2").css("color", "black")
    //$("#title1").css("font-size", "20px")
    //$("#title1").css("letter-spacing", "normal")
    //$("#title1").css("filter", "blur(2px)")
}

if($(".item3:hover").length == 1){
    $(".item3").css("color", "yellow")
}
else {
    $(".item3").css("color", "black")
}


if($(".item4:hover").length == 1){
    $(".item4").css("color", "yellow")
}
else {
    $(".item4").css("color", "black")
}

})

$(document).scroll(function(){
    //console.log("I am scrolling")
    $(".block").addClass("move")

    var fromTop = $(document).scrollTop()
    console.log(fromTop)

/*
if(fromTop > 600) {
    $("#last").css("opacity", "1")
}
else {
    $("#last").css("opacity", "0.3") 
} */


})