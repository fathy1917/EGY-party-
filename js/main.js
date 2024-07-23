/// <reference types="../@types/jquery"/>;

$(".singer-1").on("click", function(){
    $(".toggle-1").slideToggle(500)
})

$(".singer-2").on("click", function(){
    $(".toggle-2").slideToggle(500)
})

$(".singer-3").on("click", function(){
    $(".toggle-3").slideToggle(500)
})

$(".singer-4").on("click", function(){
    $(".toggle-4").slideToggle(500)
})


let countDown = new Date("Dec 31, 2024 23:59:59").getTime()

let counter = setInterval(function(){

    let dateNow = new Date().getTime()
    let dateDiff = countDown  - dateNow

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
    let sec = Math.floor((dateDiff % (1000 * 60)) / 1000)

    document.getElementById("day").innerHTML = days < 10 ? `0${days}` : days
    document.getElementById("hour").innerHTML = hours < 10 ? `0${hours}` : hours
    document.getElementById("min").innerHTML = min < 10 ? `0${min}` : min
    document.getElementById("sec").innerHTML = sec < 10 ? `0${sec}` : sec

},1000)


// let limit = 100;

// document.getElementById("msg").addEventListener("keypress", function(e){
//     if(limit > 0){
//         limit--
//         let char = document.getElementById("char").innerHTML = limit
//     }else {
//         document.getElementById("char").innerHTML = "your available character finished"
//         limit--
//     }
// })


// document.getElementById("msg").addEventListener("keydown", function(e){
//     if(e.key == 'Backspace' && limit < 100){
//         limit++
//     }
//     if(limit >= 0 ){
//         document.getElementById("char").innerHTML = limit
//     }
// })



$("#msg").on("input", function(){
    let word = $(this).val();

    let rem = 100 - word.length

    if(rem >= 0){
        $("#char").html(rem);
    }else {
        $("#char").html("your availavle character finished")
    }
})


// document.getElementById("msg").addEventListener("input", function() {
//     let word = this.value;

//     let rem = 100 - word.length;

//     if (rem >= 0) {
//         document.getElementById("char").innerHTML = rem;
//     } else {
//         document.getElementById("char").innerHTML = "your available character finished";
//     }
// });


// $(".exit").on("click", function(){
//     $(".nav").animate({ width: "0%" }, 1000)
// })


$(".exit").on("click", function() {
    $(".nav").animate({ width: "0%" }, 1000, function() {
        $(".ul li ").hide()
        $(".nav-icon").show()
    });
});


$(".nav-icon").on("click", function(){
    $(".nav").animate({  width: "19%" })
    $(".ul li").slideDown(1000)
    $(this).hide()
})