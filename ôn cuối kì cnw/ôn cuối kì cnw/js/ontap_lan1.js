function kiemTraTen()
{
    let name= document.getElementById("name");
    let span1=document.getElementById("span1");
    let conditions=/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/g;
    if(name.value=="")
        {
            name.style.border="1px red solid";
            span1.innerHTML="tên không được rỗng";
            return false;
        }
    if(conditions.test(name.value))
        {
            name.style.border="1px green solid";
            span1.innerHTML="";
            return true;
        }
    else
    {
        name.style.border="1px red solid";
        span1.innerHTML="Họ tên không được bỏ trống, họ tên phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa";
        return false;
    }
}
function kiemTraSDT()
{
    let phone= document.getElementById("sdt");
    let span2=document.getElementById("span2");
    let conditions=/^\d{3}-\d{6}$/g;
    if(phone.value=="")
        {
            phone.style.border="1px red solid";
            span2.innerHTML="số điện thoại không được rỗng";
            return false;
        }
    if(conditions.test(phone.value))
        {
            phone.style.border="1px green solid";
            span2.innerHTML="";
            return true;
        }
    else
    {
        phone.style.border="1px red solid";
        span2.innerHTML="Số điện thoại không rỗng, nhập theo định dạng sau: XXX-YYYYYY, trong đó X, Y là các ký tự số";
        return false;
    }
}
function kiemTraNgaySinh()
{
    let dates= document.getElementById("ngaysinh");
    let span3=document.getElementById("span3");
    let currentdate= new Date();
    let ngaysinh= new Date(dates.value);

    let ages=currentdate.getFullYear()-ngaysinh.getFullYear();
    let month=currentdate.getMonth()-ngaysinh.getMonth();
    let days=currentdate.getDate()-ngaysinh.getDate();
    if(month<0 || (month===0 && days<0))
    {
         ages-=1;
     }
    if(ages>=15 && ages<18)
    {
        dates.style.border="1px green solid";
        span3.innerHTML="";
        return true;
    }
    else
    {
        dates.style.border="1px red solid";
        span3.innerHTML="Ngày sinh hợp lệ khi tuổi trên 15 và dưới 18";
        return false;
    }
}
function thaoTacKhoaHoc()
{
    let khoahoc= document.getElementById("khoahoc");
    let hocphi=document.getElementById("hocphi");
    switch(khoahoc.value)
    {
        case "2 tuần":
            {
                hocphi.value="5.000.000";
                return "5.000.000";
            }
        case "4 tuần":
            {
                hocphi.value="8.000.000";
                return "8.000.000";
            }
        case "6 tuần":
            {
                hocphi.value="9.000.000";
                return "9.000.000";
            }
    }
}
function checkAnh()
{
    let anh=document.getElementById("anhdaidien");
    let span5=document.getElementById("span5");
    let listConditions=['image/jpeg','image/png','image/gif'];
    if(listConditions.includes(anh.files[0].type))
        {
            anh.style.border="1px green solid";
            span5.innerHTML=""
            return true;
        }
    else
    {
        anh.style.border="1px red solid";
        span5.innerHTML="Ảnh đại diện là các file hình .jpg, .png, .gif.";
        return false;
    }
}
var stt=1;
function luuThongTin()
{
    let ten= document.getElementById("name").value;
    let anh=document.getElementById("anhdaidien").value;
    let sdt=document.getElementById("sdt").value;
    let ngaysinh=document.getElementById("ngaysinh").value;
    let diachi=document.getElementById("diachi").value;
    let khoahoc=document.getElementById("khoahoc").value;
    let hocphi=thaoTacKhoaHoc();


    let var1=kiemTraTen()
    let var2=kiemTraSDT()
    let var3=kiemTraNgaySinh()
    let var4=checkAnh()
    if(var1 && var2 && var3 && var4)
        {
            document.getElementById("mytable1").innerHTML+=
            "<td>"+stt+"<td/>"+
            "<td>"+ten+"<td/>"+
            "<td>"+anh+"<td/>"+
            "<td>"+sdt+"<td/>"+
            "<td>"+ngaysinh+"<td/>"+
            "<td>"+diachi+"<td/>"+
            "<td>"+khoahoc+"<td/>"+
            "<td>"+hocphi+"<td/>";
            stt+=1;
            $("#mymodal1").modal("hide");
        }
}