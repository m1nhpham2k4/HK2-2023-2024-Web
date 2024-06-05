function kiemTraTen()
{
    let name =document.getElementById("name");
    let span1= document.getElementById("span1");
    let conditions=/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/g;
    if(name.value=="")
        {
            span1.innerHTML="Tên Không Được Rỗng";
            name.style.border="1px red solid";
            name.focus();
            return false;
        }
    if(conditions.test(name.value))
        {
            span1.innerHTML="";
            name.style.border="1px green solid";
            return true;
        }
    else
    {
        span1.innerHTML="Họ tên khách hàng không được rỗng, phải có ký tự hoa đầu mỗi từ";
        name.style.border="1px red solid";
        name.focus();
        return false;
    }
}
function kiemTraDiaChi()
{
    let addr =document.getElementById("addr");
    let span2= document.getElementById("span2");
    let conditions=/^[A-Z\s]+$/g;
    if(addr.value=="")
        {
            span2.innerHTML="địa chỉ Không Được Rỗng";
            addr.style.border="1px red solid";
            return false;
        }
    if(conditions.test(addr.value))
        {
            span2.innerHTML="";
            addr.style.border="1px green solid";
            return true;
        }
    else
    {
        span2.innerHTML="Địa chỉ không được rỗng, có dạng chữ IN HOA";
        addr.style.border="1px red solid";
        return false;
    }
}
function kiemTraEmail()
{
    let email =document.getElementById("email");
    let span3= document.getElementById("span3");
    let conditions=/^\w{5}@iuh\.edu\.vn$/g;
    if(email.value=="")
        {
            span3.innerHTML="Email Không Được Rỗng";
            email.style.border="1px red solid";
            return false;
        }
    if(conditions.test(email.value))
        {
            span3.innerHTML="";
            email.style.border="1px green solid";
            return true;
        }
    else
    {
        span3.innerHTML="Email theo mẫu: xxxxx@iuh.edu.vn";
        email.style.border="1px red solid";
        return false;
    }
}
function kiemTraTimeGiaoHang()
{
    let times =document.getElementById("times");
    let span4= document.getElementById("span4");
    let conditions=/^\d{2}:\d{2}\sđến\s\d{2}:\d{2}$/g;
    if(times.value=="")
        {
            span4.innerHTML="thời gian Không Được Rỗng";
            times.style.border="1px red solid";
            return false;
        }
    if(conditions.test(times.value))
        {
            span4.innerHTML="";
            times.style.border="1px green solid";
            return true;
        }
    else
    {
        span4.innerHTML="Thời gian giao hàng có định dạng xx:xx đến xx:xx";
        times.style.border="1px red solid";
        return false;
    }
}
function kiemTraSDT()
{
    let phone =document.getElementById("phones");
    let span5= document.getElementById("span5");
    let conditions=/^0\d{3}-\d{3}-\d{3}$/g;
    if(phone.value=="")
        {
            span5.innerHTML="điện thoại Không Được Rỗng";
            phone.style.border="1px red solid";
            return false;
        }
    if(conditions.test(phone.value))
        {
            span5.innerHTML="";
            phone.style.border="1px green solid";
            return true;
        }
    else
    {
        span5.innerHTML="Điện thoại theo mẫu: 0xxx-xxx-xxx ";
        phone.style.border="1px red solid";
        return false;
    }
}
var stt=1;
function xoaDuLieu()
{
    let name =document.getElementById("name").value="";
    let addr =document.getElementById("addr").value="";
    let email =document.getElementById("email").value="";
    let times =document.getElementById("times").value="";
    let phone =document.getElementById("phones").value="";
}
function luuDonHang()
{
    let name =document.getElementById("name").value;
    let addr =document.getElementById("addr").value;
    let email =document.getElementById("email").value;
    let times =document.getElementById("times").value;
    let phone =document.getElementById("phones").value;
    let var1=kiemTraTen();
    let var2=kiemTraDiaChi();
    let var3=kiemTraEmail();
    let var4=kiemTraTimeGiaoHang();
    let var5=kiemTraSDT();
    if(var1 && var2 && var3 && var4 && var5)
        {
            document.getElementById("mytable1").innerHTML+=
            "<td>"+stt+"</td>"+
            "<td>"+name+"</td>"+
            "<td>"+addr+"</td>"+
            "<td>"+times+"</td>"+
            "<td>"+email+"</td>"+
            "<td>"+phone+"</td>";
            stt+=1;
            xoaDuLieu();
            $("#mymodal1").modal("hide");
        }
}