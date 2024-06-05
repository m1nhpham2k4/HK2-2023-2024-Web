$(document).ready(function(){

    function kiemtrahoten()
    {
        var re=/^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/
        var hoten=$("#txtht").val()
        if (hoten.trim()=="")
        {
            $("#tbht").html("*Bắt buộc nhập")
            return false
        }
        if (!re.test(hoten))
        {
            $("#tbht").html("*Viết hoa chữ cái đầu tiên của từ chữ")
            return false
        }
        $("#tbht").html("(*)")
        return true
    }
    $("#txtht").blur(kiemtrahoten)

    function setgialoaiphong()
    {
        var loaiphong=$("#txtloaiphong").val()
        var dsloaiphong=["Luxury","Superior","View Sea","Pool View"]
        var giaphong=[1200000,1500000,1900000,1700000]
        for (var i=0;i<dsloaiphong.length;i++)
        {
            if (dsloaiphong[i]==loaiphong)
            {
                $("#txtgiaphong").val(giaphong[i])
                return giaphong[i]
            }
        }
        // if (loaiphong=="Luxury")
        // {
        //     var gia=1200000
        //     $("#txtgiaphong").val(gia)
        //     return gia
        // }
        // if (loaiphong=="Superior")
        // {
        //     var gia=1500000
        //     $("#txtgiaphong").val(gia)
        //     return gia
        // }
        // if (loaiphong=="View Sea")
        // {
        //     var gia=1900000
        //     $("#txtgiaphong").val(gia)
        //     return gia
        // }
        // if (loaiphong=="Pool View")
        // {
        //     var gia=1700000
        //     $("#txtgiaphong").val(gia)
        //     return gia
        // }    
    }
    $("#txtloaiphong").change(setgialoaiphong)

    function checkngayden()
    {
        var ngayden=new Date($("#txtnden").val());
        alert(ngayden)
        var today=new Date();
        // var month=(today.getMonth()+1)<10 ?"0"+(today.getMonth()+1): (today.getMonth()+1)

        // var day=(today.getDay())<10 ?"0"+(today.getDay()): (today.getDay())

        // var nowdate=today.getFullYear()+"-"+month+"-"+day
        if (ngayden=="")
        {
            $("#tbnden").html("*Bắt buộc chọn")
            return false
        }
        if (ngayden<today)
        {
            $("#tbnden").html("*Ngày đến phải lớn hơn ngày hiện tại")
            return false
        }
        $("#tbnden").html("(*)")
        return true
    }
    $("#txtnden").blur(checkngayden)

    function checkngaydi()
    {
        var ngayden=$("#txtnden").val();
        var ngaydi=$("#txtndi").val();
        if (ngaydi=="")
        {
            $("#tbndi").html("*Bắt buộc chọn")
            return false
        }
        if (ngaydi<ngayden)
        {
            $("#tbndi").html("*Ngày đi phải lớn hơn ngày đến")
            return false
        }
        $("#tbndi").html("(*)")
        return true
    }
    $("#txtndi").blur(checkngaydi)

    function setsongay()
    {
        let ngaydi = new Date($("#txtndi").val())
        let ngayden = new Date($("#txtnden").val())
        let songay = (ngaydi.getTime() - ngayden.getTime()) / (24 * 60 * 60 * 1000)
        $("#txtsongay").val(songay)
        return songay
    }
    $("#txtndi").change(setsongay)

    $("#btnSave").click(function()
    {
        if (kiemtrahoten()==false || checkngayden()==false || checkngaydi()==false)
        {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }

        dichvukem=[]
        $.each($("input[name='dichvu']:checked"),function()
        {
            dichvukem.push($(this).val())
        })

        var hoten=$("#txtht").val()
        var ngayden=$("#txtnden").val();
        var ngaydi=$("#txtndi").val();
        var songay=setsongay()
        var loaiphong=$("#txtloaiphong").val()
        var giaphong=setgialoaiphong()
        var dichvu=dichvukem.join(", ")
        var tongsodichvu=dichvukem.length
        var tongchiphi=giaphong*songay+tongsodichvu*200000
        var them= "<tr><td>"+hoten+"</td><td>"+ngaydi+"</td><td>"+ngayden+"</td><td>"+songay+"</td><td>"+loaiphong+"</td><td>"+dichvu+"</td><td>"+tongchiphi+"</td></tr>"
        $("#them").append(them)
        return true
    })
})