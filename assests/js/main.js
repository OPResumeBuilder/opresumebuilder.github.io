/**
 * Initialise edite element option
 */

function resizable(el) {

    function resize() {
        el.style.width = el.value.length + 'ch'
    }
    var e = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in e) el.addEventListener(e[i], resize, false);
    resize();
}

function edite_casual_value(element, parrent_element) {
    var child_element = parrent_element.childNodes;

    Array.from(child_element).forEach(cl => {
        if (cl.tagName == 'INPUT') {
            if (cl.hasAttribute('readonly')) {
                // adding border for sexy look
                cl.style.border = "solid 1px";
                cl.removeAttribute('readonly');
            } else {
                cl.style.border = "none";
                cl.setAttribute('readonly', true);
            }
            resizable(cl, 1);
        }
    });
}

/**start editing all the skills in the same row */
function edite_skills(element, parrent_element) {
    var child_element = parrent_element.childNodes;

    Array.from(child_element).forEach(cl => {
        if (cl.tagName == 'LI') {
            edite_casual_value(element, cl);
        }
    });
}

function edite_element_option(element) {
    var parrent_element = element.parentNode;

    if (element.innerHTML == "Edite") {
        console.log("Editing Option Turned on");
        element.innerHTML = "Done";
    } else {
        console.log("Editing Option Turned off");
        element.innerHTML = "Edite";
    }

    switch (parrent_element.className) {
        case 'casual_value':
            edite_casual_value(element, parrent_element);
            break;
        case 'skills':
            edite_skills(element, parrent_element);
            break;
        default:
            break;
    }
}

/**
 * Add Skills in the desk
 */
function add_skills(element) {
    var parentForm = element.parentNode;
    var previous_element = element.previousElementSibling;

    console.log(previous_element);
    if (previous_element.innerHTML == "Done") { // mean in edite mode which the system should not
        previous_element.innerHTML = "Edite";
        edite_skills(previous_element, parentForm);
    }
    var li = document.createElement('li');

    li.innerHTML = '<input type="text" value="Insert Skill" readonly>';

    parentForm.appendChild(li); // add new row to end of table
}

function add_education(elements) {

}

function resize_all_inpiut() {
    var all_inputs = document.body.getElementsByTagName('input');
    Array.from(all_inputs).forEach(input => {
        resizable(input);
    });
}


function add_element(element, element_to_add) {
    Parrent = element.parentNode;

    // var div = document.createElement('div');
    // div.innerHTML = element_to_add;
    // console.log(Parrent);
    // child = Parrent.children[0];

    // var clone = child.cloneNode(true);
    Parrent.insertAdjacentHTML('afterbegin', element_to_add);
    resize_all_inpiut();
};

window.onload = (event) => resize_all_inpiut();