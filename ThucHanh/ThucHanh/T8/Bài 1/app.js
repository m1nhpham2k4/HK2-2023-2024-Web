$(document).ready(function()
{
    var i=1;
    $("#myBtn").click(function()
        {
            $("#myModal").modal();
        })
    function kiemtraMa()
    {
        var re=/^[A-Z]{3,}-[A-Z]{3,}-(0[1-9]|1[0-2])-([1-9][0-9]{3})$/;
        var matour=$("#txtMaTour").val();
        if (matour=="")
        {
            $("tbMa").html("*Bắt buộc nhập");
            return false;
        }
        if(!re.test(matour))
        {
            $("#tbMa").html("* Mã tour theo mẫu: XXX-XXX-00-0000"); 
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMaTour").blur(kiemtraMa);

    function KiemtraDD()
    {
        if($("#txtDiemDen").val()=="")
        {
            $("#tbDiemDen").html("*Bắt buộc nhập")
            return false
        }
        $("#tbDiemDen").html("*")
        return true
    }
    $("#txtDiemDen").blur(KiemtraDD)

    function kiemtraNgayKhoiHanh()
    {
        if($("txtNgay").val()=="")
        {
            $("#tbNgay").html("*Bắt buộc nhập")
            return false
        }
        var day=new Date($("#txtNgay").val());
        var today= new Date();
        today.setDate(today.getDate()+30);
        // alert(day<today);
        if (day<today)
        {
            $("#txtNgay").html("*Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }

    $("#txtNgay").blur(kiemtraNgayKhoiHanh)

    function KTGia() { 
        //var re = /^[1-9][0-9]*$/ 
        var gia = $("#txtGia").val(); 
        if (gia == "") { 
            $("#tbGia").html("*Bắt buộc nhập"); 
            return false; 
        } 
        if (isNaN(gia)) { 
            $("#tbGia").html("*Phải nhập số"); 
            return false; 
        } 
        if (eval(gia) < 0) { 
            $("#tbGia").html("*Nhập số lớn hơn 0"); 
            return false; 
        } 
        $("#tbGia").html("*"); 
        return true; 
    } 
    $("#txtGia").blur(KTGia); 

    $("#btnSave").click(function(){
        if (!kiemtraMa()||!KTGia()||!kiemtraNgayKhoiHanh()||!KiemtraDD()){
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        var matour=$("#txtMaTour").val();
        var diemden=$("#txtDiemDen").val();
        var ngaykh=$("#txtNgay").val()
        var tg = $("#txtTG").val(); 
        var gia = $("#txtGia").val(); 
        var anh=$("#txtAnh").val().substring(12);

        // alert(matour,diemden,ngaykh,tg,gia,anh)
        var them=" <tr>" +
                        "<td>"+(i++)+"</td>" + 
                        "<td>"+matour+"</td>" +
                        "<td>"+diemden+"</td>" +
                        "<td>"+ngaykh+"</td> " +
                        "<td>"+tg+"</td>" +
                        "<td>"+gia+"</td>" +
                        "<td>"+anh+"</td>" +
                    "</tr>"
        $("#them").append(them);
        
        $("myModal").modal("hide");
        return true;
    })
})