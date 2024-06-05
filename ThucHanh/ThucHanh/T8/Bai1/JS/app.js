const elemMaTour = document.querySelector("#ma-tour-id");
const elemHanhTrinh = document.querySelector("#hanhTrinh-id");
const elemNgayKhoiHanh = document.querySelector("#ma-ngayKhoiHanh");
const elemThoiGian = document.querySelector("#thoiGian-id");
const elemGiaTour = document.querySelector("#giaTour-id");
const elemAvatarDd = document.querySelector("#avatar-id");
const btnSubmit = document.querySelector("#submit-value");
const insertData = document.querySelector("#innerData");

function start(){
    elemMaTour.addEventListener("keyup", ()=>{
        validText(elemMaTour, getParrentNode(elemMaTour, "group-parent"), /^[A-Z]{3,}-[A-Z]{3,}-(0[1-9]|1[0-2])-([1-9][0-9]{3})$/, "Mã tour không hợp lệ");
    })
    elemHanhTrinh.addEventListener("keyup", ()=>{
        validText(elemHanhTrinh, getParrentNode(elemHanhTrinh, "group-parent"), /.+/, "Tên hành trình không hợp lệ");
    })
    elemGiaTour.addEventListener("keyup", ()=>{
        validText(elemGiaTour, getParrentNode(elemGiaTour, "group-parent"), /^\d+(\.\d{1,2})?$/, "Gía không hợp lệ");

    })
    
    elemNgayKhoiHanh.addEventListener("change", ()=>{
        validDate(elemNgayKhoiHanh, getParrentNode(elemNgayKhoiHanh, "group-parent"));
    })
    elemAvatarDd.addEventListener("change", ()=>{
        validFile(elemAvatarDd, getParrentNode(elemAvatarDd,"group-parent" ), /^jpg$|^gif$|^png$/i,"Định dạng file không hợp lệ");
    })
    btnSubmit.addEventListener("click", ()=>{
        validText(elemMaTour, getParrentNode(elemMaTour, "group-parent"), /^[A-Z]{3,}-[A-Z]{3,}-(0[1-9]|1[0-2])-([1-9][0-9]{3})$/, "Mã tour không hợp lệ")
        validText(elemHanhTrinh, getParrentNode(elemHanhTrinh, "group-parent"), /.+/, "Tên hành trình không hợp lệ")
        validText(elemGiaTour, getParrentNode(elemGiaTour, "group-parent"), /^\d+(\.\d{1,2})?$/, "Gía không hợp lệ")
        validDate(elemNgayKhoiHanh, getParrentNode(elemNgayKhoiHanh, "group-parent"))
        validFile(elemAvatarDd, getParrentNode(elemAvatarDd,"group-parent" ), /^jpg$|^gif$|^png$/i,"Định dạng file không hợp lệ")
        if ( validText(elemMaTour, getParrentNode(elemMaTour, "group-parent"), /^[A-Z]{3,}-[A-Z]{3,}-(0[1-9]|1[0-2])-([1-9][0-9]{3})$/, "Mã tour không hợp lệ")
        &&  validText(elemHanhTrinh, getParrentNode(elemHanhTrinh, "group-parent"), /.+/, "Tên hành trình không hợp lệ")
        && validText(elemGiaTour, getParrentNode(elemGiaTour, "group-parent"), /^\d+(\.\d{1,2})?$/, "Gía không hợp lệ")
        &&  validDate(elemNgayKhoiHanh, getParrentNode(elemNgayKhoiHanh, "group-parent"))
        && validFile(elemAvatarDd, getParrentNode(elemAvatarDd,"group-parent" ), /^jpg$|^gif$|^png$/i,"Định dạng file không hợp lệ")){
            let maTour = elemMaTour.value.trim();
            let hanhTrionh = elemHanhTrinh.value.trim();
            let ngayKhoiHanh = elemNgayKhoiHanh.value.trim();
            let giaTour = elemGiaTour.value.trim();
            let thoiGian = elemThoiGian.value.trim();
            let fileName = elemAvatarDd.files[0].name;
            var count = insertData.querySelectorAll("tr").length;
            if (count == null){
                count = 0;
            }
            insertData.innerHTML += 
            `<tr>
                <td>${count+1}</td>
                <td>${maTour}</td>
                <td>${hanhTrionh}</td>
                <td>${ngayKhoiHanh}</td>
                <td>${thoiGian}</td>
                <td>${giaTour}</td>
                <td>${fileName}</td>
            </tr>`
        }
    })
}
function getParrentNode(elem, classParent){
    while(!elem.classList.contains(classParent)){
        elem = elem.parentElement;
    }   
    return elem;
}
function validDate(elem, parentNode){
    let valueDate = elem.value;
    let dateValue = new Date(valueDate);
    console.log(dateValue);
    let dateNow = new Date();
    let dateDiff;
        if(dateValue > dateNow)
           dateDiff = (dateValue.getTime() - dateNow.getTime())/ (1000 * 3600 * 24);
        else 
            dateDiff = (dateNow.getTime() - dateValue.getTime())/(1000*3600*24);
    
    
    if (dateDiff <= 30 || dateValue < dateNow){
        parentNode.querySelector(".msg-error").innerHTML = "Ngày không hợp lệ";
        return false;
    } else {
        parentNode.querySelector(".msg-error").innerHTML = "*";
    }
    return true;
}
function validText(elem, getParrentNode, regex, notice){
    let isValid = regex.test(elem.value.trim());
    if (!isValid){
        getParrentNode.querySelector(".msg-error").innerHTML = notice;
        return false;
    } else {
        getParrentNode.querySelector(".msg-error").innerHTML = `*`;
        return true;
    }
}
function validFile(elem, parrentElem, regex, notice){
    try {

            let arr = elem.files[0].name.split(".");
            let typeFile = arr[arr.length-1];
            if (!(regex.test(typeFile))){
                parrentElem.querySelector(".msg-error").innerHTML = notice;
                return false;
            }
    } catch (error) {
        parrentElem.querySelector(".msg-error").innerHTML = notice;
        return false;
    }
    parrentElem.querySelector(".msg-error").innerHTML = "*";
    return true;
}
start()

