const banner = document.querySelector('#banner');
const closeBtn = document.querySelector('#close')

const dt = new Date();
const weekday = dt.getDay();

if (weekday <= 3){
    banner.classList.add('bnshow');
    banner.classList.remove('bnclose');
}else{
    banner.classList.add('bnclose');
    banner.classList.remove('bnshow');
}

closeBtn.addEventListener('click', () =>{
    banner.classList.add('bnclose');
    banner.classList.remove('bnshow');
})
