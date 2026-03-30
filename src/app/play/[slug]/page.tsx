import { games } from '@/data/games';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Gamepad2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GameGallery } from '@/components/game-gallery';

interface GamePageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return games.map(game => ({
        slug: game.slug,
    }));
}

export async function generateMetadata({ params }: GamePageProps) {
    const game = games.find(g => g.slug === params.slug);
    if (!game) {
        return { title: 'Game Not Found' };
    }
    return {
        title: game.title,
        description: game.description,
    };
}

export default function GamePage({ params }: GamePageProps) {
    const game = games.find(g => g.slug === params.slug);

    if (!game) {
        notFound();
    }

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
                <div className="container mx-auto flex items-center h-16 gap-4">
                    <Button asChild variant="outline" size="icon">
                        <Link href="/games" aria-label="Back to games">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>

                    <Link href="/" className="flex items-center gap-2">
                        <Gamepad2 className="w-6 h-6 text-primary" />
                        <h1 className="text-xl font-bold tracking-tight text-primary hidden sm:inline">
                           GameZone
                        </h1>
                    </Link>

                    <div className="ml-auto text-right max-w-[50%]">
                        <h2 className="text-base sm:text-lg font-semibold truncate">
                            {game.title}
                        </h2>
                    </div>
                </div>
            </header>

            <main className="flex flex-col items-center w-full">
                <div className="container mx-auto py-8 md:py-12">
                    <div className="max-w-4xl mx-auto">

                        {/* TITLE */}
                        <div className="text-center mb-10">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-3">
                                {game.title}
                            </h1>

                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {game.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                                {game.description}
                            </p>
                        </div>

                        {/* GALLERY */}
                        <div className="mb-10">
                            <GameGallery
                                title={game.title}
                                images={game.gallery}
                                hints={game.galleryHints}
                            />
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <Button asChild size="lg">
                                <a
                                    href={game.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Play Game
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}