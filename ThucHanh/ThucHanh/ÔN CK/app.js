$(document).ready(function()
{
    $("#myBtn").click(function()
    {
        $("#myModal").modal();
    })

    var i=1

    function ktraMaSach()
    {
        var ms=$("#txtms").val()
        var re=/^[0-9]{3}-[a-zA-Z]{5}$/
        if (ms.trim()=="")
        {
            $("#tbms").html("(*)Bắt buộc nhập")
            return false
        }
        if (re.test(ms)==false)
        {
            $("#tbms").html("(*)XXX-YYYYY, trong có XXX là 3 chữ số, YYYYY là 5 ký tự thường hoặc in hoa")
            return false
        }
        $("#tbms").html("(*)")
        return true
    }
    $("#txtms").blur(ktraMaSach)

    function ktrann()
    {
        var today=new Date();
        var nn=new Date($("#txtnn").val())
        if ($("#txtnn").val().trim()=="")
        {
            $("#tbnn").html("(*)Bắt buộc nhập")
            return false
        }
        if(nn<today)
        {
            $("#tbnn").html("(*)Ngày nhập phải sau ngày hiện tại")
            return false
        }
        $("#tbnn").html("(*)")
        return true
    }
    $("#txtnn").blur(ktrann)

    function ktraSoLuong()
    {
        var sl=$("#txtsoluong").val()
        if(sl.trim()=="")
        {
            $("#tbsl").html("(*)Bắt buộc nhập")
            return false
        }
        if(sl<0 || sl>1000)
        {
            $("#tbsl").html("(*)Số lượng phải >0 và <1000")
            return false
        }
        $("#tbsl").html("(*)")
        return true
    }
    $("#txtsoluong").blur(ktraSoLuong)

    function capnhapChietKhau()
    {
        var ptck=["20%","25%","30%","35%"]
        var nsb=["NSBKD","NXBT","NXBTGM","NXBTT"]
        for (var i=0;i<nsb.length;i++)
        {
            if (nsb[i]==$("#txtnxn option:selected").val())
            {
                $("#txtchietkhau").val(ptck[i])
            }
        }
    }
    $("#txtnxn").change(capnhapChietKhau)

    $("#btnSave").click(function()
    {
        if (!ktraMaSach() || !ktrann() || !ktraSoLuong())
        {
            alert("Mời bạn nhập đầy đủ thông tin!")
            return false
        }

        var ms=$("#txtms").val()
        var nn=$("#txtnn").val()
        var sl=$("#txtsoluong").val()
        var nxb=$("#txtnxn option:selected").text()
        var ck=$("#txtchietkhau").val()
        var tl=$("input[name='txttheloai']:checked").val()

        var them="<tr><td>"+(i++)+"</td><td>"+ms+"</td><td>"+nn+"</td><td>"+sl+"</td><td>"+nxb+"</td><td>"+ck+"</td><td>"+tl+"</td></tr>"

        $("tbody").append(them)
        $("#myModal").modal("hide")
        return true

    })
})