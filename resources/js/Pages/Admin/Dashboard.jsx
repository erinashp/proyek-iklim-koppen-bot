import React from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const initial = user?.name
        ? user.name.charAt(0).toUpperCase()
        : 'A';

    const handleLogout = () => {
        router.post(route('logout'));
    };

    // Menu khusus admin
    const menuItems = [
        {
            title: 'Dashboard',
            href: route('admin.dashboard'),
            icon: '⌂',
            active: true,
        },
        {
            title: 'Data Guru',
            href: '/admin/teachers',
            icon: '♙',
        },
        {
            title: 'Data Siswa',
            href: '/admin/students',
            icon: '♧',
        },
        {
            title: 'Materi Pembelajaran',
            href: '/admin/materials',
            icon: '▤',
        },
        {
            title: 'Tantangan / Kuis',
            href: '/admin/quizzes',
            icon: '✎',
        },
        {
            title: 'Hasil Kuis',
            href: '/admin/grades',
            icon: '▥',
        },
    ];

    // Kartu fitur utama admin
    const adminCards = [
        {
            number: '01',
            title: 'Data Guru',
            description:
                'Tambahkan akun guru baru dan lihat daftar guru yang terdaftar dalam sistem GeoBot.',
            href: '/admin/teachers',
            icon: '♙',
            action: 'Kelola Data Guru',
        },
        {
            number: '02',
            title: 'Data Siswa',
            description:
                'Tambahkan siswa baru, lihat daftar siswa, dan kelola informasi akun siswa.',
            href: '/admin/students',
            icon: '♧',
            action: 'Kelola Data Siswa',
        },
        {
            number: '03',
            title: 'Materi Pembelajaran',
            description:
                'Tambahkan dan kelola materi klasifikasi iklim Köppen sebagai sumber pembelajaran siswa.',
            href: '/admin/materials',
            icon: '▤',
            action: 'Kelola Materi',
        },
        {
            number: '04',
            title: 'Tantangan / Kuis',
            description:
                'Buat dan kelola tantangan atau kuis untuk menguji pemahaman siswa mengenai klasifikasi iklim.',
            href: '/admin/quizzes',
            icon: '✎',
            action: 'Kelola Tantangan',
        },
        {
            number: '05',
            title: 'Hasil Kuis Siswa',
            description:
                'Lihat hasil pengerjaan kuis dan pantau perkembangan belajar siswa.',
            href: '/admin/grades',
            icon: '▥',
            action: 'Lihat Hasil Kuis',
        },
    ];

    return (
        <>
            <Head title="Dashboard Admin" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* Sidebar Kiri */}
                <aside className="fixed inset-y-0 left-0 z-40 flex w-72 flex-col overflow-y-auto bg-gradient-to-b from-[#07384b] to-[#087b70] text-white">

                    {/* Logo */}
                    <div className="flex items-center gap-3 px-6 py-7">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                            🌍
                        </div>

                        <div>
                            <h1 className="text-lg font-bold tracking-wide">
                                GeoBot
                            </h1>
                            <p className="text-xs text-teal-100">
                                Media Pembelajaran Iklim
                            </p>
                        </div>
                    </div>

                    {/* Panel Admin */}
                    <div className="mx-5 rounded-2xl border border-white/15 bg-white/10 p-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-teal-100">
                            Panel Admin
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                            Kelola sistem pembelajaran
                        </p>
                    </div>

                    {/* Menu Navigasi */}
                    <nav className="mt-7 flex-1 space-y-2 px-4">
                        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-teal-100/70">
                            Menu Utama
                        </p>

                        {menuItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                                    item.active
                                        ? 'bg-white text-[#087b68] shadow-lg'
                                        : 'text-teal-50 hover:bg-white/10'
                                }`}
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-lg">
                                    {item.icon}
                                </span>

                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    {/* Profil dan Logout */}
                    <div className="border-t border-white/15 p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#123b49]">
                                {initial}
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold">
                                    {user?.name ?? 'Admin'}
                                </p>

                                <p className="truncate text-xs text-teal-100">
                                    {user?.email ?? ''}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <Link
                                href={route('admin.profile')}
                                className="rounded-lg border border-white/20 px-3 py-2 text-center text-xs font-medium transition hover:bg-white/10"
                            >
                                Profil
                            </Link>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="rounded-lg bg-white/15 px-3 py-2 text-xs font-medium transition hover:bg-white/25"
                            >
                                Keluar
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="ml-72 min-h-screen min-w-0">
                    <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">

                        {/* Header */}
                        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#087b68]">
                                    Panel Administrator
                                </p>

                                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#123b49] sm:text-3xl">
                                    Dashboard Admin
                                </h2>

                                <p className="mt-2 text-sm text-slate-500">
                                    Kelola pengguna dan konten pembelajaran GeoBot.
                                </p>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl border border-[#d4e4e1] bg-white px-4 py-3 shadow-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#123b49]">
                                    {initial}
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#123b49]">
                                        {user?.name ?? 'Admin'}
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Administrator GeoBot
                                    </p>
                                </div>
                            </div>
                        </header>

                        {/* Welcome Banner */}
                        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-lg sm:p-8">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-white/5" />
                            <div className="absolute -bottom-24 right-36 h-48 w-48 rounded-full bg-white/5" />

                            <div className="relative z-10 max-w-2xl">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-teal-50">
                                    Ruang Kerja Administrator
                                </span>

                                <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                                    Selamat datang, {user?.name ?? 'Admin'}!
                                </h3>

                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-teal-50 sm:text-base">
                                    Kelola akun guru dan siswa, susun materi
                                    pembelajaran klasifikasi iklim Köppen,
                                    buat tantangan atau kuis, serta pantau
                                    hasil belajar siswa melalui satu dashboard.
                                </p>
                            </div>
                        </section>

                        {/* Feature Section */}
                        <div className="mb-5">
                            <h3 className="text-xl font-bold text-[#123b49]">
                                Pengelolaan Sistem
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Pilih fitur yang ingin Anda kelola sebagai administrator.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {adminCards.map((card) => (
                                <Link
                                    key={card.number}
                                    href={card.href}
                                    className="group rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#87c9b5] hover:shadow-lg"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f5ef] text-2xl text-[#087b68] transition group-hover:bg-[#d9f99d]">
                                            {card.icon}
                                        </div>

                                        <span className="text-sm font-semibold text-[#a5c8bd]">
                                            {card.number}
                                        </span>
                                    </div>

                                    <h4 className="mt-5 text-lg font-bold text-[#123b49]">
                                        {card.title}
                                    </h4>

                                    <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-slate-500">
                                        {card.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-[#e7f0ee] pt-4">
                                        <span className="text-sm font-semibold text-[#087b68]">
                                            {card.action}
                                        </span>

                                        <span className="text-lg text-[#087b68] transition group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </section>

                        {/* Footer */}
                        <div className="mt-8 rounded-2xl border border-[#d4e4e1] bg-white/70 px-5 py-4">
                            <p className="text-sm leading-relaxed text-slate-500">
                                <span className="font-semibold text-[#123b49]">
                                    GeoBot
                                </span>{' '}
                                — Media pembelajaran klasifikasi iklim Köppen
                                untuk mendukung kegiatan belajar mengajar.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}