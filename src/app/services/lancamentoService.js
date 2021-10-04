import ApiService from "../apiservice";

class LancamentoService extends ApiService {

    buscarLancamentos(lancamentoFiltro) {
        let params = `?usuario=${lancamentoFiltro.usuarioId}`

        if (lancamentoFiltro.ano && lancamentoFiltro.ano !== '') params += `&ano=${lancamentoFiltro.ano}`
        
        if (lancamentoFiltro.mes && lancamentoFiltro.mes !== '') params += `&mes=${lancamentoFiltro.mes}`
        
        if (lancamentoFiltro.tipo && lancamentoFiltro.tipo !== '') params += `&tipo=${lancamentoFiltro.tipo}`

        if (lancamentoFiltro.descricao && lancamentoFiltro.descricao.trim() !== '') params += `&descricao=${lancamentoFiltro.descricao.trim()}`

        return this.get(`/api/lancamentos${params}`)
    }

    obterListaMeses() {
        return [
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
    }

    obterTipo() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Despesa', value: 'DESPESA' },
            { label: 'Receita', value: 'RECEITA' }
        ];
    }

}

export default LancamentoService;