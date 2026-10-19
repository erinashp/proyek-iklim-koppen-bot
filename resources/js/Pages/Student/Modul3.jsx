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
                                       
                                                                                'Hujan bulan terkering musim panas juga kurang dari sepertiga hujan bulan terbasah pada musim dingin.',
                                    ]}
                                    clues="Bandingkan bulan terkering pada musim panas dengan bulan terbasah pada musim dingin. Hujan rendah di musim panas lalu meningkat di musim dingin adalah petunjuk tipe Cs."
                                />

                                <ClimateCard
                                    code="Cw"
                                    name="Musim dingin kering"
                                    tagline="Dry winter climate"
                                    colorClass="bg-gradient-to-r from-[#ffe9d6] to-[#fff6ec]"
                                    criteria={[
                                        'Musim dingin relatif kering, sedangkan hujan meningkat pada musim panas.',
                                        'Bulan terkering pada musim dingin kurang dari sepersepuluh curah hujan bulan terbasah pada musim panas.',
                                        'Penentuan musim panas dan musim dingin mengikuti belahan bumi lokasi.',
                                    ]}
                                    clues="Bandingkan bulan terkering pada musim dingin dengan bulan terbasah pada musim panas. Musim dingin yang jauh lebih kering adalah petunjuk tipe Cw."
                                />
                            </div>

                            {/* GRAFIK CS CW */}
                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                                <RainfallChart
                                    type="Cs"
                                    subtitle="Musim panas jauh lebih kering"
                                    color="#4f86d9"
                                    note="Hujan rendah pada pertengahan tahun lalu meningkat menjelang musim dingin. Bulan yang mewakili musim panas dan dingin bergantung pada belahan bumi; grafik ini hanya skema pola."
                                />
                                <RainfallChart
                                    type="Cw"
                                    subtitle="Musim dingin jauh lebih kering"
                                    color="#d97a4f"
                                    note="Hujan sangat rendah di awal dan akhir tahun, lalu memuncak pada musim panas. Grafik merupakan ilustrasi pola, bukan data stasiun cuaca tertentu."
                                />
                            </div>

                            {/* CONTOH CS CW */}
                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                                <ContohHitung
                                    judul="Contoh analisis Cs"
                                    data="Wilayah di belahan bumi utara: bulan terkering pada musim panas 20 mm dan bulan terbasah pada musim dingin 90 mm."
                                    langkah={[
                                        'Sepertiga dari 90 mm = 30 mm.',
                                        '20 mm < 40 mm dan 20 mm < 30 mm.',
                                    ]}
                                    hasil="Memenuhi kriteria presipitasi Cs"
                                    catatan="Syarat suhu kelompok C tetap harus diperiksa."
                                />
                                <ContohHitung
                                    judul="Contoh analisis Cw"
                                    data="Bulan terkering pada musim dingin 12 mm dan bulan terbasah pada musim panas 180 mm."
                                    langkah={[
                                        'Sepersepuluh dari 180 mm = 18 mm.',
                                        '12 mm < 18 mm.',
                                    ]}
                                    hasil="Memenuhi kriteria presipitasi Cw"
                                    catatan="Syarat suhu kelompok C tetap harus diperiksa."
                                />
                            </div>

                            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
                                <strong>Catatan penting:</strong> pada kondisi
                                tertentu, suatu lokasi dapat memenuhi kriteria
                                presipitasi Cs dan Cw sekaligus. Peel,
                                Finlayson, dan McMahon (2007) membahas kasus
                                seperti ini; penentuan akhir perlu
                                mempertimbangkan distribusi hujan musim panas
                                dan musim dingin serta aturan klasifikasi yang
                                digunakan.
                            </div>
                        </section>

                        {/* PERBANDINGAN CEPAT */}
                        <section className="mt-12">
                            <SectionTitle
                                eyebrow="Bagian 4 · Perbandingan cepat"
                                title="Bandingkan keempat tipe sekaligus"
                                description="Gunakan tabel ini untuk melihat fokus pembeda dan data kunci tiap tipe."
                            />
                            <TabelBanding {...perbandingan} />
                        </section>

                        {/* LANGKAH SISTEMATIS */}
                        <section className="mt-12">
                            <SectionTitle
                                eyebrow="Bagian 5 · Langkah analisis"
                                title="Langkah sistematis menentukan tipe"
                                description="Ikuti urutan ini agar kesimpulanmu disertai angka dan alasan."
                            />
                            <ol className="space-y-3">
                                {langkahSistematis.map((teks, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 rounded-2xl border border-[#dce8e5] bg-white p-4"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-sm font-bold text-white">
                                            {i + 1}
                                        </span>
                                        <p className="leading-7 text-gray-700">{teks}</p>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* LATIHAN ANALISIS */}
                        <section className="mt-12">
                            <SectionTitle
                                eyebrow="Bagian 6 · Latihan analisis"
                                title="Latihan analisis"
                                description="Data berikut bersifat hipotetis untuk latihan. Kerjakan dulu di buku catatanmu, lalu buka pembahasannya."
                            />
                            <Latihan />
                        </section>

                        {/* KUIS */}
                        <section className="mt-12">
                            <SectionTitle
                                eyebrow="Bagian 7 · Kuis"
                                title="Kuis pilihan ganda"
                                description="Pilih satu jawaban di setiap soal, lalu tekan Periksa Jawaban."
                            />
                            <Kuis />
                        </section>

                        {/* GLOSARIUM */}
                        <section className="mt-12">
                            <SectionTitle
                                eyebrow="Bagian 8 · Glosarium"
                                title="Istilah penting"
                            />
                            <div className="grid gap-3 md:grid-cols-2">
                                {glosarium.map(([istilah, arti]) => (
                                    <div
                                        key={istilah}
                                        className="rounded-2xl border border-[#dce8e5] bg-white p-4"
                                    >
                                        <p className="font-bold text-[#087b68]">{istilah}</p>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            {arti}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* REFERENSI */}
                        <section className="mt-12 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <h2 className="text-xl font-bold text-[#123b49]">Referensi</h2>
                            <ol className="mt-4 space-y-3">
                                {referensi.map((r, i) => (
                                    <li
                                        key={i}
                                        className="rounded-xl bg-[#f8fbfa] p-4 text-sm leading-relaxed text-gray-700"
                                    >
                                        <span className="font-semibold text-[#087b68]">
                                            {i + 1}.{' '}
                                        </span>
                                        {r.teks}{' '}
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
                            <p className="mt-4 text-sm leading-6 text-gray-500">
                                Catatan penggunaan sumber: kriteria angka dalam modul merujuk pada definisi Köppen-Geiger yang dipublikasikan dalam literatur ilmiah. Grafik dan angka pada contoh latihan bersifat ilustratif, bukan data observasi. Untuk penelitian wilayah tertentu, gunakan data suhu dan curah hujan jangka panjang yang dapat ditelusuri sumbernya.
                            </p>
                        </section>

                        {/* SELESAIKAN MODUL */}
                        <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">
                            <CompleteModuleButton moduleNumber={3} />
                        </div>

                        {/* NAVIGASI MODUL */}
                        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                            <Link
                                href={route('student.modul2')}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Modul Sebelumnya
                            </Link>

                            <Link
                                href={route('student.material')}
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066455]"
                            >
                                Kembali ke Daftar Materi
                                <span>→</span>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

/* ================= DATA TAMBAHAN ================= */

const perbandingan = {
    headers: ['Pertanyaan analisis', 'Am', 'Aw', 'Cs', 'Cw'],
    rows: [
        ['Kelompok utama', 'A — tropis', 'A — tropis', 'C — sedang', 'C — sedang'],
        ['Fokus pembeda', 'Bulan terkering vs ambang', 'Bulan terkering vs ambang', 'Musim panas kering', 'Musim dingin kering'],
        ['Pola hujan', 'Monsun; ada bulan kering tetapi masih di atas atau tepat ambang', 'Musim kering lebih kuat', 'Musim panas jauh lebih kering', 'Musim dingin jauh lebih kering'],
        ['Data kunci', 'P tahunan dan bulan terkering', 'P tahunan dan bulan terkering', 'Bulan terkering musim panas dan terbasah musim dingin', 'Bulan terkering musim dingin dan terbasah musim panas'],
    ],
};

const langkahSistematis = [
    'Periksa suhu rata-rata bulanan untuk memastikan kelompok iklim utama.',
    'Susun atau baca data curah hujan dari Januari sampai Desember.',
    'Tandai bulan terkering dan bulan terbasah.',
    'Tentukan musim panas dan musim dingin sesuai belahan bumi.',
    'Untuk Am/Aw, hitung ambang dari curah hujan tahunan lalu bandingkan dengan bulan terkering.',
    'Untuk Cs/Cw, bandingkan hujan pada bulan-bulan kering dan basah sesuai kriteria masing-masing.',
    'Tuliskan kesimpulan disertai angka dan alasan, bukan hanya nama tipe iklim.',
];

const latihan = [
    {
        judul: 'Am atau Aw?',
        soal: 'Sebuah wilayah tropis memiliki curah hujan tahunan 1.500 mm. Curah hujan bulan terkering 25 mm. Hitung ambang dan tentukan apakah data curah hujan mendukung Am atau Aw.',
        pembahasan: 'Ambang = 100 − (1.500/25) = 100 − 60 = 40 mm. Bulan terkering 25 mm < 40 mm dan < 60 mm, sehingga data mendukung Aw jika syarat suhu kelompok A terpenuhi.',
    },
    {
        judul: 'Am atau Aw?',
        soal: 'Wilayah tropis lain memiliki curah hujan tahunan 2.500 mm dan curah hujan bulan terkering 5 mm. Hitung ambang, lalu tentukan tipe yang didukung data curah hujannya.',
        pembahasan: 'Ambang = 100 − (2.500/25) = 100 − 100 = 0 mm. Bulan terkering 5 mm berada di bawah 60 mm dan sama dengan atau lebih besar daripada ambang 0 mm, sehingga data curah hujan mendukung Am jika syarat suhu kelompok A terpenuhi.',
    },
    {
        judul: 'Cs atau Cw?',
        soal: 'Pada wilayah beriklim C di belahan bumi utara, bulan terkering musim panas memiliki hujan 18 mm. Bulan terbasah musim dingin memiliki hujan 75 mm. Apakah pola tersebut memenuhi kriteria curah hujan Cs? Tunjukkan perhitungannya.',
        pembahasan: 'Sepertiga dari 75 mm = 25 mm. Bulan terkering musim panas 18 mm < 40 mm dan 18 mm < 25 mm, sehingga memenuhi kriteria curah hujan Cs.',
    },
    {
        judul: 'Cs atau Cw?',
        soal: 'Pada wilayah beriklim C, bulan terkering musim dingin memiliki hujan 14 mm, sedangkan bulan terbasah musim panas 200 mm. Apakah pola tersebut memenuhi kriteria curah hujan Cw? Jelaskan.',
        pembahasan: 'Sepersepuluh dari 200 mm = 20 mm. Bulan terkering musim dingin 14 mm < 20 mm, sehingga memenuhi kriteria curah hujan Cw.',
    },
    {
        judul: 'Menafsirkan pola',
        soal: 'Grafik curah hujan suatu wilayah menunjukkan hujan paling rendah pada musim panas dan meningkat pada musim dingin. Kode pola curah hujan kelompok C yang paling mungkin adalah apa? Sebutkan data tambahan yang masih perlu diperiksa.',
        pembahasan: 'Pola yang paling mungkin adalah Cs. Tetap periksa data suhu untuk memastikan kelompok C serta hitung perbandingan hujan sesuai kriteria.',
    },
];

const kuis = [
    {
        q: 'Pada kelompok A, nilai suhu rata-rata bulan terdingin yang menjadi syarat dasar adalah ...',
        options: ['≥ 18°C', '< 18°C', '≥ 10°C', '< 0°C'],
        answer: 0,
        pembahasan: 'Kelompok A memiliki suhu rata-rata bulan terdingin ≥ 18°C.',
    },
    {
        q: 'Curah hujan tahunan 2.000 mm menghasilkan ambang Am/Aw sebesar ...',
        options: ['10 mm', '20 mm', '40 mm', '80 mm'],
        answer: 1,
        pembahasan: '100 − (2.000/25) = 100 − 80 = 20 mm.',
    },
    {
        q: 'Jika ambang suatu wilayah tropis adalah 20 mm dan bulan terkering 10 mm, data curah hujan mendukung ...',
        options: ['Af', 'Am', 'Aw', 'Cs'],
        answer: 2,
        pembahasan: '10 mm lebih kecil dari ambang 20 mm, sehingga data curah hujan mendukung Aw apabila syarat suhu kelompok A terpenuhi.',
    },
    {
        q: 'Huruf s pada Cs menunjukkan ...',
        options: ['Musim dingin kering', 'Musim panas kering', 'Hujan sepanjang tahun', 'Suhu musim dingin sangat rendah'],
        answer: 1,
        pembahasan: 'Huruf s menunjukkan musim panas kering.',
    },
    {
        q: 'Untuk kriteria Cs, bulan terkering musim panas harus ...',
        options: [
            '< 40 mm dan < sepertiga bulan terbasah musim dingin',
            '< 60 mm tanpa perbandingan musim',
            '< sepersepuluh bulan terbasah musim panas',
            '≥ 60 mm',
        ],
        answer: 0,
        pembahasan: 'Kriteria Cs memakai batas bulan terkering musim panas < 40 mm dan kurang dari sepertiga bulan terbasah musim dingin.',
    },
    {
        q: 'Untuk kriteria Cw, perbandingan yang diperiksa adalah ...',
        options: [
            'Bulan terkering musim panas terhadap hujan tahunan',
            'Bulan terbasah musim dingin terhadap suhu tahunan',
            'Bulan terkering musim dingin terhadap sepersepuluh bulan terbasah musim panas',
            'Suhu bulan terdingin terhadap curah hujan tahunan',
        ],
        answer: 2,
        pembahasan: 'Kriteria Cw membandingkan bulan terkering musim dingin dengan sepersepuluh bulan terbasah musim panas.',
    },
    {
        q: 'Grafik menunjukkan musim dingin kering dan musim panas basah pada wilayah kelompok C. Tipe yang paling sesuai adalah ...',
        options: ['Cs', 'Cw', 'Am', 'Af'],
        answer: 1,
        pembahasan: 'Pola musim dingin kering dan musim panas basah menunjukkan Cw.',
    },
    {
        q: 'Mengapa data suhu tetap perlu diperiksa walaupun pola hujan cocok dengan Cs?',
        options: [
            'Karena kode Cs juga harus memenuhi syarat kelompok C',
            'Karena curah hujan tidak digunakan dalam Köppen',
            'Karena semua wilayah Cs bersuhu di bawah 0°C',
            'Karena data bulanan tidak relevan',
        ],
        answer: 0,
        pembahasan: 'Kriteria pola hujan saja tidak cukup; syarat suhu kelompok utama juga harus sesuai.',
    },
];

const glosarium = [
    ['Curah hujan bulanan', 'Jumlah atau rata-rata curah hujan pada suatu bulan, biasanya dalam mm.'],
    ['Curah hujan tahunan', 'Jumlah curah hujan selama dua belas bulan dalam satu tahun.'],
    ['Bulan terkering', 'Bulan dengan curah hujan paling rendah dalam periode yang dianalisis.'],
    ['Bulan terbasah', 'Bulan dengan curah hujan paling tinggi dalam periode yang dianalisis.'],
    ['Ambang curah hujan', 'Nilai pembanding untuk membantu menentukan tipe iklim berdasarkan kriteria tertentu.'],
    ['Köppen-Geiger', 'Sistem klasifikasi iklim yang menggunakan data suhu dan curah hujan.'],
];

const referensi = [
    {
        teks: 'Peel, M. C., Finlayson, B. L., & McMahon, T. A. (2007). Updated world map of the Köppen-Geiger climate classification. Hydrology and Earth System Sciences, 11, 1633–1644.',
        url: 'https://doi.org/10.5194/hess-11-1633-2007',
    },
    {
        teks: 'He, H., Luo, G., Cai, P., Hamdi, R., Termonia, P., De Maeyer, P., Kurban, A., & Li, J. (2021). Assessment of climate change in Central Asia from 1980 to 2100 using the Köppen-Geiger climate classification. Atmosphere, 12(1), 123.',
        url: 'https://doi.org/10.3390/atmos12010123',
    },
];

/* ============== KOMPONEN TAMBAHAN ============== */

function ContohHitung({ judul, data, langkah, hasil, catatan }) {
    return (
        <article className="rounded-2xl border border-[#f1dfb9] bg-[#fffaf0] p-5 shadow-sm">
            <div className="flex items-center gap-2">
                <span className="text-2xl">🧮</span>
                <h3 className="font-bold text-[#123b49]">{judul}</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-700">{data}</p>

            <ol className="mt-3 space-y-2">
                {langkah.map((l, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl bg-white/80 p-3 text-sm text-gray-700"
                    >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                            {i + 1}
                        </span>
                        <span className="leading-6">{l}</span>
                    </li>
                ))}
            </ol>

            <div className="mt-3 inline-flex rounded-xl bg-[#087b68] px-4 py-2 text-sm font-semibold text-white">
                {hasil}
            </div>
            {catatan && (
                <p className="mt-2 text-xs leading-5 text-gray-500">{catatan}</p>
            )}
        </article>
    );
}

function TabelBanding({ headers, rows }) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-[#d4e4e1] bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
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
                                    className={`px-4 py-3 leading-relaxed ${
                                        i === 0
                                            ? 'font-bold text-[#087b68]'
                                            : 'text-gray-700'
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

function Latihan() {
    return (
        <div className="space-y-4">
            {latihan.map((l, i) => (
                <div
                    key={i}
                    className="rounded-2xl border border-[#dce8e5] bg-white p-5"
                >
                    <p className="text-xs font-bold uppercase tracking-wide text-[#16805f]">
                        Soal {i + 1}
                    </p>
                    <h3 className="mt-1 font-bold text-[#123b49]">{l.judul}</h3>
                    <p className="mt-2 leading-7 text-gray-700">{l.soal}</p>

                    <details className="mt-3 rounded-xl bg-[#f4f8f7] p-4">
                        <summary className="cursor-pointer text-sm font-semibold text-[#087b68]">
                            Lihat pembahasan
                        </summary>
                        <p className="mt-2 text-sm leading-7 text-gray-700">
                            {l.pembahasan}
                        </p>
                    </details>
                </div>
            ))}
        </div>
    );
}

function Kuis() {
    const [jawaban, setJawaban] = useState({});
    const [selesai, setSelesai] = useState(false);

    const skor = kuis.reduce(
        (total, item, i) => total + (jawaban[i] === item.answer ? 1 : 0),
        0
    );
    const terisi = Object.keys(jawaban).length;

    const ulangi = () => {
        setJawaban({});
        setSelesai(false);
    };

    return (
        <div className="space-y-5">
            {kuis.map((item, i) => (
                <div
                    key={i}
                    className="rounded-2xl border border-[#dce8e5] bg-white p-5"
                >
                    <p className="font-semibold leading-7 text-[#123b49]">
                        {i + 1}. {item.q}
                    </p>

                    <div className="mt-3 grid gap-2">
                        {item.options.map((opt, j) => {
                            const dipilih = jawaban[i] === j;
                            let cls =
                                'border-[#d4e4e1] bg-white hover:border-[#087b68]';
                            if (!selesai && dipilih) {
                                cls = 'border-[#087b68] bg-[#e1f5ed]';
                            }
                            if (selesai && j === item.answer) {
                                cls = 'border-emerald-500 bg-emerald-50';
                            }
                            if (selesai && dipilih && j !== item.answer) {
                                cls = 'border-red-400 bg-red-50';
                            }

                            return (
                                <button
                                    key={j}
                                    type="button"
                                    disabled={selesai}
                                    onClick={() =>
                                        setJawaban({ ...jawaban, [i]: j })
                                    }
                                    className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm leading-6 text-gray-700 transition ${cls}`}
                                >
                                    <span className="font-bold text-[#087b68]">
                                        {String.fromCharCode(65 + j)}.
                                    </span>
                                    <span>{opt}</span>
                                </button>
                            );
                        })}
                    </div>

                    {selesai && (
                        <p className="mt-3 rounded-xl bg-[#f4f8f7] p-3 text-sm leading-6 text-gray-700">
                            <strong>Pembahasan:</strong> {item.pembahasan}
                        </p>
                    )}
                </div>
            ))}

            <div className="flex flex-wrap items-center gap-3">
                {!selesai ? (
                    <button
                        type="button"
                        disabled={terisi < kuis.length}
                        onClick={() => setSelesai(true)}
                        className="rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066455] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Periksa Jawaban
                    </button>
                ) : (
                    <>
                        <div className="rounded-xl bg-[#e1f5ed] px-5 py-3 font-bold text-[#075d4e]">
                            Skor kamu: {skor} dari {kuis.length}
                        </div>
                        <button
                            type="button"
                            onClick={ulangi}
                            className="rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                        >
                            Ulangi Kuis
                        </button>
                    </>
                )}
                {!selesai && terisi < kuis.length && (
                    <p className="text-sm text-gray-500">
                        Terjawab {terisi} dari {kuis.length} soal.
                    </p>
                )}
            </div>
        </div>
    );
}

{/* NAVIGASI MODUL */}
<div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
    <Link
        href={route('student.modul2')}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
    >
        <span>←</span>
        Modul Sebelumnya
    </Link>

    <Link
        href={route('student.modul4')}
        className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066455]"
    >
        Modul Berikutnya
        <span>→</span>
    </Link>
</div>
