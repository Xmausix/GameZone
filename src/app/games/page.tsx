import { GameBrowser } from '@/components/game-browser';
import { games } from '@/data/games';
import { Gamepad2 } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Browse Games',
    description: 'Search and filter through our vast collection of browser games.',
};

export default function GamesPage() {
    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
                <div className="container mx-auto flex items-center h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Gamepad2 className="w-6 h-6 text-primary" />
                        <h1 className="text-2xl font-bold tracking-tight text-primary">
                            GameZone
                        </h1>
                    </Link>
                </div>
            </header>

            <main className="flex flex-col items-center w-full">
                <div className="container mx-auto w-full py-8">
                    <GameBrowser games={games} />
                </div>
            </main>
        </>
    );
}