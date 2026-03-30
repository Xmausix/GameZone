import Link from 'next/link';
import Image from 'next/image';
import type { Game } from '@/data/games';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/play/${game.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50 group-hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
            <Image
                src={game.thumbnail}
                alt={`Thumbnail for ${game.title}`}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={game.thumbnailHint}
            />
        </div>
        <CardHeader>
          <CardTitle className="truncate font-bold tracking-tight text-center">{game.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 justify-center">
            {game.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
