import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-ck.jpg";

export const Header = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="container-wide">
        <div className="flex items-center justify-between py-4 sm:py-6 bg-black/20 backdrop-blur-sm rounded-b-xl mx-4 px-4 sm:px-6">
          {/* Logo/Name */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
              <img 
                src={logoImage} 
                alt="Gabriel Kikonaga Logo" 
                className="w-full h-full object-contain rounded-full shadow-lg" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0, 191, 255, 0.5))'
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Gabriel Kikonaga
              </span>
              <span className="text-sm sm:text-base text-muted-foreground font-medium">
                Consultor Comercial
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            className="btn-primary-neon text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 h-auto whitespace-nowrap shadow-xl"
          >
            <span className="hidden lg:inline">Aplicar para Reunião de Diagnóstico Gratuita</span>
            <span className="hidden sm:inline lg:hidden">Aplicar para Reunião</span>
            <span className="sm:hidden">Aplicar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};