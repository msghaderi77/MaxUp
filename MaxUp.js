/* variables */

// nav  
let Data_Collaps, nav, currect_height, auto_height,navname;

/* variables */




// window Resize
$(window).on('resize', function(){
    
    var win = $(this); //this = window

    if (win.width() < 800) {
        Data_Collaps = true;
    }

    if (win.width() > 800) { 
        Data_Collaps = false;
        nav = $("#navbar");
        $(".nav-toggle").attr("data-collaps" , "true");
        Chnage_Data_Collaps();
    }
});



/*  nav btn clicked */
$(".nav-toggle").on("click",function(){

    // get nav tag
    navname = $(this).attr("data-id");
    nav = $(navname);
    // get data_collaps
    Data_Collaps = $(this).attr("data-collaps"); 
    if(Data_Collaps == "true"){
        Data_Collaps = true;
        $(this).attr("data-collaps" , "false");
    }else{
        Data_Collaps = false;
        $(this).attr("data-collaps" , "true");
    }
    
    // Do Function : nav Collaps/unCollaps
    Chnage_Data_Collaps();
});




// todo Start dropdown 
$("drbtn").on("click",function(){
    if (!$("drbody").hasClass("show")) {
        $("drbody").fadeIn(300).addClass("show");
    } else {
        $("drbody").fadeOut(300).removeClass("show");
    }
    
});
$(document).mouseup(function (e) { 
    if($(e.target).closest("drbtn").length === 1){
        //
    }else if ($(e.target).closest("drbody").length === 0) { 
        $("drbody").fadeOut(300).removeClass("show");
    }
    
});
// todo End dropdown 




