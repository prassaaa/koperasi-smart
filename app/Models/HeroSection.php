<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'background_image',
        'background_type',
        'cta_text',
        'cta_link',
        'badges',
        'text_color',
        'overlay_opacity',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'badges' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Get the active hero section
     */
    public static function getActive()
    {
        return static::where('is_active', true)
            ->orderBy('sort_order')
            ->first();
    }

    /**
     * Scope for active hero sections
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for ordered hero sections
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }
}
