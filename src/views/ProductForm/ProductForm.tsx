import React, { useState } from "react";
import './ProductForm.css';
import TextInput from "../ui/TextInput";
import Select from "../ui/Select";
import Button from "../ui/Button";
import type { Product } from "../../models/types";

interface ProductFormProps {
    sections: string[];
    brands: string[];
    onAddProduct: (product: Product) => void;
}

const ProductForm = ({ sections, brands, onAddProduct }: ProductFormProps) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');
    const [secao, setSecao] = useState(sections[0] || '');
    const [marca, setMarca] = useState(brands[0] || '');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        onAddProduct({
            nome,
            preco,
            imagem,
            secao,
            marca
        });
        
        setNome('');
        setPreco('');
        setImagem('');
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h3>Cadastrar Produto</h3>
            </div>
            <form onSubmit={handleSubmit} className="form-body">
                <TextInput 
                    label="Nome" 
                    value={nome} 
                    onChange={setNome} 
                    placeholder="Ex: Teclado Mecânico"
                />
                <TextInput 
                    label="Preço" 
                    value={preco} 
                    onChange={setPreco} 
                    placeholder="Ex: 250.00"
                />
                <TextInput 
                    label="URL da Imagem" 
                    value={imagem} 
                    onChange={setImagem} 
                    placeholder="https://..."
                />
                <Select 
                    label="Marca" 
                    options={brands} 
                    value={marca} 
                    onChange={setMarca} 
                />
                <Select 
                    label="Seção da Loja" 
                    options={sections} 
                    value={secao} 
                    onChange={setSecao} 
                />
                <div className="form-action">
                    <Button>Adicionar Produto</Button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
