function convertation() {
   const convertor = document.getElementById('convertor')
    const input = convertor.querySelector(".convertor-inp");
    const result = convertor.querySelector(".convertor-result");
    const btnClean = convertor.querySelector(".btn-clean");

    input.addEventListener("input", () => {
        const value = input.value;
        const resultValue = convertDecimalToTime(value);
        result.innerHTML = resultValue;
    });

    btnClean.addEventListener("click", (e) => {
        e.preventDefault();
        clean();
    });

    function clean() {
        input.value = "";
        result.innerHTML = "";
        input.focus();
    }

    function convertDecimalToTime(decimalTime) {
        const hours = Math.floor(decimalTime);

        const minutesDecimal = decimalTime - hours;
        const minutes = Math.round(minutesDecimal * 60);

        const formattedTime = `${hours.toString().padStart(2, "0")}ч ${minutes
            .toString()
            .padStart(2, "0")}м`;
        return formattedTime;
    }
}

function calculation(){
   const calculator = document.getElementById('calculator')
   const calcResult = calculator.querySelector('.convertor-result')
   const btnClean = calculator.querySelector('.btn-clean')

   function convertToMinutes(decimal) {
      const hours = Math.floor(decimal);
      const minutes = Math.round((decimal - hours) * 60);
      return { hours, minutes };
      }
      
      function formatTime(hours, minutes) {
      return `${String(hours).padStart(2, '0')}ч ${String(minutes).padStart(2, '0')}м`;
      }
      
      function calculate(action) {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      
      if (isNaN(num1) || isNaN(num2)) {
      alert('Пожалуйста, введите корректные числа.');
      return;
      }
      
      let result;
      if (action === 'plus') {
      result = num1 + num2;
      } else if (action === 'minus') {
      result = num1 - num2;
      }
      
      const { hours, minutes } = convertToMinutes(result);
      calcResult.textContent = formatTime(hours, minutes);
      }
      
      document.querySelectorAll('.btn-action').forEach(btn => {
      btn.addEventListener('click', e => {
         e.preventDefault()
         const id = e.target.id
         calculate(id)
      });
      });

      btnClean.addEventListener('click', e => {
         e.preventDefault()
         clearFields()
      })
      
      function clearFields() {
      document.getElementById('num1').value = '';
      document.getElementById('num2').value = '';
      calcResult.textContent = '';
      document.getElementById('num1').focus()
      }
}

convertation();
calculation()
