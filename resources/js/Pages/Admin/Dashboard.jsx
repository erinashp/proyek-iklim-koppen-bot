import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AdminSidebar from "@/Components/AdminSidebar";

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <>
            <Head title="Dashboard Admin" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* Sidebar */}
                <AdminSidebar />

                {/* Main Content */}
                <main className="min-h-screen md:ml-64">

                    {/* Header */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex min-h-[155px] items-center justify-between gap-6 px-6 py-6 sm:px-10">

                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                    Panel Administrator
                                </p>

                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                    Dashboard Admin
                                </h1>

                                <p className="mt-1 text-base text-slate-500">
                                    Kelola pengguna dan sistem pembelajaran
                                    Iklim Köppen.
                                </p>
                            </div>

                        </div>
                    </header>


                    {/* Content */}
                    <section className="px-6 py-8 sm:px-10">

                        {/* Welcome */}
                        <div className="rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm">

                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-100">
                                Selamat datang
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Halo, {user?.name || "Admin"} 👋
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-50">
                                Kamu sedang berada di panel administrator
                                IklimKöppenBot.
                            </p>

                        </div>


                        {/* Cards */}
                        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {/* Siswa */}
                            <div className="rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm">

                                <div className="text-3xl">
                                    👨‍🎓
                                </div>

                                <h3 className="mt-4 text-lg font-bold">
                                    Data Siswa
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Kelola data pengguna siswa.
                                </p>

                            </div>


                            {/* Guru */}
                            <div className="rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm">

                                <div className="text-3xl">
                                    👨‍🏫
                                </div>

                                <h3 className="mt-4 text-lg font-bold">
                                    Data Guru
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Kelola akun dan data guru.
                                </p>

                            </div>


                            {/* Materi */}
                            <div className="rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm">

                                <div className="text-3xl">
                                    📚
                                </div>

                                <h3 className="mt-4 text-lg font-bold">
                                    Materi
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Kelola materi pembelajaran Köppen.
                                </p>

                            </div>

                        </div>

                    </section>
                </main>
            </div>
        </>
    );
}