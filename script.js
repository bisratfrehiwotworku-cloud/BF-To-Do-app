if ('service worker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered!', reg))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}

window.addEventListener('DOMContentLoaded',()=>{
  let hh1 = document.querySelector('.hh1');
let saveed = localStorage.getItem('hh1' || 'no task.');
hh1.innerText = saveed;
  let saving = localStorage.getItem('text')||`<div id="h3">Empty Task!</div>`;
  let box = document.getElementById('box');
   box.innerHTML=saving;
   let users=document.querySelector('.users');
   let saved = localStorage.getItem('user');
   users.textContent=saved;
   let user=document.querySelector('.user');
   let bar1 = localStorage.getItem('userbar1');
   
   let bar2 = localStorage.getItem('userbar2');
   user.style.opacity=bar1;
   user.style.zIndex=bar2;
   let boxin = document.querySelector('.boxin');
   let tboxin = document.querySelector('.tboxin');
   let boxi = localStorage.getItem('boxin');
   let tboxi = localStorage.getItem('boxin');
   boxin.style.display = boxi;
   tboxin.style.display = tboxi;
   update();
  });

// Page Auto Transition 
let one = document.getElementById('one');
let two = document.getElementById('two');
setTimeout(() => {
  one.classList.remove('active');
  two.classList.add('active');
}, 1200);
function clickpage(page){
  let pages = document.querySelectorAll('.no');
  pages.forEach((p)=>{
    p.classList.remove('active');
  });
  document.getElementById(page).classList.add('active');
  update();
}

function update(){
    let saving = localStorage.getItem('text');
    let boxin=document.querySelector('.boxin');
    let box = document.getElementById('box');
    let task = document.querySelector('.task');
    let tboxin=document.querySelector('.tboxin');
    let user = document.querySelector('.user');
    let users = document.querySelector('.users');
    box.innerHTML=saving;
    let hh1 = document.querySelector('.hh1');
    let saved = localStorage.getItem('hh1'||'no task.');
    hh1.innerText=saved;
    
    let one =localStorage.getItem('user');
    let two = localStorage.getItem('userbar1');
    let three = localStorage.getItem('userbar2');
    let de = localStorage.getItem('tboxin');
    let s = localStorage.getItem('s');
    task.innerText=s;
    let bo = localStorage.getItem('boxin');
    boxin.style.display = bo;
    tboxin.style.display=de;
    users.textContent=one;
    user.style.opacity=two;
    user.style.zIndex=three;
}
   
function username(){
  let inpp = document.getElementById('inpp').value;
  let user=document.querySelector('.user');
  let users=document.querySelector('.users');
 let options=document.querySelector('.options');
  
 let boxin=document.querySelector('.boxin');
 let tboxin=document.querySelector('.tboxin');
 boxin.style.backgroundColor='#5F7664';
 setTimeout(()=>{
   boxin.style.backgroundColor='white';
 },100)
 if(!inpp){
   let message = document.querySelector('.message');
   let val = document.querySelector('.validator')
  let h2 = document.getElementById('h2');

// let h3 = document.getElementById('h3'); 
h2.innerHTML = 'Enter your name to personalize your app!';
val.style.opacity = 0;
message.style.height = '80px';
message.style.boxShadow = '1px 1px 50px red';
message.style.display ='block';
message.style.opacity = 1;
//message.style.position='relative';
message.style.top='500px';
message.style.backgroundColor='green';
message.style.zIndex =999;
options.style.zIndex =990;

setTimeout(()=>{
  message.style.display ='none';
},2500)

   return;
 }
 tboxin.style.display='none';
 tboxin.style.zIndex=-2;
// tboxin.style.zIndex=-2;
 boxin.style.display='none';
 localStorage.setItem('boxin',boxin.style.display);
 localStorage.setItem('tboxin',tboxin.style.display);
// localStorage.setItem('tboxinz',tboxin.style.zIndex);
  user.style.opacity = 0;
  user.style.zIndex = -2;
  users.textContent='Hi '+inpp+', ';
  localStorage.setItem('user',users.textContent);
  localStorage.setItem('userbar1',user.style.opacity);
  localStorage.setItem('userbar2',user.style.zIndex);
  
}
//*****

//*****
function add(){
  let box = document.getElementById('box');
  let input = document.getElementById('inp'); 
  let inp = input.value;
  update()
  if(!inp || inp==' '){
    let message = document.querySelector('.message'); 
    let val = document.querySelector('.validator')
    let h2 = document.getElementById('h2');
    
   let h3 = document.getElementById('h3'); 
    h2.innerHTML='Put task before you add!';
    val.style.opacity=0;
    message.style.height='80px';
    message.style.boxShadow='1px 1px 50px red'
    message.style.display='block';
    message.style.position='absolute';
    message.style.top='180px';
    message.style.opacity=1;
    message.style.zIndex=999;
    setTimeout(()=>{
      message.style.opacity=0;
      message.style.zIndex=-2;
    },3000)
    return;
  }
  let ne= `<div class='item' id="item-row"><span id="text" contentEditable="false">${inp}</span> <div class="bo"><button  onclick="del(this)" id="delo">X</button><button class='delo' onclick="editor(this)">🖊️</button>
</div></div>`;
  let old = box.innerHTML;
  box.innerHTML= ne+old;
  
  localStorage.setItem('text',box.innerHTML);
  console.log(box.innerHTML.length)
  update();
  input.value='';
  
  let item = document.querySelectorAll('.item');
  let total =item.length;
  let hh1 = document.querySelector('.hh1');
  

  let task = document.querySelector('.task');
  
    if (total === 0) {
  task.innerText = '0 task.';
  localStorage.setItem('s', task.innerText)
  update();
}
    if (total === 1) {
  task.innerText = 'task.';
  localStorage.setItem('s', task.innerText)
  update();
}
  if(total>1){
    task.innerText='tasks.';
    localStorage.setItem('s',task.innerText)
    update();
  }
  
  hh1.innerText=total;
  console.log(hh1.innerText)
  localStorage.setItem('hh1',total)

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
  h2.textContent='Are you sure do you want permanently remove this task?';
  console.log('Are you sure do you want permanently remove this task?')
  
}
function dele(){
  if(activebtn){
    activebtn.parentElement.parentElement.remove();
    let box = document.getElementById('box');
  localStorage.setItem('text',box.innerHTML);
  
let gain = localStorage.getItem('hh1');
localStorage.setItem('hh1',gain-1);
update()
  }
let message = document.querySelector('.message');
  message.style.opacity=0;
  message.style.display='block';
  message.style.zIndex=-2;
  }
function act() {
  let item = document.querySelectorAll('.item');
  let total = item.length;
  let hh1 = document.querySelector('.hh1');
  let task = document.querySelector('.task');
  
 if (total === 1) {
    task.innerText = 'task.';
    localStorage.setItem('s', task.innerText)
    update();
    //dele()
  }
  else if (total > 1) {
    task.innerText = 'tasks.';
    localStorage.setItem('s', task.innerText)
    update();
   // dele()
  }
  update()
  
}
act()
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

function alll(){
  let saving = localStorage.removeItem('text');
  let box = document.getElementById('box');
  let h3 = document.getElementById('h3');
  let hh1 = document.querySelector('.hh1');
  let saved = localStorage.removeItem('hh1');
  box.innerHTML=saving;
  update();

  hh1.innerText = 0;
  box.innerHTML=`<div id="h3">🧹 <span class='doo'>No tasks yet!</span></div>`;
  let doo = document.querySelector('.doo');
  doo.style.fontSize='20px';
  doo.style.color='black';
}
function change(){
  let user = document.querySelector('.user');
  let boxin=document.querySelector('.boxin');
  let tboxin=document.querySelector('.tboxin');
  let users = document.querySelector('.users');
  let one = localStorage.removeItem('user');
  let two = localStorage.removeItem('userbar1');
  let three= localStorage.removeItem('userbar2');
  let de = localStorage.removeItem('tboxin');
  let bo = localStorage.removeItem('boxin');

  boxin.style.display=bo;
  tboxin.style.display = de;
  user.style.zIndex = 999;
  users.textContent=one;
  users.style.opacity=two;
  users.style.zIndex=three;
  
  username();
  update();
}
function search() {
  const input = document
    .getElementById('inp2')
    .value
    .toLowerCase()
    .trim();
  
  const items = document.querySelectorAll('.item');
  
  items.forEach((one) => {
    const text = one.textContent.toLowerCase();
    
    one.style.display = text.includes(input) ? '' : 'none';
  });
}
function ser(){
  const serbox = document.querySelector('.serbox');
  const input = document
  .getElementById('inp2').addEventListener('input',search);
  serbox.style.display='block';
}
function x(){
  const serbox = document.querySelector('.serbox');
  const search = document.querySelector('.search');
  serbox.style.display='none';
}
//localStorage.clear()
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
