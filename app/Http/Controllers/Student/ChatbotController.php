<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\ChatbotKnowledge;
use Illuminate\Http\Request;

class ChatbotController extends Controller
{
    /**
     * Daftar kode Köppen yang tersedia di knowledge base.
     */
    private const KOPPEN_CODES = [
        'Af', 'Am', 'Aw', 'As',
        'BWh', 'BWk', 'BSh', 'BSk',
        'Csa', 'Csb', 'Csc',
        'Cwa', 'Cwb', 'Cwc',
        'Cfa', 'Cfb', 'Cfc',
        'Dsa', 'Dsb', 'Dsc', 'Dsd',
        'Dwa', 'Dwb', 'Dwc', 'Dwd',
        'Dfa', 'Dfb', 'Dfc', 'Dfd',
        'ET', 'EF',
    ];

    /**
     * POST /student/chatbot
     */
    public function chat(Request $request)
    {
        $validated = $request->validate([
            'message' => ['required', 'string', 'max:2000'],
        ]);

        $message = trim($validated['message']);
        $normalized = $this->normalize($message);

        /*
        |--------------------------------------------------------------------------
        | 1. Jika user mengetik kode Köppen
        |--------------------------------------------------------------------------
        |
        | Contoh:
        | "aw"
        | "kode aw"
        | "apa arti aw?"
        | "jelaskan iklim Aw"
        |
        */
        $code = $this->detectKoppenCode($message);

        if ($code) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'like',
                "Kode {$code} -%"
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        /*
        |--------------------------------------------------------------------------
        | 2. Jawaban khusus yang membutuhkan beberapa knowledge
        |--------------------------------------------------------------------------
        */

        // Daftar semua kode
        if (
            $normalized === 'daftar' ||
            $normalized === 'daftar kode' ||
            $normalized === 'semua kode' ||
            str_contains($normalized, 'daftar kode iklim')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Daftar Kode Iklim Köppen'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        // Perbedaan Af, Am, Aw
        if (
            str_contains($normalized, 'beda af am aw') ||
            str_contains($normalized, 'perbedaan af am aw') ||
            (
                str_contains($normalized, 'af') &&
                str_contains($normalized, 'am') &&
                str_contains($normalized, 'aw')
            )
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Perbedaan Af Am Aw'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        // Surabaya
        if (
            str_contains($normalized, 'surabaya') &&
            (
                str_contains($normalized, 'iklim') ||
                str_contains($normalized, 'koppen') ||
                str_contains($normalized, 'köppen')
            )
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Iklim Surabaya'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        /*
        |--------------------------------------------------------------------------
        | 3. Pertanyaan umum tentang Köppen
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'apa itu koppen') ||
            str_contains($normalized, 'apa itu köppen') ||
            str_contains($normalized, 'klasifikasi iklim koppen') ||
            str_contains($normalized, 'klasifikasi iklim köppen')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Apa itu Klasifikasi Iklim Köppen?'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        /*
        |--------------------------------------------------------------------------
        | 4. Indonesia
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'iklim indonesia') ||
            str_contains($normalized, 'kode iklim indonesia') ||
            (
                str_contains($normalized, 'indonesia') &&
                str_contains($normalized, 'koppen')
            )
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Kode Iklim Indonesia'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        /*
        |--------------------------------------------------------------------------
        | 5. Arti huruf Köppen
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'huruf pertama') ||
            str_contains($normalized, 'huruf 1') ||
            str_contains($normalized, 'arti huruf pertama')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Arti Huruf Pertama Köppen'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        if (
            str_contains($normalized, 'huruf kedua') ||
            str_contains($normalized, 'huruf 2') ||
            str_contains($normalized, 'arti huruf kedua')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Arti Huruf Kedua Köppen'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        if (
            str_contains($normalized, 'huruf ketiga') ||
            str_contains($normalized, 'huruf 3') ||
            str_contains($normalized, 'arti huruf ketiga')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Arti Huruf Ketiga Köppen'
            )->first();

            if ($knowledge) {
                return response()->json([
                    'success' => true,
                    'message' => $knowledge->content,
                    'source' => 'knowledge',
                ]);
            }
        }

        /*
        |--------------------------------------------------------------------------
        | 6. Sapaan
        |--------------------------------------------------------------------------
        */

        if (in_array($normalized, [
            'halo',
            'hai',
            'hi',
            'hello',
            'p',
        ])) {
            return response()->json([
                'success' => true,
                'message' => 'Halo! Aku IklimKöppenBot. Kamu bisa bertanya tentang klasifikasi iklim Köppen, kode iklim seperti Af, Am, Aw, BWh, Cfb, dan lainnya. Kamu juga bisa mengetik "daftar kode" untuk melihat semua kode Köppen.',
                'source' => 'system',
            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | 7. Pencarian knowledge berdasarkan keyword
        |--------------------------------------------------------------------------
        */

        $knowledge = $this->searchKnowledge($normalized);

        if ($knowledge) {
            return response()->json([
                'success' => true,
                'message' => $knowledge->content,
                'source' => 'knowledge',
            ]);
        }

        /*
        |--------------------------------------------------------------------------
        | 8. Fallback
        |--------------------------------------------------------------------------
        */

        return response()->json([
            'success' => true,
            'message' => 'Aku belum menemukan materi yang cukup relevan untuk menjawab pertanyaan tersebut. Coba tanyakan tentang klasifikasi iklim Köppen, kode iklim seperti Af, Am, Aw, BWh, Cfb, iklim Indonesia, iklim Surabaya, atau ketik "daftar kode".',
            'source' => 'fallback',
        ]);
    }

    /**
     * Normalisasi teks.
     */
    private function normalize(string $text): string
    {
        $text = strtolower($text);

        $text = str_replace(
            ['?', '!', '.', ',', ';', ':', '"', "'", '(', ')'],
            '',
            $text
        );

        return trim(preg_replace('/\s+/', ' ', $text));
    }

    /**
     * Mendeteksi kode Köppen dari pertanyaan.
     *
     * Contoh:
     * "aw" -> Aw
     * "kode aw" -> Aw
     * "apa arti BWh?" -> BWh
     */
    private function detectKoppenCode(string $message): ?string
    {
        $clean = preg_replace('/[^a-zA-Z0-9\s]/', ' ', $message);

        $words = preg_split('/\s+/', trim($clean));

        foreach ($words as $word) {
            foreach (self::KOPPEN_CODES as $code) {
                if (strtolower($word) === strtolower($code)) {
                    return $code;
                }
            }
        }

        return null;
    }

    /**
     * Pencarian sederhana berdasarkan keywords.
     */
    private function searchKnowledge(string $normalized): ?ChatbotKnowledge
    {
        $knowledgeList = ChatbotKnowledge::all();

        $bestKnowledge = null;
        $bestScore = 0;

        foreach ($knowledgeList as $knowledge) {
            $score = 0;

            $keywords = $knowledge->keywords ?? '';

            if ($keywords !== '') {
                $keywordList = preg_split(
                    '/[,|]+/',
                    strtolower($keywords)
                );

                foreach ($keywordList as $keyword) {
                    $keyword = trim($keyword);

                    if (
                        $keyword !== '' &&
                        str_contains($normalized, $keyword)
                    ) {
                        $score += 2;
                    }
                }
            }

            $title = $this->normalize($knowledge->title);

            $titleWords = preg_split('/\s+/', $title);

            foreach ($titleWords as $word) {
                if (
                    strlen($word) >= 3 &&
                    str_contains($normalized, $word)
                ) {
                    $score++;
                }
            }

            if ($score > $bestScore) {
                $bestScore = $score;
                $bestKnowledge = $knowledge;
            }
        }

        return $bestScore > 0 ? $bestKnowledge : null;
    }
}