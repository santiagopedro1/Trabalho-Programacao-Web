<script setup>
import { ref, onMounted } from 'vue'

import Confirm from './Confirm.vue'

const columns = [
	{
		name: 'id',
		required: true,
		label: 'ID',
		align: 'left',
		field: '_id',
		sortable: true
	},
	{ name: 'tipo', label: 'TIPO', field: 'tipo', sortable: true },
	{ name: 'marca', label: 'MARCA', field: 'marca', sortable: true },
	{ name: 'modelo', label: 'MODELO', field: 'modelo', sortable: true },
	{ name: 'preço', label: 'PREÇO (R$)', field: 'preço', sortable: true, format: (val, row) => `${val.toFixed(2)}` },
	{ name: 'qtd', label: 'QUANTIDADE', field: 'quantidade', sortable: true },
	{ name: 'ações', label: 'AÇÕES', field: 'ações', align: 'center' }
]

const confirm = ref('')

const pagination = ref({
	rowsPerPage: 0
})
let produto_alvo = ref({})
let filter = ref('')
let loading = ref(true)
let Editando = ref(false)
let rows = ref([])

function gatilhoExcluir(alvo) {
	confirm.value.isConfirming = true
	confirm.value.idDeletado = alvo
}

function editar(alvo) {
	const result = `${alvo.row._id}, ${alvo.row.tipo}, ${alvo.row.marca}, ${alvo.row.modelo}, ${alvo.row.preço}, ${alvo.row.quantidade}`
	console.log('Editar...\n' + result)
}

function onSubmit() {
	console.log(`Editado :) ${produto_alvo.id}`)
}

onMounted(() => {
	fetch('http://localhost:9000/produtos')
		.then(response => response.json())
		.then(data => {
			rows.value = data
			loading.value = false
		})
})
</script>

<template>
	<div class="row justify-center">
		<q-table
			title="Produtos"
			:rows="rows"
			:columns="columns"
			row-key="id"
			binary-state-sort
			:loading="loading"
			hide-bottom
			flat
			dark
			style="height: 400px"
			v-model:pagination="pagination"
			:rows-per-page-options="[0]"
			:filter="filter"
			:grid="$q.screen.lt.md"
		>
			<template v-slot:body-cell-ações="props">
				<q-td :props="props">
					<q-btn
						dense
						round
						flat
						color="grey"
						@click="editar(props)"
						icon="edit"
					>
						<q-tooltip> Editar </q-tooltip>
					</q-btn>
					<q-btn
						dense
						round
						flat
						color="grey"
						@click="gatilhoExcluir(props.row._id)"
						icon="delete"
					>
						<q-tooltip> Excluir </q-tooltip>
					</q-btn>
				</q-td>
			</template>

			<template v-slot:top-right="props">
				<q-input
					:dark="!$q.screen.lt.md"
					outlined
					dense
					debounce="300"
					v-model="filter"
					placeholder="Filtrar"
				>
					<template v-slot:append>
						<q-icon name="search" />
					</template>
				</q-input>
			</template>

			<template v-slot:item="props">
				<div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
					<q-card dark>
						<q-separator />
						<q-list
							dense
							dark
						>
							<q-item
								v-for="col in props.cols.filter(col => col.name !== 'ações')"
								:key="col.name"
								dark
							>
								<q-item-section>
									<q-item-label>{{ col.label }}</q-item-label>
								</q-item-section>
								<q-item-section side>
									<q-item-label caption>{{ col.value }}</q-item-label>
								</q-item-section>
							</q-item>
							<!-- ações -->
							<q-item dark>
								<q-item-section>
									<q-item-label>AÇÕES</q-item-label>
								</q-item-section>
								<q-item-section side>
									<div class="row">
										<q-btn
											dense
											round
											flat
											color="grey"
											@click="editar(props)"
											icon="edit"
										>
											<q-tooltip> Editar </q-tooltip>
										</q-btn>
										<q-btn
											dense
											round
											flat
											color="grey"
											@click="excluir(props)"
											icon="delete"
										>
											<q-tooltip> Excluir </q-tooltip>
										</q-btn>
									</div>
								</q-item-section>
							</q-item>
							<!-- -->
						</q-list>
					</q-card>
				</div>
			</template>
		</q-table>
	</div>

	<Confirm ref="confirm" />
</template>

<style>
table thead th:nth-child(n):not(i) {
	font-size: 1.15rem;
	font-weight: bold;
}

table tbody td:nth-child(n) {
	font-size: 1.15rem;
}
</style>
