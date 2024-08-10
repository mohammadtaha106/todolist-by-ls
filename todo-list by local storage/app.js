let title = document.getElementById('title')
let desc = document.getElementById('desc')
let submit = document.getElementById('submit')
let deletebtn = document.getElementById('deletebtn')
let todo_container = document.getElementById("todo_container")


submit.addEventListener("click",(e)=>{
    let titlec = title.value
let descc = desc.value
e.preventDefault()
localStorage.setItem("todo",JSON.stringify([titlec,descc]))

console.log(e);
todo_container.innerHTML= `
<h1><h2>Todo Title<h2/>
${titlec}
</h1>
<p>
<h2>Todo desc<h2/>
${descc}</p>
`

title.value = ""
desc.value = ""
})

deletebtn.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem("todo")
    todo_container.innerHTML =""

})