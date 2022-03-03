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

function add_element(element, element_to_add) {
    Parrent = element.parentNode;

    element_to_add += '<button class="remove_button" onClick="remove_me(this)">remove</button>';
    console.log(element_to_add);

    var div = '<div style="width:100%;">';
    div += element_to_add;
    div += '</div>'

    Parrent.insertAdjacentHTML('afterbegin', div);
    resize_all_inpiut();

    // var div = document.createElement('div');
    // div.innerHTML = element_to_add;
    // console.log(Parrent);
    // child = Parrent.children[0];
    // var clone = child.cloneNode(true);
};

function remove_me(element) {
    parent = element.parentNode;

    parent.parentNode.removeChild(parent);
}

function Focus($id){
    var f_element = document.getElementById($id);
    console.log(f_element);
    // window.scroll(0, f_element.offsetHeight);
    f_element.scrollIntoView()
}

window.onload = (event) => resize_all_inpiut();