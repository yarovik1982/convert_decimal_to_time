// const products = [
//    {id:1,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:2,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:3,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:4,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:5,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:6,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:7,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:8,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:9,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:10,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:11,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:12,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:13,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:14,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:15,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:16,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:17,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:18,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:19,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:20,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:21,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:22,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:23,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:24,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:25,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:26,title:"title ",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:27,title:"title",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:28,title:"title ",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:29,title:"title ",img:"http://placehold.it/200x200/",description:"description",price:10},
//    {id:30,title:"title ",img:"http://placehold.it/200x200/",description:"description",price:10},
// ]
// // async function getData() {
// //    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// //    const data = await response.json();
// //    return data;
// //  }
 
//  async function main() {
//    const postsData = products
//    let currentPage = 1;
//    let rows = 9;
 
//    function displayList(arrData, rowPerPage, page) {
//      const productsEl = document.querySelector('.products');
//      productsEl.innerHTML = "";
//      page--;
 
//      const start = rowPerPage * page;
//      const end = start + rowPerPage;
//      const paginatedData = arrData.slice(start, end);
 
//      paginatedData.forEach((el) => {
//        const productEl = document.createElement("div");
//        productEl.classList.add("products-item");
//        productEl.innerHTML = `
//             <div class="products-inner card">
//                <div class="card-header">
//                   <img src=${el.img} alt="">
//                </div>
//                <div class="card-body">
//                   <h4 class="card-title">${el.title} ${el.id}</h4>
//                   <p class="card-text card-description">${el.description}</p>
//                   <p class="card-text card-price">${el.price} $</p>
//                </div>
//                <div class="card-footer">
//                   <button class="card-btn">купить</button>
//                </div>
//             </div>
//          `;
//        productsEl.appendChild(productEl);
//      })
//    }
 
//    function displayPagination(arrData, rowPerPage) {
//      const paginationEl = document.querySelector('.pagination');
//      const pagesCount = Math.ceil(arrData.length / rowPerPage);
//      const ulEl = document.createElement("ul");
//      ulEl.classList.add('pagination__list');
 
//      for (let i = 0; i < pagesCount; i++) {
//        const liEl = displayPaginationBtn(i + 1);
//        ulEl.appendChild(liEl)
//      }
//      paginationEl.appendChild(ulEl)
//    }
 
//    function displayPaginationBtn(page) {
//      const liEl = document.createElement("li");
//      liEl.classList.add('pagination__item')
//      liEl.innerText = page
 
//      if (currentPage == page) liEl.classList.add('pagination__item--active');
 
//      liEl.addEventListener('click', () => {
//        currentPage = page
//        displayList(postsData, rows, currentPage)
 
//        let currentItemLi = document.querySelector('li.pagination__item--active');
//        currentItemLi.classList.remove('pagination__item--active');
 
//        liEl.classList.add('pagination__item--active');
//      })
 
//      return liEl;
//    }
 
//    displayList(postsData, rows, currentPage);
//    displayPagination(postsData, rows);
//  }
 
//  main();


const input = document.querySelector('.convertor-inp')
const result = document.querySelector('.convertor-result')

input.addEventListener('input', () => {
   const value = input.value
   const resultValue = convertDecimalToTime(value)
   result.innerHTML = resultValue
})

function convertDecimalToTime(decimalTime) {
   // Получаем количество часов из целой части десятичного числа
   const hours = Math.floor(decimalTime);
 
   // Вычисляем количество минут из дробной части десятичного числа
   const minutesDecimal = decimalTime - hours;
   const minutes = Math.round(minutesDecimal * 60);
 
   // Форматируем результат в виде "чч:мм"
   const formattedTime = `${hours.toString().padStart(2, '0')}ч ${minutes.toString().padStart(2, '0')}м`;
   return formattedTime;
 }
 


 // Пример использования функции
//  const decimalTime = 12.75; // 12 часов 45 минут
//  const formattedTime = convertDecimalToTime(decimalTime);
//  console.log(formattedTime); // Выведет: "12:45"
 