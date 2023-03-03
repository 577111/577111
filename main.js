var btn =document.querySelector('#submit');
var text=document.querySelector('#text');

var password= document.querySelector('#password');
var data=document.querySelector('.data');


text.addEventListener('change', function(e){

localStorage.setItem('text',e.target.value);
});




password.addEventListener('change', function(e){
  
localStorage.setItem('password',e.target.value);

});

btn.addEventListener('click',function(e){
  
});

var gtext=localStorage.getItem('text');

var gpassword=localStorage.getItem('password');

let passwords=[];
passwords.push(gpassword);
localStorage.setItem('arps',passwords);
var spass=localStorage.getItem('arps');
var sub=document.querySelector('form');

sub.addEventListener('submit',(e)=>{
 
})
