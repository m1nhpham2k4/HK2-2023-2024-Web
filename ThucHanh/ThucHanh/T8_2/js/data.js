let sp1 = {tensp:"Chau hoa 1",hinhanh:"../img/chauhoa1.PNG" ,soluong:10, dongia:120000}
let sp2 = {tensp:"Chau hoa 2",hinhanh:"../img/chauhoa2.PNG" ,soluong:1, dongia:100000}
let sp3 = {tensp:"Chau hoa 3",hinhanh:"../img/chauhoa3.PNG" ,soluong:2, dongia:220000}
let sp4 = {tensp:"Chau hoa 4",hinhanh:"../img/chauhoa4.PNG" ,soluong:5, dongia:320000}
let sp5 = {tensp:"Chau hoa 5",hinhanh:"../img/chauhoa5.PNG" ,soluong:20, dongia:180000}

let dssp = [sp1, sp2, sp3, sp4, sp5]

localStorage.setItem("products", JSON.stringify(dssp))