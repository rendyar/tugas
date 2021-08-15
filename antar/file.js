function harga() {
    var jarak = prompt("Masukkan Jarak KM")
    const j = 10000
    var berat = prompt("Masukkan Berat KG")
    const b = 5000
    var hasiljarak = jarak*j
    var hasilberat = berat*b
    var diskonkm = 0.10;
    var diskonkg = 0.5;

    var km = "";
    if (hasiljarak > 49999) km = hasiljarak - (hasiljarak*diskonkm);
    else km = hasiljarak;
    document.getElementById("km").innerHTML= km;

    var kg = "";
    if (hasilberat > 99999) kg = hasilberat - (hasilberat*diskonkg);
    else kg = hasilberat;
    document.getElementById("kg").innerHTML= kg;

    document.getElementById("hasilharga").innerHTML= km+kg;
}