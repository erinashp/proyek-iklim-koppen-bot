import { Head, Link } from "@inertiajs/react";

import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";
import { P, Kartu, Sub, Callout, Tabel } from "@/Components/Modul4Ui";

/* ===================== DATA ===================== */

const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

const peta = [
    ["A", "Cuaca, iklim, dan mengapa iklim diklasifikasikan"],
    ["B", "Data dan parameter: MAT, MAP, Thot, Tcold, Pdry, Pth"],
    ["C", "Köppen–Geiger: kelompok, kriteria, dan bagan alur"],
    ["D", "Contoh soal terbimbing (6 wilayah)"],
    ["E", "Iklim dataran tinggi di daerah tropis"],
    ["F", "Schmidt–Ferguson dan Oldeman untuk Indonesia"],
    ["G–H", "Tips, kesalahan umum, dan rangkuman"],
    ["I–J", "Latihan, proyek mini, rubrik, dan kunci jawaban"],
    ["K", "Catatan untuk guru dan daftar pustaka"],
];

const tujuan = [
    "Membedakan cuaca dan iklim, serta menjelaskan alasan iklim perlu diklasifikasikan.",
    "Menghitung parameter iklim (suhu rata-rata tahunan, curah hujan tahunan, bulan terkering, dan seterusnya) dari data bulanan.",
    "Menentukan kode iklim Köppen–Geiger suatu wilayah dari data suhu dan curah hujan.",
    "Menentukan tipe iklim Schmidt–Ferguson dan zona agroklimat Oldeman dari data curah hujan.",
    "Menafsirkan diagram iklim dan mengaitkan tipe iklim dengan kehidupan (vegetasi dan pertanian).",
];

const alurBelajar = [
    { no: 1, judul: "Kumpulkan data", isi: "12 bulan suhu dan curah hujan (rata-rata 30 tahun)", color: "border-teal-500 text-teal-700" },
    { no: 2, judul: "Hitung parameter", isi: "MAT, MAP, Thot, Tcold, Pdry", color: "border-sky-500 text-sky-700" },
    { no: 3, judul: "Ikuti bagan alur", isi: "Uji kriteria satu per satu sesuai urutan", color: "border-orange-500 text-orange-700" },
    { no: 4, judul: "Tulis kode iklim", isi: "Contoh: Af, Aw, BWh, Csa, Cfb, lalu jelaskan artinya", color: "border-rose-500 text-rose-700" },
];

const tabelCuaca = {
    headers: ["Aspek", "Cuaca", "Iklim"],
    rows: [
        ["Rentang waktu", "Menit, jam, hari", "Rata-rata puluhan tahun (periode normal 30 tahun)"],
        ["Sifat", "Cepat berubah", "Relatif stabil, berubah sangat lambat"],
        ["Contoh", "“Besok pagi mendung, siang cerah”", "“Wilayah ini punya musim kemarau yang jelas”"],
        ["Dijawab dengan", "Prakiraan cuaca", "Klasifikasi iklim"],
    ],
};

const manfaat = [
    { icon: "🗣️", judul: "Bahasa bersama", isi: "Ilmuwan, guru, dan perencana di negara mana pun memahami arti kode seperti Af atau Aw." },
    { icon: "🌾", judul: "Perencanaan pertanian", isi: "Pola hujan menentukan kapan petani menanam dan tanaman apa yang cocok." },
    { icon: "🗺️", judul: "Tata ruang dan kebencanaan", isi: "Wilayah yang kering panjang rawan kekeringan, sedangkan wilayah yang sangat basah rawan banjir dan longsor." },
    { icon: "⚖️", judul: "Perbandingan antarwilayah", isi: "Dua tempat yang berjauhan dapat dibandingkan secara adil karena memakai aturan yang sama." },
];

const tigaSistem = [
    { icon: "🌍", nama: "Köppen–Geiger", isi: "Memakai data suhu dan curah hujan; berlaku untuk seluruh dunia." },
    { icon: "🌧️", nama: "Schmidt–Ferguson", isi: "Memakai data curah hujan saja; dirancang untuk wilayah Indonesia (Schmidt & Ferguson, 1951)." },
    { icon: "🌾", nama: "Oldeman", isi: "Memakai data curah hujan saja; menonjolkan kebutuhan pertanian (Oldeman, 1975)." },
];

const tabelParameter = {
    headers: ["Simbol", "Artinya", "Cara mendapatkannya"],
    rows: [
        ["MAT", "Suhu rata-rata tahunan (mean annual temperature)", "Jumlahkan 12 suhu bulanan, bagi 12"],
        ["MAP", "Curah hujan tahunan (mean annual precipitation)", "Jumlahkan 12 curah hujan bulanan"],
        ["Thot", "Suhu bulan terpanas", "Ambil suhu bulanan terbesar"],
        ["Tcold", "Suhu bulan terdingin", "Ambil suhu bulanan terkecil"],
        ["Tmon10", "Jumlah bulan bersuhu di atas 10 °C", "Hitung bulan yang suhunya > 10 °C"],
        ["Pdry", "Curah hujan bulan terkering (dalam setahun)", "Ambil hujan bulanan terkecil"],
        ["Psdry, Pswet", "Hujan bulan terkering dan terbasah pada “musim panas”", "Terkecil / terbesar di enam bulan terhangat"],
        ["Pwdry, Pwwet", "Hujan bulan terkering dan terbasah pada “musim dingin”", "Terkecil / terbesar di enam bulan terdingin"],
        ["Pth", "Ambang kekeringan (P threshold)", "Rumus pada Tabel 3"],
    ],
};

const tabelPth = {
    headers: ["Jika sebaran hujan tahunan…", "Maka Pth ="],
    rows: [
        ["≥ 70% dari MAP turun di “musim dingin”", "2 × MAT"],
        ["≥ 70% dari MAP turun di “musim panas”", "2 × MAT + 28"],
        ["Selain dua kondisi di atas (hujan tersebar)", "2 × MAT + 14"],
    ],
};

const kodeHuruf = [
    { no: "1", judul: "Huruf pertama (kapital)", isi: "Kelompok iklim utama: A, B, C, D, atau E.", color: "bg-[#e4f5e8]" },
    { no: "2", judul: "Huruf kedua", isi: "Pola curah hujan (f, m, w, s) atau tingkat kekeringan (W gurun, S stepa; T tundra dan F es abadi pada kelompok E).", color: "bg-[#fff3d9]" },
    { no: "3", judul: "Huruf ketiga", isi: "Tingkat panas atau dinginnya suhu (misalnya a, b, c, h, k).", color: "bg-[#e8f4fb]" },
];

const kelompok = [
    { code: "A", nama: "Tropis", syarat: "Suhu terdingin ≥ 18 °C", contoh: "Hutan hujan, savana", color: "bg-[#2e9e5b]" },
    { code: "B", nama: "Kering", syarat: "Penguapan lebih besar dari hujan", contoh: "Gurun, stepa", color: "bg-[#e8853a]" },
    { code: "C", nama: "Sedang", syarat: "Suhu terdingin 0–18 °C", contoh: "Mediterania, dataran tinggi", color: "bg-[#3b82c4]" },
    { code: "D", nama: "Dingin", syarat: "Suhu terdingin ≤ 0 °C", contoh: "Hutan taiga, musim dingin panjang", color: "bg-[#7b5cc4]" },
    { code: "E", nama: "Kutub", syarat: "Suhu terpanas < 10 °C", contoh: "Tundra, lapisan es", color: "bg-[#5a7a96]" },
];

const tabelABE = {
    headers: ["Kode", "Nama", "Kriteria"],
    rows: [
        ["A", "Tropis", "Tcold ≥ 18 °C"],
        ["Af", "Hutan hujan tropis", "Pdry ≥ 60 mm (tidak ada bulan kering)"],
        ["Am", "Monsun tropis", "Bukan Af, dan Pdry ≥ 100 − MAP/25"],
        ["Aw", "Savana tropis", "Bukan Af, dan Pdry < 100 − MAP/25 (ada musim kering nyata)"],
        ["B", "Kering", "MAP < 10 × Pth"],
        ["BW", "Gurun", "MAP < 5 × Pth"],
        ["BS", "Stepa (semi-kering)", "5 × Pth ≤ MAP < 10 × Pth"],
        ["…h / …k", "Panas / dingin", "h: MAT ≥ 18 °C; k: MAT < 18 °C"],
        ["E", "Kutub", "Thot < 10 °C"],
        ["ET / EF", "Tundra / Es abadi", "ET: 0 < Thot < 10 °C; EF: Thot ≤ 0 °C"],
    ],
};

const tabelCD = {
    headers: ["Kode", "Nama", "Kriteria"],
    rows: [
        ["C", "Sedang", "Thot > 10 °C dan 0 °C < Tcold < 18 °C (bukan E dan bukan B)"],
        ["D", "Dingin (benua)", "Thot > 10 °C dan Tcold ≤ 0 °C (bukan E dan bukan B)"],
        ["…s", "Kering saat musim panas", "Psdry < 40 mm dan Psdry < Pwwet ÷ 3"],
        ["…w", "Kering saat musim dingin", "Pwdry < Pswet ÷ 10"],
        ["…f", "Basah sepanjang tahun", "Tidak memenuhi s maupun w"],
        ["…a", "Musim panas yang panas", "Thot ≥ 22 °C"],
        ["…b", "Musim panas yang hangat", "Bukan a, dan Tmon10 ≥ 4 bulan"],
        ["…c", "Musim panas yang sejuk", "Bukan a atau b, dan 1 ≤ Tmon10 < 4"],
        ["…d", "Musim dingin sangat dingin", "Hanya kelompok D: bukan a atau b, dan Tcold < −38 °C"],
    ],
};

const bagan = [
    { no: 1, tanya: "Apakah suhu bulan terpanas (Thot) kurang dari 10 °C?", ya: "Kelompok E (Kutub)", detail: "ET jika Thot > 0 °C; EF jika Thot ≤ 0 °C.", color: "bg-[#e8f0fc]" },
    { no: 2, tanya: "Apakah curah hujan tahunan (MAP) kurang dari 10 × Pth?", ya: "Kelompok B (Kering)", detail: "W (gurun) jika MAP < 5 × Pth, selain itu S (stepa). Huruf ketiga: h jika MAT ≥ 18 °C, k jika lebih rendah.", color: "bg-[#fff3d9]" },
    { no: 3, tanya: "Apakah suhu bulan terdingin (Tcold) sekurang-kurangnya 18 °C?", ya: "Kelompok A (Tropis)", detail: "Huruf kedua f, m, atau w menurut Pdry dan batas 100 − MAP/25.", color: "bg-[#e4f5e8]" },
    { no: 4, tanya: "Apakah Tcold lebih dari 0 °C?", ya: "Kelompok C (Sedang)", tidak: "Kelompok D (Dingin)", detail: "Huruf kedua s, w, atau f; huruf ketiga a, b, atau c (juga d pada kelompok D).", color: "bg-[#e8f4fb]" },
];

/* ================= KOMPONEN KECIL ================= */

function BarisBulan({ judul, panas }) {
    return (
        <div>
            <p className="mb-2 text-sm font-semibold text-[#123b49]">{judul}</p>
            <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-12">
                {bulan.map((b, i) => (
                    <div
                        key={b}
                        className={`rounded-lg py-2 text-center text-xs font-bold text-white ${
                            panas.includes(i) ? "bg-[#e8853a]" : "bg-[#3b7fc4]"
                        }`}
                    >
                        {b}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ===================== HALAMAN ===================== */

export default function Modul4() {
    return (
        <>
            <Head title="Modul 4: Menentukan Klasifikasi Iklim | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <StudentSidebar />

                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Media Pembelajaran Kelas X
                                </p>
                                <h2 className="mt-1 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Modul 4: Menentukan Klasifikasi Iklim
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Berdasarkan data curah hujan dan suhu.
                                </p>
                            </div>

                            <Link
                                href={route("student.material")}
                                className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#c8dcda] px-4 py-3 text-sm font-semibold text-[#087b68] transition hover:bg-[#f3f9f8] sm:inline-flex"
                            >
                                <span>←</span>
                                Kembali
                            </Link>
                        </div>
                    </header>

                    <main className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10">
                        {/* BREADCRUMB */}
                        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <Link
                                href={route("student.material")}
                                className="transition hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>
                            <span>/</span>
                            <span className="font-medium text-[#123b49]">
                                Modul 4
                            </span>
                        </nav>

                        {/* HERO */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pembelajaran 04
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Menentukan Klasifikasi Iklim Suatu Wilayah
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Belajar menghitung parameter iklim dari data bulanan, lalu menentukan kode iklim Köppen–Geiger, tipe Schmidt–Ferguson, dan zona Oldeman.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">🌍 Köppen–Geiger</span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">🌧️ Schmidt–Ferguson</span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">🌾 Oldeman</span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">⏱️ 2 pertemuan × 90 menit</span>
                                </div>
                            </div>
                        </section>

                        {/* PETA ISI + TUJUAN */}
                        <section className="mt-7 grid gap-5 lg:grid-cols-2">
                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#123b49]">
                                    🗺️ Peta Isi
                                </h3>
                                <ul className="mt-4 space-y-2">
                                    {peta.map(([kode, isi]) => (
                                        <li
                                            key={kode}
                                            className="flex items-start gap-3 rounded-xl bg-[#f8fbfa] p-3"
                                        >
                                            <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg bg-[#087b68] px-2 text-sm font-bold text-white">
                                                {kode}
                                            </span>
                                            <span className="text-sm leading-6 text-gray-700">
                                                {isi}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#123b49]">
                                    🎯 Tujuan Pembelajaran
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Setelah mempelajari materi ini, kamu diharapkan mampu:
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {tujuan.map((t, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e1f5ed] text-xs font-bold text-[#087b68]">
                                                {i + 1}
                                            </span>
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* ALUR BELAJAR */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <h3 className="text-lg font-bold text-[#123b49]">
                                🧭 Alur Belajar: 4 Langkah
                            </h3>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {alurBelajar.map((a) => (
                                    <div
                                        key={a.no}
                                        className={`rounded-2xl border-2 bg-white p-5 ${a.color}`}
                                    >
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-current text-sm font-bold">
                                            <span className="text-white">{a.no}</span>
                                        </div>
                                        <h4 className="mt-3 font-bold">{a.judul}</h4>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                            {a.isi}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* PEMANTIK */}
                        <div className="mt-7">
                            <Callout icon="🤔" title="Pemantik: Sama-sama tropis, tapi apakah iklimnya sama?" tone="amber">
                                <p>
                                    Bayangkan kamu punya dua sahabat pena. Sahabat pertama tinggal di wilayah yang hampir setiap bulan diguyur hujan. Sahabat kedua tinggal di wilayah yang hujannya hanya muncul beberapa bulan, lalu kering berbulan-bulan. Keduanya sama-sama di daerah tropis dan sama-sama hangat sepanjang tahun.
                                </p>
                                <ol className="mt-3 list-decimal space-y-1 pl-5">
                                    <li>Apakah iklim mereka bisa disebut sama?</li>
                                    <li>Data apa yang kamu butuhkan untuk membuktikannya?</li>
                                    <li>Bagaimana cara menyebutnya secara ilmiah supaya semua orang di dunia memahami maksudnya?</li>
                                </ol>
                                <p className="mt-3 font-semibold">Jawabannya ada di materi ini!</p>
                            </Callout>
                        </div>

                        {/* ===== A ===== */}
                        <Kartu nomor="A" icon="☁️" judul="Cuaca, Iklim, dan Klasifikasi Iklim">
                            <Sub icon="🌦️" judul="1. Cuaca dan iklim itu beda, lho">
                                <P>
                                    Dua kata ini sering tertukar. Cuaca adalah keadaan atmosfer pada waktu yang singkat di tempat tertentu, misalnya “hari ini Surabaya hujan deras sore hari”. Iklim adalah gambaran kebiasaan cuaca di suatu wilayah dalam jangka panjang. Untuk menggambarkan iklim, para ahli memakai rata-rata data selama periode normal 30 tahun (World Meteorological Organization [WMO], 2017; Tjasyono, 2004).
                                </P>
                                <Tabel {...tabelCuaca} min={520} />
                            </Sub>

                            <Sub icon="🏷️" judul="2. Apa itu klasifikasi iklim?">
                                <P>
                                    Klasifikasi iklim adalah cara mengelompokkan wilayah-wilayah di muka bumi berdasarkan kemiripan unsur iklimnya, terutama suhu dan curah hujan. Hasilnya berupa kode atau nama tipe iklim. Seperti kode pos yang membuat alamat mudah dipahami, kode iklim membuat kita bisa menjelaskan sebuah iklim hanya dengan dua sampai tiga huruf.
                                </P>
                            </Sub>

                            <Sub icon="💡" judul="3. Mengapa iklim perlu diklasifikasikan?">
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {manfaat.map((m) => (
                                        <div key={m.judul} className="rounded-xl bg-[#f8fbfa] p-5">
                                            <div className="text-3xl">{m.icon}</div>
                                            <h4 className="mt-2 font-bold text-[#123b49]">{m.judul}</h4>
                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">{m.isi}</p>
                                        </div>
                                    ))}
                                </div>
                                <P>
                                    Sistem Köppen–Geiger, misalnya, masih sangat banyak dipakai oleh peneliti dari berbagai bidang dan juga lazim diajarkan di sekolah dan perguruan tinggi (Peel dkk., 2007).
                                </P>
                            </Sub>

                            <Callout icon="🧩" title="Tiga sistem yang akan kita pakai">
                                <div className="mt-1 grid gap-3 md:grid-cols-3">
                                    {tigaSistem.map((s) => (
                                        <div key={s.nama} className="rounded-xl bg-white p-4">
                                            <div className="text-2xl">{s.icon}</div>
                                            <p className="mt-1 font-bold text-[#087b68]">{s.nama}</p>
                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">{s.isi}</p>
                                        </div>
                                    ))}
                                </div>
                            </Callout>
                        </Kartu>

                        {/* ===== B ===== */}
                        <Kartu nomor="B" icon="📊" judul="Data dan Parameter yang Dibutuhkan">
                            <Sub icon="🗂️" judul="1. Dua data utama">
                                <P>
                                    Untuk menentukan klasifikasi iklim kamu hanya perlu dua deret data bulanan (Januari–Desember):
                                </P>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-[#fff1d6] p-5">
                                        <div className="text-3xl">🌡️</div>
                                        <h4 className="mt-2 font-bold">Suhu udara rata-rata bulanan</h4>
                                        <p className="mt-1 text-sm text-gray-600">Dalam °C.</p>
                                    </div>
                                    <div className="rounded-xl bg-[#e8f4fb] p-5">
                                        <div className="text-3xl">💧</div>
                                        <h4 className="mt-2 font-bold">Curah hujan bulanan</h4>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Dalam milimeter (mm). Satu milimeter hujan berarti air setinggi 1 mm menutupi tanah datar tanpa meresap, atau setara 1 liter air tiap 1 m².
                                        </p>
                                    </div>
                                </div>
                                <Callout icon="📌" title="Pakai rata-rata jangka panjang">
                                    <p>
                                        Data tiap bulan sebaiknya berupa rata-rata jangka panjang (misalnya rata-rata semua bulan Januari selama 30 tahun), bukan data satu tahun saja. Data satu tahun bisa menyesatkan karena tahun yang sangat basah atau sangat kering akan terlihat seperti kebiasaan (WMO, 2017). Data pengamatan Indonesia dapat dicari melalui layanan Data Online BMKG (Badan Meteorologi, Klimatologi, dan Geofisika [BMKG], n.d.).
                                    </p>
                                </Callout>
                            </Sub>

                            <Sub icon="🧮" judul="2. Parameter yang harus kamu hitung">
                                <P>
                                    Dari 12 data suhu dan 12 data hujan, kita turunkan beberapa angka penting. Hafalkan simbol-simbol ini karena akan dipakai terus (mengikuti notasi Peel dkk., 2007).
                                </P>
                                <Tabel {...tabelParameter} min={620} />
                            </Sub>

                            <Sub icon="📆" judul="3. “Musim panas” dan “musim dingin” versi Köppen">
                                <P>
                                    Dalam rumus Köppen, musim panas berarti enam bulan terhangat dan musim dingin berarti enam bulan terdingin. Pilihannya hanya dua: April–September atau Oktober–Maret. Di belahan bumi utara bulan terhangat jatuh di April–September, sedangkan di belahan bumi selatan (termasuk sebagian besar Indonesia) jatuh di Oktober–Maret (Peel dkk., 2007). Di daerah tropis istilah ini hanya penanda kelompok bulan, bukan musim yang benar-benar terasa.
                                </P>
                                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-600">
                                    <span className="flex items-center gap-2"><i className="h-3 w-3 rounded bg-[#e8853a]" /> enam bulan terhangat = “musim panas”</span>
                                    <span className="flex items-center gap-2"><i className="h-3 w-3 rounded bg-[#3b7fc4]" /> enam bulan terdingin = “musim dingin”</span>
                                </div>
                                <BarisBulan judul="Belahan Bumi Utara (BBU)" panas={[3, 4, 5, 6, 7, 8]} />
                                <BarisBulan judul="Belahan Bumi Selatan (BBS)" panas={[9, 10, 11, 0, 1, 2]} />
                            </Sub>

                            <Sub icon="🏜️" judul="4. Ambang kekeringan (Pth)">
                                <P>
                                    Sebuah wilayah disebut kering bukan hanya karena hujannya sedikit, tetapi karena hujannya sedikit dibanding penguapan. Penguapan lebih besar di tempat yang panas, dan hujan yang turun saat musim panas cepat menguap. Karena itu Köppen membuat ambang yang tergantung suhu dan musim hujan (Peel dkk., 2007).
                                </P>
                                <Tabel {...tabelPth} min={420} />
                                <Callout icon="🧠" title="Cara mengingat">
                                    <p>
                                        Makin besar angka Pth, makin “mudah” sebuah wilayah dianggap kering. Hujan yang menumpuk di musim panas (musim penguapan tinggi) mendapat tambahan +28, karena airnya lebih banyak terbuang.
                                    </p>
                                </Callout>
                            </Sub>
                        </Kartu>

                        {/* ===== C ===== */}
                        <Kartu nomor="C" icon="🌍" judul="Klasifikasi Iklim Köppen–Geiger">
                            <P>
                                Sistem ini dikembangkan oleh Wladimir Köppen, seorang klimatolog yang berlatar belakang ilmu tumbuhan, lalu disempurnakan oleh para penerusnya, termasuk Rudolf Geiger (Peel dkk., 2007). Karena Köppen mengamati tumbuhan, batas-batas iklimnya dirancang agar sesuai dengan sebaran vegetasi alami. Peta dunia versi terbaru dapat dilihat pada Kottek dkk. (2006) dan Beck dkk. (2018).
                            </P>

                            <Sub icon="🔤" judul="1. Cara membaca kode iklim">
                                <P>Kode Köppen terdiri dari dua atau tiga huruf:</P>
                                <div className="grid gap-3 md:grid-cols-3">
                                    {kodeHuruf.map((k) => (
                                        <div key={k.no} className={`rounded-xl p-5 ${k.color}`}>
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Huruf ke-{k.no}</p>
                                            <h4 className="mt-1 font-bold text-[#123b49]">{k.judul}</h4>
                                            <p className="mt-1 text-sm leading-relaxed text-gray-700">{k.isi}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-[#d4e4e1] p-4 text-gray-700">
                                        <span className="text-2xl font-bold text-[#087b68]">Af</span> = A (tropis) + f (hujan sepanjang tahun)
                                    </div>
                                    <div className="rounded-xl border border-[#d4e4e1] p-4 text-gray-700">
                                        <span className="text-2xl font-bold text-[#087b68]">Csa</span> = C (sedang) + s (kering saat musim panas) + a (musim panasnya panas)
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                                    {kelompok.map((k) => (
                                        <div key={k.code} className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white">
                                            <div className={`px-4 py-3 text-white ${k.color}`}>
                                                <div className="text-4xl font-black">{k.code}</div>
                                                <div className="text-sm font-semibold">{k.nama}</div>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-sm font-semibold leading-snug text-[#123b49]">{k.syarat}</p>
                                                <p className="mt-2 text-xs italic text-gray-500">{k.contoh}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Sub>

                            <Sub icon="📐" judul="2. Kriteria klasifikasi">
                                <P>
                                    Berikut kriteria yang disederhanakan dari Peel dkk. (2007). Sumber ini memakai ambang 0 °C untuk memisahkan kelompok C dan D. Beberapa sumber lain, misalnya Kottek dkk. (2006), memakai −3 °C, jadi cocokkan dengan buku pegangan di sekolahmu.
                                </P>
                                <h4 className="font-bold text-[#123b49]">Kelompok A, B, dan E</h4>
                                <Tabel {...tabelABE} min={560} />
                                <h4 className="font-bold text-[#123b49]">Kelompok C dan D (iklim sedang dan dingin)</h4>
                                <Tabel {...tabelCD} min={600} />
                            </Sub>

                            <Sub icon="🔀" judul="3. Bagan alur: ikuti urutannya!">
                                <P>
                                    Urutan pengujian sangat penting. Selalu uji E dahulu, lalu B, lalu A, lalu C/D. Jika kamu mengujinya acak, kamu bisa salah mengira wilayah gurun yang panas sebagai wilayah tropis (suhu bulan terdinginnya mungkin ≥ 18 °C, tetapi hujannya nyaris nol).
                                </P>

                                <div className="space-y-3">
                                    {bagan.map((b) => (
                                        <div key={b.no} className="rounded-2xl border border-[#d4e4e1] bg-white p-4 sm:p-5">
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#07384b] text-sm font-bold text-white">
                                                    {b.no}
                                                </span>
                                                <p className="pt-1 font-semibold leading-snug text-[#123b49]">{b.tanya}</p>
                                            </div>
                                            <div className="mt-3 grid gap-2 sm:grid-cols-2">
                                                <div className={`rounded-xl p-3 ${b.color}`}>
                                                    <p className="text-xs font-bold uppercase text-emerald-700">Ya → {b.ya}</p>
                                                    <p className="mt-1 text-sm leading-relaxed text-gray-700">{b.detail}</p>
                                                </div>
                                                <div className="rounded-xl bg-[#f3f6f6] p-3">
                                                    <p className="text-xs font-bold uppercase text-rose-600">Tidak</p>
                                                    <p className="mt-1 text-sm leading-relaxed text-gray-700">
                                                        {b.tidak ? `→ ${b.tidak}` : `→ lanjut ke langkah ${b.no + 1}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Callout icon="⚠️" title="Jangan acak urutannya" tone="amber">
                                    <p>
                                        Wilayah gurun panas bisa punya Tcold ≥ 18 °C, sehingga kalau langsung diuji sebagai kelompok A akan salah dikira tropis. Karena itu E dan B harus diuji lebih dulu.
                                    </p>
                                </Callout>
                            </Sub>

                            <Sub icon="🇮🇩" judul="4. Posisi Indonesia">
                                <P>
                                    Indonesia berada di sekitar khatulistiwa sehingga sebagian besar wilayahnya memiliki iklim tropis (kelompok A), terutama Af, Am, dan Aw (lihat peta pada Beck dkk., 2018). Pengecualiannya adalah wilayah pegunungan tinggi yang suhunya jauh lebih rendah. Kita akan membahasnya pada Bagian E.
                                </P>
                            </Sub>
                        </Kartu>

                        {/* ==== BAGIAN D, E, F–K DITAMBAHKAN DI SINI (langkah berikutnya) ==== */}

                        {/* SELESAIKAN MODUL */}
                        <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">
                            <CompleteModuleButton moduleNumber={4} />
                        </div>

                        {/* NAVIGASI MODUL */}
                        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                            <Link
                                href={route("student.modul3")}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Modul Sebelumnya
                            </Link>

                            <Link
                                href={route("student.modul5")}
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066455]"
                            >
                                Modul Berikutnya
                                <span>→</span>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}