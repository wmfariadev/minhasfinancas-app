import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/selectMenu';
import LancamentosTable from './lancamentosTable';
import LancamentoService from '../../app/services/lancamentoService';

import * as messages from '../../components/toastr'
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';

const ConsultaLancamento = () => {
    const service = new LancamentoService();
    let userAccess = JSON.parse(localStorage.getItem("_user"));

    const [descricao, setDescricao] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [tipo, setTipo] = useState('');
    const [rows, setRow] = useState([]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [lancamentoDeletar, setLancamentoDeletar] = useState({});

    const meses = service.obterListaMeses();
    const tipos = service.obterTipo();

    let lancamentoFiltro = {
        usuarioId: userAccess.id,
        ano: ano,
        mes: mes,
        tipo: tipo,
        descricao: descricao
    }

    const buscarLancamentos = () => {

        if (!ano) {
            messages.mensagemErro('Ano não informado!');
            return false;
        }

        service.buscarLancamentos(lancamentoFiltro).then(response => {
            setRow(response.data);

            if (response.data.length === 0) {
                messages.mensagemAlerta('Nenhum resultado encontrado!')
            }
        }).catch(err => {
            messages.mensagemErro(err.response.data);
        })
    }

    const editar = (id) => {
        console.log(`Editar ${id}`);
    }

    const abrirConfirmacao = (lancamento) => {
        setShowConfirmDialog(true);
        setLancamentoDeletar(lancamento);
    }

    const deletar = () => {
        // TODO: validar a remoção do item do array
        service.deletarLancamento(lancamentoDeletar.id).then(response => {
            // const lancamentos = rows;
            // const index = lancamentos.indexOf(lancamento);
            // lancamentos.splice(index, 1);
            // setRow(lancamentos);
            buscarLancamentos();
            messages.mensagemSucesso('Lançamento deletado com sucesso!');
        }).catch(err => {
            messages.mensagemErro(err.response.data);
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
                            <LancamentosTable lancamentos={rows} deleteAction={abrirConfirmacao} editAction={editar}></LancamentosTable>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ConfirmDialog header="Confirmação de exclusão" 
                    visible={showConfirmDialog} style={{ width: '50vw' }} 
                    onHide={() => setShowConfirmDialog(false)} 
                    modal={true}
                    icon={'pi pi-info-circle'}
                    acceptClassName={'p-button-danger'}
                    acceptLabel="Sim"
                    rejectLabel="Não"
                    accept={deletar}
                    message="Confirma a exclusão deste registro?" />
            </div>
        </Card >
    );
}

export default withRouter(ConsultaLancamento);