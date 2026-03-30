"use client";

import { useState, useMemo } from 'react';
import type { Game } from '@/data/games';
import { Input } from '@/components/ui/input';
import { GameCard } from '@/components/game-card';
import { Search } from 'lucide-react';

interface GameBrowserProps {
  games: Game[];
}

export function GameBrowser({ games }: GameBrowserProps) {
  const [query, setQuery] = useState('');

  const filteredGames = useMemo(() => {
    const lowercasedQuery = query.toLowerCase();
    if (!lowercasedQuery) {
      return games;
    }
    return games.filter(game =>
      game.title.toLowerCase().includes(lowercasedQuery) ||
      game.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
    );
  }, [games, query]);

  return (
    <div className="container py-8">
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for games by title or tag..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 py-4 text-base sm:py-6 sm:text-lg"
          />
        </div>
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold">No Games Found</h2>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search query.
          </p>
        </div>
      )}
    </div>
  );
}
