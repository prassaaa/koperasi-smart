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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->text('short_description')->nullable();
            $table->string('icon')->nullable(); // Lucide icon name or image path
            $table->string('image')->nullable(); // Service image
            $table->decimal('interest_rate', 5, 2)->nullable(); // e.g., 12.50 for 12.5%
            $table->text('requirements')->nullable(); // JSON or text
            $table->decimal('admin_fee', 10, 2)->nullable();
            $table->string('category')->default('general'); // savings, loan, general
            $table->json('features')->nullable(); // Array of service features
            $table->string('color')->default('#3B82F6'); // Hex color for UI
            $table->integer('sort_order')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['category', 'is_active', 'sort_order']);
            $table->index('is_featured');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
