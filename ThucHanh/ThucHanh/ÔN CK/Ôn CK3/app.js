$(document).ready(function()
{
    var i=1;
    
    function ktmsv()
    {
        var re=/^\d{10}$/
        var msv=$('#txtmsv').val()
        if (msv.trim()=="")
        {
            $("#tbmsv").html("*Bắt buộc nhập")
            return false
        }
        if (!re.test(msv))
        {
            $("#tbmsv").html("*10 số")
            return false
        }
        $("#tbmsv").html("*")
        return true
    }

    $('#txtmsv').blur(ktmsv)

    function ktt()
    {
        var re= /^([a-zA-Z]{2,}\s{0,1}){1,}$/
        var ht=$("#txtht").val()
        if (ht.trim()=="")
        {
            $("#tbht").html("*Bắt buộc nhập")
            return false
        }
        if (!re.test(ht))
        {
            $("#tbht").html("*Họ tên chỉ gồm các ký tự chữ cái, có thể có ký tự khoảng trắng, mỗi từ có từ 2 ký tự trở lên.")
            return false
        }
        $("#tbht").html("*")
            return true
    }
    $("#txtht").blur(ktt)

    function ktntg()
    {
        var today=new Date()
        var ntg=new Date($("#txtntg").val())
        var songay= ((ntg.getTime()-today.getTime())/(24*60*60*1000))
        if ($("#txtntg").val()=="")
        {
            $("#tbntg").html("*Bắt buộc nhập")
            return false
        }
        if (songay<7)
        {
            $("#tbntg").html("*Sau ngày hiện tại 7 ngày")
            return false
        }
        $("#tbntg").html("*")
        return true
    }
    $("#txtntg").blur(ktntg)

    
    function kte()
    {
        var re= /^[a-zA-Z]{1}[a-zA-Z0-9]{1,}@iuh.edu.vn$/
        var e=$("#txtemail").val()
        if (e.trim()=="")
        {
            $("#tbemail").html("*Bắt buộc nhập")
            return false
        }
        if (!re.test(e))
        {
            $("#tbemail").html("*xxxxxxx@iuh.edu.vn")
            return false
        }
        $("#tbemail").html("*")
            return true
    }
    $("#txtemail").blur(kte)

    function ktsdt()
    {
        var re= /^[0-9]{10}$/
        var sdt=$("#txtsdt").val()
        if (sdt.trim()=="")
        {
            $("#tbsdt").html("*Bắt buộc nhập")
            return false
        }
        if (!re.test(sdt))
        {
            $("#tbsdt").html("*10 số")
            return false
        }
        $("#tbsdt").html("*")
            return true
    }
    $("#txtsdt").blur(ktsdt)

    $("#btnSave").click(function()
    {
        if (!ktmsv() || !kte() || !ktntg() || !ktsdt || !ktt())
        {
            alert("Mời bạn nhập đầy đủ thông tin")
            return false
        }
        var sdt=$("#txtsdt").val()
        var e=$("#txtemail").val()
        var ntg=$("#txtntg").val()
        var ht=$("#txtht").val()
        var msv=$('#txtmsv').val()
        var them="<tr><td>"+(i++)+"</td><td>"+msv+"</td><td>"+ht+"</td><td >"+ntg+"</td><td>"+e+"</td><td>"+sdt+"</td></tr>"
        $("tbody").append(them)
        $("#myModal").modal("hide")
        return true
    })
})