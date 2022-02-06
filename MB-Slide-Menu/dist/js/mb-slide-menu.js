class MbSlideMenu {
    constructor (el) {
        this.element = el;
        this.closeButtom = this.element.querySelector('.menu-close');
        this.element.classList.remove('d-none');
        const self = this;
        if (this.closeButtom) {
            this.closeButtom.addEventListener('click', () =>{
                self.hide();
            })
        };
        var buttons = document.querySelectorAll('[data-show="mb-slide-menu"]');
        buttons.forEach(el => {
            let sel = el.attributes["data-target"].value;
            if(sel) {
                if(self.element.matches(sel)){
                    el.addEventListener('click', () => {
                        
                        el.style.opacity = 0;
                        self.showButton = el;
                        self.show().then(() =>{
                            document.addEventListener('click', () => {
                                self.hide();
                            }, { once: true });                            
                        });
                    })
                }
            }
        });
        var links = this.element.querySelectorAll('a:not([href^="#"])');
        links.forEach(el => {
            el.addEventListener('click', (evt) => {
                evt.preventDefault();
                self.hide().then(() => {
                    location.href = el.href;
                }, true)
            })
        });
    }
    element = null;
    closeButtom = null;
    showButton = null;

    show() {
        this.element.classList.add('show');
        const self = this;
        return new Promise(resolve => {
            setTimeout(() => resolve(self), 500);
        });
    };

    hide() {
        this.element.classList.remove('show');
        const self = this;
        return new Promise(resolve => {
            setTimeout(() => {
                if(self.showButton)
                    self.showButton.style.opacity = 1;
                resolve(self);
            }, 500);
        });
    };

}
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-mb-slidemenu]');
    window.Menus = [];
    elements.forEach(element => {
        window.Menus.push(new MbSlideMenu(element));
    }); 
}) 