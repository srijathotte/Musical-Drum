let a=document.getElementById('container')
let b=document.getElementById('images')
let c=document.getElementById('audio1')
let d=document.getElementById('audio2')
let e=document.getElementById('audio3')
let f=document.getElementById('audio4')
document.addEventListener('keydown',(event)=>{
    if(event.key==='c'){
        c.play()
    }else if(event.key==='d'){
        d.play()
    }else if(event.key==='e'){
        e.play()
    }else if(event.key==='f'){
        f.play()
    }
})