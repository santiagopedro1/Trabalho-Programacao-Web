<script setup>
import { ref } from 'vue'
let isConfirming = ref(false)
let idDeletado = ref('')

function confirmadoDelete() {
	//Deletar elemento do bd
	console.log('Deletando ' + idDeletado.value)
}

defineExpose({
	isConfirming,
	idDeletado
})
</script>

<template>
	<q-dialog
		v-model="isConfirming"
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
					@click="isConfirming = false"
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

<style scoped></style>