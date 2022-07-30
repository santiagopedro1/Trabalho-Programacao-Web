<script setup>
import BotaoDialogsVue from './components/Botao&Dialogs.vue'
import Tabela from './components/Tabela.vue'
import TabelaLogs from './components/TabelaLogs.vue'

import { ref } from 'vue'

const tab = ref('prod')
</script>

<template>
	<q-tabs
		class="text-white bg-black"
		v-model="tab"
		active-color="green"
	>
		<q-tab
			name="prod"
			label="Produtos"
		/>
		<q-tab
			name="logs"
			label="Logs"
		/>
	</q-tabs>

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
			<div class="column">
				<div class="self-center q-mb-md">
					<q-btn
						color="primary"
						icon="add"
						label="ADICIONAR PRODUTO"
					/>
				</div>
				<Tabela />
			</div>
			<BotaoDialogsVue />
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
