const output = document.getElementById('output-screen');

function display(num) {
    output.value += num 
}

function clearOutput() {
    output.value = "";
}

function calculate(){
    try {
        if(output.value.length == 0){
            return
        }
          output.value = eval(output.value)

    } catch (error) {
        alert("Invalid expression")
        
    }
  
}

window.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Enter') {
        calculate();
    
    }  else if (key === 'Escape') {
        clear();
    }  else if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        display(key);
    } else if (key === 'Backspace') {
        deleteText();
    }

       
    
});

function deleteText() {
    output.value = output.value.slice(0, -1);
}