export default function Loading() {
  return (
    <main>
      {/* Skeleton do Hero: tela cheia com gradiente animado */}
      <div className="relative h-screen bg-primary overflow-hidden">
        {/* Shimmer animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent animate-pulse" />
        
        {/* Dark overlay matching the hero style */}
        <div className="absolute inset-0 bg-primary/40" />
        
        {/* Content skeleton */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-8 px-6 max-w-5xl mx-auto">
            {/* Subtitle skeleton */}
            <div className="h-3 w-56 bg-background/15 rounded-full mx-auto" />
            
            {/* Title skeleton - two lines */}
            <div className="space-y-4">
              <div className="h-12 md:h-16 w-80 md:w-[500px] bg-background/10 rounded-lg mx-auto" />
              <div className="h-12 md:h-16 w-64 md:w-[400px] bg-background/10 rounded-lg mx-auto" />
            </div>
            
            {/* Description skeleton */}
            <div className="h-5 w-96 max-w-full bg-background/8 rounded-full mx-auto" />
            
            {/* Buttons skeleton */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <div className="h-14 w-48 bg-background/15 rounded-full" />
              <div className="h-14 w-48 bg-background/5 rounded-full border border-background/10" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator skeleton */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 bg-background/10 rounded-full" />
        </div>
      </div>
    </main>
  );
}
