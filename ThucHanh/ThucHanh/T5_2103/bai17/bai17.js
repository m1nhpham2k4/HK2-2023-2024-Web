
const eleInputLName =  document.querySelector("#input__register__lastname"); // Họ
const eleInputFName = document.querySelector("#input__register__firstname"); // Tên
const eleInputMail = document.querySelector("#input__register__email");
const eleInputRPMail = document.querySelector("#input__register__repeat-email");
const eleInputPassword = document.querySelector("#input__register__pass");
const eleInputBirth = document.querySelector("#input__register_birth");
const elemsTxtInRegister = Array.from(document.querySelectorAll(".input__register"));
const elemSubmitForm = document.querySelector("#input-register-submit");
function start(){


    eleInputLName.addEventListener("keyup", ()=>{
        validName(eleInputLName, "Họ");
        
    })
    eleInputFName.addEventListener("keyup", ()=>{
        validName(eleInputFName, "Tên");
      
    })
    eleInputMail.addEventListener("keyup", ()=>{
        validEmail();
    })
    eleInputRPMail.addEventListener("keyup", ()=>{
        validRepeatEmail();
    })
    eleInputPassword.addEventListener("keyup", ()=>{
        validPassword();
    })
    eleInputBirth.addEventListener("keyup", ()=>{
        validBirth();
    })
    
    elemSubmitForm.addEventListener("click", validator)
}

function validName(elemInput, nameField){
    
    let isValid =  /^[A-Z][a-zA-Z]+/.test(elemInput.value.trim());
    
    if(!isValid){
        elemInput.parentElement.querySelector(".err-msg").innerHTML = `${nameField} bắt đầu bằng chữ in hoa, có ít nhất 2 ký tự!`;
        return false;
    }
    elemInput.parentElement.querySelector(".err-msg").innerHTML = ""
    return true;
}


function validEmail(){
    let eleSpanMsg = eleInputMail.parentElement.querySelector(".err-msg");
    let isValid = /^[a-zA-Z][a-zA-Z0-9]{5,}\@[a-zA-Z]{1,}\.[a-zA-Z]{1,5}$/.test(eleInputMail.value.trim())
    if (!isValid){
        eleSpanMsg.innerHTML = `Email không hợp lệ!`;
        return false;
    } 
    eleSpanMsg.innerHTML = ``;
    return true;

}

function validRepeatEmail(){
    let eleSpanMsg = eleInputRPMail.parentElement.querySelector(".err-msg");
    if (eleInputMail.value.trim() === ""){
        eleSpanMsg.innerHTML = "Bạn phải nhập địa chỉ Email trước!";
        return false;
    } else {
        if (eleInputMail.value.trim() === eleInputRPMail.value.trim()){
            eleSpanMsg.innerHTML = "";
            return true;
        } else {
            eleSpanMsg.innerHTML = "Dữ liệu không trùng với email trên!";
            return false;
        }
    }

}
function validPassword(){
    let eleSpanMsg = eleInputPassword.parentElement.querySelector(".err-msg");
    let isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(eleInputPassword.value.trim());
    if (!isValid){
        eleSpanMsg.innerHTML = "Mật khẩu phải có 8 chữ cái, ít nhất 1 chữ hoặc 1 số";
        return false;
    }
    eleSpanMsg.innerHTML = "";
    return true;
}
function validBirth()
{
    let eleSpanMsg = eleInputBirth.parentElement.querySelector(".err-msg");
    let isValid = /^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}/.test(eleInputBirth.value.trim());
    if (!isValid){
        eleSpanMsg.innerHTML = "Ngày sinh theo định dạnh: dd-MM-yyyy";
        return false;
    }
    eleSpanMsg.innerHTML = ""
    return true;
}
function validator(){
    validName(eleInputFName, "Tên");
    validName(eleInputLName, "Họ");
    validEmail();
    validRepeatEmail();
    validPassword();
    validBirth();
}
start();
