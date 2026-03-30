import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gamepad2, Rocket, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'GameZone - Your Instant Gaming Universe',
    description:
        'Discover and play thousands of free browser-based games instantly. No downloads, just pure fun.',
};

export default function LandingPage() {
    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Gamepad2 className="w-6 h-6 text-primary" />
                        <h1 className="text-2xl font-bold tracking-tight text-primary">
                            GameZone
                        </h1>
                    </Link>
                    <Button asChild>
                        <Link href="/games">Browse Games</Link>
                    </Button>
                </div>
            </header>

            <main className="flex flex-col">
                {/* HERO */}
                <section className="container mx-auto flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] gap-6">
                    <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
                        Your Instant Gaming Universe
                    </h1>

                    <p className="max-w-2xl text-lg text-muted-foreground">
                        No downloads, no installations. Just click and play. Dive into a
                        massive collection of free-to-play browser games right now.
                    </p>

                    <div className="mt-4">
                        <Button asChild size="lg">
                            <Link href="/games">Start Playing Now</Link>
                        </Button>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="container mx-auto grid gap-8 py-12 md:grid-cols-3 md:py-20 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center p-3 rounded-full bg-primary/10">
                            <Rocket className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Instant Access</h3>
                        <p className="text-muted-foreground">
                            Jump straight into the action. No waiting for downloads or
                            installations.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center p-3 rounded-full bg-primary/10">
                            <Gamepad2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Diverse Library</h3>
                        <p className="text-muted-foreground">
                            From action-packed shooters to mind-bending puzzles, find your
                            next favorite game.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center p-3 rounded-full bg-primary/10">
                            <Zap className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Optimized Performance</h3>
                        <p className="text-muted-foreground">
                            Enjoy a smooth gaming experience on any device, thanks to our
                            optimized platform.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}