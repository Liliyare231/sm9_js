let for_box = document.querySelector('.for_box');
document.addEventListener('keyup', function (event) {
   if (event.key.toLowerCase() == 'r') {
      document.body.style.background = 'red'
   }
   if (event.key.toLowerCase() == 'g') {
      document.body.style.background = 'green'
   }
   if (event.key.toLowerCase() == 'b') {
      document.body.style.background = 'blue'
   }
})


// Вторая часть задания

const box = document.querySelector('.box');

document.addEventListener('keydown', (event) => {

   //  берет значение из сss 
   let lastTop = parseFloat(box.style.top);
   let lastLefts = parseFloat(box.style.left);

   if (isNaN(lastTop)) {
      lastTop = 50;
   }
   if (isNaN(lastLefts )) {
      lastLefts = 50;
   }
   // вверх
   if (event.key.toLowerCase() == 'w') {
      box.style.top = `${lastTop - 1}px`;
   }
   // направо 
   if (event.key.toLowerCase() == 'd') {
      box.style.left = `${lastLefts  + 1}px`;
 
   }
   // вниз
   if (event.key.toLowerCase() == 's') {
      box.style.top = `${lastTop + 1}px`;
  
   }
   // налево
   if (event.key.toLowerCase() == 'a') {
      box.style.left = `${lastLefts - 1}px`;
     
   }
});