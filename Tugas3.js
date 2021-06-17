function SeleksiNilai(nilaiAwal, nilaiAkhir, [...arr]) {
	sortArr = arr.sort((a, b) => a - b);
	if (nilaiAwal < nilaiAkhir && sortArr.length > 5) {
		found = sortArr.filter((x) => x > nilaiAwal && x < nilaiAkhir);
		console.log(found);
	} else if (sortArr.length < 5) {
		console.log('Jumlah angka dalam dataArray harus lebih dari 5');
	} else if (nilaiAwal > nilaiAkhir) {
		console.log('Nilai akhir harus lebih besar dari nilai awal');
	}
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);

SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);

SeleksiNilai(4, 17, [2, 25, 4]);
