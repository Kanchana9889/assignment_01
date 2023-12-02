
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



