import { Head, Link } from "@inertiajs/react";

import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

const IMG = "/image/modul2/";

/* ===================== DATA ===================== */

const grup = {
    A: {
        code: "A",
        title: "Iklim Tropis",
        kunci: "Panas sepanjang tahun",
        img: "image1.jpeg",
        alt: "Hutan hujan tropis berkabut",
        badge: "bg-[#e4f5e8] text-[#1c6b3a]",
    },
    B: {
        code: "B",
        title: "Iklim Kering",
        kunci: "Kekeringan menjadi faktor penentu utama",
        img: "image2.jpg",
        alt: "Gurun pasir di bawah terik matahari",
        badge: "bg-[#fff3d9] text-[#8a5a06]",
    },
    C: {
        code: "C",
        title: "Iklim Sedang",
        kunci: "Musim dingin relatif ringan",
        img: "image3.jpeg",
        alt: "Perbukitan hijau dan danau",
        badge: "bg-[#e8f4fb] text-[#1d6485]",
    },
    D: {
        code: "D",
        title: "Iklim Kontinental atau Dingin",
        kunci: "Musim dingin lebih dingin daripada kelompok C",
        img: "image4.jpeg",
        alt: "Hutan konifer bersalju dan danau",
        badge: "bg-[#f8eadf] text-[#8a4a1a]",
    },
    E: {
        code: "E",
        title: "Iklim Kutub",
        kunci: "Bulan terpanas tidak lebih dari 10°C",
        img: "image5.jpg",
        alt: "Gletser dan es di wilayah kutub",
        badge: "bg-[#e8f0fc] text-[#2b4f94]",
    },
};

const penentu = [
    { code: "A", teks: "Tcold ≥ 18°C", color: "bg-[#e4f5e8]" },
    { code: "B", teks: "Hujan tahunan < ambang kekeringan", color: "bg-[#fff3d9]" },
    { code: "C", teks: "0°C < Tcold < 18°C dan Thot > 10°C", color: "bg-[#e8f4fb]" },
    { code: "D", teks: "Tcold ≤ 0°C dan Thot > 10°C", color: "bg-[#f8eadf]" },
    { code: "E", teks: "Thot ≤ 10°C", color: "bg-[#e8f0fc]" },
];

const hujanAnalisis = [
    { icon: "📅", teks: "Jumlah curah hujan tahunan" },
    { icon: "🏜️", teks: "Curah hujan pada bulan terkering" },
    { icon: "⚖️", teks: "Perbedaan hujan antara musim basah dan musim kering" },
    { icon: "🗓️", teks: "Distribusi hujan sepanjang tahun" },
];

const tabelA = {
    headers: ["Subtipe", "Kriteria curah hujan", "Karakteristik"],
    rows: [
        ["Af", "Curah hujan bulan terkering ≥ 60 mm", "Tidak mengalami musim kering menurut ambang Köppen."],
        ["Am", "Tidak memenuhi Af, tetapi hujan bulan terkering masih memenuhi ambang monsun", "Musim hujan dominan dan ada periode yang lebih kering."],
        ["Aw/As", "Bulan terkering berada di bawah ambang monsun", "Sabana dengan musim kering; w menunjukkan musim dingin kering dan s musim panas kering."],
    ],
};

const tabelB = {
    headers: ["Subtipe", "Kriteria", "Karakteristik"],
    rows: [
        ["BW", "Hujan tahunan kurang dari 50% ambang kekeringan", "Gurun, sangat kering."],
        ["BS", "Hujan tahunan sekurang-kurangnya 50% tetapi kurang dari 100% ambang kekeringan", "Stepa, semi-kering."],
        ["h/k", "Suhu rata-rata tahunan ≥ 18°C / di bawah 18°C", "Membedakan subtipe panas dan dingin."],
    ],
};

const tabelC = {
    headers: ["Subtipe", "Pola curah hujan", "Makna"],
    rows: [
        ["Cf", "Tidak mempunyai musim kering yang memenuhi kriteria s atau w", "Hujan relatif tersebar sepanjang tahun."],
        ["Cs", "Musim panas kering", "Bulan terkering pada musim panas kurang dari 40 mm dan kurang dari sepertiga hujan bulan terbasah pada musim dingin."],
        ["Cw", "Musim dingin kering", "Bulan terkering pada musim dingin kurang dari sepersepuluh hujan bulan terbasah pada musim panas."],
    ],
};

const tabelD = {
    headers: ["Subtipe", "Pola curah hujan", "Makna"],
    rows: [
        ["Df", "Tidak mempunyai musim kering yang memenuhi kriteria s atau w", "Hujan atau salju relatif tersebar sepanjang tahun."],
        ["Ds", "Musim panas kering", "Curah hujan musim panas sangat rendah dibandingkan musim dingin."],
        ["Dw", "Musim dingin kering", "Curah hujan musim dingin sangat rendah dibandingkan musim panas."],
    ],
};

const tabelE = {
    headers: ["Subtipe", "Kriteria suhu bulan terpanas", "Karakteristik"],
    rows: [
        ["ET — Tundra", "Di atas 0°C, tetapi ≤ 10°C", "Musim panas singkat dan sejuk; vegetasi berupa lumut, liken, dan tumbuhan rendah."],
        ["EF — Es abadi", "≤ 0°C", "Suhu rata-rata seluruh bulan tidak melampaui titik beku; es dan salju bertahan sangat lama."],
    ],
};

const tabelBanding = {
    headers: ["Kelompok", "Nama iklim", "Kriteria suhu utama", "Kriteria curah hujan utama"],
    rows: [
        ["A", "Tropis", "Bulan terdingin ≥ 18°C", "Menentukan Af, Am, atau Aw/As."],
        ["B", "Kering", "Tidak ditentukan oleh satu batas suhu sederhana", "Hujan tahunan di bawah ambang kekeringan yang bergantung pada suhu dan musim hujan."],
        ["C", "Sedang", "Bulan terdingin > 0°C dan < 18°C; bulan terpanas > 10°C", "Menentukan Cf, Cs, atau Cw."],
        ["D", "Kontinental/dingin", "Bulan terdingin ≤ 0°C; bulan terpanas > 10°C", "Menentukan Df, Ds, atau Dw."],
        ["E", "Kutub", "Bulan terpanas ≤ 10°C", "Umumnya rendah; pembagian ET dan EF didasarkan pada suhu bulan terpanas."],
    ],
};

const langkah = [
    { judul: "Kumpulkan data", icon: "📊", isi: "Suhu rata-rata bulanan dan curah hujan bulanan dalam periode pengamatan jangka panjang." },
    { judul: "Periksa kekeringan", icon: "🏜️", isi: "Uji kriteria kelompok B dengan menghitung ambang kekeringan berdasarkan suhu dan distribusi musim hujan." },
    { judul: "Tentukan kelompok suhu", icon: "🌡️", isi: "Jika bukan B, periksa suhu bulan terdingin dan terpanas untuk membedakan A, C, D, dan E." },
    { judul: "Tentukan subtipe", icon: "🔎", isi: "Gunakan pola curah hujan bulanan dan, jika diperlukan, indikator suhu musim panas atau musim dingin." },
];

const kesimpulan = [
    { code: "A", color: "bg-[#e4f5e8]", teks: "Suhu bulan terdingin menjadi penentu utama, lalu curah hujan membedakan subtipenya." },
    { code: "B", color: "bg-[#fff3d9]", teks: "Keseimbangan antara curah hujan dan ambang kekeringan menjadi penentu utama." },
    { code: "C", color: "bg-[#e8f4fb]", teks: "Suhu bulan terdingin relatif ringan dan pola hujan menentukan subtipe." },
    { code: "D", color: "bg-[#f8eadf]", teks: "Musim dingin lebih dingin daripada kelompok C, sedangkan musim panas tetap melampaui 10°C." },
    { code: "E", color: "bg-[#e8f0fc]", teks: "Suhu bulan terpanas tidak lebih dari 10°C, dengan pembagian tundra dan es abadi." },
];

const pustaka = [
    {
        teks: "Kottek, M., Grieser, J., Beck, C., Rudolf, B., & Rubel, F. (2006). World Map of the Köppen–Geiger climate classification updated. Meteorologische Zeitschrift, 15(3), 259–263.",
        url: "https://doi.org/10.1127/0941-2948/2006/0130",
    },
    {
        teks: "National Oceanic and Atmospheric Administration (NOAA). (n.d.). Climate Zones. NOAA JetStream.",
        url: "https://www.noaa.gov/jetstream/global/climate-zones",
    },
    {
        teks: "National Oceanic and Atmospheric Administration (NOAA). (n.d.). JetStream Max: Addition Köppen-Geiger Climate Subdivisions.",
        url: "https://www.noaa.gov/jetstream/global/climate-zones/jetstream-max-addition-k-ppen-geiger-climate-subdivisions",
    },
    {
        teks: "Peel, M. C., Finlayson, B. L., & McMahon, T. A. (2007). Updated world map of the Köppen–Geiger climate classification. Hydrology and Earth System Sciences, 11, 1633–1644.",
        url: "https://doi.org/10.5194/hess-11-1633-2007",
    },
];

/* ================= KOMPONEN KECIL ================= */

function P({ children }) {
    return (
        <p className="text-justify text-base leading-8 text-gray-700">
            {children}
        </p>
    );
}

function MateriHeader({ nomor, judul, icon }) {
    return (
        <div className="border-b border-[#e5efed] px-6 py-6 sm:px-10">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl text-[#087b68]">
                    {icon}
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                        Materi {nomor}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                        {judul}
                    </h2>
                </div>
            </div>
        </div>
    );
}

function Callout({ icon, title, children }) {
    return (
        <div className="rounded-2xl border-l-4 border-[#087b68] bg-[#f3f9f8] p-5 sm:p-6">
            <div className="flex items-start gap-3">
                <span className="text-2xl">{icon}</span>
                <div>
                    <h4 className="font-bold text-[#123b49]">{title}</h4>
                    <div className="mt-2 leading-relaxed text-gray-600">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

function GroupBanner({ g }) {
    return (
        <div className="relative overflow-hidden rounded-2xl">
            <img
                src={IMG + g.img}
                alt={g.alt}
                loading="lazy"
                className="h-44 w-full object-cover sm:h-56"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07384b]/85 via-[#07384b]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-5 sm:p-6">
                <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold shadow ${g.badge}`}
                >
                    {g.code}
                </div>
                <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-100">
                        Kelompok {g.code}
                    </p>
                    <h3 className="text-xl font-bold sm:text-2xl">{g.title}</h3>
                    <p className="text-sm text-teal-50">{g.kunci}</p>
                </div>
            </div>
        </div>
    );
}

function SubtipeTable({ headers, rows }) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-[#d4e4e1]">
            <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-[#e1f5ed] text-[#123b49]">
                    <tr>
                        {headers.map((h) => (
                            <th key={h} className="px-4 py-3 font-bold">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr key={r[0]} className="border-t border-[#e5efed] align-top">
                            {r.map((c, i) => (
                                <td
                                    key={i}
                                    className={`px-4 py-3 ${
                                        i === 0
                                            ? "whitespace-nowrap text-lg font-bold text-[#087b68]"
                                            : "leading-relaxed text-gray-700"
                                    }`}
                                >
                                    {c}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Rumus({ label, children }) {
    return (
        <div className="rounded-2xl border border-[#d4e4e1] bg-[#f8fbfa] p-5 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                {label}
            </p>
            <p className="mt-2 text-xl font-semibold text-[#123b49] sm:text-2xl">
                {children}
            </p>
        </div>
    );
}

function Kriteria({ items }) {
    return (
        <ul className="space-y-2">
            {items.map((k, i) => (
                <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-[#f8fbfa] p-3 leading-relaxed text-gray-700"
                >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                        ✓
                    </span>
                    <span>{k}</span>
                </li>
            ))}
        </ul>
    );
}

function Contoh({ data, langkah: steps, hasil }) {
    return (
        <div className="rounded-2xl border border-[#f1dfb9] bg-[#fffaf0] p-5 sm:p-6">
            <div className="flex items-start gap-3">
                <span className="text-2xl">🧮</span>
                <div className="w-full">
                    <h4 className="font-bold text-[#123b49]">Contoh analisis</h4>
                    <p className="mt-2 leading-relaxed text-gray-700">{data}</p>

                    {steps && (
                        <ol className="mt-3 space-y-2">
                            {steps.map((s, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 rounded-xl bg-white/80 p-3 text-gray-700"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                                        {i + 1}
                                    </span>
                                    <span className="leading-relaxed">{s}</span>
                                </li>
                            ))}
                        </ol>
                    )}

                    {hasil && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#087b68] px-4 py-2 font-semibold text-white">
                            <span>Hasil:</span>
                            <span>{hasil}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SkalaAmbang() {
    const titik = [
        { mm: 200, label: "200 mm" },
        { mm: 350, label: "350 mm" },
    ];

    return (
        <div className="rounded-2xl border border-[#d4e4e1] bg-white p-5 sm:p-6">
            <p className="text-sm font-semibold text-gray-500">
                Skala ambang kekeringan (T = 25°C dan C = 0, jadi Pth = 500 mm)
            </p>

            <div className="relative mt-10 pb-8">
                {titik.map((t) => (
                    <div
                        key={t.mm}
                        className="absolute -top-9 flex -translate-x-1/2 flex-col items-center"
                        style={{ left: `${(t.mm / 500) * 100}%` }}
                    >
                        <span className="whitespace-nowrap rounded-md bg-[#123b49] px-2 py-1 text-xs font-semibold text-white">
                            {t.label}
                        </span>
                        <span className="h-3 w-0.5 bg-[#123b49]" />
                    </div>
                ))}

                <div className="flex h-10 overflow-hidden rounded-full text-sm font-bold">
                    <div className="flex w-1/2 items-center justify-center bg-[#f4cf8d] text-[#7a4a05]">
                        BW (gurun)
                    </div>
                    <div className="flex w-1/2 items-center justify-center bg-[#cde7a8] text-[#3d5a12]">
                        BS (stepa)
                    </div>
                </div>

                <div className="relative mt-2 h-5 text-xs text-gray-500">
                    <span className="absolute left-0">0</span>
                    <span className="absolute left-1/2 -translate-x-1/2">
                        250 mm
                    </span>
                    <span className="absolute right-0">500 mm</span>
                </div>
            </div>
        </div>
    );
}

/* ===================== HALAMAN ===================== */

export default function Modul2() {
    return (
        <>
            <Head title="Modul 2: Kriteria Suhu dan Curah Hujan | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <StudentSidebar />

                {/* MAIN CONTENT */}
                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Media Pembelajaran Kelas X
                                </p>
                                <h2 className="mt-1 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Modul 2: Kriteria Suhu dan Curah Hujan
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Memahami unsur iklim yang digunakan dalam klasifikasi Köppen.
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

                    {/* PAGE CONTENT */}
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
                                Modul 2
                            </span>
                        </nav>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pembelajaran 02
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Kriteria Suhu dan Curah Hujan
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Belajar menentukan kelompok dan subtipe iklim Köppen dari angka suhu udara dan curah hujan, lengkap dengan rumus dan contoh hitungan.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌡️ Suhu Udara
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        💧 Curah Hujan
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🧮 Contoh Hitungan
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ⏱️ Estimasi 25 menit
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* ===== MATERI 2.1 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="2.1"
                                icon="🌡️"
                                judul="Konsep Dasar: Suhu Udara dan Curah Hujan"
                            />

                            <div className="space-y-8 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Setiap wilayah mempunyai pola suhu dan curah hujan yang berbeda. Ada wilayah yang panas dan basah sepanjang tahun, wilayah yang kering, wilayah dengan musim dingin, serta wilayah yang sangat dingin sepanjang tahun.
                                </P>

                                <Callout icon="🔁" title="Ingat kembali">
                                    <p>
                                        Di Modul 1 kamu sudah mengenal lima kelompok iklim A sampai E. Sekarang kita memakai angka untuk menentukan kelompok dan subtipenya. Sebelum menganalisis setiap kelompok iklim, pahami dulu dua unsur utama yang digunakan dalam klasifikasi Köppen.
                                    </p>
                                </Callout>

                                {/* SUHU UDARA */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff1d6] text-2xl">
                                            🌡️
                                        </div>
                                        <h3 className="text-xl font-bold text-[#123b49] sm:text-2xl">
                                            A. Suhu Udara
                                        </h3>
                                    </div>

                                    <p className="mt-4 text-justify text-base leading-8 text-gray-700">
                                        Suhu udara menunjukkan tingkat panas atau dinginnya udara. Dalam klasifikasi Köppen, suhu tidak hanya dilihat dari kondisi hari ini, tetapi terutama dari rata-rata suhu bulanan dalam jangka panjang. Dua indikator yang penting adalah:
                                    </p>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-xl bg-[#e8f4fb] p-5">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Indikator 1
                                            </p>
                                            <p className="mt-2 text-3xl font-bold text-[#26718b]">
                                                T<sub className="text-lg">cold</sub> ❄️
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Suhu rata-rata bulan terdingin dalam setahun.
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#fff1d6] p-5">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Indikator 2
                                            </p>
                                            <p className="mt-2 text-3xl font-bold text-[#b0640a]">
                                                T<sub className="text-lg">hot</sub> ☀️
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Suhu rata-rata bulan terpanas dalam setahun.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-2xl border border-[#f1dfb9] bg-[#fffaf0] p-5 sm:p-6">
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl">💡</span>
                                            <div>
                                                <h4 className="font-bold text-[#123b49]">
                                                    Contoh
                                                </h4>
                                                <p className="mt-2 leading-relaxed text-gray-700">
                                                    Jika suhu rata-rata bulan terdingin suatu wilayah adalah 22°C, wilayah tersebut memenuhi kriteria suhu kelompok A, sepanjang kriteria kekeringan kelompok B tidak lebih dahulu terpenuhi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="border-t border-[#e5efed]" />

                                {/* CURAH HUJAN */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4fb] text-2xl">
                                            💧
                                        </div>
                                        <h3 className="text-xl font-bold text-[#123b49] sm:text-2xl">
                                            B. Curah Hujan atau Presipitasi
                                        </h3>
                                    </div>

                                    <p className="mt-4 text-justify text-base leading-8 text-gray-700">
                                        Curah hujan merupakan jumlah air hujan yang jatuh pada suatu tempat dalam periode tertentu, umumnya dinyatakan dalam milimeter (mm). Dalam klasifikasi iklim, presipitasi juga dapat mencakup bentuk air lain, seperti salju yang setara dengan airnya.
                                    </p>

                                    <p className="mt-5 font-semibold text-[#123b49]">
                                        Hal-hal yang perlu dianalisis:
                                    </p>

                                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                        {hujanAnalisis.map((h) => (
                                            <div
                                                key={h.teks}
                                                className="flex items-center gap-3 rounded-xl bg-[#f1f9fd] p-4"
                                            >
                                                <span className="text-2xl">{h.icon}</span>
                                                <p className="leading-relaxed text-gray-700">
                                                    {h.teks}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <Callout icon="❓" title="Mengapa kedua unsur ini penting?">
                                    <p>
                                        Wilayah dengan suhu yang sama belum tentu mempunyai tipe iklim yang sama. Wilayah tropis dengan hujan sepanjang tahun, misalnya, berbeda dari wilayah tropis yang mengalami musim kemarau panjang. Sebaliknya, wilayah yang sama-sama dingin dapat dibedakan berdasarkan suhu musim panasnya.
                                    </p>
                                </Callout>
                            </div>
                        </article>

                        {/* ===== MATERI 2.2 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="2.2"
                                icon="📐"
                                judul="Analisis Kriteria Suhu dan Curah Hujan Setiap Kelompok Iklim"
                            />

                            <div className="space-y-12 px-6 py-7 sm:px-10 sm:py-9">
                                {/* RINGKAS KRITERIA SUHU */}
                                <section>
                                    <P>
                                        Berikut kriteria yang membedakan kelompok A sampai E, lengkap dengan contoh hitungannya. Lihat dulu ringkasan penentu utamanya.
                                    </P>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                                        {penentu.map((p) => (
                                            <div
                                                key={p.code}
                                                className={`rounded-xl p-4 ${p.color}`}
                                            >
                                                <div className="text-3xl font-bold text-[#123b49]">
                                                    {p.code}
                                                </div>
                                                <p className="mt-2 text-sm font-medium leading-relaxed text-gray-700">
                                                    {p.teks}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* KELOMPOK A */}
                                <section className="space-y-5">
                                    <GroupBanner g={grup.A} />

                                    <P>
                                        Suhu rata-rata bulan terdingin minimal 18°C. Curah hujan digunakan untuk membedakan hutan hujan tropis, monsun, dan sabana.
                                    </P>

                                    <SubtipeTable {...tabelA} />

                                    <Rumus label="Ambang monsun (Am)">
                                        P<sub>dry</sub> ≥ 100 − P<sub>annual</sub> / 25
                                    </Rumus>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-xl bg-[#f8fbfa] p-4 text-gray-700">
                                            <strong className="text-[#087b68]">
                                                P<sub>dry</sub>
                                            </strong>{" "}
                                            = curah hujan bulan terkering (mm).
                                        </div>
                                        <div className="rounded-xl bg-[#f8fbfa] p-4 text-gray-700">
                                            <strong className="text-[#087b68]">
                                                P<sub>annual</sub>
                                            </strong>{" "}
                                            = curah hujan tahunan (mm).
                                        </div>
                                    </div>

                                    <p className="leading-relaxed text-gray-600">
                                        Rumus ini digunakan bersama kriteria suhu dan pengecualian Af.
                                    </p>

                                    <Contoh
                                        data="Suatu wilayah mempunyai suhu bulan terdingin 24°C, curah hujan tahunan 2.400 mm, dan curah hujan bulan terkering 80 mm."
                                        langkah={[
                                            "Suhu bulan terdingin 24°C ≥ 18°C, jadi memenuhi kriteria suhu kelompok A.",
                                            "Ambang Am = 100 − 2.400/25 = 100 − 96 = 4 mm.",
                                            "Bulan terkering 80 mm ≥ 60 mm, sehingga memenuhi kriteria Af.",
                                        ]}
                                        hasil="Af, bukan Am"
                                    />

                                    <p className="leading-relaxed text-gray-600">
                                        Ini menunjukkan bahwa klasifikasi tidak cukup ditentukan dari total hujan tahunan saja.
                                    </p>
                                </section>

                                {/* KELOMPOK B */}
                                <section className="space-y-5">
                                    <GroupBanner g={grup.B} />

                                    <P>
                                        Kelompok B berbeda dari kelompok lain karena kekeringan merupakan faktor penentu utamanya. Curah hujan dibandingkan dengan ambang kekeringan yang memperhitungkan suhu rata-rata tahunan dan musim ketika hujan turun.
                                    </P>

                                    <Callout icon="🎯" title="Kriteria utama">
                                        <p>
                                            Curah hujan tahunan harus berada di bawah ambang kekeringan Köppen. Jadi, tidak ada satu batas curah hujan tahunan yang berlaku untuk seluruh wilayah di B.
                                        </p>
                                    </Callout>

                                    <P>
                                        Dalam versi rumus Köppen–Geiger yang umum digunakan, ambang kekeringan dihitung dengan:
                                    </P>

                                    <Rumus label="Ambang kekeringan">
                                        P<sub>th</sub> = 20 × T + C
                                    </Rumus>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-xl bg-[#f8fbfa] p-4 text-gray-700 sm:col-span-2">
                                            <strong className="text-[#087b68]">T</strong> = suhu rata-rata tahunan dalam °C.
                                        </div>
                                        <div className="rounded-xl bg-[#fff3d9] p-4 text-gray-700">
                                            <strong className="text-[#8a5a06]">C = 280</strong>
                                            <p className="mt-1 text-sm">
                                                Jika sedikitnya 70% hujan jatuh pada semester panas.
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-[#fff3d9] p-4 text-gray-700">
                                            <strong className="text-[#8a5a06]">C = 140</strong>
                                            <p className="mt-1 text-sm">
                                                Jika 30–70% hujan jatuh pada semester panas.
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-[#fff3d9] p-4 text-gray-700 sm:col-span-2">
                                            <strong className="text-[#8a5a06]">C = 0</strong>
                                            <p className="mt-1 text-sm">
                                                Jika kurang dari 30% hujan jatuh pada semester panas.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="leading-relaxed text-gray-600">
                                        Nilai P<sub>th</sub> dinyatakan dalam mm per tahun. Semester panas dan dingin ditentukan menurut belahan Bumi dan pola suhu setempat.
                                    </p>

                                    <SubtipeTable {...tabelB} />

                                    <Contoh
                                        data="Suhu rata-rata tahunan suatu wilayah 25°C dan pola hujannya membuat C = 0."
                                        langkah={[
                                            "Pth = 20 × 25 + 0 = 500 mm.",
                                            "Hujan tahunan 200 mm: 200 < 250 mm, sehingga memenuhi kriteria BW.",
                                            "Hujan tahunan 350 mm: 250 ≤ 350 < 500 mm, sehingga memenuhi kriteria BS.",
                                        ]}
                                    />

                                    <SkalaAmbang />

                                    <p className="leading-relaxed text-gray-600">
                                        Keduanya kering, tetapi tingkat kekeringannya berbeda.
                                    </p>

                                    <Callout icon="⚠️" title="Catatan penting">
                                        <p>
                                            Jangan langsung menyimpulkan bahwa semua wilayah dengan hujan kurang dari 500 mm adalah iklim B. Ambang tersebut berubah sesuai suhu dan distribusi musim hujan.
                                        </p>
                                    </Callout>
                                </section>

                                {/* KELOMPOK C */}
                                <section className="space-y-5">
                                    <GroupBanner g={grup.C} />

                                    <P>
                                        Kelompok C umumnya memiliki musim panas yang hangat hingga panas dan musim dingin yang relatif ringan. Curah hujan dapat tersebar sepanjang tahun atau mempunyai musim kering yang jelas.
                                    </P>

                                    <div>
                                        <p className="mb-3 font-semibold text-[#123b49]">
                                            Kriteria utama dalam versi modern Köppen–Geiger:
                                        </p>
                                        <Kriteria
                                            items={[
                                                "Suhu rata-rata bulan terdingin > 0°C dan < 18°C.",
                                                "Suhu rata-rata bulan terpanas > 10°C.",
                                                "Wilayah tidak memenuhi kriteria B.",
                                            ]}
                                        />
                                    </div>

                                    <SubtipeTable {...tabelC} />

                                    <Contoh
                                        data="Sebuah wilayah memiliki suhu bulan terdingin 8°C dan bulan terpanas 26°C. Hujan turun sepanjang tahun tanpa musim kering yang memenuhi ambang s atau w."
                                        langkah={[
                                            "Bulan terdingin 8°C berada di antara 0°C dan 18°C.",
                                            "Bulan terpanas 26°C lebih dari 10°C, sehingga memenuhi kriteria dasar kelompok C.",
                                            "Tidak ada musim kering yang memenuhi s atau w, sehingga subtipe curah hujannya f.",
                                        ]}
                                        hasil="Cf (selama kriteria B tidak terpenuhi)"
                                    />

                                    <Callout icon="❓" title="Mengapa tidak cukup melihat suhu?">
                                        <p>
                                            Dua wilayah dapat memiliki suhu musim dingin yang serupa, tetapi satu mengalami musim panas kering dan yang lain mengalami musim dingin kering. Perbedaan distribusi hujan tersebut dapat menghasilkan kode iklim yang berbeda.
                                        </p>
                                    </Callout>
                                </section>

                                {/* KELOMPOK D */}
                                <section className="space-y-5">
                                    <GroupBanner g={grup.D} />

                                    <P>
                                        Kelompok D umumnya ditemukan di lintang menengah hingga tinggi, terutama pada wilayah daratan yang mengalami perbedaan suhu musim panas dan musim dingin yang besar.
                                    </P>

                                    <div>
                                        <p className="mb-3 font-semibold text-[#123b49]">
                                            Kriteria utama dalam versi modern Köppen–Geiger:
                                        </p>
                                        <Kriteria
                                            items={[
                                                "Suhu rata-rata bulan terdingin ≤ 0°C.",
                                                "Suhu rata-rata bulan terpanas > 10°C.",
                                                "Wilayah tidak memenuhi kriteria B.",
                                            ]}
                                        />
                                    </div>

                                    <P>
                                        Dengan demikian, kelompok D mempunyai musim dingin yang lebih dingin dibandingkan kelompok C, tetapi masih mengalami setidaknya satu bulan dengan suhu rata-rata di atas 10°C.
                                    </P>

                                    <SubtipeTable {...tabelD} />

                                    <P>
                                        Subtipe D juga dapat dibedakan berdasarkan suhu musim panas, misalnya a untuk musim panas panas, b untuk musim panas hangat, dan c untuk musim panas sejuk; versi tertentu juga mengenal d untuk musim dingin yang sangat ekstrem.
                                    </P>

                                    <Contoh
                                        data="Suhu rata-rata bulan terdingin −12°C dan bulan terpanas 23°C."
                                        langkah={[
                                            "−12°C ≤ 0°C dan 23°C > 10°C. Jika wilayah itu tidak memenuhi kriteria B, wilayah itu masuk kelompok D.",
                                            "Hujan tidak menunjukkan musim kering yang memenuhi ambang s atau w, sehingga subtipe curah hujannya f.",
                                        ]}
                                        hasil="Df"
                                    />
                                </section>

                                {/* KELOMPOK E */}
                                <section className="space-y-5">
                                    <GroupBanner g={grup.E} />

                                    <P>
                                        Kelompok E ditemukan terutama di sekitar Arktik dan Antarktika. Suhu sangat rendah sepanjang tahun sehingga musim panasnya pun tidak cukup hangat untuk melampaui batas suhu kelompok ini.
                                    </P>

                                    <div>
                                        <p className="mb-3 font-semibold text-[#123b49]">
                                            Kriteria utama:
                                        </p>
                                        <Kriteria items={["Suhu rata-rata bulan terpanas ≤ 10°C."]} />
                                    </div>

                                    <P>
                                        Kelompok ini dibedakan terutama berdasarkan suhu bulan terpanas, bukan hanya jumlah curah hujan.
                                    </P>

                                    <SubtipeTable {...tabelE} />

                                    <Contoh
                                        data="Wilayah kutub memiliki suhu rata-rata bulan terpanas 5°C."
                                        langkah={[
                                            "5°C ≤ 10°C tetapi 5°C > 0°C, sehingga wilayah tersebut memenuhi kriteria suhu ET.",
                                            "Jika suhu rata-rata bulan terpanasnya −8°C, wilayah itu memenuhi kriteria suhu EF.",
                                        ]}
                                        hasil="ET (5°C) dan EF (−8°C)"
                                    />

                                    <Callout icon="❓" title="Bagaimana dengan curah hujannya?">
                                        <p>
                                            Wilayah kutub sering memiliki presipitasi rendah karena udara dingin dapat menampung lebih sedikit uap air dibandingkan udara hangat. Namun, suhu bulan terpanaslah yang membedakan ET dari EF dalam sistem Köppen–Geiger modern.
                                        </p>
                                    </Callout>
                                </section>
                            </div>
                        </article>

                        {/* ===== MATERI 2.3 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="2.3"
                                icon="📋"
                                judul="Tabel Perbandingan Utama Kelompok Iklim Köppen"
                            />

                            <div className="space-y-5 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Tabel ini dapat digunakan sebagai bahan rangkuman atau lembar belajar.
                                </P>

                                <SubtipeTable {...tabelBanding} />

                                <p className="text-sm leading-relaxed text-gray-500">
                                    Sumber kriteria: Peel et al. (2007); Kottek et al. (2006); NOAA. Ambang kelompok C dan D dapat berbeda pada versi klasifikasi tertentu; tabel ini menggunakan batas 0°C pada versi modern Köppen–Geiger.
                                </p>
                            </div>
                        </article>

                        {/* ===== MATERI 2.4 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="2.4"
                                icon="🧭"
                                judul="Cara Menganalisis Data Iklim secara Sistematis"
                            />

                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Agar tidak sekadar menghafal huruf, gunakan urutan analisis berikut.
                                </P>

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    {langkah.map((l, i) => (
                                        <div
                                            key={l.judul}
                                            className="relative rounded-2xl border border-[#d4e4e1] bg-[#f8fbfa] p-5"
                                        >
                                            <span className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#087b68] text-sm font-bold text-white">
                                                {i + 1}
                                            </span>
                                            <div className="text-3xl">{l.icon}</div>
                                            <h4 className="mt-2 font-bold text-[#123b49]">
                                                {l.judul}
                                            </h4>
                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                {l.isi}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <Callout icon="📌" title="Perlu diingat">
                                    <p>
                                        Urutan tersebut merupakan penyederhanaan untuk pembelajaran. Dalam penerapan ilmiah, semua kriteria dan pengecualian sistem klasifikasi yang dipilih harus diperiksa.
                                    </p>
                                </Callout>
                            </div>
                        </article>

                        {/* ===== KESIMPULAN ===== */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Ringkasan Modul
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Setiap kelompok memiliki indikator pembeda yang berbeda.
                                    </p>
                                </div>
                            </div>

                            <ul className="mt-5 space-y-3">
                                {kesimpulan.map((k) => (
                                    <li
                                        key={k.code}
                                        className="flex items-start gap-3 rounded-xl bg-[#f8fbfa] p-4"
                                    >
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-[#123b49] ${k.color}`}
                                        >
                                            {k.code}
                                        </span>
                                        <p className="leading-relaxed text-gray-700">
                                            {k.teks}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-5 leading-relaxed text-gray-600">
                                Dengan demikian, kamu perlu membaca data suhu dan curah hujan secara bersama-sama. Jumlah hujan tahunan saja atau suhu pada satu hari saja tidak cukup untuk menetapkan klasifikasi iklim.
                            </p>
                        </section>

                        {/* ===== DAFTAR PUSTAKA ===== */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <h3 className="text-xl font-bold text-[#123b49]">
                                Daftar Pustaka
                            </h3>
                            <p className="mt-1 text-gray-600">
                                Sumber ilmiah dan pendidikan yang dapat kamu telusuri.
                            </p>

                            <ol className="mt-5 space-y-3">
                                {pustaka.map((r, i) => (
                                    <li
                                        key={i}
                                        className="rounded-xl bg-[#f8fbfa] p-4 text-sm leading-relaxed text-gray-700"
                                    >
                                        <span className="font-semibold text-[#087b68]">
                                            {i + 1}.{" "}
                                        </span>
                                        {r.teks}{" "}
                                        <a
                                            href={r.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="break-all text-[#087b68] underline hover:text-[#066455]"
                                        >
                                            {r.url}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* SELESAIKAN MODUL */}
                        <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">
                            <CompleteModuleButton moduleNumber={2} />
                        </div>

                        {/* NAVIGASI MODUL */}
                        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                            <Link
                                href={route("student.modul1")}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Modul Sebelumnya
                            </Link>

                            <Link
                                                            href={route("student.modul3")}
                                                            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#065f50]"
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