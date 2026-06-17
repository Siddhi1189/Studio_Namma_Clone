// let navm = document.querySelector(".nav-r-mid")
// let menu = document.querySelector(".menu")
// let flag = false

// navm.addEventListener("click", ()=>{
//     if(!flag) {
//         menu.style.transform = "rotate(20deg)"
//         menu.style.top = "150vh"
//         menu.style.left = "-20vh"
//         flag = true
//     } else {
//         menu.style.transform = "rotate(0deg)"
//         menu.style.top = "0"
//         menu.style.left = "0"
//         flag = false
//     }
// })

let overlay = document.querySelector(".overlay")
let menup = document.querySelector(".nav-menup")
let video = document.querySelector(".motion-video");
let home = document.querySelector(".home");
let matera = document.querySelector(".matera")
let mvid = document.querySelector(".matera-vid")
let chance = document.querySelector(".chance")
let cvid = document.querySelector(".chance-vid")
let silvr = document.querySelector(".silvr")
let svid = document.querySelector(".silvr-vid")
let intra = document.querySelector(".intramuros")
let ivid = document.querySelector(".intra-vid")
let flag = true

menup.addEventListener("click", ()=>{
    if(flag) {
        overlay.style.top = "0%"
        overlay.style.transform = "rotate(10deg)"
        menup.innerHTML = "CLOSE"
        flag = false
    } else {
        overlay.style.top = "-125%"
        overlay.style.transform = "rotate(0deg)"
        menup.innerHTML = "OPEN"
        flag = true
    }
})

home.addEventListener("mousemove",(move)=>{
    video.style.left = move.x + "px"
    video.style.top = move.y + "px"
    video.style.opacity = "1"
    ball.style.opacity = "0"
})

home.addEventListener("mouseleave",()=>{
    video.style.opacity = "0"
    ball.style.opacity = "1"
})

let materai = document.querySelector(".matera-img")
matera.addEventListener("mouseenter", ()=> {
    mvid.style.opacity = "1"
    matera.style.transform = "scale(0.99)"
    materai.style.filter = "blur(4px)"
})

matera.addEventListener("mouseleave", ()=> {
    mvid.style.opacity = "0"
    matera.style.transform = "scale(1)"
    materai.style.filter = "blur(0)"
})

let chancei = document.querySelector(".chance-img")
chance.addEventListener("mouseenter", ()=> {
    cvid.style.opacity = "1"
    chance.style.transform = "scale(0.99)"
    chancei.style.filter = "blur(4px)"
})

chance.addEventListener("mouseleave", ()=> {
    cvid.style.opacity = "0"
    chance.style.transform = "scale(1)"
    chancei.style.filter = "blur(0)"
})

let silvri = document.querySelector(".silvr-img")
silvr.addEventListener("mouseenter", ()=> {
    svid.style.opacity = "1"
    silvr.style.transform = "scale(0.99)"
    silvri.style.filter = "blur(4px)"
})

silvr.addEventListener("mouseleave", ()=> {
    svid.style.opacity = "0"
    silvr.style.transform = "scale(1)"
    silvri.style.filter = "blur(0)"
})

let intrai = document.querySelector(".intra-img")
intra.addEventListener("mouseenter", ()=> {
    ivid.style.opacity = "1"
    intra.style.transform = "scale(0.99)"
    intrai.style.filter = "blur(4px)"
})

intra.addEventListener("mouseleave", ()=> {
    ivid.style.opacity = "0"
    intra.style.transform = "scale(1)"
    intrai.style.filter = "blur(0)"
})

let sart = document.querySelector(".service-art")
let sbrnd = document.querySelector(".service-brand")
let sweb = document.querySelector(".service-web")
let sui = document.querySelector(".service-ui")
let sgsap = document.querySelector(".service-gsap")
let sadv = document.querySelector(".service-adv")
let sseo = document.querySelector(".service-seo")

sart.addEventListener("mouseenter", ()=> {
    sbrnd.style.color = "#c5c5c5"
    sweb.style.color = "#c5c5c5"
    sui.style.color = "#c5c5c5"
    sgsap.style.color = "#c5c5c5"
    sadv.style.color = "#c5c5c5"
    sseo.style.color = "#c5c5c5"
})

sart.addEventListener("mouseleave", ()=> {
    sbrnd.style.color = "black"
    sweb.style.color = "black"
    sui.style.color = "black"
    sgsap.style.color = "black"
    sadv.style.color = "black"
    sseo.style.color = "black"
})

sbrnd.addEventListener("mouseenter", ()=> {
    sart.style.color = "#c5c5c5"
    sweb.style.color = "#c5c5c5"
    sui.style.color = "#c5c5c5"
    sgsap.style.color = "#c5c5c5"
    sadv.style.color = "#c5c5c5"
    sseo.style.color = "#c5c5c5"
})

sbrnd.addEventListener("mouseleave", ()=> {
    sart.style.color = "black"
    sweb.style.color = "black"
    sui.style.color = "black"
    sgsap.style.color = "black"
    sadv.style.color = "black"
    sseo.style.color = "black"
})

sweb.addEventListener("mouseenter", ()=> {
    sart.style.color = "#c5c5c5"
    sbrnd.style.color = "#c5c5c5"
    sui.style.color = "#c5c5c5"
    sgsap.style.color = "#c5c5c5"
    sadv.style.color = "#c5c5c5"
    sseo.style.color = "#c5c5c5"
})

sweb.addEventListener("mouseleave", ()=> {
    sart.style.color = "black"
    sbrnd.style.color = "black"
    sui.style.color = "black"
    sgsap.style.color = "black"
    sadv.style.color = "black"
    sseo.style.color = "black"
})             

sui.addEventListener("mouseenter", ()=> {
    sart.style.color = "#c5c5c5"
    sbrnd.style.color = "#c5c5c5"
    sweb.style.color = "#c5c5c5"
    sgsap.style.color = "#c5c5c5"
    sadv.style.color = "#c5c5c5"
    sseo.style.color = "#c5c5c5"
})

sui.addEventListener("mouseleave", ()=> {
    sart.style.color = "black"
    sbrnd.style.color = "black"
    sweb.style.color = "black"
    sgsap.style.color = "black"
    sadv.style.color = "black"
    sseo.style.color = "black"
})

sgsap.addEventListener("mouseenter", ()=> {
    sart.style.color = "#c5c5c5"
    sbrnd.style.color = "#c5c5c5"
    sweb.style.color = "#c5c5c5"
    sui.style.color = "#c5c5c5"
    sadv.style.color = "#c5c5c5"
    sseo.style.color = "#c5c5c5"
})

sgsap.addEventListener("mouseleave", ()=> {
    sart.style.color = "black"
    sbrnd.style.color = "black"
    sweb.style.color = "black"
    sui.style.color = "black"
    sadv.style.color = "black"
    sseo.style.color = "black"
})

sadv.addEventListener("mouseenter", ()=> {
    sart.style.color = "#c5c5c5"
    sbrnd.style.color = "#c5c5c5"
    sweb.style.color = "#c5c5c5"
    sui.style.color = "#c5c5c5"
    sgsap.style.color = "#c5c5c5"
    sseo.style.color = "#c5c5c5"
})

sadv.addEventListener("mouseleave", ()=> {
    sart.style.color = "black"
    sbrnd.style.color = "black"
    sweb.style.color = "black"
    sui.style.color = "black"
    sgsap.style.color = "black"
    sseo.style.color = "black"
})

sseo.addEventListener("mouseenter", ()=> {
    sart.style.color = "#c5c5c5"
    sbrnd.style.color = "#c5c5c5"
    sweb.style.color = "#c5c5c5"
    sui.style.color = "#c5c5c5"
    sgsap.style.color = "#c5c5c5"
    sadv.style.color = "#c5c5c5"
})

sseo.addEventListener("mouseleave", ()=> {
    sart.style.color = "black"
    sbrnd.style.color = "black"
    sweb.style.color = "black"
    sui.style.color = "black"
    sgsap.style.color = "black"
    sadv.style.color = "black"
})

let ball = document.querySelector(".ball")
let overpar = document.querySelector(".overlay-parent")
let nav = document.querySelector("nav")

overpar.addEventListener("mousemove",(b)=>{
    ball.style.left = b.x + "px"
    ball.style.top = b.y + "px"
})

nav.addEventListener("mousemove",(b)=>{
    ball.style.left = b.x + "px"
    ball.style.top = b.y + "px"
    video.style.left = b.x + "px"
    video.style.top = b.y + "px"
    video.style.opacity = "1"
})

nav.addEventListener("mouseleave",(b)=>{
    video.style.opacity = "0"
})

let play = document.querySelector(".play-h1")

play.addEventListener("mousemove", ()=>{
    ball.style.height = "40px"
    ball.style.width = "180px"
    ball.style.borderRadius = "10px"
    ball.style.transform = "rotate(-8deg) scale(0.85,1.3)"
    ball.textContent = "PORTFOLIO"
    ball.style.fontSize = "25px"
    ball.style.fontWeight = "900"
    ball.style.color = "white"
})

play.addEventListener("mouseleave", ()=>{
    ball.style.height = "17px"
    ball.style.width = "17px"
    ball.innerHTML = ""
    ball.style.borderRadius = "25px"
    ball.style.transform = "rotate(0deg) scale(1,1)"
})

matera.addEventListener("mousemove",()=>{
    ball.style.height = "40px"
    ball.style.width = "135px"
    ball.style.borderRadius = "10px"
    ball.style.transform = "rotate(-8deg) scale(0.85,1.3)"
    ball.textContent = "MATERA"
    ball.style.fontSize = "25px"
    ball.style.fontWeight = "900"
    ball.style.color = "white"
})

matera.addEventListener("mouseleave", ()=>{
    ball.style.height = "17px"
    ball.style.width = "17px"
    ball.innerHTML = ""
    ball.style.borderRadius = "25px"
    ball.style.transform = "rotate(0deg) scale(1,1)"
})

chance.addEventListener("mousemove",()=>{
    ball.style.height = "40px"
    ball.style.width = "133px"
    ball.style.borderRadius = "10px"
    ball.style.transform = "rotate(-8deg) scale(0.85,1.3)"
    ball.textContent = "CHANCE"
    ball.style.fontSize = "25px"
    ball.style.fontWeight = "900"
    ball.style.color = "white"
})

chance.addEventListener("mouseleave", ()=>{
    ball.style.height = "17px"
    ball.style.width = "17px"
    ball.innerHTML = ""
    ball.style.borderRadius = "25px"
    ball.style.transform = "rotate(0deg) scale(1,1)"
})

silvr.addEventListener("mousemove",()=>{
    ball.style.height = "40px"
    ball.style.width = "100px"
    ball.style.borderRadius = "10px"
    ball.style.transform = "rotate(-8deg) scale(0.85,1.3)"
    ball.textContent = "SILVR"
    ball.style.fontSize = "25px"
    ball.style.fontWeight = "900"
    ball.style.color = "white"
})

silvr.addEventListener("mouseleave", ()=>{
    ball.style.height = "17px"
    ball.style.width = "17px"
    ball.innerHTML = ""
    ball.style.borderRadius = "25px"
    ball.style.transform = "rotate(0deg) scale(1,1)"
})

intra.addEventListener("mousemove",()=>{
    ball.style.height = "40px"
    ball.style.width = "200px"
    ball.style.borderRadius = "10px"
    ball.style.transform = "rotate(-8deg) scale(0.85,1.3)"
    ball.textContent = "INTRAMUROS"
    ball.style.fontSize = "25px"
    ball.style.fontWeight = "900"
    ball.style.color = "white"
})

intra.addEventListener("mouseleave", ()=>{
    ball.style.height = "17px"
    ball.style.width = "17px"
    ball.innerHTML = ""
    ball.style.borderRadius = "25px"
    ball.style.transform = "rotate(0deg) scale(1,1)"
})

let seep = document.querySelector(".seep")

seep.addEventListener("mouseenter",()=>{
    ball.style.height = "40px"
    ball.style.width = "140px"
    ball.style.borderRadius = "8px"
    ball.style.transform = "rotate(-8deg) scale(0.85,1.3)"
    ball.textContent = "SERVICES"
    ball.style.fontSize = "25px"
    ball.style.fontWeight = "900"
    ball.style.color = "white"
})

seep.addEventListener("mouseleave", ()=>{
    ball.style.height = "17px"
    ball.style.width = "17px"
    ball.innerHTML = ""
    ball.style.borderRadius = "25px"
    ball.style.transform = "rotate(0deg) scale(1,1)"
})

let hellop = document.querySelector(".hellop")

hellop.addEventListener("mouseenter",()=>{
    ball.style.height = "40px"
    ball.style.width = "180px"
    ball.style.borderRadius = "8px"
    ball.style.transform = "rotate(-8deg) scale(0.85,1.3)"
    ball.textContent = "LET'S WORK"
    ball.style.fontSize = "25px"
    ball.style.fontWeight = "900"
    ball.style.color = "white"
})

hellop.addEventListener("mouseleave", ()=>{
    ball.style.height = "17px"
    ball.style.width = "17px"
    ball.innerHTML = ""
    ball.style.borderRadius = "25px"
    ball.style.transform = "rotate(0deg) scale(1,1)"
})

let csspan1 = document.querySelector(".csspan1")
let imagesspan1 = document.querySelectorAll(".images-span1")

let csspan2 = document.querySelector(".csspan2")
let imagesspan2 = document.querySelectorAll(".images-span2")
console.log(csspan2);
console.log(imagesspan2);


const sizes = [
    { w: 260, h: 340 },
    { w: 320, h: 220 },
    { w: 240, h: 340 },
    { w: 320, h: 250 },
    { w: 240, h: 340 }
]

let i1 = 0
let interval1

csspan1.addEventListener("mouseenter", () => {
    let z1 = 1
    interval1 = setInterval(() => {
        let currentImg = imagesspan1[i1]
        currentImg.style.zIndex = z1
        z1++
        currentImg.style.width = sizes[i1].w + "px"
        currentImg.style.height = sizes[i1].h + "px"
        let rotation = Math.random() * 20 - 10
        currentImg.style.opacity = "1"
        currentImg.style.transform =
        `translate(-50%,-80%) scale(1) rotate(${rotation}deg)`
        setTimeout(() => {
            currentImg.style.opacity = "0"
            currentImg.style.transform =
            `translate(-50%,-40%) scale(.95) rotate(${rotation}deg)`
        }, 800)
        i1++
        if(i1 >= imagesspan1.length){
            i1 = 0
        }
    }, 300)
})

csspan1.addEventListener("mouseleave", () => {
    clearInterval(interval1)
    imagesspan1.forEach((img) => {
        img.style.opacity = "0"
        img.style.zIndex = "1"
        img.style.transform =
        "translate(-50%,-40%) scale(.9) rotate(0deg)"
    })
    z1 = 1
    i1 = 0
})

const sizes1 = [
    { w: 220, h: 320 },
    { w: 320, h: 240 },
    { w: 220, h: 320 },
    { w: 320, h: 240 },
    { w: 220, h: 320 }
]

let i2 = 0
let interval2

csspan2.addEventListener("mouseenter", () => {
    let z2 = 1
    interval2 = setInterval(() => {
        let currentImg = imagesspan2[i2]
        currentImg.style.zIndex = z2
        z2++
        currentImg.style.width = sizes1[i2].w + "px"
        currentImg.style.height = sizes1[i2].h + "px"
        let rotation = Math.random() * 20 - 10
        currentImg.style.opacity = "1"
        currentImg.style.transform =
        `translate(-50%,-60%) scale(1) rotate(${rotation}deg)`
        setTimeout(() => {
            currentImg.style.opacity = "0"
            currentImg.style.transform =
            `translate(-50%,-40%) scale(.95) rotate(${rotation}deg)`
        }, 800)
        i2++
        if(i2 >= imagesspan2.length){
            i2 = 0
        }
    }, 300)
})

csspan2.addEventListener("mouseleave", () => {
    clearInterval(interval2)
    imagesspan2.forEach((img) => {
        img.style.opacity = "0"
        img.style.zIndex = "1"
        img.style.transform =
        "translate(-50%,-40%) scale(.9) rotate(0deg)"
    })
    z2 = 1
    i2 = 0
})
