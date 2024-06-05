function check_name()
{
    let name = document.getElementById("name");
    let span1 =document.getElementById("span1");
    let conditions=/[A-Za-z]{3,}(\s[A-Za-z]{3,})*/g;
    if(name.value=="")
    {
        span1.innerHTML="tên không được rỗng";
        name.style.border="1px red solid";
        return false;
    }
    if(conditions.test(name.value))
    {
        span1.innerHTML="";
        name.style.border="1px black solid";
        return true;
    }
    else
    {
        span1.innerHTML="Họ tên chỉ gồm các ký tự chữ cái, có thể có ký tự khoảng trắng, mỗi từ có từ 2 ký tự trở lên";
        name.style.border="1px red solid";
        return false;
    }
}
function check_phone()
{
    let phone = document.getElementById("phone");
    let span2 =document.getElementById("span2");
    let conditions=/\([\d]{4}\)\d{3}-\d{3}/g;
    if(phone.value=="")
    {
        span2.innerHTML="số điện thoại không được rỗng";
        phone.style.border="1px red solid";
        return false;
    }
    if(conditions.test(phone.value))
    {
        span2.innerHTML="";
        phone.style.border="1px black solid";
        return true;
    }
    else
    {
        span2.innerHTML="Điện thoại liên hệ có mẫu sau: (0000)000-000, 0 đại diện cho ký số bất kỳ";
        phone.style.border="1px red solid";
        return false;
    }
}
function check_songuoi()
{
    let songuoi = document.getElementById("songuoi");
    let span5 =document.getElementById("span5");
    let conditions=/\d+/g;
    if(songuoi.value=="")
        {
            span5.innerHTML="số người không được rỗng";
            songuoi.style.border="1px red solid";
            return false;
        }
        if(conditions.test(songuoi.value) && parseInt(songuoi.value)>0)
        {
            span5.innerHTML="";
            songuoi.style.border="1px black solid";
            return true;
        }
        else
        {
            span5.innerHTML="Số người tham gia dự tiệc phải là số, ít nhất là 1";
            songuoi.style.border="1px red solid";
            return false;
        }
}
function check_ngay()
{
    let ngay = document.getElementById("ngay");
    let span3 =document.getElementById("span3");  
    if(ngay.value=="")
        {
            span3.innerHTML="không được để trống ngày";
            ngay.style.border="1px red solid";
            return false;
        }
        if(new Date(ngay.value) < new Date())
        {
            span3.innerHTML="";
            ngay.style.border="1px black solid";
            return true;
        }
        else
        {
            span3.innerHTML="Ngày đặt tiệc trước ngày hiện tại!";
            ngay.style.border="1px red solid";
            return false;
        }
}
var stt=1;
function dang_ky()
{
    let allcheckbox= document.querySelectorAll("input[name=rdo2]")
    let allradio=document.querySelectorAll("input[type=radio]")
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let days=document.getElementById("ngay").value;
    let gio=document.getElementById("gio").value;
    let songuoi=document.getElementById("songuoi").value;
    let loaitiec=document.getElementById("loaitiec").value;
    let ghichu=document.getElementById("ghichu").value
    let loaiphong="";
    let dichvu="";
    allcheckbox.forEach(
        function(item){
            if(item.checked)
                {
                    dichvu+=item.value;
                }
        }
    )
    allradio.forEach(
        function(item){
            if(item.checked)
                {
                    loaiphong+=item.value;
                }
        }
    )
    let lathanhvien="";
    if (document.getElementById("thanhvien").checked)
    {
        lathanhvien="Thành Viên"
    }
    let var1=check_name();
    let var2=check_phone();
    let var3=check_songuoi();
    let var4=check_ngay();
    if(var1 && var2 && var3 && var4 && loaiphong!="")
    {
        document.getElementById("mytable1").innerHTML+=
        "<td>"+stt+"</td>"+
        "<td>"+name+"</td>"+
        "<td>"+phone+"</td>"+
        "<td>"+days+"</td>"+
        "<td>"+gio+"</td>"+
        "<td>"+songuoi+"</td>"+
        "<td>"+loaitiec+"</td>"+
        "<td>"+loaiphong+"</td>"+
        "<td>"+lathanhvien+"</td>"+
        "<td>"+dichvu+"</td>"+
        "<td>"+ghichu+"</td>";
        stt+=1;
    }
    
}