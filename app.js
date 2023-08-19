let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    const value = button.dataset.key;

    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value=string;
        }

        else if(value == "brackets"){

            if(string.indexOf("(") == -1 || string.indexOf("(") != -1 && string.indexOf(")") != -1 && 
            string.lastIndexOf("(") < string.lastIndexOf(")")){
                string += "(";
                input.value = string;
            }

            else if (string.indexOf("(") != -1 && string.indexOf(")") == -1 || string.indexOf("(") != -1 && string.indexOf(")") != -1 && input.lastIndexOf("(") > string.lastIndexOf(")")){
                string += ")";
                input.value = string;
            }
        }

        else if(value == '/') {
            string += value;
            input.value = string;
        }

        else if(value == '*'){
            string += value;
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})