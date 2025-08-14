<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hero_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('subtitle')->nullable();
            $table->string('background_image')->nullable();
            $table->string('background_type')->default('image'); // image, video, gradient
            $table->string('cta_text')->nullable();
            $table->string('cta_link')->nullable();
            $table->json('badges')->nullable(); // Array of achievement badges
            $table->string('text_color')->default('#ffffff');
            $table->string('overlay_opacity')->default('0.5');
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();

            $table->index(['is_active', 'sort_order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_sections');
    }
};
