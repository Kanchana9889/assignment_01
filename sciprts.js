
var contentHistory =[]
var currentstep = 0

function undo(){

    if(currentstep > 0){
        currentstep --
        if(contentHistory[currentstep] !== undefined ) {
            document.getElementById('containereditor').innerHTML=contentHistory[currentstep]
        }
    }
}

function redo(){

    if(currentstep > 0){
        currentstep ++
        if(contentHistory[currentstep] !== undefined ) {
            document.getElementById('containereditor').innerHTML=contentHistory[currentstep]
        }
    }
}

document.querySelectorAll('#containereditor').forEach(function(element){
    element.addEventListener('input',function(){
        currentstep++
        if(currentstep<contentHistory.length){
            contentHistory=contentHistory.slice(0,currentstep)
        }

        contentHistory.push(document.getElementById('containereditor').innerHTML)
    })
})


function left(){
    document.querySelectorAll('.left').forEach(function(element){
element.addEventListener('click',function(){
    document.getElementById('containereditor').style.textAlign='left'
})

    })
}

function center(){
    document.querySelectorAll('.center').forEach(function(element){
element.addEventListener('click',function(){
    document.getElementById('containereditor').style.textAlign='center'
})

    })
}

function right(){
    document.querySelectorAll('.right').forEach(function(element){
element.addEventListener('click',function(){
    document.getElementById('containereditor').style.textAlign='right'
})

    })
}

function justify(){
    document.querySelectorAll('.justify').forEach(function(element){
element.addEventListener('click',function(){
    document.getElementById('containereditor').style.textAlign='justify'
})

    })
}




function textcolor() {
    document.querySelectorAll('.textcolor').forEach(function (element) {
        element.addEventListener('click', function () {
            var selection = window.getSelection();
            var highlightedText = selection.toString();
            var span = "<span style='color: blue;'>" + highlightedText + "</span>";
            var containerEditor = document.getElementById('containereditor');
            containerEditor.innerHTML = containerEditor.innerHTML.replace(highlightedText, span);
        });
    });
}


function italic(){
document.execCommand('italic',true,null)
}


function Underline(){
    document.execCommand('Underline',true,null)
    }

function bold(){
    document.execCommand('bold',true,null)
}




