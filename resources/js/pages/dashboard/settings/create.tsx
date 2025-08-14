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
import { ArrowLeft, Save } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Create', href: '/dashboard/settings/create' },
];

interface FormData {
    key: string;
    value: string;
    type: string;
    group: string;
    label: string;
    description: string;
    sort_order: number;
    is_active: boolean;
}

export default function SettingsCreate() {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        key: '',
        value: '',
        type: 'text',
        group: 'general',
        label: '',
        description: '',
        sort_order: 0,
        is_active: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('dashboard.settings.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Setting" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Create New Setting</h1>
                        <p className="text-muted-foreground">
                            Add a new configuration setting for the website
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={route('dashboard.settings.index')}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Settings
                        </Link>
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Setting Details</CardTitle>
                        <CardDescription>
                            Fill in the information below to create a new setting
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
                                        placeholder="e.g., site_name"
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
                                        placeholder="e.g., Site Name"
                                        required
                                    />
                                    {errors.label && (
                                        <p className="text-sm text-red-600">{errors.label}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="type">Type</Label>
                                    <Select value={data.type} onValueChange={(value) => setData('type', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="text">Text</SelectItem>
                                            <SelectItem value="textarea">Textarea</SelectItem>
                                            <SelectItem value="email">Email</SelectItem>
                                            <SelectItem value="url">URL</SelectItem>
                                            <SelectItem value="number">Number</SelectItem>
                                            <SelectItem value="boolean">Boolean</SelectItem>
                                            <SelectItem value="image">Image</SelectItem>
                                            <SelectItem value="json">JSON</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.type && (
                                        <p className="text-sm text-red-600">{errors.type}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="group">Group</Label>
                                    <Select value={data.group} onValueChange={(value) => setData('group', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select group" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">General</SelectItem>
                                            <SelectItem value="contact">Contact</SelectItem>
                                            <SelectItem value="social">Social</SelectItem>
                                            <SelectItem value="footer">Footer</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.group && (
                                        <p className="text-sm text-red-600">{errors.group}</p>
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
                                <Label htmlFor="value">Value</Label>
                                {data.type === 'textarea' ? (
                                    <Textarea
                                        id="value"
                                        value={data.value}
                                        onChange={(e) => setData('value', e.target.value)}
                                        placeholder="Enter setting value"
                                        rows={4}
                                    />
                                ) : (
                                    <Input
                                        id="value"
                                        type={data.type === 'number' ? 'number' : data.type === 'email' ? 'email' : data.type === 'url' ? 'url' : 'text'}
                                        value={data.value}
                                        onChange={(e) => setData('value', e.target.value)}
                                        placeholder="Enter setting value"
                                    />
                                )}
                                {errors.value && (
                                    <p className="text-sm text-red-600">{errors.value}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Describe what this setting is for"
                                    rows={3}
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-600">{errors.description}</p>
                                )}
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
                                        <Link href={route('dashboard.settings.index')}>
                                            Cancel
                                        </Link>
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        <Save className="h-4 w-4 mr-2" />
                                        {processing ? 'Creating...' : 'Create Setting'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
