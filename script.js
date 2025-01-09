let numberHolder = "";

let button = document.querySelectorAll('button');
Array.from(button).forEach((press)=>{
    press.addEventListener('click', (n) => {
        if(n.target.innerHTML == '='){
            numberHolder = eval(numberHolder);
            document.querySelector('input').value = numberHolder;
            return(numberHolder);
        }
        else if(n.target.innerHTML == "AC"){
            numberHolder = ""
            document.querySelector('input').value = numberHolder;
            return;

        }
        else{
        numberHolder = numberHolder + n.target.innerHTML;
        document.querySelector('input').value = numberHolder;
        }
    })
})