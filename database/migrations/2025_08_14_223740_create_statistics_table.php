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
        Schema::create('statistics', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique(); // members, years, satisfaction, assets, branches, employees
            $table->string('label');
            $table->string('value'); // Store as string to handle different formats (1000, 1K, 95%, etc)
            $table->string('suffix')->nullable(); // %, +, K, M, etc
            $table->string('icon')->nullable(); // Lucide icon name
            $table->string('color')->default('#3B82F6'); // Hex color for display
            $table->text('description')->nullable();
            $table->boolean('show_counter_animation')->default(true);
            $table->integer('animation_duration')->default(2000); // milliseconds
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['is_active', 'sort_order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistics');
    }
};
