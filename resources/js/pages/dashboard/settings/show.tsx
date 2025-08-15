import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2, Settings, Eye, EyeOff } from 'lucide-react';

interface Setting {
    id: number;
    key: string;
    value: string;
    type: string;
    group: string;
    label: string;
    description: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

interface Props {
    setting: Setting;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Detail', href: '#' },
];

const typeLabels: Record<string, string> = {
    text: 'Text',
    textarea: 'Textarea',
    email: 'Email',
    url: 'URL',
    number: 'Number',
    boolean: 'Boolean',
    image: 'Image',
    json: 'JSON',
};

const groupLabels: Record<string, string> = {
    general: 'General',
    contact: 'Contact',
    social: 'Social Media',
    footer: 'Footer',
};

export default function SettingsShow({ setting }: Props) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this setting? This action cannot be undone.')) {
            // Delete logic would go here
            // router.delete(route('dashboard.settings.destroy', setting.id));
        }
    };

    const formatValue = (value: string, type: string) => {
        if (!value) return '-';
        
        switch (type) {
            case 'boolean':
                return value === '1' || value === 'true' ? 'Yes' : 'No';
            case 'json':
                try {
                    return JSON.stringify(JSON.parse(value), null, 2);
                } catch {
                    return value;
                }
            case 'url':
                return (
                    <a 
                        href={value} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        {value}
                    </a>
                );
            case 'email':
                return (
                    <a 
                        href={`mailto:${value}`}
                        className="text-blue-600 hover:underline"
                    >
                        {value}
                    </a>
                );
            case 'image':
                return (
                    <div className="space-y-2">
                        <div className="text-sm text-gray-600">{value}</div>
                        {value && (
                            <img 
                                src={value} 
                                alt="Setting image" 
                                className="max-w-xs h-auto rounded border"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        )}
                    </div>
                );
            default:
                return value;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Setting: ${setting.label || setting.key}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Setting Detail</h1>
                        <p className="text-muted-foreground">
                            View details for: {setting.label || setting.key}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.settings.edit', setting.id)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={route('dashboard.settings.index')}>
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Settings
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Status Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Active</span>
                                <Badge variant={setting.is_active ? "default" : "secondary"}>
                                    {setting.is_active ? (
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
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Type</span>
                                <Badge variant="outline">
                                    {typeLabels[setting.type] || setting.type}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Group</span>
                                <Badge variant="outline">
                                    {groupLabels[setting.group] || setting.group}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Sort Order</span>
                                <span className="text-sm">{setting.sort_order}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Main Details */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Setting Information</CardTitle>
                            <CardDescription>
                                Detailed information about this setting
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Key</label>
                                    <div className="p-3 bg-gray-50 rounded border font-mono text-sm">
                                        {setting.key}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Label</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {setting.label || '-'}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Value</label>
                                <div className="p-3 bg-gray-50 rounded border">
                                    {setting.type === 'json' ? (
                                        <pre className="text-sm whitespace-pre-wrap font-mono">
                                            {formatValue(setting.value, setting.type)}
                                        </pre>
                                    ) : (
                                        <div className="text-sm">
                                            {formatValue(setting.value, setting.type)}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {setting.description && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Description</label>
                                    <div className="p-3 bg-gray-50 rounded border">
                                        {setting.description}
                                    </div>
                                </div>
                            )}

                            <div className="grid gap-6 md:grid-cols-2 pt-4 border-t">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Created At</label>
                                    <div className="text-sm">
                                        {new Date(setting.created_at).toLocaleString()}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Updated At</label>
                                    <div className="text-sm">
                                        {new Date(setting.updated_at).toLocaleString()}
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
