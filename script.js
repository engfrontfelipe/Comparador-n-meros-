const form = document.getElementById("form1");
const num1 = document.getElementById("value1");
const num2 = document.getElementById("value2");
const result = document.getElementById("result")

function clear(){
    result.style.display = "none"
}

function compare(a, b){
    const valueA = parseInt(a.value);
    const valueB = parseInt(b.value);
        if (valueA < valueB) {
            result.style.display = "block"
            result.innerHTML = "A comparação está correta."
            
            num1.value = " "
            num2.value = " "

        } else {
            result.style.display = "block"
            result.innerHTML = "A comparação está incorreta."       
            
            num1.value = " "
            num2.value = " "
         }}

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    compare(num1, num2);
});

value1.addEventListener("focus", clear)
value2.addEventListener("focus", clear)