<script setup>
import { ref } from 'vue'

import { updateProduto, addProduto } from '../DB_functions.js'

let ação = ref('')
let mostrar = ref(false)
let produto_alvo = ref({
	_id: '',
	categoria: '',
	marca: '',
	modelo: '',
	preço: '',
	quantidade: ''
})
const dadosOriginais = ref('')

function limparAlvo() {
	produto_alvo.value = {
		_id: '',
		categoria: '',
		marca: '',
		modelo: '',
		preço: '',
		quantidade: ''
	}
	mostrar.value = false
}

function onSubmit() {
	switch (ação.value) {
		case 'Adicionar':
			addProduto([
				Number(produto_alvo.value._id),
				produto_alvo.value.categoria,
				produto_alvo.value.marca,
				produto_alvo.value.modelo,
				Number(produto_alvo.value.preço),
				Number(produto_alvo.value.quantidade)
			])
			limparAlvo()
			break

		case 'Editar':
			if (dadosOriginais.value.preço == produto_alvo.value.preço && dadosOriginais.value.quantidade == produto_alvo.value.quantidade) {
				console.log('foda')
				limparAlvo()
				return
			} else {
				const mudança =
					dadosOriginais.value.preço != produto_alvo.value.preço
						? { nome: 'preço', novo: produto_alvo.value.preço }
						: { nome: 'quantidade', novo: produto_alvo.value.quantidade }
				updateProduto(
					[
						Number(dadosOriginais.value._id),
						dadosOriginais.value.categoria,
						dadosOriginais.value.marca,
						dadosOriginais.value.modelo,
						Number(dadosOriginais.value.preço),
						Number(dadosOriginais.value.quantidade)
					],
					mudança
				)
			}
			limparAlvo()
			break
	}
}

defineExpose({
	ação,
	mostrar,
	produto_alvo,
	dadosOriginais
})
</script>

<template>
	<q-dialog
		v-model="mostrar"
		persistent
	>
		<div class="bg-white q-py-md q-px-lg">
			<p class="text-h4 q-mx-md">{{ ação }} produto</p>
			<q-form
				@submit.prevent="onSubmit"
				class="q-gutter-md"
			>
				<q-input
					v-model="produto_alvo._id"
					type="text"
					label="ID"
					:rules="[val => !!val || 'ID é obrigatório', val => /^[0-9]*$/.test(val) || 'ID deve ser um número']"
					dense
					:disable="ação === 'Editar'"
				/>
				<q-input
					v-model="produto_alvo.categoria"
					type="text"
					label="Categoria"
					:rules="[val => !!val || 'Categoria é obrigatório']"
					dense
					:disable="ação === 'Editar'"
				/>
				<q-input
					v-model="produto_alvo.marca"
					type="text"
					label="Marca"
					:rules="[val => !!val || 'Marca é obrigatório']"
					dense
					:disable="ação === 'Editar'"
				/>
				<q-input
					v-model="produto_alvo.modelo"
					type="text"
					label="Modelo"
					:rules="[val => !!val || 'Modelo é obrigatório']"
					dense
					:disable="ação === 'Editar'"
				/>
				<q-input
					v-model="produto_alvo.preço"
					type="text"
					label="Preço"
					:rules="[val => !!val || 'Preço é obrigatório', val => /^\d+(,\d{1,2})?$/.test(val) || 'Preço deve ser um número']"
					dense
				/>
				<q-input
					v-model="produto_alvo.quantidade"
					type="text"
					label="Quantidade"
					:rules="[val => !!val || 'Quantidade é obrigatório', val => /^[0-9]*$/.test(val) || 'Quantidade deve ser um número']"
					dense
				/>
				<div>
					<q-btn
						label="OK"
						type="submit"
						color="green"
					/>
					<q-btn
						label="Cancelar"
						color="red"
						flat
						class="q-ml-sm"
						@click="limparAlvo"
					/>
				</div>
			</q-form>
		</div>
	</q-dialog>
</template>
