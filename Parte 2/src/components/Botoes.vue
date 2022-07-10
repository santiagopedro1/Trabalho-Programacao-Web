<script setup>
import FormDialog from './FormDialog.vue'
import { ref } from 'vue'

let isAdding = ref(false)

function onClick() {
    isAdding = true
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
    <FormDialog :isAdding="isAdding" />
</template>
