const img =document.querySelectorAll('.choix')
const gauche=document.querySelector('.gauche')
const droite=document.querySelector('.droite')

let aleat=setInterval(aleatoire,3000)
let compte=1

droite.addEventListener('click',()=>{
    compte++
    if (compte>img.length) {
        compte=1
    }
   image()
    
})
gauche.addEventListener('click',()=>{
    compte--
    if (compte<1) {
        compte=img.length
    }

    image()
})


function image() {
    img.forEach((imag,index)=>{
        if (index<compte) {
            imag.classList.add('active')
        }else{
            imag.classList.remove('active')
        }
    })
}

function aleatoire(){
    compte++
    if (compte>img.length) {
        compte=1
    }
    image()

}





