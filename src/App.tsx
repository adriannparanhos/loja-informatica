import { useState, useEffect } from "react";
import ProductForm from "./views/ProductForm/ProductForm";
import ProductTable from "./views/ProductTable/ProductTable";
import type { Product, Section, Brand } from "./models/types";
import "./App.css";

const DADOS_INICIAIS_SECOES = [
  { id: "1", nome: "Computadores", corPrimaria: "#57c278", corSecundaria: "#d9f7e9" },
  { id: "2", nome: "Acessórios", corPrimaria: "#82cffa", corSecundaria: "#e8f8ff" },
  { id: "3", nome: "Impressoras", corPrimaria: "#a6d157", corSecundaria: "#f0f8e2" },
  { id: "4", nome: "Games", corPrimaria: "#e06b69", corSecundaria: "#fde7e8" },
  { id: "5", nome: "Gadgets", corPrimaria: "#db6ebf", corSecundaria: "#fae9f5" }
];

const DADOS_INICIAIS_MARCAS = [
  { id: "1", nome: "HP" }, { id: "2", nome: "Dell" }, { id: "3", nome: "Positivo" },
  { id: "4", nome: "Asus" }, { id: "5", nome: "Xing Ling genérico" }
];

function App() {
  const [sections, setSections] = useState<Section[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const secoesSalvas = localStorage.getItem('loja_secoes');
    const marcasSalvas = localStorage.getItem('loja_marcas');
    const produtosSalvos = localStorage.getItem('loja_produtos');

    setSections(secoesSalvas ? JSON.parse(secoesSalvas) : DADOS_INICIAIS_SECOES);
    setBrands(marcasSalvas ? JSON.parse(marcasSalvas) : DADOS_INICIAIS_MARCAS);
    setProducts(produtosSalvos ? JSON.parse(produtosSalvos) : []);
  }, []);

  const addProduct = (newProduct: Product) => {
    const produtoComId = {
      ...newProduct,
      id: Math.random().toString(36).substr(2, 9)
    };

    const novaLista = [...products, produtoComId];
    setProducts(novaLista);
    
    localStorage.setItem('loja_produtos', JSON.stringify(novaLista));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Loja de Informática</h1>
        <p>Gerenciamento de Estoque (Offline-First)</p>
      </header>
      
      <main className="layout">
        <ProductForm 
          sections={sections.map(s => s.nome)} 
          brands={brands.map(b => b.nome)}
          onAddProduct={addProduct} 
        />
        
        <ProductTable products={products} />
      </main>
    </div>
  );
}

export default App;