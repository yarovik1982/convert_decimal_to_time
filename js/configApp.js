export const configApp = {
    templates:{
      calculator: `<div class="form-header">
            <h3 class="form-title">Калькулятор</h3>
         </div>
         <div class="form-body">
            <div class="form-row">
               <input type="text" class="form-inp" id="num1" placeholder="Введите десятичное число в формате '00.00'" style="margin-bottom: 8px;" >
               <input type="text" class="form-inp" id="num2" placeholder="Введите десятичное число в формате '00.00'">
               <div class="form-radiogroup">
                  <button class="btn-action" id="plus">+</button>
                  <button class="btn-action" id="minus">-</button>
               </div>
            </div>
            <div class="form-row">
               <div class="form-result"></div>
            </div>
         </div>
         <div class="form-footer">
            <div class="form-row">
               <button class="form-btn" id="btn-clean">Очистить</button>
            </div>
         </div>`,
    converter: `<div class="form-header">
            <h3 class="form-title">Конвертор</h3>
         </div>
         <div class="form-body">
            <div class="form-row">
               <input type="text" id="num" class="form-inp" placeholder="Введите десятичное число в формате '00.00'">
               <div class="form-note">Целая часть введенного числа равна кол-ву часов, конвертируется только дробная часть числа(минуты)</div>
            </div>
            <div class="form-row">
               <div class="form-result"></div>
            </div>
         </div>
         <div class="form-footer">
            <div class="form-row">
               <button class="form-btn" id="btn-clean">Очистить</button>
            </div>
         </div>`,
    converterTotal: `<div class="form-header">
            <h3 class="form-title">Выработка в день</h3>
         </div>
         <div class="form-body">
            <div class="form-row">
               <input type="text" class="form-inp" id="inpTime" placeholder="Введите десятичное число в формате '00.00'" id="inpHorst">
               
            </div>
            <div class="form-row">
               <input type="text" class="form-inp" id="inpDay" placeholder="Количество дней" id="inpDay">
               <div class="form-note">30 или 31 день для обычного месяца и 28 или 29 дней в феврале</div>
            </div>
            <div class="form-row">
               <div class="form-result"></div>
            </div>
         </div>
         <div class="form-footer">
            <div class="form-row">
               <button class="form-btn" id="btn-calc">Рассчитать</button>
            </div>
            <div class="form-row">
               <button class="form-btn" id="btn-clean">Очистить</button>
            </div>
         </div>`,
         percent_D_O: `<div class="form-header">
            <h3 class="form-title">Расчет процентов Д + О</h3>
         </div>
         <div class="form-body">
            <div class="form-row">
               <label for="time1">Время диалога из вкл. Статистика</label>
               <input type="text" class="form-inp" id="time1" placeholder="Введите время в формате 'чч:мм'" style="margin-bottom: 8px;" >
            </div>
            <div class="form-row">
               <label for="time2">Время ожидания из вкл. Статистика</label>
               <input type="text" class="form-inp" id="time2" placeholder="Введите время в формате 'чч:мм'">
            </div>
            </div>
            <div class="form-row">
               <div class="form-result"></div>
            </div>
         </div>
         <div class="form-footer">
         <div class="form-row">
               <button class="form-btn" id="btn-calc">Рассчитать</button>
            </div>
            <div class="form-row">
               <button class="form-btn" id="btn-clean">Очистить</button>
            </div>
         </div>`,
         feeCalc:`<div class="form-header">
            <h3 class="form-title">Этот калькулятор находится в стадии разработки и в настоящее время недоступен.</h3>
         </div>`
    },
    tabActiveClass: 'tab__item_active',
    formContainer: document.querySelector('.form-container')
    
};
