<script setup>
import Botoes from './components/Botoes.vue'
import Tabela from './components/Tabela.vue'
import logs from './components/logs.vue'
import Confirm from './components/Confirm.vue'

import { ref } from 'vue'

const tab = ref('prod')
const botoes = ref('')
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
        keep-alive
    >
        <q-tab-panel
            name="prod"
            class="bg-grey-4"
        >
            <Botoes ref="botoes" />
            <Tabela class="q-mb-lg" />
        </q-tab-panel>

        <q-tab-panel
            name="logs"
            class="bg-grey-4"
        >
            <logs />
        </q-tab-panel>
    </q-tab-panels>
</template>
