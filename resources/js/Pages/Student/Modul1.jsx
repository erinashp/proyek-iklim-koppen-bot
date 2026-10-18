import { Head, Link } from "@inertiajs/react";

import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

const IMG = "/image/modul1/";

/* ===================== DATA ===================== */

const kelompokIklim = [
    {
        code: "A",
        title: "Iklim Tropis",
        subtitle: "Panas dan lembap",
        img: "image6.jpg",
        alt: "Hutan hujan tropis",
        color: "bg-[#e4f5e8]",
        points: [
            "Suhu rata-rata setiap bulan umumnya minimal 18°C.",
            "Curah hujan relatif tinggi pada tipe-tipe tropis basah, tetapi distribusinya berbeda antarsubtipe.",
            "Vegetasi dapat berupa hutan hujan tropis atau sabana.",
        ],
        contoh: "Kawasan Amazon, Cekungan Kongo, dan berbagai wilayah Indonesia.",
        subtipe:
            "Af (hutan hujan), Am (monsun), Aw (sabana dengan musim kering pada musim dingin dalam istilah meteorologi).",
    },
    {
        code: "B",
        title: "Iklim Kering",
        subtitle: "Kekurangan air",
        img: "image7.jpg",
        alt: "Gurun pasir",
        color: "bg-[#fff3d9]",
        points: [
            "Curah hujan tidak mencukupi dibandingkan kebutuhan penguapan potensial.",
            "Ketersediaan air menjadi faktor pembatas utama kehidupan tumbuhan.",
            "Vegetasi umumnya jarang, seperti tumbuhan gurun dan semak padang rumput kering.",
        ],
        contoh: "Gurun Sahara dan wilayah gurun di Jazirah Arab.",
        subtipe: "BW (gurun) dan BS (stepa atau semi-kering).",
    },
    {
        code: "C",
        title: "Iklim Sedang",
        subtitle: "Musim dingin relatif ringan",
        img: "image8.jpg",
        alt: "Hutan gugur di tepi danau",
        color: "bg-[#e8f4fb]",
        points: [
            "Memiliki perbedaan suhu antarmusim yang cukup jelas.",
            "Suhu musim dinginnya relatif lebih ringan dibandingkan kelompok D.",
            "Vegetasinya dapat berupa hutan gugur, hutan campuran, dan padang rumput.",
        ],
        contoh: "Sebagian wilayah Eropa Barat dan wilayah subtropis lembap tertentu.",
        subtipe:
            "antara lain Cfa (lembap dengan musim panas panas), Cfb (musim panas relatif sejuk), dan Cs (musim panas kering).",
    },
    {
        code: "D",
        title: "Iklim Kontinental",
        subtitle: "Musim dingin sangat dingin",
        img: "image9.jpeg",
        alt: "Hutan konifer dan danau beku",
        color: "bg-[#f8eadf]",
        points: [
            "Memiliki musim dingin yang dingin dan musim panas yang bervariasi dari hangat hingga panas.",
            "Perbedaan suhu antarmusim dapat besar.",
            "Vegetasinya antara lain hutan konifer atau taiga di wilayah tertentu.",
        ],
        contoh: "Sebagian wilayah Kanada, Rusia, dan Siberia.",
        subtipe:
            "antara lain Dfa, Dfb, dan Dfc, yang menunjukkan perbedaan pola suhu dan musim.",
    },
    {
        code: "E",
        title: "Iklim Kutub",
        subtitle: "Ekstrem dingin",
        img: "image10.jpg",
        alt: "Lanskap es dan salju",
        color: "bg-[#e8f0fc]",
        points: [
            "Suhu sangat rendah sepanjang tahun.",
            "Dalam kelompok E, suhu rata-rata bulan terhangat kurang dari 10°C.",
            "Vegetasi sangat terbatas; wilayah tertentu didominasi tundra, sedangkan wilayah lainnya tertutup es permanen.",
        ],
        contoh: "Antarktika, Greenland, dan sebagian wilayah Arktik.",
        subtipe: "ET (tundra) dan EF (tutupan es permanen).",
    },
];

const kodeHuruf = [
    ["A", "Iklim tropis", "Af, Am, Aw"],
    ["B", "Iklim kering", "BWh, BSh, BWk"],
    ["C", "Iklim sedang", "Cfa, Cfb, Csa"],
    ["D", "Iklim kontinental", "Dfa, Dfb, Dfc"],
    ["E", "Iklim kutub", "ET, EF"],
    ["f", "Tidak ada musim kering yang berarti menurut kriteria subtipe", "Af atau Cfb"],
    ["m", "Pola hujan monsun", "Am"],
    ["w", "Musim dingin kering", "Aw atau Cwa"],
    ["s", "Musim panas kering", "Csa atau Csb"],
    ["h", "Pada kelompok B, menunjukkan karakteristik panas", "BWh"],
    ["k", "Pada kelompok B, menunjukkan karakteristik lebih dingin", "BWk"],
];

const contohKode = [
    {
        kode: "Af",
        nama: "Iklim hutan hujan tropis",
        isi: "A menunjukkan iklim tropis, sedangkan f menunjukkan tidak adanya musim kering menurut kriteria Köppen. Bulan terkering memiliki curah hujan sekurang-kurangnya 60 mm.",
        color: "bg-[#e1f5ed] text-[#087b68]",
    },
    {
        kode: "Am",
        nama: "Iklim monsun tropis",
        isi: "Wilayah tetap panas sepanjang tahun, tetapi memiliki perbedaan curah hujan yang jelas antara musim hujan dan periode yang lebih kering.",
        color: "bg-[#eef7fb] text-[#26718b]",
    },
    {
        kode: "Aw",
        nama: "Iklim sabana tropis",
        isi: "Wilayah memiliki suhu tinggi sepanjang tahun, dengan musim kering yang nyata. Vegetasi sabana dapat berkembang di daerah yang sesuai.",
        color: "bg-[#f5f1fc] text-[#7955a5]",
    },
    {
        kode: "BWh",
        nama: "Iklim gurun panas",
        isi: "B menunjukkan iklim kering, W menunjukkan gurun, dan h menandakan karakteristik suhu panas pada kelompok B.",
        color: "bg-[#fff3d9] text-[#a56a10]",
    },
];

const kegunaan = [
    {
        judul: "Memahami potensi pertanian",
        img: "image11.jpg",
        alt: "Petani menanam padi di sawah",
        isi: "Informasi tentang suhu dan curah hujan membantu menjelaskan kesesuaian suatu wilayah untuk tanaman tertentu. Wilayah yang lembap dapat mendukung budidaya padi, sedangkan tanaman tahan kering lebih sesuai untuk kondisi dengan keterbatasan air.",
        analisis: "Bagaimana pola hujan memengaruhi waktu tanam dan kebutuhan irigasi?",
    },
    {
        judul: "Menjelaskan persebaran vegetasi dan ekosistem",
        img: "image12.jpg",
        alt: "Hutan tropis lebat",
        isi: "Suhu dan ketersediaan air memengaruhi jenis tumbuhan yang mampu hidup di suatu wilayah. Hal ini membantu menjelaskan mengapa hutan hujan, sabana, stepa, dan tundra memiliki persebaran berbeda.",
        analisis: "Mengapa vegetasi gurun berbeda dari vegetasi hutan hujan tropis?",
    },
    {
        judul: "Mendukung perencanaan wilayah dan permukiman",
        img: "image13.jpg",
        alt: "Ilustrasi perencanaan wilayah dan pengelolaan air",
        isi: "Karakteristik iklim dapat menjadi salah satu pertimbangan dalam merancang bangunan, sistem drainase, pengelolaan air, serta pemilihan bahan bangunan yang sesuai dengan kondisi setempat.",
        analisis: "Mengapa bangunan di daerah panas dan lembap memerlukan perhatian terhadap ventilasi?",
    },
    {
        judul: "Membandingkan karakteristik antarwilayah",
        img: "image14.jpg",
        alt: "Dua orang membahas peta iklim di layar komputer",
        isi: "Kode iklim memudahkan kita membandingkan wilayah tanpa harus menguraikan seluruh data suhu dan curah hujannya dari awal.",
        analisis: "Apa perbedaan lingkungan yang umum dijumpai di wilayah Af dan BWh?",
    },
    {
        judul: "Mendukung penelitian lingkungan dan perubahan iklim",
        img: "image15.jpg",
        alt: "Peneliti menganalisis peta iklim di komputer",
        isi: "Peta Köppen–Geiger dapat digunakan untuk membandingkan pola iklim antarperiode dan mengkaji kemungkinan pergeseran zona iklim. Namun, penilaian dampak perubahan iklim tetap memerlukan data dan analisis tambahan.",
        analisis: "Apakah perubahan suhu dan curah hujan jangka panjang dapat mengubah klasifikasi iklim suatu wilayah?",
    },
];

const indonesia = [
    {
        judul: "Wilayah hutan hujan yang lembap",
        img: "image16.jpg",
        alt: "Hutan hujan tropis dan sungai",
        isi: "Sebagian wilayah Indonesia memiliki kondisi yang sesuai dengan karakteristik Af: panas sepanjang tahun dan curah hujan tetap tinggi, termasuk pada bulan terkering.",
    },
    {
        judul: "Wilayah dengan pola monsun",
        img: "image17.jpg",
        alt: "Sawah terasering dengan kabut",
        isi: "Beberapa wilayah memiliki perbedaan musim hujan dan kemarau yang nyata. Bergantung pada data suhu dan curah hujan, kondisi tertentu dapat sesuai dengan tipe Am.",
    },
    {
        judul: "Wilayah dengan musim kering nyata",
        img: "image18.jpg",
        alt: "Perbukitan savana kering",
        isi: "Sebagian wilayah Nusa Tenggara memiliki periode kering yang lebih panjang. Dalam klasifikasi tertentu, lokasi yang memenuhi seluruh kriteria dapat termasuk tipe Aw.",
    },
];

const diskusi = [
    "Mengapa dua wilayah yang berada di lintang hampir sama dapat memiliki kode iklim berbeda?",
    "Bagaimana klasifikasi iklim membantu petani merencanakan waktu tanam?",
    "Mengapa klasifikasi iklim tidak cukup untuk menentukan jenis tanaman yang pasti berhasil tumbuh di suatu wilayah?",
    "Jika suatu wilayah mengalami perubahan pola suhu dan curah hujan selama puluhan tahun, bagaimana hal itu dapat memengaruhi klasifikasi iklimnya?",
];

const pustaka = [
    {
        teks: "National Oceanic and Atmospheric Administration (NOAA). (n.d.). Climate Zones. NOAA JetStream.",
        url: "https://www.noaa.gov/jetstream/global/climate-zones",
    },
    {
        teks: "National Oceanic and Atmospheric Administration (NOAA). (n.d.). JetStream Max: Addition Köppen-Geiger Climate Subdivisions.",
        url: "https://www.noaa.gov/jetstream/global/climate-zones/jetstream-max-addition-k-ppen-geiger-climate-subdivisions",
    },
    {
        teks: "NOAA Climate.gov. (2011). How do scientists classify different types of climate?",
        url: "https://www.climate.gov/maps-data/climate-data-primer/how-do-scientists-classify-different-types-climate",
    },
    {
        teks: "NOAA Science On a Sphere. (2007). Köppen-Geiger Climate Classification. Data source: Peel, M. C., Finlayson, B. L., & McMahon, T. A. (2007).",
        url: "https://sos.noaa.gov/catalog/datasets/koppen-geiger-climate-classification-2007/",
    },
    {
        teks: "Peel, M. C., Finlayson, B. L., & McMahon, T. A. (2007). Updated world map of the Köppen–Geiger climate classification. Hydrology and Earth System Sciences, 11, 1633–1644.",
        url: "https://doi.org/10.5194/hess-11-1633-2007",
    },
    {
        teks: "Kottek, M., Grieser, J., Beck, C., Rudolf, B., & Rubel, F. (2006). World map of the Köppen–Geiger climate classification updated. Meteorologische Zeitschrift, 15(3), 259–263.",
        url: "https://doi.org/10.1127/0941-2948/2006/0130",
    },
];

/* ================= KOMPONEN KECIL ================= */

function P({ children }) {
    return (
        <p className="text-justify text-base leading-8 text-gray-700">
            {children}
        </p>
    );
}

function MateriHeader({ nomor, judul }) {
    return (
        <div className="border-b border-[#e5efed] px-6 py-6 sm:px-10">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl text-[#087b68]">
                    ▤
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                        Materi {nomor}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                        {judul}
                    </h2>
                </div>
            </div>
        </div>
    );
}

function Figure({ src, alt, caption }) {
    return (
        <figure className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-[#f8fbfa]">
            <div className="bg-white p-3 sm:p-5">
                <img
                    src={IMG + src}
                    alt={alt}
                    loading="lazy"
                    className="mx-auto h-auto max-h-[480px] w-full rounded-xl object-contain"
                />
            </div>
            {caption && (
                <figcaption className="border-t border-[#e5efed] px-5 py-4 text-center text-sm leading-relaxed text-gray-500 sm:px-6">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

function Callout({ icon, title, children }) {
    return (
        <div className="rounded-2xl border-l-4 border-[#087b68] bg-[#f3f9f8] p-5 sm:p-6">
            <div className="flex items-start gap-3">
                <span className="text-2xl">{icon}</span>
                <div>
                    <h3 className="font-bold text-[#123b49]">{title}</h3>
                    <div className="mt-2 leading-relaxed text-gray-600">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImageCard({ img, alt, title, children, label }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white">
            <img
                src={IMG + img}
                alt={alt}
                loading="lazy"
                className="h-52 w-full object-cover sm:h-60"
            />
            <div className="p-5 sm:p-6">
                {label && (
                    <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                        {label}
                    </p>
                )}
                <h3 className="mt-1 text-lg font-bold text-[#123b49]">
                    {title}
                </h3>
                <div className="mt-2 leading-relaxed text-gray-600">
                    {children}
                </div>
            </div>
        </div>
    );
}

/* ===================== HALAMAN ===================== */

export default function Modul1() {
    return (
        <>
            <Head title="Modul 1: Pengertian Klasifikasi Iklim Köppen | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <StudentSidebar />

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
                                    Modul 1: Pengertian Klasifikasi Iklim Köppen
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Mengenal konsep dasar sistem klasifikasi iklim Köppen.
                                </p>
                            </div>

                            <Link
                                href={route("student.material")}
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
                                href={route("student.material")}
                                className="transition hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>
                            <span>/</span>
                            <span className="font-medium text-[#123b49]">
                                Modul 1
                            </span>
                        </nav>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pembelajaran 01
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Pengertian Klasifikasi Iklim Köppen dan Kegunaannya dalam Memahami Kondisi Wilayah
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Memahami pengertian, dasar penentuan, lima kelompok utama, kode huruf, dan kegunaan klasifikasi iklim Köppen–Geiger.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        📘 Materi Geografi
                                    </span>
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ⏱️ Estimasi 20 menit
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* ===== MATERI 1.1 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="1.1"
                                judul="Pengertian Klasifikasi Iklim Köppen"
                            />

                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Pernahkah kalian bertanya mengapa Indonesia memiliki hutan hujan tropis, wilayah Gurun Sahara sangat kering, dan Antarktika tertutup es? Salah satu cara untuk memahami perbedaan karakteristik wilayah tersebut adalah dengan mempelajari klasifikasi iklim Köppen–Geiger.
                                </P>

                                <Figure
                                    src="image1.jpg"
                                    alt="Peta klasifikasi iklim Köppen-Geiger dunia"
                                    caption="Peta persebaran klasifikasi iklim Köppen–Geiger di dunia. Setiap warna menunjukkan tipe iklim yang berbeda."
                                />

                                <P>
                                    Klasifikasi iklim Köppen–Geiger adalah sistem pengelompokan iklim di berbagai wilayah Bumi berdasarkan pola suhu udara dan curah hujan dalam jangka panjang, dengan mempertimbangkan hubungan iklim dengan persebaran vegetasi alami. Sistem ini dikembangkan oleh Wladimir Köppen (1846–1940), ahli klimatologi dan botani asal Jerman yang lahir di Saint Petersburg. Sistem ini pertama kali diperkenalkan sekitar tahun 1884, kemudian disempurnakan pada 1918 dan 1936. Belakangan, sistem ini juga dikembangkan lebih lanjut oleh Rudolph Geiger, sehingga sering disebut juga klasifikasi iklim Köppen–Geiger.
                                </P>

                                <Callout icon="💡" title="Tiga pertanyaan yang dijawab klasifikasi ini">
                                    <ul className="space-y-2">
                                        <li>• Seberapa panas atau dingin suatu wilayah?</li>
                                        <li>• Seberapa banyak dan kapan hujan turun di wilayah tersebut?</li>
                                        <li>• Jenis vegetasi apa yang umumnya sesuai dengan kondisi iklimnya?</li>
                                    </ul>
                                </Callout>

                                <P>
                                    Sistem ini masih digunakan secara luas dalam pembelajaran geografi dan penelitian iklim, termasuk untuk memetakan persebaran wilayah iklim di seluruh dunia.
                                </P>

                                <div>
                                    <h3 className="text-lg font-bold text-[#123b49]">
                                        Perbedaan Cuaca dan Iklim
                                    </h3>
                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Sebelum mempelajari lebih lanjut, kenali dulu apa perbedaan cuaca dan iklim.
                                    </p>

                                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                                        <ImageCard
                                            img="image2.jpg"
                                            alt="Hujan deras di jalan perkotaan"
                                            title="Cuaca"
                                        >
                                            <p>
                                                Kondisi atmosfer pada waktu dan tempat tertentu, misalnya Surabaya mengalami hujan deras pada sore hari.
                                            </p>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Contoh: suhu, awan, angin, dan hujan hari ini.
                                            </p>
                                        </ImageCard>

                                        <ImageCard
                                            img="image3.jpg"
                                            alt="Hutan hujan tropis dari udara"
                                            title="Iklim"
                                        >
                                            <p>
                                                Pola rata-rata dan variasi kondisi atmosfer dalam jangka panjang, umumnya menggunakan periode 30 tahun untuk normal iklim.
                                            </p>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Contoh: suatu wilayah memiliki suhu tinggi dan curah hujan yang melimpah sepanjang tahun.
                                            </p>
                                        </ImageCard>
                                    </div>
                                </div>

                                <Callout icon="📌" title="Ingat!">
                                    <p>
                                        Satu hari yang dingin tidak otomatis membuat suatu wilayah beriklim dingin. Penentuan iklim memerlukan data pengamatan dalam jangka panjang, bukan hanya kondisi pada satu hari.
                                    </p>
                                </Callout>
                            </div>
                        </article>

                        {/* ===== MATERI 1.2 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="1.2"
                                judul="Dasar Penentuan Klasifikasi Iklim Köppen"
                            />

                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Köppen mengelompokkan iklim dengan memperhatikan dua unsur utama berikut.
                                </P>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <ImageCard
                                        img="image4.jpg"
                                        alt="Termometer suhu panas dan dingin"
                                        label="Unsur A"
                                        title="Suhu udara"
                                    >
                                        <p>
                                            Menunjukkan tingkat panas atau dinginnya udara, baik berdasarkan suhu rata-rata bulanan maupun pola suhu sepanjang tahun.
                                        </p>
                                    </ImageCard>

                                    <ImageCard
                                        img="image5.jpg"
                                        alt="Ilustrasi curah hujan tahunan"
                                        label="Unsur B"
                                        title="Curah hujan"
                                    >
                                        <p>
                                            Menunjukkan jumlah hujan yang turun, termasuk pembagian musim hujan dan musim kering serta pola sebarannya dalam setahun.
                                        </p>
                                    </ImageCard>
                                </div>

                                <P>
                                    Selain kedua unsur tersebut, vegetasi alami menjadi petunjuk penting karena tumbuhan menanggapi kondisi suhu dan ketersediaan air di lingkungannya. Misalnya, hutan hujan umumnya berkembang di daerah lembap, sedangkan vegetasi gurun mampu bertahan dalam kondisi kekurangan air.
                                </P>

                                <Callout icon="📌" title="Perlu diingat">
                                    <p>
                                        Klasifikasi Köppen bukan hanya didasarkan pada letak lintang. Ketinggian tempat, jarak dari laut, sirkulasi atmosfer, dan faktor geografis lain memengaruhi suhu dan curah hujan suatu wilayah, sehingga wilayah yang berada pada lintang serupa belum tentu memiliki iklim yang sama.
                                    </p>
                                </Callout>
                            </div>
                        </article>

                        {/* ===== MATERI 1.3 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="1.3"
                                judul="Lima Kelompok Utama Iklim Köppen"
                            />

                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Dalam sistem Köppen–Geiger, iklim dunia dibagi menjadi lima kelompok utama yang diberi kode huruf kapital A sampai E. Setiap kelompok memiliki karakteristik suhu, curah hujan, dan vegetasi yang berbeda.
                                </P>

                                <div className="grid gap-5 md:grid-cols-2">
                                    {kelompokIklim.map((k) => (
                                        <div
                                            key={k.code}
                                            className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white"
                                        >
                                            <img
                                                src={IMG + k.img}
                                                alt={k.alt}
                                                loading="lazy"
                                                className="h-56 w-full object-cover sm:h-64"
                                            />

                                            <div className="p-5 sm:p-6">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl font-bold text-[#123b49] ${k.color}`}
                                                    >
                                                        {k.code}
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                                                            Kelompok {k.code}
                                                        </p>
                                                        <h3 className="text-lg font-bold text-[#123b49]">
                                                            {k.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            {k.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                <ul className="mt-4 space-y-2">
                                                    {k.points.map((p, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex gap-2 leading-relaxed text-gray-700"
                                                        >
                                                            <span className="text-[#087b68]">•</span>
                                                            <span>{p}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="mt-4 rounded-xl bg-[#f8fbfa] p-4 text-sm leading-relaxed text-gray-600">
                                                    <p>
                                                        <strong className="font-semibold text-[#123b49]">
                                                            Contoh:{" "}
                                                        </strong>
                                                        {k.contoh}
                                                    </p>
                                                    <p className="mt-1">
                                                        <strong className="font-semibold text-[#123b49]">
                                                            Subtipe:{" "}
                                                        </strong>
                                                        {k.subtipe}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-500">
                                    Sumber: NOAA, JetStream—Climate Zones; NOAA Science On a Sphere—Köppen–Geiger Climate Classification (2007).
                                </p>

                                <Callout icon="👩‍🏫" title="Catatan untuk guru">
                                    <p>
                                        Kelompok H (iklim dataran tinggi) kadang ditampilkan pada peta atau versi modifikasi Köppen–Geiger. H bukan salah satu dari lima kelompok utama dalam sistem aslinya. Kondisi iklim pegunungan dapat sangat beragam sesuai ketinggian, lereng, dan letak geografis.
                                    </p>
                                </Callout>
                            </div>
                        </article>

                        {/* ===== MATERI 1.4 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="1.4"
                                judul="Cara Membaca Kode Iklim Köppen–Geiger"
                            />

                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Salah satu keunikan sistem Köppen–Geiger adalah penggunaan kode huruf. Kode ini membantu kita memahami karakteristik suatu iklim secara ringkas. Contohnya adalah kode Af, Am, Aw, BWh, Cfa, dan Cfb.
                                </P>

                                <div>
                                    <h3 className="text-lg font-bold text-[#123b49]">
                                        Arti huruf pada kode iklim
                                    </h3>

                                    <div className="mt-4 overflow-x-auto rounded-2xl border border-[#d4e4e1]">
                                        <table className="w-full min-w-[540px] text-left text-sm">
                                            <thead className="bg-[#e1f5ed] text-[#123b49]">
                                                <tr>
                                                    <th className="px-4 py-3 font-bold">Kode</th>
                                                    <th className="px-4 py-3 font-bold">Arti sederhana</th>
                                                    <th className="px-4 py-3 font-bold">Contoh penggunaan</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {kodeHuruf.map(([kode, arti, contoh]) => (
                                                    <tr key={kode} className="border-t border-[#e5efed]">
                                                        <td className="px-4 py-3 text-lg font-bold text-[#087b68]">
                                                            {kode}
                                                        </td>
                                                        <td className="px-4 py-3 text-gray-700">{arti}</td>
                                                        <td className="px-4 py-3 text-gray-700">{contoh}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <Callout icon="📌" title="Perlu diingat">
                                    <p>
                                        Huruf kecil tidak memiliki arti yang sama untuk semua kelompok. Maknanya bergantung pada posisi huruf dan kelompok iklimnya.
                                    </p>
                                </Callout>

                                <div>
                                    <h3 className="text-lg font-bold text-[#123b49]">
                                        Contoh interpretasi kode
                                    </h3>

                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        {contohKode.map((c) => (
                                            <div
                                                key={c.kode}
                                                className="rounded-xl border border-[#e5efed] p-4"
                                            >
                                                <div
                                                    className={`inline-block rounded-lg px-3 py-1 text-2xl font-bold ${c.color}`}
                                                >
                                                    {c.kode}
                                                </div>
                                                <h4 className="mt-2 font-semibold text-[#123b49]">
                                                    {c.nama}
                                                </h4>
                                                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                    {c.isi}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500">
                                    Sumber interpretasi kode: NOAA, JetStream Max: Köppen–Geiger Climate Subdivisions.
                                </p>
                            </div>
                        </article>

                        {/* ===== MATERI 1.5 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="1.5"
                                judul="Kegunaan Klasifikasi Iklim Köppen dalam Memahami Kondisi Wilayah"
                            />

                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Klasifikasi iklim tidak hanya digunakan untuk menghafal nama iklim. Sistem ini membantu siswa dan peneliti menjelaskan hubungan antara kondisi atmosfer dengan lingkungan dan aktivitas manusia.
                                </P>

                                <div className="space-y-5">
                                    {kegunaan.map((k, i) => (
                                        <div
                                            key={i}
                                            className="overflow-hidden rounded-2xl border border-[#d4e4e1] md:flex"
                                        >
                                            <img
                                                src={IMG + k.img}
                                                alt={k.alt}
                                                loading="lazy"
                                                className="h-52 w-full object-cover md:h-auto md:w-72 md:shrink-0"
                                            />
                                            <div className="p-5 sm:p-6">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-sm font-bold text-white">
                                                        {i + 1}
                                                    </span>
                                                    <h3 className="font-bold text-[#123b49]">
                                                        {k.judul}
                                                    </h3>
                                                </div>
                                                <p className="mt-3 leading-relaxed text-gray-600">
                                                    {k.isi}
                                                </p>
                                                <p className="mt-3 rounded-xl bg-[#f3f9f8] p-3 text-sm leading-relaxed text-gray-600">
                                                    <strong className="font-semibold text-[#123b49]">
                                                        Contoh analisis:{" "}
                                                    </strong>
                                                    {k.analisis}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <P>
                                    Kegunaan klasifikasi iklim dalam memahami kondisi wilayah didukung oleh NOAA Climate.gov, yang menjelaskan bahwa klasifikasi iklim membantu identifikasi karakteristik wilayah, kesesuaian tanaman, ekologi, serta berbagai kebutuhan perencanaan. Penelitian ilmiah juga menggunakan klasifikasi Köppen–Geiger untuk regionalisasi iklim dan kajian perubahan iklim.
                                </P>
                            </div>
                        </article>

                        {/* ===== MATERI 1.6 ===== */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <MateriHeader
                                nomor="1.6"
                                judul="Contoh Penerapan dalam Konteks Indonesia"
                            />

                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <P>
                                    Indonesia memiliki keragaman pola curah hujan, dari wilayah yang relatif basah sepanjang tahun hingga wilayah yang mengalami musim kering lebih nyata. Oleh karena itu, tidak tepat jika seluruh Indonesia dianggap mempunyai satu kode Köppen yang sama.
                                </P>

                                <div className="grid gap-4 md:grid-cols-3">
                                    {indonesia.map((x) => (
                                        <ImageCard
                                            key={x.judul}
                                            img={x.img}
                                            alt={x.alt}
                                            title={x.judul}
                                        >
                                            <p className="text-sm">{x.isi}</p>
                                        </ImageCard>
                                    ))}
                                </div>

                                <Callout icon="⚠️" title="Penting untuk pembelajaran">
                                    <p>
                                        Contoh tersebut menunjukkan karakteristik yang mungkin dijumpai, bukan penetapan kode resmi untuk seluruh pulau atau provinsi. Kode iklim pada lokasi tertentu harus ditentukan berdasarkan data suhu dan curah hujan jangka panjang serta kriteria klasifikasi yang digunakan.
                                    </p>
                                </Callout>

                                <P>
                                    Untuk menghasilkan klasifikasi yang dapat dipertanggungjawabkan, data perlu mencakup periode yang memadai. Normal iklim sering menggunakan periode 30 tahun, sementara penelitian peta Köppen–Geiger dapat memakai periode dan sumber data tertentu yang dijelaskan secara eksplisit dalam metodologinya.
                                </P>
                            </div>
                        </article>

                        {/* ===== PERTANYAAN DISKUSI ===== */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-xl">
                                    💬
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Pertanyaan Diskusi Tingkat Analisis
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Diskusikan pertanyaan berikut bersama teman sekelasmu.
                                    </p>
                                </div>
                            </div>

                            <ul className="mt-5 space-y-3">
                                {diskusi.map((q, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 rounded-xl bg-[#f8fbfa] p-4"
                                    >
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                                            {i + 1}
                                        </span>
                                        <p className="leading-relaxed text-gray-700">{q}</p>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-5 leading-relaxed text-gray-600">
                                Pertanyaan tersebut melatih siswa tidak hanya mengingat kode, tetapi juga menganalisis hubungan antara iklim, lingkungan, dan aktivitas manusia.
                            </p>
                        </section>

                        {/* ===== KESIMPULAN ===== */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Kesimpulan Materi
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-5 space-y-4">
                                <P>
                                    Klasifikasi iklim Köppen–Geiger merupakan sistem pengelompokan iklim berdasarkan pola suhu dan curah hujan jangka panjang serta kaitannya dengan vegetasi alami. Sistem ini membagi iklim menjadi lima kelompok utama, yaitu A (tropis), B (kering), C (sedang), D (kontinental), dan E (kutub).
                                </P>
                                <P>
                                    Kegunaan utamanya adalah membantu kita memahami karakteristik suatu wilayah, menjelaskan persebaran vegetasi, membandingkan kondisi antarwilayah, mendukung pertimbangan pertanian dan perencanaan wilayah, serta menjadi salah satu alat dalam penelitian lingkungan dan perubahan iklim.
                                </P>

                                <Callout icon="🎯" title="Inti yang perlu diingat">
                                    <p>
                                        Kode iklim bukan sekadar huruf untuk dihafalkan. Kode tersebut merangkum pola suhu dan hujan yang membantu menjelaskan mengapa kondisi lingkungan berbeda antara satu wilayah dan wilayah lainnya.
                                    </p>
                                </Callout>
                            </div>
                        </section>

                        {/* ===== DAFTAR PUSTAKA ===== */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <h3 className="text-xl font-bold text-[#123b49]">
                                Daftar Pustaka
                            </h3>
                            <p className="mt-1 text-gray-600">
                                Referensi berikut dapat ditelusuri dan digunakan untuk memperkuat materi ajar.
                            </p>

                            <ol className="mt-5 space-y-3">
                                {pustaka.map((r, i) => (
                                    <li
                                        key={i}
                                        className="rounded-xl bg-[#f8fbfa] p-4 text-sm leading-relaxed text-gray-700"
                                    >
                                        <span className="font-semibold text-[#087b68]">
                                            {i + 1}.{" "}
                                        </span>
                                        {r.teks}{" "}
                                        <a
                                            href={r.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="break-all text-[#087b68] underline hover:text-[#065f50]"
                                        >
                                            {r.url}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* SELESAIKAN MODUL */}
                        <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">
                            <CompleteModuleButton moduleNumber={1} />
                        </div>

                        {/* NAVIGASI MODUL */}
                        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={route("student.material")}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Daftar Materi
                            </Link>

                            <Link
                                href={route("student.modul2")}
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#065f50]"
                            >
                                Modul Berikutnya
                                <span>→</span>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}