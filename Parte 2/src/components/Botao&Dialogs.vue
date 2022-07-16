<script setup>
import { ref } from 'vue'

let isAdding = ref(false)

let produto_alvo = ref({ id: '', tipo: '', marca: '', preço: '', quantidade: '' })

function onClick() {
    isAdding.value = true
}

function onSubmit() {
    console.log('Adicionando...')
}
</script>

<template>
    <div class="row justify-center q-mb-sm">
        <q-btn
            class="q-mx-sm"
            size="lg"
            round
            color="info"
            icon="add"
            @click="onClick"
        />
    </div>

    <!-- Dialog para adicionar produtos -->
    <q-dialog
        v-model="isAdding"
        persistent
    >
        <div class="bg-white q-py-md q-px-lg">
            <p class="text-h4 q-mx-md">Adicionar produto</p>
            <q-form
                @submit="onSubmit"
                class="q-gutter-md"
            >
                <q-input
                    v-model="produto_alvo.id"
                    type="text"
                    label="ID"
                    :rules="[val => !!val || 'ID é obrigatório', val => /^[0-9]*$/.test(val) || 'ID deve ser um número']"
                    dense
                />
                <q-input
                    v-model="produto_alvo.tipo"
                    type="text"
                    label="Tipo"
                    :rules="[val => !!val || 'Tipo é obrigatório']"
                />
                <q-input
                    v-model="produto_alvo.marca"
                    type="text"
                    label="Marca"
                    :rules="[val => !!val || 'Marca é obrigatório']"
                />
                <q-input
                    v-model="produto_alvo.preço"
                    type="text"
                    label="Preço"
                    :rules="[val => !!val || 'Preço é obrigatório', val => /^\d+(,\d{1,2})?$/.test(val) || 'Preço deve ser um número']"
                />
                <q-input
                    v-model="produto_alvo.qtd"
                    type="text"
                    label="Quantidade"
                    :rules="[val => !!val || 'Quantidade é obrigatório', val => /^[0-9]*$/.test(val) || 'Quantidade deve ser um número']"
                />
                <div>
                    <q-btn
                        label="Adicionar"
                        type="submit"
                        color="green"
                    />
                    <q-btn
                        label="Cancelar"
                        color="red"
                        flat
                        class="q-ml-sm"
                        @click="isAdding = false"
                    />
                </div>
            </q-form>
        </div>
    </q-dialog>
    <!-- Fim -->
</template>
