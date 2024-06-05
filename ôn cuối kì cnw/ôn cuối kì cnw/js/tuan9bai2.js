function check_matour()
{
    let conditions=/[A-Z]{3}-[A-Z]{3}-\d{2}-\d{4}/g
    let matour=document.getElementById("matour");
    let span1=document.getElementById("span1");
    if(matour.value=="")
    {
        matour.style.border="1px red solid"
        span1.innerHTML="mã tour không được rỗng";
        return false;
    }
    if(conditions.test(matour.value) && matour.value.length==15)
    {
        matour.style.border="1px black solid"
        span1.innerHTML="*";
        return true;
    }else
    {
        matour.style.border="1px red solid"
        span1.innerHTML="XXX-XXX-mm-yyyy với X là các ký tự hoa chỉ thông tin điểm khởi hành và điểm đến, mm: tháng khởi hành, yyyy: năm khởi hành.";
        return false;
    }
}
function check_ngaykhoihanh()
{
    let ngaykhoihanh=document.getElementById("ngaykhoihanh");
    let span3=document.getElementById("span3");
    let baygio=new Date()
    let timekhoihanh=new Date(ngaykhoihanh.value);
    if(ngaykhoihanh.value=="")
    {
        ngaykhoihanh.style.border="1px red solid"
        span3.innerHTML="chưa chọn ngày khởi hành";
        return false;
    }
    if(timekhoihanh>=baygio.setDate(baygio.getDate()+30))
    {
        ngaykhoihanh.style.border="1px black solid"
        span3.innerHTML="*";
        return true;
    }else
    {
        ngaykhoihanh.style.border="1px red solid"
        span3.innerHTML="Ngày khởi hành phải sau ngày hiện tại 30 ngày.";
        return false;
    }
}
function kiemtra_giatour()
{
    let conditions=/\d*/g;
    let giatour=document.getElementById("giatour");
    let span4=document.getElementById("span4");
    let gia=parseInt(giatour.value);
    if(giatour=="")
    {
        giatour.style.border="1px red solid";
        span4.innerHTML="giá tour không được rỗng";
        return false;
    }
    if(gia>0)
    {
        giatour.style.border="1px black solid";
        span4.innerHTML="*";
        return true
    }
    else
    {
        giatour.style.border="1px red solid";
        span4.innerHTML="số lớn hơn 0";
        return false
    }
}
function kiemtra_anh()
{
    let anhdaidien=document.getElementById("anhdaidien");
    let conditions=['image/jpg','image/png','image/gif','image/jpeg'];
    let span5=document.getElementById("span5");
    if(conditions.includes(anhdaidien.files[0].type))
    {
        anhdaidien.style.border="1px black solid";
        span5.innerHTML="*";
        return true;
    }
    else
    {
        anhdaidien.style.border="1px red solid";
        span5.innerHTML="yêu cầu nhập file ảnh!";
        return false;
    }
}
var count=1;
function luu_thongtin()
{
    let matour=document.getElementById("matour").value;
    let ngaykhoihanh=document.getElementById("ngaykhoihanh").value;
    let hanhtrinh=document.getElementById("hanhtrinh").value;
    let thoigian=document.getElementById("thoigian").value;
    let giatour=document.getElementById("giatour").value;
    let anhdaidien=document.getElementById("anhdaidien").value;

    let var1=check_matour()
    let var2=check_ngaykhoihanh()
    let var3=kiemtra_giatour()
    let var4=kiemtra_anh()
    if(var1 && var2 && var3 && var4)
    {
        document.getElementById("mytable").innerHTML+="<td>"+count+"</td>"+
        "<td>"+matour+"</td>"+
        "<td>"+hanhtrinh+"</td>"+
        "<td>"+ngaykhoihanh+"</td>"+
        "<td>"+thoigian+"</td>"+
        "<td>"+giatour+"</td>"+
        "<td>"+anhdaidien+"</td>";
        count+=1;
    }
}
