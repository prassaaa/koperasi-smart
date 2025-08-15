import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, Briefcase, Eye, EyeOff, Star, PiggyBank, CreditCard, TrendingUp, ExternalLink } from 'lucide-react';

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
    created_at: string;
    updated_at: string;
}

interface Props {
    service: Service;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Services', href: '/dashboard/services' },
    { title: 'Detail', href: '#' },
];

const iconOptions = [
    { value: 'PiggyBank', label: 'Piggy Bank', icon: PiggyBank },
    { value: 'Briefcase', label: 'Briefcase', icon: Briefcase },
    { value: 'CreditCard', label: 'Credit Card', icon: CreditCard },
    { value: 'TrendingUp', label: 'Trending Up', icon: TrendingUp },
];

const categoryLabels: Record<string, string> = {
    savings: 'Savings',
    loan: 'Loan',
    general: 'General',
};

export default function ServicesShow({ service }: Props) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
            // Delete logic would go here
            // router.delete(route('dashboard.services.destroy', service.id));
        }
    };

    const IconComponent = iconOptions.find(icon => icon.value === service.icon)?.icon || Briefcase;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Service: ${service.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Service Detail</h1>
                        <p className="text-muted-foreground">
                            View details for: {service.name}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.services.edit', service.id)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.services.index')}>
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Services
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
                                How this service appears on the website
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div
                                        className="p-2 rounded-lg text-white"
                                        style={{ backgroundColor: service.color }}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{service.name}</h3>
                                        <p className="text-xs text-muted-foreground capitalize">{service.category}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    {service.short_description || service.description.substring(0, 100) + '...'}
                                </p>
                                {service.interest_rate && (
                                    <p className="text-sm font-medium">
                                        Interest Rate: {service.interest_rate}%
                                    </p>
                                )}
                                {service.admin_fee && (
                                    <p className="text-sm">
                                        Admin Fee: Rp {Number(service.admin_fee).toLocaleString('id-ID')}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Main Details */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Service Information</CardTitle>
                            <CardDescription>
                                Detailed information about this service
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Service Name</label>
                                    <div className="p-3 bg-gray-50 rounded border font-semibold">
                                        {service.name}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Category</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        <Badge variant="outline">
                                            {categoryLabels[service.category] || service.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Icon</label>
                                    <div className="p-3 bg-gray-50 rounded border flex items-center gap-2">
                                        <IconComponent className="h-4 w-4" />
                                        {iconOptions.find(icon => icon.value === service.icon)?.label || service.icon}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Color</label>
                                    <div className="p-3 bg-gray-50 rounded border flex items-center gap-2">
                                        <div
                                            className="w-4 h-4 rounded border"
                                            style={{ backgroundColor: service.color }}
                                        />
                                        {service.color}
                                    </div>
                                </div>

                                {service.interest_rate && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Interest Rate</label>
                                        <div className="p-3 bg-gray-50 rounded border font-semibold">
                                            {service.interest_rate}% per year
                                        </div>
                                    </div>
                                )}

                                {service.admin_fee && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Admin Fee</label>
                                        <div className="p-3 bg-gray-50 rounded border font-semibold">
                                            Rp {Number(service.admin_fee).toLocaleString('id-ID')}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Sort Order</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {service.sort_order}
                                    </div>
                                </div>
                            </div>

                            {service.short_description && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Short Description</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {service.short_description}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Description</label>
                                <div className="p-3 bg-gray-50 rounded border">
                                    {service.description}
                                </div>
                            </div>

                            {service.requirements && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Requirements</label>
                                    <div className="p-3 bg-gray-50 rounded border whitespace-pre-line">
                                        {service.requirements}
                                    </div>
                                </div>
                            )}

                            {service.features && service.features.length > 0 && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Features</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        <ul className="space-y-1">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {service.image && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Service Image</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-mono">{service.image}</span>
                                            <a
                                                href={service.image}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </div>
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="max-w-full h-32 object-cover rounded border"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-6 pt-4 border-t">
                                <div className="flex items-center gap-2">
                                    <Badge variant={service.is_active ? "default" : "secondary"}>
                                        {service.is_active ? (
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

                                <div className="flex items-center gap-2">
                                    <Badge variant={service.is_featured ? "default" : "secondary"}>
                                        {service.is_featured ? (
                                            <>
                                                <Star className="h-3 w-3 mr-1" />
                                                Featured
                                            </>
                                        ) : 'Not Featured'}
                                    </Badge>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 pt-4 border-t">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Created At</label>
                                    <div className="text-sm">
                                        {new Date(service.created_at).toLocaleString()}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Updated At</label>
                                    <div className="text-sm">
                                        {new Date(service.updated_at).toLocaleString()}
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
