import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TargetAudienceSection = () => {
  return (
    <section className="section-premium bg-gradient-to-br from-background to-card">
      <div className="container-wide">
        {/* Comparison Cards - Direct Side by Side */}
        <div className="grid-responsive-2 items-stretch">
          {/* Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
          
          {/* Para quem É - LEFT SIDE */}
          <div className="card-premium border-l-4 border-l-primary bg-gradient-to-br from-primary/5 to-card h-full animate-fade-in-left">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-primary animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <Check className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-card-title font-bold text-primary mb-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                ESSE PROCESSO É PARA QUEM LEVA VENDAS A SÉRIO
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Já entendeu que o comercial é o coração da empresa",
                "Quer previsibilidade e ritmo de vendas",
                "Está pronto para ajustar cultura, processos e execução",
                "Valoriza clareza, método e resultado"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/15 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="text-body text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-auto pt-6 border-t border-primary/20">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg animate-scale-in" style={{ animationDelay: '0.9s' }}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white font-bold text-sm">PERFIL IDEAL</span>
              </div>
            </div>
          </div>

          {/* Para quem NÃO É - RIGHT SIDE */}
          <div className="card-premium border-l-4 border-l-destructive bg-gradient-to-br from-destructive/5 to-card h-full animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-destructive rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <X className="h-10 w-10 text-destructive-foreground" />
              </div>
              <h3 className="text-card-title font-bold text-destructive mb-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                NÃO É PARA VOCÊ SE
              </h3>
              <div className="w-20 h-1 bg-destructive mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.6s' }}></div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Procura apenas preço baixo",
                "Não sabe se quer investir no crescimento",
                "Espera resultado sem esforço",
                "Não leva o próprio negócio a sério"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-xl bg-destructive/10 border border-destructive/30 hover:bg-destructive/15 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <span className="text-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-auto pt-6 border-t border-destructive/20">
              <Button 
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary-neon animate-scale-in"
                style={{ animationDelay: '1.1s' }}
              >
                Quero aplicar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};