import { AnimatedLogo } from "./AnimatedLogo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fotoSite from "@/assets/foto_site.jpg";
import { FloatingParticles } from "./ScrollAnimations";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('${fotoSite}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url('${fotoSite}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 hero-animated-bg" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-6xl">
        <AnimatedLogo />
        
        <div className="mt-12 sm:mt-16 md:mt-20 space-y-10 sm:space-y-12 md:space-y-16">
          {/* Decorative Element */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse-slow"></div>
          
          {/* Hero Content */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white animate-fade-in-up in-view max-w-4xl mx-auto">
              Estruture um{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-extrabold">
                setor comercial
              </span>{" "}
              que gera vendas todos os meses.
            </h1>
              
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 animate-fade-in-up in-view max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
              <p>
                Se hoje seu time depende de improviso e você nunca sabe quanto vai entrar no caixa no próximo mês, 
                você está operando no modo "esperança". E esperança não paga as contas.
              </p>
              <p>
                Com método, clareza e execução, eu ajudo empresas a destravar o comercial e criar 
                <strong className="text-primary"> previsibilidade real de vendas</strong>.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8 animate-scale-in in-view" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToForm}
              className="btn-primary-neon-hero text-xs sm:text-xs md:text-sm h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 group"
            >
              Aplicar para Diagnóstico Estratégico
              <ArrowRight className="ml-1 h-3 w-3 sm:h-3 sm:w-3 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Uma sessão de <strong className="text-white">clareza</strong> para empresas comprometidas com o próximo nível
            </p>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
};