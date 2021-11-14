

function colorChange(){
    var border = document.getElementById("border");
    var pTag = document.getElementById("paragraph");
    if (border.value == "red"){
        pTag.style.borderColor = "red";
        border.value = "FF0000";
    }
    else if (border.value == "blue"){
        pTag.style.borderColor = "blue";
        border.value = "0000FF";
    }
    else if (border.value == "green"){
        pTag.style.borderColor = "green";
        border.value = "00FF00";
    }

    var borderW= document.getElementById("borderWidth");
    if (borderW.value > 0){
        pTag.style.borderWidth = borderW.value;
    }



    var background = document.getElementById("background");
    if (background.value == "red"){
        pTag.style.backgroundColor = "red";
        background.value = "FF0000";
    }
    else if (background.value == "blue"){
        pTag.style.backgroundColor = "blue";
        background.value = "0000FF";
    }
    else if (background.value == "green"){
        pTag.style.backgroundColor = "green";
        background.value = "00FF00";
    }
}
    