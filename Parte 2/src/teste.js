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
    { id: 1, tipo: 'Notebook', marca: 'Dell', preço: 2000, quantidade: 10 },
    { id: 2, tipo: 'Mouse', marca: 'Logitech', preço: 50, quantidade: 20 },
    { id: 3, tipo: 'Teclado', marca: 'Logitech', preço: 100, quantidade: 30 },
    { id: 4, tipo: 'Monitor', marca: 'LG', preço: 500, quantidade: 40 },
    { id: 5, tipo: 'Mouse', marca: 'Logitech', preço: 50, quantidade: 20 },
    { id: 6, tipo: 'Teclado', marca: 'Logitech', preço: 100, quantidade: 30 },
    { id: 7, tipo: 'Monitor', marca: 'LG', preço: 500, quantidade: 40 },
    { id: 8, tipo: 'Notebook', marca: 'Dell', preço: 2000, quantidade: 10 },
    { id: 9, tipo: 'Mouse', marca: 'Logitech', preço: 50, quantidade: 20 },
    { id: 10, tipo: 'Teclado', marca: 'Logitech', preço: 100, quantidade: 30 }
]

export const logs = [
    'Adicionado: ID: 1 - Notebook - Marca: Dell - R$ 2000 - 10 itens em 01/01/2020 00:00:00',
    'Adicionado: ID: 2 - Mouse - Marca: Logitech - R$ 50 - 20 itens em 01/01/2020 00:00:00',
    'Adicionado: ID: 3 - Teclado - Marca: Logitech - R$ 100 - 30 itens em 01/01/2020 00:00:00',
    'Adicionado: ID: 4 - Headphones - Marca: Logitech - R$ 90 - 40 itens em 01/01/2020 00:00:00',
    'Removido: 40 unidades do produto ID: 4 - Headphones - Marca: Logitech em 01/01/2020 00:00:00'
]
