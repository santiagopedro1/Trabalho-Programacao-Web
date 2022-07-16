<script setup>
import { ref } from 'vue'
import { columns, rows } from '../teste'

const pagination = ref({
    rowsPerPage: 0
})
let produto_alvo = ref({})
let filter = ref('')
let loading = ref(false)
let Editando = ref(false)

function excluir(alvo) {
    console.log('Excluindo...')
    console.log(alvo.row.id, alvo.row.tipo, alvo.row.marca, alvo.row.preço, alvo.row.quantidade)
}

function editar(alvo) {
    console.log(alvo.row)
    produto_alvo.value = alvo.row
    console.log('Editando...')
    console.log(produto_alvo.id, produto_alvo.tipo, produto_alvo.marca, produto_alvo.preço, produto_alvo.quantidade)
    Editando.value = true
}

function onSubmit() {
    console.log(`Editado :) ${produto_alvo.id}`)
}

function onClick() {
    loading.value = !loading.value
}
</script>

<template>
    <q-btn
        color="primary"
        label="Trocar Loading"
        @click="onClick"
    />
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
            grid-header
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
                    ></q-btn>
                    <q-btn
                        dense
                        round
                        flat
                        color="grey"
                        @click="excluir(props)"
                        icon="delete"
                    ></q-btn>
                </q-td>
            </template>

            <template v-slot:top-right="props">
                <q-input
                    dark
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
            <template v-slot:loading>
                <q-inner-loading
                    showing
                    color="primary"
                />
            </template>
        </q-table>
    </div>
    <!-- Modal para Editar -->
    <q-dialog
        v-model="Editando"
        persistent
    >
        <div class="bg-white q-py-md q-px-lg">
            <p class="text-h4 q-mx-md">Editar produto</p>
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
                    disable
                />
                <q-input
                    v-model="produto_alvo.tipo"
                    type="text"
                    label="Tipo"
                    :rules="[val => !!val || 'Tipo é obrigatório']"
                    dense
                    disable
                />
                <q-input
                    v-model="produto_alvo.marca"
                    type="text"
                    label="Marca"
                    :rules="[val => !!val || 'Marca é obrigatório']"
                    dense
                    disable
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
                        @click="Editando = false"
                    />
                </div>
            </q-form>
        </div>
    </q-dialog>
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
