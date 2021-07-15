//change first h1 tag to the following text using querySelector
var pageTitle = document.querySelector('h1');
pageTitle.innerText = "Welcome to my First Interactive Webpage Using JavaScript";

//Change all p tags to Helvetica font using querySelectorAll
var changePtagStyle = document.querySelectorAll('p');
for(var i=0; i < changePtagStyle.length; i++){
    changePtagStyle[i].style.fontFamily="Arial";
}

//Add text shadow to heading using getElementsByClassName
var headingStyleUpdate = document.getElementsByClassName('headingStyle');
for(var i=0; i < headingStyleUpdate.length; i++){
    headingStyleUpdate[i].style.textShadow="1px 1px 2px blue";
}

//Reveal more info to list using getElementsByTagName
function traderListUpdate() { 
    var appendList = document.getElementsByTagName('ul')[0];
    appendList.getElementsByTagName("li")[5].innerHTML = appendList.getElementsByTagName("li")[5].innerHTML+"(Specifically Quantitative Hedge Funds)"
}

//Create new element under p tag using createElement
var newElement = document.createElement('p');
var parentElement = document.getElementById('addPara');
parentElement.append(newElement);
newElement.innerText = "A bull flag is when you have an uptrend, follwed by a consolidation period, and a then finally a breakout!";

//Add new class, remove, toggle
var imageNewClass = document.getElementById('specialImg');
imageNewClass.classList.add('darkenImage');

//Remove
var styleButton = document.getElementById('specialBtn');
styleButton.classList.remove('styleBtn');

//toggle
function toggleParagraph() {
    var toggleP = document.getElementById('tglPara');
    toggleP.classList.toggle('hiddenClass');
}