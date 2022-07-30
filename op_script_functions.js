// auto resize element 
function resizable(el) {

    function resize() {
        el.style.width = el.value.length + 'ch'
    }
    var e = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in e) el.addEventListener(e[i], resize, false);
    resize();
}

function resize_all_inpiut() {
    var all_inputs = document.body.getElementsByTagName('input');
    Array.from(all_inputs).forEach(input => {
        resizable(input);
    });
}

// functions for removing and and adding remove element button
function add_remove_button(element) {
    parrent = element.parentNode;
    // console.log(parrent);
    let remove_buton = parrent.getElementsByClassName('remove_button');
    console.log('found elemetn' + remove_buton[0])
    if (remove_buton[0] == null) {
        element.insertAdjacentHTML('afterend', '<button class="remove_button" onClick="remove_me(this)">remove</button>');
    }

}

// END

// add element function
function add_element(element, element_to_add) {
    Parrent = element.parentNode;

    // element_to_add += '<button class="remove_button" onClick="remove_me(this)">remove</button>';
    console.log(element_to_add);

    var div = '<div style="width:100%;" class="float_remove_button">';
    div += element_to_add;
    div += '</div>'

    Parrent.insertAdjacentHTML('afterbegin', div);
    resize_all_inpiut();
};

// remove parrent element 
function remove_me(element) {
    parent = element.parentNode;
    console.log('removing : ' + parent);
    parent.parentNode.removeChild(parent);
}

function Focus($id) {
    var f_element = document.getElementById($id);
    console.log(f_element);
    // window.scroll(0, f_element.offsetHeight);
    f_element.scrollIntoView()
}