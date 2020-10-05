import string from './css'

let n = 1
demo.innerText = string.substr( 0, n)
demo2.innerHeight = string.substr(0, n)


console.log(n)

const x = ()=>{
    n += 1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr( 0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
}

let id= setInterval( () => {
    x()
} ,0)

btnPause.onclick = ()=>{
    window.clearInterval(id)
}
btnPlay.onclick = ()=>{
    id = setInterval( ()=>{
        x()
    }, 0)
}