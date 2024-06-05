function kiemtratong(reg,idnhap,idin,testSai) {
    var tra=document.getElementById(idnhap).value;
    if (!reg.test(tra))
    {
        document.getElementById(idin).innerHTML=testSai;
    }
    else
        document.getElementById(idin).innerHTML="*";
}
function kiemtratendn()
{
    var reg=/^[a-zA-Z0-9]{2,40}$/;
    var testSai="Tên Đăng Nhập phải từ 2-40 kí tự và không được chứa các kí tự đặt biệt";
    kiemtratong(reg,"texttendn","er-tendn",testSai);
}

function kiemtramk()
{
    var reg=/(?=.*[a-zA-Z])(?=.*\d)(?=.*[\%\^\&\*\(\)\.@\_\#\$\!])(?=.{6,})/;
    testSai="Mật khẩu phải có 6 kí tự trở lên, phải có ít nhất 1 kí tự Hoa, 1 kí tự thuòng, 1 chữ số, 1 kí tự đặt biệt";
    var tra=document.getElementById("textmk").value;
    kiemtratong(reg,"textmk","er-mk",testSai);
}

function kiemtranlmk()
{
    var reg=/(?=.*[a-zA-Z])(?=.*\d)(?=.*[\%\^\&\*\(\)\.@\_\#\$\!])(?=.{6,})/;
    var mk=document.getElementById("textmk").value;
    var nlmk=document.getElementById("textnlmk").value;
    if (nlmk!=mk)
    {
        document.getElementById("er-nlmk").innerHTML="Mật khẩu không khớp";
    }
    else
        document.getElementById("er-nlmk").innerHTML="*";
}

function kiemtraht()
{
    var reg=/^([A-Z]{1}[a-z]*\s*){2,}$/
    var textsai="Viết hoa chữ cái đầu dòng! Và mỗi từ 2 kí tự trở lên"
    kiemtratong(reg,"textht","er-hoten",textsai)
}

function kiemtrasdt()
{
    var reg=/^[0]{1}[0-9]{8,9}$/
    var testSai="Số điện thoại không đúng";
    kiemtratong(reg,"textsdt","ersdt",testSai);
}