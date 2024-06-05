function checkMaSach()
{
    let masach=document.getElementById("masach");
    let span1=document.getElementById("span1");
    let conditions=/^\d{3}-\d{2}-[A-Z]{3}$/g;
    if(masach.value=="")
        {
            masach.style.border="1px red solid";
            span1.innerHTML="mã sách không được rỗng";
            return false;
        }
    if(conditions.test(masach.value))
        {
            masach.style.border="1px green solid";
            span1.innerHTML="";
            return true;
        }
    else
    {
        masach.style.border="1px red solid";
        span1.innerHTML="Mã sách có định dạng XXX-XX-XXX, trong có XXX là 3 chữ số, XX là 2 ký tự số thể hiện năm từ năm hiện tại về sau, XXX 2 ký tự in hoa";
        return false;
    }
}
function checkHinhMinhHoa()
{
    let minhhoa=document.getElementById("minhhoa");
    let span2=document.getElementById("span2");
    let conditions=/[(\.jpeg)(\.png)(\.gif)]$/g;
    if(minhhoa.value=="")
        {
            minhhoa.style.border="1px red solid";
            span2.innerHTML="phải có ảnh minh họa";
            return false;
        }
    if(conditions.test(minhhoa.value))
        {
            minhhoa.style.border="1px green solid";
            span2.innerHTML="";
            return true;
        }
    else
    {
        minhhoa.style.border="1px red solid";
        span2.innerHTML="là các file hình có tên bất kỳ và có phần định dạng .jpg, .png, .gif";
        return false;
    }
}
function checkNgayNhap()
{
    let ngaynhap=document.getElementById("ngaynhap");
    let span3=document.getElementById("span3");
    let homnay= new Date();
    let dateinput= new Date(ngaynhap.value);
    if(ngaynhap.value=="")
        {
            ngaynhap.style.border="1px red solid";
            span3.innerHTML="vui lòng điền ngày nhập";
            return false;
        }
    if(dateinput>homnay)
        {
            ngaynhap.style.border="1px green solid";
            span3.innerHTML="";
            return true;
        }
    else
    {
        ngaynhap.style.border="1px red solid";
        span3.innerHTML="Ngày nhập phải sau ngày hiện tại";
        return false;
    }
}
function kiemTraSoLuong()
{
    let soluong=document.getElementById("soluong");
    let span4=document.getElementById("span4");
        if(soluong.value=="")
            {
                soluong.style.border="1px red solid";
                span4.innerHTML="vui lòng điền số lượng";
                return false;
            }
        if(parseInt(soluong.value)>0 && parseInt(soluong.value)<1000)
            {
                soluong.style.border="1px green solid";
                span4.innerHTML="";
                return true;
            }
        else
        {
            soluong.style.border="1px red solid";
            span4.innerHTML="Số lượng phải >0 và <1000";
            return false;
        }
}
function thaoTacNXB()
{
    let nxb=document.getElementById("nxb");
    let chietkhau=document.getElementById("chietkhau");
    switch(nxb.value)
    {
        case "Nhà xuất bản Trẻ":
            {
                chietkhau.value="25%";
            }break;
        case "Nhà xuất bản Kim Đồng":
            {
                chietkhau.value="20%";
            }break;
        case "Nhà xuất bản Thế Giới Mới":
            {
                chietkhau.value="30%";
            }break;
        case "Nhà xuất bản Tri thức":
            {
                chietkhau.value="35%";
            }break;
    }
    return chietkhau.value;
}
var stt=1;
function nhapKho()
{
    let masach=document.getElementById("masach").value;
    let minhhoa=document.getElementById("minhhoa").value;
    let ngaynhap=document.getElementById("ngaynhap").value;
    let soluong=document.getElementById("soluong").value;
    let nxb=document.getElementById("nxb").value;
    let chietkhau=thaoTacNXB();
    let checkbox1=document.querySelectorAll(".cb1");
    let theloai="";
    checkbox1.forEach(
        function(item)
        {
            if(item.checked)
                {
                    theloai+=item.value+", ";
                }
        }
    )
    let var1=checkMaSach();
    let var2=checkHinhMinhHoa();
    let var3=checkNgayNhap();
    let var4=kiemTraSoLuong();
        if(theloai=="")
        {
            alert("bạn chưa chọn loại sách");
            return false;
        }
    theloai=theloai.slice(0,-2);
    if(var1 && var2 && var3 && var4)
        {
            document.getElementById("mytable1").innerHTML+=
            "<td>"+stt+"</td>"+
            "<td>"+masach+"</td>"+
            "<td>"+minhhoa+"</td>"+
            "<td>"+ngaynhap+"</td>"+
            "<td>"+soluong+"</td>"+
            "<td>"+nxb+"</td>"+
            "<td>"+chietkhau+"</td>"+
            "<td>"+theloai+"</td>";
            stt+=1;
            $("#modalId").modal("hide");
        }
}