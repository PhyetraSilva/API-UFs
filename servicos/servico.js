import colecaoUf from '../dados/dados.js';

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(u => u.nome.toLowerCase().includes(nomeUf.toLowerCase()))};

export const buscarUfsPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(u => u.id === idUF);
};


export const buscarUfsPorSigla = (siglaUf) => {
    return colecaoUf.filter(u => u.uf.toLowerCase().includes(siglaUf.toLowerCase()))};

export const buscarUfsPorInicial = (inicialUf) => {
    return colecaoUf.filter(u => u.nome.toUpperCase().startsWith(inicialUf.toUpperCase()))};