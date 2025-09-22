import { TrendingUp, Users, Target } from "lucide-react";
import journeyZeroAoTopo from "@/assets/journey-zero-ao-topo.jpg";
import journeyThiagoNigro from "@/assets/journey-thiago-nigro.jpg";
import journeyMetodoProprio from "@/assets/journey-metodo-proprio.jpg";

export const JourneySection = () => {
  const milestones = [
    {
      icon: TrendingUp,
      title: "Do Zero ao Topo",
      description: "De vender paçoca no semáforo, cheguei ao comercial de grandes operações do mercado digital.",
      image: journeyZeroAoTopo
    },
    {
      icon: Users,
      title: "Dentro das Operações",
      description: "Atuei como closer em projetos de Thiago Nigro e outros grandes nomes do mercado digital.",
      image: journeyThiagoNigro
    },
    {
      icon: Target,
      title: "Método Próprio",
      description: "Depois dessa experiência, passei a treinar pessoas, desenvolver vendedores e criar o meu próprio método.",
      image: journeyMetodoProprio
    }
  ];

  return (
    <section className="section-premium section-dark">
      <div className="container-medium">
        <div className="text-center space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          <div className="space-y-6">
            <h2 className="text-section-title text-white font-bold">
              Minha <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Trajetória</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
              Uma jornada de transformação que me levou do zero ao centro das maiores operações comerciais do país.
            </p>
          </div>
        </div>

        <div className="grid-responsive-3 mb-16 sm:mb-20">
          {milestones.map((milestone, index) => (
            <div key={index} className="card-premium text-center group hover:border-primary/50 h-full overflow-hidden">
              {/* Journey Image */}
              <div className="relative mb-6 -mx-8 -mt-8">
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="w-full h-80 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent rounded-t-lg"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/90 to-accent/90 rounded-full flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300 shadow-lg">
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <h3 className="text-card-title font-bold mb-4 text-primary">
                  {milestone.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
                <p className="text-body text-foreground">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-gradient space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full translate-x-20 -translate-y-20"></div>
            
            <div className="relative z-10">
              <div className="text-center space-y-6">
                <h3 className="text-card-title text-primary font-bold">
                  Hoje, Ajudo Empresas a Crescer com Método
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-body text-foreground">
                <p>
                  <strong className="text-accent">Apliquei, vivi e aprendi</strong> no dia a dia como funcionam times de alta performance.
                </p>
                <p>
                  Tive acesso aos bastidores das operações que mais vendem no Brasil.
                </p>
                <p>
                  Depois dessa experiência, passei a treinar pessoas, desenvolver vendedores e estruturar operações comerciais.
                </p>
                <p>
                  Criar o meu próprio método foi o resultado natural dessa jornada.
                </p>
                <p>
                  <strong className="text-primary">Hoje, ajudo empresas a alinhar cultura, processos e ritmo</strong> porque já vi na prática o que funciona e o que derruba um comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};