const burger=document.querySelector(".hamburger");
const ul=document.querySelector("ul");

burger.addEventListener('click', ()=>{
     ul.classList.toggle('active');

     let ham_child =burger.firstElementChild;
     if(ul.classList.contains("active")){
        ham_child.classList.replace('fa-bars', 'fa-xmark');

   }
   else
   {
        ham_child.classList.replace('fa-xmark','fa-bars')
   }
});

