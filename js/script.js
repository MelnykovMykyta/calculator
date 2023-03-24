function calc2(arg){
    var formula3 = document.getElementById("formula3");

    if(arg === "="){
        let formula4 = formula3.value;
        let a = 0;
        for(let i = 0; i<formula4.length; i++){
            if(formula4[i] >= "0" && formula4[i] <= "9" || 
                formula4[i] == "+" || 
                formula4[i] == "-" ||
                formula4[i] == "/" ||
                formula4[i] == "*" ||
                formula4[i] == "(" ||
                formula4[i] == ")" ||
                formula4[i] == " " ||
                formula4[i] == "."){
            a++;
            } else {
                a--;
            }
            if (a>=formula4.length && a != 0){
                formula3.value = eval(formula4);
            } else {
                formula3.value = "Введіть вираз!";
            }
        }

    } else if(arg === "clear"){
        formula3.value = "";
    } else {
        formula3.value += `${arg}`;
    }
}