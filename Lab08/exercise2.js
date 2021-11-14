var pos1 = 5;


function previous(){
    pos1--;
    changeSlide(pos1); 
}

function next(){
    pos1++;
    changeSlide(pos1);
}

function changeSlide(pos){
    var img = document.getElementById("image");
    if (Math.abs(pos%5) == 0){
        img.src = "giraffe.jpg";
    }   
    else if (Math.abs(pos%5) == 1){
        img.src = "hippo.JPG";
    }
    else if (Math.abs(pos%5)==2){
        img.src = "cheetah.JPG";
    }
    else if (Math.abs(pos%5)==3){
        img.src = "bear.JPG";
    }
    else{
        image.src = "frog.JPG";
    }
}