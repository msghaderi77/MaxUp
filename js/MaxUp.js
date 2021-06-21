
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

class xSelect{
    constructor(select) {
        this.registerValriables(select);
        this.label.addEventListener('click', this.ToggleSelect.bind(this))
        this.options.forEach((option)=>{
            option.querySelector('.xSelect__option__name').addEventListener('click', this.chooseOption.bind(this));
        })
        this.searchBar.addEventListener('keyup', this.search.bind(this))
        document.addEventListener('click', this.checkClick.bind(this));
        // (this.close) && this.closeSelect.bind(this);
    }
    registerValriables(select){
        this.select = document.querySelector(select);
        this.label = this.select.querySelector('.xSelect__label');
        this.title = this.label.querySelector('.xSelect__label__title');
        this.arrow = this.label.querySelector('.xSelect__label__icon');
        this.optionsBox = this.select.querySelector('.xSelect__options');
        this.searchBar = this.select.querySelector('.xSelect__search');
        this.options = this.optionsBox.querySelectorAll('.xSelect__option');
        // this.close = false;
        this.arr = [];
    }
    ToggleSelect(){
        this.optionsBox.classList.toggle('xToggle');
        this.arrow.classList.toggle('xToggleArrow');
    }
    closeSelect(){
        this.optionsBox.classList.remove('xToggle');
        this.arrow.classList.remove('xToggleArrow');
    }
    replaceLabel(labelName){
        this.title.innerHTML = labelName.path[0].innerText
    }
    chooseOption(labelName){
        this.ToggleSelect()
        this.replaceLabel(labelName)
    }
    search(){
        const searchBarValue = this.searchBar.value.toUpperCase()
        this.options.forEach((option)=>{
            const optionName = option.querySelector('.xSelect__option__name').innerHTML;
            option.style.display = (optionName.toUpperCase().indexOf(searchBarValue) > -1) ? '' : 'none'
        })
    }
    checkClick(el){
        this.arr = [];
        el.path.forEach((elm) =>{
            (elm instanceof Element) && this.arr.push(elm.classList[0])
        });
        (!this.arr.includes('xSelect')) && this.closeSelect()
    }
}
