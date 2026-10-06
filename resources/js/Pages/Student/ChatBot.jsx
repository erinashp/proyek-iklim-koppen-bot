import { Head } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import StudentSidebar from "@/Components/StudentSidebar";
import { balasBot, TOMBOL_CEPAT } from "@/Data/koppenBot";

export default function ChatBot() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text: 'Halo! Aku IklimKöppenBot 👋\n\nAku bisa membantu kamu memahami klasifikasi iklim Köppen.\n\nCoba tanyakan sesuatu atau gunakan tombol cepat di bawah.',
        },
    ]);

    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const chatEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isTyping]);

    const kirimPesan = (teks) => {
        const pesan = teks.trim();

        if (!pesan || isTyping) {
            return;
        }

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: pesan,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const jawaban = balasBot(pesan);

            setIsTyping(false);

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: jawaban,
                },
            ]);
        }, 700);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        kirimPesan(input);
    };

    const handleQuickButton = (teks) => {
        kirimPesan(teks);
    };

    return (
        <>
            <Head title="Chat AI Bot" />

            <StudentSidebar />

            <main className="min-h-screen bg-[#f3f9f8] md:ml-64">
                <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-5">
                        <div className="rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                                    🤖
                                </div>

                                <div>
                                    <h1 className="text-2xl font-bold">
                                        IklimKöppenBot
                                    </h1>

                                    <p className="mt-1 text-sm text-white/80">
                                        Teman belajar klasifikasi iklim Köppen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Container */}
                    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-[#d9e6e3] bg-white shadow-sm">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between border-b border-[#e4eeeb] px-5 py-4">
                            <div>
                                <h2 className="font-semibold text-[#123b49]">
                                    Chat AI Bot
                                </h2>

                                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                    Siap membantu belajar
                                </div>
                            </div>

                            <div className="rounded-full bg-[#eef8f5] px-3 py-1 text-xs font-medium text-[#087b68]">
                                Rule-Based
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="min-h-[420px] flex-1 space-y-4 overflow-y-auto bg-[#f8fcfb] p-4 sm:p-6">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${
                                        message.sender === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[75%] ${
                                            message.sender === "user"
                                                ? "rounded-br-md bg-[#087b68] text-white"
                                                : "rounded-bl-md border border-[#dce9e6] bg-white text-[#234550]"
                                        }`}
                                    >
                                        <div className="whitespace-pre-wrap">
                                            {message.text}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="rounded-2xl rounded-bl-md border border-[#dce9e6] bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <span>
                                                IklimKöppenBot sedang
                                                mengetik
                                            </span>

                                            <span className="flex gap-1">
                                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#087b68]"></span>
                                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#087b68] [animation-delay:150ms]"></span>
                                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#087b68] [animation-delay:300ms]"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={chatEndRef} />
                        </div>

                        {/* Quick Buttons */}
                        <div className="border-t border-[#e4eeeb] bg-white px-4 py-4 sm:px-5">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                                Pertanyaan cepat
                            </p>

                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {TOMBOL_CEPAT.map((tombol) => (
                                    <button
                                        key={tombol}
                                        type="button"
                                        onClick={() =>
                                            handleQuickButton(tombol)
                                        }
                                        disabled={isTyping}
                                        className="shrink-0 rounded-full border border-[#cfe3df] bg-[#f8fcfb] px-3 py-2 text-xs font-medium text-[#087b68] transition hover:border-[#087b68] hover:bg-[#eef8f5] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {tombol}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <form
                            onSubmit={handleSubmit}
                            className="border-t border-[#e4eeeb] bg-white p-4 sm:p-5"
                        >
                            <div className="flex items-end gap-3">
                                <textarea
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) =>
                                        setInput(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === "Enter" &&
                                            !e.shiftKey
                                        ) {
                                            e.preventDefault();
                                            handleSubmit(e);
                                        }
                                    }}
                                    rows={1}
                                    placeholder="Tanyakan tentang iklim Köppen..."
                                    disabled={isTyping}
                                    className="min-h-[48px] flex-1 resize-none rounded-2xl border border-[#cfe0dc] bg-[#f8fcfb] px-4 py-3 text-sm text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/10 disabled:opacity-60"
                                />

                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#087b68] text-white shadow-sm transition hover:bg-[#076b5b] disabled:cursor-not-allowed disabled:opacity-40"
                                    aria-label="Kirim pesan"
                                >
                                    ➤
                                </button>
                            </div>

                            <p className="mt-2 text-center text-[11px] text-gray-400">
                                Tekan Enter untuk mengirim · Shift + Enter
                                untuk baris baru
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}