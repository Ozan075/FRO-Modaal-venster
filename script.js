
//button 1 variabelen
var nyModal = document.getElementById('nyModal');
var fotony = document.getElementById('fotony');
var sluitny = document.getElementsByClassName('sluitny')[0];

//button 2 variabelen
var istanbulModal = document.getElementById('istanbulModal');
var fotoistanbul = document.getElementById('fotoistanbul');
var sluitistanbul = document.getElementsByClassName('sluitistanbul')[0];

//button 3 variabelen
var tokyoModal = document.getElementById('tokyoModal');
var fototokyo = document.getElementById('fototokyo');
var sluittokyo = document.getElementsByClassName('sluittokyo')[0];


//reageer op de klik button1
fotony.addEventListener('click', openny);
sluitny.addEventListener('click', sluitnyModal);
window.addEventListener('click', outsideClickny);

//reageer op de klik button2
fotoistanbul.addEventListener('click', openistanbul);
sluitistanbul.addEventListener('click', sluitistanbulModal);
window.addEventListener('click', outsideClickistanbul);

//reageer op de klik button3
fototokyo.addEventListener('click', opentokyo);
sluittokyo.addEventListener('click', sluittokyoModal);
window.addEventListener('click', outsideClicktokyo);



// functies button1
function openny(){
    nyModal.style.display = 'block';
}
function sluitnyModal(){
    nyModal.style.display = 'none';
}
function outsideClickny(e){
    if(e.target == nyModal){
        nyModal.style.display = 'none';
    }
}

// functies button2
function openistanbul(){
    istanbulModal.style.display = 'block';
}
function sluitistanbulModal(){
    istanbulModal.style.display = 'none';
}
function outsideClickistanbul(e){
    if(e.target == istanbulModal){
        istanbulModal.style.display = 'none';
    }
}

// functies button3
function opentokyo(){
    tokyoModal.style.display = 'block';
}
function sluittokyoModal(){
    tokyoModal.style.display = 'none';
}
function outsideClicktokyo(e){
    if(e.target == tokyoModal){
        tokyoModal.style.display = 'none';
    }
}
