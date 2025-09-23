export interface FormData {
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

export interface Question {
  id: keyof FormData;
  type: 'input' | 'textarea' | 'email' | 'number' | 'radio' | 'select';
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  hasOther?: boolean;
  otherField?: keyof FormData;
}

export const defaultFormData: FormData = {
  nomeCompleto: "",
  nomeEmpresa: "",
  cargo: "CEO/Fundador",
  segmentoAtuacao: "",
  instagram: "",
  email: "",
  whatsapp: "",
  faturamentoMensal: "100k-500k",
  faturamentoOutro: "",
  ritmoVendas: "",
  clarezaProcesso: "7",
  timeComercial: "",
  principalDesafio: "previsibilidade",
  principalDesafioOutro: "",
  automatizacao: "sim-parcial",
  tarefaAutomatizar: "",
  tempoOportunidadesPerdidas: "",
  utilizaCrm: "sim-planilhas",
  utilizaCrmOutro: "",
  visibilidadeNumeros: "sim-parcial",
  sistemaValioso: "crm-completo",
  sistemaValiosoOutro: "",
  nivelPrioridade: "7-8",
  investimento: "10k-20k",
  investimentoOutro: "",
  garanteReuniao: "sim-clareza",
  maiorUrgencia: ""
};