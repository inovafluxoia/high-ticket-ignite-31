import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export const FinalCtaSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="section-premium section-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container-narrow relative z-10">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Main Message */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-section-title text-white font-bold leading-tight max-w-4xl mx-auto">
              Enquanto você lê isso, seus concorrentes com{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">processos definidos</span> estão vendendo
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-destructive to-red-400 mx-auto rounded-full"></div>
            
            <div className="space-y-4 sm:space-y-6 text-body-large text-white/90 max-w-4xl mx-auto">
              <p className="text-white font-semibold text-xl">
                A falta de um comercial estruturado não é um problema de amanhã.
              </p>
              <p className="text-xl">
                É uma <span className="text-destructive font-bold">perda de dinheiro</span> hoje.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-8">
            <div className="card-premium bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 max-w-2xl mx-auto">
              <div className="space-y-4">
                <p className="text-body-large text-accent font-semibold">
                  A agenda de diagnóstico é limitada e prioriza empresas com potencial de crescimento e prontas para a ação.
                </p>
                <p className="text-body-large text-white font-bold">
                  Garanta a sua agora.
                </p>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="btn-primary-neon text-sm sm:text-base md:text-lg lg:text-xl h-12 sm:h-16 md:h-18 lg:h-20 px-4 sm:px-8 md:px-12 lg:px-16 group shadow-2xl w-full max-w-md sm:max-w-lg mx-auto"
            >
              <span className="text-center">Aplicar para Diagnóstico Estratégico</span>
              <ArrowRight className="ml-2 sm:ml-3 md:ml-4 h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 transition-transform group-hover:translate-x-2 flex-shrink-0" />
            </Button>
            
            <p className="text-body text-white/75 max-w-lg mx-auto">
              Uma sessão de <strong className="text-white">clareza</strong> para empresas comprometidas com o próximo nível
            </p>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center text-sm sm:text-base text-muted-foreground pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Apenas comprometidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};