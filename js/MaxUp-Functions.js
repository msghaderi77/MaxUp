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



