import { Head, Link, useForm } from '@inertiajs/react';

export default function Welcome({ auth, canLogin, canRegister }) {
    const { post } = useForm();

    const logout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <>
            <Head title="Media Pembelajaran Iklim Köppen" />

            <div className="min-h-screen bg-gray-100">
                {/* Navbar */}
                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        
                        <h1 className="text-xl font-bold text-gray-800">
                            Iklim Köppen
                        </h1>

                        <div className="flex items-center gap-4">

                            {auth.user ? (
                                <>
                                    <Link
                                        href={route('dashboard')}
                                        className="text-gray-700 hover:text-blue-600"
                                    >
                                        Dashboard
                                    </Link>

                                    <button
                                        onClick={logout}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    {canLogin && (
                                        <Link
                                            href={route('login')}
                                            className="px-4 py-2 text-gray-700 hover:text-blue-600"
                                        >
                                            Login
                                        </Link>
                                    )}

                                    {canRegister && (
                                        <Link
                                            href={route('register')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </>
                            )}

                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <main className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center">

                        <h2 className="text-4xl font-bold text-gray-800">
                            Media Pembelajaran
                        </h2>

                        <h3 className="mt-2 text-4xl font-bold text-blue-600">
                            Klasifikasi Iklim Köppen
                        </h3>

                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            Pelajari klasifikasi iklim Köppen melalui materi
                            pembelajaran, peta, dan kuis interaktif.
                        </p>

                        <div className="mt-8">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Masuk ke Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Mulai Belajar
                                </Link>
                            )}
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}