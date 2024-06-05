$(document).ready(function()
{
    var i=0
    function ktraTen()
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
    $("#txtht").blur(ktraTen)

    function ktsdt()
    {
        var re=/^\([0-9]{4}\)\d{3}\-\d{3}$/
        var sdt=  $("#txtsdt").val()

        if (sdt.trim()=="")
        {
            $("#tbsdt").html("*Bắt buộc nhập")
            return false
        }
        if (!re.test(sdt))
        {
            $("#tbsdt").html("*Điện thoại liên hệ có mẫu sau: (0000)000-000, 0 đại diện cho ký số bất kỳ.")
            return false
        }
        $("#tbsdt").html("*")
            return true
    }
    $("#txtsdt").blur(ktsdt)

    function ktsl()
    {
        var sl=$("#txtsoluong").val()
        if (sl.trim()=="")
        {
            $("#tbsoluong").html("*Bắt buộc nhập")
            return false
        }
        if (sl<0)
        {
            $("#tbsoluong").html("*Số người tham gia dự tiệc phải là số, ít nhất là 1.")
            return false
        }
        $("#tbsoluong").html("*")
            return true
    }

    $("#txtsoluong").blur(ktsl)

    function ktngay()
    {
        var today=new Date()
        var ndt=new Date($("#txtngay").val())
        if ($("#txtngay").val()=="")
        {
            $("#tbngay").html("*Bắt buộc nhập")
            return false
        }
        if (ndt>=today)
        {
            $("#tbngay").html("*Ngày đặt tiệc trước ngày hiện tại.")
            return false
        }
        $("#tbngay").html("*")
            return true
    }

    $("#txtngay").blur(ktngay)

    $("#btnSave").click(function()
    {
        var dichvukem=[]
        $.each($("input[name='dichvu']:checked"),function()
        {
            dichvukem.push($(this).val())
        })
        var ht=$("#txtht").val()
        var sdt= $("#txtsdt").val()
        var sl=$("#txtsoluong").val()
        var ndt=$("#txtngay").val()
        var gio=$("#txtgio").val()
        var lt=$("#loaitiec").val()
        var lp=$("input[name='loaiphong']:checked").val()
        var tv=$("input[name='thanhvien']:checked").val()
        var dichvu=dichvukem.join(" ,")
        var ghichu=$("#ghichu").val()

        var them="<tr><td>"+(i++)+"</td><td>"+ht+"</td><td>"+sdt+"</td><td>"+ndt+"</td><td>"+gio+"</td><td>"+sl+"</td><td>"+lt+"</td><td>"+lp+"</td><td>"+tv+"</td><td>"+dichvu+"</td><td>"+ghichu+"</td></tr>"

        $("tbody").append(them)
        $("#myModal").modal("hide");
        return true;
    })
})