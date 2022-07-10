<script setup>
let operação = ''
let isConfirming = true
</script>

<template>
    <q-dialog
        v-model="isConfirming"
        persistent
    >
        <div class="bg-white q-py-md q-px-lg">
            <p class="text-h3 q-mx-md">Confirmação</p>
            <p class="text-body1">Tem certeza que deseja {{ operação === 'deletar' ? 'excluir' : 'modificar' }} o elemento?</p>
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
                    type="submit"
                    color="green"
                />
            </div>
        </div>
    </q-dialog>
</template>

<style scoped></style>
