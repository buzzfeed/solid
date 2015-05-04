function SelectText(element) {
    var doc = document;
    var range;
    var selection;
    
    if (!element) return;
    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(function() {
    $('label').on('click', function(e) {
        SelectText(e.currentTarget);
    });
});