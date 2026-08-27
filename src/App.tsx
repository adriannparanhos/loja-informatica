import { useState, useEffect } from "react";
import ProductForm from "./views/ProductForm/ProductForm";
import ProductTable from "./views/ProductTable/ProductTable";
import type { Product, Section, Brand } from "./models/types";
import "./App.css";

function App() {
  const [sections, setSections] = useState<Section[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/secoes')
      .then(res => res.json())
      .then((data: Section[]) => setSections(data));

    fetch('http://localhost:8080/marcas')
      .then(res => res.json())
      .then((data: Brand[]) => setBrands(data));

    fetch('http://localhost:8080/produtos')
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  const addProduct = async (newProduct: Product) => {
    const res = await fetch('http://localhost:8080/produtos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });

    if (res.ok) {
      const savedProduct: Product = await res.json();
      setProducts([...products, savedProduct]);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Loja de Informática</h1>
        <p>Gerenciamento de Estoque</p>
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