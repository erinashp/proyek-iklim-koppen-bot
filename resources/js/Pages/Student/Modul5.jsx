import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Modul5() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const steps = [
        {
            number: "01",
            title: "Cek suhu bulan terdingin",
            description:
                "Gunakan suhu bulan terdingin untuk menentukan kelompok iklim yang sesuai (A, B, C, D, atau E).",
            icon: "🌡️",
        },
        {
            number: "02",
            title: "Cek curah hujan bulan terkering",
            description:
                "Jika wilayah masuk kelompok A, C, atau D, periksa curah hujan bulan terkering untuk menentukan huruf kedua.",
            icon: "🌧️",
        },
        {
            number: "03",
            title: "Periksa suhu musim panas jika diperlukan",
            description:
                "Untuk tipe C dan D, suhu musim panas dapat digunakan untuk menentukan huruf ketiga.",
            icon: "☀️",
        },
    ];

    return (
        <>
            <Head title="Modul 5 - Klasifikasi Wilayah Berdasarkan Data" />

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
                                    Materi Pembelajaran / Modul 5
                                </p>
                                <h2 className="text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Klasifikasi Wilayah Berdasarkan Data
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                                    Sekarang, yuk praktik menentukan kode iklim
                                    berdasarkan data suhu dan curah hujan!
                                </p>
                            </div>

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lime-200 text-2xl font-bold text-[#123b49]">
                                05
                            </div>
                        </div>

                        {/* Intro */}
                        <div className="mb-6 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                    🧭
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#123b49]">
                                        Dari data menjadi kode iklim
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Ikuti langkah-langkah berikut secara
                                        berurutan untuk membantu menentukan
                                        klasifikasi iklim suatu wilayah.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Steps */}
                        <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                            <h3 className="mb-5 text-lg font-bold text-[#123b49]">
                                Langkah-langkah klasifikasi
                            </h3>

                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <div
                                        key={step.number}
                                        className="flex gap-4"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4f1] text-xl">
                                                {step.icon}
                                            </div>
                                            {index !== steps.length - 1 && (
                                                <div className="mt-2 min-h-8 w-px flex-1 bg-teal-100" />
                                            )}
                                        </div>

                                        <div className="flex-1 pb-5">
                                            <p className="text-xs font-bold tracking-wide text-[#087b68]">
                                                LANGKAH {step.number}
                                            </p>
                                            <h4 className="mt-1 font-semibold text-[#123b49]">
                                                {step.title}
                                            </h4>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Example */}
                        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="bg-[#123b49] px-5 py-5 text-white sm:px-6">
                                <p className="text-xs font-bold uppercase tracking-wider text-lime-200">
                                    Contoh Penerapan
                                </p>
                                <h3 className="mt-1 text-xl font-bold">
                                    Wilayah X
                                </h3>
                                <p className="mt-1 text-sm text-teal-100">
                                    Tentukan kode iklim berdasarkan data berikut.
                                </p>
                            </div>

                            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                                <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                                    <div className="text-sm font-medium text-orange-800">
                                        Suhu bulan terdingin
                                    </div>
                                    <div className="mt-2 text-3xl font-bold text-[#123b49]">
                                        25°C
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                                    <div className="text-sm font-medium text-sky-800">
                                        Curah hujan bulan terkering
                                    </div>
                                    <div className="mt-2 text-3xl font-bold text-[#123b49]">
                                        80 mm
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                                <div className="flex gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#123b49]">
                                            Tentukan kelompok iklim
                                        </h4>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Suhu bulan terdingin 25°C, yaitu
                                            lebih dari atau sama dengan 18°C.
                                            Wilayah X masuk kelompok iklim
                                            tropis <strong>A</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#123b49]">
                                            Tentukan huruf kedua
                                        </h4>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Curah hujan bulan terkering 80 mm,
                                            yaitu lebih dari atau sama dengan
                                            60 mm. Berdasarkan kriteria contoh
                                            ini, huruf keduanya adalah
                                            <strong> f</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-lime-200 bg-lime-50 p-5 text-center">
                                    <p className="text-sm font-semibold text-lime-900">
                                        Hasil klasifikasi Wilayah X
                                    </p>
                                    <div className="my-2 text-4xl font-extrabold tracking-widest text-[#123b49]">
                                        Af
                                    </div>
                                    <p className="text-sm text-slate-600">
                                        Iklim tropis tanpa musim kering yang
                                        nyata berdasarkan contoh data.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Chatbot CTA */}
                        <section className="mt-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-sm sm:p-8">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div className="max-w-xl">
                                    <div className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-lime-200">
                                        Praktik Mandiri
                                    </div>
                                    <h3 className="text-xl font-bold sm:text-2xl">
                                        Siap mencoba sendiri?
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-teal-50">
                                        Buka menu Chatbot, masukkan data suhu
                                        dan curah hujan wilayah yang ingin kamu
                                        klasifikasikan. GeoBot akan membantu
                                        menentukan kode iklimnya!
                                    </p>
                                </div>

                                <Link
                                    href={route("student.dashboard")}
                                    className="inline-flex shrink-0 items-center justify-center rounded-xl bg-lime-200 px-5 py-3 text-sm font-bold text-[#123b49] transition hover:bg-lime-100"
                                >
                                    Coba di Chatbot →
                                </Link>
                            </div>
                        </section>

                        {/* Navigation */}
                        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={route("student.modul4")}
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