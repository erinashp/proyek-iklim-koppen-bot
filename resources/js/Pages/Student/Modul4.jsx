import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Modul4() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const comparisons = [
        {
            title: "Am vs Aw",
            subtitle: "Iklim tropis dengan perbedaan pola curah hujan",
            first: {
                code: "Am",
                name: "Tropis Monsun",
                description:
                    "Total curah hujan setahun tetap tinggi karena musim hujannya sangat basah, dipengaruhi efek angin muson.",
                color: "bg-teal-50 border-teal-200",
                badge: "bg-teal-100 text-teal-800",
            },
            second: {
                code: "Aw",
                name: "Tropis Sabana",
                description:
                    "Total curah hujan setahun tidak cukup tinggi. Musim kering terasa lebih jelas dan berlangsung lebih panjang.",
                color: "bg-amber-50 border-amber-200",
                badge: "bg-amber-100 text-amber-800",
            },
            note: "Keduanya memiliki curah hujan bulan terkering di bawah 60 mm. Perbedaannya terletak pada total curah hujan tahunan dan karakter musim kering.",
        },
        {
            title: "Cs vs Cw",
            subtitle: "Iklim sedang dengan musim kering pada waktu berbeda",
            first: {
                code: "Cs",
                name: "Musim kering pada musim panas",
                description:
                    "Periode kering terjadi pada musim panas.",
                color: "bg-orange-50 border-orange-200",
                badge: "bg-orange-100 text-orange-800",
            },
            second: {
                code: "Cw",
                name: "Musim kering pada musim dingin",
                description:
                    "Periode kering terjadi pada musim dingin.",
                color: "bg-sky-50 border-sky-200",
                badge: "bg-sky-100 text-sky-800",
            },
            note: "Kunci membedakannya adalah kapan musim kering terjadi: musim panas untuk Cs dan musim dingin untuk Cw.",
        },
        {
            title: "BW vs BS",
            subtitle: "Iklim kering dengan tingkat kekeringan berbeda",
            first: {
                code: "BW",
                name: "Iklim Gurun",
                description:
                    "Sangat kering dan dikenal sebagai iklim gurun.",
                color: "bg-rose-50 border-rose-200",
                badge: "bg-rose-100 text-rose-800",
            },
            second: {
                code: "BS",
                name: "Iklim Stepa",
                description:
                    "Kering sedang atau semi-kering. Kondisinya masih memungkinkan rumput tumbuh.",
                color: "bg-lime-50 border-lime-200",
                badge: "bg-lime-100 text-lime-800",
            },
            note: "Keduanya termasuk iklim kering. BW menunjukkan kondisi sangat kering, sedangkan BS merupakan kondisi kering sedang.",
        },
    ];

    return (
        <>
            <Head title="Modul 4 - Perbedaan Tipe Iklim yang Mirip" />

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
                                    Materi Pembelajaran / Modul 4
                                </p>
                                <h2 className="text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Perbedaan Tipe Iklim yang Mirip
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                                    Kenali perbedaan kode iklim yang sering
                                    tertukar karena memiliki kriteria serupa.
                                </p>
                            </div>

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lime-200 text-2xl font-bold text-[#123b49]">
                                04
                            </div>
                        </div>

                        {/* Intro */}
                        <div className="mb-6 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                    💡
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#123b49]">
                                        Yuk, pahami bedanya!
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Beberapa kode iklim Köppen terlihat
                                        mirip. Perhatikan ciri pembeda utama
                                        setiap pasangan kode berikut.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Cards */}
                        <div className="space-y-6">
                            {comparisons.map((item, index) => (
                                <section
                                    key={item.title}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f4f1] font-bold text-[#087b68]">
                                                0{index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#123b49]">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                                        {[item.first, item.second].map(
                                            (climate) => (
                                                <div
                                                    key={climate.code}
                                                    className={`rounded-2xl border p-5 ${climate.color}`}
                                                >
                                                    <span
                                                        className={`inline-flex rounded-lg px-3 py-1 text-sm font-bold ${climate.badge}`}
                                                    >
                                                        {climate.code}
                                                    </span>
                                                    <h4 className="mt-3 text-lg font-bold text-[#123b49]">
                                                        {climate.name}
                                                    </h4>
                                                    <p className="mt-2 text-sm leading-6 text-slate-700">
                                                        {climate.description}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <div className="mx-5 mb-5 rounded-xl bg-[#f3f9f8] p-4 sm:mx-6 sm:mb-6">
                                        <p className="text-xs font-bold uppercase tracking-wide text-[#087b68]">
                                            Kunci Perbedaan
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-slate-700">
                                            {item.note}
                                        </p>
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Summary */}
                        <section className="mt-7 rounded-2xl bg-[#123b49] p-5 text-white shadow-sm sm:p-6">
                            <h3 className="flex items-center gap-2 text-lg font-bold">
                                <span>📌</span> Ringkasan Modul 4
                            </h3>
                            <div className="mt-4 space-y-3 text-sm leading-6 text-teal-50">
                                <p>
                                    <strong className="text-lime-200">Am dan Aw:</strong>{" "}
                                    bandingkan total hujan tahunan serta
                                    karakter musim kering.
                                </p>
                                <p>
                                    <strong className="text-lime-200">Cs dan Cw:</strong>{" "}
                                    perhatikan apakah musim kering terjadi
                                    pada musim panas atau musim dingin.
                                </p>
                                <p>
                                    <strong className="text-lime-200">BW dan BS:</strong>{" "}
                                    bedakan tingkat kekeringannya, yaitu
                                    gurun yang sangat kering dan stepa yang
                                    semi-kering.
                                </p>
                            </div>
                        </section>

                        {/* Navigation */}
                        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={route("student.modul3")}
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