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