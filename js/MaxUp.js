document.addEventListener("DOMContentLoaded", function(){

    let DataCollapse = (window.innerWidth <= 800);

    /* if select exist, run the algorithm */
    (document.querySelectorAll('.xSelect') != null) ? RunXSelector() : false;

    /* get nav-toggle and if exist, add data-collapse */
    const navToggleBtn = document.getElementsByClassName('nav-toggle');
    (navToggleBtn[0] != null) ? SetDataCollapseOnNavToggle() : console.log('nav-toggle dose not exist!');

    /* change data collapse on window resize */
    window.addEventListener('resize',function (){
        DataCollapse = (window.innerWidth <= 800);
        (navToggleBtn[0]) ? SetDataCollapseOnNavToggle() : false;
    })

    /* Collapse/UnCollapse navbar on nav-toggle click */
    if (navToggleBtn[0]){
        navToggleBtn[0].addEventListener('click',function (){
            let NavBar = navToggleBtn[0].parentElement;

            NavBar.classList.toggle('navIsActive');
        })
    }

});


function RunXSelector(){
    const xSelects = document.querySelectorAll('.xSelect');
    xSelects.forEach(function (xSelect, index){

        const xSelectLabel = xSelect.getElementsByClassName('xSelect__label');
        const xSelectArrow = xSelectLabel[0].getElementsByClassName('xSelect__label__icon');
        const xSelectOptionsBox = xSelect.getElementsByClassName('xSelect__options');
        const xSelectSearch = xSelect.getElementsByClassName('xSelect__search');
        const xSelectOptions = xSelectOptionsBox[0].querySelectorAll('.xSelect__option');

        xSelectLabel[0].addEventListener('click',function (){
            xSelectsToggleOptions(xSelectOptionsBox , xSelectArrow);
        })
        xSelectSearch[0].addEventListener('keydown' ,function (){
            SearchXSelect(xSelectSearch , xSelectOptionsBox , xSelectOptions);
        })
        xSelectOptions.forEach(function (el){
            const LabelName = el.getElementsByClassName('xSelect__option__name')[0];
            LabelName.addEventListener('click',function (e){
                xSelectsToggleOptions(xSelectOptionsBox , xSelectArrow);
                xSelectLabel[0].getElementsByClassName('xSelect__label__title')[0].innerHTML = LabelName.innerText;
            })
        })
    })
}

function SearchXSelect(input , ul , li) {

    const InputValue = input[0].value.toLowerCase();
    let filter, a, i, txtValue;
    filter = input[0].value.toUpperCase();

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName('xSelect__option__name')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }



}

function xSelectsToggleOptions(el,arrow){
    el[0].classList.toggle('xToggle');
    arrow[0].classList.toggle('xToggleArrow');
}

function SetDataCollapseOnNavToggle(){
    navToggleBtn[0].setAttribute('data-collapse' , DataCollapse);
}

const PostFileProgress = (InputFile, ProgressBar, path) => {
    const formData = new FormData();
    formData.append(InputFile, document.getElementById(InputFile)[0].files[0]);
    const request = new XMLHttpRequest();
    request.upload.addEventListener('progress', function (e){
        const fileSize = document.getElementById(InputFile)[0].files[0].size;

        if (e.loaded <= fileSize){
            const percent = Math.round(e.loaded / fileSize * 100);
            document.getElementById(ProgressBar).innerWidth = percent+'%';
        }
        if (e.loaded === e.total){
            document.getElementById(ProgressBar).innerWidth = 100+'%';
        }

    });
    request.open('post', path);
    request.timeout = 45000;
    request.send(formData);
}

const Notifications =  (type, title = null, body= null) => {
    let BackgroundColor,
        FontColor,
        Icon;

    switch (type){
        case 'success':
            BackgroundColor = 'bg-success';
            FontColor = 'f-success';
            Icon = 'fa fa-check';
            title = (title != null) ? title : 'موفقیت آمیز';
            body = (body != null) ? body : 'عملیات موفقیت آمیز بود';
            break;
        case 'danger':
            BackgroundColor = 'bg-danger';
            FontColor = 'f-danger';
            Icon = 'fas fa-times';
            title = (title != null) ? title : 'عدم موفقیت';
            body = (body != null) ? body : 'عملیات با مشکل  مواجه شد!';
            break;
        case 'warning':
            BackgroundColor = 'bg-warning';
            FontColor = 'f-warning';
            Icon = 'fas fa-exclamation-triangle';
            title = (title != null) ? title : 'اخطار';
            body = (body != null) ? body : 'عملیات با اخطار  مواجه شد!';
            break;
    }

    document.getElementsByTagName('body')[0].innerHTML +=
        '<div class="notification">\n' +
        '  <div class="notification__main">\n' +
        '    <div class="notification__close row-c"><i class="fas fa-times"></i></div>\n' +
        '    <div class="notification__color '+BackgroundColor+'"></div>\n' +
        '    <div class="notification__content">\n' +
        '      <div class="notification__icon row-c '+BackgroundColor+'"><i class="'+Icon+' f-light f-40"></i></div>\n' +
        '      <div class="notification__body">\n' +
        '        <p class="notification__context">'+body+'</p>\n' +
        '        <h2 class="notification__title '+FontColor+'">'+title+'</h2>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>';

    document.getElementsByClassName('notification__main')[0].classList.add('animate');
    let Notification = document.getElementsByClassName('notification__close')[0];
    Notification.addEventListener('click',function (){
        document.getElementsByClassName('notification')[0].remove()
    })
}

exports.PostFileProgress = PostFileProgress;
exports.Notifications = Notifications;
