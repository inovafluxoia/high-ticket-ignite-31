import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, User, Building, Cog, Database, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Etapa 1 - Dados Básicos
  nomeCompleto: string;
  nomeEmpresa: string;
  cargo: string;
  segmentoAtuacao: string;
  instagram: string;
  email: string;
  whatsapp: string;
  faturamentoMensal: string;
  faturamentoOutro: string;
  
  // Etapa 2 - Comercial (Método ADA)
  ritmoVendas: string;
  clarezaProcesso: string;
  timeComercial: string;
  principalDesafio: string;
  principalDesafioOutro: string;
  
  // Etapa 3 - Automação
  automatizacao: string;
  tarefaAutomatizar: string;
  tempoOportunidadesPerdidas: string;
  
  // Etapa 4 - CRM
  utilizaCrm: string;
  utilizaCrmOutro: string;
  visibilidadeNumeros: string;
  sistemaValioso: string;
  sistemaValiosoOutro: string;
  
  // Etapa 5 - Qualificação Final
  nivelPrioridade: string;
  investimento: string;
  investimentoOutro: string;
  garanteReuniao: string;
  maiorUrgencia: string;
}

interface Question {
  id: keyof FormData;
  type: 'input' | 'textarea' | 'email' | 'number' | 'radio';
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  hasOther?: boolean;
  otherField?: keyof FormData;
}

const questions: Question[][] = [
  // Etapa 1.1 - Dados Pessoais
  [
    { id: 'nomeCompleto', type: 'input', label: '1. Qual é o seu nome completo? *', placeholder: 'Seu nome completo' },
    { id: 'nomeEmpresa', type: 'input', label: '2. Qual é o nome da sua empresa? *', placeholder: 'Nome da empresa' },
    { id: 'cargo', type: 'input', label: '3. Qual é o seu cargo/função dentro da empresa? *', placeholder: 'Seu cargo/função' }
  ],
  // Etapa 1.2 - Dados da Empresa
  [
    { id: 'segmentoAtuacao', type: 'input', label: '4. Em qual segmento de atuação sua empresa está inserida? *', placeholder: 'Segmento de atuação' },
    { id: 'instagram', type: 'input', label: '5. Instagram (pessoal e/ou empresarial)? *', placeholder: '@seuinstagram' },
    { id: 'email', type: 'email', label: '6. Melhor e-mail de contato: *', placeholder: 'seu@email.com' }
  ],
  // Etapa 1.3 - Contato e Faturamento
  [
    { id: 'whatsapp', type: 'input', label: '7. Melhor WhatsApp/telefone: *', placeholder: '(11) 99999-9999' },
    { 
      id: 'faturamentoMensal', 
      type: 'radio', 
      label: '8. Qual é o faturamento médio mensal da sua empresa? *',
      options: [
        { value: 'ate-30k', label: 'Até R$30 mil/mês' },
        { value: '30k-100k', label: 'De R$30 mil a R$100 mil/mês' },
        { value: '100k-500k', label: 'De R$100 mil a R$500 mil/mês' },
        { value: '500k-1m', label: 'De R$500 mil a R$1 milhão/mês' },
        { value: 'acima-1m', label: 'Acima de R$1 milhão/mês' },
        { value: 'outro-faturamento', label: 'Outro:' }
      ],
      hasOther: true,
      otherField: 'faturamentoOutro'
    }
  ],
  // Etapa 2.1 - Ritmo de Vendas
  [
    { 
      id: 'ritmoVendas', 
      type: 'textarea', 
      label: '9. Hoje, você sente que sua empresa tem um ritmo constante de vendas ou depende muito de esforço extra/picos de campanhas? *',
      placeholder: 'Descreva como funciona o ritmo de vendas da sua empresa...'
    },
    { 
      id: 'clarezaProcesso', 
      type: 'number', 
      label: '10. De 0 a 10, qual é o nível de clareza que você tem sobre seu processo comercial? *',
      placeholder: 'Nota de 0 a 10',
      min: 0,
      max: 10
    },
    { 
      id: 'timeComercial', 
      type: 'textarea', 
      label: '11. Como está estruturado o seu time comercial hoje? *',
      placeholder: 'Descreva a estrutura do seu time comercial...'
    }
  ],
  // Etapa 2.2 - Desafios Comerciais
  [
    { 
      id: 'principalDesafio', 
      type: 'radio', 
      label: '12. Qual é o principal desafio do seu comercial hoje? *',
      options: [
        { value: 'volume-leads', label: 'Volume de leads qualificados' },
        { value: 'conversao-baixa', label: 'Conversão baixa das oportunidades' },
        { value: 'ticket-medio', label: 'Ticket médio baixo' },
        { value: 'previsibilidade', label: 'Falta de previsibilidade nos resultados' },
        { value: 'capacitacao-time', label: 'Capacitação do time' },
        { value: 'processos-claros', label: 'Processos não estruturados/claros' },
        { value: 'outro-desafio', label: 'Outro:' }
      ],
      hasOther: true,
      otherField: 'principalDesafioOutro'
    }
  ],
  // Etapa 3 - Automação
  [
    { 
      id: 'automatizacao', 
      type: 'radio', 
      label: '13. Você utiliza algum tipo de automação no seu processo comercial? *',
      options: [
        { value: 'sim-completa', label: 'Sim, automação completa' },
        { value: 'sim-parcial', label: 'Sim, automação parcial' },
        { value: 'nao-tenho', label: 'Não, não tenho automação' },
        { value: 'nao-sei', label: 'Não sei responder' }
      ]
    },
    { 
      id: 'tarefaAutomatizar', 
      type: 'textarea', 
      label: '14. Se pudesse automatizar uma tarefa do seu comercial hoje, qual seria? *',
      placeholder: 'Descreva qual tarefa você gostaria de automatizar...'
    },
    { 
      id: 'tempoOportunidadesPerdidas', 
      type: 'textarea', 
      label: '15. Quanto tempo você estima que perde por semana com oportunidades que "esfriam" ou não são trabalhadas adequadamente? *',
      placeholder: 'Descreva quanto tempo é perdido com oportunidades...'
    }
  ],
  // Etapa 4 - CRM
  [
    { 
      id: 'utilizaCrm', 
      type: 'radio', 
      label: '16. Você utiliza algum CRM ou sistema para gerenciar seu comercial? *',
      options: [
        { value: 'sim-crm-pago', label: 'Sim, CRM pago (Pipedrive, RD Station, etc.)' },
        { value: 'sim-planilhas', label: 'Sim, planilhas do Google/Excel' },
        { value: 'sim-outro', label: 'Sim, outro sistema' },
        { value: 'nao-uso', label: 'Não uso nenhum sistema' }
      ],
      hasOther: true,
      otherField: 'utilizaCrmOutro'
    },
    { 
      id: 'visibilidadeNumeros', 
      type: 'radio', 
      label: '17. Você tem visibilidade clara dos números do seu funil de vendas? *',
      options: [
        { value: 'sim-total', label: 'Sim, total visibilidade' },
        { value: 'sim-parcial', label: 'Sim, visibilidade parcial' },
        { value: 'nao-tenho', label: 'Não tenho visibilidade' },
        { value: 'nao-sei-importancia', label: 'Não sei a importância disso' }
      ]
    },
    { 
      id: 'sistemaValioso', 
      type: 'radio', 
      label: '18. Qual sistema seria mais valioso para o seu negócio hoje? *',
      options: [
        { value: 'crm-completo', label: 'CRM completo' },
        { value: 'automacao-marketing', label: 'Automação de marketing' },
        { value: 'sistema-vendas', label: 'Sistema de vendas' },
        { value: 'dashboard-kpis', label: 'Dashboard de KPIs' },
        { value: 'outro-sistema', label: 'Outro:' }
      ],
      hasOther: true,
      otherField: 'sistemaValiosoOutro'
    }
  ],
  // Etapa 5.1 - Prioridade e Investimento
  [
    { 
      id: 'nivelPrioridade', 
      type: 'radio', 
      label: '19. De 0 a 10, qual o nível de prioridade que "destravar o comercial" tem para você hoje? *',
      options: [
        { value: '0-3', label: '0 a 3 (baixa prioridade)' },
        { value: '4-6', label: '4 a 6 (média prioridade)' },
        { value: '7-8', label: '7 a 8 (alta prioridade)' },
        { value: '9-10', label: '9 a 10 (prioridade máxima)' }
      ]
    },
    { 
      id: 'investimento', 
      type: 'radio', 
      label: '20. Qual seria o valor de investimento mensal que faria sentido para resolver definitivamente os gargalos do seu comercial? *',
      options: [
        { value: 'ate-5k', label: 'Até R$5.000' },
        { value: '5k-10k', label: 'De R$5.000 a R$10.000' },
        { value: '10k-20k', label: 'De R$10.000 a R$20.000' },
        { value: '20k-50k', label: 'De R$20.000 a R$50.000' },
        { value: 'acima-50k', label: 'Acima de R$50.000' },
        { value: 'outro-investimento', label: 'Outro:' }
      ],
      hasOther: true,
      otherField: 'investimentoOutro'
    },
    { 
      id: 'garanteReuniao', 
      type: 'radio', 
      label: '21. Ao marcar uma reunião de diagnóstico, você consegue garantir que terá tempo dedicado e foco total, entendendo que nossa agenda é concorrida? *',
      options: [
        { value: 'sim-clareza', label: 'Sim, tenho clareza da importância' },
        { value: 'talvez-imprevistos', label: 'Não, talvez tenha imprevistos' },
        { value: 'prefiro-nao-marcar', label: 'Prefiro não marcar agora' }
      ]
    }
  ],
  // Etapa 5.2 - Urgência Final
  [
    { 
      id: 'maiorUrgencia', 
      type: 'textarea', 
      label: '22. Qual é a sua maior urgência hoje, que se resolvida imediatamente faria diferença no seu negócio? *',
      placeholder: 'Descreva qual é a sua maior urgência no negócio hoje...'
    }
  ]
];

const stepTitles = [
  "Dados Pessoais",
  "Dados da Empresa", 
  "Contato e Faturamento",
  "Ritmo de Vendas",
  "Desafios Comerciais",
  "Automação",
  "CRM",
  "Prioridade e Investimento",
  "Urgência Final"
];

const sectionTitles = [
  "Dados Básicos",
  "Dados Básicos", 
  "Dados Básicos",
  "Frente 1 – Comercial (Método ADA)",
  "Frente 1 – Comercial (Método ADA)",
  "Frente 2 – Automação", 
  "Frente 3 – CRM",
  "Qualificação Final",
  "Qualificação Final"
];

export const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    nomeEmpresa: "",
    cargo: "",
    segmentoAtuacao: "",
    instagram: "",
    email: "",
    whatsapp: "",
    faturamentoMensal: "",
    faturamentoOutro: "",
    ritmoVendas: "",
    clarezaProcesso: "",
    timeComercial: "",
    principalDesafio: "",
    principalDesafioOutro: "",
    automatizacao: "",
    tarefaAutomatizar: "",
    tempoOportunidadesPerdidas: "",
    utilizaCrm: "",
    utilizaCrmOutro: "",
    visibilidadeNumeros: "",
    sistemaValioso: "",
    sistemaValiosoOutro: "",
    nivelPrioridade: "",
    investimento: "",
    investimentoOutro: "",
    garanteReuniao: "",
    maiorUrgencia: ""
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentQuestions = () => questions[currentStep] || [];

  const getFilledFieldsCount = () => {
    const currentQuestions = getCurrentQuestions();
    return currentQuestions.filter(question => {
      const value = formData[question.id];
      return value && value.trim() !== '';
    }).length;
  };

  const isStepValid = () => {
    const currentQuestions = getCurrentQuestions();
    const filledCount = getFilledFieldsCount();
    return filledCount >= Math.min(3, currentQuestions.length);
  };

  const nextStep = () => {
    if (isStepValid() && currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getProgressPercentage = () => {
    return (currentStep / (questions.length - 1)) * 100;
  };

  const handleSubmit = async () => {
    if (!isStepValid()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Aplicação enviada com sucesso!",
      description: "Nossa equipe analisará seu perfil e entrará em contato em breve.",
    });
    
    setIsSubmitting(false);
    setCurrentStep(questions.length); // Success page
  };

  // Success page
  if (currentStep === questions.length) {
    return (
      <section id="application-form" className="section-premium section-dark">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-premium text-center space-y-6">
            <CardHeader>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                <CheckCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary">
                Aplicação Enviada com Sucesso!
              </CardTitle>
              <CardDescription className="text-lg">
                Obrigado pelas suas respostas.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4 text-foreground">
                <p>
                  Nosso time vai analisar seu perfil e, caso haja alinhamento, entraremos em contato para marcar sua reunião de diagnóstico.
                </p>
                
                <div className="flex items-start space-x-3 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div className="space-y-2 text-left">
                    <div className="w-8 h-0.5 bg-destructive mb-2"></div>
                    <p className="font-semibold text-destructive">Importante:</p>
                    <p className="text-sm">
                      Nossa agenda é limitada e priorizamos empresas realmente comprometidas em destravar, ganhar ritmo e escalar seus resultados comerciais.
                    </p>
                    <p className="text-sm font-semibold">
                      Se for o seu caso, você já estará um passo à frente para transformar seu negócio.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const renderQuestion = (question: Question, index: number) => {
    const value = formData[question.id];
    
    if (question.type === 'radio') {
      return (
        <div key={question.id} className="space-y-3">
          <Label>{question.label}</Label>
          <RadioGroup
            value={value}
            onValueChange={(newValue) => updateFormData(question.id, newValue)}
          >
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
          
          {question.hasOther && question.otherField && value === (question.options?.find(opt => opt.label.includes('Outro:'))?.value) && (
            <Input
              value={formData[question.otherField]}
              onChange={(e) => updateFormData(question.otherField!, e.target.value)}
              placeholder="Especifique..."
              className="mt-2"
            />
          )}
        </div>
      );
    }
    
    if (question.type === 'textarea') {
      return (
        <div key={question.id} className="space-y-2">
          <Label htmlFor={question.id}>{question.label}</Label>
          <Textarea
            id={question.id}
            value={value}
            onChange={(e) => updateFormData(question.id, e.target.value)}
            placeholder={question.placeholder}
            className="min-h-[100px]"
          />
        </div>
      );
    }
    
    return (
      <div key={question.id} className="space-y-2">
        <Label htmlFor={question.id}>{question.label}</Label>
        <Input
          id={question.id}
          type={question.type}
          value={value}
          onChange={(e) => updateFormData(question.id, e.target.value)}
          placeholder={question.placeholder}
          min={question.min}
          max={question.max}
        />
      </div>
    );
  };

  return (
    <section id="application-form" className="section-premium section-dark">
      <div className="container mx-auto max-w-4xl">
        <Card className="card-premium">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl text-primary">
              Aplicação para Reunião de Diagnóstico
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Olá, seja bem-vindo(a)! Antes de qualquer coisa, preciso conhecer um pouco mais sobre você e sua empresa para entender como podemos ajudar a transformar seu comercial e acelerar seus resultados.
              <br /><br />
              Todas as respostas são confidenciais e vão nos ajudar a preparar um diagnóstico estratégico para você. Vamos começar?
            </CardDescription>
            
            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Etapa {currentStep + 1} de {questions.length} • {Math.round(getProgressPercentage())}% completo
                </p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Section Title */}
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-primary">{sectionTitles[currentStep]}</h3>
              <p className="text-sm text-muted-foreground">{stepTitles[currentStep]}</p>
            </div>
            
            {/* Current Questions */}
            <div className="space-y-6">
              {getCurrentQuestions().map((question, index) => renderQuestion(question, index))}
            </div>

            {/* Progress indicator */}
            <div className="text-center py-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Campos preenchidos: {getFilledFieldsCount()} (mínimo {Math.min(3, getCurrentQuestions().length)} necessários)
                </p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((getFilledFieldsCount() / Math.min(3, getCurrentQuestions().length)) * 100, 100)}%` }}
                  ></div>
                </div>
                {!isStepValid() && (
                  <p className="text-xs text-accent">
                    Preencha pelo menos {Math.min(3, getCurrentQuestions().length) - getFilledFieldsCount()} campos para continuar
                  </p>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Button>
              
              {currentStep < questions.length - 1 ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="btn-primary-neon flex items-center space-x-2"
                >
                  <span>Próximo</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="btn-primary-neon flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Aplicação</span>
                      <CheckCircle className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};