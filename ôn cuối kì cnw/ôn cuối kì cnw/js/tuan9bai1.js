function check_hoten()
{
    let conditions=/[A-Z][a-z]+(\s[A-Z][a-z]+)+/g
    let hoten=document.getElementById("hoten");
    let span1=document.getElementById("span1");
    if(hoten.value=="")
    {
        span1.innerHTML="không được để trống tên";
        hoten.style.border="1px red solid"
        return false;
    }
    if(conditions.test(hoten.value))
    {
        span1.innerHTML="*";
        hoten.style.border="1px black solid";
        return true
    }
    else
    {
        span1.innerHTML="tên phải viết hoa đầu dòng và trên 2 từ";
        hoten.style.border="1px red solid"
        return false
    }
    
}
function check_phone()
{
    let conditions=/\d{3,3}-\d{6,6}/g
    let phones=document.getElementById("sodt");
    let span2=document.getElementById("span2");
    if(phones.value=="")
    {
        span2.innerHTML="không được để trống số điện thoại";
        phones.style.border="1px red solid"
        return false;
    }
    if(conditions.test(phones.value) && phones.value.length==10)
    {
        span2.innerHTML="*";
        phones.style.border="1px black solid";
        return true;
    }
    else
    {
        span2.innerHTML="số điện thoại có dạng XXX-YYYYYY";
        phones.style.border="1px red solid"
        return false;
    } 
}
function khoa_hoc()
{
    let optionss=document.getElementById("optionss");
    let hocphi=document.getElementById("hocphi");
    if(optionss.value=="2 tuần")
    {
        hocphi.value="5.000.000";
    }
    if(optionss.value=="4 tuần")
    {
        hocphi.value="8.000.000";
    }
    if(optionss.value=="6 tuần")
    {
        hocphi.value="9.000.000";
    }
    return hocphi.value;

}
function check_ngaysinh()
{
    let dates=document.getElementById("birthdate");
    let span3=document.getElementById("span3");
    let now=new Date().getFullYear();
    let inputdate=new Date(dates.value).getFullYear();
    if(now<inputdate)
    {
        span3.innerHTML="tuổi không hợp lệ";
        dates.style.border="1px red solid"
        return false;
    }
    if(now-inputdate>14 && now-inputdate<18)
    {
        span3.innerHTML="*";
        dates.style.border="1px black solid";
        return true
    }
    else
    {
        span3.innerHTML="từ 14 đến 18 tuổi";
        dates.style.border="1px red solid"
        return false;
    } 
}
function check_anh()
{
    let anh=document.getElementById("anh");
    let span6=document.getElementById("span6");
    let correct_img=['image/gif', 'image/jpeg', 'image/png'];
    if(correct_img.includes(anh.files[0].type))
    {
        span6.innerHTML="*";
        anh.style.border="1px black solid";
        return true;
    }
    else
    {
        span6.innerHTML="định dạng ảnh không hợp lệ";
        anh.style.border="1px red solid";
        return false;
    } 
}
var STT=1;
function dangky()
{
    let hoten=document.getElementById("hoten").value;
    let gender="Nam";
    let phones=document.getElementById("sodt").value;
    let optionss=document.getElementById("optionss").value;
    let dates=document.getElementById("birthdate").value;
    let diachi=document.getElementById("diachi").value;
    let hocphi=khoa_hoc();
    let var1=check_hoten();
    let var2=check_phone();
    let var3=check_ngaysinh();
    let var4=check_anh();
    if(var1 && var2 && var3 && var4)
    {
        document.getElementById("table1").innerHTML+="<td>"+STT+"</td>"+
        "<td>"+hoten+"</td>"+
        "<td>"+gender+"</td>"+
        "<td>"+phones+"</td>"+
        "<td>"+dates+"</td>"+
        "<td>"+diachi+"</td>"+
        "<td>"+optionss+"</td>"+
        "<td>"+hocphi+"</td>";
        STT+=1;
    }
}