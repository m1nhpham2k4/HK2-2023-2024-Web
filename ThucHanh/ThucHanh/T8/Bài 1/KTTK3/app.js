$(document).ready(function(){
    var i=1;
    $("#menuDatbao").click(function(){
        $("#myModal").modal();
    })

    function ktradangki()
    {
        var loaibao = [];
        $.each($("input[name='dkdb']:checked"), function(){
            loaibao.push($(this).val());
        });
        if(loaibao.length==0)
        {
            $("#tbdk").html("*Chon bao can dang ki")
            return false;
        }
        $("#tbdk").html("*")
        return loaibao;
        // alert("Dang ki bao: " + loaibao.join(", "));
    }
    $("#btnSave").click(ktradangki)

    function kiemtrathongtin()
    {
        // var re=/^([A-Za-z\s]{1,})*$/
        var thongtin=$("#txtthongtin").val()
        // alert(re.test(thongtin))
        if ($("#txtthongtin").val()=="")
        {
            $("#tbttll").html("*Bắt buộc nhập");
            return false;
        }
        // if(!re.test(thongtin))
        // {
        //     $("#tbttll").html("*Viết hoa chữ cái đầu tiên"); 
        //     return false;
        // }
        $("#tbttll").html("*");
        return true;
    }
    $("#txtthongtin").blur(kiemtrathongtin)

    function kiemtradcnb()
    {
        var re=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\s])[A-Za-z\d\s]{3,}$/
        var diachi=$("#txtdcnb").val()
        // alert(re.test(diachi))
        if ($("#txtdcnb").val()=="")
        {
            $("#tbdcnb").html("*Bắt buộc nhập");
            return false;
        }
        if(!re.test(diachi))
        {
            $("#tbdcnb").html("*Có ít nhất 1 kí tự số, kí tự chữ, khoảng trắng"); 
            return false;
        }
        $("#tbdcnb").html("*");
        return true;
    }
    $("#txtdcnb").blur(kiemtradcnb)

    function kiemtrasdt()
    {
        var re=/^(09|08|07)\d{8}$/
        var sdt=$("#txtsodt").val()
        // alert(re.test(sdt))
        if ($("#txtsodt").val()=="")
        {
            $("#tbsdt").html("*Bắt buộc nhập");
            return false;
        }
        if(!re.test(sdt))
        {
            $("#tbsdt").html("*Dãy số 10 ký tự bắt đầu bằng 09, 07,08"); 
            return false;
        }
        $("#tbsdt").html("*");
        return true;
    }
    $("#txtsodt").blur(kiemtrasdt)

    function setDonGia()
    {
        var kihan=$("#txtkihan").val();
        if (kihan=="3thang")
        {
            var dongia3thang=300000
            $("#txtDongia").val(dongia3thang);
            return dongia3thang;
        }
        if (kihan=="6thang")
        {
            var dongia6thang=500000
            $("#txtDongia").val(dongia6thang)
            return dongia6thang;
        }
        if (kihan=="12thang")
        {
            var dongia12thang=800000
            $("#txtDongia").val(dongia12thang)
            return dongia12thang;
        }
        return 0;
    }
    $("#txtkihan").click(setDonGia)


    function ktrathanhtoan()
    {
        var thanhtona=$("input[name='tt']:checked").val()
        if (thanhtona==null)
        {
            $("#tbtt").html("*Bắt Buộc chọn")
            return false
        }
        $("#tbtt").html("*")
        return true
    }
    $("#btnSave").click(ktrathanhtoan)

    $("#btnSave").click(function()
    {
        if (kiemtrasdt()==false || kiemtrathongtin()==false || kiemtradcnb()==false)
        {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        var datbao=ktradangki().join(", ")
        var kihan=$("#txtkihan option:selected").text();
        var ttln=$("#txtthongtin").val()
        var diachi=$("#txtdcnb").val()
        var tongthanhtine=ktradangki().length*setDonGia()
        var hinhthucthanhtoan=$("input[name='tt']:checked").val()

        var them=" <tr>" +
                        "<td>"+(i++)+"</td>" + 
                        "<td>"+datbao+"</td>" +
                        "<td>"+kihan+"</td>" +
                        "<td>"+ttln+"</td> " +
                        "<td>"+diachi+"</td>" +
                        "<td>"+tongthanhtine+"</td>" +
                        "<td>"+hinhthucthanhtoan+"</td>" +
                    "</tr>"
        $("#them").append(them);

        $("myModal").modal("hide");
        return true;
    })
})