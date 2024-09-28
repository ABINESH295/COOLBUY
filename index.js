toggle=document.getElementById("toggle")
sidebar=document.getElementById("sidebar")
cancel=document.getElementById("cancel")

toggle.addEventListener("click",()=>{
    sidebar.style.left="0"
})
cancel.addEventListener("click",()=>{
    sidebar.style.left="-60%"
})

