const cities = [
  {
    label: "Kota Bandung",
    value: "Kota Bandung",
  },
  {
    label: "Kota Bogor",
    value: "Kota Bogor",
  },
  {
    label: "Kota Sukabumi",
    value: "Kota Sukabumi",
  },
  {
    label: "Kota Cirebon",
    value: "Kota Cirebon",
  },
  {
    label: "Kota Tasikmalaya",
    value: "Kota Tasikmalaya",
  },
  {
    label: "Kota Cimahi",
    value: "Kota Cimahi",
  },
  {
    label: "Kota Depok",
    value: "Kota Depok",
  },
  {
    label: "Kota Bekasi",
    value: "Kota Bekasi",
  },
  {
    label: "Kota Banjar",
    value: "Kota Banjar",
  },
  {
    label: "Kota Cilegon",
    value: "Kota Cilegon",
  },
  {
    label: "Kota Tangerang",
    value: "Kota Tangerang",
  },
  {
    label: "Kota Serang",
    value: "Kota Serang",
  },
  {
    label: "Kota Tangerang Selatan",
    value: "Kota Tangerang Selatan",
  },
  {
    label: "Kota Administrasi Jakarta Pusat",
    value: "Kota Administrasi Jakarta Pusat",
  },
  {
    label: "Kota Administrasi Jakarta Utara",
    value: "Kota Administrasi Jakarta Utara",
  },
  {
    label: "Kota Administrasi Jakarta Barat",
    value: "Kota Administrasi Jakarta Barat",
  },
  {
    label: "Kota Administrasi Jakarta Selatan",
    value: "Kota Administrasi Jakarta Selatan",
  },
  {
    label: "Kota Administrasi Jakarta Timur",
    value: "Kota Administrasi Jakarta Timur",
  },
  {
    label: "Kota Yogyakarta",
    value: "Kota Yogyakarta",
  },
  {
    label: "Kota Semarang",
    value: "Kota Semarang",
  },
  {
    label: "Kota Salatiga",
    value: "Kota Salatiga",
  },
  {
    label: "Kota Pekalongan",
    value: "Kota Pekalongan",
  },
  {
    label: "Kota Tegal",
    value: "Kota Tegal",
  },
  {
    label: "Kota Magelang",
    value: "Kota Magelang",
  },
  {
    label: "Kota Surakarta",
    value: "Kota Surakarta",
  },
  {
    label: "Kota Surabaya",
    value: "Kota Surabaya",
  },
  {
    label: "Kota Mojokerto",
    value: "Kota Mojokerto",
  },
  {
    label: "Kota Malang",
    value: "Kota Malang",
  },
  {
    label: "Kota Pasuruan",
    value: "Kota Pasuruan",
  },
  {
    label: "Kota Probolinggo",
    value: "Kota Probolinggo",
  },
  {
    label: "Kota Blitar",
    value: "Kota Blitar",
  },
  {
    label: "Kota Kediri",
    value: "Kota Kediri",
  },
  {
    label: "Kota Madiun",
    value: "Kota Madiun",
  },
  {
    label: "Kota Batu",
    value: "Kota Batu",
  },
  {
    label: "Kota Bengkulu",
    value: "Kota Bengkulu",
  },
  {
    label: "Kota Jambi",
    value: "Kota Jambi",
  },
  {
    label: "Kota Sungai Penuh",
    value: "Kota Sungai Penuh",
  },
  {
    label: "Kota Subulussalam",
    value: "Kota Subulussalam",
  },
  {
    label: "Kota Banda Aceh",
    value: "Kota Banda Aceh",
  },
  {
    label: "Kota Sabang",
    value: "Kota Sabang",
  },
  {
    label: "Kota Lhokseumawe",
    value: "Kota Lhokseumawe",
  },
  {
    label: "Kota Langsa",
    value: "Kota Langsa",
  },
  {
    label: "Kota Tebing Tinggi",
    value: "Kota Tebing Tinggi",
  },
  {
    label: "Kota Binjai",
    value: "Kota Binjai",
  },
  {
    label: "Kota Pematang Siantar",
    value: "Kota Pematang Siantar",
  },
  {
    label: "Kota Tanjung Balai",
    value: "Kota Tanjung Balai",
  },
  {
    label: "Kota Sibolga",
    value: "Kota Sibolga",
  },
  {
    label: "Kota Medan",
    value: "Kota Medan",
  },
  {
    label: "Kota Padang Sidempuan",
    value: "Kota Padang Sidempuan",
  },
  {
    label: "Kota Gunung Sitoli",
    value: "Kota Gunung Sitoli",
  },
  {
    label: "Kota Bukit tinggi",
    value: "Kota Bukit tinggi",
  },
  {
    label: "Kota Padang",
    value: "Kota Padang",
  },
  {
    label: "Kota Sawah lunto",
    value: "Kota Sawah lunto",
  },
  {
    label: "Kota Padang Panjang",
    value: "Kota Padang Panjang",
  },
  {
    label: "Kota Solok",
    value: "Kota Solok",
  },
  {
    label: "Kota Payahkumbuh",
    value: "Kota Payahkumbuh",
  },
  {
    label: "Kota Pariaman",
    value: "Kota Pariaman",
  },
  {
    label: "Kota Pekan Baru",
    value: "Kota Pekan Baru",
  },
  {
    label: "Kota Dumai",
    value: "Kota Dumai",
  },
  {
    label: "Kota Palembang",
    value: "Kota Palembang",
  },
  {
    label: "Kota Lubuk Linggau",
    value: "Kota Lubuk Linggau",
  },
  {
    label: "Kota Prabumulih",
    value: "Kota Prabumulih",
  },
  {
    label: "Kota Pagar Alam",
    value: "Kota Pagar Alam",
  },
  {
    label: "Kota Pangkal Pinang",
    value: "Kota Pangkal Pinang",
  },
  {
    label: "Kota Tanjung Pinang",
    value: "Kota Tanjung Pinang",
  },
  {
    label: "Kota Batam",
    value: "Kota Batam",
  },
  {
    label: "Kota Bandar Lampung",
    value: "Kota Bandar Lampung",
  },
  {
    label: "Kota Metro",
    value: "Kota Metro",
  },
  {
    label: "Kota Banjarmasin",
    value: "Kota Banjarmasin",
  },
  {
    label: "Kota Banjarbaru",
    value: "Kota Banjarbaru",
  },
  {
    label: "Kota Pontianak",
    value: "Kota Pontianak",
  },
  {
    label: "Kota Singkawang",
    value: "Kota Singkawang",
  },
  {
    label: "Kota Samarinda",
    value: "Kota Samarinda",
  },
  {
    label: "Kota Balikpapan",
    value: "Kota Balikpapan",
  },
  {
    label: "Kota Bontang",
    value: "Kota Bontang",
  },
  {
    label: "Kota Palangka raya",
    value: "Kota Palangka raya",
  },
  {
    label: "Kota Palu",
    value: "Kota Palu",
  },
  {
    label: "Kota Makassar",
    value: "Kota Makassar",
  },
  {
    label: "Kota Pare-Pare",
    value: "Kota Pare-Pare",
  },
  {
    label: "Kota Palopo",
    value: "Kota Palopo",
  },
  {
    label: "Kota Manado",
    value: "Kota Manado",
  },
  {
    label: "Kota Kotamobagu",
    value: "Kota Kotamobagu",
  },
  {
    label: "Kota Bitung",
    value: "Kota Bitung",
  },
  {
    label: "Kota Tomohon",
    value: "Kota Tomohon",
  },
  {
    label: "Kota Gorontalo",
    value: "Kota Gorontalo",
  },
  {
    label: "Kota Bau-Bau",
    value: "Kota Bau-Bau",
  },
  {
    label: "Kota Kendari",
    value: "Kota Kendari",
  },
  {
    label: "Kota Mataram",
    value: "Kota Mataram",
  },
  {
    label: "Kota Bima",
    value: "Kota Bima",
  },
  {
    label: "Kota Denpasar",
    value: "Kota Denpasar",
  },
  {
    label: "Kota Kupang",
    value: "Kota Kupang",
  },
  {
    label: "Kota Ambon",
    value: "Kota Ambon",
  },
  {
    label: "Kota Tual",
    value: "Kota Tual",
  },
  {
    label: "Kota Jayapura",
    value: "Kota Jayapura",
  },
  {
    label: "Kota Ternate",
    value: "Kota Ternate",
  },
  {
    label: "Kota Tidore Kepulauan",
    value: "Kota Tidore Kepulauan",
  },
  {
    label: "Kota Sorong",
    value: "Kota Sorong",
  },
  {
    label: "Kota Tarakan",
    value: "Kota Tarakan",
  },
  {
    label: "Kabupaten Bekasi",
    value: "Kabupaten Bekasi",
  },
  {
    label: "Kabupaten Purwakarta",
    value: "Kabupaten Purwakarta",
  },
  {
    label: "Kabupaten Karawang",
    value: "Kabupaten Karawang",
  },
  {
    label: "Kabupaten Bogor",
    value: "Kabupaten Bogor",
  },
  {
    label: "Kabupaten Sukabumi",
    value: "Kabupaten Sukabumi",
  },
  {
    label: "Kabupaten Cianjur",
    value: "Kabupaten Cianjur",
  },
  {
    label: "Kabupaten Bandung",
    value: "Kabupaten Bandung",
  },
  {
    label: "Kabupaten Sumedang",
    value: "Kabupaten Sumedang",
  },
  {
    label: "Kabupaten Tasikmalaya",
    value: "Kabupaten Tasikmalaya",
  },
  {
    label: "Kabupaten Garut",
    value: "Kabupaten Garut",
  },
  {
    label: "Kabupaten Ciamis",
    value: "Kabupaten Ciamis",
  },
  {
    label: "Kabupaten Cirebon",
    value: "Kabupaten Cirebon",
  },
  {
    label: "Kabupaten Kuningan",
    value: "Kabupaten Kuningan",
  },
  {
    label: "Kabupaten Indramayu",
    value: "Kabupaten Indramayu",
  },
  {
    label: "Kabupaten Majalengka",
    value: "Kabupaten Majalengka",
  },
  {
    label: "Kabupaten Subang",
    value: "Kabupaten Subang",
  },
  {
    label: "Kabupaten Bandung Barat",
    value: "Kabupaten Bandung Barat",
  },
  {
    label: "Kabupaten Pangandaran",
    value: "Kabupaten Pangandaran",
  },
  {
    label: "Kabupaten Lebak",
    value: "Kabupaten Lebak",
  },
  {
    label: "Kabupaten Pandeglang",
    value: "Kabupaten Pandeglang",
  },
  {
    label: "Kabupaten Serang",
    value: "Kabupaten Serang",
  },
  {
    label: "Kabupaten Tangerang",
    value: "Kabupaten Tangerang",
  },
  {
    label: "Kabupaten Administrasi Kepulauan Seribu",
    value: "Kabupaten Administrasi Kepulauan Seribu",
  },
  {
    label: "Kabupaten Bantul",
    value: "Kabupaten Bantul",
  },
  {
    label: "Kabupaten Sleman",
    value: "Kabupaten Sleman",
  },
  {
    label: "Kabupaten Gunung Kidul",
    value: "Kabupaten Gunung Kidul",
  },
  {
    label: "Kabupaten Kulon Progo",
    value: "Kabupaten Kulon Progo",
  },
  {
    label: "Kabupaten Semarang",
    value: "Kabupaten Semarang",
  },
  {
    label: "Kabupaten Kendal",
    value: "Kabupaten Kendal",
  },
  {
    label: "Kabupaten Demak",
    value: "Kabupaten Demak",
  },
  {
    label: "Kabupaten Grobogan",
    value: "Kabupaten Grobogan",
  },
  {
    label: "Kabupaten Pekalongan",
    value: "Kabupaten Pekalongan",
  },
  {
    label: "Kabupaten Tegal",
    value: "Kabupaten Tegal",
  },
  {
    label: "Kabupaten Brebes",
    value: "Kabupaten Brebes",
  },
  {
    label: "Kabupaten Pati",
    value: "Kabupaten Pati",
  },
  {
    label: "Kabupaten Kudus",
    value: "Kabupaten Kudus",
  },
  {
    label: "Kabupaten Pemalang",
    value: "Kabupaten Pemalang",
  },
  {
    label: "Kabupaten Jepara",
    value: "Kabupaten Jepara",
  },
  {
    label: "Kabupaten Rembang",
    value: "Kabupaten Rembang",
  },
  {
    label: "Kabupaten Blora",
    value: "Kabupaten Blora",
  },
  {
    label: "Kabupaten Banyumas",
    value: "Kabupaten Banyumas",
  },
  {
    label: "Kabupaten Cilacap",
    value: "Kabupaten Cilacap",
  },
  {
    label: "Kabupaten Purbalingga",
    value: "Kabupaten Purbalingga",
  },
  {
    label: "Kabupaten Banjarnegara",
    value: "Kabupaten Banjarnegara",
  },
  {
    label: "Kabupaten Magelang",
    value: "Kabupaten Magelang",
  },
  {
    label: "Kabupaten Temanggung",
    value: "Kabupaten Temanggung",
  },
  {
    label: "Kabupaten Wonosobo",
    value: "Kabupaten Wonosobo",
  },
  {
    label: "Kabupaten Purworejo",
    value: "Kabupaten Purworejo",
  },
  {
    label: "Kabupaten Kebumen",
    value: "Kabupaten Kebumen",
  },
  {
    label: "Kabupaten Klaten",
    value: "Kabupaten Klaten",
  },
  {
    label: "Kabupaten Boyolali",
    value: "Kabupaten Boyolali",
  },
  {
    label: "Kabupaten Sragen",
    value: "Kabupaten Sragen",
  },
  {
    label: "Kabupaten Sukoharjo",
    value: "Kabupaten Sukoharjo",
  },
  {
    label: "Kabupaten Karanganyar",
    value: "Kabupaten Karanganyar",
  },
  {
    label: "Kabupaten Wonogiri",
    value: "Kabupaten Wonogiri",
  },
  {
    label: "Kabupaten Batang",
    value: "Kabupaten Batang",
  },
  {
    label: "Kabupaten Gresik",
    value: "Kabupaten Gresik",
  },
  {
    label: "Kabupaten Sidoarjo",
    value: "Kabupaten Sidoarjo",
  },
  {
    label: "Kabupaten Mojokerto",
    value: "Kabupaten Mojokerto",
  },
  {
    label: "Kabupaten Jombang",
    value: "Kabupaten Jombang",
  },
  {
    label: "Kabupaten Sampang",
    value: "Kabupaten Sampang",
  },
  {
    label: "Kabupaten Pamekasan",
    value: "Kabupaten Pamekasan",
  },
  {
    label: "Kabupaten Sumenep",
    value: "Kabupaten Sumenep",
  },
  {
    label: "Kabupaten Bangkalan",
    value: "Kabupaten Bangkalan",
  },
  {
    label: "Kabupaten Bondowoso",
    value: "Kabupaten Bondowoso",
  },
  {
    label: "Kabupaten Banyuwangi",
    value: "Kabupaten Banyuwangi",
  },
  {
    label: "Kabupaten Jember",
    value: "Kabupaten Jember",
  },
  {
    label: "Kabupaten Malang",
    value: "Kabupaten Malang",
  },
  {
    label: "Kabupaten Pasuruan",
    value: "Kabupaten Pasuruan",
  },
  {
    label: "Kabupaten Probolinggo",
    value: "Kabupaten Probolinggo",
  },
  {
    label: "Kabupaten Lumajang",
    value: "Kabupaten Lumajang",
  },
  {
    label: "Kabupaten Kediri",
    value: "Kabupaten Kediri",
  },
  {
    label: "Kabupaten Nganjuk",
    value: "Kabupaten Nganjuk",
  },
  {
    label: "Kabupaten Tulungagung",
    value: "Kabupaten Tulungagung",
  },
  {
    label: "Kabupaten Trenggalek",
    value: "Kabupaten Trenggalek",
  },
  {
    label: "Kabupaten Blitar",
    value: "Kabupaten Blitar",
  },
  {
    label: "Kabupaten Madiun",
    value: "Kabupaten Madiun",
  },
  {
    label: "Kabupaten Ngawi",
    value: "Kabupaten Ngawi",
  },
  {
    label: "Kabupaten Magetan",
    value: "Kabupaten Magetan",
  },
  {
    label: "Kabupaten Ponorogo",
    value: "Kabupaten Ponorogo",
  },
  {
    label: "Kabupaten Pacitan",
    value: "Kabupaten Pacitan",
  },
  {
    label: "Kabupaten Bojonegoro",
    value: "Kabupaten Bojonegoro",
  },
  {
    label: "Kabupaten Tuban",
    value: "Kabupaten Tuban",
  },
  {
    label: "Kabupaten Lamongan",
    value: "Kabupaten Lamongan",
  },
  {
    label: "Kabupaten Situbondo",
    value: "Kabupaten Situbondo",
  },
  {
    label: "Kabupaten Bengkulu Selatan",
    value: "Kabupaten Bengkulu Selatan",
  },
  {
    label: "Kabupaten Bengkulu Utara",
    value: "Kabupaten Bengkulu Utara",
  },
  {
    label: "Kabupaten Rejang Lebong",
    value: "Kabupaten Rejang Lebong",
  },
  {
    label: "Kabupaten Lebong",
    value: "Kabupaten Lebong",
  },
  {
    label: "Kabupaten Kepahiang",
    value: "Kabupaten Kepahiang",
  },
  {
    label: "Kabupaten Muko-Muko",
    value: "Kabupaten Muko-Muko",
  },
  {
    label: "Kabupaten Seluma",
    value: "Kabupaten Seluma",
  },
  {
    label: "Kabupaten Kaur",
    value: "Kabupaten Kaur",
  },
  {
    label: "Kabupaten Bengkulu Tengah",
    value: "Kabupaten Bengkulu Tengah",
  },
  {
    label: "Kabupaten Batang Hari",
    value: "Kabupaten Batang Hari",
  },
  {
    label: "Kabupaten Sorolangun",
    value: "Kabupaten Sorolangun",
  },
  {
    label: "Kabupaten Kerinci",
    value: "Kabupaten Kerinci",
  },
  {
    label: "Kabupaten Muaro Jambi",
    value: "Kabupaten Muaro Jambi",
  },
  {
    label: "Kabupaten Tanjung Jabung Barat",
    value: "Kabupaten Tanjung Jabung Barat",
  },
  {
    label: "Kabupaten Tanjung Jabung Timur",
    value: "Kabupaten Tanjung Jabung Timur",
  },
  {
    label: "Kabupaten Tebo",
    value: "Kabupaten Tebo",
  },
  {
    label: "Kabupaten Merangin",
    value: "Kabupaten Merangin",
  },
  {
    label: "Kabupaten Bungo",
    value: "Kabupaten Bungo",
  },
  {
    label: "Kabupaten Aceh Besar",
    value: "Kabupaten Aceh Besar",
  },
  {
    label: "Kabupaten Pidie",
    value: "Kabupaten Pidie",
  },
  {
    label: "Kabupaten Aceh Utara",
    value: "Kabupaten Aceh Utara",
  },
  {
    label: "Kabupaten Aceh Timur",
    value: "Kabupaten Aceh Timur",
  },
  {
    label: "Kabupaten Aceh Selatan",
    value: "Kabupaten Aceh Selatan",
  },
  {
    label: "Kabupaten Aceh Barat",
    value: "Kabupaten Aceh Barat",
  },
  {
    label: "Kabupaten Aceh Tengah",
    value: "Kabupaten Aceh Tengah",
  },
  {
    label: "Kabupaten Aceh Tenggara",
    value: "Kabupaten Aceh Tenggara",
  },
  {
    label: "Kabupaten Aceh Singkil",
    value: "Kabupaten Aceh Singkil",
  },
  {
    label: "Kabupaten Aceh Tamiang",
    value: "Kabupaten Aceh Tamiang",
  },
  {
    label: "Kabupaten Gayo Lues",
    value: "Kabupaten Gayo Lues",
  },
  {
    label: "Kabupaten Aceh Barat Daya",
    value: "Kabupaten Aceh Barat Daya",
  },
  {
    label: "Kabupaten Aceh Jaya",
    value: "Kabupaten Aceh Jaya",
  },
  {
    label: "Kabupaten Nagan Raya",
    value: "Kabupaten Nagan Raya",
  },
  {
    label: "Kabupaten Simeulue",
    value: "Kabupaten Simeulue",
  },
  {
    label: "Kabupaten Bener Meriah",
    value: "Kabupaten Bener Meriah",
  },
  {
    label: "Kabupaten Pidie Jaya",
    value: "Kabupaten Pidie Jaya",
  },
  {
    label: "Kabupaten Bireuen",
    value: "Kabupaten Bireuen",
  },
  {
    label: "Kabupaten Deli Serdang",
    value: "Kabupaten Deli Serdang",
  },
  {
    label: "Kabupaten Langkat",
    value: "Kabupaten Langkat",
  },
  {
    label: "Kabupaten Karo",
    value: "Kabupaten Karo",
  },
  {
    label: "Kabupaten Simalungun",
    value: "Kabupaten Simalungun",
  },
  {
    label: "Kabupaten Labuhan Batu",
    value: "Kabupaten Labuhan Batu",
  },
  {
    label: "Kabupaten Asahan",
    value: "Kabupaten Asahan",
  },
  {
    label: "Kabupaten Dairi",
    value: "Kabupaten Dairi",
  },
  {
    label: "Kabupaten Tapanuli Utara",
    value: "Kabupaten Tapanuli Utara",
  },
  {
    label: "Kabupaten Tapanuli Tengah",
    value: "Kabupaten Tapanuli Tengah",
  },
  {
    label: "Kabupaten Tapanuli Selatan",
    value: "Kabupaten Tapanuli Selatan",
  },
  {
    label: "Kabupaten Nias",
    value: "Kabupaten Nias",
  },
  {
    label: "Kabupaten Toba Samosir",
    value: "Kabupaten Toba Samosir",
  },
  {
    label: "Kabupaten Mandailing Natal",
    value: "Kabupaten Mandailing Natal",
  },
  {
    label: "Kabupaten Nias Selatan",
    value: "Kabupaten Nias Selatan",
  },
  {
    label: "Kabupaten Humbang Hasundutan",
    value: "Kabupaten Humbang Hasundutan",
  },
  {
    label: "Kabupaten Pakpak Bharat",
    value: "Kabupaten Pakpak Bharat",
  },
  {
    label: "Kabupaten Samosir",
    value: "Kabupaten Samosir",
  },
  {
    label: "Kabupaten Serdang Badagai",
    value: "Kabupaten Serdang Badagai",
  },
  {
    label: "Kabupaten Batubara",
    value: "Kabupaten Batubara",
  },
  {
    label: "Kabupaten Padang Lawas",
    value: "Kabupaten Padang Lawas",
  },
  {
    label: "Kabupaten Padang Lawas Utara",
    value: "Kabupaten Padang Lawas Utara",
  },
  {
    label: "Kabupaten Labuhanbatu Selatan",
    value: "Kabupaten Labuhanbatu Selatan",
  },
  {
    label: "Kabupaten Labuhanbatu Utara",
    value: "Kabupaten Labuhanbatu Utara",
  },
  {
    label: "Kabupaten Nias Barat",
    value: "Kabupaten Nias Barat",
  },
  {
    label: "Kabupaten Nias Utara",
    value: "Kabupaten Nias Utara",
  },
  {
    label: "Kabupaten Agam",
    value: "Kabupaten Agam",
  },
  {
    label: "Kabupaten Pasaman",
    value: "Kabupaten Pasaman",
  },
  {
    label: "Kabupaten Lima puluh Kota",
    value: "Kabupaten Lima puluh Kota",
  },
  {
    label: "Kabupaten Solok Selatan",
    value: "Kabupaten Solok Selatan",
  },
  {
    label: "Kabupaten Padang Pariaman",
    value: "Kabupaten Padang Pariaman",
  },
  {
    label: "Kabupaten Pesisir Selatan",
    value: "Kabupaten Pesisir Selatan",
  },
  {
    label: "Kabupaten Tanah Datar",
    value: "Kabupaten Tanah Datar",
  },
  {
    label: "Kabupaten Sijunjung",
    value: "Kabupaten Sijunjung",
  },
  {
    label: "Kabupaten Kepulauan Mentawai",
    value: "Kabupaten Kepulauan Mentawai",
  },
  {
    label: "Kabupaten Pasaman Barat",
    value: "Kabupaten Pasaman Barat",
  },
  {
    label: "Kabupaten Dharmasraya",
    value: "Kabupaten Dharmasraya",
  },
  {
    label: "Kabupaten Solok",
    value: "Kabupaten Solok",
  },
  {
    label: "Kabupaten Kampar",
    value: "Kabupaten Kampar",
  },
  {
    label: "Kabupaten Bengkalis",
    value: "Kabupaten Bengkalis",
  },
  {
    label: "Kabupaten Indragiri Hulu",
    value: "Kabupaten Indragiri Hulu",
  },
  {
    label: "Kabupaten Indragiri Hilir",
    value: "Kabupaten Indragiri Hilir",
  },
  {
    label: "Kabupaten Rokan Hulu",
    value: "Kabupaten Rokan Hulu",
  },
  {
    label: "Kabupaten Rokan Hilir",
    value: "Kabupaten Rokan Hilir",
  },
  {
    label: "Kabupaten Pelalawan",
    value: "Kabupaten Pelalawan",
  },
  {
    label: "Kabupaten Siak",
    value: "Kabupaten Siak",
  },
  {
    label: "Kabupaten Kuantan Sengingi",
    value: "Kabupaten Kuantan Sengingi",
  },
  {
    label: "Kabupaten Kepulauan Meranti",
    value: "Kabupaten Kepulauan Meranti",
  },
  {
    label: "Kabupaten Musi Banyuasin",
    value: "Kabupaten Musi Banyuasin",
  },
  {
    label: "Kabupaten Ogan Komering Ulu",
    value: "Kabupaten Ogan Komering Ulu",
  },
  {
    label: "Kabupaten Muara Enim",
    value: "Kabupaten Muara Enim",
  },
  {
    label: "Kabupaten Lahat",
    value: "Kabupaten Lahat",
  },
  {
    label: "Kabupaten Musi Rawas",
    value: "Kabupaten Musi Rawas",
  },
  {
    label: "Kabupaten Ogan Komering Ilir",
    value: "Kabupaten Ogan Komering Ilir",
  },
  {
    label: "Kabupaten Banyuasin",
    value: "Kabupaten Banyuasin",
  },
  {
    label: "Kabupaten Ogan Komering Ulu Selatan",
    value: "Kabupaten Ogan Komering Ulu Selatan",
  },
  {
    label: "Kabupaten Ogan Komering Ulu Timur",
    value: "Kabupaten Ogan Komering Ulu Timur",
  },
  {
    label: "Kabupaten Ogan Ilir",
    value: "Kabupaten Ogan Ilir",
  },
  {
    label: "Kabupaten Empat Lawang",
    value: "Kabupaten Empat Lawang",
  },
  {
    label: "Kabupaten Penukal Abab Lematang Ilir",
    value: "Kabupaten Penukal Abab Lematang Ilir",
  },
  {
    label: "Kabupaten Bangka",
    value: "Kabupaten Bangka",
  },
  {
    label: "Kabupaten Belitung",
    value: "Kabupaten Belitung",
  },
  {
    label: "Kabupaten Bangka Barat",
    value: "Kabupaten Bangka Barat",
  },
  {
    label: "Kabupaten Bangka Selatan",
    value: "Kabupaten Bangka Selatan",
  },
  {
    label: "Kabupaten Bangka Tengah",
    value: "Kabupaten Bangka Tengah",
  },
  {
    label: "Kabupaten Belitung Timur",
    value: "Kabupaten Belitung Timur",
  },
  {
    label: "Kabupaten Karimun",
    value: "Kabupaten Karimun",
  },
  {
    label: "Kabupaten Lingga",
    value: "Kabupaten Lingga",
  },
  {
    label: "Kabupaten Natuna",
    value: "Kabupaten Natuna",
  },
  {
    label: "Kabupaten Bintan",
    value: "Kabupaten Bintan",
  },
  {
    label: "Kabupaten Kepulauan Anambas",
    value: "Kabupaten Kepulauan Anambas",
  },
  {
    label: "Kabupaten Lampung Selatan",
    value: "Kabupaten Lampung Selatan",
  },
  {
    label: "Kabupaten Lampung Tengah",
    value: "Kabupaten Lampung Tengah",
  },
  {
    label: "Kabupaten Lampung Utara",
    value: "Kabupaten Lampung Utara",
  },
  {
    label: "Kabupaten Lampung Barat",
    value: "Kabupaten Lampung Barat",
  },
  {
    label: "Kabupaten Tulang Bawang",
    value: "Kabupaten Tulang Bawang",
  },
  {
    label: "Kabupaten Tenggamus",
    value: "Kabupaten Tenggamus",
  },
  {
    label: "Kabupaten Lampung Timur",
    value: "Kabupaten Lampung Timur",
  },
  {
    label: "Kabupaten Way Kanan",
    value: "Kabupaten Way Kanan",
  },
  {
    label: "Kabupaten Pesawaran",
    value: "Kabupaten Pesawaran",
  },
  {
    label: "Kabupaten Pringsewu",
    value: "Kabupaten Pringsewu",
  },
  {
    label: "Kabupaten Tulang Bawang Barat",
    value: "Kabupaten Tulang Bawang Barat",
  },
  {
    label: "Kabupaten Mesuji",
    value: "Kabupaten Mesuji",
  },
  {
    label: "Kabupaten Pesisir Barat",
    value: "Kabupaten Pesisir Barat",
  },
  {
    label: "Kabupaten Banjar",
    value: "Kabupaten Banjar",
  },
  {
    label: "Kabupaten Tanah Laut",
    value: "Kabupaten Tanah Laut",
  },
  {
    label: "Kabupaten Tapin",
    value: "Kabupaten Tapin",
  },
  {
    label: "Kabupaten Hulu Sungai Selatan",
    value: "Kabupaten Hulu Sungai Selatan",
  },
  {
    label: "Kabupaten Hulu Sungai Tengah",
    value: "Kabupaten Hulu Sungai Tengah",
  },
  {
    label: "Kabupaten Hulu Sungai Utara",
    value: "Kabupaten Hulu Sungai Utara",
  },
  {
    label: "Kabupaten Barito Kuala",
    value: "Kabupaten Barito Kuala",
  },
  {
    label: "Kabupaten Kotabaru",
    value: "Kabupaten Kotabaru",
  },
  {
    label: "Kabupaten Tabalong",
    value: "Kabupaten Tabalong",
  },
  {
    label: "Kabupaten Tanah Bumbu",
    value: "Kabupaten Tanah Bumbu",
  },
  {
    label: "Kabupaten Balangan",
    value: "Kabupaten Balangan",
  },
  {
    label: "Kabupaten Pontianak",
    value: "Kabupaten Pontianak",
  },
  {
    label: "Kabupaten Sambas",
    value: "Kabupaten Sambas",
  },
  {
    label: "Kabupaten Ketapang",
    value: "Kabupaten Ketapang",
  },
  {
    label: "Kabupaten Sangau",
    value: "Kabupaten Sangau",
  },
  {
    label: "Kabupaten Sintang",
    value: "Kabupaten Sintang",
  },
  {
    label: "Kabupaten Kapuas Hulu",
    value: "Kabupaten Kapuas Hulu",
  },
  {
    label: "Kabupaten Bengkayang",
    value: "Kabupaten Bengkayang",
  },
  {
    label: "Kabupaten Landak",
    value: "Kabupaten Landak",
  },
  {
    label: "Kabupaten Sekadau",
    value: "Kabupaten Sekadau",
  },
  {
    label: "Kabupaten Melawi",
    value: "Kabupaten Melawi",
  },
  {
    label: "Kabupaten Kayong Utara",
    value: "Kabupaten Kayong Utara",
  },
  {
    label: "Kabupaten Kubu Raya",
    value: "Kabupaten Kubu Raya",
  },
  {
    label: "Kabupaten Kutai Kartanegara",
    value: "Kabupaten Kutai Kartanegara",
  },
  {
    label: "Kabupaten Berau",
    value: "Kabupaten Berau",
  },
  {
    label: "Kabupaten Paser",
    value: "Kabupaten Paser",
  },
  {
    label: "Kabupaten Kutai Barat",
    value: "Kabupaten Kutai Barat",
  },
  {
    label: "Kabupaten Kutai Timur",
    value: "Kabupaten Kutai Timur",
  },
  {
    label: "Kabupaten Penajam Paser Utama",
    value: "Kabupaten Penajam Paser Utama",
  },
  {
    label: "Kabupaten Mahakam Ulu",
    value: "Kabupaten Mahakam Ulu",
  },
  {
    label: "Kabupaten Kapuas",
    value: "Kabupaten Kapuas",
  },
  {
    label: "Kabupaten Kotawaringin Barat",
    value: "Kabupaten Kotawaringin Barat",
  },
  {
    label: "Kabupaten Kotawaringin Timur",
    value: "Kabupaten Kotawaringin Timur",
  },
  {
    label: "Kabupaten Barito Selatan",
    value: "Kabupaten Barito Selatan",
  },
  {
    label: "Kabupaten Barito Utara",
    value: "Kabupaten Barito Utara",
  },
  {
    label: "Kabupaten Murung Raya",
    value: "Kabupaten Murung Raya",
  },
  {
    label: "Kabupaten Barito Timur",
    value: "Kabupaten Barito Timur",
  },
  {
    label: "Kabupaten Gunung Mas",
    value: "Kabupaten Gunung Mas",
  },
  {
    label: "Kabupaten Pulang Pisau",
    value: "Kabupaten Pulang Pisau",
  },
  {
    label: "Kabupaten Seruyan",
    value: "Kabupaten Seruyan",
  },
  {
    label: "Kabupaten Katingan",
    value: "Kabupaten Katingan",
  },
  {
    label: "Kabupaten Sukamara",
    value: "Kabupaten Sukamara",
  },
  {
    label: "Kabupaten Lamandau",
    value: "Kabupaten Lamandau",
  },
  {
    label: "Kabupaten Donggala",
    value: "Kabupaten Donggala",
  },
  {
    label: "Kabupaten Poso",
    value: "Kabupaten Poso",
  },
  {
    label: "Kabupaten Banggai",
    value: "Kabupaten Banggai",
  },
  {
    label: "Kabupaten Toli-Toli",
    value: "Kabupaten Toli-Toli",
  },
  {
    label: "Kabupaten Banggai Kepulauan",
    value: "Kabupaten Banggai Kepulauan",
  },
  {
    label: "Kabupaten Morowali",
    value: "Kabupaten Morowali",
  },
  {
    label: "Kabupaten Buol",
    value: "Kabupaten Buol",
  },
  {
    label: "Kabupaten Tojo Una-Una",
    value: "Kabupaten Tojo Una-Una",
  },
  {
    label: "Kabupaten Parigi Moutong",
    value: "Kabupaten Parigi Moutong",
  },
  {
    label: "Kabupaten Sigi",
    value: "Kabupaten Sigi",
  },
  {
    label: "Kabupaten Banggai Laut",
    value: "Kabupaten Banggai Laut",
  },
  {
    label: "Morowali Utara",
    value: "Morowali Utara",
  },
  {
    label: "Kabupaten Pinrang",
    value: "Kabupaten Pinrang",
  },
  {
    label: "Kabupaten Gowa",
    value: "Kabupaten Gowa",
  },
  {
    label: "Kabupaten Wajo",
    value: "Kabupaten Wajo",
  },
  {
    label: "Kabupaten Bone",
    value: "Kabupaten Bone",
  },
  {
    label: "Kabupaten Tana Torajah",
    value: "Kabupaten Tana Torajah",
  },
  {
    label: "Kabupaten Maros",
    value: "Kabupaten Maros",
  },
  {
    label: "Kabupaten Luwu",
    value: "Kabupaten Luwu",
  },
  {
    label: "Kabupaten Sinjai",
    value: "Kabupaten Sinjai",
  },
  {
    label: "Kabupaten Bulukumba",
    value: "Kabupaten Bulukumba",
  },
  {
    label: "Kabupaten Bantaeng",
    value: "Kabupaten Bantaeng",
  },
  {
    label: "Kabupaten Jeneponto",
    value: "Kabupaten Jeneponto",
  },
  {
    label: "Kabupaten Selayar",
    value: "Kabupaten Selayar",
  },
  {
    label: "Kabupaten Takalar",
    value: "Kabupaten Takalar",
  },
  {
    label: "Kabupaten Barru",
    value: "Kabupaten Barru",
  },
  {
    label: "Kabupaten Sidenreng Rapang",
    value: "Kabupaten Sidenreng Rapang",
  },
  {
    label: "Kabupaten Pangkajene Kepulauan",
    value: "Kabupaten Pangkajene Kepulauan",
  },
  {
    label: "Kabupaten Soppeng",
    value: "Kabupaten Soppeng",
  },
  {
    label: "Kabupaten Enrekang",
    value: "Kabupaten Enrekang",
  },
  {
    label: "Kabupaten Luwu Timur",
    value: "Kabupaten Luwu Timur",
  },
  {
    label: "Kabupaten Luwu Utara",
    value: "Kabupaten Luwu Utara",
  },
  {
    label: "Kabupaten Toraja Utara",
    value: "Kabupaten Toraja Utara",
  },
  {
    label: "Kabupaten Minahasa",
    value: "Kabupaten Minahasa",
  },
  {
    label: "Kabupaten Bolaang Mongondow",
    value: "Kabupaten Bolaang Mongondow",
  },
  {
    label: "Kabupaten Kepulauan Sangihe",
    value: "Kabupaten Kepulauan Sangihe",
  },
  {
    label: "Kabupaten Kepulauan Talaud",
    value: "Kabupaten Kepulauan Talaud",
  },
  {
    label: "Kabupaten Minahasa Selatan",
    value: "Kabupaten Minahasa Selatan",
  },
  {
    label: "Kabupaten Minahasa Utara",
    value: "Kabupaten Minahasa Utara",
  },
  {
    label: "Kabupaten Minahasa Tenggara",
    value: "Kabupaten Minahasa Tenggara",
  },
  {
    label: "Kabupaten Bolaang Mongondow Utara",
    value: "Kabupaten Bolaang Mongondow Utara",
  },
  {
    label: "Kabupaten Kepulauan Siau Tagulandang Biaro",
    value: "Kabupaten Kepulauan Siau Tagulandang Biaro",
  },
  {
    label: "Kabupaten Bolaang Mongondow Selatan",
    value: "Kabupaten Bolaang Mongondow Selatan",
  },
  {
    label: "Kabupaten Bolaang Mongondow Timur",
    value: "Kabupaten Bolaang Mongondow Timur",
  },
  {
    label: "Kabupaten Gorontalo",
    value: "Kabupaten Gorontalo",
  },
  {
    label: "Kabupaten Boalemo",
    value: "Kabupaten Boalemo",
  },
  {
    label: "Kabupaten Bone Bolango",
    value: "Kabupaten Bone Bolango",
  },
  {
    label: "Kabupaten Pohuwato",
    value: "Kabupaten Pohuwato",
  },
  {
    label: "Kabupaten Gorontalo Utara",
    value: "Kabupaten Gorontalo Utara",
  },
  {
    label: "Kabupaten Polewari Mandar",
    value: "Kabupaten Polewari Mandar",
  },
  {
    label: "Kabupaten Majene",
    value: "Kabupaten Majene",
  },
  {
    label: "Kabupaten Mamasa",
    value: "Kabupaten Mamasa",
  },
  {
    label: "Kabupaten Mamuju Utara",
    value: "Kabupaten Mamuju Utara",
  },
  {
    label: "Kabupaten Mamuju",
    value: "Kabupaten Mamuju",
  },
  {
    label: "Kabupaten Mamuju Tengah",
    value: "Kabupaten Mamuju Tengah",
  },
  {
    label: "Kabupaten Buton",
    value: "Kabupaten Buton",
  },
  {
    label: "Kabupaten Muna",
    value: "Kabupaten Muna",
  },
  {
    label: "Kabupaten Kolaka",
    value: "Kabupaten Kolaka",
  },
  {
    label: "Kabupaten Wakatobi",
    value: "Kabupaten Wakatobi",
  },
  {
    label: "Kabupaten Konawe",
    value: "Kabupaten Konawe",
  },
  {
    label: "Kabupaten Konawe Selatan",
    value: "Kabupaten Konawe Selatan",
  },
  {
    label: "Kabupaten Bombana",
    value: "Kabupaten Bombana",
  },
  {
    label: "Kabupaten Kolaka Utara",
    value: "Kabupaten Kolaka Utara",
  },
  {
    label: "Kabupaten Buton Utara",
    value: "Kabupaten Buton Utara",
  },
  {
    label: "Kabupaten Konawe Utara",
    value: "Kabupaten Konawe Utara",
  },
  {
    label: "Kabupaten Kolaka Timur",
    value: "Kabupaten Kolaka Timur",
  },
  {
    label: "Kabupaten Lombok Barat",
    value: "Kabupaten Lombok Barat",
  },
  {
    label: "Kabupaten Lombok Tengah",
    value: "Kabupaten Lombok Tengah",
  },
  {
    label: "Kabupaten Lombok Timur",
    value: "Kabupaten Lombok Timur",
  },
  {
    label: "Kabupaten Sumbawa",
    value: "Kabupaten Sumbawa",
  },
  {
    label: "Kabupaten Bima",
    value: "Kabupaten Bima",
  },
  {
    label: "Kabupaten Dompu",
    value: "Kabupaten Dompu",
  },
  {
    label: "Kabupaten Sumbawa Barat",
    value: "Kabupaten Sumbawa Barat",
  },
  {
    label: "Kabupaten Lombok Utara",
    value: "Kabupaten Lombok Utara",
  },
  {
    label: "Kabupaten Buleleng",
    value: "Kabupaten Buleleng",
  },
  {
    label: "Kabupaten Jembrana",
    value: "Kabupaten Jembrana",
  },
  {
    label: "Kabupaten Tabanan",
    value: "Kabupaten Tabanan",
  },
  {
    label: "Kabupaten Badung",
    value: "Kabupaten Badung",
  },
  {
    label: "Kabupaten Gianyar",
    value: "Kabupaten Gianyar",
  },
  {
    label: "Kabupaten Klungkung",
    value: "Kabupaten Klungkung",
  },
  {
    label: "Kabupaten Bangli",
    value: "Kabupaten Bangli",
  },
  {
    label: "Kabupaten Karangasem",
    value: "Kabupaten Karangasem",
  },
  {
    label: "Kabupaten Kupang",
    value: "Kabupaten Kupang",
  },
  {
    label: "Kabupaten Timor Tengah Selatan",
    value: "Kabupaten Timor Tengah Selatan",
  },
  {
    label: "Kabupaten Timor Tengah Utara",
    value: "Kabupaten Timor Tengah Utara",
  },
  {
    label: "Kabupaten Belu",
    value: "Kabupaten Belu",
  },
  {
    label: "Kabupaten Alor",
    value: "Kabupaten Alor",
  },
  {
    label: "Kabupaten Flores Timur",
    value: "Kabupaten Flores Timur",
  },
  {
    label: "Kabupaten Sikka",
    value: "Kabupaten Sikka",
  },
  {
    label: "Kabupaten Ende",
    value: "Kabupaten Ende",
  },
  {
    label: "Kabupaten Ngada",
    value: "Kabupaten Ngada",
  },
  {
    label: "Kabupaten Mangarai",
    value: "Kabupaten Mangarai",
  },
  {
    label: "Kabupaten Sumba Timur",
    value: "Kabupaten Sumba Timur",
  },
  {
    label: "Kabupaten Sumba Barat",
    value: "Kabupaten Sumba Barat",
  },
  {
    label: "Kabupaten Lembata",
    value: "Kabupaten Lembata",
  },
  {
    label: "Kabupaten Rote Ndao",
    value: "Kabupaten Rote Ndao",
  },
  {
    label: "Kabupaten Manggarai Barat",
    value: "Kabupaten Manggarai Barat",
  },
  {
    label: "Kabupaten Sumba Tengah",
    value: "Kabupaten Sumba Tengah",
  },
  {
    label: "Kabupaten Sumba Barat Daya",
    value: "Kabupaten Sumba Barat Daya",
  },
  {
    label: "Kabupaten Manggarai Timur",
    value: "Kabupaten Manggarai Timur",
  },
  {
    label: "Kabupaten Nagekeo",
    value: "Kabupaten Nagekeo",
  },
  {
    label: "Kabupaten Sabu Raijua",
    value: "Kabupaten Sabu Raijua",
  },
  {
    label: "Kabupaten Malaka",
    value: "Kabupaten Malaka",
  },
  {
    label: "Kabupaten Timur Tengah Utara",
    value: "Kabupaten Timur Tengah Utara",
  },
  {
    label: "Kabupaten Maluku Tengah",
    value: "Kabupaten Maluku Tengah",
  },
  {
    label: "Kabupaten Maluku Tenggara",
    value: "Kabupaten Maluku Tenggara",
  },
  {
    label: "Kabupaten Maluku Tenggara Barat",
    value: "Kabupaten Maluku Tenggara Barat",
  },
  {
    label: "Kabupaten Buru",
    value: "Kabupaten Buru",
  },
  {
    label: "Kabupaten Seram Bagian Barat",
    value: "Kabupaten Seram Bagian Barat",
  },
  {
    label: "Kabupaten Seram Bagian Timur",
    value: "Kabupaten Seram Bagian Timur",
  },
  {
    label: "Kabupaten Kepulauan Aru",
    value: "Kabupaten Kepulauan Aru",
  },
  {
    label: "Kabupaten Maluku Barat Daya",
    value: "Kabupaten Maluku Barat Daya",
  },
  {
    label: "Kabupaten Buru Selatan",
    value: "Kabupaten Buru Selatan",
  },
  {
    label: "Kabupaten Jayapura",
    value: "Kabupaten Jayapura",
  },
  {
    label: "Kabupaten Biak Numfor",
    value: "Kabupaten Biak Numfor",
  },
  {
    label: "Kabupaten Yapen Waropen",
    value: "Kabupaten Yapen Waropen",
  },
  {
    label: "Kabupaten Merauke",
    value: "Kabupaten Merauke",
  },
  {
    label: "Kabupaten Paniai",
    value: "Kabupaten Paniai",
  },
  {
    label: "Kabupaten Jayawijaya",
    value: "Kabupaten Jayawijaya",
  },
  {
    label: "Kabupaten Nabire",
    value: "Kabupaten Nabire",
  },
  {
    label: "Kabupaten Mimika",
    value: "Kabupaten Mimika",
  },
  {
    label: "Kabupaten Puncak Jaya",
    value: "Kabupaten Puncak Jaya",
  },
  {
    label: "Kabupaten Sarmi",
    value: "Kabupaten Sarmi",
  },
  {
    label: "Kabupaten Keerom",
    value: "Kabupaten Keerom",
  },
  {
    label: "Kabupaten Pegunungan Bintang",
    value: "Kabupaten Pegunungan Bintang",
  },
  {
    label: "Kabupaten Yahukimo",
    value: "Kabupaten Yahukimo",
  },
  {
    label: "Kabupaten Tolikara",
    value: "Kabupaten Tolikara",
  },
  {
    label: "Kabupaten Waropen",
    value: "Kabupaten Waropen",
  },
  {
    label: "Kabupaten Boven Digoel",
    value: "Kabupaten Boven Digoel",
  },
  {
    label: "Kabupaten Mappi",
    value: "Kabupaten Mappi",
  },
  {
    label: "Kabupaten Asmat",
    value: "Kabupaten Asmat",
  },
  {
    label: "Kabupaten Supiori",
    value: "Kabupaten Supiori",
  },
  {
    label: "Kabupaten Mamberamo Raya",
    value: "Kabupaten Mamberamo Raya",
  },
  {
    label: "Kabupaten Dogiyai",
    value: "Kabupaten Dogiyai",
  },
  {
    label: "Kabupaten Lanny Jaya",
    value: "Kabupaten Lanny Jaya",
  },
  {
    label: "Kabupaten Mamberamo Tengah",
    value: "Kabupaten Mamberamo Tengah",
  },
  {
    label: "Kabupaten Nduga",
    value: "Kabupaten Nduga",
  },
  {
    label: "Kabupaten Yalimo",
    value: "Kabupaten Yalimo",
  },
  {
    label: "Kabupaten Puncak",
    value: "Kabupaten Puncak",
  },
  {
    label: "Kabupaten Intan Jaya",
    value: "Kabupaten Intan Jaya",
  },
  {
    label: "Kabupaten Deiyai",
    value: "Kabupaten Deiyai",
  },
  {
    label: "Kabupaten Halmahera Tengah",
    value: "Kabupaten Halmahera Tengah",
  },
  {
    label: "Kabupaten Halmahera Utara",
    value: "Kabupaten Halmahera Utara",
  },
  {
    label: "Kabupaten Halmahera Timur",
    value: "Kabupaten Halmahera Timur",
  },
  {
    label: "Kabupaten Halmahera Barat",
    value: "Kabupaten Halmahera Barat",
  },
  {
    label: "Kabupaten Halmahera Selatan",
    value: "Kabupaten Halmahera Selatan",
  },
  {
    label: "Kabupaten Kepulauan Sula",
    value: "Kabupaten Kepulauan Sula",
  },
  {
    label: "Kabupaten Pulau Morotai",
    value: "Kabupaten Pulau Morotai",
  },
  {
    label: "Kabupaten Taliabu",
    value: "Kabupaten Taliabu",
  },
  {
    label: "Kabupaten Sorong",
    value: "Kabupaten Sorong",
  },
  {
    label: "Kabupaten Fak-Fak",
    value: "Kabupaten Fak-Fak",
  },
  {
    label: "Kabupaten Manokwari",
    value: "Kabupaten Manokwari",
  },
  {
    label: "Kabupaten Sorong Selatan",
    value: "Kabupaten Sorong Selatan",
  },
  {
    label: "Kabupaten Raja Ampat",
    value: "Kabupaten Raja Ampat",
  },
  {
    label: "Kabupaten Kaimana",
    value: "Kabupaten Kaimana",
  },
  {
    label: "Kabupaten Teluk Bentuni",
    value: "Kabupaten Teluk Bentuni",
  },
  {
    label: "Kabupaten Teluk Wondama",
    value: "Kabupaten Teluk Wondama",
  },
  {
    label: "Kabupaten Tambrauw",
    value: "Kabupaten Tambrauw",
  },
  {
    label: "Kabupaten Maybrat",
    value: "Kabupaten Maybrat",
  },
  {
    label: "Kabupaten Manokwari Selatan",
    value: "Kabupaten Manokwari Selatan",
  },
  {
    label: "Pegunungan Arfak",
    value: "Pegunungan Arfak",
  },
  {
    label: "Kabupaten Bulungan",
    value: "Kabupaten Bulungan",
  },
  {
    label: "Kabupaten Nunukan",
    value: "Kabupaten Nunukan",
  },
  {
    label: "Kabupaten Malinau",
    value: "Kabupaten Malinau",
  },
  {
    label: "Kabupaten Tana Tidung",
    value: "Kabupaten Tana Tidung",
  },
];

//   export function getCityLabel(code) {
//       const found = cities.find(row => ro);
//       return found ? found.label : "-"
//   }}

export default cities;
