$(document).ready(function(){
    var i=2
    function kiemtramsv()
    {
        var msv=$("#txtmsv").val();
        var re=/^[0-9]{10}$/
        if (msv.trim()=="")
        {
            $("#tbmsv").html("*Bắt buộc nhập")
            return false;
        }
        if (re.test(msv)==false)
        {
            $("#tbmsv").html("*Kí tự số và độ dài 10 kí tự")
            return false;
        }
        $("#tbmsv").html("*")
        return true;
    }
    $("#txtmsv").blur(kiemtramsv);

    function kiemtrahoten()
    {
        var ht=$("#txtht").val();
        var re=/^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]*){0,2}$/
        if (ht.trim()=="")
        {
            $("#tbht").html("*Bắt buộc nhập")
            return false;
        }
        if (re.test(ht)==false)
        {
            $("#tbht").html("*Chữ hoa đầu từ và từ 2 kí tự trở lên")
            return false;
        }
        $("#tbht").html("*")
        return true;
    }
    $("#txtht").blur(kiemtrahoten);

    function kiemtrangtg()
    {
        var ntg=new Date($("#txtngaytg").val());
        var today=new Date();
        var songay=(ntg.getTime()-today.getTime())/(24*60*60*1000)
        if ($("#txtngaytg").val().trim()=="")
        {
            $("#tbngaytg").html("*Bắt buộc nhập")
            return false;
        }
        if (songay<7)
        {
            $("#tbngaytg").html("*Sau ngày hiện tại 7 ngày")
            return false;
        }
        $("#tbngaytg").html("*")
        return true;
    }
    $("#txtngaytg").blur(kiemtrangtg);

    function kiemtraemail()
    {
        var email=$("#txtemail").val();
        var re=/^[a-zA-Z]{1}[a-z0-9A-Z_\.]*@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
        if (email.trim()=="")
        {
            $("#tbemail").html("*Bắt buộc nhập")
            return false;
        }
        if (re.test(email)==false)
        {
            $("#tbemail").html("*Bắt đầu bằng chữ cái và có tên miền")
            return false;
        }
        $("#tbemail").html("*")
        return true;
    }
    $("#txtemail").blur(kiemtraemail);

    function kiemtrasdt()
    {
        var sdt=$("#txtsdt").val();
        var re=/^[0-9]{10}$/
        if (sdt.trim()=="")
        {
            $("#tbsdt").html("*Bắt buộc nhập")
            return false;
        }
        if (re.test(sdt)==false)
        {
            $("#tbsdt").html("*Chứa 10 kí tự chữ số")
            return false;
        }
        $("#tbsdt").html("*")
        return true;
    }
    $("#txtsdt").blur(kiemtrasdt);

    $("#btnSave").click(function()
    {
        if (kiemtramsv()==false||kiemtrasdt()==false||!kiemtraemail()|| !kiemtrahoten || !kiemtrangtg())
        {
            alert("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }
        var msv=$("#txtmsv").val()
        var hoten=$("#txtht").val();
        var ngaytg=$("#txtngaytg").val()
        var email=$("#txtemail").val()
        var sdt=$("#txtsdt").val()

        var them="<tr><td>"+(i++)+"</td><td>"+msv+"</td><td>"+hoten+"</td><td>"+ngaytg+"</td><td>"+email+"</td><td>"+sdt+"</td></tr>"

        $("#them").append(them)
        $("#myModal").modal("hide");
        return true

    })
})