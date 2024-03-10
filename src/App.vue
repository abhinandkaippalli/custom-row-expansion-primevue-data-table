<template>
  <DataTable v-model:expandedRows="state.expandedRows" :value="state.markList" dataKey="id" :border="true" showGridlines responsiveLayout="scroll">
    <Column field="name" header="Name"></Column>
    <Column field="schoolId" header="School Id"></Column>
    <Column header="View Marks">
      <template #body="slotProps">
        <Button class="p-1" label="Click Here" @click.stop="onExpandRow(slotProps.data.id)" />
      </template>
    </Column>
    <template #expansion="slotProps">
      <DataTable :value="slotProps.data.expand">
        <Column field="subject" header="Subject"></Column>
        <Column field="mark" header="Mark"></Column>
      </DataTable>
    </template>
  </DataTable>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column'
import Button from 'primevue/button'
import { StudentMark } from './service/ProsductService'
const state = reactive({
  markList: [],
  expandedRows: {}
})
onMounted(() => {
  state.markList = StudentMark.marks
})
const onExpandRow = (id) => {
  const checkProp = id in state.expandedRows
  if (checkProp) delete state.expandedRows[id]
  else state.expandedRows[id] = true
  state.expandedRows = { ...state.expandedRows }
}
</script>
