<script setup>
import { logs } from '../teste'
let logss = logs.reverse()
</script>

<template>
    <div class="row justify-center">
        <q-list
            bordered
            separator
        >
            <q-item v-for="item in logss">
                <q-item-section>{{ item }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<style scoped></style>
