import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import StudentSidebar from '@/Components/StudentSidebar';
import CompleteModuleButton from '@/Components/CompleteModuleButton';

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
];

const rainfall = {
    Am: [220, 180, 210, 190, 160, 90, 55, 45, 60, 130, 210, 240],
    Aw: [250, 210, 180, 100, 45, 15, 8, 12, 35, 100, 190, 260],
    Cs: [95, 80, 65, 45, 25, 10, 5, 8, 20, 55, 80, 100],
    Cw: [12, 18, 25, 45, 80, 150, 220, 205, 135, 75, 30, 15],
};

const questions = [
    {
        question:
            'Curah hujan tahunan suatu wilayah adalah 2.000 mm. Bulan terkering memiliki curah hujan 30 mm. Jika syarat suhu kelompok A terpenuhi, tipe yang paling sesuai adalah ...',
        options: ['Af', 'Am', 'Aw', 'Cw'],
        answer: 'Am',
        explanation:
            'Ambang P = 100 − (2.000/25) = 20 mm. Karena bulan terkering 30 mm, nilainya kurang dari 60 mm tetapi masih sama dengan atau di atas ambang 20 mm. Kondisi ini memenuhi kriteria Am.',
    },
    {
        question: 'Ciri utama yang membedakan Am dan Aw adalah ...',
        options: [
            'Perbedaan suhu tahunan',
            'Curah hujan bulan terkering dibandingkan ambang Köppen',
            'Perbedaan ketinggian tempat',
            'Jumlah penduduk wilayah',
        ],
        answer: 'Curah hujan bulan terkering dibandingkan ambang Köppen',
        explanation:
            'Am dan Aw sama-sama termasuk kelompok tropis. Penentuan keduanya melibatkan curah hujan bulan terkering dan ambang yang dihitung dari curah hujan tahunan.',
    },
    {
        question:
            'Wilayah yang mengalami musim panas kering dan musim dingin lebih basah cenderung memiliki tipe ...',
        options: ['Cs', 'Cw', 'Am', 'Af'],
        answer: 'Cs',
        explanation:
            'Huruf s menunjukkan musim panas kering. Pada Cs, curah hujan musim panas relatif rendah dibandingkan musim dingin.',
    },
    {
        question: 'Huruf w pada tipe iklim Cw menunjukkan ...',
        options: [
            'Musim panas kering',
            'Hujan sepanjang tahun',
            'Musim dingin kering',
            'Suhu selalu di bawah titik beku',
        ],
        answer: 'Musim dingin kering',
        explanation:
            'Huruf w menunjukkan pola musim dingin kering. Curah hujan musim panas relatif lebih tinggi.',
    },
];

function SectionTitle({ eyebrow, title, description }) {
    return (
        <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                {eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#123b49] sm:text-3xl">
                {title}
            </h2>
            {description && (
                <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                    {description}
                </p>
            )}
        </div>
    );
}

function RainfallChart({ type, subtitle, color, note }) {
    const data = rainfall[type];
    const max = Math.max(...data);

    return (
        <article className="rounded-2xl border border-[#dceae7] bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="font-bold text-[#123b49]">
                        Pola Curah Hujan {type}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                        {subtitle}
                    </p>
                </div>
                <span className="rounded-full bg-[#f1f8f6] px-3 py-1 text-xs font-semibold text-[#087b68]">
                    Ilustrasi
                </span>
            </div>

            <div className="mt-5 flex h-36 items-end gap-1.5 border-b border-l border-[#dce5e3] px-2">
                {data.map((value, index) => (
                    <div
                        key={`${type}-${months[index]}`}
                        className="flex h-full min-w-0 flex-1 items-end"
                    >
                        <div
                            title={`${months[index]}: ${value} mm`}
                            className="w-full rounded-t-sm transition-opacity hover:opacity-70"
                            style={{
                                height: `${Math.max(3, (value / max) * 100)}%`,
                                backgroundColor: color,
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-2 flex justify-between gap-1 text-[9px] text-gray-500 sm:text-[10px]">
                {months.map((month) => (
                    <span key={month}>{month}</span>
                ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600">{note}</p>
        </article>
    );
}

function ClimateCard({ code, name, tagline, criteria, clues, colorClass }) {
    return (
        <article className="overflow-hidden rounded-2xl border border-[#dce8e5] bg-white shadow-sm">
            <div className={`p-5 ${colorClass}`}>
                <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-2xl font-black text-[#123b49] shadow-sm">
                        {code}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#123b49]">
                            {name}
                        </h3>
                        <p className="mt-1 text-sm text-[#365760]">
                            {tagline}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-[#16805f]">
                    Kriteria utama
                </p>

                <ul className="mt-3 space-y-2">
                    {criteria.map((item) => (
                        <li
                            key={item}
                            className="flex gap-2 text-sm leading-6 text-gray-700"
                        >
                            <span className="font-bold text-[#16805f]">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 rounded-xl bg-[#f4f8f7] p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        Petunjuk membaca data
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#234752]">
                        {clues}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default function Modul3() {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const score = questions.reduce(
        (total, item, index) =>
            total + (answers[index] === item.answer ? 1 : 0),
        0
    );

    return (
        <>
            <Head title="Modul 3: Membedakan Tipe Iklim Köppen" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <StudentSidebar />

                <div className="min-h-screen md:ml-64">
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Media Pembelajaran Geografi · Kelas X
                                </p>
                                <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                                    Modul 3: Membedakan Tipe Iklim
                                </h1>
                                <p className="mt-1 text-sm text-gray-500">
                                    Memahami perbedaan Am–Aw dan Cs–Cw.
                                </p>
                            </div>

                            <Link
                                href={route('student.material')}
                                className="hidden rounded-xl border border-[#c8dcda] px-4 py-3 text-sm font-semibold text-[#087b68] hover:bg-[#f3f9f8] sm:inline-flex"
                            >
                                ← Kembali
                            </Link>
                        </div>
                    </header>

                    <main className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10">
                        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                            <Link
                                href={route('student.material')}
                                className="hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>
                            <span>/</span>
                            <span className="font-medium text-[#123b49]">
                                Modul 3
                            </span>
                        </nav>

                        {/* HERO */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                                    Modul Pembelajaran 03
                                </span>

                                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Mirip Kodenya, Berbeda Pola Hujannya!
                                </h2>

                                <p className="mt-4 max-w-3xl leading-relaxed text-teal-50">
                                    Tidak cukup hanya menghafal kode iklim.
                                    Kita perlu membandingkan data curah hujan
                                    bulanan dan memahami kapan musim kering
                                    terjadi.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌧️ Data curah hujan
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌴 Am vs Aw
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ☀️ Cs vs Cw
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🧠 Latihan analisis
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* TUJUAN PEMBELAJARAN */}
                        <section className="mt-7 grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    icon: '🎯',
                                    title: 'Tujuan belajar',
                                    text: 'Membedakan tipe iklim yang tampak mirip berdasarkan pola hujan dan kriteria klasifikasinya.',
                                },
                                {
                                    icon: '🔎',
                                    title: 'Fokus pengamatan',
                                    text: 'Perhatikan bulan terkering, musim kering, dan perbandingan hujan antarmusim.',
                                },
                                {
                                    icon: '📊',
                                    title: 'Cara menganalisis',
                                    text: 'Baca data bulanan terlebih dahulu, lalu cocokkan dengan aturan Köppen-Geiger.',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm"
                                >
                                    <div className="text-3xl">{item.icon}</div>
                                    <h3 className="mt-3 font-bold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </section>

                        {/* MEMBACA KODE */}
                        <section className="mt-10">
                            <SectionTitle
                                eyebrow="Bagian 1 · Membaca kode"
                                title="Bagaimana cara membaca kode iklim?"
                                description="Kode Köppen tersusun dari huruf yang masing-masing membawa informasi. Huruf pertama menunjukkan kelompok iklim utama, sedangkan huruf berikutnya menjelaskan ciri curah hujan atau suhu yang lebih rinci."
                            />

                            <div className="grid gap-4 md:grid-cols-3">
                                {[
                                    {
                                        code: 'A',
                                        title: 'Huruf pertama',
                                        text: 'Kelompok iklim utama, misalnya A untuk tropis dan C untuk sedang.',
                                        color: 'text-[#087b68]',
                                    },
                                    {
                                        code: 'm',
                                        title: 'Pola hujan tropis',
                                        text: 'Pada kelompok A, m menunjukkan monsun dan w menunjukkan musim dingin kering.',
                                        color: 'text-amber-600',
                                    },
                                    {
                                        code: 's / w',
                                        title: 'Musim kering',
                                        text: 'Pada kelompok C, s berarti musim panas kering dan w berarti musim dingin kering.',
                                        color: 'text-blue-600',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.code}
                                        className="rounded-2xl border border-[#dce8e5] bg-white p-5"
                                    >
                                        <div className={`text-3xl font-black ${item.color}`}>
                                            {item.code}
                                        </div>
                                        <h3 className="mt-2 font-bold">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
                                <strong>Ingat:</strong> arti huruf harus dibaca
                                bersama kelompok utamanya. Jangan menyimpulkan
                                tipe iklim hanya dari satu huruf tanpa
                                memeriksa data suhu dan curah hujan.
                            </div>
                        </section>

                        {/* AM DAN AW */}
                        <section className="mt-12">
                            <SectionTitle
                                eyebrow="Bagian 2 · Iklim tropis"
                                title="Am dan Aw: sama-sama tropis, tetapi berbeda musim kering"
                                description="Kelompok A memiliki suhu rata-rata setiap bulan sekurang-kurangnya 18°C. Untuk membedakan Am dan Aw, perhatikan curah hujan bulan terkering serta curah hujan tahunan."
                            />

                            <div className="grid gap-5 lg:grid-cols-2">
                                <ClimateCard
                                    code="Am"
                                    name="Tropis Monsun"
                                    tagline="Musim kering ada, tetapi tidak terlalu kuat menurut ambang Köppen."
                                    colorClass="bg-gradient-to-r from-[#d9f5e8] to-[#effaf4]"
                                    criteria={[
                                        'Suhu rata-rata setiap bulan ≥ 18°C.',
                                        'Curah hujan bulan terkering kurang dari 60 mm.',
                                        'Curah hujan bulan terkering sama dengan atau lebih besar daripada ambang P.',
                                    ]}
                                    clues="Cari bulan dengan hujan paling sedikit. Jika nilainya di bawah 60 mm tetapi masih mencapai ambang yang dihitung dari hujan tahunan, tipe yang mungkin adalah Am."
                                />

                                <ClimateCard
                                    code="Aw"
                                    name="Tropis Sabana"
                                    tagline="Memiliki musim kering yang lebih tegas."
                                    colorClass="bg-gradient-to-r from-[#ffefcf] to-[#fff8e9]"
                                    criteria={[
                                        'Suhu rata-rata setiap bulan ≥ 18°C.',
                                        'Curah hujan bulan terkering berada di bawah ambang curah hujan Köppen.',
                                        'Pola musim keringnya lebih tegas dibandingkan tipe Am.',
                                    ]}
                                    clues="Jika bulan terkering berada di bawah ambang Köppen, wilayah dapat masuk tipe Aw apabila syarat kelompok A terpenuhi dan kriteria tipe tropis lainnya telah diperiksa."
                                />
                            </div>

                            {/* RUMUS */}
                            <div className="mt-5 rounded-2xl border border-[#bfe2d5] bg-white p-6 sm:p-7">
                                <p className="text-sm font-bold uppercase tracking-wide text-[#16805f]">
                                    Rumus ambang curah hujan
                                </p>

                                <div className="mt-3 rounded-xl bg-[#edf8f3] px-4 py-5 text-center">
                                    <p className="text-lg font-bold text-[#075d4e] sm:text-2xl">
                                        P = 100 − (R / 25)
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600">
                                        R adalah curah hujan tahunan dalam mm.
                                    </p>
                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-3">
                                    <div className="rounded-xl bg-[#f7faf9] p-4">
                                        <p className="text-xs font-bold uppercase text-gray-500">
                                            Curah hujan tahunan
                                        </p>
                                        <p className="mt-1 text-2xl font-black">
                                            2.000 mm
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-[#f7faf9] p-4">
                                        <p className="text-xs font-bold uppercase text-gray-500">
                                            Perhitungan
                                        </p>
                                        <p className="mt-1 text-2xl font-black">
                                            100 − 80
                                        </p>
                                        <p className="mt-1 text-sm text-gray-600">
                                            2.000 ÷ 25 = 80
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-[#e1f5ed] p-4">
                                        <p className="text-xs font-bold uppercase text-[#087b68]">
                                            Ambang
                                        </p>
                                        <p className="mt-1 text-2xl font-black text-[#075d4e]">
                                            20 mm
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-7 text-gray-600">
                                    Contoh: jika bulan terkering 30 mm, nilainya
                                    kurang dari 60 mm tetapi lebih besar dari
                                    ambang 20 mm. Kondisi ini mendukung Am,
                                    dengan syarat suhu kelompok A terpenuhi.
                                    Jika bulan terkering 10 mm, nilainya berada
                                    di bawah ambang sehingga mendukung Aw.
                                </p>
                            </div>

                            {/* GRAFIK AM AW */}
                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                                <RainfallChart
                                    type="Am"
                                    subtitle="Musim kering relatif tidak ekstrem"
                                    color="#159a78"
                                    note="Perhatikan bulan dengan batang lebih rendah. Grafik merupakan ilustrasi pola, bukan data stasiun cuaca tertentu."
                                />
                                <RainfallChart
                                    type="Aw"
                                    subtitle="Musim kering lebih tegas"
                                    color="#e5a12b"
                                    note="Beberapa bulan memiliki curah hujan sangat rendah. Penentuan akhir tetap memerlukan data suhu dan hujan yang lengkap."
                                />
                            </div>
                        </section>

                        {/* CS DAN CW */}
                        <section className="mt-12">
                            <SectionTitle
                                eyebrow="Bagian 3 · Iklim sedang"
                                title="Cs dan Cw: perhatikan kapan musim kering terjadi"
                                description="Kedua kode termasuk kelompok C, tetapi waktu terjadinya musim kering berbeda. Bandingkan curah hujan pada musim panas dan musim dingin."
                            />

                            <div className="grid gap-5 lg:grid-cols-2">
                                <ClimateCard
                                    code="Cs"
                                    name="Musim panas kering"
                                    tagline="Dry summer climate"
                                    colorClass="bg-gradient-to-r from-[#dbeafe] to-[#eff6ff]"
                                    criteria={[
                                        'Musim panas relatif kering dibandingkan musim dingin.',
                                        'Bulan terkering pada musim panas memiliki curah hujan kurang dari 40 mm.',
                                        'Hujan bulan terkering'