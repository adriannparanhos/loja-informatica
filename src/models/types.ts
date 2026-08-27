export interface Product {
  id?: string;
  nome: string;
  preco: string;
  imagem: string;
  secao: string;
  marca: string;
}

export interface Section {
  id: string;
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
}

export interface Brand {
  id: string;
  nome: string;
}
