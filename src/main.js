const burguerMenuI = document.querySelector('#burguerMenu')
const menu = document.querySelector('#menu')
const aSections = document.querySelectorAll('.aSec')
aSections[0].click()

document.body.addEventListener('click', ev => {
    const target = ev.target

    if( target.id === 'burguerMenu'){
        menu.classList.toggle('menu')
        menu.classList.toggle('menuActive')
    }
    console.log(ev)
    if( target.className === 'aSec'){
        aSections.forEach(aSec => {
            aSec.style.borderRight = 'none'
        })
        target.style.borderRight = '3px solid black'
    }
})