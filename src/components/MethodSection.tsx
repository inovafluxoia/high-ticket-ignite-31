import { Compass, Route, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MethodSection = () => {
  const methodSteps = [
    {
      icon: Compass,
      title: "1. Alinhamento",
      description: "Clareza de metas, cultura e expectativas do time."
    },
    {
      icon: Route,
      title: "2. Direção", 
      description: "Processos comerciais que criam previsibilidade."
    },
    {
      icon: Zap,
      title: "3. Ação",
      description: "Execução prática que gera resultado no campo de batalha."
    }
  ];

  return (
    <section className="section-premium bg-gradient-to-br from-background to-card">
      <div className="container-medium">
        <div className="text-center space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          <div className="space-y-6">
            <h2 className="text-section-title text-primary font-bold animate-fade-in-up">
              O Método <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">ADa</span>: simples, direto e imbatível.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full animate-scale-in"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16 sm:mb-20">
          {methodSteps.map((step, index) => (
            <div 
              key={index} 
              className="card-premium-enhanced group relative text-center animate-fade-in-up flex-1 min-w-[280px] max-w-[320px]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                <step.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-card-title font-bold text-primary">
                  {step.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                <p className="text-body text-foreground/90">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Method Quote */}
        <div className="max-w-5xl mx-auto">
          <div className="card-gradient text-center space-y-8 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative z-10">
              <div className="mt-8">
                <Button 
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary-neon animate-scale-in"
                  style={{ animationDelay: '0.8s' }}
                >
                  Aplicar para Diagnóstico Estratégico
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};