//alert
alert('Hallo World!!!');
//variabel
document.write('<h3>Variabel </h3>')
var fullName = "lisa"
document.write(fullName)
document.write('<br>')
//mengubah value variabel
fullName = "dina"
document.write(fullName)
document.write('<br>')
/*
var let const
- var: function scope, artinya dapat diakses dalam fungsi 
        tidak direkomendasikan lagi krn tidak memiliki blok scope
        akan menghasilkan nilai yg tidak terprediksi
- Let: block scope, artinya hanya dapat diakses pada blok tempat mendeklarasikan
        tidak dapat diakses sebelum dideklarasikan
- const: immutable, nilainya tetap
        nilai tidak dapat diubah
*/ 
let fullName2 = "Lionel messi"
fullName2 = "joko"
document.write(fullName2)
document.write('<br>')

const fullName3 ="caca marica"
//fullName3 = "cici mirici"
document.write(fullName3) 
document.write('<br>')
//tidak dapat menampilkan apapun atau terjadi eror

//contoh masalah var
var x = 10;
if(true){
    var x = 20;
    console.log("nilai x didalam blok:", x);
}
console.log("nilai x diluar blok:", x)

let y = 10;
if(true){
    let y = 20;
    console.log("nilai y didalam blok:", y);
}
console.log("nilai y diluar blok:", y)

// tipe data
document.write('<h3>Tipe Data </h3>')
let bulat = 25
let desimal = 25.2
document.writeln("bilangan bulat :")
document.writeln(bulat)
document.writeln("<br>")
document.writeln("bilangan desimal :")
document.writeln(desimal)
document.writeln("<br>")
document.writeln("hasil penjumlahan :")
document.writeln(bulat + desimal)
document.writeln("<br>")

let string = 'a'
document.writeln("hasil modulus bilangan bulat :")
document.writeln(bulat/0)
document.writeln("<br>")
document.writeln("hasil modulus string :")
document.writeln(string/5)
document.writeln("<br>")

let a = 12345683794280313153851391830112313571538163993
document.writeln("hasil bigint tanpa n :")
document.writeln(a)
document.writeln("<br>")
a = 12345683794280313153851391830112313571538163993n
document.writeln("hasil bigint dengan n :")
document.writeln(a)
document.writeln("<br>")

let admin
let perbandingan = 15 > 9
document.writeln("apakah 15 > 9 :")
document.writeln(perbandingan)
document.writeln("<br>")
document.writeln("tipedata undefined :")
document.writeln(admin)
document.writeln("<br>")

//tipe data object
let employee = {
    nama: "john",
    umur: 30,
    job: "web developer",
    isMarried: false,
}
document.writeln('tipe data object : ')
document.write(`My name is ${employee.nama} and he is ${employee.umur} years old`)

// operator
document.writeln("<br>")
document.write('<h3>Operator</h3>')
document.write('<h5>Operator Aritmatika</h5>')
let b = 5
let c = 7
document.writeln("5 + 7 =")
document.writeln(b+c)
document.writeln("<br>")
document.writeln("5 - 7 =")
document.writeln(b-c)
document.writeln("<br>")
document.writeln("5 * 7 =")
document.writeln(b*c)
document.writeln("<br>")
document.writeln("5 ** 7 =")
document.writeln(b**c)
document.writeln("<br>")
document.writeln("5 / 7 =")
document.writeln(b/c)
document.writeln("<br>")
document.writeln("5 % 7 =")
document.writeln(b%c)
document.writeln("<br>")

document.write('<h5>Operator Comparison</h5>')
document.writeln("5 == 7 :")
document.writeln(b==c)
document.writeln("<br>")
document.writeln("5 < 7 :")
document.writeln(b<c)
document.writeln("<br>")
document.writeln("5 > 7 :")
document.writeln(b>c)
document.writeln("<br>")
document.writeln("5 != 7 :")
document.writeln(b!=c)
document.writeln("<br>")

document.write('<h5>Operator Logika</h5>')
document.writeln("5 && 7 :")
document.writeln(b&&c)
document.writeln("<br>")
document.writeln("5 | 7 :")
document.writeln(b||c)
document.writeln("<br>")
document.writeln("!7 :")
document.writeln(!c)
document.writeln("<br>")
document.writeln("!5  :")
document.writeln(!b)
document.writeln("<br>")

document.write('<h5>Operator Bitwise</h5>')
document.writeln("5 & 7 :")
document.writeln(b&c)
document.writeln("<br>")
document.writeln("5 | 7 :")
document.writeln(b|c)
document.writeln("<br>")
document.writeln("5 ^ 7 :")
document.writeln(b^c)
document.writeln("<br>")
document.writeln("¬5  :")
document.writeln(~c)
document.writeln("<br>")

document.write('<h5>Operator Ternary</h5>')
document.writeln('b == c ?' )
document.writeln(b == c ? 'sama' : 'tidak sama')

document.write('<h1>Pop Up</h1>')
document.write('<h5>Promt</h5>')
let string2 = prompt("apakah kamu bosan denganku?")
document.writeln("jawabannya adalah = " + string2)

document.write('<h5>confirm</h5>')
let string3 = confirm("apakah kamu ingin pergi?")
string3 ? document.writeln('jawabannya iya') : document.writeln('jawabannya tidak')

document.write('<h1>Percabangan</h1>')
document.write('<h5>IF-Else</h5>')
if (string3) {
    document.writeln('jawabannya iya')
}else{
    document.writeln('jawabannya tidak')
}

document.write('<h5>Else-If</h5>')
let cabang = prompt("1 + 9 = ")
if (cabang = 10) {
    document.writeln('jawabannya benar')
} else if(cabang > 10) {
    document.writeln('jawabannya melebihi')
}else if(cabang < 10){
    document.writeln('jawabannya kurang')
}

document.write('<h5>Switch</h5>')
let cabang2 = prompt("what color do you like?")

switch (cabang2) {
    case "red":
        document.writeln('I love Red!')
        break;

    case "blue":
        document.writeln('I love blue!')
        break;

    default:
        document.writeln('i dont know what color is!')
        break;
}

document.write('<h1>Looping</h1>')
document.write('<h5>For</h5>')
for (let i = 1; i < 11; i++) {
    document.writeln("for looping ke-" + i );
    document.writeln("<br>")    
}
document.write('<h5>While</h5>')
let j = 10
while (j<20) {
    document.writeln('while ' + j)
    document.writeln('<br>')
    j++
}

document.write('<h5>Do While</h5>')
let z = 1
do {
   document.writeln(z)
   document.writeln('<br>')
   z++ 
} while (z<5);

document.write('<h1>loop control</h1>')
document.write('<h5>break</h5>')
for (let g = 0; g < 5; g++) {
    if (g==3) {
        break
    }
    document.writeln(g)
    document.writeln('<br>')
}
document.write('<h5>continue</h5>')
for (let g = 0; g < 5; g++) {
    if (g==3) {
        continue
    }
    document.writeln(g)
    document.writeln('<br>')
}