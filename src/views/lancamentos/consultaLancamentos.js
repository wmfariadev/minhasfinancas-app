import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import { mensagemErro } from '../../components/toastr'
import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/selectMenu';
import LancamentosTable from './lancamentosTable';
import LancamentoService from '../../app/services/lancamentoService';

const ConsultaLancamento = () => {
    const service = new LancamentoService();
    let userAccess = JSON.parse(localStorage.getItem("_user"));
    
    const [descricao, setDescricao] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [tipo, setTipo] = useState('');
    const [rows, setRow] = useState([]);

    const meses = [
        { label: 'Selecione...', value: '' },
        { label: 'Janeiro', value: '1' },
        { label: 'Fevereiro', value: '2' },
        { label: 'Março', value: '3' },
        { label: 'Abril', value: '4' },
        { label: 'Maio', value: '5' },
        { label: 'Junho', value: '6' },
        { label: 'Julho', value: '7' },
        { label: 'Agosto', value: '8' },
        { label: 'Setembro', value: '9' },
        { label: 'Outubro', value: '10' },
        { label: 'Novembro', value: '11' },
        { label: 'Dezembro', value: '12' },
    ];

    const tipos = [
        { label: 'Selecione...', value: '' },
        { label: 'Despesa', value: 'DESPESA' },
        { label: 'Receita', value: 'RECEITA' }
    ]

    let lancamentoFiltro = {
        usuarioId: userAccess.id,
        ano: ano,
        mes: mes,
        tipo: tipo,
        descricao: descricao
    }

    const buscarLancamentos = () => {

        service.buscarLancamentos(lancamentoFiltro).then(response => {
            setRow(response.data);
        }).catch(err => {
            mensagemErro(err.response.data);
        })
    }

    return (
        <Card title="Consulta Lançamento">
            <div className="row">
                <div className="col-md-6">
                    <div className="bs-component">
                        <FormGroup htmlFor="inputDescricao" label="Descrição">
                            <input type="text" className="form-control"
                                placeholder="Digite uma descrição"
                                id="descricao"
                                name="descricao"
                                onChange={e => setDescricao(e.target.value)}
                                value={descricao}
                                maxLength="50" />
                        </FormGroup>
                        <FormGroup htmlFor="inputAno" label="Ano">
                            <input type="text" className="form-control"
                                placeholder="Digite o ano"
                                id="ano"
                                name="ano"
                                onChange={e => setAno(e.target.value)}
                                value={ano}
                                maxLength="4" />
                        </FormGroup>
                        <FormGroup htmlFor="inputMes" label="Mês">
                            <SelectMenu className="form-control"
                                lista={meses}
                                value={mes}
                                onChange={e => setMes(e.target.value)} />
                        </FormGroup>
                        <FormGroup htmlFor="inputTipo" label="Tipo Lançamento">
                            <SelectMenu className="form-control"
                                lista={tipos}
                                value={tipo}
                                onChange={e => setTipo(e.target.value)} />
                        </FormGroup>
                        <div style={{ paddingTop: '10px' }}>
                            <button type="button" className="btn btn-sm btn-success" onClick={buscarLancamentos} style={{ marginRight: '10px' }}>Buscar</button>
                            <button type="button" className="btn btn-sm btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-header">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={rows}></LancamentosTable>
                        </div>
                    </div>
                </div>
            </div>
        </Card >
    );
}

export default withRouter(ConsultaLancamento);