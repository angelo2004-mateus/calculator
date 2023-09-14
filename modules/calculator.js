export default function calculatorOperations() {


    const btnNumbers = document.querySelectorAll('[data-numbers]');
    const displayResult = document.querySelector('.result')
    const btnOperators = document.querySelectorAll('[data-operadores]')
    
    btnNumbers.forEach((button) => {   
           button.addEventListener('click', writeInDisplay) 
    })
    
    
    //----------- função igualizar ----------
    
    const btnEqual = document.querySelector('.equal')
    btnEqual.addEventListener('click', equal)
    
    function equal() {
        const operation = displayResult.textContent
        displayResult.textContent = eval(operation)
    
    }
    
    //----------- função clear ----------
    
    const btnClear = document.querySelector('.clear');
    btnClear.addEventListener('click', clear)
    
    function clear() {
        displayResult.textContent = ''
    }
    
    //----------- função apagar ----------
    
    
    const btnErase = document.querySelector('.erase');
    btnErase.addEventListener('click', erase)
    
    function erase() {
    
        const result = displayResult.innerHTML
        displayResult.innerHTML = result.slice(0, -1)
    
        btnOperators.forEach((button) => {  
            button.addEventListener('click', writeInDisplay) 
        })
    }
    
    //----------------------------------------------------------------------------
    
    function writeInDisplay(event) {    
    
        btnOperators.forEach((button) => {  
            button.addEventListener('click', writeInDisplay) 
        })
    
        
        let btnValue = event.target.value;
    
        // verifica se o textarea não possui nenhum valor e se não tiver, o botão de operadores desativa
        if(event.target.hasAttribute('data-operadores') && displayResult.textContent == '') {
            btnValue = ''
            displayResult.textContent += btnValue;
    
        } else {
            displayResult.textContent += btnValue;
        }
        
            let currentOperator = displayResult.textContent.charAt(displayResult.textContent.length-1)
            let mathOperators = ['+', '-', '*', '/', '%']
            
         
        for(let i = 0; i <= mathOperators.length-1; i++) {
            if(currentOperator.includes(mathOperators[i])) {
            btnOperators.forEach(item => {
    
                item.removeEventListener('click', writeInDisplay)
            })}
    
        }
               
    }
    
    }
    

