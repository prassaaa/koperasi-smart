import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, router } from '@inertiajs/react';
import {
    Save,
    BarChart3,
    Plus,
    Edit,
    Trash2,
    Eye,
    EyeOff,
    Users,
    Calendar,
    Star,
    Banknote,
    Building2,
    UserCheck
} from 'lucide-react';

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
    formatted_value: string;
}

interface Props {
    statistics: Statistic[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Statistics', href: '/dashboard/statistics' },
];

const iconMap = {
    Users,
    Calendar,
    Star,
    Banknote,
    Building2,
    UserCheck,
    BarChart3,
};

export default function StatisticsIndex({ statistics }: Props) {
    const { data, setData, processing } = useForm<Record<string, string>>({});

    // Initialize form data from statistics
    React.useEffect(() => {
        const initialData: Record<string, string> = {};
        statistics.forEach(stat => {
            initialData[`stat_${stat.id}`] = stat.value;
        });
        setData(initialData);
    }, [statistics, setData]);

    const handleQuickUpdate = () => {
        const statisticsArray = statistics.map(stat => ({
            id: stat.id,
            value: data[`stat_${stat.id}`] || stat.value,
        }));

        router.post(route('dashboard.statistics.batch'), {
            statistics: statisticsArray,
        }, {
            preserveScroll: true,
        });
    };

    const getIcon = (iconName: string) => {
        const Icon = iconMap[iconName as keyof typeof iconMap] || BarChart3;
        return Icon;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Statistics Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Statistics Management</h1>
                        <p className="text-muted-foreground">
                            Kelola angka-angka statistik yang ditampilkan di website
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={handleQuickUpdate} disabled={processing} variant="outline">
                            <Save className="h-4 w-4 mr-2" />
                            {processing ? 'Menyimpan...' : 'Update Values'}
                        </Button>
                        <Button asChild>
                            <Link href={route('dashboard.statistics.create')}>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Statistic
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Quick Update Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Value Update</CardTitle>
                        <CardDescription>
                            Update nilai statistik dengan cepat tanpa mengubah pengaturan lainnya
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {statistics
                                .filter(stat => stat.is_active)
                                .sort((a, b) => a.sort_order - b.sort_order)
                                .map((stat) => {
                                    const Icon = getIcon(stat.icon);
                                    return (
                                        <div key={stat.id} className="space-y-2">
                                            <Label htmlFor={`stat_${stat.id}`} className="flex items-center gap-2">
                                                <Icon className="h-4 w-4" style={{ color: stat.color }} />
                                                {stat.label}
                                            </Label>
                                            <div className="flex gap-2">
                                                <Input
                                                    id={`stat_${stat.id}`}
                                                    value={data[`stat_${stat.id}`] || stat.value}
                                                    onChange={(e) => setData(`stat_${stat.id}`, e.target.value)}
                                                    placeholder={stat.value}
                                                    className="flex-1"
                                                />
                                                {stat.suffix && (
                                                    <div className="flex items-center px-3 border rounded-md bg-muted text-sm">
                                                        {stat.suffix}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </CardContent>
                </Card>

                {/* Statistics List */}
                <Card>
                    <CardHeader>
                        <CardTitle>All Statistics</CardTitle>
                        <CardDescription>
                            Kelola semua statistik yang tersedia
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {statistics
                                .sort((a, b) => a.sort_order - b.sort_order)
                                .map((stat) => {
                                    const Icon = getIcon(stat.icon);
                                    return (
                                        <div key={stat.id} className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="p-2 rounded-lg text-white"
                                                    style={{ backgroundColor: stat.color }}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-medium">{stat.label}</h3>
                                                        <Badge variant={stat.is_active ? "default" : "secondary"}>
                                                            {stat.is_active ? "Active" : "Inactive"}
                                                        </Badge>
                                                        {stat.show_counter_animation && (
                                                            <Badge variant="outline">Animated</Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Current: <span className="font-mono">{stat.value}{stat.suffix}</span>
                                                        {stat.description && ` • ${stat.description}`}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => {
                                                        // Toggle active status
                                                        // This would need a separate endpoint
                                                    }}
                                                >
                                                    {stat.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </Button>
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={route('dashboard.statistics.edit', stat.id)}>
                                                        <Edit className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => {
                                                        if (confirm('Are you sure you want to delete this statistic?')) {
                                                            // Delete logic here
                                                        }
                                                    }}
                                                >
                                                    <Trash2 className="h-4 w-4 text-red-500" />
                                                </Button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
