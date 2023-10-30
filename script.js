//your JS code here. If required.
let btn = document.querySelector("input");
let select = document.querySelector("select");
btn.addEventListener("click", onSubmit);
function onSubmit(){
    
    let child = select.children;
    for ( let i= 0; i < child.length; i++){
        if(select.value === child[i].value){
            child[i].remove();
        }
    }
}