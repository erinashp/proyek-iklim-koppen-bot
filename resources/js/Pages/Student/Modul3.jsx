import { Head, Link, useForm } from '@inertiajs/react';

export default function Modul3({ auth }) {
    const user = auth?.user;

    const roleLabel = user?.role === 'teacher' ? 'Guru' : 'Siswa';

    const avatarUrl = user?.avatar
        ? `/storage/${user.avatar}`
        : null;

    const initial = user?.name
        ? user.name.charAt(0).toUpperCase()
        : 'U';

    const { post } = useForm();

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
        },
        {
            icon: '▣',
            label: 'Materi Köppen',
            href: route('student.material'),
            active: true,
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

    const tableClass =
        'w-full min-w-[600px] border-collapse text-left text-sm';

    const thClass =
        'border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold text-[#123b49]';

    const tdClass =
        'border-b border-[#e5efed] px-4 py-4 align-top leading-relaxed text-gray-700';

    return (
        <>
            <Head title="Modul 3: Kelompok Iklim A, B, C, D, dan E | IklimKöppenBot" />

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

                    {/* Menu */}
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

                                return item.active ? (
                                    <div
                                        key={item.label}
                                        aria-current="page"
                                        className={className}
                                    >
                                        <span className="w-5 text-center text-xl">
                                            {item.icon}
                                        </span>

                                        <span>{item.label}</span>
                                    </div>
                                ) : (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={className}
                                    >
                                        <span className="w-5 text-center text-xl">
                                            {item.icon}
                                        </span>

                                        <span>{item.label}</span>
                                    </a>
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
                                    {user?.name ?? 'Pengguna'}
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
                                    Modul 3: Kelompok Iklim Köppen
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Mengenal karakteristik kelompok iklim A, B, C, D, dan E.
                                </p>
                            </div>

                            <Link
                                href={route('student.material')}
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
                                href={route('student.material')}
                                className="transition hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>

                            <span>/</span>

                            <span className="font-medium text-[#123b49]">
                                Modul 3
                            </span>
                        </nav>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pembelajaran 03
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Kelompok Iklim A, B, C, D, dan E
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Memahami lima kelompok utama iklim Köppen
                                    berdasarkan karakteristik suhu dan curah
                                    hujan setiap wilayah.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌴 Tropis
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🏜️ Kering
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌤️ Sedang
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ❄️ Kontinental dan Kutub
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* PENGANTAR */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                    🌎
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-[#123b49]">
                                        Lima Kelompok Utama Iklim Köppen
                                    </h2>

                                    <p className="mt-3 leading-8 text-gray-700">
                                        Sistem klasifikasi iklim Köppen
                                        membagi iklim dunia menjadi lima
                                        kelompok utama, yaitu A, B, C, D, dan E.
                                        Setiap kelompok memiliki karakteristik
                                        suhu dan curah hujan yang berbeda.
                                        Kelompok tersebut juga memiliki kode
                                        turunan untuk menjelaskan kondisi iklim
                                        yang lebih khusus.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK A */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#e7f7e9] to-[#f5fbef] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16805f] text-2xl font-bold text-white">
                                        A
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                                            Kelompok Iklim A
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Tropis
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Iklim tropis dicirikan oleh suhu bulan
                                    terdingin yang tetap lebih dari 18°C
                                    sepanjang tahun. Wilayah ini tidak mengalami
                                    musim dingin. Vegetasi yang dapat ditemukan
                                    antara lain hutan hujan tropis (Af) dan
                                    sabana (Aw).
                                </p>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className={tableClass}>
                                        <thead>
                                            <tr>
                                                <th className={thClass}>Kode</th>
                                                <th className={thClass}>Kriteria</th>
                                                <th className={thClass}>Karakteristik</th>
                                                <th className={thClass}>Contoh Wilayah</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#087b68]`}>Af</td>
                                                <td className={tdClass}>
                                                    Curah hujan bulan terkering ≥60 mm.
                                                </td>
                                                <td className={tdClass}>
                                                    Iklim hutan hujan tropis dengan hujan merata sepanjang tahun.
                                                </td>
                                                <td className={tdClass}>
                                                    Kalimantan dan Sumatra bagian tengah.
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#087b68]`}>Am</td>
                                                <td className={tdClass}>
                                                    Curah hujan bulan terkering &lt;60 mm, dikompensasi curah hujan tahunan tinggi.
                                                </td>
                                                <td className={tdClass}>
                                                    Musim kering pendek dan dipengaruhi angin muson.
                                                </td>
                                                <td className={tdClass}>
                                                    Sebagian Jawa dan pesisir Sumatra.
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#087b68]`}>Aw</td>
                                                <td className={tdClass}>
                                                    Curah hujan bulan terkering &lt;60 mm dan tidak dikompensasi curah hujan tahunan.
                                                </td>
                                                <td className={tdClass}>
                                                    Iklim sabana tropis dengan musim kering jelas dan panjang.
                                                </td>
                                                <td className={tdClass}>
                                                    Nusa Tenggara dan Jawa Timur.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#cfe5df] bg-[#f3f9f8] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        🌿 Ingat!
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Kelompok A memiliki suhu bulan
                                        terdingin di atas 18°C. Perbedaan kode
                                        Af, Am, dan Aw terutama berkaitan
                                        dengan kondisi curah hujan dan musim
                                        kering.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK B */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#fff0d9] to-[#fff9ed] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b7791f] text-2xl font-bold text-white">
                                        B
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#a66a18]">
                                            Kelompok Iklim B
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Kering / Arid
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Ciri utama iklim B adalah tingkat
                                    penguapan yang lebih besar daripada
                                    curah hujan yang turun. Oleh karena itu,
                                    wilayah ini cenderung kering atau gersang.
                                    Kelompok B terbagi menjadi dua
                                    subkelompok utama.
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#f1dfb9] bg-[#fffaf0] p-5">
                                        <div className="text-3xl">🏜️</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#a66a18]">
                                            BW — Iklim Gurun
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Iklim gurun atau arid. Kondisinya
                                            sangat kering dengan curah hujan
                                            yang sangat minim.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#eadfc8] bg-[#faf6ed] p-5">
                                        <div className="text-3xl">🌾</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#a66a18]">
                                            BS — Iklim Stepa
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Iklim stepa atau semi-arid.
                                            Kondisinya kering, tetapi tidak
                                            seekstrem wilayah gurun.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="pt-2 text-lg font-bold text-[#123b49]">
                                    Kode berdasarkan suhu
                                </h3>

                                <p className="leading-relaxed text-gray-700">
                                    Kode BW dan BS dibedakan lagi berdasarkan
                                    kondisi suhu, yaitu panas (h) atau dingin
                                    (k).
                                </p>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className={tableClass}>
                                        <thead>
                                            <tr>
                                                <th className={thClass}>Kode</th>
                                                <th className={thClass}>Keterangan</th>
                                                <th className={thClass}>Contoh</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#a66a18]`}>BWh</td>
                                                <td className={tdClass}>Gurun panas.</td>
                                                <td className={tdClass}>Sahara.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#a66a18]`}>BSh</td>
                                                <td className={tdClass}>Stepa panas.</td>
                                                <td className={tdClass}>Wilayah stepa panas.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#a66a18]`}>BWk</td>
                                                <td className={tdClass}>Gurun dingin.</td>
                                                <td className={tdClass}>Wilayah gurun dingin.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#a66a18]`}>BSk</td>
                                                <td className={tdClass}>Stepa dingin.</td>
                                                <td className={tdClass}>Wilayah stepa dingin.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#f1dfb9] bg-[#fffaf0] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        💡 Cara mengingat
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Huruf B menunjukkan kelompok iklim
                                        kering. Huruf W berarti gurun, S
                                        berarti stepa, h berarti panas, dan
                                        k berarti dingin.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK C */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#e7f1fc] to-[#f4f8ff] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3974b8] text-2xl font-bold text-white">
                                        C
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#3974b8]">
                                            Kelompok Iklim C
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Sedang
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Kelompok C memiliki suhu bulan terdingin
                                    antara -3°C sampai 18°C dan suhu bulan
                                    terpanas di atas 10°C. Kode iklim C
                                    menggunakan tiga huruf. Huruf kedua
                                    menjelaskan pola musim kering, sedangkan
                                    huruf ketiga menunjukkan karakteristik
                                    suhu musim panas.
                                </p>

                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Huruf kedua: pola curah hujan
                                </h3>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className={tableClass}>
                                        <thead>
                                            <tr>
                                                <th className={thClass}>Kode</th>
                                                <th className={thClass}>Kriteria</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>s</td>
                                                <td className={tdClass}>Kering di musim panas.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>w</td>
                                                <td className={tdClass}>Kering di musim dingin.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>f</td>
                                                <td className={tdClass}>Tanpa musim kering yang signifikan.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Huruf ketiga: karakteristik musim panas
                                </h3>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className={tableClass}>
                                        <thead>
                                            <tr>
                                                <th className={thClass}>Kode</th>
                                                <th className={thClass}>Karakteristik</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>a</td>
                                                <td className={tdClass}>Musim panas panas.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>b</td>
                                                <td className={tdClass}>Musim panas hangat.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>c</td>
                                                <td className={tdClass}>Musim panas sejuk.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Kombinasi kode iklim C
                                </h3>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className={tableClass}>
                                        <thead>
                                            <tr>
                                                <th className={thClass}>Kode</th>
                                                <th className={thClass}>Karakteristik</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>Cf</td>
                                                <td className={tdClass}>Iklim subtropis lembap tanpa musim kering.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>Cw</td>
                                                <td className={tdClass}>Iklim subtropis lembap dengan musim dingin yang kering.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#3974b8]`}>Cs</td>
                                                <td className={tdClass}>Iklim mediterania dengan musim panas yang kering.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        💡 Contoh kode: Csa
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Csa menunjukkan iklim sedang dengan
                                        musim panas yang kering dan musim
                                        panas yang panas. Tipe ini banyak
                                        ditemukan di sekitar Laut Mediterania.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK D */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#eee9fc] to-[#f8f5ff] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7654ad] text-2xl font-bold text-white">
                                        D
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#7654ad]">
                                            Kelompok Iklim D
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Kontinental
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Iklim kontinental dicirikan oleh variasi
                                    suhu musiman yang besar dengan curah hujan
                                    relatif tidak tinggi. Kelompok ini umumnya
                                    ditemukan di wilayah lintang tengah hingga
                                    tinggi di belahan bumi utara, seperti
                                    sebagian Rusia dan Kanada.
                                </p>

                                <p className="leading-8 text-gray-700">
                                    Pola huruf kedua dan ketiga serupa dengan
                                    kelompok C. Namun, kelompok D memiliki
                                    tambahan subtipe khusus, yaitu huruf d
                                    yang menunjukkan musim dingin sangat
                                    ekstrem.
                                </p>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className={tableClass}>
                                        <thead>
                                            <tr>
                                                <th className={thClass}>Kode</th>
                                                <th className={thClass}>Kriteria</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#7654ad]`}>Df</td>
                                                <td className={tdClass}>Iklim sedang kontinental yang lembap.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#7654ad]`}>Dw</td>
                                                <td className={tdClass}>Iklim sedang kontinental dengan musim dingin yang kering.</td>
                                            </tr>

                                            <tr>
                                                <td className={`${tdClass} font-bold text-[#7654ad]`}>d</td>
                                                <td className={tdClass}>Musim dingin yang sangat ekstrem; subtipe khusus pada kelompok D.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#e0d7f2] bg-[#f7f3ff] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        ❄️ Contoh kombinasi kode
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Beberapa kombinasi kode kelompok D
                                        antara lain Dfa, Dwb, dan Dfd.
                                        Huruf d menunjukkan musim dingin
                                        yang sangat ekstrem.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK E */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#e3f5fa] to-[#f2fbfd] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#287d9b] text-2xl font-bold text-white">
                                        E
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#287d9b]">
                                            Kelompok Iklim E
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Kutub
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Kelompok iklim E dicirikan oleh suhu
                                    bulan terpanas yang tetap di bawah 10°C
                                    sepanjang tahun. Wilayah ini tidak
                                    mengalami kondisi musim panas yang
                                    benar-benar hangat.
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                        <div className="text-3xl">🧊</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#287d9b]">
                                            ET — Iklim Tundra
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Masih terdapat sedikit tumbuhan
                                            seperti lumut dan rumput pada
                                            musim panas yang singkat.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                        <div className="text-3xl">❄️</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#287d9b]">
                                            EF — Iklim Daerah Es Abadi
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Wilayah hampir selalu tertutup
                                            es dan salju serta tidak memiliki
                                            tumbuhan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* RINGKASAN */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl">
                                    ☷
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Ringkasan Modul
                                    </h3>

                                    <p className="mt-1 text-gray-600">
                                        Ingat kembali karakteristik lima
                                        kelompok utama iklim Köppen.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 space-y-3">
                                {[
                                    {
                                        code: 'A',
                                        title: 'Tropis',
                                        description: 'Suhu bulan terdingin di atas 18°C sepanjang tahun.',
                                    },
                                    {
                                        code: 'B',
                                        title: 'Kering',
                                        description: 'Penguapan lebih besar daripada curah hujan.',
                                    },
                                    {
                                        code: 'C',
                                        title: 'Sedang',
                                        description: 'Suhu bulan terdingin antara -3°C sampai 18°C dan bulan terpanas di atas 10°C.',
                                    },
                                    {
                                        code: 'D',
                                        title: 'Kontinental',
                                        description: 'Perbedaan suhu musim panas dan musim dingin besar.',
                                    },
                                    {
                                        code: 'E',
                                        title: 'Kutub',
                                        description: 'Suhu bulan terpanas tetap di bawah 10°C.',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.code}
                                        className="flex items-start gap-4 rounded-xl bg-[#f8fbfa] p-4"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087b68] font-bold text-white">
                                            {item.code}
                                        </div>

                                        <div>
                                            <p className="font-bold text-[#123b49]">
                                                Kelompok {item.code} — {item.title}
                                            </p>

                                            <p className="mt-1 leading-relaxed text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

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