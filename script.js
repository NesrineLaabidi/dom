const like=document.getElementsByClassName('fa fa-heart')
for(let i of like){
    i.addEventListener('click',function(){
        i.classList.toggle("i")
    })
}