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
