import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

/* =========================================================
   DATA
   ========================================================= */

const sectionNav = [
    { id: "hunian-dst", label: "D. Aktivitas Manusia", icon: "🏠" },
    { id: "iklim-berubah", label: "E. Iklim Berubah", icon: "🌡️" },
    { id: "aktivitas", label: "F. Aktivitas", icon: "✏️" },
    { id: "rangkuman", label: "Rangkuman", icon: "📌" },
    { id: "glosarium", label: "Glosarium", icon: "📖" },
    { id: "latihan", label: "Latihan Soal", icon: "🎯" },
];

const dTabs = [
    { key: "hunian", label: "Hunian", icon: "🏠" },
    { key: "pakaian", label: "Pakaian", icon: "🧥" },
    { key: "kesehatan", label: "Kesehatan", icon: "🩺" },
    { key: "pekerjaan", label: "Pekerjaan", icon: "🚜" },
];

const houseFeatures = [
    {
        icon: "⛰️",
        title: "Atap miring",
        text: "Air hujan cepat mengalir dan tidak menggenang.",
        box: "border-rose-200 bg-rose-50",
        chip: "bg-rose-100 text-rose-800",
    },
    {
        icon: "☂️",
        title: "Teritisan lebar",
        text: "Meneduhkan dinding dan melindungi dari tampias hujan.",
        box: "border-orange-200 bg-orange-50",
        chip: "bg-orange-100 text-orange-800",
    },
    {
        icon: "🪵",
        title: "Rumah panggung",
        text: "Udara mengalir di bawah lantai. Pada rumah Melayu, suhu ruang tercatat nyaman, sekitar 25,8–27,1 °C.",
        box: "border-amber-200 bg-amber-50",
        chip: "bg-amber-100 text-amber-800",
    },
    {
        icon: "🪟",
        title: "Bukaan & ventilasi",
        text: "Udara bergerak melewati ruangan (ventilasi silang).",
        box: "border-emerald-200 bg-emerald-50",
        chip: "bg-emerald-100 text-emerald-800",
    },
];

const clothingCases = [
    {
        icon: "🧊",
        zone: "Kutub & benua dingin",
        text: "Pakaian berlapis untuk menahan dingin.",
        box: "border-cyan-200 bg-cyan-50",
        chip: "bg-cyan-100 text-cyan-800",
    },
    {
        icon: "🏜️",
        zone: "Gurun",
        text: "Pakaian longgar yang menutup tubuh dari terik dan pasir. Aktivitas luar ruang dilakukan pagi atau sore.",
        box: "border-amber-200 bg-amber-50",
        chip: "bg-amber-100 text-amber-800",
    },
    {
        icon: "🌴",
        zone: "Tropis lembab",
        text: "Bahan yang menyerap keringat dan terasa sejuk menjadi pilihan.",
        box: "border-emerald-200 bg-emerald-50",
        chip: "bg-emerald-100 text-emerald-800",
    },
];

const dengueChain = [
    { icon: "🌧️", label: "Hujan lebat", note: "Genangan air terbentuk" },
    { icon: "🪣", label: "Genangan & tampungan air", note: "Tempat nyamuk bertelur" },
    { icon: "🦟", label: "Nyamuk Aedes berkembang", note: "Suhu mengatur kecepatan tumbuh nyamuk & virus" },
    { icon: "🤒", label: "Risiko DBD naik", note: "Penyakit peka iklim" },
];

const workItems = [
    {
        icon: "🌾",
        title: "Petani & pekerja agraris",
        text: "Mengatur kegiatan mengikuti musim hujan dan kemarau (lihat pola tanam di modul sebelumnya).",
    },
    {
        icon: "🚧",
        title: "Transportasi & permukiman",
        text: "Terpengaruh hujan ekstrem. BMKG mengkaji indeks hujan ekstrem pada iklim hutan hujan tropis, monsun tropis, dan savana tropis karena hujan lebat memicu banjir dan mengganggu aktivitas.",
    },
    {
        icon: "📡",
        title: "Informasi iklim & cuaca",
        text: "Prakiraan musim dari BMKG membantu masyarakat merencanakan kegiatan.",
    },
];

const changeAspects = [
    {
        icon: "🌾",
        aspek: "Pertanian",
        dampak: "Pola hujan dan suhu makin tidak menentu; kekeringan, banjir, dan hama meningkat (FAO, n.d.-a).",
        adaptasi: "Kalender tanam, varietas tahan kekeringan/banjir, irigasi hemat air, pergiliran padi–palawija.",
        box: "border-emerald-200",
        head: "bg-emerald-50 text-emerald-900",
    },
    {
        icon: "🌳",
        aspek: "Vegetasi",
        dampak: "Zona vegetasi bergeser mengikuti perubahan iklim (KAUST, 2023).",
        adaptasi: "Menjaga hutan dan koridor ekosistem; restorasi lahan.",
        box: "border-lime-200",
        head: "bg-lime-50 text-lime-900",
    },
    {
        icon: "🏙️",
        aspek: "Kehidupan sehari-hari",
        dampak: "Meningkatnya tekanan panas, ketersediaan air, risiko banjir, dan penyakit tular nyamuk (IPCC, 2022; Carbon Brief, 2022).",
        adaptasi: "Sistem peringatan dini, rumah dan kota yang teduh dan berventilasi, kebersihan lingkungan.",
        box: "border-sky-200",
        head: "bg-sky-50 text-sky-900",
    },
];

const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

const stations = [
    {
        key: "P",
        color: "#087b68",
        chip: "bg-emerald-100 text-emerald-800 border-emerald-300",
        data: [320, 290, 230, 150, 90, 50, 30, 20, 40, 90, 190, 300],
    },
    {
        key: "Q",
        color: "#d97706",
        chip: "bg-amber-100 text-amber-800 border-amber-300",
        data: [220, 240, 300, 250, 180, 140, 130, 150, 210, 300, 320, 250],
    },
    {
        key: "R",
        color: "#4f46e5",
        chip: "bg-indigo-100 text-indigo-800 border-indigo-300",
        data: [60, 50, 70, 90, 130, 200, 280, 310, 220, 120, 80, 60],
    },
];

const summaryPoints = [
    { icon: "🌡️", text: "Iklim ditentukan terutama oleh suhu dan curah hujan; klasifikasi Köppen membaginya ke dalam lima kelompok (A–E)." },
    { icon: "🇮🇩", text: "Indonesia sebagian besar beriklim tropis (Af, Am, Aw) dengan tiga pola hujan: monsunal, ekuatorial, dan lokal." },
    { icon: "🌳", text: "Iklim adalah faktor utama persebaran vegetasi; ketinggian dan tanah ikut memengaruhi." },
    { icon: "🌾", text: "Pola tanam mengikuti musim: padi pada musim hujan, palawija saat air terbatas; Katam membantu petani menentukan waktu tanam." },
    { icon: "🏠", text: "Rumah, pakaian, kesehatan, dan pekerjaan manusia beradaptasi dengan iklim setempat." },
    { icon: "🔥", text: "Perubahan iklim menggeser pola hujan, suhu, dan vegetasi, sehingga adaptasi dan kewaspadaan makin penting." },
];

const glossary = [
    { term: "Biom", meaning: "Wilayah ekologi luas dengan iklim, tumbuhan, dan hewan yang khas" },
    { term: "Klimatogram", meaning: "Grafik gabungan suhu dan curah hujan bulanan suatu tempat" },
    { term: "Monsun", meaning: "Angin musiman yang berganti arah; monsun barat membawa hujan, monsun timur umumnya kering di Indonesia" },
    { term: "Zona Musim (ZOM)", meaning: "Daerah yang pola musim hujan dan kemaraunya dapat dibedakan dari daerah sekitarnya (BMKG)" },
    { term: "Palawija", meaning: "Tanaman pangan selain padi, misalnya jagung dan kedelai" },
    { term: "Tadah hujan", meaning: "Lahan pertanian yang sumber air utamanya adalah hujan" },
    { term: "Suksesi", meaning: "Proses perubahan bertahap komunitas tumbuhan dan hewan pada suatu ekosistem" },
];

const quiz = [
    {
        q: "Kelompok iklim Köppen dengan suhu bulan terdingin ≥ 18 °C adalah ...",
        options: ["Kelompok A (tropis)", "Kelompok B (kering)", "Kelompok C (sedang)", "Kelompok E (kutub)"],
        answer: 0,
    },
    {
        q: "Pola hujan dengan dua puncak, sekitar Maret dan Oktober–November, adalah pola ...",
        options: ["monsunal", "ekuatorial", "lokal", "kutub"],
        answer: 1,
    },
    {
        q: "Faktor utama yang menentukan persebaran biom di dunia adalah ...",
        options: ["jumlah penduduk", "jenis batuan", "iklim (suhu dan curah hujan)", "luas laut"],
        answer: 2,
    },
    {
        q: "Biom dengan suhu sekitar 25–30 °C dan curah hujan lebih dari 250 cm per tahun adalah ...",
        options: ["gurun", "taiga", "tundra", "hutan hujan tropis"],
        answer: 3,
    },
    {
        q: "Pada musim tanam III (puncak kemarau), petani dianjurkan menanam palawija karena ...",
        options: [
            "palawija tidak butuh sinar matahari",
            "kebutuhan air palawija lebih sedikit daripada padi",
            "padi hanya tumbuh di gunung",
            "palawija selalu lebih mahal",
        ],
        answer: 1,
    },
    {
        q: "Ciri rumah tradisional tropis yang berfungsi mengalirkan air hujan dengan cepat adalah ...",
        options: ["atap datar", "atap miring", "dinding tebal tanpa jendela", "lantai tanpa kolong"],
        answer: 1,
    },
    {
        q: "Kalender Tanam Terpadu (Katam) berguna untuk ...",
        options: [
            "memprediksi gempa",
            "memberi informasi waktu tanam dan wilayah rawan kekeringan/banjir",
            "menghitung jumlah penduduk",
            "menentukan harga beras",
        ],
        answer: 1,
    },
    {
        q: "Kenaikan suhu akibat perubahan iklim diperkirakan menggeser zona tanaman ke arah ...",
        options: ["kutub", "khatulistiwa", "laut dalam", "tidak bergeser sama sekali"],
        answer: 0,
    },
];

const essays = [
    {
        q: "Jelaskan mengapa hujan deras di musim kemarau tidak selalu berarti terjadi anomali iklim di Indonesia.",
        guide: "Musim hujan dipengaruhi monsun barat dan musim kemarau monsun timur; cuaca juga dipengaruhi dinamika atmosfer lain (misalnya MJO) dan topografi lokal (BMKG, 2024a).",
    },
    {
        q: "Bandingkan pola tanam di daerah bertipe hujan monsunal dengan daerah bertipe ekuatorial.",
        guide: "Monsunal punya satu puncak hujan sehingga tanam dibagi menjadi MT I–III (padi lalu palawija); ekuatorial punya dua puncak hujan sehingga peluang musim tanam lebih tersebar dan perlu mengikuti zona musim setempat (BMKG, 2024b; Republika, 2018).",
    },
    {
        q: "Sebutkan tiga bentuk adaptasi petani menghadapi kemarau panjang dan jelaskan alasannya.",
        guide: "Contoh jawaban: menanam palawija atau varietas tahan kering, mengatur pergiliran air irigasi, mengikuti Katam (Republika, 2015a; Badan Litbang Pertanian, 2017).",
    },
];

const rubric = [
    { skor: 4, text: "Jawaban benar, lengkap, menggunakan istilah geografi yang tepat, disertai contoh", tone: "bg-emerald-100 text-emerald-800" },
    { skor: 3, text: "Jawaban benar dan cukup lengkap, contoh kurang tepat atau kurang rinci", tone: "bg-lime-100 text-lime-800" },
    { skor: 2, text: "Jawaban sebagian benar, penjelasan sebab-akibat belum utuh", tone: "bg-amber-100 text-amber-800" },
    { skor: 1, text: "Jawaban hanya menyebut istilah tanpa penjelasan", tone: "bg-orange-100 text-orange-800" },
    { skor: 0, text: "Tidak menjawab atau tidak relevan", tone: "bg-slate-100 text-slate-600" },
];

const references = [
    "Badan Penelitian dan Pengembangan Pertanian, Kementerian Pertanian. (2017). Rekomendasi kalender tanam terpadu Provinsi Papua.",
    "Beck, H. E., Zimmermann, N. E., McVicar, T. R., Vergopolan, N., Berg, A., & Wood, E. F. (2018). Present and future Köppen-Geiger climate classification maps at 1-km resolution. Scientific Data, 5, 180214.",
    "BMKG. (2024a, 10 Juli). Hujan di musim kemarau, BMKG: Normal terjadi, bukan anomali iklim [Siaran pers].",
    "BMKG. (2024b). Buku prakiraan musim kemarau (PMK) 2024.",
    "Carbon Brief. (2022). In-depth Q&A: The IPCC's sixth assessment on how climate change impacts the world.",
    "FAO. (n.d.-a). Climate change. Food and Agriculture Organization of the United Nations.",
    "Health Policy Watch. (2023). Heatwaves: Develop urban heat maps to protect the vulnerable, says WHO.",
    "Identifikasi klimatik tropis arsitektur tradisional rumah tinggal suku Melayu terhadap kenyamanan termal. (n.d.). Nalars. Universitas Muhammadiyah Jakarta.",
    "IPCC. (2022). Climate change 2022: Impacts, adaptation and vulnerability. Contribution of Working Group II to the Sixth Assessment Report.",
    "Jurnal Permukiman. (n.d.). Ekspresi bentuk klimatik tropis arsitektur tradisional. Jurnal Permukiman. Kementerian Pekerjaan Umum.",
    "Kajian indeks hujan ekstrem di wilayah Indonesia. (n.d.). Megasains. BMKG.",
    "KAUST. (2023, 23 Oktober). New climate maps predict major changes in vegetation by end of century.",
    "Kebijakan Kesehatan Indonesia. (n.d.). Climate change adding sting to mosquito bite, says WHO report.",
    "Penerapan arsitektur tropis dalam era new normal. (n.d.). Institut Teknologi Sepuluh Nopember.",
    "Republika. (2015a, 2 Agustus). Musim kering, petani diminta patuhi jadwal tanam.",
    "Republika. (2018, 15 Maret). BMKG: Musim kemarau mulai April 2018.",
    "Voice of America. (2023). WHO: As climate change kicks in, dengue surges globally.",
];

/* =========================================================
   KOMPONEN KECIL
   ========================================================= */

function SectionTitle({ id, badge, title, subtitle }) {
    return (
        <div id={id} className="mb-5 scroll-mt-6">
            <span className="inline-flex rounded-full bg-[#e7f4f1] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#087b68]">
                {badge}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-[#123b49]">{title}</h3>
            {subtitle && (
                <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            )}
        </div>
    );
}

function Callout({ icon, title, tone = "teal", children }) {
    const tones = {
        teal: "border-teal-200 bg-teal-50",
        amber: "border-amber-200 bg-amber-50",
        sky: "border-sky-200 bg-sky-50",
    };
    return (
        <div className={`rounded-2xl border p-5 ${tones[tone]}`}>
            <p className="flex items-center gap-2 font-bold text-[#123b49]">
                <span className="text-xl">{icon}</span>
                {title}
            </p>
            <div className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                {children}
            </div>
        </div>
    );
}

/* ---------- Klimatogram interaktif (Aktivitas 1) ---------- */

function Klimatogram() {
    const [visible, setVisible] = useState({ P: true, Q: true, R: true });
    const [showPeaks, setShowPeaks] = useState(false);
    const [hover, setHover] = useState(null);

    const W = 640;
    const H = 300;
    const pad = { l: 46, r: 16, t: 16, b: 34 };
    const maxY = 350;
    const x = (i) => pad.l + (i * (W - pad.l - pad.r)) / 11;
    const y = (v) => pad.t + (1 - v / maxY) * (H - pad.t - pad.b);
    const ticks = [0, 100, 200, 300];

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
                {stations.map((s) => (
                    <button
                        key={s.key}
                        type="button"
                        onClick={() =>
                            setVisible((v) => ({ ...v, [s.key]: !v[s.key] }))
                        }
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-bold transition ${
                            visible[s.key]
                                ? s.chip
                                : "border-slate-200 bg-white text-slate-400"
                        }`}
                    >
                        <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                                background: visible[s.key] ? s.color : "#cbd5e1",
                            }}
                        />
                        Stasiun {s.key}
                    </button>
                ))}

                <button
                    type="button"
                    onClick={() => setShowPeaks((p) => !p)}
                    className="ml-auto rounded-full border border-[#c8dcda] bg-[#f3f9f8] px-3 py-1.5 text-sm font-semibold text-[#087b68] transition hover:border-[#087b68]"
                >
                    {showPeaks ? "Sembunyikan puncak hujan" : "Tandai puncak hujan"}
                </button>
            </div>

            <div className="overflow-x-auto">
                <svg
                    viewBox={`0 0 ${W} ${H}`}
                    className="h-auto w-full min-w-[520px]"
                    role="img"
                    aria-label="Grafik garis curah hujan bulanan tiga stasiun"
                    onMouseLeave={() => setHover(null)}
                >
                    {ticks.map((t) => (
                        <g key={t}>
                            <line
                                x1={pad.l}
                                x2={W - pad.r}
                                y1={y(t)}
                                y2={y(t)}
                                stroke="#e2e8f0"
                                strokeDasharray={t === 0 ? "0" : "4 4"}
                            />
                            <text
                                x={pad.l - 8}
                                y={y(t) + 4}
                                textAnchor="end"
                                fontSize="11"
                                fill="#64748b"
                            >
                                {t}
                            </text>
                        </g>
                    ))}
                    <text
                        x={12}
                        y={pad.t - 4}
                        fontSize="10"
                        fill="#64748b"
                    >
                        mm
                    </text>

                    {months.map((m, i) => (
                        <text
                            key={m}
                            x={x(i)}
                            y={H - 12}
                            textAnchor="middle"
                            fontSize="11"
                            fill={hover === i ? "#087b68" : "#64748b"}
                            fontWeight={hover === i ? "700" : "400"}
                        >
                            {m}
                        </text>
                    ))}

                    {hover !== null && (
                        <line
                            x1={x(hover)}
                            x2={x(hover)}
                            y1={pad.t}
                            y2={H - pad.b}
                            stroke="#087b68"
                            strokeOpacity="0.35"
                            strokeWidth="1.5"
                        />
                    )}

                    {stations
                        .filter((s) => visible[s.key])
                        .map((s) => {
                            const peak = s.data.indexOf(Math.max(...s.data));
                            return (
                                <g key={s.key}>
                                    <polyline
                                        fill="none"
                                        stroke={s.color}
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        points={s.data
                                            .map((v, i) => `${x(i)},${y(v)}`)
                                            .join(" ")}
                                    />
                                    {s.data.map((v, i) => (
                                        <circle
                                            key={i}
                                            cx={x(i)}
                                            cy={y(v)}
                                            r={hover === i ? 5 : 3}
                                            fill="#fff"
                                            stroke={s.color}
                                            strokeWidth="2"
                                        />
                                    ))}
                                    {showPeaks && (
                                        <g>
                                            <circle
                                                cx={x(peak)}
                                                cy={y(s.data[peak])}
                                                r="9"
                                                fill={s.color}
                                                fillOpacity="0.18"
                                                stroke={s.color}
                                            />
                                            <text
                                                x={x(peak)}
                                                y={y(s.data[peak]) - 14}
                                                textAnchor="middle"
                                                fontSize="11"
                                                fontWeight="700"
                                                fill={s.color}
                                            >
                                                {s.key}: {months[peak]}
                                            </text>
                                        </g>
                                    )}
                                </g>
                            );
                        })}

                    {months.map((m, i) => (
                        <rect
                            key={`hit-${m}`}
                            x={x(i) - (W - pad.l - pad.r) / 22}
                            y={pad.t}
                            width={(W - pad.l - pad.r) / 11}
                            height={H - pad.t - pad.b}
                            fill="transparent"
                            onMouseEnter={() => setHover(i)}
                            onClick={() => setHover(i)}
                        />
                    ))}
                </svg>
            </div>

            <div className="mt-3 min-h-[44px] rounded-xl bg-[#f3f9f8] px-4 py-2.5 text-sm text-slate-600">
                {hover === null ? (
                    "Arahkan kursor (atau ketuk) ke sebuah bulan untuk melihat curah hujannya."
                ) : (
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                        <span className="font-bold text-[#123b49]">
                            {months[hover]}
                        </span>
                        {stations
                            .filter((s) => visible[s.key])
                            .map((s) => (
                                <span key={s.key} className="font-semibold">
                                    <span style={{ color: s.color }}>
                                        Stasiun {s.key}
                                    </span>
                                    : {s.data[hover]} mm
                                </span>
                            ))}
                    </div>
                )}
            </div>

            <p className="mt-2 text-xs text-slate-400">
                Data fiktif untuk latihan, bukan hasil pengukuran.
            </p>
        </div>
    );
}

/* ---------- Kuis interaktif ---------- */

function Quiz() {
    const [picked, setPicked] = useState({});
    const letters = ["A", "B", "C", "D"];
    const answered = Object.keys(picked).length;
    const score = quiz.reduce(
        (sum, item, i) => sum + (picked[i] === item.answer ? 1 : 0),
        0
    );
    const done = answered === quiz.length;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#123b49]">
                    Terjawab {answered}/{quiz.length}
                </p>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                        className="h-full rounded-full bg-[#087b68] transition-all"
                        style={{ width: `${(answered / quiz.length) * 100}%` }}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => setPicked({})}
                    className="text-sm font-semibold text-[#087b68] hover:underline"
                >
                    Ulangi
                </button>
            </div>

            {quiz.map((item, i) => {
                const chosen = picked[i];
                const locked = chosen !== undefined;
                return (
                    <article
                        key={i}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                        <p className="flex gap-3 font-semibold leading-6 text-[#123b49]">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#123b49] text-sm text-white">
                                {i + 1}
                            </span>
                            {item.q}
                        </p>

                        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                            {item.options.map((opt, j) => {
                                let style =
                                    "border-slate-200 bg-white hover:border-[#087b68] hover:bg-[#f3f9f8]";
                                if (locked && j === item.answer)
                                    style =
                                        "border-emerald-400 bg-emerald-50 text-emerald-900";
                                else if (locked && j === chosen)
                                    style = "border-rose-300 bg-rose-50 text-rose-900";
                                else if (locked)
                                    style =
                                        "border-slate-200 bg-white text-slate-400";

                                return (
                                    <button
                                        key={j}
                                        type="button"
                                        disabled={locked}
                                        onClick={() =>
                                            setPicked((p) => ({ ...p, [i]: j }))
                                        }
                                        className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm leading-5 transition ${style}`}
                                    >
                                        <span className="font-bold">
                                            {letters[j]}.
                                        </span>
                                        <span>{opt}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {locked && (
                            <p
                                className={`mt-3 text-sm font-semibold ${
                                    chosen === item.answer
                                        ? "text-emerald-700"
                                        : "text-rose-700"
                                }`}
                            >
                                {chosen === item.answer
                                    ? "✓ Benar!"
                                    : `✗ Belum tepat. Jawaban yang benar: ${letters[item.answer]}.`}
                            </p>
                        )}
                    </article>
                );
            })}

            {done && (
                <div className="rounded-2xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-center text-white shadow-sm">
                    <p className="text-sm font-bold uppercase tracking-wide text-teal-100">
                        Skor kamu
                    </p>
                    <p className="mt-1 text-5xl font-bold">
                        {score}
                        <span className="text-2xl text-teal-100">
                            /{quiz.length}
                        </span>
                    </p>
                    <p className="mt-2 text-sm text-teal-50">
                        {score === quiz.length
                            ? "Sempurna! Kamu sudah paham dampak iklim terhadap kehidupan. 🎉"
                            : score >= 6
                            ? "Bagus! Tinggal sedikit lagi, coba cek soal yang masih salah."
                            : "Ayo baca lagi materinya, lalu coba ulangi kuis ini."}
                    </p>
                </div>
            )}
        </div>
    );
}

/* =========================================================
   HALAMAN
   ========================================================= */

export default function Modul6() {
    const [tab, setTab] = useState("hunian");
    const [query, setQuery] = useState("");
    const [openGuide, setOpenGuide] = useState({});

    const filteredGlossary = glossary.filter(
        (g) =>
            g.term.toLowerCase().includes(query.toLowerCase()) ||
            g.meaning.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <Head title="Modul 6: Dampak Iklim terhadap Kehidupan" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <StudentSidebar />

                {/* AREA KANAN SIDEBAR */}
                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex min-h-[155px] items-center justify-between gap-6 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                    Media Pembelajaran Kelas X Fase E
                                </p>

                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                    Modul 6: Dampak Iklim terhadap Kehidupan
                                </h1>

                                <p className="mt-1 text-base text-slate-500">
                                    Pola pertanian, persebaran vegetasi, dan
                                    aktivitas manusia sehari-hari.
                                </p>
                            </div>

                            <Link
                                href={route("student.material")}
                                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 text-sm font-semibold text-[#087b68] transition hover:border-[#087b68] hover:bg-[#f3f9f8]"
                            >
                                ← Kembali
                            </Link>
                        </div>
                    </header>

                    {/* MAIN CONTENT */}
                    <main className="min-h-screen px-4 py-8 sm:px-7 md:px-10">
                        <div className="mx-auto max-w-[1400px]">
                            {/* BREADCRUMB */}
                            <div className="mb-7 flex items-center gap-3 text-sm">
                                <span className="text-slate-500">
                                    Materi Köppen
                                </span>
                                <span className="text-slate-400">/</span>
                                <span className="font-semibold text-[#123b49]">
                                    Modul 6
                                </span>
                            </div>

                            {/* HERO MODUL */}
                            <section className="mb-5 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#07384b] to-[#087b70] px-7 py-8 text-white shadow-sm sm:px-10 sm:py-10">
                                <div className="max-w-4xl">
                                    <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-teal-50">
                                        Modul Pembelajaran 06
                                    </div>

                                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                                        Dampak Tipe Iklim terhadap Kehidupan
                                    </h2>

                                    <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50 sm:text-lg">
                                        Dari bentuk rumah sampai risiko penyakit:
                                        lihat bagaimana iklim membentuk cara kita
                                        hidup, dan apa yang terjadi saat iklim
                                        berubah.
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        {["🏠 Hunian", "🧥 Pakaian", "🩺 Kesehatan", "🚜 Pekerjaan", "🌡️ Perubahan Iklim"].map(
                                            (t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium"
                                                >
                                                    {t}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* NAV CEPAT */}
                            <nav className="mb-8 flex gap-2 overflow-x-auto rounded-2xl border border-teal-100 bg-white p-2 shadow-sm">
                                {sectionNav.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#123b49] transition hover:bg-[#e7f4f1] hover:text-[#087b68]"
                                    >
                                        <span>{s.icon}</span>
                                        {s.label}
                                    </a>
                                ))}
                            </nav>

                            {/* ================= D ================= */}
                            <section className="mb-12">
                                <SectionTitle
                                    id="hunian-dst"
                                    badge="Bagian D"
                                    title="Tipe Iklim dan Aktivitas Manusia Sehari-hari"
                                    subtitle="Pilih tab untuk melihat bagaimana iklim memengaruhi tiap sisi kehidupan."
                                />

                                {/* TABS */}
                                <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-4">
                                    {dTabs.map((t) => (
                                        <button
                                            key={t.key}
                                            type="button"
                                            onClick={() => setTab(t.key)}
                                            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
                                                tab === t.key
                                                    ? "bg-[#087b68] text-white shadow-sm"
                                                    : "text-[#123b49] hover:bg-[#f3f9f8]"
                                            }`}
                                        >
                                            <span className="text-lg">{t.icon}</span>
                                            {t.label}
                                        </button>
                                    ))}
                                </div>

                                {/* HUNIAN */}
                                {tab === "hunian" && (
                                    <div className="space-y-5">
                                        <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                                            <h4 className="text-lg font-bold">
                                                Rumah yang “berdamai” dengan iklim
                                            </h4>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                Indonesia beriklim tropis lembab:
                                                panas matahari terik, hujan lebat,
                                                dan kelembapan udara tinggi. Rumah
                                                tradisional Nusantara berkembang
                                                lewat proses coba-coba selama
                                                bertahun-tahun, sehingga bentuknya
                                                mencerminkan adaptasi terhadap
                                                iklim (Jurnal Permukiman, n.d.).
                                            </p>
                                        </div>

                                        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                            <img
                                                src="/images/modul6/gambar-6-rumah-tropis.png"
                                                alt="Adaptasi rumah tradisional terhadap iklim tropis lembab"
                                                className="w-full"
                                            />
                                            <figcaption className="border-t border-slate-100 px-5 py-3 text-xs leading-5 text-slate-500">
                                                <strong className="text-[#123b49]">
                                                    Gambar. Adaptasi rumah
                                                    tradisional terhadap iklim
                                                    tropis lembab.
                                                </strong>{" "}
                                                Ilustrasi skematis penyusun,
                                                berdasarkan Jurnal Permukiman
                                                (n.d.), Penerapan Arsitektur
                                                Tropis (n.d.), dan Identifikasi
                                                Klimatik Tropis (n.d.).
                                            </figcaption>
                                        </figure>

                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                            {houseFeatures.map((f) => (
                                                <article
                                                    key={f.title}
                                                    className={`rounded-2xl border p-5 ${f.box}`}
                                                >
                                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                                                        {f.icon}
                                                    </div>
                                                    <span
                                                        className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold ${f.chip}`}
                                                    >
                                                        {f.title}
                                                    </span>
                                                    <p className="mt-2 text-sm leading-6 text-slate-700">
                                                        {f.text}
                                                    </p>
                                                </article>
                                            ))}
                                        </div>

                                        <Callout
                                            icon="💡"
                                            title="Tipe iklim membentuk budaya membangun"
                                        >
                                            <p>
                                                Kajian dalam Jurnal Permukiman
                                                (n.d.) menunjukkan bahwa di antara
                                                berbagai bagian bangunan, bentuk
                                                atap, terutama kecuramannya,
                                                berperan sangat besar dalam
                                                menyesuaikan rumah dengan iklim.
                                                Di daerah dingin dan bersalju,
                                                rumah justru dirancang untuk
                                                menahan panas dan salju, sehingga
                                                bentuk dan bahannya berbeda.
                                            </p>
                                        </Callout>
                                    </div>
                                )}

                                {/* PAKAIAN */}
                                {tab === "pakaian" && (
                                    <div className="space-y-5">
                                        <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                                            <h4 className="text-lg font-bold">
                                                Pakaian dan kebiasaan harian
                                            </h4>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                Pakaian, jam kerja, dan kebiasaan
                                                harian juga menyesuaikan iklim.
                                            </p>
                                        </div>

                                        <div className="grid gap-4 md:grid-cols-3">
                                            {clothingCases.map((c) => (
                                                <article
                                                    key={c.zone}
                                                    className={`rounded-2xl border p-6 ${c.box}`}
                                                >
                                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm">
                                                        {c.icon}
                                                    </div>
                                                    <span
                                                        className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold ${c.chip}`}
                                                    >
                                                        {c.zone}
                                                    </span>
                                                    <p className="mt-3 text-sm leading-6 text-slate-700">
                                                        {c.text}
                                                    </p>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* KESEHATAN */}
                                {tab === "kesehatan" && (
                                    <div className="space-y-5">
                                        <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                                            <h4 className="text-lg font-bold">
                                                Penyakit yang peka terhadap iklim
                                            </h4>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                WHO menyebut bahwa diare,
                                                kekurangan gizi, malaria, dan
                                                demam berdarah dengue (DBD)
                                                termasuk penyakit yang sangat
                                                sensitif terhadap iklim
                                                (Kebijakan Kesehatan Indonesia,
                                                n.d.). Nyamuk <em>Aedes</em>{" "}
                                                penyebar dengue sangat peka
                                                terhadap suhu: suhu mengatur
                                                seberapa cepat nyamuk tumbuh dan
                                                seberapa cepat virus berkembang
                                                di dalam tubuhnya (Voice of
                                                America, 2023).
                                            </p>
                                        </div>

                                        {/* RANTAI SEBAB-AKIBAT */}
                                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                                            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-[#087b68]">
                                                Dari hujan sampai demam berdarah
                                            </p>
                                            <div className="grid gap-3 md:grid-cols-4">
                                                {dengueChain.map((s, i) => (
                                                    <div
                                                        key={s.label}
                                                        className="relative"
                                                    >
                                                        <div className="h-full rounded-2xl border border-sky-200 bg-sky-50 p-4 text-center">
                                                            <div className="text-3xl">
                                                                {s.icon}
                                                            </div>
                                                            <p className="mt-2 text-sm font-bold text-[#123b49]">
                                                                {s.label}
                                                            </p>
                                                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                                                {s.note}
                                                            </p>
                                                        </div>
                                                        {i < dengueChain.length - 1 && (
                                                            <span className="absolute -bottom-3.5 left-1/2 z-10 -translate-x-1/2 text-xl text-[#087b68] md:-right-4 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
                                                                <span className="md:hidden">↓</span>
                                                                <span className="hidden md:inline">→</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-5 text-sm leading-6 text-slate-600">
                                                Kekeringan pun dapat menjadi
                                                masalah, sebab orang menampung
                                                air di rumah sehingga tersedia
                                                tempat bertelur baru bagi nyamuk
                                                (Kebijakan Kesehatan Indonesia,
                                                n.d.).
                                            </p>
                                        </div>

                                        {/* STAT */}
                                        <div className="flex items-center gap-5 rounded-2xl bg-[#123b49] p-6 text-white shadow-sm">
                                            <p className="text-5xl font-bold text-teal-200 sm:text-6xl">
                                                35%
                                            </p>
                                            <p className="text-sm leading-6 text-teal-50">
                                                Potensi kenaikan jumlah penduduk
                                                Asia Tenggara yang berisiko
                                                dengue, menurut pejabat WHO
                                                (Health Policy Watch, 2023).
                                            </p>
                                        </div>

                                        <Callout
                                            icon="✅"
                                            title="Tindakan nyata di rumah"
                                            tone="teal"
                                        >
                                            <p>
                                                <strong>Gerakan 3M:</strong> kuras
                                                dan tutup tempat penampungan air,
                                                serta kubur atau manfaatkan
                                                kembali barang bekas yang dapat
                                                menampung air.
                                            </p>
                                            <p>
                                                Saat gelombang panas atau cuaca
                                                sangat terik, kenali tanda
                                                kelelahan akibat panas dan hindari
                                                bekerja di luar ruangan pada jam
                                                terpanas. WHO mengingatkan bahwa
                                                pekerja luar ruang termasuk
                                                kelompok yang rentan (Health
                                                Policy Watch, 2023).
                                            </p>
                                        </Callout>
                                    </div>
                                )}

                                {/* PEKERJAAN */}
                                {tab === "pekerjaan" && (
                                    <div className="space-y-5">
                                        <div className="grid gap-4 md:grid-cols-3">
                                            {workItems.map((w) => (
                                                <article
                                                    key={w.title}
                                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                                >
                                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f4f1] text-2xl">
                                                        {w.icon}
                                                    </div>
                                                    <h4 className="font-bold text-[#123b49]">
                                                        {w.title}
                                                    </h4>
                                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                                        {w.text}
                                                    </p>
                                                </article>
                                            ))}
                                        </div>

                                        {/* STUDI KASUS */}
                                        <div className="overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 shadow-sm">
                                            <div className="p-5 sm:p-6">
                                                <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                                                    Studi kasus mini
                                                </p>
                                                <h4 className="mt-1 text-xl font-bold text-[#123b49]">
                                                    “Kemarau basah” 🌦️
                                                </h4>

                                                <div className="mt-4 grid gap-4 md:grid-cols-[auto_1fr] md:items-center">
                                                    <div className="rounded-2xl bg-white px-6 py-4 text-center shadow-sm">
                                                        <p className="text-4xl font-bold text-amber-600">
                                                            43%
                                                        </p>
                                                        <p className="text-xs text-slate-500">
                                                            zona musim sudah
                                                            kemarau
                                                            <br />
                                                            (akhir Juni 2024)
                                                        </p>
                                                    </div>
                                                    <p className="text-sm leading-6 text-slate-700">
                                                        Bulan Juli 2024, hujan
                                                        deras turun di sejumlah
                                                        wilayah padahal sebagian
                                                        besar zona musim sedang
                                                        memasuki kemarau. Hingga
                                                        akhir Juni 2024, sekitar
                                                        43% zona musim Indonesia
                                                        mengalami kemarau (BMKG,
                                                        2024a).
                                                    </p>
                                                </div>

                                                <div className="mt-5 rounded-xl bg-white p-4">
                                                    <p className="text-sm font-bold text-[#123b49]">
                                                        💬 Tugas diskusi
                                                    </p>
                                                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-700">
                                                        <li>
                                                            Mengapa kejadian itu
                                                            bukan anomali?
                                                        </li>
                                                        <li>
                                                            Apa akibatnya bagi
                                                            petani palawija dan
                                                            petani padi?
                                                        </li>
                                                        <li>
                                                            Informasi apa yang
                                                            perlu dicek sebelum
                                                            menanam?
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* ================= E ================= */}
                            <section className="mb-12">
                                <SectionTitle
                                    id="iklim-berubah"
                                    badge="Bagian E"
                                    title="Ketika Iklim Berubah"
                                    subtitle="Tipe iklim bukan sesuatu yang tetap selamanya."
                                />

                                <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                                    <p className="text-sm leading-7 text-slate-600">
                                        Peta Köppen-Geiger beresolusi 1 km yang
                                        diperbarui menunjukkan bahwa klasifikasi
                                        iklim dunia telah berubah dalam seratus
                                        tahun terakhir dan diproyeksikan berubah
                                        lebih cepat pada dekade mendatang. Peta
                                        tersebut memuat data empat periode sejak
                                        1901 hingga 2020 dan proyeksi hingga 2099
                                        (KAUST, 2023; Beck dkk., 2018).
                                    </p>

                                    {/* GARIS WAKTU */}
                                    <div className="mt-6 overflow-x-auto">
                                        <div className="relative min-w-[460px] px-4 pb-2 pt-2">
                                            <div className="absolute left-4 right-4 top-[22px] h-1 rounded-full bg-gradient-to-r from-[#087b68] via-teal-300 to-orange-400" />
                                            <div className="relative flex justify-between">
                                                {[
                                                    { y: "1901", t: "Data historis", c: "bg-[#087b68]" },
                                                    { y: "…", t: "4 periode data", c: "bg-teal-400" },
                                                    { y: "2020", t: "Data terbaru", c: "bg-teal-500" },
                                                    { y: "2099", t: "Proyeksi", c: "bg-orange-400" },
                                                ].map((p) => (
                                                    <div
                                                        key={p.y}
                                                        className="flex flex-col items-center text-center"
                                                    >
                                                        <span
                                                            className={`h-6 w-6 rounded-full border-4 border-white shadow ${p.c}`}
                                                        />
                                                        <p className="mt-2 text-sm font-bold text-[#123b49]">
                                                            {p.y}
                                                        </p>
                                                        <p className="text-xs text-slate-500">
                                                            {p.t}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <Callout
                                        icon="🌱"
                                        title="Suksesi: perubahan yang berlangsung bertahap"
                                        tone="sky"
                                    >
                                        <p>
                                            Karena tipe iklim terkait erat dengan
                                            vegetasi, perubahan iklim dapat
                                            mengubah sebaran vegetasi. Penulis
                                            utama studi tersebut menjelaskan
                                            bahwa perubahan itu akan terjadi
                                            bertahap melalui proses{" "}
                                            <strong>suksesi</strong>, yaitu ketika
                                            tumbuhan dan hewan secara perlahan
                                            menempati dan mengubah suatu
                                            ekosistem (KAUST, 2023).
                                        </p>
                                    </Callout>
                                </div>

                                {/* DAMPAK -> ADAPTASI */}
                                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                                    {changeAspects.map((a) => (
                                        <article
                                            key={a.aspek}
                                            className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${a.box}`}
                                        >
                                            <div
                                                className={`flex items-center gap-3 px-5 py-4 ${a.head}`}
                                            >
                                                <span className="text-2xl">
                                                    {a.icon}
                                                </span>
                                                <h4 className="font-bold">
                                                    {a.aspek}
                                                </h4>
                                            </div>
                                            <div className="space-y-4 p-5">
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-wide text-rose-600">
                                                        ⚠️ Kemungkinan dampak
                                                    </p>
                                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                                        {a.dampak}
                                                    </p>
                                                </div>
                                                <div className="text-center text-[#087b68]">
                                                    ↓
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-wide text-[#087b68]">
                                                        🛡️ Contoh adaptasi
                                                    </p>
                                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                                        {a.adaptasi}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-[2fr_1fr]">
                                    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
                                        Laporan IPCC (2022) menilai bahwa
                                        kejadian cuaca dan iklim ekstrem telah
                                        membuat jutaan orang menghadapi
                                        kerawanan pangan akut dan berkurangnya
                                        keamanan air, dengan dampak terbesar di
                                        sebagian Afrika, Asia, Amerika Tengah dan
                                        Selatan, pulau-pulau kecil, dan Arktik
                                        (Carbon Brief, 2022). Perubahan iklim
                                        juga diperkirakan makin menekan produksi
                                        dan akses pangan di wilayah rentan.
                                    </div>
                                    <div className="rounded-2xl bg-[#123b49] p-5 text-white shadow-sm">
                                        <p className="text-5xl font-bold text-teal-200">
                                            31%
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-teal-50">
                                            emisi akibat kegiatan manusia pada
                                            2016 berasal dari sistem pangan dan
                                            pertanian (FAO, n.d.-a). Petani
                                            adalah korban sekaligus bagian dari
                                            solusi.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ================= F ================= */}
                            <section className="mb-12">
                                <SectionTitle
                                    id="aktivitas"
                                    badge="Bagian F"
                                    title="Aktivitas Pembelajaran"
                                    subtitle="Tiga aktivitas untuk melatih pemahamanmu."
                                />

                                {/* AKTIVITAS 1 */}
                                <div className="mb-6">
                                    <div className="mb-3 flex items-start gap-3">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#087b68] font-bold text-white">
                                            1
                                        </span>
                                        <div>
                                            <h4 className="font-bold">
                                                Membaca klimatogram sederhana
                                            </h4>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Grafik berikut berisi{" "}
                                                <strong>data fiktif</strong>{" "}
                                                curah hujan bulanan (mm) tiga
                                                stasiun. Amati garisnya, lalu
                                                tentukan polanya (monsunal,
                                                ekuatorial, atau lokal).
                                            </p>
                                        </div>
                                    </div>

                                    <Klimatogram />

                                    {/* TABEL DATA */}
                                    <details className="group mt-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
                                        <summary className="cursor-pointer list-none px-5 py-3 text-sm font-semibold text-[#087b68]">
                                            📋 Lihat tabel data
                                        </summary>
                                        <div className="overflow-x-auto px-3 pb-4">
                                            <table className="w-full min-w-[640px] text-center text-sm">
                                                <thead>
                                                    <tr className="text-xs uppercase text-slate-500">
                                                        <th className="px-2 py-2 text-left">
                                                            Stasiun
                                                        </th>
                                                        {months.map((m) => (
                                                            <th
                                                                key={m}
                                                                className="px-2 py-2"
                                                            >
                                                                {m}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {stations.map((s) => (
                                                        <tr
                                                            key={s.key}
                                                            className="border-t border-slate-100"
                                                        >
                                                            <td
                                                                className="px-2 py-2 text-left font-bold"
                                                                style={{
                                                                    color: s.color,
                                                                }}
                                                            >
                                                                {s.key}
                                                            </td>
                                                            {s.data.map((v, i) => (
                                                                <td
                                                                    key={i}
                                                                    className="px-2 py-2 text-slate-600"
                                                                >
                                                                    {v}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </details>

                                    <div className="mt-3 rounded-2xl border border-teal-200 bg-teal-50 p-5">
                                        <p className="text-sm font-bold">
                                            Pertanyaan
                                        </p>
                                        <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5 text-sm leading-6 text-slate-700">
                                            <li>
                                                Pada bulan apa tiap stasiun
                                                mencapai puncak hujan?
                                            </li>
                                            <li>
                                                Kapan sebaiknya petani di tiap
                                                stasiun menanam padi?
                                            </li>
                                            <li>
                                                Tanaman apa yang cocok untuk
                                                bulan-bulan kering?
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                {/* AKTIVITAS 2 & 3 */}
                                <div className="grid gap-5 lg:grid-cols-2">
                                    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                                        <div className="mb-4 flex items-start gap-3">
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#087b68] font-bold text-white">
                                                2
                                            </span>
                                            <h4 className="font-bold">
                                                Proyek mini “Iklim di sekitarku”
                                            </h4>
                                        </div>

                                        <ol className="space-y-3">
                                            {[
                                                { i: "🎤", t: "Wawancarai petani atau orang tua tentang kapan awal musim tanam dan apa yang berubah dibanding 10–20 tahun lalu." },
                                                { i: "🏠", t: "Amati satu rumah di lingkungan sekitar: catat bentuk atap, teritisan, ventilasi, dan bahan bangunan; jelaskan kaitannya dengan iklim." },
                                                { i: "🖼️", t: "Buat poster atau presentasi singkat berisi temuan dan satu usulan adaptasi." },
                                            ].map((s, n) => (
                                                <li
                                                    key={n}
                                                    className="flex gap-3 rounded-xl bg-[#f3f9f8] p-3 text-sm leading-6 text-slate-700"
                                                >
                                                    <span className="text-xl">
                                                        {s.i}
                                                    </span>
                                                    <span>{s.t}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </article>

                                    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                                        <div className="mb-4 flex items-start gap-3">
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#087b68] font-bold text-white">
                                                3
                                            </span>
                                            <h4 className="font-bold">
                                                Diskusi kelompok
                                            </h4>
                                        </div>

                                        <p className="text-sm leading-6 text-slate-600">
                                            Pilih satu biom yang sudah kamu
                                            pelajari. Jelaskan:
                                        </p>
                                        <div className="mt-3 grid grid-cols-2 gap-2.5">
                                            {[
                                                { i: "🌡️", t: "Iklimnya" },
                                                { i: "🌳", t: "Vegetasinya" },
                                                { i: "🌾", t: "Jenis pertanian yang mungkin" },
                                                { i: "🏠", t: "Bentuk rumah yang sesuai" },
                                            ].map((c) => (
                                                <div
                                                    key={c.t}
                                                    className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-center text-sm font-semibold text-[#123b49]"
                                                >
                                                    <div className="text-2xl">
                                                        {c.i}
                                                    </div>
                                                    {c.t}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-800">
                                            ⏱️ Presentasikan dalam 3 menit
                                        </p>
                                    </article>
                                </div>
                            </section>

                            {/* ================= RANGKUMAN ================= */}
                            <section className="mb-12">
                                <SectionTitle
                                    id="rangkuman"
                                    badge="Rangkuman"
                                    title="Ringkasan Modul 6"
                                />

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {summaryPoints.map((p, i) => (
                                        <article
                                            key={i}
                                            className="relative overflow-hidden rounded-2xl bg-[#123b49] p-5 text-white shadow-sm"
                                        >
                                            <span className="absolute -right-2 -top-4 text-7xl font-bold text-white/5">
                                                {i + 1}
                                            </span>
                                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl">
                                                {p.icon}
                                            </div>
                                            <p className="text-sm leading-6 text-teal-50">
                                                {p.text}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            {/* ================= GLOSARIUM ================= */}
                            <section className="mb-12">
                                <SectionTitle
                                    id="glosarium"
                                    badge="Glosarium"
                                    title="Istilah Penting"
                                />

                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="🔍 Cari istilah…"
                                    className="mb-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                />

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {filteredGlossary.map((g) => (
                                        <article
                                            key={g.term}
                                            className="rounded-2xl border border-slate-200 border-l-4 border-l-[#087b68] bg-white p-5 shadow-sm"
                                        >
                                            <h4 className="font-bold text-[#087b68]">
                                                {g.term}
                                            </h4>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {g.meaning}
                                            </p>
                                        </article>
                                    ))}
                                    {filteredGlossary.length === 0 && (
                                        <p className="text-sm text-slate-500">
                                            Istilah tidak ditemukan.
                                        </p>
                                    )}
                                </div>
                            </section>

                            {/* ================= LATIHAN ================= */}
                            <section className="mb-12">
                                <SectionTitle
                                    id="latihan"
                                    badge="Latihan Soal"
                                    title="Uji Pemahamanmu"
                                    subtitle="Pilih jawaban, hasilnya langsung terlihat."
                                />

                                <h4 className="mb-3 text-lg font-bold">
                                    🎯 Pilihan ganda
                                </h4>
                                <Quiz />

                                <h4 className="mb-3 mt-10 text-lg font-bold">
                                    ✍️ Uraian
                                </h4>
                                <div className="space-y-4">
                                    {essays.map((e, i) => (
                                        <article
                                            key={i}
                                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                        >
                                            <p className="flex gap-3 font-semibold leading-6">
                                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-sm text-white">
                                                    {i + 1}
                                                </span>
                                                {e.q}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenGuide((o) => ({
                                                        ...o,
                                                        [i]: !o[i],
                                                    }))
                                                }
                                                className="mt-3 text-sm font-semibold text-[#087b68] hover:underline"
                                            >
                                                {openGuide[i]
                                                    ? "Sembunyikan pedoman jawaban"
                                                    : "Lihat pedoman jawaban singkat"}
                                            </button>

                                            {openGuide[i] && (
                                                <p className="mt-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-slate-700">
                                                    {e.guide}
                                                </p>
                                            )}
                                        </article>
                                    ))}
                                </div>

                                {/* RUBRIK */}
                                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <p className="mb-3 text-sm font-bold">
                                        Rubrik penilaian uraian (skor 0–4 per soal)
                                    </p>
                                    <div className="space-y-2">
                                        {rubric.map((r) => (
                                            <div
                                                key={r.skor}
                                                className="flex items-center gap-3"
                                            >
                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${r.tone}`}
                                                >
                                                    {r.skor}
                                                </span>
                                                <p className="text-sm leading-5 text-slate-600">
                                                    {r.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* DAFTAR PUSTAKA */}
                            <details className="mb-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-bold text-[#123b49]">
                                    📚 Daftar Pustaka
                                </summary>
                                <ul className="space-y-2 px-5 pb-5 text-xs leading-5 text-slate-500">
                                    {references.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </details>

                            {/* SELESAIKAN MODUL */}
                            <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">
                                <CompleteModuleButton moduleNumber={6} />
                            </div>

                            {/* NAVIGATION */}
                            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={route("student.modul5")}
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-slate-50"
                                >
                                    ← Modul Sebelumnya
                                </Link>

                                <Link
                                    href={route("student.material")}
                                    className="inline-flex items-center justify-center rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066657]"
                                >
                                    Kembali ke Daftar Materi
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
