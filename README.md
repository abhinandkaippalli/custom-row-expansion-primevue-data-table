# custom-row-expansion
This code demonstrate how to expand a row without using an expander in a column, solely based on a button click.

# Button Click Handling
The "Click Here" button within the DataTable triggers a method called onExpandRow when clicked.
This method takes the id of the row (student) as a parameter.

    <Column header="View Marks">
      <template #body="slotProps">
        <Button class="p-1" label="Click Here" @click.stop="onExpandRow(slotProps.data.id)" />
      </template>
    </Column>

![Screenshot 2024-03-10 162441](https://github.com/abhinandkaippalli/custom-row-expansion-primevue-data-table/assets/114295910/ca53be37-d475-4a01-8f8d-42b23ad04ccd)
![Screenshot 2024-03-10 163023](https://github.com/abhinandkaippalli/custom-row-expansion-primevue-data-table/assets/114295910/feb6aa67-5806-4def-a4ec-478f9405d027)

# Expansion Logic
The onExpandRow function toggles the expansion state of the row corresponding to the clicked button.
It checks whether the id of the clicked row exists in the state.expandedRows object.
If it exists, it means the row is already expanded, so it removes the id from the expandedRows object to collapse it.
If it doesn't exist, it means the row is not expanded, so it adds the id to the expandedRows object to expand it.

    const onExpandRow = (id) => {
      const checkProp = id in state.expandedRows
      if (checkProp) delete state.expandedRows[id]
      else state.expandedRows[id] = true
      state.expandedRows = { ...state.expandedRows }
    }

# Reactivity
The state.expandedRows object is reactive, meaning any changes to it will trigger re-renders in the template.
This allows for dynamic expansion and collapsing of rows without explicitly using an expander column in the DataTable.

# Template Rendering
The template utilizes Vue's reactivity system to render expanded rows dynamically.
It uses the v-model directive to bind the expandedRows object to the DataTable component.
When a row's id is present in the expandedRows object, the corresponding row is expanded to display additional details.

# Final Output
https://github.com/abhinandkaippalli/custom-row-expansion-primevue-data-table/assets/114295910/35197e85-fb4e-4265-8458-9312b2109ef4




