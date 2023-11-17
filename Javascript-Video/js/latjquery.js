// $( document ).ready(function() {
//     console.log("siap!");
// });

$(function() {
    $("#isi").html("<h1>Belajar Jquery</h1>");
    $("button").click(function (e) { 
        e.preventDefault();
        alert("Belajar javascript");
    });

    $("#isi").mouseleave(function () { 
        alert("Mouse leave");
        console.log("mouse");
    });
});