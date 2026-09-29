import { useEffect, useState } from 'react';
import { Head, Link, useForm, usePage, router } from '@inertiajs/react';

export default function Profile() {
    const { auth, flash } = usePage().props;
    const user = auth.user;

    const [preview, setPreview] = useState(null);

    const {
        data,
        setData,
        put,
        processing,
        errors,
        recentlySuccessful,
    } = useForm({
        name: user.name || '',
        email: user.email || '',
        avatar: null,
    });

    const isTeacher = user.role === 'teacher';
    const roleLabel = isTeacher ? 'Guru' : 'Siswa';

    const dashboardUrl = isTeacher
        ? route('teacher.dashboard')
        : route('student.dashboard');

    const avatarUrl = user.avatar
        ? `/storage/${user.avatar}`
        : null;

    const displayedAvatar = preview || avatarUrl;

    const initial = data.name
        ? data.name.charAt(0).toUpperCase()
        : 'U';

    // Preview foto yang dipilih
    useEffect(() => {
        if (!data.avatar) {
            setPreview(null);
            return;
        }

        const objectUrl = URL.createObjectURL(data.avatar);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [data.avatar]);

    // Simpan perubahan profil
    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('profile.update'), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    // Batalkan perubahan pada form
    const handleCancel = () => {
        setData({
            name: user.name || '',
            email: user.email || '',
            avatar: null,
        });

        setPreview(null);
    };

    // Logout
    const logout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    return (
        <>
            <Head title="Profil Saya | GeoBot" />

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

                    {/* Menu */}
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

                            <a
                                href={`${dashboardUrl}#petunjuk`}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">☷</span>
                                <span>Petunjuk</span>
                            </a>

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
                                href={`${dashboardUrl}#chat-ai-bot`}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-teal-50 transition hover:bg-white/10"
                            >
                                <span className="w-5 text-center text-xl">ⓘ</span>
                                <span>Chat AI Bot</span>
                            </a>
                        </nav>
                    </div>

                    {/* Identitas pengguna di bawah sidebar */}
                    <div className="mt-auto p-4">

                        <div className="mb-3 flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3">
                            {displayedAvatar ? (
                                <img
                                    src={displayedAvatar}
                                    alt="Foto profil"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#07384b]">
                                    {initial}
                                </div>
                            )}

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold">
                                    {user.name}
                                </p>
                                <p className="text-xs text-teal-100">
                                    {roleLabel}
                                </p>
                            </div>
                        </div>

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
                                    Profil Saya
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    Kelola informasi akun dan foto profil kamu.
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* MAIN */}
                    <main className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">

                        {/* Pesan berhasil */}
                        {(flash?.success || recentlySuccessful) && (
                            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
                                {flash?.success || 'Perubahan profil berhasil disimpan.'}
                            </div>
                        )}

                        {/* Kartu Profil */}
                        <form onSubmit={handleSubmit}>
                            <div className="overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">

                                {/* Header kartu profil */}
                                <div className="bg-gradient-to-r from-[#07384b] to-[#087b70] px-6 py-8 sm:px-9">
                                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                                        {/* Foto profil */}
                                        <div className="flex flex-col items-center gap-3">

                                            {displayedAvatar ? (
                                                <img
                                                    src={displayedAvatar}
                                                    alt="Foto profil"
                                                    className="h-28 w-28 rounded-full border-4 border-white/90 object-cover shadow-lg"
                                                />
                                            ) : (
                                                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/90 bg-[#d9f99d] text-4xl font-bold text-[#07384b] shadow-lg">
                                                    {initial}
                                                </div>
                                            )}

                                            <label className="cursor-pointer rounded-xl bg-[#d9f99d] px-4 py-2.5 text-sm font-semibold text-[#123b49] transition hover:bg-[#c7ef7e]">
                                                {displayedAvatar
                                                    ? 'Ganti Foto'
                                                    : 'Tambah Foto Profil'}

                                                <input
                                                    type="file"
                                                    accept="image/jpeg,image/png,image/webp"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        setData(
                                                            'avatar',
                                                            e.target.files[0] || null
                                                        );
                                                    }}
                                                />
                                            </label>

                                            <p className="text-center text-xs text-teal-100">
                                                JPG, PNG, WEBP · Maks. 2 MB
                                            </p>

                                            {errors.avatar && (
                                                <p className="text-center text-sm font-medium text-red-100">
                                                    {errors.avatar}
                                                </p>
                                            )}
                                        </div>

                                        {/* Identitas */}
                                        <div className="text-center sm:text-left">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a8e5ce]">
                                                Akun GeoBot
                                            </p>

                                            <h3 className="mt-2 text-2xl font-bold text-white">
                                                {data.name || 'Nama Pengguna'}
                                            </h3>

                                            <p className="mt-1 break-all text-[#d0e4e7]">
                                                {data.email}
                                            </p>

                                            <span className="mt-3 inline-block rounded-full bg-[#d9f99d] px-4 py-1 text-sm font-semibold text-[#123b49]">
                                                {roleLabel}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="p-6 sm:p-9">

                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-[#123b49]">
                                            Informasi Pengguna
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Perbarui data yang ingin kamu ubah, lalu simpan perubahan.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                                        {/* Nama */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-sm font-semibold text-[#123b49]"
                                            >
                                                Nama Lengkap
                                            </label>

                                            <input
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData('name', e.target.value)
                                                }
                                                required
                                                className="w-full rounded-xl border border-[#c8dcda] bg-[#fbfefd] px-4 py-3 text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#16805f] focus:ring-2 focus:ring-[#16805f]/10"
                                                placeholder="Masukkan nama lengkap"
                                            />

                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-semibold text-[#123b49]"
                                            >
                                                Email
                                            </label>

                                            <input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData('email', e.target.value)
                                                }
                                                required
                                                className="w-full rounded-xl border border-[#c8dcda] bg-[#fbfefd] px-4 py-3 text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#16805f] focus:ring-2 focus:ring-[#16805f]/10"
                                                placeholder="nama@email.com"
                                            />

                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* Username */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                                                Username
                                            </label>

                                            <div className="rounded-xl border border-[#e0e9e7] bg-[#f3f9f8] px-4 py-3 text-gray-600">
                                                {user.username || '-'}
                                            </div>

                                            <p className="mt-1 text-xs text-gray-500">
                                                Username tidak dapat diubah melalui halaman ini.
                                            </p>
                                        </div>

                                        {/* Role */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                                                Role Pengguna
                                            </label>

                                            <div className="rounded-xl border border-[#e0e9e7] bg-[#f3f9f8] px-4 py-3 text-gray-600">
                                                {roleLabel}
                                            </div>

                                            <p className="mt-1 text-xs text-gray-500">
                                                Role hanya dapat diatur oleh sistem atau administrator.
                                            </p>
                                        </div>

                                        {/* ID */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                                                ID Pengguna
                                            </label>

                                            <div className="rounded-xl border border-[#e0e9e7] bg-[#f3f9f8] px-4 py-3 text-gray-600">
                                                {user.id}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tombol */}
                                    <div className="mt-8 flex flex-col gap-3 border-t border-[#e3ecea] pt-6 sm:flex-row">

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066653] disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {processing
                                                ? 'Menyimpan...'
                                                : 'Simpan Perubahan'}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            disabled={processing}
                                            className="rounded-xl border border-[#c8dcda] bg-white px-6 py-3 font-semibold text-[#123b49] transition hover:bg-[#f3f9f8] disabled:opacity-60"
                                        >
                                            Batalkan Perubahan
                                        </button>

                                        <button
                                            type="button"
                                            onClick={logout}
                                            className="rounded-xl border border-red-200 px-6 py-3 font-semibold text-red-600 transition hover:bg-red-50 sm:ml-auto"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Catatan */}
                        <div className="mt-5 rounded-xl border border-[#f3e7b1] bg-[#fff8d9] px-5 py-4 text-sm leading-relaxed text-[#77652b]">
                            <strong>Catatan:</strong> Foto profil akan ditampilkan pada dashboard setelah berhasil disimpan. Gunakan gambar JPG, PNG, atau WEBP dengan ukuran maksimal 2 MB.
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}