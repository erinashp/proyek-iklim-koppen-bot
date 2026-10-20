<?php

namespace Tests\Feature;

use App\Models\ChallengeQuestion;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UploadStorageTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake('uploads');
        config(['filesystems.uploads' => 'uploads']);
    }

    public function test_profile_avatar_uses_the_configured_upload_disk(): void
    {
        $teacher = User::factory()->create(['role' => 'teacher']);

        $this->actingAs($teacher)
            ->put(route('teacher.profile.update'), [
                'name' => $teacher->name,
                'email' => $teacher->email,
                'avatar' => UploadedFile::fake()->image('avatar.webp'),
            ])
            ->assertRedirect(route('teacher.profile'));

        $path = $teacher->fresh()->avatar;

        $this->assertNotNull($path);
        Storage::disk('uploads')->assertExists($path);
    }

    public function test_admin_challenge_image_uses_the_configured_upload_disk(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);

        $this->actingAs($admin)
            ->post(route('admin.challenges.store'), [
                'number' => 99,
                'question' => 'Pertanyaan uji?',
                'option_a' => 'A',
                'option_b' => 'B',
                'option_c' => 'C',
                'option_d' => 'D',
                'option_e' => 'E',
                'correct_answer' => 'A',
                'image' => UploadedFile::fake()->image('question.png'),
            ])
            ->assertRedirect(route('admin.challenges.index'));

        $path = ChallengeQuestion::query()->where('number', 99)->value('image');

        $this->assertNotNull($path);
        Storage::disk('uploads')->assertExists($path);
    }

    public function test_authenticated_users_can_read_uploaded_images(): void
    {
        $user = User::factory()->create();
        Storage::disk('uploads')->put('profiles/avatar.png', 'image-content');

        $this->actingAs($user)
            ->get('/uploads/profiles/avatar.png')
            ->assertOk()
            ->assertHeader('content-type', 'image/png');
    }

    public function test_guests_cannot_read_uploaded_images(): void
    {
        $this->get('/uploads/profiles/avatar.png')
            ->assertRedirect(route('login'));
    }

    public function test_upload_reader_rejects_paths_outside_known_image_directories(): void
    {
        $user = User::factory()->create();
        Storage::disk('uploads')->put('private/secret.txt', 'secret');

        $this->actingAs($user)
            ->get('/uploads/private/secret.txt')
            ->assertNotFound();
    }
}
