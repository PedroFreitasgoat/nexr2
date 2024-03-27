import React from 'react';

type Produto = {
    id: number;
    nome: string;
}

const ServerFetch: React.FC = async () => {
    const response = await fetch('https://api.origamid.online/produtos');
    const data: Produto[] = await response.json();
    return (
        <ul>
            {data.map(produto => (
                <li key={produto.id}>{produto.nome}</li>
            ))}
        </ul>
    );
}

export default ServerFetch;
