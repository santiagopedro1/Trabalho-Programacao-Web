<script setup>
import { onMounted } from 'vue'

import { GetAllProducts } from '../DB_functions'

const columns = [
	{
		name: '_id',
		required: true,
		label: 'ID',
		align: 'left',
		field: '_id',
		sortable: true
	},
	{ name: 'categoria', label: 'CATEGORIA', field: 'categoria', sortable: true },
	{ name: 'marca', label: 'MARCA', field: 'marca', sortable: true },
	{ name: 'modelo', label: 'MODELO', field: 'modelo' },
	{
		name: 'preço',
		label: 'PREÇO',
		field: 'preço',
		sortable: true,
		format: (val, row) => Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(val)
	},
	{ name: 'qtd', label: 'QUANTIDADE', field: 'quantidade', sortable: true },
	{ name: 'ações', label: 'AÇÕES', field: 'ações', align: 'center' }
]
const pagination = $ref({
	rowsPerPage: 0,
	sortBy: '_id',
	descending: false
})
let filter = $ref('')
let loading = $ref(true)
let rows = $ref([])

onMounted(async () => {
	rows = await GetAllProducts()
	loading = false
})
</script>

<template>
	<div class="column">
		<div class="self-center q-mb-md">
			<q-btn
				color="primary"
				icon="add"
				label="ADICIONAR PRODUTO"
				@click="$emit('EvntModal', 'Adicionar')"
			/>
		</div>
		<div class="self-center">
			<q-table
				title="Produtos"
				:rows="rows"
				:columns="columns"
				row-key="_id"
				binary-state-sort
				:loading="loading"
				hide-bottom
				virtual-scroll
				v-model:pagination="pagination"
				:filter="filter"
				:grid="$q.screen.lt.md"
				flat
				dark
			>
				<template v-slot:body-cell-ações="props">
					<q-td :props="props">
						<q-btn
							dense
							round
							flat
							color="grey"
							@click="$emit('EvntModal', 'Editar', props.row)"
							icon="edit"
						>
							<q-tooltip>Editar produto</q-tooltip>
						</q-btn>
						<q-btn
							dense
							round
							flat
							color="grey"
							@click="$emit('EvntConfirm', props.row)"
							icon="delete"
						>
							<q-tooltip>Excluir produto</q-tooltip>
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
	</div>
</template>

<style>
.q-table__container {
	height: 450px;
}
table thead th:nth-child(n) {
	font-size: 1.3rem;
	font-weight: bold;
}

table tbody td:nth-child(n) {
	font-size: 1.1rem;
}
</style>
