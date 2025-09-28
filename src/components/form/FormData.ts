export interface FormData {
  // Dados Básicos
  nomeCompleto: string;
  nomeEmpresa: string;
  cargo: string;
  segmentoAtuacao: string;
  whatsapp: string;
  instagram: string;
  email: string;
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
  cargo: "",
  segmentoAtuacao: "",
  whatsapp: "",
  instagram: "",
  email: ""
};