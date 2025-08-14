import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';

interface Badge {
    icon: string;
    text: string;
    color: string;
}

interface HeroSection {
    id: number;
    title: string;
    subtitle: string;
    background_image: string;
    background_type: string;
    cta_text: string;
    cta_link: string;
    badges: Badge[];
    text_color: string;
    overlay_opacity: string;
    sort_order: number;
    is_active: boolean;
}

interface Props {
    heroSection: HeroSection;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Hero Sections', href: '/dashboard/hero-sections' },
    { title: 'Edit', href: '#' },
];

export default function HeroSectionsEdit({ heroSection }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        title: heroSection.title,
        subtitle: heroSection.subtitle || '',
        background_image: heroSection.background_image || '',
        background_type: heroSection.background_type,
        cta_text: heroSection.cta_text || '',
        cta_link: heroSection.cta_link || '',
        badges: heroSection.badges || [],
        text_color: heroSection.text_color,
        overlay_opacity: heroSection.overlay_opacity,
        sort_order: heroSection.sort_order,
        is_active: heroSection.is_active,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('dashboard.hero-sections.update', heroSection.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this hero section? This action cannot be undone.')) {
            // Delete logic would go here
            // router.delete(route('dashboard.hero-sections.destroy', heroSection.id));
        }
    };

    const addBadge = () => {
        setData('badges', [...data.badges, { icon: 'Shield', text: '', color: 'blue' }]);
    };

    const removeBadge = (index: number) => {
        const newBadges = data.badges.filter((_, i) => i !== index);
        setData('badges', newBadges);
    };

    const updateBadge = (index: number, field: keyof Badge, value: string) => {
        const newBadges = [...data.badges];
        newBadges[index] = { ...newBadges[index], [field]: value };
        setData('badges', newBadges);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Hero Section: ${heroSection.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Hero Section</h1>
                        <p className="text-muted-foreground">
                            Update the hero section: {heroSection.title}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.hero-sections.index')}>
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Hero Sections
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Preview */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                            <CardDescription>
                                How this hero section will appear
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div 
                                className="relative h-48 rounded-lg overflow-hidden border"
                                style={{
                                    backgroundImage: data.background_image ? `url(${data.background_image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div 
                                    className="absolute inset-0 bg-black"
                                    style={{ opacity: parseFloat(data.overlay_opacity) }}
                                />
                                <div className="relative h-full flex items-center justify-center p-4">
                                    <div className="text-center">
                                        <h3 
                                            className="font-bold text-lg mb-2"
                                            style={{ color: data.text_color }}
                                        >
                                            {data.title || 'Hero Title'}
                                        </h3>
                                        <p 
                                            className="text-sm opacity-90 mb-3"
                                            style={{ color: data.text_color }}
                                        >
                                            {data.subtitle || 'Hero subtitle description'}
                                        </p>
                                        {data.cta_text && (
                                            <button 
                                                className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
                                            >
                                                {data.cta_text}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Form */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Hero Section Details</CardTitle>
                            <CardDescription>
                                Update the information below to modify this hero section
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title *</Label>
                                        <Input
                                            id="title"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="e.g., Koperasi Desa Terpercaya"
                                            required
                                        />
                                        {errors.title && (
                                            <p className="text-sm text-red-600">{errors.title}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="background_type">Background Type</Label>
                                        <Select value={data.background_type} onValueChange={(value) => setData('background_type', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select background type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="image">Image</SelectItem>
                                                <SelectItem value="video">Video</SelectItem>
                                                <SelectItem value="gradient">Gradient</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.background_type && (
                                            <p className="text-sm text-red-600">{errors.background_type}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="background_image">Background Image URL</Label>
                                        <Input
                                            id="background_image"
                                            value={data.background_image}
                                            onChange={(e) => setData('background_image', e.target.value)}
                                            placeholder="/assets/images/hero-bg.jpg"
                                        />
                                        {errors.background_image && (
                                            <p className="text-sm text-red-600">{errors.background_image}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="text_color">Text Color</Label>
                                        <Input
                                            id="text_color"
                                            type="color"
                                            value={data.text_color}
                                            onChange={(e) => setData('text_color', e.target.value)}
                                        />
                                        {errors.text_color && (
                                            <p className="text-sm text-red-600">{errors.text_color}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="overlay_opacity">Overlay Opacity</Label>
                                        <Input
                                            id="overlay_opacity"
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.1"
                                            value={data.overlay_opacity}
                                            onChange={(e) => setData('overlay_opacity', e.target.value)}
                                        />
                                        <span className="text-sm text-muted-foreground">{data.overlay_opacity}</span>
                                        {errors.overlay_opacity && (
                                            <p className="text-sm text-red-600">{errors.overlay_opacity}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="sort_order">Sort Order</Label>
                                        <Input
                                            id="sort_order"
                                            type="number"
                                            value={data.sort_order}
                                            onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                            placeholder="0"
                                        />
                                        {errors.sort_order && (
                                            <p className="text-sm text-red-600">{errors.sort_order}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subtitle">Subtitle</Label>
                                    <Textarea
                                        id="subtitle"
                                        value={data.subtitle}
                                        onChange={(e) => setData('subtitle', e.target.value)}
                                        placeholder="Bergabunglah dengan KSP Smart untuk membangun masa depan finansial..."
                                        rows={3}
                                    />
                                    {errors.subtitle && (
                                        <p className="text-sm text-red-600">{errors.subtitle}</p>
                                    )}
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="cta_text">Call-to-Action Text</Label>
                                        <Input
                                            id="cta_text"
                                            value={data.cta_text}
                                            onChange={(e) => setData('cta_text', e.target.value)}
                                            placeholder="e.g., Bergabung Sekarang"
                                        />
                                        {errors.cta_text && (
                                            <p className="text-sm text-red-600">{errors.cta_text}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="cta_link">Call-to-Action Link</Label>
                                        <Input
                                            id="cta_link"
                                            value={data.cta_link}
                                            onChange={(e) => setData('cta_link', e.target.value)}
                                            placeholder="e.g., /keanggotaan"
                                        />
                                        {errors.cta_link && (
                                            <p className="text-sm text-red-600">{errors.cta_link}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="is_active"
                                            checked={data.is_active}
                                            onChange={(e) => setData('is_active', e.target.checked)}
                                            className="rounded border-gray-300"
                                        />
                                        <Label htmlFor="is_active">Active</Label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button type="button" variant="outline" asChild>
                                            <Link href={route('dashboard.hero-sections.index')}>
                                                Cancel
                                            </Link>
                                        </Button>
                                        <Button type="submit" disabled={processing}>
                                            <Save className="h-4 w-4 mr-2" />
                                            {processing ? 'Updating...' : 'Update Hero Section'}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
