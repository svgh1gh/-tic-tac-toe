let x=document.getElementsByClassName("n")
const check=()=>{
    if(x[0].innerText===x[1].innerText===x[2].innerText==="o"||
         x[0].innerText===x[3].innerText===x[6].innerText==="o"|| 
         x[0].innerText===x[4].innerText===x[8].innerText==="o"||
         x[3].innerText===x[4].innerText===x[5].innerText==="o"||
         x[6].innerText===x[7].innerText===x[8].innerText==="o"||
         x[1].innerText===x[4].innerText===x[7].innerText==="o"||
         x[2].innerText===x[5].innerText===x[8].innerText==="o"||
         x[2].innerText===x[4].innerText===x[6].innerText==="o")
    alert("POBEDA HUMANA");
    if(x[0].innerText===x[1].innerText===x[2].innerText==="x"||
    x[0].innerText===x[3].innerText===x[6].innerText==="x"|| 
    x[0].innerText===x[4].innerText===x[8].innerText==="x"||
    x[3].innerText===x[4].innerText===x[5].innerText==="x"||
    x[6].innerText===x[7].innerText===x[8].innerText==="x"||
    x[1].innerText===x[4].innerText===x[7].innerText==="x"||
    x[2].innerText===x[5].innerText===x[8].innerText==="x"||
    x[2].innerText===x[4].innerText===x[6].innerText==="x")
    alert("POBEDA KOMPA")
}
const f = (event) =>{
    if(!event.target.innerText){
        event.target.innerText= "o"
        const newmass=Array.from(x).filter((n)=>{
            return n.innerText===""
        })
        let y = newmass[Math.floor(Math.random()*newmass.length)]
        if(y){
            y.innerText="x"
        }
        check()
    }
}
for (child of x){
    child.addEventListener('click', f)
}