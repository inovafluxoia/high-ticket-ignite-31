export const AuthoritySection = () => {
  // Company logos (as text for now, can be replaced with actual logos)
  const companies = [
    "PRIMOCAST",
    "THIAGO NIGRO",
    "FINCLASS", 
    "EQUITY"
  ];

  return (
    <section className="section-premium bg-gradient-to-br from-card to-background">
      <div className="container-medium text-center">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-6">
            <h2 className="text-section-title text-primary font-bold max-w-5xl mx-auto">
              Já estive no campo de batalha das{" "}
              <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">maiores operações do Brasil</span>.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 text-body-large text-muted-foreground max-w-5xl mx-auto text-left">
            <p>
              De vendedor de paçoca no semáforo, cheguei ao comercial de grandes operações do mercado digital.
            </p>
            <p>
              Atuei como closer em projetos de nomes como <strong className="text-primary">Thiago Nigro</strong>, <strong className="text-primary">Flávio Augusto</strong>, <strong className="text-primary">Bruno Perini</strong>, <strong className="text-primary">Luis Barsi</strong> entre outras referências.
              Aprendendo por dentro o que realmente faz um time performar.
            </p>
            <p>
              Depois de viver na prática e dominar os processos que realmente funcionam, passei a treinar vendedores, estruturar operações comerciais e desenvolvi meu próprio método.
            </p>
            <p>
              Hoje, ajudo empresas a alinhar cultura, processos e execução, porque <strong className="text-accent">já vi na prática o que funciona e o que derruba um comercial</strong>.
            </p>
          </div>
        </div>

        {/* Company Logos Wall */}
        <div className="mt-16 sm:mt-20">
          <div className="space-y-6 mb-12">
            <h3 className="text-card-title font-semibold text-white">
              Presente nos bastidores de gigantes do mercado:
            </h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Projetos e operações onde atuei diretamente
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid-responsive-4 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div
                key={index}
                className="card-premium p-6 group cursor-pointer hover:border-primary/50 transition-all duration-300 text-center"
              >
                <span className="text-base sm:text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="card-gradient space-y-6 text-left">
            <div className="text-center space-y-4">
              <h3 className="text-card-title text-primary font-bold">
                Acesso Direto às Operações de Elite
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-body text-foreground">
              <p>
                <strong className="text-primary">Não é teoria</strong>. É experiência real adquirida dentro das operações 
                comerciais de alguns dos maiores nomes do mercado digital brasileiro.
              </p>
              <p>
                Tive acesso direto às metodologias, processos e estratégias que fazem esses negócios 
                <strong className="text-accent"> movimentarem milhões</strong> todos os meses.
              </p>
              <p>
                Agora trago essa bagagem para estruturar e acelerar o comercial da sua empresa com método 
                <strong className="text-primary"> testado e aprovado no campo de batalha</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};