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

}

export default LancamentoService;