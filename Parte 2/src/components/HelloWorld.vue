<script setup>
import { ref } from 'vue'

const columns = [
    {
        name: 'id',
        required: true,
        label: 'ID',
        align: 'left',
        field: 'id',
        sortable: true
    },
    { name: 'tipo', align: 'right', label: 'TIPO', field: 'tipo', sortable: true },
    { name: 'marca', align: 'right', label: 'MARCA', field: 'marca', sortable: true },
    { name: 'preço', align: 'right', label: 'PREÇO (R$)', field: 'preço', sortable: true },
    { name: 'qtd', align: 'right', label: 'QUANTIDADE', field: 'qtd', sortable: true }
]

const rows = [
    {
        id: 1,
        tipo: 'Notebook',
        marca: 'Dell',
        preço: 2400,
        qtd: 4
    },
    {
        id: 2,
        tipo: 'Foda',
        marca: 'Foda',
        preço: 2400,
        qtd: 4
    },
    {
        id: 2,
        tipo: 'FodaFoda',
        marca: 'FodaFoda',
        preço: 2400,
        qtd: 4
    }
]

const isEditing = ref(false)
const selected = ref([])
const isAdding = ref(false)

function onclick() {
    isEditing.value = !isEditing.value
}
</script>

<template>
    <div class="row justify-center">
        <q-table
            v-if="isEditing"
            title="Produtos"
            :rows="rows"
            :columns="columns"
            row-key="id"
            table-header-class="text-weight-bold"
            hide-bottom
            flat
            selection="single"
            v-model:selected="selected"
        >
            <template v-slot:body="dados">
                <q-tr :dados="dados">
                    <q-td
                        auto-width
                        class="text-left"
                    >
                        <q-checkbox
                            checked-icon="delete"
                            unchecked-icon="delete"
                            color="white"
                            keep-color
                            dense
                            v-model="dados.selected"
                        />
                    </q-td>
                    <q-td
                        auto-width
                        class="text-right"
                        key="id"
                        :dados="dados"
                        >{{ dados.row.id }}</q-td
                    >
                    <q-td
                        auto-width
                        class="text-right"
                        key="tipo"
                        :dados="dados"
                        >{{ dados.row.tipo }}</q-td
                    >
                    <q-td
                        auto-width
                        class="text-right"
                        key="marca"
                        :dados="dados"
                        >{{ dados.row.marca }}</q-td
                    >
                    <q-td
                        auto-width
                        class="text-right"
                        key="preço"
                        :dados="dados"
                        >{{ dados.row.preço }}</q-td
                    >
                    <q-td
                        auto-width
                        class="text-right"
                        key="qtd"
                        :dados="dados"
                        >{{ dados.row.qtd }}</q-td
                    >
                </q-tr>
            </template>
        </q-table>
        <q-table
            v-else
            title="Produtos"
            :rows="rows"
            :columns="columns"
            row-key="name"
            hide-bottom
            flat
            class="bg-grey-4"
        />
    </div>

    <div class="row justify-center">
        <q-btn
            class="q-mx-sm"
            size="lg"
            round
            :color="!isEditing ? 'warning' : 'positive'"
            :icon="!isEditing ? 'edit' : 'check'"
            @click="onclick"
        />
        <q-btn
            class="q-mx-sm"
            size="lg"
            round
            color="info"
            icon="add"
            @click="isAdding = true"
        />
    </div>
    <q-dialog
        v-model="isAdding"
        persistent
    >
        <div class="bg-white q-pa-xl">
            <p class="text-h3">Adicionar produto</p>
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
            >
                <q-input
                    v-model="text"
                    type="text"
                    label="ID"
                />
                <q-input
                    v-model="text"
                    type="text"
                    label="Tipo"
                />
                <q-input
                    v-model="text"
                    type="text"
                    label="Marca"
                />
                <q-input
                    v-model="text"
                    type="text"
                    label="Preço"
                />
                <q-input
                    v-model="text"
                    type="text"
                    label="Quantidade"
                />
                <div>
                    <q-btn
                        label="Adicionar"
                        type="submit"
                        color="green"
                    />
                    <q-btn
                        label="fechar"
                        color="red"
                        flat
                        class="q-ml-sm"
                        v-close-popup
                    />
                </div>
            </q-form>
        </div>
    </q-dialog>
    <p>{{ JSON.stringify(selected[0]) }}</p>
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
