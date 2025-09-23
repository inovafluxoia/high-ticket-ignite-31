import { Question } from './FormData';

export const questions: Question[][] = [
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
      type: 'select', 
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
      type: 'select', 
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
      type: 'select', 
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
      type: 'select', 
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
      type: 'select', 
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
      type: 'select', 
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
      type: 'select', 
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
      type: 'select', 
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
      type: 'select', 
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

export const stepTitles = [
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

export const sectionTitles = [
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