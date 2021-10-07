/**
 * Initialise edite element option
 */
function edite_element_option(element) {
    var parrent_element = element.parentNode;
    var child_element = parrent_element.childNodes;

    Array.from(child_element).forEach(cl => {
        if (cl.tagName == 'INPUT') {
            if (cl.hasAttribute('readonly')) {
                cl.removeAttribute('readonly');
            } else {
                cl.setAttribute('readonly', true);
            }
        }
    });
    console.log("Editing Option Turned on");
}

function done_edite_element(element) {
    var parrent_element = element.parentNode;
    var previous_element = parrent_element.previousSibling;


    while (previous_element && previous_element.nodeType != 1) {
        previous_element = previous_element.previousSibling
    }

    parrent_element.style.display = "none";
    previous_element.style.display = "inline";

    console.log("Editing Option Turned off");
}

function auto_resizable_inputs() {

}

function resizable(el, factor) {
    var int = Number(factor) || 7.7;

    function resize() {
        el.style.width = ((el.value.length + 1) * int) + 'px'
    }
    var e = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in e) el.addEventListener(e[i], resize, false);
    resize();
}

window.onload = () => {
    var all_inputs = document.body.getElementsByTagName('input');
    Array.from(all_inputs).forEach(el => {
        resizable(el, 7);
    });

}