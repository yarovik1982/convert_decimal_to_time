export function useBurger(){
   const burger = document.querySelector('.burger')
   const tabList = document.querySelector('.tab__list')
   
   if(burger){
      burger.addEventListener('click', (e) => {
         const curr = e.currentTarget
         if(curr){
            tabList.classList.toggle('tab__list_active')
         }
      })
      tabList.addEventListener('click', e => {
         const curr = e.target
         if(tabList.classList.contains('tab__list_active') && curr.closest('.tab__item')){
            tabList.classList.remove('tab__list_active')
         }
      })
   }
   
}