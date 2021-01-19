const btnContainer = document.querySelectorAll('.theme-btn');
const body = document.querySelector('body');


btnContainer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(btn.className.includes('dark-theme-btn')){
            body.removeAttribute('class');
            body.classList.add('dark')
        }else if(btn.className.includes('purple-theme-btn')){
            body.removeAttribute('class');
            body.classList.add('purple')
        }else if(btn.className.includes('light-theme-btn')){
            body.removeAttribute('class');
            body.classList.add('light')
        }
    })
})