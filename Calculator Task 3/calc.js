document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const deleteButton = document.querySelector('button i.fas.fa-trash');
    const deleteSingleValueButton = document.getElementById('deleteSingleValueButton');
    const buttons = document.querySelectorAll('button');
    const equalButton = document.querySelector('.buttonfunc');

    //single value
    function deleteSingleValue() {
        inputBox.value = inputBox.value.slice(0, -1);
    }

    deleteSingleValueButton.addEventListener('click', deleteSingleValue());

    // Delete Button
    deleteButton.parentElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('fas') && event.target.classList.contains('fa-trash')) {
         inputBox.value = '';
        }
    });

    // = button
    equalButton.addEventListener('click', function () {

        const expression = inputBox.value.replace(/×/, '*');

        // Evaluate & display 
        try {
            const result = eval(expression);
            inputBox.value = result; 
        } catch (error) {
            inputBox.value = 'Error'; 
        }
    });

    // Event listeners
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (button === deleteSingleValueButton) {
                deleteSingleValue();
            } else if (button === deleteButton.parentElement) {
                inputBox.value = '';
            } else if (button === equalButton) {
                equalButton.click(); 
            }else {
                if (inputBox.value === 'Error') {
                    inputBox.value = ''; 
                }
                inputBox.value += buttonText;
            }
        });
    });
});  