import express from 'express';
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome, buscarUfsPorSigla, buscarUfsPorInicial} from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
  const nomeUf = req.query.busca;
  const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();

  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhuma UF encontrada" });
  }
});


app.get('/ufs/sigla/:sigla', (req, res) => {
  const siglaUf = req.params.sigla;
  const resultado = buscarUfsPorSigla(siglaUf);

  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhuma UF encontrada" });
  }
});

app.get('/ufs/id/:iduf', (req, res) => {
  const idUf = parseInt(req.params.iduf);

  if (isNaN(idUf)) {
    return res.status(400).json({ erro: "Requisição inválida" });
  }

  const uf = buscarUfsPorId(idUf);

  if (uf) {
    res.json(uf);
  } else {
    res.status(404).json({ erro: "UF não encontrada" });
  }
});

app.get('/ufs/inicial/:inicial', (req, res) => {
  const inicialUf = req.params.inicial;
  const resultado = buscarUfsPorInicial(inicialUf);

  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ erro: "Nenhuma UF encontrada" });
  }
});

app.listen(8080, () => {
  const data = new Date();
  console.log("Servidor iniciado na porta 8080 em: " + data);
});