import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, router } from '@inertiajs/react';
import { Save, Settings, Phone, Globe, Copyright } from 'lucide-react';

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
}

interface Props {
    settings: Record<string, Setting[]>;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
];

const groupIcons = {
    general: Settings,
    contact: Phone,
    social: Globe,
    footer: Copyright,
};

export default function SettingsIndex({ settings }: Props) {
    const { data, setData, processing, errors } = useForm<Record<string, string>>({});

    // Initialize form data from settings
    React.useEffect(() => {
        const initialData: Record<string, string> = {};
        Object.values(settings).flat().forEach(setting => {
            initialData[setting.key] = setting.value || '';
        });
        setData(initialData);
    }, [settings, setData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const settingsArray = Object.entries(data).map(([key, value]) => ({
            key,
            value,
        }));

        router.post(route('dashboard.settings.batch'), {
            settings: settingsArray,
        }, {
            preserveScroll: true,
        });
    };

    const renderField = (setting: Setting) => {
        const value = data[setting.key] || '';

        switch (setting.type) {
            case 'textarea':
                return (
                    <Textarea
                        id={setting.key}
                        value={value}
                        onChange={(e) => setData(setting.key, e.target.value)}
                        placeholder={setting.description}
                        rows={3}
                    />
                );
            case 'email':
                return (
                    <Input
                        id={setting.key}
                        type="email"
                        value={value}
                        onChange={(e) => setData(setting.key, e.target.value)}
                        placeholder={setting.description}
                    />
                );
            case 'url':
                return (
                    <Input
                        id={setting.key}
                        type="url"
                        value={value}
                        onChange={(e) => setData(setting.key, e.target.value)}
                        placeholder={setting.description}
                    />
                );
            default:
                return (
                    <Input
                        id={setting.key}
                        type="text"
                        value={value}
                        onChange={(e) => setData(setting.key, e.target.value)}
                        placeholder={setting.description}
                    />
                );
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Site Settings" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Site Settings</h1>
                        <p className="text-muted-foreground">
                            Kelola pengaturan dasar website koperasi
                        </p>
                    </div>
                    <Button onClick={handleSubmit} disabled={processing}>
                        <Save className="h-4 w-4 mr-2" />
                        {processing ? 'Menyimpan...' : 'Simpan Semua'}
                    </Button>
                </div>

                <form onSubmit={handleSubmit}>
                    <Tabs defaultValue="general" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-4">
                            {Object.keys(settings).map((group) => {
                                const Icon = groupIcons[group as keyof typeof groupIcons] || Settings;
                                return (
                                    <TabsTrigger key={group} value={group} className="flex items-center gap-2">
                                        <Icon className="h-4 w-4" />
                                        {group.charAt(0).toUpperCase() + group.slice(1)}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>

                        {Object.entries(settings).map(([group, groupSettings]) => (
                            <TabsContent key={group} value={group}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {React.createElement(groupIcons[group as keyof typeof groupIcons] || Settings, {
                                                className: "h-5 w-5"
                                            })}
                                            {group.charAt(0).toUpperCase() + group.slice(1)} Settings
                                        </CardTitle>
                                        <CardDescription>
                                            Pengaturan untuk kategori {group}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {groupSettings
                                            .sort((a, b) => a.sort_order - b.sort_order)
                                            .map((setting) => (
                                                <div key={setting.id} className="space-y-2">
                                                    <Label htmlFor={setting.key}>
                                                        {setting.label}
                                                    </Label>
                                                    {renderField(setting)}
                                                    {setting.description && (
                                                        <p className="text-sm text-muted-foreground">
                                                            {setting.description}
                                                        </p>
                                                    )}
                                                    {errors[setting.key] && (
                                                        <p className="text-sm text-red-600">
                                                            {errors[setting.key]}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                </form>
            </div>
        </AppLayout>
    );
}
