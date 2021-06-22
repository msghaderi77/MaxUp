
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

class nav {
    constructor(navigation) {
        this.navigation = document.querySelector(navigation);
        this.navToggleBtn = this.navigation.querySelector('.nav-toggle');
        (this.navToggleBtn)
            ? this.SetDataCollapseOnNavToggle()
            : console.log('MaxUp Warning : nav-toggle dose not exist!');

        window.addEventListener('resize', this.SetDataCollapseOnNavToggle.bind(this));

        this.navToggleBtn.addEventListener('click', this.ToggleNav.bind(this));
    }
    SetDataCollapseOnNavToggle(){
        this.navToggleBtn.setAttribute('data-collapse' , (window.innerWidth <= 800));
    }
    ToggleNav(){
        this.navigation.classList.toggle('navIsActive')
    }
}
