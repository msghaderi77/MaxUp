/* MaxUp js Functions */




// nav Collaps/unCollaps
function Chnage_Data_Collaps(){
    switch(Data_Collaps){
        case true:
            currect_height = nav.height();
            nav.css("height" , "auto");
            auto_height = nav.height();
            nav.height(currect_height).animate({height: auto_height}, 300);
            Data_Collaps = false;
            break;
        case false:
            nav.css("height" , "60px");
            Data_Collaps = true;
            break;
    }
}


