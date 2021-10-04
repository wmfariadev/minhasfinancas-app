import React from 'react'
import currencyFormat from 'currency-formatter'

const LancamentosTable = (props) => {

    const rows = props.lancamentos.map((lancamento, idx) => {
        let color = (idx % 2 === 0) ? "table-active" : "";
        
        return (
            <tr key={idx} className={color}>
                <th scope="row">{lancamento.descricao}</th>
                <td>{currencyFormat.format(lancamento.valor, {code: 'BRL'})}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.dataCadastro}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary" style={{marginRight: '10px'}}>Editar</button>
                    <button type="button" className="btn btn-sm btn-danger">Deletar</button>
                </td>
            </tr>
        );
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Data</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default LancamentosTable;