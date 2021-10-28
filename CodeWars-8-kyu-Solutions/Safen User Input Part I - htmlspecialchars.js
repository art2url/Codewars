//Your mission is to implement a function htmlspecialchars() 
//that converts the following potentially harmful characters:

//< --> &lt;
//> --> &gt;
//" --> &quot;
//& --> &amp;

function htmlspecialchars(formData) {
    return formData
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}