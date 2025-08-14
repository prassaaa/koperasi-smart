<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    protected $fillable = [
        'key',
        'label',
        'value',
        'suffix',
        'icon',
        'color',
        'description',
        'show_counter_animation',
        'animation_duration',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'show_counter_animation' => 'boolean',
        'animation_duration' => 'integer',
        'sort_order' => 'integer',
        'is_active' => 'boolean',
    ];

    /**
     * Get all active statistics ordered by sort_order
     */
    public static function getActive()
    {
        return static::where('is_active', true)
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * Get statistic value by key
     */
    public static function getValue(string $key, $default = null)
    {
        $statistic = static::where('key', $key)->where('is_active', true)->first();
        return $statistic ? $statistic->value : $default;
    }

    /**
     * Scope for active statistics
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for ordered statistics
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    /**
     * Get formatted value with suffix
     */
    public function getFormattedValueAttribute()
    {
        return $this->value . ($this->suffix ? $this->suffix : '');
    }
}
