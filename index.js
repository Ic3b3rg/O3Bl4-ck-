var arrImg= document.querySelectorAll(".slider-img")
var i = 0;

function change(x){

    if(x == 1){

        if(i < arrImg.length-1){ 

            arrImg[i].className='invisible slider-img';
            i += x;
            arrImg[i].className='visible slider-img';
        }

        else{

            arrImg[0].className="visible slider-img";

            arrImg[i].className="invisible slider-img";
            i=0
        }
}
    if(x == -1){

        if(i > 0){ 

            arrImg[i].className='invisible slider-img';
            i += x;
            arrImg[i].className='visible slider-img';
        }

        else{

            arrImg[arrImg.length-1].className="visible slider-img";

            arrImg[i].className="invisible slider-img";
            i=arrImg.length-1
        }
    }
}