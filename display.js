var left = "left";
var right = "right";

function myFunction(picked) {
    var first = document.getElementById("set1");
    var second = document.getElementById("set2");
    var third = document.getElementById("set3");

    switch (picked) {
        case "left":
            //make set2 visible and other 2 hidden
            if (second.style.display === "grid") {
                first.style.display = "none";
                second.style.display = "none";
                third.style.display = "grid";
            } else if (third.style.display === "grid") {
                first.style.display = "grid";
                second.style.display = "none";
                third.style.display = "none";
            } else {
                first.style.display = "none";
                second.style.display = "grid";
                third.style.display = "none";
            }

            break;
        case "right":
            //make set3 visible and other 2 hidden
            if (third.style.display === "grid") {
                first.style.display = "none";
                second.style.display = "grid";
                third.style.display = "none";
            } else if (second.style.display === "grid") {
                first.style.display = "grid";
                second.style.display = "none";
                third.style.display = "none";
            } else {
                first.style.display = "none";
                second.style.display = "none";
                third.style.display = "grid";
            }
            break;
        default:
            //set1 visible and other 2 hidden
            first.style.display = "grid";
            second.style.display = "none";
            third.style.display = "none";
            break;
    }
}