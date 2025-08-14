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
    Star,
    Briefcase,
    PiggyBank,
    CreditCard,
    TrendingUp,
    Percent,
    DollarSign
} from 'lucide-react';

interface Service {
    id: number;
    name: string;
    description: string;
    short_description: string;
    icon: string;
    image: string;
    interest_rate: number;
    requirements: string;
    admin_fee: number;
    category: string;
    features: string[];
    color: string;
    sort_order: number;
    is_featured: boolean;
    is_active: boolean;
    formatted_interest_rate: string;
}

interface Props {
    services: Service[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Services', href: '/dashboard/services' },
];

const iconMap = {
    PiggyBank,
    Briefcase,
    CreditCard,
    TrendingUp,
};

const categoryColors = {
    savings: 'bg-green-100 text-green-800',
    loan: 'bg-blue-100 text-blue-800',
    general: 'bg-gray-100 text-gray-800',
};

export default function ServicesIndex({ services }: Props) {
    const getIcon = (iconName: string) => {
        const Icon = iconMap[iconName as keyof typeof iconMap] || Briefcase;
        return Icon;
    };

    const getCategoryColor = (category: string) => {
        return categoryColors[category as keyof typeof categoryColors] || categoryColors.general;
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Services Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Services Management</h1>
                        <p className="text-muted-foreground">
                            Kelola layanan koperasi yang ditawarkan kepada anggota
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={route('dashboard.services.create')}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Service
                        </Link>
                    </Button>
                </div>

                {/* Services Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services
                        .sort((a, b) => a.sort_order - b.sort_order)
                        .map((service) => {
                            const Icon = getIcon(service.icon);
                            return (
                                <Card key={service.id} className={`relative ${service.is_active ? "border-green-200" : "border-gray-200"}`}>
                                    {service.is_featured && (
                                        <div className="absolute -top-2 -right-2">
                                            <Badge className="bg-yellow-500 text-white">
                                                <Star className="h-3 w-3 mr-1" />
                                                Featured
                                            </Badge>
                                        </div>
                                    )}
                                    
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div 
                                                    className="p-2 rounded-lg text-white"
                                                    style={{ backgroundColor: service.color }}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">{service.name}</CardTitle>
                                                    <div className="flex gap-1 mt-1">
                                                        <Badge variant={service.is_active ? "default" : "secondary"} className="text-xs">
                                                            {service.is_active ? "Active" : "Inactive"}
                                                        </Badge>
                                                        <Badge variant="outline" className={`text-xs ${getCategoryColor(service.category)}`}>
                                                            {service.category}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {service.short_description || service.description}
                                        </p>

                                        {/* Key Info */}
                                        <div className="space-y-2">
                                            {service.interest_rate && (
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="flex items-center gap-1">
                                                        <Percent className="h-3 w-3" />
                                                        Interest Rate
                                                    </span>
                                                    <span className="font-medium">{service.interest_rate}%</span>
                                                </div>
                                            )}
                                            {service.admin_fee && (
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="flex items-center gap-1">
                                                        <DollarSign className="h-3 w-3" />
                                                        Admin Fee
                                                    </span>
                                                    <span className="font-medium">{formatCurrency(service.admin_fee)}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Features */}
                                        {service.features && service.features.length > 0 && (
                                            <div>
                                                <p className="text-sm font-medium mb-2">Features:</p>
                                                <div className="space-y-1">
                                                    {service.features.slice(0, 2).map((feature, index) => (
                                                        <p key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                                                            <span className="w-1 h-1 bg-current rounded-full" />
                                                            {feature}
                                                        </p>
                                                    ))}
                                                    {service.features.length > 2 && (
                                                        <p className="text-xs text-muted-foreground">
                                                            +{service.features.length - 2} more features
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Actions */}
                                        <div className="flex items-center justify-between pt-2 border-t">
                                            <div className="flex gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => {
                                                        // Toggle active status
                                                    }}
                                                >
                                                    {service.is_active ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => {
                                                        // Toggle featured status
                                                    }}
                                                >
                                                    <Star className={`h-3 w-3 ${service.is_featured ? 'fill-current text-yellow-500' : ''}`} />
                                                </Button>
                                            </div>
                                            <div className="flex gap-1">
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={route('dashboard.services.edit', service.id)}>
                                                        <Edit className="h-3 w-3" />
                                                    </Link>
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="sm"
                                                    onClick={() => {
                                                        if (confirm('Are you sure you want to delete this service?')) {
                                                            // Delete logic here
                                                        }
                                                    }}
                                                >
                                                    <Trash2 className="h-3 w-3 text-red-500" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                </div>

                {services.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium mb-2">No Services</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                Belum ada layanan yang dibuat. Tambahkan layanan koperasi untuk ditampilkan di website.
                            </p>
                            <Button asChild>
                                <Link href={route('dashboard.services.create')}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create First Service
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
