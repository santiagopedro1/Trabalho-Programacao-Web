<script setup>
import { ref } from 'vue'

const gatilho = {
	ação: ref(''),
	mostrar: ref(false),
	produto_alvo: {
		_id: ref(''),
		tipo: ref(''),
		marca: ref(''),
		modelo: ref(''),
		preço: ref(''),
		quantidade: ref('')
	}
}

function onClick() {
	mostrar.value = true
}

function onSubmit() {
	console.log('Adicionando...')
}

defineExpose({
	gatilho
})
</script>

<template>
	<q-dialog
		v-model="gatilho.mostrar.value"
		persistent
	>
		<div class="bg-white q-py-md q-px-lg">
			<p class="text-h4 q-mx-md">{{ gatilho.ação.value }} produto</p>
			<q-form
				@submit="onSubmit"
				class="q-gutter-md"
			>
				<q-input
					v-model="gatilho.produto_alvo._id.value"
					type="text"
					label="ID"
					:rules="[val => !!val || 'ID é obrigatório', val => /^[0-9]*$/.test(val) || 'ID deve ser um número']"
					dense
					:disable="gatilho.ação.value === 'Editar'"
				/>
				<q-input
					v-model="gatilho.produto_alvo.tipo.value"
					type="text"
					label="Tipo"
					:rules="[val => !!val || 'Tipo é obrigatório']"
					dense
					:disable="gatilho.ação.value === 'Editar'"
				/>
				<q-input
					v-model="gatilho.produto_alvo.marca.value"
					type="text"
					label="Marca"
					:rules="[val => !!val || 'Marca é obrigatório']"
					dense
					:disable="gatilho.ação.value === 'Editar'"
				/>
				<q-input
					v-model="gatilho.produto_alvo.modelo.value"
					type="text"
					label="Modelo"
					:rules="[val => !!val || 'Modelo é obrigatório']"
					dense
					:disable="gatilho.ação.value === 'Editar'"
				/>
				<q-input
					v-model="gatilho.produto_alvo.preço.value"
					type="text"
					label="Preço"
					:rules="[val => !!val || 'Preço é obrigatório', val => /^\d+(,\d{1,2})?$/.test(val) || 'Preço deve ser um número']"
					dense
				/>
				<q-input
					v-model="gatilho.produto_alvo.quantidade.value"
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
						@click="gatilho.mostrar.value = false"
					/>
				</div>
			</q-form>
		</div>
	</q-dialog>
</template>