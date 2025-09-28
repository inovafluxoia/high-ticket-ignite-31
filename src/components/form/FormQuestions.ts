import { Question } from './FormData';

export const questions: Question[][] = [
  // Etapa 1 - Dados Pessoais e Empresa
  [
    { id: 'nomeCompleto', type: 'input', label: '1. Qual é o seu nome completo?', placeholder: 'Digite seu nome completo' },
    { id: 'nomeEmpresa', type: 'input', label: '2. Qual é o nome da sua empresa?', placeholder: 'Digite o nome da empresa' },
    { 
      id: 'cargo', 
      type: 'select', 
      label: '3. Qual é o seu cargo/função dentro da empresa?', 
      placeholder: 'Selecione seu cargo',
      options: [
        { value: 'ceo', label: 'CEO/Fundador' },
        { value: 'diretor', label: 'Diretor' },
        { value: 'gerente', label: 'Gerente' },
        { value: 'proprietario', label: 'Proprietário' },
        { value: 'coordenador', label: 'Coordenador' },
        { value: 'supervisor', label: 'Supervisor' },
        { value: 'vendedor', label: 'Vendedor' },
        { value: 'outro', label: 'Outro' }
      ]
    }
  ],
  // Etapa 2 - Segmento e Contato
  [
    { 
      id: 'segmentoAtuacao', 
      type: 'select', 
      label: '4. Em qual segmento de atuação sua empresa está inserida?', 
      placeholder: 'Selecione o segmento',
      options: [
        { value: 'tecnologia', label: 'Tecnologia' },
        { value: 'saude', label: 'Saúde' },
        { value: 'educacao', label: 'Educação' },
        { value: 'financeiro', label: 'Financeiro' },
        { value: 'varejo', label: 'Varejo' },
        { value: 'industria', label: 'Indústria' },
        { value: 'servicos', label: 'Serviços' },
        { value: 'consultoria', label: 'Consultoria' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'imobiliario', label: 'Imobiliário' },
        { value: 'alimentacao', label: 'Alimentação' },
        { value: 'construcao', label: 'Construção Civil' },
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'outro', label: 'Outro' }
      ]
    },
    { id: 'whatsapp', type: 'input', label: '5. Qual seu número de contato?', placeholder: '(11) 99999-9999' },
    { id: 'instagram', type: 'input', label: '6. Qual é o Instagram (pessoal e/ou empresarial)?', placeholder: '@seuinstagram ou digite "não tenho"' }
  ],
  // Etapa 3 - Email Final
  [
    { id: 'email', type: 'email', label: '7. Melhor e-mail de contato:', placeholder: 'seu@email.com' }
  ]
];

export const stepTitles = [
  "Dados Pessoais e Empresa",
  "Segmento e Contato", 
  "E-mail de Contato"
];

export const sectionTitles = [
  "Informações Básicas",
  "Informações Básicas", 
  "Informações Básicas"
];