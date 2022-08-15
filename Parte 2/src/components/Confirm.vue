<script setup>
import { ref } from 'vue'

import { deleteProduto } from '../DB_functions'

let mostrar = ref(false)
let produto = ref('')

function confirmadoDelete() {
	deleteProduto([
		Number(produto.value._id),
		produto.value.categoria,
		produto.value.marca,
		produto.value.modelo,
		Number(produto.value.preço),
		Number(produto.value.quantidade)
	])
	mostrar.value = false
}

defineExpose({
	mostrar,
	produto
})
</script>

<template>
	<q-dialog
		v-model="mostrar"
		persistent
	>
		<div class="bg-white q-py-md q-px-lg">
			<p class="text-h3 q-mx-md">Confirmação</p>
			<p class="text-body1">Tem certeza que deseja excluir este elemento?</p>
			<div class="row justify-end">
				<q-btn
					label="Cancelar"
					color="red"
					flat
					class="q-ml-sm"
					@click="mostrar = false"
				/>
				<q-btn
					label="Confirmar"
					color="green"
					@click="confirmadoDelete"
				/>
			</div>
		</div>
	</q-dialog>
</template>
