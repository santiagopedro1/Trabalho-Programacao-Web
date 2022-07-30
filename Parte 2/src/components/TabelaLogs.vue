<script setup>
import { logsRow, logsColumns } from '../teste'

const pagination = {
    rowsPerPage: 0,
    sortBy: 'timestamp',
    descending: true
}
</script>

<template>
    <q-table
        title="Logs"
        :rows="logsRow"
        :columns="logsColumns"
        row-key="timestamp"
        binary-state-sort
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
        hide-bottom
    />
</template>
