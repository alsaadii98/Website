const menuB=document.querySelector("#menu");
const listB=document.querySelector("#list");

menuB.addEventListener("Click",()=>{
    if (listB.classList.contains('hidden')){
        listB.classList.remove('hidden')
    }else{
        listB.classList.add("hidden")
    }
})
