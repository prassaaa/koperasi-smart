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
import { ArrowLeft, Save, Plus, Trash2, PiggyBank, Briefcase, CreditCard, TrendingUp } from 'lucide-react';

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
}

interface Props {
    service: Service;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Services', href: '/dashboard/services' },
    { title: 'Edit', href: '#' },
];

const iconOptions = [
    { value: 'PiggyBank', label: 'Piggy Bank', icon: PiggyBank },
    { value: 'Briefcase', label: 'Briefcase', icon: Briefcase },
    { value: 'CreditCard', label: 'Credit Card', icon: CreditCard },
    { value: 'TrendingUp', label: 'Trending Up', icon: TrendingUp },
];

const colorOptions = [
    { value: '#3B82F6', label: 'Blue', color: '#3B82F6' },
    { value: '#10B981', label: 'Green', color: '#10B981' },
    { value: '#F59E0B', label: 'Yellow', color: '#F59E0B' },
    { value: '#8B5CF6', label: 'Purple', color: '#8B5CF6' },
    { value: '#EF4444', label: 'Red', color: '#EF4444' },
    { value: '#06B6D4', label: 'Cyan', color: '#06B6D4' },
];

export default function ServicesEdit({ service }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: service.name,
        description: service.description,
        short_description: service.short_description || '',
        icon: service.icon,
        image: service.image || '',
        interest_rate: service.interest_rate || '',
        requirements: service.requirements || '',
        admin_fee: service.admin_fee || '',
        category: service.category,
        features: service.features || [],
        color: service.color,
        sort_order: service.sort_order,
        is_featured: service.is_featured,
        is_active: service.is_active,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('dashboard.services.update', service.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
            // Delete logic would go here
            // router.delete(route('dashboard.services.destroy', service.id));
        }
    };

    const addFeature = () => {
        setData('features', [...data.features, '']);
    };

    const removeFeature = (index: number) => {
        const newFeatures = data.features.filter((_, i) => i !== index);
        setData('features', newFeatures);
    };

    const updateFeature = (index: number, value: string) => {
        const newFeatures = [...data.features];
        newFeatures[index] = value;
        setData('features', newFeatures);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Service: ${service.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Service</h1>
                        <p className="text-muted-foreground">
                            Update the service: {service.name}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
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
                    {/* Preview */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                            <CardDescription>
                                How this service will appear
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div 
                                        className="p-2 rounded-lg text-white"
                                        style={{ backgroundColor: data.color }}
                                    >
                                        {iconOptions.find(icon => icon.value === data.icon)?.icon && 
                                            React.createElement(iconOptions.find(icon => icon.value === data.icon)!.icon, { className: "h-5 w-5" })
                                        }
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{data.name || 'Service Name'}</h3>
                                        <p className="text-xs text-muted-foreground capitalize">{data.category}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    {data.short_description || data.description || 'Service description...'}
                                </p>
                                {data.interest_rate && (
                                    <p className="text-sm font-medium">
                                        Interest Rate: {data.interest_rate}%
                                    </p>
                                )}
                                {data.admin_fee && (
                                    <p className="text-sm">
                                        Admin Fee: Rp {Number(data.admin_fee).toLocaleString('id-ID')}
                                    </p>
                                )}
                                {data.features.length > 0 && (
                                    <div className="mt-3">
                                        <p className="text-xs font-medium mb-1">Features:</p>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                            {data.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="flex items-center gap-1">
                                                    <span className="w-1 h-1 bg-current rounded-full" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Form */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Service Details</CardTitle>
                            <CardDescription>
                                Update the information below to modify this service
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Service Name *</Label>
                                        <Input
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="e.g., Simpanan Sukarela"
                                            required
                                        />
                                        {errors.name && (
                                            <p className="text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category</Label>
                                        <Select value={data.category} onValueChange={(value) => setData('category', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="savings">Savings</SelectItem>
                                                <SelectItem value="loan">Loan</SelectItem>
                                                <SelectItem value="general">General</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.category && (
                                            <p className="text-sm text-red-600">{errors.category}</p>
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
                                        <Label htmlFor="interest_rate">Interest Rate (%)</Label>
                                        <Input
                                            id="interest_rate"
                                            type="number"
                                            step="0.01"
                                            value={data.interest_rate}
                                            onChange={(e) => setData('interest_rate', parseFloat(e.target.value) || '')}
                                            placeholder="e.g., 12.50"
                                        />
                                        {errors.interest_rate && (
                                            <p className="text-sm text-red-600">{errors.interest_rate}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="admin_fee">Admin Fee (Rp)</Label>
                                        <Input
                                            id="admin_fee"
                                            type="number"
                                            value={data.admin_fee}
                                            onChange={(e) => setData('admin_fee', parseInt(e.target.value) || '')}
                                            placeholder="e.g., 25000"
                                        />
                                        {errors.admin_fee && (
                                            <p className="text-sm text-red-600">{errors.admin_fee}</p>
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

                                    <div className="space-y-2">
                                        <Label htmlFor="image">Image URL</Label>
                                        <Input
                                            id="image"
                                            value={data.image}
                                            onChange={(e) => setData('image', e.target.value)}
                                            placeholder="/assets/images/services/service.jpg"
                                        />
                                        {errors.image && (
                                            <p className="text-sm text-red-600">{errors.image}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="short_description">Short Description</Label>
                                    <Textarea
                                        id="short_description"
                                        value={data.short_description}
                                        onChange={(e) => setData('short_description', e.target.value)}
                                        placeholder="Brief description for cards and previews"
                                        rows={2}
                                    />
                                    {errors.short_description && (
                                        <p className="text-sm text-red-600">{errors.short_description}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description">Full Description *</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Detailed description of the service"
                                        rows={4}
                                        required
                                    />
                                    {errors.description && (
                                        <p className="text-sm text-red-600">{errors.description}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="requirements">Requirements</Label>
                                    <Textarea
                                        id="requirements"
                                        value={data.requirements}
                                        onChange={(e) => setData('requirements', e.target.value)}
                                        placeholder="Requirements to apply for this service"
                                        rows={3}
                                    />
                                    {errors.requirements && (
                                        <p className="text-sm text-red-600">{errors.requirements}</p>
                                    )}
                                </div>

                                {/* Features Section */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label>Features</Label>
                                        <Button type="button" variant="outline" size="sm" onClick={addFeature}>
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add Feature
                                        </Button>
                                    </div>
                                    
                                    {data.features.map((feature, index) => (
                                        <div key={index} className="flex gap-2">
                                            <Input
                                                value={feature}
                                                onChange={(e) => updateFeature(index, e.target.value)}
                                                placeholder="Enter feature description"
                                                className="flex-1"
                                            />
                                            <Button type="button" variant="outline" size="sm" onClick={() => removeFeature(index)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t">
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="is_featured"
                                                checked={data.is_featured}
                                                onChange={(e) => setData('is_featured', e.target.checked)}
                                                className="rounded border-gray-300"
                                            />
                                            <Label htmlFor="is_featured">Featured Service</Label>
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
                                            <Link href={route('dashboard.services.index')}>
                                                Cancel
                                            </Link>
                                        </Button>
                                        <Button type="submit" disabled={processing}>
                                            <Save className="h-4 w-4 mr-2" />
                                            {processing ? 'Updating...' : 'Update Service'}
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
