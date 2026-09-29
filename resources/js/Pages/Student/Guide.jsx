import { Head, Link, useForm } from '@inertiajs/react';

export default function Guide({ auth }) {
    const user = auth.user;
    const { post } = useForm();

    const roleLabel = user.role === 'teacher' ? 'Guru' : 'Siswa';

    const avatarUrl = user.avatar
        ? `/storage/${user.avatar}`
        : null;

    const initial = user.name
        ? user.name.charAt(0).toUpperCase()
        : 'U';

    const dashboardUrl = user.role === 'teacher'
        ? route('teacher.dashboard')
        : route('student.dashboard');

    const profileUrl = user.role === 'teacher'
        ? route('teacher.profile')
        : route('student.profile');

    const logout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    const steps = [
        {
            number: '1',
            icon: '◎',
            title: 'Buka Tujuan Pembelajaran',
            description:
                'Pahami kompetensi dan kemampuan yang akan kamu capai setelah mempelajari klasifikasi iklim Köppen.',
        },
        {
            number: '2',
            icon: '▣',
            title: 'Pelajari Materi Köppen',
            description:
                'Baca konsep klasifikasi iklim, karakteristik setiap kelompok, serta contoh wilayahnya.',
        },
        {
            number: '3',
            icon: '◇',
            title: 'Coba Tantangan',
            description:
                'Jawab studi kasus untuk menguji pemahamanmu dalam menentukan kelompok iklim berdasarkan karakteristiknya.',
        },
        {
            number: '4',
            icon: '▥',
            title: 'Lihat Hasil Skor',
            description:
                'Periksa jumlah jawaban benar, persentase nilai, dan perkembangan hasil belajarmu.',
        },
        {
            number: '5',
            icon: '☏',
            title: 'Gunakan Chatbot GeoBot',
            description:
                'Tanyakan konsep iklim Köppen dan dapatkan bantuan belajar melalui chatbot berbasis aturan.',
        },
    ];

    return (
        <>
            <Head title="Petunjuk | GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR */}
                <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-gradient-to-b from-[#07384b] to-[#087b70] text-white md:flex">

                    {/* Logo */}
                    <div className="px-6 pt-7">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-2xl">
                                🌍
                            </div>

                            <h1 className="text-2xl font-bold tracking-wide">
                                GeoBot
                            </h1>
                        </div>
                    </div>

                    <div className="mx-4 mt-6 border-t border-white/20" />

                    {/* Menu Navigasi */}
                    <div className="px-4 pt-5">
                        <p className="px-3 text-xs font-bold uppercase tracking-[0.15em] text-teal-100/80">
                            Ruang Belajar Köppen
                        </p>

                        <nav className="mt-3 space-y-1">

                            <Link
                                href={dashboardUrl}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">⌂</span>
                                <span>Beranda</span>
                            </Link>

                            {/* Menu Aktif */}
                            <div className="flex items-center gap-3 rounded-xl bg-[#e8f8f1] px-4 py-3 font-semibold text-[#07384b]">
                                <span className="w-5 text-center text-xl">☷</span>
                                <span>Petunjuk</span>
                            </div>

                            <a
                                href={`${dashboardUrl}#tujuan`}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">◎</span>
                                <span>Tujuan Belajar</span>
                            </a>

                            <a
                                href={`${dashboardUrl}#materi`}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">☼</span>
                                <span>Materi Köppen</span>
                            </a>

                            <a
                                href={`${dashboardUrl}#tantangan`}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">◇</span>
                                <span>Tantangan</span>
                            </a>

                            <a
                                href={`${dashboardUrl}#hasil-skor`}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">▥</span>
                                <span>Hasil Skor</span>
                            </a>

                            <a
                                href={`${dashboardUrl}#bantuan`}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">ⓘ</span>
                                <span>Bantuan</span>
                            </a>
                        </nav>
                    </div>

                    {/* Profil User */}
                    <div className="mt-auto p-4">

                        <Link
                            href={profileUrl}
                            className="mb-3 flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3 transition hover:bg-white/20"
                        >
                            {avatarUrl ? (
                                <img
                                    src={avatarUrl}
                                    alt="Foto profil"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#07384b]">
                                    {initial}
                                </div>
                            )}

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold">
                                    {user.name}
                                </p>
                                <p className="text-xs text-teal-100">
                                    {roleLabel} · Profil Saya
                                </p>
                            </div>

                            <span className="text-lg">›</span>
                        </Link>

                        <button
                            onClick={logout}
                            className="w-full rounded-xl border border-white/20 px-4 py-2.5 text-left text-sm text-white transition hover:bg-white/10"
                        >
                            ↪ Keluar
                        </button>
                    </div>
                </aside>

                {/* KONTEN UTAMA */}
                <div className="min-h-screen md:ml-64">

                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 px-6 py-6 sm:flex-row sm:items-center sm:px-10">

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Media Pembelajaran Kelas X
                                </p>

                                <h2 className="mt-1 text-3xl font-bold text-[#123b49]">
                                    Petunjuk
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    Ikuti langkah berikut untuk mulai belajar dengan GeoBot.
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* MAIN CONTENT */}
                    <main className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">

                        {/* PENGANTAR */}
                        <section className="mb-8">
                            <h3 className="text-2xl font-bold text-[#123b49]">
                                Mulai perjalanan belajarmu
                            </h3>

                            <p className="mt-2 max-w-3xl leading-relaxed text-gray-500">
                                GeoBot membantu kamu memahami klasifikasi iklim Köppen
                                melalui materi, latihan kasus, dan evaluasi hasil belajar.
                                Ikuti panduan berikut agar proses belajarmu lebih terarah.
                            </p>
                        </section>

                        {/* KARTU KENALI MENU */}
                        <section className="overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">

                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1f5ed] text-xl text-[#087b68]">
                                        ☷
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-[#123b49]">
                                            Kenali menu utama
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Inilah bagian-bagian utama yang akan kamu gunakan.
                                        </p>
                                    </div>
                                </div>

                                {/* Ilustrasi dashboard mini */}
                                <div className="mt-6 overflow-hidden rounded-2xl border border-[#d4e4e1] bg-[#f3f9f8] p-3 sm:p-5">

                                    <div className="flex min-h-[250px] overflow-hidden rounded-xl border border-[#d4e4e1] bg-white shadow-sm">

                                        {/* Mini sidebar */}
                                        <div className="hidden w-1/4 max-w-[170px] flex-col bg-[#07384b] p-3 text-white sm:flex">
                                            <div className="mb-5 flex items-center gap-2">
                                                <span className="text-lg">🌍</span>
                                                <span className="font-bold">GeoBot</span>
                                            </div>

                                            <div className="space-y-2 text-xs">
                                                {[
                                                    '⌂  Beranda',
                                                    '☷  Petunjuk',
                                                    '◎  Tujuan Belajar',
                                                    '☼  Materi Köppen',
                                                    '◇  Tantangan',
                                                    '▥  Hasil Skor',
                                                ].map((item, index) => (
                                                    <div
                                                        key={item}
                                                        className={`rounded-lg px-2 py-2 ${
                                                            index === 1
                                                                ? 'bg-[#e8f8f1] font-semibold text-[#07384b]'
                                                                : 'text-teal-50'
                                                        }`}
                                                    >
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Mini dashboard content */}
                                        <div className="min-w-0 flex-1 p-4 sm:p-5">
                                            <p className="text-[9px] font-bold uppercase tracking-wider text-[#16805f]">
                                                Media Pembelajaran Kelas X
                                            </p>

                                            <h4 className="mt-1 text-lg font-bold text-[#123b49]">
                                                Beranda
                                            </h4>

                                            <div className="mt-3 grid overflow-hidden rounded-lg bg-[#07384b] sm:grid-cols-2">
                                                <div className="p-4 text-white">
                                                    <p className="text-[9px] font-bold uppercase text-[#a8e5ce]">
                                                        Selamat datang di GeoBot
                                                    </p>

                                                    <p className="mt-2 text-sm font-bold">
                                                        Membaca pola iklim dunia dengan sistem Köppen.
                                                    </p>

                                                    <div className="mt-3 inline-block rounded-md bg-[#d9f99d] px-3 py-1 text-[9px] font-bold text-[#123b49]">
                                                        Mulai Belajar
                                                    </div>
                                                </div>

                                                <div className="hidden items-center justify-center bg-[#111333] text-5xl sm:flex">
                                                    🌐
                                                </div>
                                            </div>

                                            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                                                {['Petunjuk', 'Tujuan Belajar', 'Materi', 'Tantangan', 'Chatbot', 'Hasil Skor'].map((item) => (
                                                    <div
                                                        key={item}
                                                        className="rounded-lg border border-[#d4e4e1] bg-white p-3"
                                                    >
                                                        <div className="mb-2 h-5 w-5 rounded-md bg-[#e1f5ed]" />
                                                        <p className="text-[10px] font-bold text-[#123b49]">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-3 text-center text-xs text-gray-500">
                                    Ilustrasi sederhana tampilan Beranda GeoBot.
                                </p>
                            </div>
                        </section>

                        {/* LANGKAH BELAJAR */}
                        <section className="mt-10">
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                    Panduan penggunaan
                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-[#123b49]">
                                    Ikuti langkah belajar berikut
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    Selesaikan setiap bagian secara berurutan untuk memahami materi dengan lebih baik.
                                </p>
                            </div>

                            <div className="relative space-y-4">

                                {/* Garis timeline */}
                                <div className="absolute bottom-10 left-5 top-10 hidden w-0.5 bg-[#b9ddd0] sm:block" />

                                {steps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="relative sm:pl-14"
                                    >
                                        {/* Nomor langkah */}
                                        <div className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f3f9f8] bg-[#087b68] text-sm font-bold text-white shadow-sm sm:flex">
                                            {step.number}
                                        </div>

                                        {/* Kartu langkah */}
                                        <div className="flex flex-col gap-4 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-6">

                                            {/* Ikon */}
                                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e1f5ed] text-3xl text-[#087b68]">
                                                {step.icon}
                                            </div>

                                            {/* Deskripsi */}
                                            <div>
                                                <div className="mb-1 flex items-center gap-2 sm:hidden">
                                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                                                        {step.number}
                                                    </span>

                                                    <span className="text-xs font-semibold uppercase tracking-wide text-[#16805f]">
                                                        Langkah {step.number}
                                                    </span>
                                                </div>

                                                <h4 className="text-lg font-bold text-[#123b49]">
                                                    {step.title}
                                                </h4>

                                                <p className="mt-2 leading-relaxed text-gray-500">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA MULAI BELAJAR */}
                        <section className="mt-8 rounded-2xl border border-[#cce7d9] bg-[#effaf3] p-5 sm:p-6">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-center gap-4">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#d9f99d] text-3xl">
                                        🎓
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#123b49]">
                                            Siap memulai pembelajaran?
                                        </h3>

                                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                            Ikuti langkah-langkah di atas agar belajar iklim Köppen menjadi lebih terarah dan menyenangkan.
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href={dashboardUrl}
                                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#d9f99d] px-5 py-3 font-semibold text-[#123b49] transition hover:bg-[#c7ef7e]"
                                >
                                    Mulai Belajar
                                    <span>›</span>
                                </Link>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </>
    );
}