<script setup>
import { onMounted } from 'vue'

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
		name: 'descrição',
		align: 'center',
		label: 'DESCRIÇÃO',
		field: 'descrição',
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

let loading = $ref(true)
let logsRow = $ref([])
const pagination = {
	rowsPerPage: 0,
	sortBy: 'data',
	descending: true
}

onMounted(() => {
	fetch('http://localhost:9000/logs')
		.then(response => response.json())
		.then(data => {
			logsRow = data
			loading = false
		})
})
</script>

<template>
	<q-table
		title="Logs"
		:rows="logsRow"
		:columns="logsColumns"
		row-key="data"
		binary-state-sort
		v-model:pagination="pagination"
		hide-bottom
		:grid="$q.screen.lt.md"
		dark
	>
		<template v-slot:body-cell-descrição="props">
			<td
				class="text-center"
				v-if="props.row.ação === 'Editar'"
			>
				{{ props.row.descrição.split(/\n/gm)[0] }}<br />{{ props.row.descrição.split(/\n/gm)[1] }}
			</td>
			<td
				class="text-center"
				v-else
			>
				{{ props.row.descrição }}
			</td>
		</template>
	</q-table>
</template>
