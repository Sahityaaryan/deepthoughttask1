let journeyboard = document.querySelector('.journeyboard')
let hidshow = document.querySelector('.hidshow')
let disappear = document.querySelector('.disappear')
let show = document.querySelector('.show')
let tasklist = document.querySelector('.tasklist')
let slide = document.querySelector('.slide')
let point = document.querySelector('.point')
let hamburger = document.querySelector('.heading>em')
let hidshowone = document.querySelector('.hidshow>p')
let sback = document.querySelector('.back>p')
let back = document.querySelector('.back')
let assetfirstdesc = document.querySelector('.assetfirstdesc')
let assetseconddesc = document.querySelector('.assetseconddesc')
let assetthreedesc = document.querySelector('.assetthreedesc')
let assetfourdesc = document.querySelector('.assetfourdesc')
let assetfivedesc = document.querySelector('.assetfivedesc')
let assetsixdesc = document.querySelector('.assetsixdesc')
let descopenerone = document.querySelector('.descopenerone')
let descopenertwo = document.querySelector('.descopenertwo')
let descopenerthree = document.querySelector('.descopenerthree')
let descopenerfour = document.querySelector('.descopenerfour')
let descopenerfive = document.querySelector('.descopenerfive')
let descopenersix = document.querySelector('.descopenersix')
let specialeffects = document.querySelector('.specialeffects')

hamburger.addEventListener('click', ()=>{
    journeyboard.classList.toggle('slide')
    hidshow.classList.toggle('disappear')
    tasklist.classList.toggle('disappear')
    point.classList.toggle('disappear')
    back.classList.toggle('disappear')
})

hidshowone.addEventListener('click', ()=>{
    journeyboard.classList.toggle('slide')
    hidshow.classList.toggle('disappear')
    tasklist.classList.toggle('disappear')
    point.classList.toggle('disappear')
    back.classList.toggle('disappear')
    // tasklist.classList.toggle('specialeffects')
})
point.addEventListener('click', ()=>{
    tasklist.classList.toggle('disappear')
    // tasklist.classList.toggle('specialeffects')
})
back.addEventListener('click', ()=>{
            journeyboard.classList.toggle('slide')
            hidshow.classList.toggle('disappear')
    tasklist.classList.toggle('disappear')
    point.classList.toggle('disappear')
    back.classList.toggle('disappear')
})
descopenerone.addEventListener('click', ()=>{
    assetfirstdesc.classList.toggle('disappear')
    // descopenerone.classList.toggle('rotate')
})
descopenertwo.addEventListener('click', ()=>{
    assetseconddesc.classList.toggle('disappear')
    // descopenertwo.classList.toggle('rotate')
})
descopenerthree.addEventListener('click', ()=>{
    assetthreedesc.classList.toggle('disappear')
    // descopenerthree.classList.toggle('rotate')
})
descopenerfour.addEventListener('click', ()=>{
    assetfourdesc.classList.toggle('disappear')
    // descopenerfour.classList.toggle('rotate')
})
descopenerfive.addEventListener('click', ()=>{
    assetfivedesc.classList.toggle('disappear')
    // descopenerfive.classList.toggle('rotate')
})
descopenersix.addEventListener('click', ()=>{
    assetsixdesc.classList.toggle('disappear')
    // descopenersix.classList.toggle('rotate')

})