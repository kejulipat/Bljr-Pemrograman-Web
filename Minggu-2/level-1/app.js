const productName = "Laptop Asus ROG";
let price = 15000000;
let isAvailable = true;
let discount = 500000;
let finalPrice = price - discount;

console.log("Nama Produk:", productName);
console.log("Harga:", price);

if (finalPrice > 10000000) {
	console.log("Kategori: Barang Mewah");
} else {
	console.log("Kategori: Barang Standar");
}