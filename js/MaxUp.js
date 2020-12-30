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

    if (win.width() > 800 && $(".nav-toggle").length >= 1) {
        Data_Collaps = false;
        nav = $("#navbar");
        $(".nav-toggle").attr("data-collaps" , "true");
        Chnage_Data_Collaps();
    }
});
/* --window Resize Check-- */

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

$(document).on("click",".notification__close", function () {
    $(".notification").remove();
});





// Functions *************************************************************************************

/* MaxUp js Functions */




/* nav Collaps/unCollaps */
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
/* --nav Collaps/unCollaps-- */




/* Progress bar */
function postFile(InputFile , ProgressBar , path) {
    var formdata = new FormData();

    formdata.append(InputFile, $('#'+InputFile)[0].files[0]);

    let request = new XMLHttpRequest();

    request.upload.addEventListener('progress', function (e) {
        let file1Size = $('#'+InputFile)[0].files[0].size;

        if (e.loaded <= file1Size) {
            let percent = Math.round(e.loaded / file1Size * 100);
            $('#'+ProgressBar).width(percent + '%').html(percent + '%');
        }

        if(e.loaded == e.total){
            $('#'+ProgressBar).width(100 + '%').html(100 + '%');
        }
    });
    request.open('post', path);
    request.timeout = 45000;
    request.send(formdata);
}
/* --Progress bar-- */


function notifications(type) {
    let title,body,cbg,fbg,icon;
    switch (type) {
        case 'success':
            fbg = "f-success";
            cbg = 'bg-success';
            title = "موفقیت آمیز";
            body = "عملیات موفقیت آمیز بود";
            icon = "fa fa-check";
            break;
        case 'danger':
            fbg = "f-danger";
            cbg = 'bg-danger';
            title = "عدم موفقیت";
            body = "عملیات با مشکل  مواجه شد!";
            icon = "fas fa-times";
            break;
        case 'warning':
            fbg = "f-warning";
            cbg = 'bg-warning';
            title = "اخطار";
            body = "عملیات با اخطار  مواجه شد!";
            icon = "fas fa-exclamation-triangle";
            break;
    }

    $("body").append('<div class="notification">\n' +
        '  <div class="notification__main">\n' +
        '    <div class="notification__close row-c"><i class="fas fa-times"></i></div>\n' +
        '    <div class="notification__color '+cbg+'"></div>\n' +
        '    <div class="notification__content">\n' +
        '      <div class="notification__icon row-c '+cbg+'"><i class="'+icon+' f-light f-40"></i></div>\n' +
        '      <div class="notification__body">\n' +
        '        <p class="notification__context">'+body+'</p>\n' +
        '        <h2 class="notification__title '+fbg+'">'+title+'</h2>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>');
    $(".notification__main").addClass("animate");
}
