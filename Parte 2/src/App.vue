<script setup>
import Modal from './components/Modal.vue'
import Produtos from './components/Produtos.vue'
import TabelaLogs from './components/TabelaLogs.vue'
import Confirm from './components/Confirm.vue'

const tab = $ref('prod')
const modal = $ref('')
const confirm = $ref('')

function mostrarModal(ação, produto) {
	modal.mostrar = true
	modal.ação = ação
	for (const key in produto) {
		if (Object.hasOwnProperty.call(produto, key)) {
			modal.produto_alvo[key] = produto[key]
		}
	}
	modal.dadosOriginais = produto
}

function mostrarConfirm(produto) {
	confirm.mostrar = true
	confirm.produto = produto
}
</script>

<template>
	<q-toolbar class="bg-black cloumn justify-center">
		<q-toolbar-title class="text-white shrink">Inventory Manager</q-toolbar-title>
		<div v-if="!$q.screen.lt.md">
			<q-tabs
				class="text-white"
				v-model="tab"
				active-color="primary"
			>
				<q-tab name="prod"><strong>PRODUTOS</strong></q-tab>
				<q-tab name="logs"><strong>LOGS</strong></q-tab>
			</q-tabs>
		</div>
		<q-space />
	</q-toolbar>

	<div v-if="$q.screen.lt.md">
		<q-toolbar class="bg-black column justify-center">
			<q-tabs
				class="text-white"
				v-model="tab"
				active-color="primary"
			>
				<q-tab name="prod"><strong>PRODUTOS</strong></q-tab>
				<q-tab name="logs"><strong>LOGS</strong></q-tab>
			</q-tabs>
		</q-toolbar>
	</div>

	<q-tab-panels
		v-model="tab"
		animated
		transition-prev="jump-left"
		transition-next="jump-right"
	>
		<q-tab-panel
			name="prod"
			class="bg-grey-4"
		>
			<!-- Painel Produtos -->

			<Produtos
				@EvntModal="mostrarModal"
				@EvntConfirm="mostrarConfirm"
			/>

			<Modal ref="modal" />
			<Confirm ref="confirm" />
			<!---->
		</q-tab-panel>

		<q-tab-panel
			name="logs"
			class="bg-grey-4"
		>
			<div class="row justify-center">
				<TabelaLogs />
			</div>
		</q-tab-panel>
	</q-tab-panels>
</template>

<style>
/* css reset */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
