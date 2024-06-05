$(document).ready(function(){
    let i=1;
    function KiemTraTen()
    {
        let re=/^[A-Z][a-z]{0,}(\s[A-Z][a-z]{0,})*$/
        let ten=$("#ten").val();
        if(ten=="")
        {
            $("#tbten").text("Không được để trống");
            return false;
        }
        if(!re.test(ten))
        {
            $("#tbten").text("Tên phải bắt đầu bằng ký tự in hoa");
            return false;
        }
        $("#tbten").text("(*)");
        return true;
    }
    $("#ten").blur(KiemTraTen)
    function KiemTraNgayDen()
    {
        var ngayDen=new Date($("#ngayDen").val());
        var today= new Date();
        if(ngayDen=="")
        {
            $("#tbngayden").text("Không được để trống")
            return false;
        }
        if (ngayDen<today)
        {
            $("#tbngayden").text("Ngày đến phải lớn hơn ngày hiện tại");
            return false;
        }
        $("#tbngayden").text("*");
        return true;
    }
    $("#ngayDen").blur(KiemTraNgayDen)

    function KiemTraNgayDi()
    {
        let ngayDi=$("#ngayDi").val();
        let ngayDen=$("#ngayDen").val();
        if(ngayDi=="")
        {
            $("#tbngaydi").text("Không được để trống")
            return false;
        }
        if(ngayDi<ngayDen)
        {
            $("#tbngaydi").text("Ngày đi phải lớn hơn ngày đến");
            return false;
        }
        $("#tbngaydi").text("(*)");
        return true;
    }
    $("#ngayDi").blur(KiemTraNgayDi)
    function TinhSoNgay()
    {
        let ngaydi = new Date($("#ngayDi").val())
        let ngayden = new Date($("#ngayDen").val())
        let songay = ((ngaydi.getTime() - ngayden.getTime()) / (24 * 60 * 60 * 1000))+1
        $("#soNgay").val(songay);
        return songay;
    }
    $("#soNgay").blur(TinhSoNgay)

    function TinhGiaPhong()
    {
        let loaiphong=$("#loaiPhong").val()
        if (loaiphong=="Luxury")
        {
            let gia=1200000
            $("#giaPhong").val(gia)
            return gia
        }
        if (loaiphong=="Superior")
        {
            let gia=1500000
            $("#giaPhong").val(gia)
            return gia
        }
        if (loaiphong=="View Sea")
        {
            let gia=1900000
            $("#giaPhong").val(gia)
            return gia
        }
        if (loaiphong=="Pool view")
        {
            let gia=1700000
            $("#giaPhong").val(gia)
            return gia
        }    
    }
    $("#loaiPhong").change(TinhGiaPhong)
    $("#btnDangKy").click(function()
    {
        if (!KiemTraTen() || !KiemTraNgayDen() || !KiemTraNgayDi())
        {
            $("#thongbao").text("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }
        dichvukem=[]
        $.each($("input[name='dichVu']:checked"),function()
        {
            dichvukem.push($(this).val())
        })

        var hoten=$("#ten").val()
        var ngayden=$("#ngayDen").val();
        var ngaydi=$("#ngayDi").val();
        var songay=TinhSoNgay()
        var loaiphong=$("#loaiPhong").val()
        var giaphong=TinhGiaPhong()
        var dichvu=dichvukem.join(", ")
        var tongsodichvu=dichvukem.length
        var tongchiphi=giaphong*songay+tongsodichvu*200000
        var them= "<tr><td>"+hoten+"</td><td>"+ngaydi+"</td><td>"+ngayden+"</td><td>"+songay+"</td><td>"+loaiphong+"</td><td>"+dichvu+"</td><td>"+tongchiphi+"</td></tr>"
        $("#them").append(them)
        return true;
    })
})