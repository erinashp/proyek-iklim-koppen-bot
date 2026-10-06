/* =========================================================
   IklimKöppenBot — Rule Based Chatbot
   ========================================================= */

/* ---------- DATA SEMUA KODE IKLIM ---------- */

export const KOPPEN = [
    // ===== A: TROPIS =====
    {
        code: "Af",
        nama: "Hutan Hujan Tropis",
        suhu: "Semua bulan bersuhu ≥ 18°C (umumnya 25-28°C sepanjang tahun).",
        hujan: "Setiap bulan hujan ≥ 60 mm, tidak ada musim kering.",
        contoh: "Pontianak, Singapura, Cekungan Amazon, Cekungan Kongo.",
        vegetasi: "Hutan hujan lebat, pohon tinggi dan berlapis-lapis.",
    },
    {
        code: "Am",
        nama: "Monsun Tropis",
        suhu: "Semua bulan bersuhu ≥ 18°C.",
        hujan: "Ada musim kering singkat (bulan terkering < 60 mm), tetapi hujan total tahunan sangat tinggi sehingga tanah tetap lembap.",
        contoh: "Miami, Kochi (India), pesisir barat Semenanjung India.",
        vegetasi: "Hutan monsun dan hutan hujan tropis.",
    },
    {
        code: "Aw",
        nama: "Savana Tropis",
        suhu: "Semua bulan bersuhu ≥ 18°C.",
        hujan: "Ada musim kemarau yang jelas (bulan terkering < 60 mm) dan hujan total tidak cukup untuk menjaga tanah tetap lembap.",
        contoh: "Surabaya (umumnya diklasifikasikan Aw), Kupang, Darwin, Mumbai.",
        vegetasi: "Padang rumput savana dengan pohon tersebar, hutan gugur musiman.",
    },
    {
        code: "As",
        nama: "Tropis dengan Kemarau Musim Panas",
        suhu: "Semua bulan bersuhu ≥ 18°C.",
        hujan: "Musim kering terjadi saat musim panas. Tipe ini sangat langka.",
        contoh: "Hanya di sebagian kecil wilayah pesisir (misalnya Hawaii).",
        vegetasi: "Hutan tropis kering hingga savana.",
    },

    // ===== B: KERING =====
    {
        code: "BWh",
        nama: "Gurun Panas",
        suhu: "Suhu rata-rata tahunan ≥ 18°C; siang sangat panas, malam bisa dingin.",
        hujan: "Sangat sedikit (umumnya di bawah 250 mm per tahun), penguapan melebihi curah hujan.",
        contoh: "Gurun Sahara, Gurun Arab, Kairo, Riyadh.",
        vegetasi: "Semak jarang, kaktus dan tumbuhan tahan kering (xerofit), oasis.",
    },
    {
        code: "BWk",
        nama: "Gurun Dingin",
        suhu: "Suhu rata-rata tahunan < 18°C; musim dingin bisa sangat dingin.",
        hujan: "Sangat sedikit, tergolong gurun.",
        contoh: "Gurun Gobi, Gurun Taklamakan, sebagian Patagonia.",
        vegetasi: "Semak kerdil dan tumbuhan tahan kering.",
    },
    {
        code: "BSh",
        nama: "Stepa Panas",
        suhu: "Suhu rata-rata tahunan ≥ 18°C.",
        hujan: "Sedikit, tetapi lebih banyak daripada gurun; zona peralihan antara gurun dan wilayah lembap.",
        contoh: "Sahel (Afrika), India barat laut, pedalaman Australia.",
        vegetasi: "Padang rumput pendek dan semak.",
    },
    {
        code: "BSk",
        nama: "Stepa Dingin",
        suhu: "Suhu rata-rata tahunan < 18°C; musim dingin dingin.",
        hujan: "Sedikit, tergolong semi-kering.",
        contoh: "Great Plains (AS), Denver, stepa Asia Tengah, Anatolia tengah.",
        vegetasi: "Padang rumput stepa.",
    },

    // ===== C: SUBTROPIS / SEDANG =====
    {
        code: "Csa",
        nama: "Mediterania Musim Panas Panas",
        suhu: "Bulan terpanas ≥ 22°C.",
        hujan: "Musim panas kering, hujan turun terutama saat musim dingin.",
        contoh: "Athena, Roma, Lisbon, pesisir selatan Spanyol.",
        vegetasi: "Semak berdaun keras, pohon zaitun, anggur.",
    },
    {
        code: "Csb",
        nama: "Mediterania Musim Panas Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim panas kering, hujan terutama saat musim dingin.",
        contoh: "San Francisco, Porto, pesisir Chile tengah.",
        vegetasi: "Hutan dan semak berdaun keras.",
    },
    {
        code: "Csc",
        nama: "Mediterania Musim Panas Sejuk",
        suhu: "Kurang dari 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim panas kering. Tipe ini sangat langka.",
        contoh: "Sebagian kecil dataran tinggi, misalnya di Andes dan pesisir barat Amerika.",
        vegetasi: "Hutan konifer dan semak pegunungan.",
    },
    {
        code: "Cwa",
        nama: "Subtropis Lembap Kemarau Musim Dingin",
        suhu: "Bulan terpanas ≥ 22°C.",
        hujan: "Musim dingin kering, hujan lebat saat musim panas.",
        contoh: "Hong Kong, Guangzhou, Utara India.",
        vegetasi: "Hutan subtropis dan lahan pertanian (padi, teh).",
    },
    {
        code: "Cwb",
        nama: "Dataran Tinggi Subtropis Kemarau Musim Dingin",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim dingin kering, musim panas basah.",
        contoh: "Mexico City, Johannesburg, dataran tinggi Ethiopia.",
        vegetasi: "Hutan pegunungan dan padang rumput dataran tinggi.",
    },
    {
        code: "Cwc",
        nama: "Subtropis Kemarau Musim Dingin Sejuk",
        suhu: "Kurang dari 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim dingin kering. Tipe ini sangat langka.",
        contoh: "Sebagian kecil dataran tinggi Andes (Bolivia).",
        vegetasi: "Padang rumput dan semak dataran tinggi.",
    },
    {
        code: "Cfa",
        nama: "Subtropis Lembap",
        suhu: "Bulan terpanas ≥ 22°C, musim panas panas dan lembap.",
        hujan: "Hujan merata sepanjang tahun, tidak ada musim kering.",
        contoh: "Tokyo, Sydney, Buenos Aires, tenggara Amerika Serikat.",
        vegetasi: "Hutan campuran, hutan daun lebar, lahan pertanian.",
    },
    {
        code: "Cfb",
        nama: "Oseanik",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C; musim panas sejuk, musim dingin tidak terlalu dingin.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "London, Paris, Melbourne, Selandia Baru, Bogotá.",
        vegetasi: "Hutan gugur, padang rumput hijau.",
    },
    {
        code: "Cfc",
        nama: "Oseanik Subpolar",
        suhu: "Kurang dari 4 bulan bersuhu ≥ 10°C; musim panas pendek dan sejuk.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Reykjavik (Islandia), Kepulauan Faroe.",
        vegetasi: "Padang rumput dan semak, hampir tanpa pohon besar.",
    },

    // ===== D: KONTINENTAL / DINGIN =====
    {
        code: "Dsa",
        nama: "Kontinental Musim Panas Kering dan Panas",
        suhu: "Bulan terpanas ≥ 22°C, musim dingin dingin.",
        hujan: "Musim panas kering. Tipe ini langka.",
        contoh: "Sebagian pegunungan Iran dan Anatolia timur.",
        vegetasi: "Padang rumput dan hutan terbuka.",
    },
    {
        code: "Dsb",
        nama: "Kontinental Musim Panas Kering dan Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.",
        hujan: "Musim panas kering.",
        contoh: "Pegunungan di barat laut Amerika, Spokane, sebagian Turki.",
        vegetasi: "Hutan konifer pegunungan.",
    },
    {
        code: "Dsc",
        nama: "Subarktik Musim Panas Kering",
        suhu: "Kurang dari 4 bulan ≥ 10°C, musim dingin dingin.",
        hujan: "Musim panas kering. Tipe ini langka.",
        contoh: "Sebagian pegunungan tinggi di wilayah beriklim Mediterania.",
        vegetasi: "Hutan konifer (taiga) pegunungan.",
    },
    {
        code: "Dsd",
        nama: "Subarktik Ekstrem Musim Panas Kering",
        suhu: "Bulan terdingin < -38°C.",
        hujan: "Musim panas kering. Tipe ini sangat langka.",
        contoh: "Hanya di sedikit lokasi pegunungan tinggi di lintang tinggi.",
        vegetasi: "Taiga atau tundra pegunungan.",
    },
    {
        code: "Dwa",
        nama: "Kontinental Musim Dingin Kering dan Panas",
        suhu: "Bulan terpanas ≥ 22°C, musim dingin sangat dingin.",
        hujan: "Musim dingin kering, hujan terutama saat musim panas.",
        contoh: "Beijing, Seoul, Pyongyang.",
        vegetasi: "Hutan campuran dan lahan pertanian.",
    },
    {
        code: "Dwb",
        nama: "Kontinental Musim Dingin Kering dan Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.",
        hujan: "Musim dingin kering.",
        contoh: "Timur laut Tiongkok, sebagian Mongolia dan Siberia selatan.",
        vegetasi: "Hutan konifer dan campuran.",
    },
    {
        code: "Dwc",
        nama: "Subarktik Musim Dingin Kering",
        suhu: "Kurang dari 4 bulan ≥ 10°C, musim dingin sangat dingin.",
        hujan: "Musim dingin kering.",
        contoh: "Siberia timur dan sebagian Mongolia utara.",
        vegetasi: "Taiga (hutan konifer).",
    },
    {
        code: "Dwd",
        nama: "Subarktik Ekstrem Musim Dingin Kering",
        suhu: "Bulan terdingin < -38°C: salah satu iklim terdingin di dunia.",
        hujan: "Musim dingin kering.",
        contoh: "Oymyakon (Siberia timur).",
        vegetasi: "Taiga jarang yang tahan dingin ekstrem.",
    },
    {
        code: "Dfa",
        nama: "Kontinental Lembap Musim Panas Panas",
        suhu: "Bulan terpanas ≥ 22°C, musim dingin dingin.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Chicago, Kansas City, sebagian Eropa timur.",
        vegetasi: "Padang rumput prairi dan hutan gugur.",
    },
    {
        code: "Dfb",
        nama: "Kontinental Lembap Musim Panas Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Moskow, Toronto, Kanada selatan, Eropa timur.",
        vegetasi: "Hutan campuran dan hutan konifer.",
    },
    {
        code: "Dfc",
        nama: "Subarktik",
        suhu: "Kurang dari 4 bulan ≥ 10°C; musim dingin panjang dan sangat dingin.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Fairbanks (Alaska), Siberia, Skandinavia utara.",
        vegetasi: "Taiga (hutan konifer luas).",
    },
    {
        code: "Dfd",
        nama: "Subarktik Ekstrem",
        suhu: "Bulan terdingin < -38°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Yakutsk dan Verkhoyansk (Siberia timur).",
        vegetasi: "Taiga yang jarang.",
    },

    // ===== E: KUTUB =====
    {
        code: "ET",
        nama: "Tundra",
        suhu: "Bulan terpanas antara 0°C dan 10°C.",
        hujan: "Sedikit, sebagian besar berupa salju; tanah membeku (permafrost).",
        contoh: "Pesisir Arktik, pegunungan tinggi (Andes, Himalaya bagian atas).",
        vegetasi: "Lumut, rumput, dan semak kerdil; tidak ada pohon.",
    },
    {
        code: "EF",
        nama: "Es Abadi (Kutub)",
        suhu: "Semua bulan di bawah 0°C.",
        hujan: "Sangat sedikit, berupa salju; tertutup es sepanjang tahun.",
        contoh: "Antartika dan pedalaman Greenland.",
        vegetasi: "Hampir tidak ada tumbuhan.",
    },
];

/* ---------- ARTI TIAP HURUF ---------- */

const HURUF_1 = {
    A: "iklim tropis: semua bulan bersuhu ≥ 18°C",
    B: "iklim kering: penguapan lebih besar daripada curah hujan",
    C: "iklim subtropis/sedang: bulan terdingin antara -3°C dan 18°C",
    D: "iklim kontinental/dingin: bulan terdingin di bawah -3°C",
    E: "iklim kutub: bulan terpanas di bawah 10°C",
};

const HURUF_2 = {
    f: "hujan merata sepanjang tahun, tidak ada musim kering",
    m: "monsun: ada musim kering singkat, tetapi hujan total tahunan sangat tinggi",
    w: "ada musim kering saat musim dingin",
    s: "ada musim kering saat musim panas",
    W: "gurun",
    S: "stepa",
    T: "tundra",
    F: "es abadi",
};

const HURUF_3 = {
    h: "panas (suhu rata-rata tahunan ≥ 18°C)",
    k: "dingin (suhu rata-rata tahunan < 18°C)",
    a: "musim panas sangat hangat (bulan terpanas ≥ 22°C)",
    b: "musim panas hangat (bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C)",
    c: "musim panas sejuk (kurang dari 4 bulan ≥ 10°C)",
    d: "musim dingin ekstrem (bulan terdingin < -38°C)",
};

/* ---------- PEMBUAT JAWABAN ---------- */

export function bedahKode(item) {
    const c = item.code;

    let t = `Kode ${c}: ${item.nama}\n\n`;

    t += `Huruf "${c[0]}": ${HURUF_1[c[0]]}\n`;

    if (c[1]) {
        t += `Huruf "${c[1]}": ${HURUF_2[c[1]]}\n`;
    }

    if (c[2]) {
        t += `Huruf "${c[2]}": ${HURUF_3[c[2]]}\n`;
    }

    t += `\nSuhu: ${item.suhu}`;
    t += `\nHujan: ${item.hujan}`;
    t += `\nContoh wilayah: ${item.contoh}`;
    t += `\nVegetasi: ${item.vegetasi}`;

    return t;
}

export function daftarKode() {
    const grup = {
        A: "Tropis (A)",
        B: "Kering (B)",
        C: "Subtropis/Sedang (C)",
        D: "Kontinental/Dingin (D)",
        E: "Kutub (E)",
    };

    let t = "Daftar kode iklim Köppen:\n";

    Object.keys(grup).forEach((g) => {
        const kode = KOPPEN
            .filter((k) => k.code[0] === g)
            .map((k) => k.code)
            .join(", ");

        t += `\n${grup[g]}: ${kode}`;
    });

    t += '\n\nKetik salah satu kode, misalnya "Aw", untuk melihat penjelasannya.';

    return t;
}

/* ---------- JAWABAN CEPAT ---------- */

export const JAWABAN_CEPAT = {
    "apa itu köppen":
        "Klasifikasi iklim Köppen adalah sistem pengelompokan iklim dunia berdasarkan suhu dan curah hujan, yang dicetuskan oleh Wladimir Köppen. Hasilnya berupa kode huruf: huruf pertama menunjukkan kelompok iklim (A-E), huruf kedua pola curah hujan, dan huruf ketiga tingkat suhu.",

    "kode iklim indonesia":
        "Indonesia umumnya berada di kelompok A (tropis):\n- Af: hutan hujan tropis, mis. Kalimantan dan Sumatra\n- Am: monsun tropis, sebagian wilayah dengan musim kering singkat\n- Aw: savana tropis, mis. Jawa Timur, NTB, NTT\n\nDi dataran tinggi tertentu bisa ditemukan iklim sejuk, tetapi sebagian besar wilayah tetap A.",

    "beda af am aw":
        "Ketiganya sama-sama iklim tropis (suhu ≥ 18°C). Bedanya ada di hujan:\n- Af: semua bulan hujan ≥ 60 mm, tidak ada musim kering\n- Am: ada musim kering singkat, tapi hujan total tinggi\n- Aw: musim kemarau jelas, savana",

    "iklim surabaya apa":
        "Surabaya umumnya diklasifikasikan Aw (savana tropis): suhu selalu ≥ 18°C dan ada musim kemarau yang jelas, biasanya sekitar Juni sampai September.",
};

/* ---------- NORMALISASI ---------- */

function normalisasi(teks) {
    return teks
        .toLowerCase()
        .replace(/[?!.,]/g, "")
        .trim();
}

/* ---------- MESIN CHAT ---------- */

export function balasBot(inputUser) {
    const raw = inputUser.trim();
    const n = normalisasi(raw);

    if (!n) {
        return "Silakan tulis pertanyaan atau kode iklim yang ingin kamu tanyakan.";
    }

    // Sapaan
    if (["halo", "hai", "hi", "p"].includes(n)) {
        return 'Halo! Aku IklimKöppenBot. Ketik kode iklim seperti Af, Aw, BWh, atau Cfb dan aku akan membedah artinya. Ketik "daftar" untuk melihat semua kode.';
    }

    // Daftar kode
    if (
        n === "daftar" ||
        n === "daftar kode" ||
        n === "semua kode"
    ) {
        return daftarKode();
    }

    // Jawaban cepat
    for (const kunci in JAWABAN_CEPAT) {
        if (n.includes(kunci)) {
            return JAWABAN_CEPAT[kunci];
        }
    }

    // Cari kode iklim
    const kata = raw.split(/\s+/);

    for (const k of kata) {
        const kode = k
            .toLowerCase()
            .replace(/[?!.,]/g, "");

        const cocok = KOPPEN.find(
            (item) => item.code.toLowerCase() === kode
        );

        if (cocok) {
            return bedahKode(cocok);
        }
    }

    // Fallback
    return 'Aku belum paham maksudmu. Coba ketik kode iklim seperti Af, Aw, BWh, atau Cfb. Atau ketik "daftar" untuk melihat semua kode.';
}

/* ---------- TOMBOL CEPAT ---------- */

export const TOMBOL_CEPAT = [
    "Apa itu Köppen?",
    "Kode iklim Indonesia",
    "Beda Af, Am, Aw",
    "Iklim Surabaya apa?",
    "Daftar kode",
];