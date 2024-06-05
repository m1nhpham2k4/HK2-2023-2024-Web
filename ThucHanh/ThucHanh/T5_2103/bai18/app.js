

function set_background(){
    let docBody = document.getElementsByTagName("body")[0];
    let myBodyElements = docBody.getElementsByTagName("p");
    let myp1 = myBodyElements[0];
    myp1.style.background = "rgb(255, 0, 0)";
    let myp2 = myBodyElements[1];
    myp2.style.background = "rgb(255, 255, 0)";


}
set_background();