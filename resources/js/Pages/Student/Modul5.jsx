import { Fragment } from "react";
import { Head, Link } from "@inertiajs/react";
import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

/* =====================================================================
   GAMBAR
   Simpan semua gambar di: public/images/modul5
   ===================================================================== */
const IMG = "/images/modul5";

/* =====================================================================
   HELPER KECIL
   ===================================================================== */

// Mengubah **teks** menjadi <strong>teks</strong>
function rich(text) {
    return String(text)
        .split(/(\*\*[^*]+\*\*)/g)
        .map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
                <strong key={i} className="font-semibold text-[#123b49]">
                    {part.slice(2, -2)}
                </strong>
            ) : (
                <span key={i}>{part}</span>
            ),
        );
}

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

const fmtTemp = (n) => n.toFixed(1).replace(".", ",").replace("-", "−");

function SectionHeading({ id, letter, title, subtitle }) {
    return (
        <div id={id} className="mb-5 flex scroll-mt-6 items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#087b68] text-lg font-bold text-white">
                {letter}
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#123b49] sm:text-2xl">
                    {title}
                </h3>
                {subtitle && (
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                        {rich(subtitle)}
                    </p>
                )}
            </div>
        </div>
    );
}

function Card({ children, className = "" }) {
    return (
        <section
            className={`mb-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}
        >
            {children}
        </section>
    );
}

function SubHeading({ children }) {
    return (
        <h4 className="mb-3 mt-6 text-base font-bold text-[#123b49] first:mt-0">
            {children}
        </h4>
    );
}

function Para({ children, className = "" }) {
    return (
        <p className={`mt-3 text-sm leading-7 text-slate-600 ${className}`}>
            {typeof children === "string" ? rich(children) : children}
        </p>
    );
}

function NumberedList({ items }) {
    return (
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-600">
            {items.map((item, i) => (
                <li key={i}>{rich(item)}</li>
            ))}
        </ol>
    );
}

const TONES = {
    teal: "border-teal-200 bg-teal-50 text-teal-900",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    lime: "border-lime-200 bg-lime-50 text-lime-900",
    sky: "border-sky-200 bg-sky-50 text-sky-900",
};

function Callout({ title, tone = "teal", icon, children }) {
    return (
        <div
            className={`mt-5 rounded-2xl border p-5 ${TONES[tone] ?? TONES.teal}`}
        >
            <p className="flex items-center gap-2 text-sm font-bold">
                {icon && <span>{icon}</span>}
                {title}
            </p>
            <div className="mt-2 space-y-2 text-sm leading-6">{children}</div>
        </div>
    );
}

function Figure({ src, caption, narrow = false }) {
    return (
        <figure className="mt-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                <img
                    src={`${IMG}/${src}`}
                    alt={caption}
                    loading="lazy"
                    className={`mx-auto h-auto w-full ${narrow ? "max-w-xl" : ""}`}
                />
            </div>
            <figcaption className="mt-2 text-center text-xs italic text-slate-500">
                {caption}
            </figcaption>
        </figure>
    );
}

// Tabel umum (header + baris), bisa digulir ke samping di layar kecil
function SimpleTable({ head, rows, caption }) {
    return (
        <div className="mt-4">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                    <thead className="bg-[#e7f4f1] text-[#123b49]">
                        <tr>
                            {head.map((h, i) => (
                                <th
                                    key={i}
                                    className="px-4 py-3 text-xs font-bold uppercase tracking-wide"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                        {rows.map((row, r) => (
                            <tr key={r} className="align-top">
                                {row.map((cell, c) => (
                                    <td
                                        key={c}
                                        className="px-4 py-3 leading-6"
                                    >
                                        {Array.isArray(cell)
                                            ? cell.map((line, l) => (
                                                  <div
                                                      key={l}
                                                      className={l ? "mt-1.5" : ""}
                                                  >
                                                      {rich(line)}
                                                  </div>
                                              ))
                                            : rich(cell)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {caption && (
                <p className="mt-2 text-xs italic text-slate-500">{caption}</p>
            )}
        </div>
    );
}

// Tabel data iklim 12 bulan
function ClimateTable({ city, temp, rain }) {
    return (
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[760px] border-collapse text-center text-sm">
                <thead className="bg-[#123b49] text-white">
                    <tr>
                        <th className="px-3 py-2.5 text-left text-xs font-bold">
                            {city}
                        </th>
                        {MONTHS.map((m) => (
                            <th key={m} className="px-2 py-2.5 text-xs font-bold">
                                {m}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    <tr className="bg-orange-50">
                        <td className="px-3 py-2.5 text-left text-xs font-bold text-orange-800">
                            Suhu (°C)
                        </td>
                        {temp.map((t, i) => (
                            <td key={i} className="px-2 py-2.5">
                                {fmtTemp(t)}
                            </td>
                        ))}
                    </tr>
                    <tr className="bg-sky-50">
                        <td className="px-3 py-2.5 text-left text-xs font-bold text-sky-800">
                            Hujan (mm)
                        </td>
                        {rain.map((r, i) => (
                            <td key={i} className="px-2 py-2.5">
                                {r}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// Tabel data kota misteri (nama kota + 2 baris)
function MysteryTable({ cities }) {
    return (
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[760px] border-collapse text-center text-sm">
                <thead className="bg-[#123b49] text-white">
                    <tr>
                        <th className="px-3 py-2.5 text-left text-xs font-bold">
                            Kota
                        </th>
                        <th className="px-3 py-2.5 text-left text-xs font-bold">
                            Data
                        </th>
                        {MONTHS.map((m) => (
                            <th key={m} className="px-2 py-2.5 text-xs font-bold">
                                {m}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    {cities.map((c) => (
                        <Fragment key={c.name}>
                            <tr className="border-t border-slate-200 bg-orange-50">
                                <td
                                    rowSpan={2}
                                    className="px-3 py-2.5 text-left text-sm font-bold text-[#123b49]"
                                >
                                    {c.name}
                                </td>
                                <td className="px-3 py-2.5 text-left text-xs font-bold text-orange-800">
                                    Suhu (°C)
                                </td>
                                {c.temp.map((t, i) => (
                                    <td key={i} className="px-2 py-2.5">
                                        {fmtTemp(t)}
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-sky-50">
                                <td className="px-3 py-2.5 text-left text-xs font-bold text-sky-800">
                                    Hujan (mm)
                                </td>
                                {c.rain.map((r, i) => (
                                    <td key={i} className="px-2 py-2.5">
                                        {r}
                                    </td>
                                ))}
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Dialog Siswa ↔ KoppenBot. Tiap item: [pembicara, ...paragraf]
function Dialogue({ lines }) {
    return (
        <div className="mt-5 space-y-3 rounded-2xl border border-teal-100 bg-[#f3f9f8] p-4 sm:p-5">
            {lines.map(([who, ...paras], i) => {
                const isBot = who === "bot";
                return (
                    <div
                        key={i}
                        className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}
                    >
                        <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base ${
                                isBot ? "bg-[#087b68] text-white" : "bg-white text-[#123b49] shadow-sm"
                            }`}
                            aria-hidden="true"
                        >
                            {isBot ? "🤖" : "🧑‍🎓"}
                        </div>
                        <div
                            className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                                isBot
                                    ? "rounded-tl-sm bg-white text-slate-700"
                                    : "rounded-tr-sm bg-lime-100 text-slate-800"
                            }`}
                        >
                            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#087b68]">
                                {isBot ? "KoppenBot" : "Siswa"}
                            </p>
                            {paras.map((p, j) => (
                                <p key={j} className={j ? "mt-2" : ""}>
                                    {rich(p)}
                                </p>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function CaseTitle({ n, title, badge }) {
    return (
        <div className="mb-1 mt-8 flex flex-wrap items-center gap-3 first:mt-0">
            <span className="rounded-full bg-[#123b49] px-3 py-1 text-xs font-bold text-lime-200">
                KASUS {n}
            </span>
            <h4 className="text-base font-bold text-[#123b49] sm:text-lg">
                {title}
            </h4>
            {badge && (
                <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-900">
                    {badge}
                </span>
            )}
        </div>
    );
}

function Collapsible({ summary, children }) {
    return (
        <details className="group mt-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-5 py-4 text-sm font-bold text-[#087b68] transition hover:bg-[#f3f9f8]">
                {summary}
                <span className="text-lg transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="border-t border-slate-100 px-5 pb-5 pt-2">
                {children}
            </div>
        </details>
    );
}

/* =====================================================================
   DATA ISI MODUL
   ===================================================================== */

const infoRows = [
    ["Mata pelajaran", "Geografi (SMA/MA)"],
    ["Topik", "Klasifikasi iklim Köppen–Geiger"],
    [
        "Studi kasus",
        [
            "**Indonesia:** Pontianak, Jakarta, Surabaya, Kupang, Dieng",
            "**Dunia:** Kairo, Roma, London, Moskow, Utqiagvik",
        ],
    ],
    [
        "Model pembelajaran",
        "Simulasi tanya-jawab dengan chatbot (KoppenBot) + latihan menghitung",
    ],
    [
        "Saran alokasi waktu",
        "2 × 45 menit (dapat dipecah menjadi 2 pertemuan)",
    ],
    ["Disusun untuk", "Guru dan peserta didik"],
];

// Urutan pengujian disamakan dengan Modul 4: E, B, A, lalu C/D
const steps = [
    {
        number: "01",
        title: "Cek suhu bulan terpanas (kelompok E)",
        description:
            "Jika suhu bulan terpanas (Thot) < 10 °C, wilayah itu masuk kelompok E (kutub): ET (tundra) jika Thot > 0 °C, atau EF (es abadi) jika Thot ≤ 0 °C.",
        icon: "🧊",
    },
    {
        number: "02",
        title: "Cek apakah wilayah kering (kelompok B)",
        description:
            "Jika bukan E, hitung ambang kering (Pthreshold). Bila curah hujan tahunan (MAP) < 10 × Pthreshold, wilayah itu masuk kelompok B (kering).",
        icon: "🌵",
    },
    {
        number: "03",
        title: "Cek suhu bulan terdingin (kelompok A)",
        description:
            "Jika bukan E dan bukan B, lalu suhu bulan terdingin ≥ 18 °C, wilayah itu masuk kelompok A (tropis). Lanjutkan dengan memeriksa bulan terkering untuk menentukan Af, Am, atau Aw.",
        icon: "🌡️",
    },
    {
        number: "04",
        title: "Pisahkan kelompok C dan D",
        description:
            "Jika bukan E, B, atau A: suhu bulan terdingin > 0 °C berarti kelompok C (sedang), sedangkan ≤ 0 °C berarti kelompok D (benua).",
        icon: "❄️",
    },
    {
        number: "05",
        title: "Tentukan huruf kedua dan ketiga",
        description:
            "Huruf kedua menunjukkan pola hujan (f, s, w, atau m untuk A), huruf ketiga menunjukkan suhu (a, b, c, atau h/k untuk B).",
        icon: "🔤",
    },
];

const symbols = [
    ["MAT", "Suhu rata-rata tahunan (°C)", "Rata-rata 12 suhu bulanan"],
    ["MAP", "Curah hujan tahunan (mm)", "Jumlah 12 curah hujan bulanan"],
    ["Thot / Tcold", "Suhu bulan terpanas / terdingin", "Nilai terbesar / terkecil dari 12 suhu"],
    ["Tmon10", "Jumlah bulan dengan suhu ≥ 10 °C", "Hitung bulan yang suhunya 10 °C atau lebih"],
    ["Pdry", "Curah hujan bulan terkering", "Nilai terkecil dari 12 curah hujan"],
    ["Psdry / Pswet", "Hujan bulan terkering / terbasah pada musim panas*", "Terkecil / terbesar pada bulan musim panas"],
    ["Pwdry / Pwwet", "Hujan bulan terkering / terbasah pada musim dingin*", "Terkecil / terbesar pada bulan musim dingin"],
    ["Pthreshold", "Ambang kering (mm)", "Lihat rumus di bawah"],
];

const letterRows = [
    [
        "**A** (tropis)",
        [
            "**f:** bulan terkering ≥ 60 mm (Af)",
            "**m:** ada bulan kering, tetapi terkompensasi hujan lebat, Pdry ≥ 100 − MAP/25 (Am)",
            "**w:** musim kering jelas, Pdry < 100 − MAP/25 (Aw)",
        ],
        "tidak dipakai",
    ],
    [
        "**B** (kering)",
        [
            "**W:** gurun, MAP < 5 × Pthreshold",
            "**S:** stepa, MAP antara 5 dan 10 × Pthreshold",
        ],
        ["**h:** panas, MAT ≥ 18 °C", "**k:** dingin, MAT < 18 °C"],
    ],
    [
        "**C** dan **D**",
        [
            "**s:** kering di musim panas, Psdry < 40 mm dan Psdry < Pwwet/3",
            "**w:** kering di musim dingin, Pwdry < Pswet/10",
            "**f:** tidak ada musim kering",
        ],
        [
            "**a:** musim panas panas, Thot ≥ 22 °C",
            "**b:** hangat, Thot < 22 °C dan Tmon10 ≥ 4",
            "**c:** sejuk, hanya 1 sampai 3 bulan ≥ 10 °C",
            "(d pada D: Tcold < −38 °C)",
        ],
    ],
    [
        "**E** (kutub)",
        [
            "**T:** tundra, Thot antara 0 dan 10 °C",
            "**F:** es abadi, Thot ≤ 0 °C",
        ],
        "tidak dipakai",
    ],
];

/* ---------- Dialog ---------- */

const dialog1 = [
    ["siswa", "KoppenBot, aku bingung. Katanya iklim Köppen itu pakai huruf-huruf kayak Af, Cfb. Itu maksudnya apa?"],
    [
        "bot",
        "Pertanyaan bagus. Kode itu seperti “plat nomor” iklim. Huruf **pertama** menunjukkan kelompok besar (A sampai E). Huruf **kedua** menunjukkan pola hujan. Huruf **ketiga** menunjukkan suhu.",
        "Contoh: **Cfb** artinya C = sedang, f = tidak ada musim kering, b = musim panas hangat.",
    ],
    ["siswa", "Terus, dari mana tahu sebuah kota masuk huruf yang mana?"],
    [
        "bot",
        "Dari data 12 bulan. Aku hanya butuh suhu dan curah hujan tiap bulan. Aturan resminya menguji kelompok secara berurutan: **E dulu, lalu B, lalu A**, baru C atau D (lihat alur pada Gambar 1).",
        "Untuk kota-kota Indonesia yang jelas hangat dan basah, E dan B pasti tidak terpenuhi, jadi di dialog berikutnya aku langsung menunjukkan hasil ujinya dari **suhu bulan terdingin**. Kalau ≥ 18 °C, kota itu kelompok **A (tropis)**.",
        "Mau coba dengan kota di Indonesia dulu?",
    ],
    ["siswa", "Boleh. Ayo!"],
];

const jakarta = {
    temp: [26.6, 26.7, 27.0, 27.4, 27.5, 27.2, 27.0, 27.2, 27.5, 27.7, 27.5, 27.0],
    rain: [300, 300, 210, 150, 120, 95, 65, 45, 65, 100, 135, 190],
};
const pontianak = {
    temp: [26.4, 26.6, 27.0, 27.3, 27.5, 27.2, 27.0, 27.0, 26.9, 26.9, 26.8, 26.6],
    rain: [260, 190, 240, 290, 260, 200, 180, 220, 270, 330, 400, 340],
};
const surabaya = {
    temp: [27.5, 27.6, 27.7, 28.0, 28.1, 27.5, 27.0, 27.0, 27.8, 28.5, 28.7, 28.0],
    rain: [310, 290, 230, 140, 100, 70, 25, 10, 15, 45, 130, 250],
};
const kupang = {
    temp: [27.8, 27.6, 27.6, 27.8, 27.5, 26.8, 26.2, 26.5, 27.5, 28.7, 29.0, 28.4],
    rain: [380, 340, 270, 100, 40, 25, 10, 5, 5, 30, 110, 280],
};
const dieng = {
    temp: [13.0, 13.2, 13.5, 13.8, 13.5, 12.8, 12.2, 12.5, 13.3, 14.2, 14.0, 13.5],
    rain: [400, 380, 350, 250, 150, 80, 60, 50, 100, 220, 320, 400],
};
const kairo = {
    temp: [14.0, 15.5, 18.0, 22.0, 26.0, 28.5, 29.5, 29.5, 27.5, 24.5, 20.0, 15.5],
    rain: [5, 4, 4, 1, 1, 0, 0, 0, 0, 1, 3, 6],
};
const roma = {
    temp: [8.0, 9.0, 11.5, 14.5, 19.0, 23.0, 26.0, 26.0, 22.0, 18.0, 13.0, 9.0],
    rain: [70, 65, 60, 70, 50, 30, 20, 25, 70, 110, 110, 85],
};
const london = {
    temp: [5.0, 5.5, 7.5, 9.8, 13.5, 16.5, 19.0, 18.5, 15.5, 12.0, 8.0, 5.5],
    rain: [55, 40, 40, 45, 50, 50, 45, 50, 50, 70, 65, 55],
};
const moskow = {
    temp: [-6.5, -6.0, -1.0, 6.5, 13.0, 17.0, 19.0, 17.0, 11.5, 5.5, -0.5, -5.0],
    rain: [45, 35, 35, 40, 55, 80, 90, 80, 70, 65, 50, 50],
};
const utqiagvik = {
    temp: [-26.0, -27.0, -26.0, -18.0, -7.0, 2.0, 4.5, 3.5, -1.0, -9.0, -19.0, -24.0],
    rain: [8, 7, 6, 6, 7, 12, 25, 28, 22, 17, 10, 8],
};

const dialogJakarta = [
    ["siswa", "KoppenBot, aku dapat data Jakarta. Suhunya antara 26,6 sampai 27,7 °C. Hujannya paling sedikit 45 mm di bulan Agustus. Tipe iklimnya apa?"],
    [
        "bot",
        "Kita jalan pelan-pelan ya.",
        "**Langkah 1.** Suhu bulan terdingin Jakarta = 26,6 °C. Apakah ≥ 18 °C? **Ya**, jadi kelompok **A (tropis)**.",
        "**Langkah 2.** Cek bulan terkering. Pdry = 45 mm. Apakah ≥ 60 mm? **Tidak**, jadi bukan Af.",
    ],
    ["siswa", "Berarti Aw dong? Soalnya ada bulan kering."],
    ["bot", "Hampir! Jangan buru-buru. Ada satu tipe lagi di tengah-tengahnya, yaitu **Am (monsun)**. Kita uji dengan rumus."],
    [
        "bot",
        "**Langkah 3.** Hitung MAP = 1.775 mm. Ambang = 100 − MAP/25 = 100 − 71 = **29 mm**.",
        "Pdry = 45 mm dan ambang Am/Aw = 29 mm. Karena 45 ≥ 29, data latihan ini memenuhi kriteria Am (tropis monsun), bukan Aw. Rumus tersebut menunjukkan bahwa curah hujan pada bulan-bulan lain cukup besar untuk memenuhi kriteria Am; jangan menganggap satu rumus ini sebagai jaminan bahwa setiap lokasi pasti memiliki vegetasi yang sama.",
    ],
    ["siswa", "Jadi kalau Pdry-nya kurang dari 29 baru Aw?"],
    ["bot", "Tepat. Untuk Jakarta batasnya 29 mm. Kalau bulan terkering hanya 20 mm, misalnya, kita masuk **Aw**. Batas ini berbeda-beda untuk tiap kota karena bergantung pada MAP."],
];

const dialogPontianak = [
    ["siswa", "Sekarang Pontianak. Kota ini dilewati garis khatulistiwa, kan?"],
    [
        "bot",
        "Betul, Pontianak sangat dekat dengan ekuator. Ayo hitung.",
        "**Langkah 1.** Suhu terdingin 26,4 °C ≥ 18 °C, jadi **A**.",
        "**Langkah 2.** Bulan terkering = Juli, 180 mm. Apakah ≥ 60 mm? **Ya**, bahkan jauh di atasnya. Setiap bulan basah, jadi **Af (hutan hujan tropis)**.",
        "Di klimatogram, seluruh nilai curah hujan bulanan Pontianak berada di atas garis 60 mm. Karena bulan terkeringnya 180 mm, Pontianak memenuhi kriteria Af pada data latihan ini.",
    ],
];

const dialogSurabaya = [
    ["siswa", "Aku tinggal di Surabaya. Kalau Agustus rasanya kering banget. Kota ini tipe apa?"],
    [
        "bot",
        "Mari kita buktikan dengan angka.",
        "**Langkah 1.** Suhu terdingin 27,0 °C, jadi **A**.",
        "**Langkah 2.** Bulan terkering = Agustus, 10 mm. Kurang dari 60 mm, jadi bukan Af.",
        "**Langkah 3.** MAP = 1.615 mm, sehingga ambang = 100 − 1.615/25 = 100 − 64,6 = **35,4 mm**. Pdry kita 10 mm, dan **10 < 35,4**. Artinya musim keringnya nyata dan hujan lainnya tidak cukup “menolong”. Kesimpulan: **Aw (tropis basah-kering / savana)**.",
    ],
    ["siswa", "Kalau Kupang? Katanya lebih kering lagi."],
];

const dialogKupang = [
    [
        "bot",
        "Betul. Di Kupang, bulan terkering (Agustus dan September) hanya sekitar 5 mm. MAP = 1.595 mm, ambang = 100 − 63,8 = 36,2 mm. Karena 5 < 36,2, hasilnya juga **Aw**.",
        "Perbedaan penting dengan Surabaya: **musim keringnya lebih panjang dan lebih tegas**. Lihat berapa banyak batang yang berada di bawah garis merah: di Kupang ada 6 bulan (Mei–Oktober), di Surabaya sekitar 4 bulan (Juli–Oktober). Satu tipe iklim yang sama tetap bisa punya “karakter” berbeda.",
    ],
];

const dialogDieng = [
    ["siswa", "Dieng itu kan di Jawa Tengah, masih Indonesia, masih dekat khatulistiwa. Pasti A, kan?"],
    [
        "bot",
        "Jebakan klasik! Mari kita uji, bukan menebak.",
        "**Langkah 1.** Suhu bulan terdingin Dieng = 12,2 °C. Apakah ≥ 18 °C? **Tidak**. Jadi bukan A. Letak lintang saja tidak cukup; **ketinggian** menurunkan suhu.",
        "**Langkah 2.** Apakah kering? MAT = 13,3 °C. Hujan jatuh sekitar 75% di Oktober–Maret (musim panas belahan selatan), jadi Pthreshold = 2 × 13,3 + 28 = 54,6. Sepuluh kali itu = 546 mm, sedangkan MAP = 2.760 mm. Jauh di atas, jadi **bukan B**.",
        "**Langkah 3.** Thot = 14,2 °C > 10 °C, jadi bukan E. Tcold = 12,2 °C > 0 °C, jadi kelompok **C**.",
    ],
    ["siswa", "Terus huruf kedua dan ketiganya?"],
    [
        "bot",
        "**Huruf ke-2.** Bulan terkering di musim dingin (Apr–Sep) = 50 mm. Syarat w: Pwdry < Pswet/10 = 400/10 = 40. Karena 50 > 40, tidak kering ⇒ **f**.",
        "**Huruf ke-3.** Thot = 14,2 °C < 22 °C, dan semua 12 bulan ≥ 10 °C (Tmon10 = 12 ≥ 4) ⇒ **b**.",
        "Kesimpulan: **Cfb**. Peta Köppen–Geiger beresolusi tinggi memang dibuat agar lebih teliti di wilayah dengan perbedaan ketinggian yang tajam (Beck dkk., 2018).",
    ],
];

const dialogKairo = [
    ["siswa", "Kairo itu gurun, kan? Tapi gimana buktinya pakai angka?"],
    [
        "bot",
        "**Langkah 1.** Suhu terdingin 14 °C < 18 °C, jadi bukan A.",
        "**Langkah 2.** Cek kering. MAT = 22,5 °C. Hujan di Kairo hampir semuanya jatuh pada musim dingin (Oktober–Maret), jadi aturan “musim dingin” berlaku: Pthreshold = 2 × MAT = 45.",
        "Gurun jika MAP < 5 × Pthreshold = 225 mm. Kairo hanya sekitar **25 mm** per tahun, jauh di bawahnya ⇒ **BW**.",
        "**Huruf ke-3.** MAT 22,5 °C ≥ 18 °C ⇒ **h (panas)**. Kesimpulan: **BWh (gurun panas)**.",
    ],
];

const dialogRoma = [
    ["siswa", "Roma ini kebalikannya Indonesia, ya? Musim panasnya yang kering?"],
    [
        "bot",
        "Betul sekali. Ayo cek.",
        "**Langkah 1.** Tcold = 8 °C: bukan A. **Langkah 2.** MAP = 765 mm. Hujan musim panas (Apr–Sep) = 265 mm atau sekitar 35%, jadi Pthreshold = 2 × 16,6 + 14 = 47,2. Sepuluh kali itu = 472 mm < 765 mm, jadi **bukan B**.",
        "**Langkah 3.** Thot = 26 °C > 10 °C: bukan E. Tcold = 8 °C > 0 °C: kelompok **C**.",
        "**Huruf ke-2.** Bulan terkering musim panas (Jul) = 20 mm. Syarat s: Psdry < 40 dan Psdry < Pwwet/3. Pwwet = 110 mm, jadi 110/3 = 36,7. Karena 20 < 40 dan 20 < 36,7 ⇒ **s**.",
        "**Huruf ke-3.** Thot = 26 °C ≥ 22 °C ⇒ **a**. Kesimpulan: **Csa (Mediterania, musim panas panas dan kering)**.",
    ],
];

const dialogLondon = [
    ["siswa", "London terkenal hujan terus. Apakah itu berarti beda dari Roma di hurufnya?"],
    [
        "bot",
        "Persis. **Langkah 1–3** serupa dengan Roma: Tcold = 5 °C, bukan A. MAP = 615 mm, hujan musim panas ≈ 47%, jadi Pthreshold = 2 × 11,4 + 14 = 36,7, dan 10 × 36,7 = 367 < 615, jadi bukan B. Thot = 19 °C > 10 °C dan Tcold > 0 °C ⇒ **C**.",
        "**Huruf ke-2.** Bulan terkering musim panas = 45 mm. Syarat s butuh Psdry < 40, jadi **tidak terpenuhi**. Musim dingin juga tidak kering. Hujan merata ⇒ **f**.",
        "**Huruf ke-3.** Thot = 19 °C < 22 °C, dan ada 6 bulan ≥ 10 °C (Tmon10 = 6 ≥ 4) ⇒ **b**. Kesimpulan: **Cfb**.",
        "Dieng dan London sama-sama Cfb. Sebabnya berbeda (ketinggian vs lintang tinggi), tetapi **kriterianya sama**. Itulah kekuatan klasifikasi berbasis angka.",
    ],
];

const dialogMoskow = [
    [
        "bot",
        "**Langkah 1.** Tcold = −6,5 °C: bukan A. MAP = 695 mm, hujan musim panas ≈ 60%, jadi Pthreshold = 2 × 5,9 + 14 = 25,8; 10 × 25,8 = 258 < 695, jadi bukan B.",
        "**Langkah 3.** Thot = 19 °C > 10 °C: bukan E. **Langkah 4.** Tcold = −6,5 °C ≤ 0 °C ⇒ kelompok **D (benua)**.",
        "**Huruf ke-2.** Psdry = 40 mm (tidak kurang dari 40) dan musim dingin tidak sangat kering ⇒ **f**. **Huruf ke-3.** Thot = 19 °C < 22 °C, Tmon10 = 5 ≥ 4 ⇒ **b**. Kesimpulan: **Dfb**.",
    ],
    ["siswa", "Jadi bedanya Moskow dan London itu cuma di bulan terdingin di bawah nol?"],
    ["bot", "Itu pembeda **utama** pada huruf pertama: London tidak pernah turun di bawah 0 °C pada rata-rata bulanan sehingga C, Moskow turun ke −6,5 °C sehingga D."],
];

const dialogUtqiagvik = [
    [
        "bot",
        "Di sini pertanyaan pertama (uji E) sudah cukup menentukan: **Thot = 4,5 °C < 10 °C ⇒ kelompok E (kutub)**. Karena Thot > 0 °C, jenisnya **ET (tundra)**. Jika Thot ≤ 0 °C sepanjang tahun, namanya EF (es abadi).",
        "Perhatikan juga bahwa MAP-nya hanya sekitar 156 mm, tetapi **bukan gurun** menurut Köppen. Karena E diuji lebih dulu, kelompok B tidak perlu diperiksa lagi. Pada suhu serendah itu, penguapan juga sangat kecil sehingga ambang kering menjadi sangat rendah.",
    ],
];

const dialogIndonesiaA1 = [
    ["siswa", "KoppenBot, kenapa kota-kota Indonesia kebanyakan masuk A?"],
    [
        "bot",
        "Tiga alasan utama:",
        "**1. Letak di sekitar ekuator.** Sinar matahari datang hampir tegak lurus sepanjang tahun, sehingga suhu tinggi dan nyaris tidak berubah antarbulan. Syarat A (bulan terdingin ≥ 18 °C) mudah terpenuhi di dataran rendah.",
        "**2. Letak maritim.** Indonesia adalah negara kepulauan di antara dua benua dan dua samudra. Laut menyuplai uap air, sehingga hujan banyak. Karena itulah variasi iklim di Indonesia ditentukan terutama oleh hujan, bukan suhu.",
        "**3. Angin muson.** Perubahan arah angin musiman membuat sebagian wilayah punya musim hujan dan musim kemarau yang jelas. Wilayah yang lebih dekat ke Australia, seperti Nusa Tenggara, cenderung punya musim kemarau lebih panjang sehingga masuk Aw.",
    ],
    ["siswa", "Kalau Dieng bisa C, berarti ada juga tempat di Indonesia yang D atau E?"],
    [
        "bot",
        "Pertanyaan tajam! Syarat D adalah bulan terdingin ≤ 0 °C. Rata-rata bulanan sekecil itu tidak terjadi di Indonesia. Namun, pada puncak tertinggi tertentu, suhu bisa turun sangat rendah. Skala peta dunia biasanya terlalu kasar untuk memperlihatkannya, sedangkan peta beresolusi 1 km seperti Beck dkk. (2018) bisa menangkap lebih banyak detail pegunungan.",
        "Untuk **proyek kelas**, kamu bisa mengunduh peta tersebut dan mencari wilayah tempat tinggalmu (alamat di daftar pustaka).",
    ],
];

const summaryIndonesia = [
    ["Pontianak", "26,4", "3.180", "180", "tidak perlu (≥ 60)", "**Af**"],
    ["Jakarta", "26,6", "1.775", "45", "29,0", "**Am**"],
    ["Surabaya", "27,0", "1.615", "10", "35,4", "**Aw**"],
    ["Kupang", "26,2", "1.595", "5", "36,2", "**Aw**"],
    ["Dieng", "12,2", "2.760", "50", "tidak berlaku (bukan A)", "**Cfb**"],
];

const summaryWorld = [
    ["Kairo", "14,0", "29,5", "25", "MAP < 5 × Pth; MAT ≥ 18", "**BWh**"],
    ["Roma", "8,0", "26,0", "765", "C; Psdry 20 mm; Thot ≥ 22", "**Csa**"],
    ["London", "5,0", "19,0", "615", "C; tidak kering; Tmon10 = 6", "**Cfb**"],
    ["Moskow", "−6,5", "19,0", "695", "D; tidak kering; Tmon10 = 5", "**Dfb**"],
    ["Utqiagvik", "−27,0", "4,5", "156", "Thot < 10 °C", "**ET**"],
];

const discussion = [
    "Mengapa tipe iklim dua kota yang sama-sama berada dekat ekuator (misalnya Pontianak dan Kupang) bisa berbeda?",
    "Bagaimana tipe iklim (Af, Am, Aw) berkaitan dengan jenis vegetasi dan pertanian di daerah tersebut?",
    "Jika suhu rata-rata dunia naik, kota mana dalam bahan ajar ini yang paling mungkin berpindah tipe iklim? Beri alasan berdasarkan kriteria.",
];

const activitySteps = [
    "Bentuk kelompok 3 orang: **Penanya**, **KoppenBot**, dan **Pemeriksa**.",
    "Penanya memilih satu kota (dari Bagian C atau D, atau “Kota Misteri” di Bagian G) dan membacakan data 12 bulannya.",
    "KoppenBot menjawab dengan **pola tanya-jawab bertahap** seperti pada dialog, lengkap dengan hitungan.",
    "Pemeriksa mengecek setiap langkah memakai alur (Gambar 1) dan memberi tanda centang atau silang.",
    "Tukar peran sampai setiap anggota pernah menjadi KoppenBot.",
    "Presentasikan satu kasus paling menarik di depan kelas.",
];

const worksheet = [
    ["1", "Thot < 10 °C ? (kelompok E)"],
    ["2", "MAP < 10 × Pthreshold ? (hitung Pthreshold dulu; kelompok B)"],
    ["3", "Tcold ≥ 18 °C ? (kelompok A)"],
    ["4", "Tcold > 0 °C ? (C atau D)"],
    ["5", "Huruf ke-2 (f / s / w, atau f / m / w untuk A)"],
    ["6", "Huruf ke-3 (a / b / c, atau h / k untuk B)"],
    ["", "**Tipe iklim akhir**"],
];

/* ---------- Soal ---------- */

const mcq = [
    {
        q: "Syarat utama sebuah wilayah masuk kelompok iklim A (tropis) menurut Köppen adalah ...",
        opts: [
            "Curah hujan tahunan lebih dari 2.000 mm",
            "Suhu bulan terdingin ≥ 18 °C",
            "Suhu bulan terpanas > 22 °C",
            "Tidak ada bulan dengan hujan di bawah 100 mm",
        ],
        key: "B",
        why: "Kelompok A hanya ditentukan oleh suhu: bulan terdingin ≥ 18 °C (Peel dkk., 2007). Hujan baru dipakai untuk memilah Af, Am, dan Aw.",
    },
    {
        q: "Suatu kota tropis memiliki bulan terkering dengan curah hujan 120 mm. Tipe iklimnya adalah ...",
        opts: ["Af", "Am", "Aw", "BSh"],
        key: "A",
        why: "Pdry = 120 mm ≥ 60 mm, jadi setiap bulan basah ⇒ Af.",
    },
    {
        q: "Kota Beta memiliki Tcold = 27,0 °C, MAP = 1.570 mm, dan Pdry = 45 mm. Tipe iklimnya adalah ...",
        opts: ["Af", "Am", "Aw", "Cfb"],
        key: "B",
        why: "Pdry (45) < 60 ⇒ bukan Af. Ambang = 100 − 1.570/25 = 37,2. Karena 45 ≥ 37,2 ⇒ Am.",
    },
    {
        q: "Pada kode Csa, huruf “s” berarti ...",
        opts: [
            "Musim dingin kering",
            "Musim panas kering",
            "Tidak ada musim kering",
            "Suhu sangat dingin",
        ],
        key: "B",
        why: "s = dry summer (musim panas kering), ciri iklim Mediterania.",
    },
    {
        q: "Kota dengan Thot = 4,5 °C dan Tcold = −27 °C termasuk ...",
        opts: ["Dfc", "BWk", "ET", "Cfb"],
        key: "C",
        why: "Thot < 10 °C ⇒ kelompok E; Thot > 0 °C ⇒ ET (tundra).",
    },
    {
        q: "Dieng berada di Indonesia tetapi tergolong Cfb, bukan A, karena ...",
        opts: [
            "Letaknya jauh dari ekuator",
            "Curah hujannya sedikit",
            "Suhu bulan terdinginnya di bawah 18 °C akibat ketinggian",
            "Tidak mendapat angin muson",
        ],
        key: "C",
        why: "Ketinggian menurunkan suhu. Tcold ≈ 12 °C < 18 °C, jadi syarat A tidak terpenuhi.",
    },
    {
        q: "Jika ≥ 70% curah hujan tahunan jatuh pada musim panas, maka Pthreshold dihitung dengan ...",
        opts: ["2 × MAT", "2 × MAT + 14", "2 × MAT + 28", "MAT + 28"],
        key: "C",
        why: "Hujan dominan musim panas ⇒ Pthreshold = 2 × MAT + 28.",
    },
    {
        q: "Perbedaan utama Af dan Aw terletak pada ...",
        opts: [
            "Suhu bulan terdingin",
            "Ada tidaknya bulan kering yang tegas",
            "Letak lintang",
            "Jumlah bulan dengan suhu > 10 °C",
        ],
        key: "B",
        why: "Keduanya A (suhu sama-sama tinggi). Af tanpa bulan kering, Aw punya musim kering jelas.",
    },
];

const mysteryCities = [
    {
        name: "Alfa",
        temp: [26.0, 26.3, 26.8, 27.0, 27.0, 26.5, 26.0, 26.0, 26.5, 27.0, 26.8, 26.3],
        rain: [220, 200, 250, 270, 230, 180, 160, 170, 200, 260, 280, 250],
    },
    {
        name: "Beta",
        temp: [27.0, 27.0, 27.3, 27.8, 28.0, 27.5, 27.0, 27.0, 27.5, 28.0, 28.0, 27.5],
        rain: [250, 230, 200, 120, 60, 50, 45, 55, 70, 110, 150, 230],
    },
    {
        name: "Gamma",
        temp: [27.0, 27.0, 27.3, 27.8, 28.0, 27.5, 27.0, 27.0, 27.5, 28.0, 28.0, 27.5],
        rain: [260, 230, 190, 70, 20, 5, 3, 2, 8, 40, 120, 240],
    },
    {
        name: "Delta",
        temp: [11.0, 12.0, 14.0, 17.0, 21.0, 25.0, 28.0, 28.0, 24.0, 20.0, 15.0, 12.0],
        rain: [80, 70, 60, 50, 30, 10, 5, 8, 40, 70, 90, 100],
    },
    {
        name: "Epsilon",
        temp: [-22.0, -20.0, -12.0, -2.0, 5.0, 10.0, 13.0, 10.0, 4.0, -3.0, -13.0, -19.0],
        rain: [30, 25, 25, 30, 45, 70, 80, 75, 60, 45, 40, 35],
    },
];

const essay = [
    "Jelaskan perbedaan Af, Am, dan Aw. Gunakan contoh Pontianak, Jakarta, dan Surabaya.",
    "Tunjukkan langkah-langkah (dengan angka) bahwa Kota Delta termasuk Csa, bukan Cfb.",
    "Mengapa Dieng dan London sama-sama Cfb padahal letak lintang dan penyebab suhu rendahnya berbeda? Apa yang diperlihatkan hal ini tentang cara kerja klasifikasi Köppen?",
    "**Tantangan:** pilih kota tempat tinggalmu. Cari data bulanan dari BMKG, hitung tipe iklimnya, lalu bandingkan dengan peta Köppen–Geiger resolusi 1 km (Beck dkk., 2018).",
];

const mysteryKey = [
    ["Alfa", "**Af**", "Tcold 26,0 °C ≥ 18 ⇒ A. Pdry = 160 mm ≥ 60 ⇒ Af."],
    ["Beta", "**Am**", "Tcold 27,0 °C ⇒ A. Pdry = 45 mm < 60. MAP = 1.570 mm ⇒ ambang 100 − 62,8 = 37,2. 45 ≥ 37,2 ⇒ Am."],
    ["Gamma", "**Aw**", "Tcold 27,0 °C ⇒ A. Pdry = 2 mm. MAP = 1.188 mm ⇒ ambang 100 − 47,5 = 52,5. 2 < 52,5 ⇒ Aw."],
    ["Delta", "**Csa**", "Tcold 11 °C ⇒ bukan A, bukan D. Hujan musim panas ≈ 23% (musim dingin dominan) ⇒ Pth = 2 × 18,9 = 37,8; 10 × Pth = 378 < MAP 613 ⇒ bukan B. Psdry = 5 mm < 40 dan < Pwwet/3 (100/3 = 33,3) ⇒ s. Thot 28 ≥ 22 ⇒ a."],
    ["Epsilon", "**Dfc**", "Thot 13 °C > 10 ⇒ bukan E. Tcold −22 °C ≤ 0 ⇒ D. Pth = 2 × (−4,1) + 14 = 5,8 ⇒ 58 < MAP 560 ⇒ bukan B. Psdry = 30 mm tetapi Pwwet/3 = 15 ⇒ bukan s; Pwdry = 25 > Pswet/10 = 8 ⇒ bukan w ⇒ f. Tmon10 = 3 (hanya Jun–Agu ≥ 10 °C) ⇒ c."],
];

const essayKey = [
    "**No. 1:** Af = semua bulan ≥ 60 mm (Pontianak: bulan terkering 180 mm). Am = ada bulan < 60 mm, tetapi Pdry ≥ 100 − MAP/25 (Jakarta: 45 ≥ 29). Aw = musim kering tegas, Pdry < 100 − MAP/25 (Surabaya: 10 < 35,4).",
    "**No. 2:** Tunjukkan Psdry = 5 mm < 40 dan < Pwwet/3 = 33,3 sehingga huruf ke-2 = s (bukan f seperti pada Cfb), dan Thot = 28 °C ≥ 22 °C sehingga huruf ke-3 = a (bukan b).",
    "**No. 3:** Dieng dingin karena ketinggian, London karena lintang tinggi. Keduanya memenuhi kriteria angka yang sama (Tcold antara 0 dan 18 °C, tidak ada musim kering, Thot < 22 °C, Tmon10 ≥ 4). Klasifikasi Köppen mengelompokkan berdasarkan **hasil** (suhu dan hujan), bukan penyebab geografisnya.",
    "**No. 4:** Nilai dibenarkan jika siswa mencantumkan sumber data, menghitung dengan urutan yang benar, dan menjelaskan kecocokan atau perbedaan dengan peta.",
];

const rubric = [
    ["Ketepatan perhitungan", "Semua langkah dan angka benar", "1 kesalahan kecil", "2–3 kesalahan", "Banyak kesalahan"],
    ["Urutan alur", "Urut dan lengkap", "1 langkah terlewat", "2 langkah terlewat", "Tidak berurutan"],
    ["Penjelasan (bahasa)", "Jelas, mudah dipahami teman", "Cukup jelas", "Kurang jelas", "Membingungkan"],
    ["Pemeriksaan (peran Pemeriksa)", "Menemukan dan memperbaiki semua kesalahan", "Menemukan sebagian", "Menemukan sedikit", "Tidak memeriksa"],
    ["Kerja sama", "Semua aktif", "Sebagian besar aktif", "Sebagian kecil aktif", "Satu orang mendominasi"],
];

const references = [
    {
        text: "Beck, H. E., Zimmermann, N. E., McVicar, T. R., Vergopolan, N., Berg, A., & Wood, E. F. (2018). Present and future Köppen-Geiger climate classification maps at 1-km resolution. ",
        italic: "Scientific Data, 5",
        tail: ", 180214.",
        url: "https://doi.org/10.1038/sdata.2018.214",
    },
    {
        text: "Peel, M. C., Finlayson, B. L., & McMahon, T. A. (2007). Updated world map of the Köppen-Geiger climate classification. ",
        italic: "Hydrology and Earth System Sciences, 11",
        tail: "(5), 1633–1644.",
        url: "https://doi.org/10.5194/hess-11-1633-2007",
    },
];

/* =====================================================================
   HALAMAN
   ===================================================================== */

export default function Modul5() {
    return (
        <>
            <Head title="Modul 5 - Klasifikasi Wilayah Berdasarkan Data" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR */}
                <StudentSidebar />

                {/* AREA UTAMA */}
                <div className="min-h-screen md:ml-64">

                    {/* TOP HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex items-center justify-between gap-6 px-6 py-6 sm:px-10">

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16805f]">
                                    Media Pembelajaran Kelas X Fase E
                                </p>

                                <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#123b49]">
                                    Modul 5: Klasifikasi Wilayah Berdasarkan Data
                                </h1>

                                <p className="mt-1 text-base text-gray-500">
                                    Menerapkan kriteria Köppen pada data suhu
                                    dan curah hujan kota-kota nyata.
                                </p>
                            </div>

                            {/* Tombol kembali desktop */}
                            <Link
                                href={route("student.material")}
                                className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 text-sm font-semibold text-[#087b68] transition hover:border-[#087b68] hover:bg-[#f3f9f8] sm:inline-flex"
                            >
                                ← Kembali
                            </Link>
                        </div>
                    </header>

                    {/* MOBILE BACK BUTTON */}
                    <div className="border-b border-[#d7e5e3] bg-white px-6 pb-5 sm:hidden">
                        <Link
                            href={route("student.material")}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#c8dcda] px-4 py-2.5 text-sm font-semibold text-[#087b68]"
                        >
                            ← Kembali
                        </Link>
                    </div>

                    {/* CONTENT WRAPPER */}
                    <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">

                        {/* BREADCRUMB */}
                        <div className="mb-7 flex items-center gap-3 text-sm">
                            <Link
                                href={route("student.material")}
                                className="text-gray-500 transition hover:text-[#087b68]"
                            >
                                Materi Iklim Köppen
                            </Link>

                            <span className="text-gray-400">/</span>

                            <span className="font-medium text-[#123b49]">
                                Modul 5
                            </span>
                        </div>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#07384b] via-[#08635f] to-[#087b70] px-8 py-10 text-white shadow-sm sm:px-12 sm:py-11">

                            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
                            <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full border border-white/10" />

                            <div className="relative z-10 max-w-4xl">

                                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold tracking-wide">
                                    MODUL PEMBELAJARAN 05
                                </div>

                                <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                                    Klasifikasi Iklim Köppen: dari Rumus ke Kota Nyata
                                </h2>

                                <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50 sm:text-lg">
                                    Menerapkan kriteria klasifikasi iklim
                                    Köppen pada studi kasus wilayah di
                                    Indonesia dan dunia melalui simulasi
                                    tanya-jawab bersama Iklim KoppenBot.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        🌡️ Data Suhu
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        💧 Curah Hujan
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        🌍 10 Studi Kasus Kota
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        🤖 Simulasi KoppenBot
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* ISI MODUL */}
                        <main className="mx-auto mt-8 max-w-7xl">

                            {/* INTRO */}
                            <div className="mb-6 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                        🧭
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#123b49]">
                                            Dari data menjadi kode iklim
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Ikuti langkah-langkah berikut secara
                                            berurutan untuk membantu menentukan
                                            klasifikasi iklim suatu wilayah.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* INFO BAHAN AJAR */}
                            <Card>
                                <h3 className="mb-1 text-lg font-bold text-[#123b49]">
                                    Informasi Bahan Ajar
                                </h3>
                                <SimpleTable
                                    head={["Keterangan", "Isi"]}
                                    rows={infoRows}
                                />

                                <Callout
                                    title="Catatan penting tentang data"
                                    tone="amber"
                                    icon="⚠️"
                                >
                                    <p>
                                        <strong>
                                            Data suhu dan curah hujan bulanan
                                            pada bahan ajar ini adalah nilai
                                            pendekatan (dibulatkan) yang dibuat
                                            untuk keperluan latihan agar
                                            mewakili pola iklim tiap kota.
                                            Angka tersebut bukan data resmi
                                            stasiun.
                                        </strong>
                                    </p>
                                    <p>
                                        Untuk tugas penelitian atau penilaian
                                        formal, ganti dengan normal iklim
                                        resmi dari BMKG (Indonesia) atau
                                        WMO/stasiun cuaca setempat (kota
                                        dunia). Kriteria klasifikasi dan
                                        sumber rujukan di daftar pustaka
                                        merupakan sumber ilmiah yang dapat
                                        dirujuk.
                                    </p>
                                </Callout>

                                <Callout
                                    title="Belum paham dasar Köppen?"
                                    tone="sky"
                                    icon="📖"
                                >
                                    <p>
                                        Pengenalan klasifikasi Köppen dan lima
                                        kelompok iklim utama sudah dibahas pada
                                        Modul 1. Buka kembali dari{" "}
                                        <Link
                                            href={route("student.material")}
                                            className="font-semibold underline"
                                        >
                                            daftar materi
                                        </Link>
                                        . Modul ini langsung fokus menerapkan
                                        kriteria pada data kota.
                                    </p>
                                </Callout>
                            </Card>

                            {/* A. KRITERIA DAN ALUR */}
                            <Card>
                                <SectionHeading
                                    id="bagian-a"
                                    letter="A"
                                    title="Kriteria dan Alur Menentukan Tipe Iklim"
                                />

                                <SubHeading>1. Data apa yang kita perlukan?</SubHeading>
                                <Para>
                                    Siapkan 12 nilai suhu rata-rata bulanan dan
                                    12 nilai curah hujan bulanan untuk satu kota.
                                    Gunakan satuan °C untuk suhu dan mm untuk
                                    curah hujan. Dari data tersebut, hitung
                                    besaran-besaran berikut:
                                </Para>
                                <SimpleTable
                                    head={["Simbol", "Artinya", "Cara mendapatkan"]}
                                    rows={symbols.map(([a, b, c]) => [`**${a}**`, b, c])}
                                />
                                <Para>
                                    Untuk latihan dalam bahan ajar ini, musim
                                    panas belahan bumi utara ditetapkan
                                    April–September dan musim dingin
                                    Oktober–Maret. Di belahan bumi selatan,
                                    pembagiannya dibalik: musim panas
                                    Oktober–Maret dan musim dingin
                                    April–September. Gunakan pembagian musim yang
                                    sama secara konsisten saat menghitung ambang
                                    kekeringan.
                                </Para>

                                <Callout title="Rumus ambang kering (Pthreshold)" tone="sky" icon="🧮">
                                    <p>
                                        Hitung dulu berapa persen hujan tahunan
                                        yang jatuh pada musim panas:
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5">
                                        <li>jika ≥ 70% hujan jatuh di musim panas: <strong>Pthreshold = 2 × MAT + 28</strong></li>
                                        <li>jika ≥ 70% hujan jatuh di musim dingin: <strong>Pthreshold = 2 × MAT</strong></li>
                                        <li>selain itu (hujan merata): <strong>Pthreshold = 2 × MAT + 14</strong></li>
                                    </ul>
                                    <p className="text-xs italic opacity-80">
                                        Sumber: Peel dkk. (2007), sebagaimana
                                        dimuat dalam tabel kriteria rujukan.
                                    </p>
                                </Callout>

                                <SubHeading>2. Alur keputusan</SubHeading>
                                <Para>
                                    Ikuti alur keputusan secara berurutan dari
                                    atas ke bawah: **E dahulu, lalu B, lalu A,
                                    terakhir C atau D**. Setiap jawaban
                                    menentukan apakah kamu bisa menetapkan
                                    kelompok utama atau harus melanjutkan ke
                                    langkah berikutnya. Jangan memilih kode
                                    hanya berdasarkan letak lintang atau kesan
                                    umum tentang suatu kota.
                                </Para>

                                {/* Ringkasan langkah */}
                                <div className="mt-5 space-y-4 rounded-2xl border border-slate-200 p-5">
                                    <h5 className="text-sm font-bold text-[#123b49]">
                                        Langkah-langkah mengklasifikasikan
                                    </h5>

                                    {steps.map((step, index) => (
                                        <div
                                            key={step.number}
                                            className="flex gap-4"
                                        >
                                            {/* Icon + garis */}
                                            <div className="flex flex-col items-center">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4f1] text-xl">
                                                    {step.icon}
                                                </div>

                                                {index !== steps.length - 1 && (
                                                    <div className="mt-2 min-h-8 w-px flex-1 bg-teal-100" />
                                                )}
                                            </div>

                                            {/* Isi langkah */}
                                            <div className="flex-1 pb-3">
                                                <p className="text-xs font-bold tracking-wide text-[#087b68]">
                                                    LANGKAH {step.number}
                                                </p>

                                                <h4 className="mt-1 font-semibold text-[#123b49]">
                                                    {step.title}
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Figure
                                    src="alur-keputusan.png"
                                    caption="Gambar 1. Alur penentuan kelompok iklim Köppen–Geiger (disederhanakan dari Peel dkk., 2007)."
                                    narrow
                                />

                                <SubHeading>3. Menentukan huruf kedua dan ketiga</SubHeading>
                                <SimpleTable
                                    head={["Kelompok", "Huruf ke-2", "Huruf ke-3"]}
                                    rows={letterRows}
                                />
                                <Para className="text-xs">
                                    Catatan: batas antara kelompok C dan D
                                    adalah 0 °C pada Peel dkk. (2007), yang
                                    dipakai di sini. Beberapa versi lain memakai
                                    −3 °C. Selisih ini hanya memengaruhi
                                    kota-kota yang bulan terdinginnya sangat
                                    dekat 0 °C.
                                </Para>

                                <SubHeading>4. Cara membaca klimatogram</SubHeading>
                                <Para>
                                    Klimatogram menggabungkan curah hujan
                                    bulanan (biasanya ditampilkan sebagai batang)
                                    dan suhu rata-rata bulanan (biasanya sebagai
                                    garis). Pada contoh iklim tropis A, garis 60
                                    mm membantu mengenali bulan dengan curah
                                    hujan kurang dari 60 mm. Garis ini bukan
                                    satu-satunya kriteria klasifikasi: untuk
                                    membedakan Af, Am, dan Aw, tetap periksa
                                    rumus ambang Am/Aw yang menggunakan curah
                                    hujan tahunan.
                                </Para>
                                <Figure
                                    src="banding-af-am-aw.png"
                                    caption="Gambar 2. Perbandingan Af, Am, dan Aw: bedanya terletak pada bulan-bulan terkering (data pendekatan)."
                                />
                            </Card>

                            {/* B. KENALAN DENGAN KOPPENBOT */}
                            <Card>
                                <SectionHeading
                                    id="bagian-b"
                                    letter="B"
                                    title="Kenalan dengan Iklim KoppenBot"
                                />
                                <Para>
                                    **KoppenBot** adalah tokoh chatbot rekaan
                                    yang bertugas menemani kamu belajar Köppen.
                                    Dialog di bawah ini disusun sebagai
                                    **simulasi tanya-jawab**: kamu membaca
                                    percakapan seorang siswa dengan KoppenBot,
                                    lalu ikut menghitung sendiri. Perhatikan
                                    bahwa KoppenBot tidak langsung memberi
                                    jawaban, tetapi memandu langkah demi langkah.
                                </Para>

                                <SubHeading>Aturan main simulasi</SubHeading>
                                <NumberedList
                                    items={[
                                        "Baca dialog dan **cocokkan angka** pada tabel data dengan hitungan KoppenBot.",
                                        "Tutup dulu jawaban KoppenBot dengan kertas, coba tebak, baru buka.",
                                        "Kalau menemukan perbedaan hitungan, **catat dan diskusikan**. Chatbot bisa salah hitung, jadi kamu adalah pemeriksanya.",
                                    ]}
                                />

                                <SubHeading>Dialog 1: Aturan dasar</SubHeading>
                                <Dialogue lines={dialog1} />
                            </Card>

                            {/* C. STUDI KASUS INDONESIA */}
                            <Card>
                                <SectionHeading
                                    id="bagian-c"
                                    letter="C"
                                    title="Studi Kasus Indonesia"
                                />

                                <Figure
                                    src="sebaran-kota.png"
                                    caption="Gambar 3. Sebaran kota studi kasus (peta skematis lintang–bujur, bukan peta batas negara)."
                                />

                                {/* Kasus 1 */}
                                <CaseTitle n={1} title="Jakarta" badge="Am" />
                                <ClimateTable city="Jakarta" {...jakarta} />
                                <Figure src="klimatogram-jakarta.png" caption="Gambar 4. Klimatogram Jakarta (data pendekatan)." narrow />
                                <Dialogue lines={dialogJakarta} />

                                {/* Kasus 2 */}
                                <CaseTitle n={2} title="Pontianak" badge="Af" />
                                <ClimateTable city="Pontianak" {...pontianak} />
                                <Figure src="klimatogram-pontianak.png" caption="Gambar 5. Klimatogram Pontianak (data pendekatan)." narrow />
                                <Dialogue lines={dialogPontianak} />

                                {/* Kasus 3 */}
                                <CaseTitle n={3} title="Surabaya dan Kupang" badge="Aw" />
                                <ClimateTable city="Surabaya" {...surabaya} />
                                <Figure src="klimatogram-surabaya.png" caption="Gambar 6. Klimatogram Surabaya (data pendekatan)." narrow />
                                <Dialogue lines={dialogSurabaya} />
                                <ClimateTable city="Kupang" {...kupang} />
                                <Figure src="klimatogram-kupang.png" caption="Gambar 7. Klimatogram Kupang (data pendekatan)." narrow />
                                <Dialogue lines={dialogKupang} />

                                {/* Kasus 4 */}
                                <CaseTitle
                                    n={4}
                                    title="Dataran tinggi Dieng: tropis tapi bukan A?"
                                    badge="Cfb"
                                />
                                <ClimateTable city="Dieng" {...dieng} />
                                <Figure src="klimatogram-dieng.png" caption="Gambar 8. Klimatogram dataran tinggi Dieng (data pendekatan untuk latihan)." narrow />
                                <Dialogue lines={dialogDieng} />

                                <Callout title="Catatan guru" tone="amber" icon="📝">
                                    <p>
                                        Nilai hujan bulan Juli–Agustus Dieng
                                        dibuat dekat batas “w” agar siswa
                                        melihat bagaimana kriteria bekerja.
                                        Mintalah siswa menguji: jika Agustus
                                        diubah menjadi 35 mm, hasilnya berubah
                                        dari Cfb menjadi Cwb.
                                    </p>
                                </Callout>

                                <SubHeading>Ringkasan Indonesia</SubHeading>
                                <SimpleTable
                                    head={["Kota", "Tcold (°C)", "MAP (mm)", "Pdry (mm)", "Ambang Am/Aw", "Tipe"]}
                                    rows={summaryIndonesia}
                                />
                            </Card>

                            {/* D. STUDI KASUS DUNIA */}
                            <Card>
                                <SectionHeading
                                    id="bagian-d"
                                    letter="D"
                                    title="Studi Kasus Dunia"
                                    subtitle="Sekarang kita keluar dari tropis. Perhatikan bagaimana kriteria yang sama dipakai di lima kota yang iklimnya sangat berbeda."
                                />

                                <CaseTitle n={5} title="Kairo, Mesir" badge="BWh" />
                                <ClimateTable city="Kairo" {...kairo} />
                                <Figure src="klimatogram-kairo.png" caption="Gambar 9. Klimatogram Kairo (data pendekatan)." narrow />
                                <Dialogue lines={dialogKairo} />

                                <CaseTitle n={6} title="Roma, Italia: iklim Mediterania" badge="Csa" />
                                <ClimateTable city="Roma" {...roma} />
                                <Figure src="klimatogram-roma.png" caption="Gambar 10. Klimatogram Roma (data pendekatan)." narrow />
                                <Dialogue lines={dialogRoma} />

                                <CaseTitle n={7} title="London, Inggris" badge="Cfb" />
                                <ClimateTable city="London" {...london} />
                                <Figure src="klimatogram-london.png" caption="Gambar 11. Klimatogram London (data pendekatan)." narrow />
                                <Dialogue lines={dialogLondon} />

                                <CaseTitle n={8} title="Moskow, Rusia" badge="Dfb" />
                                <ClimateTable city="Moskow" {...moskow} />
                                <Figure src="klimatogram-moskow.png" caption="Gambar 12. Klimatogram Moskow (data pendekatan)." narrow />
                                <Dialogue lines={dialogMoskow} />

                                <CaseTitle n={9} title="Utqiagvik, Alaska" badge="ET" />
                                <ClimateTable city="Utqiagvik" {...utqiagvik} />
                                <Figure src="klimatogram-utqiagvik.png" caption="Gambar 13. Klimatogram Utqiagvik (data pendekatan)." narrow />
                                <Dialogue lines={dialogUtqiagvik} />

                                <SubHeading>Ringkasan dunia</SubHeading>
                                <SimpleTable
                                    head={["Kota", "Tcold", "Thot", "MAP", "Alur penentu", "Tipe"]}
                                    rows={summaryWorld}
                                    caption="Satuan: suhu dalam °C, MAP dalam mm. Pth = Pthreshold."
                                />
                            </Card>

                            {/* E. MENGAPA INDONESIA DIDOMINASI A */}
                            <Card>
                                <SectionHeading
                                    id="bagian-e"
                                    letter="E"
                                    title="Mengapa Indonesia Didominasi Iklim A?"
                                />
                                <Para>
                                    Dari lima studi kasus Indonesia dalam bahan
                                    ajar ini, empat kota masuk kelompok A
                                    (tropis), sedangkan Dieng menjadi contoh
                                    wilayah dataran tinggi yang tidak memenuhi
                                    syarat suhu kelompok A pada data latihan.
                                    Pola contoh ini membantu kita melihat peran
                                    suhu dan curah hujan, tetapi tidak
                                    dimaksudkan sebagai gambaran lengkap seluruh
                                    iklim Indonesia.
                                </Para>
                                <Dialogue lines={dialogIndonesiaA1} />

                                <SubHeading>Pertanyaan diskusi</SubHeading>
                                <NumberedList items={discussion} />
                                <Para>
                                    Peta global Köppen–Geiger juga tersedia
                                    untuk kondisi masa depan (2071–2100),
                                    sehingga kamu dapat membandingkan dampak
                                    perubahan iklim terhadap sebaran tipe iklim
                                    (Beck dkk., 2018).
                                </Para>
                            </Card>

                            {/* F. AKTIVITAS KELAS */}
                            <Card>
                                <SectionHeading
                                    id="bagian-f"
                                    letter="F"
                                    title="Aktivitas Kelas: Jadilah KoppenBot"
                                />
                                <Para>
                                    Pada aktivitas ini, kamu berganti peran:
                                    **kamu yang menjadi KoppenBot**, dan temanmu
                                    menjadi penanya.
                                </Para>

                                <SubHeading>Langkah kegiatan (±45 menit)</SubHeading>
                                <NumberedList items={activitySteps} />

                                <SubHeading>Lembar kerja (salin dan isi)</SubHeading>
                                <SimpleTable
                                    head={["Langkah", "Pertanyaan", "Hasil hitungan", "Keputusan"]}
                                    rows={worksheet.map(([a, b]) => [a, b, "", ""])}
                                />
                            </Card>

                            {/* G. LATIHAN SOAL */}
                            <Card>
                                <SectionHeading
                                    id="bagian-g"
                                    letter="G"
                                    title="Latihan Soal, Kunci, dan Penilaian"
                                />

                                <SubHeading>1. Pilihan ganda</SubHeading>
                                <ol className="space-y-5">
                                    {mcq.map((item, i) => (
                                        <li key={i} className="text-sm leading-7 text-slate-700">
                                            <p>
                                                <strong className="text-[#123b49]">{i + 1}.</strong>{" "}
                                                {item.q}
                                            </p>
                                            <ul className="mt-2 space-y-1.5">
                                                {item.opts.map((opt, j) => (
                                                    <li
                                                        key={j}
                                                        className="rounded-lg border border-slate-200 bg-[#f8fbfb] px-4 py-2"
                                                    >
                                                        <strong className="mr-2 text-[#087b68]">
                                                            {String.fromCharCode(65 + j)}.
                                                        </strong>
                                                        {opt}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ol>

                                <SubHeading>2. Kota Misteri (hitung sendiri)</SubHeading>
                                <Para>
                                    Tentukan tipe iklim lima kota rekaan
                                    berikut. Gunakan alur pada Gambar 1. Kota
                                    Alfa, Beta, dan Gamma berada di belahan bumi
                                    selatan, sedangkan Delta dan Epsilon di
                                    belahan bumi utara.
                                </Para>
                                <MysteryTable cities={mysteryCities} />

                                <SubHeading>3. Uraian</SubHeading>
                                <NumberedList items={essay} />

                                {/* KUNCI JAWABAN */}
                                <Collapsible summary="🔑 Kunci Jawaban dan Pembahasan">
                                    <SubHeading>Pilihan ganda</SubHeading>
                                    <SimpleTable
                                        head={["No", "Kunci", "Pembahasan singkat"]}
                                        rows={mcq.map((m, i) => [String(i + 1), `**${m.key}**`, m.why])}
                                    />

                                    <SubHeading>Kota Misteri</SubHeading>
                                    <SimpleTable
                                        head={["Kota", "Tipe", "Penentu utama"]}
                                        rows={mysteryKey}
                                    />

                                    <SubHeading>Uraian (pokok jawaban)</SubHeading>
                                    <div className="space-y-2">
                                        {essayKey.map((t, i) => (
                                            <Para key={i}>{t}</Para>
                                        ))}
                                    </div>
                                </Collapsible>

                                {/* RUBRIK */}
                                <Collapsible summary="📋 Rubrik penilaian aktivitas “Jadilah KoppenBot”">
                                    <SimpleTable
                                        head={["Aspek", "Skor 4", "Skor 3", "Skor 2", "Skor 1"]}
                                        rows={rubric}
                                    />
                                    <Para className="font-semibold text-[#123b49]">
                                        Skor akhir = (jumlah skor ÷ 20) × 100.
                                    </Para>
                                </Collapsible>
                            </Card>

                            {/* H. DAFTAR PUSTAKA */}
                            <Card>
                                <SectionHeading
                                    id="bagian-h"
                                    letter="H"
                                    title="Daftar Pustaka"
                                />
                                <ul className="space-y-4 text-sm leading-7 text-slate-600">
                                    {references.map((ref) => (
                                        <li key={ref.url} className="pl-6 -indent-6">
                                            {ref.text}
                                            <em>{ref.italic}</em>
                                            {ref.tail}{" "}
                                            <a
                                                href={ref.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="break-all text-[#087b68] underline-offset-2 hover:underline"
                                            >
                                                {ref.url}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <SubHeading>Sumber data peta</SubHeading>
                                <Para>
                                    Peta Köppen–Geiger resolusi 1 km (kondisi
                                    1980–2016 dan proyeksi 2071–2100) dapat
                                    diunduh gratis melalui{" "}
                                    <a
                                        href="https://www.gloh2o.org/koppen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#087b68] underline-offset-2 hover:underline"
                                    >
                                        www.gloh2o.org/koppen
                                    </a>
                                    . Jika menggunakan peta tersebut dalam
                                    publikasi atau tugas, kutip artikel Beck dkk.
                                    (2018).
                                </Para>

                                <Callout title="Catatan penyusun" tone="teal" icon="📌">
                                    <p>
                                        Dialog KoppenBot adalah simulasi yang
                                        disusun untuk keperluan pembelajaran dan
                                        bukan tangkapan layar percakapan nyata.
                                        Perhitungan di dalam dialog telah
                                        diperiksa menggunakan program
                                        klasifikasi berdasarkan kriteria Peel
                                        dkk. (2007). Data bulanan merupakan
                                        nilai pendekatan untuk latihan (lihat
                                        catatan di bagian atas halaman).
                                    </p>
                                </Callout>
                            </Card>

                            {/* CHATBOT CTA */}
                            <section className="mt-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-sm sm:p-8">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="max-w-xl">
                                        <div className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-lime-200">
                                            Praktik Mandiri
                                        </div>

                                        <h3 className="text-xl font-bold sm:text-2xl">
                                            Siap mencoba sendiri?
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-teal-50">
                                            Setelah menghitung sendiri, buka
                                            menu Chatbot untuk menanyakan kode
                                            iklim dan cocokkan penjelasannya
                                            dengan hitunganmu. Ingat: chatbot
                                            bisa salah, jadi kamu yang menjadi
                                            pemeriksanya!
                                        </p>
                                    </div>

                                    <Link
                                        href={route("student.dashboard")}
                                        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-lime-200 px-5 py-3 text-sm font-bold text-[#123b49] transition hover:bg-lime-100"
                                    >
                                        Coba di Chatbot →
                                    </Link>
                                </div>
                            </section>

                            {/* SELESAIKAN MODUL */}
                            <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">
                                <CompleteModuleButton moduleNumber={5} />
                            </div>

                            {/* NAVIGATION */}
                            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={route("student.modul4")}
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-slate-50"
                                >
                                    ← Modul Sebelumnya
                                </Link>

                                <Link
                                    href={route("student.modul6")}
                                    className="inline-flex items-center justify-center rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066657]"
                                >
                                    Modul Selanjutnya →
                                </Link>
                            </div>

                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}