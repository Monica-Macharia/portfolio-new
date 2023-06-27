let arrow = document.getElementsByClassName("next")[0]
let back = document.getElementsByClassName("back")[0]
let forward = document.getElementsByClassName("forward")[0]
console.log(forward)
let reverse = document.getElementsByClassName("reverse")[0]
console.log(reverse)
let project = document.getElementsByClassName("projects")[0].children
console.log(project)
let projects = document.getElementsByClassName("projects")[0]
let articles = document.getElementsByClassName("articles")[0]
console.log(
    articles
)
let page = document.getElementsByClassName("page")

 
arrow.addEventListener('click', function(){
    let scrollAmount = 700 
      projects.scrollLeft += scrollAmount  
   
})
back.addEventListener('click', function(){
    let scrollAmount = 700 
    projects.scrollLeft -= scrollAmount  
 
})
forward.addEventListener('click', function(){
    console.log("clicked")
    let scrollAmount = 9900
    articles.scrollLeft += scrollAmount  
 
})
reverse.addEventListener('click', function(){
    
    console.log("clicked")
    let scrollAmount = 9900
    articles.scrollLeft -= scrollAmount  
 
})

