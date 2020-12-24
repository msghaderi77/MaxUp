/* variables */

// nav  
let Data_Collaps,
    nav,
    currect_height,
    auto_height,
    navname;

/* variables */




 /* window Resize Check */
$(window).on('resize', function(){
    
    let win = $(this); //this = window

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
/* --window Resize Check-- */


/*  nav btn clicked */
if ($(".nav-toggle")[0]){
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
}

/*  --nav btn clicked-- */


/*  --nav btn default attr- */
$("navlight .nav-toggle , navdark .nav-toggle , navtransparent .nav-toggle").attr('data-collaps', 'true');
/*  --nav btn default attr-- */





$(".xSelect__label").on("click",function (e) {
    $(this).parent().find(".xSelect__options").toggleClass("xToggle");
});
$(".xSelect__option__name").on("click",function (e) {
    $(this).parent().parent().parent().parent().find(".xSelect__options").toggleClass("xToggle");
    $(this).parent().parent().parent().parent().find(".xSelect__label__title").html($(this).text());
});
$(document).ready(function(){
    $(".xSelect__search input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(this).parent().parent().parent().parent().find(".xSelect__option").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
