import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Modul6() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const climateImpacts = [
        {
            code: "A",
            type: "Tropis",
            icon: "🌴",
            color: "bg-emerald-50 border-emerald-200",
            badge: "bg-emerald-100 text-emerald-800",
            impacts: [
                "Cocok untuk pertanian sepanjang tahun, seperti padi dan kelapa sawit.",
                "Memiliki hutan hujan yang lebat.",
                "Kelembapan udara tinggi.",
            ],
        },
        {
            code: "B",
            type: "Kering",
            icon: "🌵",
            color: "bg-amber-50 border-amber-200",
            badge: "bg-amber-100 text-amber-800",
            impacts: [
                "Pertanian terbatas dan biasanya memerlukan irigasi khusus.",
                "Penduduk sering melakukan peternakan atau hidup nomaden.",
            ],
        },
        {
            code: "C",
            type: "Sedang",
            icon: "🍇",
            color: "bg-sky-50 border-sky-200",
            badge: "bg-sky-100 text-sky-800",
            impacts: [
                "Cocok untuk pertanian musiman.",
                "Contoh tanaman: gandum dan anggur di wilayah Mediterania.",
            ],
        },
        {
            code: "D",
            type: "Kontinental",
            icon: "❄️",
            color: "bg-indigo-50 border-indigo-200",
            badge: "bg-indigo-100 text-indigo-800",
            impacts: [
                "Memiliki musim tanam yang terbatas.",
                "Memerlukan persiapan khusus untuk menghadapi musim dingin ekstrem.",
            ],
        },
        {
            code: "E",
            type: "Kutub",
            icon: "🧊",
            color: "bg-cyan-50 border-cyan-200",
            badge: "bg-cyan-100 text-cyan-800",
            impacts: [
                "Kondisi iklim menyulitkan kegiatan pertanian.",
                "Penduduk biasanya bergantung pada perikanan atau berburu.",
            ],
        },
    ];

    return (
        <>
            <Head title="Modul 6 - Dampak Iklim terhadap Kehidupan" />

            <div className="min-h-screen bg-[#f3f9f8] md:flex">
                {/* Sidebar */}
                <aside className="w-full shrink-0 bg-gradient-to-b from-[#07384b] to-[#087b70] text-white md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col">
                    <div className="border-b border-white/10 px-6 py-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-200 text-xl font-bold text-[#07384b]">
                                G
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-wide">
                                    GeoBot
                                </h1>
                                <p className="text-xs text-teal-100">
                                    Belajar Iklim Köppen
                                </p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex gap-1 overflow-x-auto px-3 py-4 md:flex-1 md:flex-col">
                        {[
                            ["student.dashboard", "Dashboard"],
                            ["student.guide", "Panduan"],
                            ["student.objectives", "Tujuan Pembelajaran"],
                            ["student.material", "Materi Pembelajaran"],
                            ["student.profile", "Profil Saya"],
                        ].map(([routeName, label]) => (
                            <Link
                                key={routeName}
                                href={route(routeName)}
                                className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition ${
                                    routeName === "student.material"
                                        ? "bg-white/20 text-lime-100"
                                        : "text-teal-50 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden border-t border-white/10 p-4 md:block">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-lime-200 font-bold text-[#07384b]">
                                {user?.avatar ? (
                                    <img
                                        src={`/storage/${user.avatar}`}
                                        alt="Foto profil"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    user?.name?.charAt(0)?.toUpperCase() || "S"
                                )}
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold">
                                    {user?.name || "Siswa"}
                                </p>
                                <p className="text-xs text-teal-100">Siswa</p>
                            </div>
                        </div>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="w-full rounded-xl border border-white/20 px-4 py-2.5 text-left text-sm text-white transition hover:bg-white/10"
                        >
                            Keluar
                        </Link>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 md:ml-64 md:px-10 md:py-8">
                    <div className="mx-auto max-w-5xl">
                        {/* Header */}
                        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="mb-2 text-sm font-medium text-[#087b68]">
                                    Materi Pembelajaran / Modul 6
                                </p>

                                <h2 className="text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Dampak Iklim terhadap Kehidupan
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                                    Kenali bagaimana tipe iklim memengaruhi
                                    kegiatan pertanian, lingkungan, dan
                                    kehidupan penduduk di berbagai wilayah.
                                </p>
                            </div>

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lime-200 text-2xl font-bold text-[#123b49]">
                                06
                            </div>
                        </div>

                        {/* Intro */}
                        <section className="mb-6 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                    🌍
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#123b49]">
                                        Iklim memengaruhi kehidupan sehari-hari
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Tipe iklim suatu wilayah berpengaruh
                                        besar terhadap kegiatan penduduk,
                                        terutama dalam pertanian, pemanfaatan
                                        lingkungan, dan cara memenuhi kebutuhan
                                        hidup.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Climate Cards */}
                        <section>
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Dampak setiap tipe iklim
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    Pilih dan amati ciri dampak kehidupan dari
                                    masing-masing kelompok iklim.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {climateImpacts.map((climate) => (
                                    <article
                                        key={climate.code}
                                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <div className="flex items-center gap-4 border-b border-slate-100 p-5">
                                            <div
                                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-2xl ${climate.color}`}
                                            >
                                                {climate.icon}
                                            </div>

                                            <div className="min-w-0">
                                                <span
                                                    className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold ${climate.badge}`}
                                                >
                                                    Kelompok {climate.code}
                                                </span>
                                                <h4 className="mt-1 text-lg font-bold text-[#123b49]">
                                                    Iklim {climate.type}
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#087b68]">
                                                Dampak ke Kehidupan
                                            </p>

                                            <ul className="space-y-3">
                                                {climate.impacts.map(
                                                    (impact, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex gap-3 text-sm leading-6 text-slate-600"
                                                        >
                                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f4f1] text-xs font-bold text-[#087b68]">
                                                                ✓
                                                            </span>
                                                            <span>{impact}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* Indonesia Highlight */}
                        <section className="mt-7 overflow-hidden rounded-2xl border border-lime-200 bg-lime-50 shadow-sm">
                            <div className="p-5 sm:p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                                        🇮🇩
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                                            Contoh di Indonesia
                                        </p>
                                        <h3 className="mt-1 text-xl font-bold text-[#123b49]">
                                            Mengapa Indonesia subur?
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-700">
                                            Sebagian besar wilayah Indonesia
                                            masuk tipe iklim A (tropis). Hal ini
                                            menjadi salah satu alasan mengapa
                                            Indonesia subur dan cocok untuk
                                            kegiatan pertanian sepanjang tahun.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Summary */}
                        <section className="mt-7 rounded-2xl bg-[#123b49] p-5 text-white shadow-sm sm:p-6">
                            <h3 className="flex items-center gap-2 text-lg font-bold">
                                <span>📌</span>
                                Ringkasan Modul 6
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-teal-50">
                                Setiap tipe iklim memiliki dampak yang berbeda
                                terhadap kehidupan penduduk. Iklim tropis
                                mendukung pertanian sepanjang tahun, sedangkan
                                iklim kering, kontinental, dan kutub memiliki
                                keterbatasan atau kebutuhan khusus dalam
                                kegiatan sehari-hari.
                            </p>
                        </section>

                        {/* Navigation */}
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
        </>
    );
}