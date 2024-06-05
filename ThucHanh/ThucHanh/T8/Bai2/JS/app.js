const elemTTHN = document.querySelector("#id-tuoitrehangngay");
const elemTTC = document.querySelector("#id-tuoitrecuoi");
const elemTTCN = document.querySelector("#id-tuoitrechunhat");
const elemKyhan = document.querySelector("#id-kyhan");
const elemDonGia = document.querySelector("#id-dongia");
const elemName = document.querySelector("#id-ttll");
const elemTel = document.querySelector("#id-tel");
const elemDiaChi = document.querySelector("#id-address");
const elemRadioChuyenKhaon = document.querySelector("#radio-chuyenkhoan");
const elemRadioTienMat = document.querySelector("#radio-tienmat");
const elemBtnSubmit = document.querySelector("#btn-submit");
const elemInnerToTable = document.querySelector("#innerToTable");

function start(){
    elemKyhan.addEventListener("change", ()=>{
        let value = elemKyhan.value;
        let arr = value.split(":");
        elemDonGia.value = arr[arr.length-1];
    })
    elemName.addEventListener("keyup", ()=>{
        validText(elemName, getParentElem(elemName, "form-group"), /^[A-Z]+\w*/, "phải bắt đầu bằng in hoa");
    })
    elemTel.addEventListener("keyup",() =>{
        validText(elemTel, getParentElem(elemTel, "form-group"), /^(09|08|07)\d{8}$/, "Chữ số bắt đầu bằng 09,08,07 có 10 chứ số")
    })
    elemDiaChi.addEventListener("keyup", ()=>{
        validText(elemDiaChi, getParentElem(elemDiaChi, "form-group"), /^[a-zA-Z0-9\s]+$/, "Địa chỉ nhận báo bao gồm các ký tự số, ký tự chữ, khoảng trắng");
    })
    elemBtnSubmit.addEventListener("click", ()=>{
        if (elemTTC.checked == false && elemTTCN.checked == false && elemTTHN.checked == false){
            alert("Bạn phải chọn ít nhất 1 loại báo để xem");
            return;
        }
        let s = "";
        let flag = 0;
        if (elemTTC.checked){
            if (flag === 0){
                s += elemTTC.value;
                flag = 1;
            } else {
                s +=  "," + elemTTC.value
            }
           
        }
        if (elemTTCN.checked){
            if (flag === 0){
                s += elemTTCN.value;
                flag = 1;
            } else {
                s +=  "," + elemTTCN.value;
            }
        }
        if (elemTTHN.checked){
            if (flag === 0){
                s += elemTTHN.value;
                flag = 1;
            } else {
                s +=  "," + elemTTHN.value
            }
        }
        validText(elemName, getParentElem(elemName, "form-group"), /^[A-Z]\w*/, "phải bắt đầu bằng in hoa");
        validText(elemTel, getParentElem(elemTel, "form-group"), /^(09|08|07)\d{8}$/, "Chữ số bắt đầu bằng 09,08,07 có 10 chứ số")
        validText(elemDiaChi, getParentElem(elemDiaChi, "form-group"), /^[a-zA-Z0-9\s]+$/, "Địa chỉ nhận báo bao gồm các ký tự số, ký tự chữ, khoảng trắng");
            
        if (validText(elemName, getParentElem(elemName, "form-group"), /^[A-Z]\w*/, "phải bắt đầu bằng in hoa") &&
            validText(elemTel, getParentElem(elemTel, "form-group"), /^(09|08|07)\d{8}$/, "Chữ số bắt đầu bằng 09,08,07 có 10 chứ số") &&
            validText(elemDiaChi, getParentElem(elemDiaChi, "form-group"), /^[a-zA-Z0-9\s]+$/, "Địa chỉ nhận báo bao gồm các ký tự số, ký tự chữ, khoảng trắng")){
            let kyHanInput = elemKyhan.value.split(":");
            let kyHanString = kyHanInput[0] + " tháng";
            let lienLacString = elemName.value;
            let diaChiString  = elemDiaChi.value;
            let hinhThucString = (elemRadioChuyenKhaon.checked) ? "Chuyển khoản" : "Tiền mặt";
                let thanhTien = s.split(",").length * Number.parseFloat(elemDonGia.value);
                let lengthTable = elemInnerToTable.querySelectorAll("tr").length;
                if (lengthTable == null){
                    lengthTable = 0;
                }
          
            elemInnerToTable.innerHTML += 
            ` <tr>
            <td>${lengthTable+1}</td>
            <td>${s}</td>
            <td>${kyHanString}</td>
            <td>${lienLacString}</td>
            <td>${diaChiString}</td>
            <td>${thanhTien}</td>
            <td>${hinhThucString}</td>
            </tr>`
            
        }
        
    })
}
function getParentElem(elem, classParrent){
    while(!elem.classList.contains(classParrent)){
        elem = elem.parentElement;
    }
    return elem;
}
function validText(elem, parentElem, regex, notice){
    let isValid = regex.test(elem.value);
    let elemMsgErr = parentElem.querySelector(".msg-error");
    if (!isValid){
        elemMsgErr.innerHTML = notice;
        return false;
    } else {
        elemMsgErr.innerHTML = `(*)`;
        return true;
    }
}
start();