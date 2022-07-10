<script setup>
import { ref } from 'vue'
import { columns, rows } from '../teste'

function excluir(alvo) {
    // console.log(`Excluindo ID ${alvo}`)
    console.log(alvo.row.id, alvo.row.tipo, alvo.row.marca, alvo.row.preço, alvo.row.quantidade)
}

function editar(alvo) {
    // console.log(`Excluindo ID ${alvo}`)
    console.log(alvo.row.id, alvo.row.tipo, alvo.row.marca, alvo.row.preço, alvo.row.quantidade)
}

const pagination = ref({
    rowsPerPage: 0
})
let filter = ref('')
</script>

<template>
    <div class="row justify-center">
        <q-table
            title="Produtos"
            :rows="rows"
            :columns="columns"
            row-key="id"
            table-header-class="text-weight-bold"
            hide-bottom
            flat
            dark
            style="height: 400px"
            v-model:pagination="pagination"
            :rows-per-page-options="[0]"
            :filter="filter"
            :grid="$q.screen.lt.md"
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
        </q-table>
    </div>
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
