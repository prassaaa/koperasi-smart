<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'name',
        'description',
        'short_description',
        'icon',
        'image',
        'interest_rate',
        'requirements',
        'admin_fee',
        'category',
        'features',
        'color',
        'sort_order',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'interest_rate' => 'decimal:2',
        'admin_fee' => 'decimal:2',
        'features' => 'array',
        'sort_order' => 'integer',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Get all active services ordered by sort_order
     */
    public static function getActive()
    {
        return static::where('is_active', true)
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * Get featured services
     */
    public static function getFeatured()
    {
        return static::where('is_active', true)
            ->where('is_featured', true)
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * Get services by category
     */
    public static function getByCategory(string $category)
    {
        return static::where('is_active', true)
            ->where('category', $category)
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * Scope for active services
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for featured services
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope for ordered services
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    /**
     * Get formatted interest rate
     */
    public function getFormattedInterestRateAttribute()
    {
        return $this->interest_rate ? $this->interest_rate . '%' : null;
    }
}
