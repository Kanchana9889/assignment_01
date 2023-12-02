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