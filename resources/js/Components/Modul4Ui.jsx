export function P({ children }) {
    return (
        <p className="text-justify text-base leading-8 text-gray-700">
            {children}
        </p>
    );
}

export function Kartu({ nomor, judul, icon, children }) {
    return (
        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
            <div className="border-b border-[#e5efed] px-6 py-6 sm:px-10">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                        {icon}
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                            Bagian {nomor}
                        </p>
                        <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                            {judul}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="space-y-8 px-6 py-7 sm:px-10 sm:py-9">
                {children}
            </div>
        </article>
    );
}

export function Sub({ icon, judul, children }) {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f4fb] text-xl">
                    {icon}
                </span>
                <h3 className="text-lg font-bold text-[#123b49] sm:text-xl">
                    {judul}
                </h3>
            </div>
            {children}
        </section>
    );
}

const warna = {
    teal: "border-[#087b68] bg-[#f3f9f8]",
    amber: "border-amber-400 bg-amber-50",
    blue: "border-sky-400 bg-sky-50",
    red: "border-rose-400 bg-rose-50",
};

export function Callout({ icon, title, tone = "teal", children }) {
    return (
        <div className={`rounded-2xl border-l-4 p-5 sm:p-6 ${warna[tone]}`}>
            <div className="flex items-start gap-3">
                <span className="text-2xl">{icon}</span>
                <div>
                    <h4 className="font-bold text-[#123b49]">{title}</h4>
                    <div className="mt-2 leading-relaxed text-gray-700">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Tabel({ headers, rows, min = 560 }) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-[#d4e4e1]">
            <table
                className="w-full text-left text-sm"
                style={{ minWidth: min }}
            >
                <thead className="bg-[#e1f5ed] text-[#123b49]">
                    <tr>
                        {headers.map((h) => (
                            <th key={h} className="px-4 py-3 font-bold">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr
                            key={r[0]}
                            className="border-t border-[#e5efed] align-top"
                        >
                            {r.map((c, i) => (
                                <td
                                    key={i}
                                    className={`px-4 py-3 leading-relaxed ${
                                        i === 0
                                            ? "whitespace-nowrap font-bold text-[#087b68]"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {c}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}