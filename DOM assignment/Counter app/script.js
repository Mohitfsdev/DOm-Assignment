const decrement=document.getElementById("decrement")
const increment=document.getElementById("increment")
const displayValue=document.getElementById("displayValue")
const reset=document.getElementById("reset")

decrement.addEventListener("click",()=>{
    const value=Number(displayValue.innerText)
    if (value >0) {
        displayValue.innerText=value-1
    }    
    else{
    alert("Negative values are not allowed")  
    }  
})
increment.addEventListener("click",()=>{
    const value=Number(displayValue.innerText)
    if (value >=10) {
        alert("10+ values are not allowed")
    }    
    else{
        displayValue.innerText=value+1 
    }  
})
reset.addEventListener("click",()=>{
    displayValue.innerText=0
})