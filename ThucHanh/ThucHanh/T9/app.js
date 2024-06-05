$(document).ready(function(){

    var i=1
    $("#dkcho").click(function(){
        $("#myModal").modal();    
    })

    function ktrahoten()
    {
        // var re=/^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]*){0,2}$/
        var re= /^([a-zA-Z]{2,}\s{0,1}){1,}$/
        var hoten=$("#txtht").val();
        if (hoten.trim()=="")
        {
            $("#tbht").html("*Bắt buộc nhập")
            return false
        }
        if (re.test(hoten)==false)
        {
            $("#tbht").html("*Họ tên chỉ gồm các ký tự chữ cái, có thể có ký tự khoảng trắng, mỗi từ có 2 kí tự trở lên.")
            return false
        }
        $("#tbht").html("*")
            return true
    }
    $("#txtht").blur(ktrahoten)

    function ktrasdt()
    {
        var re=/^\(\d{4}\)\d{3}\-\d{3}$/
        var sodienthoai=$("#txtsdt").val();
        if (sodienthoai.trim()=="")
        {
            $("#tbsdt").html("*Bắt buộc nhập")
            return false
        }
        if (re.test(sodienthoai)==false)
        {
            $("#tbsdt").html("*(0000)000-000, 0 đại diện cho ký tự số bất kỳ")
            return false
        }
        $("#tbsdt").html("*")
            return true
    }
    $("#txtsdt").blur(ktrasdt)

    function ktrasonguoi()
    {
        var songuoi=$("#txtnguoi").val();
        if (songuoi.trim()=="")
        {
            $("#tbnguoi").html("*Bắt buộc nhập")
            return false
        }
        if (songuoi<1)
        {
            $("#tbnguoi").html("*Số người tham gia ít nhất là 1")
            return false
        }
        $("#tbnguoi").html("*")
            return true
    }
    $("#txtnguoi").blur(ktrasonguoi)

    function ktrangay()
    {
        var ngay=$("#txtnnt").val()
        var today=new Date();
        var month=today.getMonth()+1<10?"0"+(today.getMonth()+1):(today.getMonth()+1);
        var nowdate = today.getFullYear()+'-'+month+'-'+today.getDate();
        // alert(nowdate<ngay)
        if (ngay=="")
        {
            $("#tbnnt").html("*Bắt buộc chọn")
            return false
        }
        if (nowdate>ngay)
        {
            $("#tbnnt").html("*Ngày đặt tiệc sau ngày hiện tại")
            return false
        }
        $("#tbnnt").html("*")
        return true
    }
    $("#txtnnt").blur(ktrangay)

    function ktrgio()
    {
        max="20:00"
        min="07:00"
        var gio=$("#txtgnt").val()
        if (gio=="")
        {
            $("#tbgnt").html("*Bắt buộc chọn")
            return false
        }
        if (gio>max || gio <min)
        {
            $("#tbgnt").html("*Thời gian đặt tiệc từ lúc 7h -> 20h cùng ngày")
            return false
        }
        $("#tbgnt").html("*")
        return true
    }
    $("#txtgnt").blur(ktrgio)

    $("#btnSave").click(function()
    {
        if (ktrahoten()==false || ktrangay()==false|| ktrasdt()==false || ktrasonguoi()==false || ktrgio()==false)
        {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }

        dichvukem=[]
        $.each($("input[name='dvdk']:checked"), function()
        {
            dichvukem.push($(this).val())
        })

        var hoten=$("#txtht").val()
        var sodienthoai=$("#txtsdt").val();
        var ngay=$("#txtnnt").val()
        var gio=$("#txtgnt").val()
        var songuoi=$("#txtnguoi").val();
        var loaitiec=$("#txtloaiTiec option:selected").text();
        var loaiphong=$("input[name='lp']:checked").val()
        var thanhvien=$("input[name='tv']:checked").val()=="Yes"?"Yes":"No"
        var dichvu=dichvukem.join(", ");
        var ghichu=$("#txtghichu").val()

        var them="<tr><td>"+(i++)+"</td><td>"+hoten+"</td><td>"+sodienthoai+"</td><td>"+ngay+"</td><td>"+gio+"</td><td>"+songuoi+"</td><td>"+loaitiec+"</td><td>"+loaiphong+"</td><td>"+thanhvien+"</td><td>"+dichvu+"</td><td>"+ghichu+"</td></tr>"

        $("#them").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})