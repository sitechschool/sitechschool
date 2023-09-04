/*Clique pou faire afficher  cour informatique bureautique*/
function item1(){
   var btn1 = document.getElementById('btnItem1');
   var item1 = document.getElementById('item1');
   var item1R = document.getElementById('item1R');
    console.log(btn1.textContent);

    if(btn1.textContent === "Plus infos"){
        btn1.textContent ='Fermez cette fenetre';
       item1R.style.display = "block";
       item1R.style.width = '100%';
       item1.style.display = "none"
    }else if(btn1.textContent ==='Fermez cette fenetre'){
        btn1.textContent ='Plus infos';
        item1R.style.display = "none";
        item1.style.display = "block"
    }else{

    }
}

/*Clique pou faire afficher  cour informatique bureautique*/
function item2(){
    var btn2 = document.getElementById('btnItem2');
    var item2 = document.getElementById('item2');
    var item2R = document.getElementById('item2R');
     console.log(btn2.textContent);
 
     if(btn2.textContent === "Plus infos"){
         btn2.textContent ='Fermez cette fenetre';
        item2R.style.display = "block";
        item2R.style.width = '100%';
        item2.style.display = "none"
     }else if(btn2.textContent ==='Fermez cette fenetre'){
         btn2.textContent ='Plus infos';
         item2R.style.display = "none";
         item2.style.display = "block"
     }else{
         alert('none');
     }
 }

 /*Clique pou faire afficher  cour informatique bureautique*/
function item3(){
    var btn3 = document.getElementById('btnItem3');
    var item3 = document.getElementById('item3');
    var item3R = document.getElementById('item3R');
     console.log(btn3.textContent);
 
     if(btn3.textContent === "Plus infos"){
         btn3.textContent ='Fermez cette fenetre';
        item3R.style.display = "block";
        item2R.style.width = '100%';
        item3.style.display = "none"
     }else if(btn3.textContent ==='Fermez cette fenetre'){
         btn3.textContent ='Plus infos';
         item3R.style.display = "none";
         item3.style.display = "block"
     }else{
         alert('none');
     }
 }