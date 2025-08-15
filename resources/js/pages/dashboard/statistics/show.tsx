import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, BarChart3, Eye, EyeOff, Users, Calendar, Star, Banknote, Building2, UserCheck } from 'lucide-react';

interface Statistic {
    id: number;
    key: string;
    label: string;
    value: string;
    suffix: string;
    icon: string;
    color: string;
    description: string;
    show_counter_animation: boolean;
    animation_duration: number;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

interface Props {
    statistic: Statistic;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Statistics', href: '/dashboard/statistics' },
    { title: 'Detail', href: '#' },
];

const iconOptions = [
    { value: 'Users', label: 'Users', icon: Users },
    { value: 'Calendar', label: 'Calendar', icon: Calendar },
    { value: 'Star', label: 'Star', icon: Star },
    { value: 'Banknote', label: 'Banknote', icon: Banknote },
    { value: 'Building2', label: 'Building', icon: Building2 },
    { value: 'UserCheck', label: 'User Check', icon: UserCheck },
];

export default function StatisticsShow({ statistic }: Props) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this statistic? This action cannot be undone.')) {
            // Delete logic would go here
            // router.delete(route('dashboard.statistics.destroy', statistic.id));
        }
    };

    const IconComponent = iconOptions.find(icon => icon.value === statistic.icon)?.icon || BarChart3;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Statistic: ${statistic.label}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Statistic Detail</h1>
                        <p className="text-muted-foreground">
                            View details for: {statistic.label}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.statistics.edit', statistic.id)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.statistics.index')}>
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Statistics
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
                                How this statistic appears on the website
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 p-4 border rounded-lg">
                                <div
                                    className="p-3 rounded-lg text-white"
                                    style={{ backgroundColor: statistic.color }}
                                >
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">
                                        {statistic.value}{statistic.suffix}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {statistic.label}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Main Details */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Statistic Information</CardTitle>
                            <CardDescription>
                                Detailed information about this statistic
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Key</label>
                                    <div className="p-3 bg-gray-50 rounded border font-mono text-sm">
                                        {statistic.key}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Label</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {statistic.label}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Value</label>
                                    <div className="p-3 bg-gray-50 rounded border font-bold text-lg">
                                        {statistic.value}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Suffix</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {statistic.suffix || '-'}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Icon</label>
                                    <div className="p-3 bg-gray-50 rounded border flex items-center gap-2">
                                        <IconComponent className="h-4 w-4" />
                                        {iconOptions.find(icon => icon.value === statistic.icon)?.label || statistic.icon}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Color</label>
                                    <div className="p-3 bg-gray-50 rounded border flex items-center gap-2">
                                        <div
                                            className="w-4 h-4 rounded border"
                                            style={{ backgroundColor: statistic.color }}
                                        />
                                        {statistic.color}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Animation Duration</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {statistic.animation_duration}ms
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Sort Order</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {statistic.sort_order}
                                    </div>
                                </div>
                            </div>

                            {statistic.description && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Description</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {statistic.description}
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-6 pt-4 border-t">
                                <div className="flex items-center gap-2">
                                    <Badge variant={statistic.is_active ? "default" : "secondary"}>
                                        {statistic.is_active ? (
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
                                    <Badge variant={statistic.show_counter_animation ? "default" : "secondary"}>
                                        {statistic.show_counter_animation ? 'Animation Enabled' : 'Animation Disabled'}
                                    </Badge>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 pt-4 border-t">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Created At</label>
                                    <div className="text-sm">
                                        {new Date(statistic.created_at).toLocaleString()}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Updated At</label>
                                    <div className="text-sm">
                                        {new Date(statistic.updated_at).toLocaleString()}
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
