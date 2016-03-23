
/* JS for Collapsible Blog Posts */
/* Taken from D. Bieber. Thanks Biebs! */

function swap(e1, e2) {
    e1.fadeOut(500).promise().done(function() {
        e2.fadeIn(500);
    });
}
function register_swap(e1, e2) {
    $(e1).click(function(e) {
        var srcEl = e.srcElement? e.srcElement : e.target;
        if (srcEl.tagName.toUpperCase() == "A") return;
        swap($(e1), $(e2));
    });
}
function register_pair(e1, e2) {
    register_swap(e1, e2);
    register_swap(e2, e1);
}
function addBorder(e1) {
    $(e1).css("border-left", "solid 1px lightgray");
    $(e1).css("padding-left", "5px");
}
var paragraphs = $('.post *');
for (var cv = 0; cv < paragraphs.length; cv++) {
    var keyId = paragraphs[cv].id;
    if (keyId.charAt(0) == "_") {
        register_pair('#' + keyId, '#' + keyId.substr(1));
        addBorder('#' + keyId);
        addBorder('#' + keyId.substr(1));
    }
}
