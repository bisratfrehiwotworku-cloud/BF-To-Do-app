if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js') // 👈 Added dot: './sw.js'
      .then((reg) => {
        console.log('SW registered!', reg.scope);
        reg.update(); // 👈 Checks GitHub for new updates on launch!
      })
      .catch((err) => console.error('SW registration failed!', err));
  });
}


window.addEventListener('DOMContentLoaded',()=>{
  let saving = localStorage.getItem('text')||`<div id="h3">Empty Task!</div>`;
  let box = document.getElementById('box');
   box.innerHTML=saving;
});

// Page Auto Transition 
let one = document.getElementById('one');
let two = document.getElementById('two');

one.style.display='block';
setTimeout(()=>{
  one.style.display='none';
  two.style.display='block'; 
},1500);
console.log()

function update(){
    let saving = localStorage.getItem('text');
    let box = document.getElementById('box');
    box.innerHTML=saving;
    let h1 = document.querySelector('.h1');
  let saved = localStorage.getItem('h1');
  h1.innerText=saved;
}
   
/*
function text(){
  let item = document.querySelectorAll('.item');
  let h3 = document.getElementById('h3');
  if(item.length===0){
   let h3 = document.getElementById('h3');
   h3.textContent='Empty Task';
   
 }else{
   h3.textContent='';
 }
 update();
}
*/
function add(){
  let box = document.getElementById('box');
  let input = document.getElementById('inp'); 
  let inp = input.value;
  update()
  if(!inp){
    let message = document.querySelector('.message'); 
    let val = document.querySelector('.validator')
    let h2 = document.getElementById('h2');
    
   // let h3 = document.getElementById('h3'); 
    h2.innerHTML='Put task before you add!';
    val.style.opacity=0;
    message.style.height='80px';
    message.style.boxShadow='1px 1px 50px red'
    message.style.opacity=1;
    message.style.zIndex=999;
    setTimeout(()=>{
      message.style.opacity=0;
      message.style.zIndex=-2;
    },30000)
    return;
  }
  let ne= `<div class='item' id="item-row"><span id="text" contentEditable="false">${inp}</span> <div class="bo"><button  onclick="del(this)" id="delo">X</button><button class='delo' onclick="editor(this)">🖊️</button></div></div>`;
  let old = box.innerHTML;
  box.innerHTML= ne+old;
  
  localStorage.setItem('text',box.innerHTML);
  console.log(box.innerHTML.length)
  update();
  input.value='';
  let item = document.querySelectorAll('.item');
  let total =item.length;
  let h1 = document.querySelector('.h1');
    let task = document.querySelector('.task');
  if(total>1){
    task.textContent='tasks.';
  }
  h1.innerText=total;
  console.log(h1.innerText)
  localStorage.setItem('h1',total)

  update();
  
}
let activebtn = null;
function del(btn){
  activebtn=btn;
   let message = document.querySelector('.message'); 
    let val = document.querySelector('.validator');
    let h2 = document.getElementById('h2');
    message.style.opacity=1;
    message.style.height='170px';
    message.style.boxShadow='1px 1px 50px black'; 
    val.style.opacity=1;
    message.style.zIndex=999;
  h2.textContent='Are you sure do want permanently remove this task?';
}
function dele(){
  if(activebtn){
    activebtn.parentElement.parentElement.remove();
    let box = document.getElementById('box');
  localStorage.setItem('text',box.innerHTML);
  
let gain = localStorage.getItem('h1');
localStorage.setItem('h1',gain-1);
update()
  }
let message = document.querySelector('.message');
  message.style.opacity=0;
  message.style.zIndex=-2;
  }

function op(){
  let message = document.querySelector('.message');
  message.style.opacity=0;
  message.style.zIndex=-2;
}

function digout(){
  let come =localStorage.getItem('text');
   console.log(come);
   update()
}
digout()


function editor(btn){
  const one = btn.parentElement;
  const two = one.parentElement;
  const three = two.querySelector('span');
  if(three){
    three.contentEditable='true';
    three.focus();
    const selected = window.getSelection();
    if(three.firstChild){
      selected.collapse(three.firstChild, three.firstChild.length);
    }
  }
  three.addEventListener('blur', () => {
    let box = document.getElementById('box');
     let saving = localStorage.setItem('text',box.innerHTML);

   });
}
// Create a visual install button on the screen dynamically
const installBtn = document.createElement('button');
installBtn.innerText = '📲 Install BF To-Do App';
installBtn.style.position = 'fixed';
installBtn.style.bottom = '20px';
installBtn.style.left = '50%';
installBtn.style.transform = 'translateX(-50%)';
installBtn.style.padding = '12px 24px';
installBtn.style.background = '#00ff00';
installBtn.style.color = '#000';
installBtn.style.fontWeight = 'bold';
installBtn.style.border = 'none';
installBtn.style.borderRadius = '25px';
installBtn.style.zIndex = '9999';
installBtn.style.display = 'none'; // Hidden by default
document.body.appendChild(installBtn);

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome from showing its default prompt immediately
  e.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = e;
  // Show our custom install button on the screen
  installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the native browser install banner
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // We used the prompt, clear it out
    deferredPrompt = null;
    // Hide our custom button again
    installBtn.style.display = 'none';
  }
});

window.addEventListener('appinstalled', () => {
  console.log('PWA was installed successfully!');
  installBtn.style.display = 'none';
});

