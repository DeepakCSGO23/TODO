// var addEventListener("event.")'
var i=0
function add(){
    var inputText=document.getElementById("todovalue").value
    if(inputText==""){
        return
    }
    console.log(inputText)
    var text=document.createTextNode(`${inputText}`)
    var span=document.createElement("p")
    span.appendChild(text)
    span.classList.add("border")
    document.getElementById("display").appendChild(span)
    //close-x
    var closespan=document.createElement("span")
    closespan.addEventListener("click",remove)
    closespan.id=`epudi${i}`
    i++;
    var close=document.createTextNode("X")
    closespan.classList.add("close")
    closespan.appendChild(close)
    span.appendChild(closespan)
}
function remove(event){
//console.log("close is clicked")
const target=event.target
console.log(target.parentElement)
document.getElementById("display").removeChild(target.parentElement)
}