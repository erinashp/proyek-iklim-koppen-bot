import { Head, Link, useForm } from '@inertiajs/react';

export default function Objectives({ auth }) {
    const user = auth.user;
    const { post } = useForm();

    const roleLabel = user.role === 'teacher' ? 'Guru' : 'Siswa';

    const avatarUrl = user.avatar
        ? `/storage/${user.avatar}`
        : null;

    const initial = user.name
        ? user.name.charAt(0).toUpperCase()
        : 'U';

    const logout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    const menuItems = [
        {
            icon: '⌂',
            label: 'Beranda',
            href: route('student.dashboard'),
        },
        {
            icon: '☷',
            label: 'Petunjuk',
            href: route('student.guide'),
        },
        {
            icon: '◎',
            label: 'Tujuan Belajar',
            href: route('student.objectives'),
            active: true,
        },
        {
            icon: '☼',
            label: 'Materi Köppen',
            href: route('student.material'),
        },
        {
            icon: '◇',
            label: 'Tantangan',
            href: '#tantangan',
        },
        {
            icon: '▥',
            label: 'Hasil Skor',
            href: '#hasil-skor',
        },
        {
            icon: 'ⓘ',
            label: 'Chat AI Bot',
            href: '#chat-ai-bot',
        },
    ];

    const objectives = [
        'Menjelaskan pengertian klasifikasi iklim dan kegunaannya dalam memahami kondisi wilayah.',

        'Menganalisis kriteria curah hujan dan suhu udara pada tiap kelompok iklim (A, B, C, D, dan E).',

        'Membedakan tipe-tipe iklim yang memiliki kriteria mirip, seperti Am dan Aw, atau Cs dan Cw.',

        'Menentukan klasifikasi iklim suatu wilayah berdasarkan data curah hujan dan suhu yang diberikan.',

        'Menerapkan kriteria klasifikasi iklim Köppen pada studi kasus wilayah di Indonesia dan dunia melalui simulasi tanya-jawab bersama GeoBot.',

        'Menjelaskan dampak tipe iklim terhadap kehidupan, seperti pola pertanian, persebaran vegetasi, dan aktivitas manusia sehari-hari.',
    ];

    // Progres sementara. Nantinya dapat diambil dari database.
    const completedObjectives = 0;
    const totalObjectives = objectives.length;

    const progressPercentage =
        (completedObjectives / totalObjectives) * 100;

    return (
        <>
            <Head title="Tujuan Pembelajaran | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR */}
                <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-gradient-to-b from-[#07384b] to-[#087b70] text-white md:flex">

                    {/* Logo */}
                    <div className="px-6 pt-7">
                        <Link
                            href={route('student.dashboard')}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-2xl">
                                🌍
                            </div>

                            <h1 className="text-xl font-bold tracking-wide">
                                IklimKöppenBot
                            </h1>
                        </Link>
                    </div>

                    <div className="mx-4 mt-6 border-t border-white/20" />

                    {/* Navigasi */}
                    <div className="px-4 pt-5">
                        <p className="px-3 text-xs font-bold uppercase tracking-[0.15em] text-teal-100/80">
                            Ruang Belajar Köppen
                        </p>

                        <nav className="mt-3 space-y-1">
                            {menuItems.map((item) => {
                                const className = `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                                    item.active
                                        ? 'bg-[#e8f8f1] font-semibold text-[#07384b]'
                                        : 'text-teal-50 hover:bg-white/10'
                                }`;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        aria-current={
                                            item.active ? 'page' : undefined
                                        }
                                        className={className}
                                    >
                                        <span className="w-5 text-center text-xl">
                                            {item.icon}
                                        </span>

                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Profil dan Logout */}
                    <div className="mt-auto p-4">
                        <Link
                            href={route('student.profile')}
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
                            type="button"
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
                        <div className="mx-auto max-w-[1500px] px-6 py-6 sm:px-10">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Media Pembelajaran Kelas X
                            </p>

                            <h2 className="mt-1 text-3xl font-bold text-[#123b49]">
                                Tujuan Pembelajaran
                            </h2>

                            <p className="mt-1 text-gray-500">
                                Kompetensi yang akan kamu capai setelah
                                mempelajari klasifikasi iklim Köppen.
                            </p>
                        </div>
                    </header>

                    {/* ISI HALAMAN */}
                    <main className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">

                        {/* KARTU TUJUAN */}
                        <section className="relative overflow-hidden rounded-3xl border border-[#d4e8e4] bg-white p-5 shadow-sm sm:p-8">

                            {/* Dekorasi */}
                            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#d8f1e9]" />
                            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-[#d8f1e9]" />

                            {/* Judul */}
                            <div className="relative mb-7">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-3xl font-extrabold leading-tight text-[#075568] sm:text-3xl">
                                            Tujuan
                                            <br />
                                            Pembelajaran
                                        </h3>

                                        <div className="mt-5 h-2 w-32 rounded-full bg-[#55c2ae]" />
                                    </div>

                                    <div className="hidden text-4xl text-[#55bda9] sm:block">
                                        📍
                                    </div>
                                </div>
                            </div>

                            {/* Daftar tujuan */}
                            <div className="space-y-3">
                                {objectives.map((objective, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 rounded-2xl border border-[#e4eeec] bg-white p-4 shadow-sm transition hover:border-[#b9ded5] hover:shadow-md sm:gap-6 sm:p-5"
                                    >
                                        {/* Nomor */}
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-4xl font-extrabold text-[#55bda9] sm:h-20 sm:w-20 sm:text-5xl">
                                            {index + 1}
                                        </div>

                                        {/* Garis pemisah */}
                                        <div className="hidden h-16 border-l-2 border-dotted border-[#b9ded5] sm:block" />

                                        {/* Deskripsi */}
                                        <p className="flex-1 text-sm font-medium leading-relaxed text-[#174453] sm:text-base">
                                            {objective}
                                        </p>

                                        {/* Ikon ceklis */}
                                        <div
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#69c8b4] text-lg font-bold text-[#55bda9] sm:h-11 sm:w-11"
                                            aria-label="Tujuan pembelajaran"
                                        >
                                            ✓
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* PROGRES BELAJAR */}
                            <div className="mt-7 rounded-2xl border border-[#e1efec] bg-[#f4fbf9] p-5 sm:p-6">

                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#087b70] text-2xl text-white">
                                        ▥
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-[#123b49] sm:text-2xl">
                                            Progres Belajar
                                        </h3>

                                        <p className="mt-1 text-sm text-[#42616a] sm:text-base">
                                            {completedObjectives} dari {totalObjectives} tujuan tercapai
                                        </p>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div
                                    className="mt-5 h-4 overflow-hidden rounded-full border border-[#dce8e5] bg-[#e9eeee]"
                                    role="progressbar"
                                    aria-valuenow={progressPercentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-label="Progres tujuan pembelajaran"
                                >
                                    <div
                                        className="h-full rounded-full bg-[#55c2ae] transition-all duration-500"
                                        style={{
                                            width: `${progressPercentage}%`,
                                        }}
                                    />
                                </div>

                                <p className="mt-2 text-right text-xs font-semibold text-[#16805f]">
                                    {progressPercentage}%
                                </p>
                            </div>

                            {/* Tombol mulai materi */}
                            <div className="mt-5">
                                <Link
                                    href={route('student.material')}
                                    className="flex w-full items-center justify-center rounded-2xl bg-[#087b70] px-6 py-5 text-lg font-bold text-white shadow-sm transition hover:bg-[#06675e] sm:text-xl"
                                >
                                    Mulai Materi
                                    <span className="ml-3">→</span>
                                </Link>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </>
    );
}