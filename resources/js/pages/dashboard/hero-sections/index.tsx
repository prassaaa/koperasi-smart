import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { 
    Plus, 
    Edit, 
    Trash2, 
    Eye, 
    EyeOff,
    Image,
    ExternalLink,
    Palette,
    Shield,
    Users,
    Award,
    TrendingUp
} from 'lucide-react';

interface HeroSection {
    id: number;
    title: string;
    subtitle: string;
    background_image: string;
    background_type: string;
    cta_text: string;
    cta_link: string;
    badges: Array<{
        icon: string;
        text: string;
        color: string;
    }>;
    text_color: string;
    overlay_opacity: string;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    heroSections: HeroSection[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Hero Sections', href: '/dashboard/hero-sections' },
];

const badgeIconMap = {
    Shield,
    Users,
    Award,
    TrendingUp,
};

export default function HeroSectionsIndex({ heroSections }: Props) {
    const getBadgeIcon = (iconName: string) => {
        const Icon = badgeIconMap[iconName as keyof typeof badgeIconMap] || Shield;
        return Icon;
    };

    const getBadgeColor = (color: string) => {
        const colorMap = {
            green: 'bg-green-100 text-green-800',
            blue: 'bg-blue-100 text-blue-800',
            yellow: 'bg-yellow-100 text-yellow-800',
            purple: 'bg-purple-100 text-purple-800',
            red: 'bg-red-100 text-red-800',
        };
        return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Hero Sections Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Hero Sections</h1>
                        <p className="text-muted-foreground">
                            Kelola konten hero section yang ditampilkan di halaman utama
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={route('dashboard.hero-sections.create')}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Hero Section
                        </Link>
                    </Button>
                </div>

                {/* Hero Sections List */}
                <div className="space-y-4">
                    {heroSections
                        .sort((a, b) => a.sort_order - b.sort_order)
                        .map((hero) => (
                            <Card key={hero.id} className={hero.is_active ? "border-green-200" : "border-gray-200"}>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <CardTitle className="text-lg">{hero.title}</CardTitle>
                                                <Badge variant={hero.is_active ? "default" : "secondary"}>
                                                    {hero.is_active ? "Active" : "Inactive"}
                                                </Badge>
                                                <Badge variant="outline" className="capitalize">
                                                    {hero.background_type}
                                                </Badge>
                                            </div>
                                            <CardDescription className="max-w-2xl">
                                                {hero.subtitle}
                                            </CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => {
                                                    // Toggle active status
                                                }}
                                            >
                                                {hero.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </Button>
                                            <Button variant="ghost" size="sm" asChild>
                                                <Link href={route('dashboard.hero-sections.edit', hero.id)}>
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button 
                                                variant="ghost" 
                                                size="sm"
                                                onClick={() => {
                                                    if (confirm('Are you sure you want to delete this hero section?')) {
                                                        // Delete logic here
                                                    }
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4 text-red-500" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {/* Preview */}
                                        <div className="space-y-3">
                                            <h4 className="font-medium flex items-center gap-2">
                                                <Image className="h-4 w-4" />
                                                Preview
                                            </h4>
                                            <div 
                                                className="relative h-32 rounded-lg overflow-hidden border"
                                                style={{
                                                    backgroundImage: hero.background_image ? `url(${hero.background_image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            >
                                                <div 
                                                    className="absolute inset-0 bg-black"
                                                    style={{ opacity: parseFloat(hero.overlay_opacity) }}
                                                />
                                                <div className="relative h-full flex items-center justify-center p-4">
                                                    <div className="text-center">
                                                        <h3 
                                                            className="font-bold text-sm mb-1"
                                                            style={{ color: hero.text_color }}
                                                        >
                                                            {hero.title}
                                                        </h3>
                                                        <p 
                                                            className="text-xs opacity-90 line-clamp-2"
                                                            style={{ color: hero.text_color }}
                                                        >
                                                            {hero.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-3">
                                            <h4 className="font-medium">Details</h4>
                                            <div className="space-y-2 text-sm">
                                                {hero.cta_text && (
                                                    <div className="flex items-center gap-2">
                                                        <ExternalLink className="h-3 w-3" />
                                                        <span>CTA: {hero.cta_text}</span>
                                                        {hero.cta_link && (
                                                            <span className="text-muted-foreground">→ {hero.cta_link}</span>
                                                        )}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2">
                                                    <Palette className="h-3 w-3" />
                                                    <span>Text Color: {hero.text_color}</span>
                                                    <div 
                                                        className="w-4 h-4 rounded border"
                                                        style={{ backgroundColor: hero.text_color }}
                                                    />
                                                </div>
                                                {hero.badges && hero.badges.length > 0 && (
                                                    <div>
                                                        <p className="font-medium mb-2">Badges:</p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {hero.badges.map((badge, index) => {
                                                                const Icon = getBadgeIcon(badge.icon);
                                                                return (
                                                                    <div 
                                                                        key={index}
                                                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getBadgeColor(badge.color)}`}
                                                                    >
                                                                        <Icon className="h-3 w-3" />
                                                                        {badge.text}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                </div>

                {heroSections.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <Image className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium mb-2">No Hero Sections</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                Belum ada hero section yang dibuat. Buat hero section pertama untuk menampilkan konten menarik di halaman utama.
                            </p>
                            <Button asChild>
                                <Link href={route('dashboard.hero-sections.create')}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create First Hero Section
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
