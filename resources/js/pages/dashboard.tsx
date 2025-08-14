import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    Settings,
    Image,
    BarChart3,
    Briefcase,
    Users,
    TrendingUp,
    Globe,
    Edit,
    Plus
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const cmsModules = [
    {
        title: 'Site Settings',
        description: 'Kelola informasi dasar website seperti logo, kontak, dan social media',
        icon: Settings,
        href: '/dashboard/settings',
        color: 'bg-blue-500',
        stats: 'General, Contact, Social'
    },
    {
        title: 'Hero Section',
        description: 'Edit konten hero section di halaman utama website',
        icon: Image,
        href: '/dashboard/hero-sections',
        color: 'bg-green-500',
        stats: 'Title, Subtitle, CTA'
    },
    {
        title: 'Statistics',
        description: 'Update angka-angka statistik yang ditampilkan di website',
        icon: BarChart3,
        href: '/dashboard/statistics',
        color: 'bg-purple-500',
        stats: 'Counters, Animations'
    },
    {
        title: 'Services',
        description: 'Kelola layanan koperasi yang ditawarkan kepada anggota',
        icon: Briefcase,
        href: '/dashboard/services',
        color: 'bg-orange-500',
        stats: 'Products, Rates, Features'
    },
];

const quickStats = [
    {
        title: 'Total Anggota',
        value: '1,250+',
        icon: Users,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        title: 'Website Views',
        value: '12,450',
        icon: Globe,
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        title: 'Growth Rate',
        value: '+15%',
        icon: TrendingUp,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Welcome Section */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard CMS</h1>
                    <p className="text-muted-foreground">
                        Kelola konten website KSP Smart dengan mudah dan efisien
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid gap-4 md:grid-cols-3">
                    {quickStats.map((stat, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {stat.title}
                                        </p>
                                        <p className="text-2xl font-bold">{stat.value}</p>
                                    </div>
                                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CMS Modules */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Content Management</h2>
                        <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Quick Add
                        </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {cmsModules.map((module, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${module.color} text-white`}>
                                            <module.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-base">{module.title}</CardTitle>
                                            <CardDescription className="text-xs">
                                                {module.stats}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {module.description}
                                    </p>
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <Link href={module.href}>
                                            <Edit className="h-4 w-4 mr-2" />
                                            Kelola
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Aktivitas terbaru pada content management system
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                <div className="p-2 rounded-full bg-blue-100">
                                    <Settings className="h-4 w-4 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Site settings updated</p>
                                    <p className="text-xs text-muted-foreground">Contact information changed</p>
                                </div>
                                <span className="text-xs text-muted-foreground">2 hours ago</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                <div className="p-2 rounded-full bg-green-100">
                                    <BarChart3 className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Statistics updated</p>
                                    <p className="text-xs text-muted-foreground">Member count increased to 1,250</p>
                                </div>
                                <span className="text-xs text-muted-foreground">1 day ago</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
