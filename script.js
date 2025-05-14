

let countEl = document.getElementById('count-el'); 
let saveEl = document.getElementById('save-el');

let count=0;
function increment(){
    count+=1;
    countEl.innerText=count;
}


function save(){
   let save1= count+'-';
   saveEl.textContent+=save1;
   count=0;
   countEl.textContent = 0;
   
}

