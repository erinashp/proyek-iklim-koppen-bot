import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Guru" />

            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Dashboard Guru
                </h1>

                <p className="mt-2 text-gray-600">
                    Selamat datang di panel pengelolaan pembelajaran Iklim Köppen.
                </p>
            </div>
        </>
    );
}