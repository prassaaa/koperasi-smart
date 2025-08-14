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
import { ArrowLeft, Save, Trash2, Users, Calendar, Star, Banknote, Building2, UserCheck } from 'lucide-react';

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
}

interface Props {
    statistic: Statistic;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Statistics', href: '/dashboard/statistics' },
    { title: 'Edit', href: '#' },
];

const iconOptions = [
    { value: 'Users', label: 'Users', icon: Users },
    { value: 'Calendar', label: 'Calendar', icon: Calendar },
    { value: 'Star', label: 'Star', icon: Star },
    { value: 'Banknote', label: 'Banknote', icon: Banknote },
    { value: 'Building2', label: 'Building', icon: Building2 },
    { value: 'UserCheck', label: 'User Check', icon: UserCheck },
];

const colorOptions = [
    { value: '#3B82F6', label: 'Blue', color: '#3B82F6' },
    { value: '#10B981', label: 'Green', color: '#10B981' },
    { value: '#F59E0B', label: 'Yellow', color: '#F59E0B' },
    { value: '#8B5CF6', label: 'Purple', color: '#8B5CF6' },
    { value: '#EF4444', label: 'Red', color: '#EF4444' },
    { value: '#06B6D4', label: 'Cyan', color: '#06B6D4' },
];

export default function StatisticsEdit({ statistic }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        key: statistic.key,
        label: statistic.label,
        value: statistic.value,
        suffix: statistic.suffix || '',
        icon: statistic.icon,
        color: statistic.color,
        description: statistic.description || '',
        show_counter_animation: statistic.show_counter_animation,
        animation_duration: statistic.animation_duration,
        sort_order: statistic.sort_order,
        is_active: statistic.is_active,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('dashboard.statistics.update', statistic.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this statistic? This action cannot be undone.')) {
            // Delete logic would go here
            // router.delete(route('dashboard.statistics.destroy', statistic.id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Statistic: ${statistic.label}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Statistic</h1>
                        <p className="text-muted-foreground">
                            Update the statistic: {statistic.label}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
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
                                How this statistic will appear on the website
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 p-4 border rounded-lg">
                                <div 
                                    className="p-3 rounded-lg text-white"
                                    style={{ backgroundColor: data.color }}
                                >
                                    {iconOptions.find(icon => icon.value === data.icon)?.icon && 
                                        React.createElement(iconOptions.find(icon => icon.value === data.icon)!.icon, { className: "h-6 w-6" })
                                    }
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">
                                        {data.value}{data.suffix}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {data.label}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Form */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Statistic Details</CardTitle>
                            <CardDescription>
                                Update the information below to modify this statistic
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="key">Key *</Label>
                                        <Input
                                            id="key"
                                            value={data.key}
                                            onChange={(e) => setData('key', e.target.value)}
                                            placeholder="e.g., total_members"
                                            required
                                        />
                                        {errors.key && (
                                            <p className="text-sm text-red-600">{errors.key}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="label">Label *</Label>
                                        <Input
                                            id="label"
                                            value={data.label}
                                            onChange={(e) => setData('label', e.target.value)}
                                            placeholder="e.g., Total Members"
                                            required
                                        />
                                        {errors.label && (
                                            <p className="text-sm text-red-600">{errors.label}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="value">Value *</Label>
                                        <Input
                                            id="value"
                                            value={data.value}
                                            onChange={(e) => setData('value', e.target.value)}
                                            placeholder="e.g., 1250"
                                            required
                                        />
                                        {errors.value && (
                                            <p className="text-sm text-red-600">{errors.value}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="suffix">Suffix</Label>
                                        <Input
                                            id="suffix"
                                            value={data.suffix}
                                            onChange={(e) => setData('suffix', e.target.value)}
                                            placeholder="e.g., +, %, M"
                                        />
                                        {errors.suffix && (
                                            <p className="text-sm text-red-600">{errors.suffix}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="icon">Icon</Label>
                                        <Select value={data.icon} onValueChange={(value) => setData('icon', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select icon" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {iconOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        <div className="flex items-center gap-2">
                                                            <option.icon className="h-4 w-4" />
                                                            {option.label}
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.icon && (
                                            <p className="text-sm text-red-600">{errors.icon}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="color">Color</Label>
                                        <Select value={data.color} onValueChange={(value) => setData('color', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select color" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {colorOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        <div className="flex items-center gap-2">
                                                            <div 
                                                                className="w-4 h-4 rounded border"
                                                                style={{ backgroundColor: option.color }}
                                                            />
                                                            {option.label}
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.color && (
                                            <p className="text-sm text-red-600">{errors.color}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="animation_duration">Animation Duration (ms)</Label>
                                        <Input
                                            id="animation_duration"
                                            type="number"
                                            value={data.animation_duration}
                                            onChange={(e) => setData('animation_duration', parseInt(e.target.value) || 2000)}
                                            placeholder="2000"
                                            min="500"
                                            max="5000"
                                        />
                                        {errors.animation_duration && (
                                            <p className="text-sm text-red-600">{errors.animation_duration}</p>
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
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Describe what this statistic represents"
                                        rows={3}
                                    />
                                    {errors.description && (
                                        <p className="text-sm text-red-600">{errors.description}</p>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t">
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="show_counter_animation"
                                                checked={data.show_counter_animation}
                                                onChange={(e) => setData('show_counter_animation', e.target.checked)}
                                                className="rounded border-gray-300"
                                            />
                                            <Label htmlFor="show_counter_animation">Show Counter Animation</Label>
                                        </div>
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
                                    </div>

                                    <div className="flex gap-2">
                                        <Button type="button" variant="outline" asChild>
                                            <Link href={route('dashboard.statistics.index')}>
                                                Cancel
                                            </Link>
                                        </Button>
                                        <Button type="submit" disabled={processing}>
                                            <Save className="h-4 w-4 mr-2" />
                                            {processing ? 'Updating...' : 'Update Statistic'}
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
