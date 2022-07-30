To add you resume design simply make a seperate folder and add them will include in the final product

Structure :
```
<div class="info_collector">
    <button class='add_element' type="button" onclick="add_element(this, 
        `
        HTML code
        `
        )">Add Contact Details</button>
</div>
```
info_collector - is must have in the parrent class of the "add_element"


## How to add Remove button
    `Here is an example`
    ``<input type='text' on onfocusout='setTimeout(del_remove_button, 2000);' onclick=' add_remove_button(this); ' value='Insert Skill'>``

    call del_remove_button(this) in onfocusout so that we can remove the button when we are moving out of focus

# Requirement 

    1. add op_resume_functions.js at the top of the html file in header which is holding all the functions
    2. add op_resume.js at the buttom of the html file in header which is holding just the needed codes
    3. Need to add op_style.css in the header
