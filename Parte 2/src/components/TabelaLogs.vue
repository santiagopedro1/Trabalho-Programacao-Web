<script setup>
import { ref, onMounted } from 'vue'

const logsColumns = [
	{
		name: 'ação',
		required: true,
		label: 'AÇÃO',
		align: 'center',
		field: 'ação',
		sortable: false
	},
	{
		name: 'produto_alvo',
		align: 'center',
		label: 'PRODUTO ALVO',
		field: 'produto',
		format: (val, row) => `ID: ${val._id}, ${val.tipo} ${val.marca} ${val.modelo}`,
		sortable: false
	},
	{
		name: 'data',
		align: 'center',
		label: 'DATA E HORA',
		field: 'data',
		format: (val, row) => `${new Date(val).toLocaleString('pt-BR')}`,
		sortable: false
	}
]

const filter = ref('')
let logsRow = ref([])
const pagination = {
	rowsPerPage: 0,
	sortBy: 'data',
	descending: true
}

onMounted(() => {
	fetch('http://localhost:9000/logs')
		.then(response => response.json())
		.then(data => {
			logsRow.value = data
			loading.value = false
		})
})
</script>

<template>
	<q-table
		title="Logs"
		:rows="logsRow"
		:columns="logsColumns"
		row-key="timestamp"
		binary-state-sort
		v-model:pagination="pagination"
		:rows-per-page-options="[0]"
		hide-bottom
	/>
</template>
