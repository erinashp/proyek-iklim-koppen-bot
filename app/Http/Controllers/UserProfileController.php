<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class UserProfileController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($user->id),
            ],

            'avatar' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],
        ]);

        // Update nama dan email
        $user->name = $validated['name'];
        $user->email = $validated['email'];

        // Jika pengguna mengunggah foto baru
        if ($request->hasFile('avatar')) {
            // Hapus foto lama jika ada
            if ($user->avatar) {
                Storage::disk('public')->delete($user->avatar);
            }

            // Simpan foto baru
            $path = $request->file('avatar')->store('profiles', 'public');

            $user->avatar = $path;
        }

        $user->save();

        return redirect()
            ->back()
            ->with('success', 'Profil berhasil diperbarui.');
    }
}