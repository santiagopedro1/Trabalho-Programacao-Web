export const columns = [
    {
        name: 'id',
        required: true,
        label: 'ID',
        align: 'left',
        field: 'id',
        sortable: true
    },
    { name: 'tipo', label: 'TIPO', field: 'tipo', sortable: true },
    { name: 'marca', label: 'MARCA', field: 'marca', sortable: true },
    { name: 'preço', label: 'PREÇO (R$)', field: 'preço', sortable: true },
    { name: 'qtd', label: 'QUANTIDADE', field: 'quantidade', sortable: true },
    { name: 'ações', label: 'AÇÕES', field: 'ações', align: 'center' }
]
export const rows = [
    { id: 1, tipo: 'Notebook', marca: 'Dell', modelo: 'iasjfiasj', preço: 2000, quantidade: 10 },
    { id: 2, tipo: 'Mouse', marca: 'Logitech', preço: 50, quantidade: 20 },
    { id: 3, tipo: 'Teclado', marca: 'Logitech', preço: 100, quantidade: 30 },
    { id: 4, tipo: 'Monitor', marca: 'LG', preço: 500, quantidade: 40 },
    { id: 5, tipo: 'Notebook', marca: 'Dell', modelo: 'iasjfiasj', preço: 2000, quantidade: 10 },
    { id: 6, tipo: 'Teclado', marca: 'Logitech', preço: 100, quantidade: 30 },
    { id: 7, tipo: 'Monitor', marca: 'LG', preço: 500, quantidade: 40 },
    { id: 8, tipo: 'Notebook', marca: 'Dell', preço: 2000, quantidade: 10 },
    { id: 9, tipo: 'Mouse', marca: 'Logitech', preço: 50, quantidade: 20 },
    { id: 10, tipo: 'Teclado', marca: 'Logitech', preço: 100, quantidade: 30 }
]

export const logsRow = [
    {
        ação: 'Adicionar',
        timestamp: '2020-01-01T00:00:00.000Z',
        produto_alvo: { id: 1, tipo: 'Notebook', marca: 'Dell' }
    },
    {
        ação: 'Adicionar',
        timestamp: '2020-01-01T01:00:00.000Z',
        produto_alvo_id: 2
    },
    {
        ação: 'Adicionar',
        timestamp: '2020-01-01T02:00:00.000Z',
        produto_alvo_id: 3
    },
    {
        ação: 'Adicionar',
        timestamp: '2020-01-01T03:00:00.000Z',
        produto_alvo_id: 4
    },
    {
        ação: 'Adicionar',
        timestamp: '2020-01-01T04:00:00.000Z',
        produto_alvo_id: 5
    },
    {
        ação: 'Remover',
        timestamp: '2020-01-01T05:00:00.000Z',
        produto_alvo_id: 5
    }
]
export const logsColumns = [
    {
        name: 'ação',
        required: true,
        label: 'AÇÃO',
        align: 'center',
        field: 'ação',
        sortable: false
    },
    { name: 'produto_alvo_id', align: 'center', label: 'PRODUTO ALVO', field: 'produto_alvo_id', sortable: false },
    { name: 'timestamp', align: 'center', label: 'TIMESTAMP', field: 'timestamp', sortable: false }
]
