function Focus($id){
    var f_element = document.getElementById($id);
    console.log(f_element);
    // window.scroll(0, f_element.offsetHeight);
    f_element.scrollIntoView()
}