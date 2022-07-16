<script setup>
import { logsRow, logsColumns } from '../teste'
</script>

<template>
    <q-table
        title="Logs"
        :rows="logsRow"
        :columns="logsColumns"
        row-key="timestamp"
    />
</template>
