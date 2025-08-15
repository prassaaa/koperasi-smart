import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, Image, Eye, EyeOff, ExternalLink, Palette } from 'lucide-react';

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
    created_at: string;
    updated_at: string;
}

interface Props {
    heroSection: HeroSection;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Hero Sections', href: '/dashboard/hero-sections' },
    { title: 'Detail', href: '#' },
];

const backgroundTypeLabels: Record<string, string> = {
    image: 'Image',
    video: 'Video',
    gradient: 'Gradient',
};

export default function HeroSectionsShow({ heroSection }: Props) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this hero section? This action cannot be undone.')) {
            // Delete logic would go here
            // router.delete(route('dashboard.hero-sections.destroy', heroSection.id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Hero Section: ${heroSection.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Hero Section Detail</h1>
                        <p className="text-muted-foreground">
                            View details for: {heroSection.title}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.hero-sections.edit', heroSection.id)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Link>
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
                    {/* Preview Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                            <CardDescription>
                                How this hero section appears on the website
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div 
                                className="relative h-48 rounded-lg overflow-hidden border"
                                style={{
                                    backgroundImage: heroSection.background_image ? `url(${heroSection.background_image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div 
                                    className="absolute inset-0 bg-black"
                                    style={{ opacity: parseFloat(heroSection.overlay_opacity) }}
                                />
                                <div className="relative h-full flex items-center justify-center p-4">
                                    <div className="text-center">
                                        <h3 
                                            className="font-bold text-lg mb-2"
                                            style={{ color: heroSection.text_color }}
                                        >
                                            {heroSection.title}
                                        </h3>
                                        <p 
                                            className="text-sm opacity-90 mb-3"
                                            style={{ color: heroSection.text_color }}
                                        >
                                            {heroSection.subtitle}
                                        </p>
                                        {heroSection.cta_text && (
                                            <button 
                                                className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
                                            >
                                                {heroSection.cta_text}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Main Details */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Hero Section Information</CardTitle>
                            <CardDescription>
                                Detailed information about this hero section
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Title</label>
                                    <div className="p-3 bg-gray-50 rounded border font-semibold">
                                        {heroSection.title}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Background Type</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        <Badge variant="outline">
                                            {backgroundTypeLabels[heroSection.background_type] || heroSection.background_type}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Text Color</label>
                                    <div className="p-3 bg-gray-50 rounded border flex items-center gap-2">
                                        <div 
                                            className="w-4 h-4 rounded border"
                                            style={{ backgroundColor: heroSection.text_color }}
                                        />
                                        {heroSection.text_color}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Overlay Opacity</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {(parseFloat(heroSection.overlay_opacity) * 100).toFixed(0)}%
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Sort Order</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {heroSection.sort_order}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Status</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        <Badge variant={heroSection.is_active ? "default" : "secondary"}>
                                            {heroSection.is_active ? (
                                                <>
                                                    <Eye className="h-3 w-3 mr-1" />
                                                    Active
                                                </>
                                            ) : (
                                                <>
                                                    <EyeOff className="h-3 w-3 mr-1" />
                                                    Inactive
                                                </>
                                            )}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subtitle</label>
                                <div className="p-3 bg-gray-50 rounded border">
                                    {heroSection.subtitle || '-'}
                                </div>
                            </div>

                            {heroSection.background_image && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Background Image</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-mono">{heroSection.background_image}</span>
                                            <a 
                                                href={heroSection.background_image} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </div>
                                        <img 
                                            src={heroSection.background_image} 
                                            alt="Background" 
                                            className="max-w-full h-32 object-cover rounded border"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">CTA Text</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {heroSection.cta_text || '-'}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">CTA Link</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {heroSection.cta_link ? (
                                            <a 
                                                href={heroSection.cta_link}
                                                className="text-blue-600 hover:underline flex items-center gap-1"
                                            >
                                                {heroSection.cta_link}
                                                <ExternalLink className="h-3 w-3" />
                                            </a>
                                        ) : '-'}
                                    </div>
                                </div>
                            </div>

                            {heroSection.badges && heroSection.badges.length > 0 && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Badges</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        <div className="flex flex-wrap gap-2">
                                            {heroSection.badges.map((badge, index) => (
                                                <Badge key={index} variant="outline">
                                                    {badge.text}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="grid gap-6 md:grid-cols-2 pt-4 border-t">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Created At</label>
                                    <div className="text-sm">
                                        {new Date(heroSection.created_at).toLocaleString()}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Updated At</label>
                                    <div className="text-sm">
                                        {new Date(heroSection.updated_at).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
