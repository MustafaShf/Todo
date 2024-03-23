let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.getElementById("list"); 

btn.addEventListener('click', function() {
    let valueInput = input.value;
    console.log(valueInput);
    
   if(valueInput!="" )
   {
    let li = document.createElement("li");
    let cross = document.createElement("button");
    li.textContent = valueInput;
    cross.textContent = "X";
    cross.classList.add("crossBtn");
   
    cross.addEventListener('click', function() {
      
        list.removeChild(li);
    });
    
    li.appendChild(cross);
    list.appendChild(li);
    input.value = "";
   }
});
