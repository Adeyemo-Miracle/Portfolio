const loadingCount = document.querySelector('.loading-count')
const main = document.querySelector('main')
const submit = document.querySelector('.submit-button')
let count = 0

function int (){
    setInterval(blur, 30)
}
function blur(){
    count++
    if(count>99){
        clearInterval()
        setTimeout(()=>(loadingCount.style.display = 'none'), 30)
    }else{
        loadingCount.innerHTML = `${count}%`
        loadingCount.style.opacity = scale(count, 0, 100, 1, 0)
        main.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
    }
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
document.addEventListener(('load'), int())