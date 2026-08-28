import './ProductTable.css';
import type { Product } from "../../models/types";

interface ProductTableProps {
    products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
    return (
        <div className="table-container">
            <div className="table-header">
                <h3>Lista de Produtos</h3>
                <span className="badge">{products.length} itens</span>
            </div>
            <div className="table-wrapper">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Seção</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="empty-state">
                                    <div className="empty-message">Nenhum produto cadastrado ainda.</div>
                                </td>
                            </tr>
                        ) : (
                            products.map((p, index) => (
                                <tr key={p.id || index}>
                                    <td className="col-image">
                                        <div className="image-wrapper">
                                            {p.imagem ? (
                                                <img src={p.imagem} alt={p.nome} />
                                            ) : (
                                                <div className="no-image">S/I</div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="col-id">#{p.id || '-'}</td>
                                    <td className="col-name">{p.nome}</td>
                                    <td>
                                        <span className="tag-marca">{p.marca}</span>
                                    </td>
                                    <td>
                                        <span className="tag-secao">{p.secao}</span>
                                    </td>
                                    <td className="col-price">R$ {p.preco}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
