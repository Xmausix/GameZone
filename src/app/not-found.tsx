import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gamepad2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Gamepad2 className="w-16 h-16 text-primary/50 mb-4" />
      <h1 className="text-4xl font-bold tracking-tight">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Oops! The page you're looking for seems to have gotten lost in the digital cosmos.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
