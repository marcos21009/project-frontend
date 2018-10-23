<template>
    <q-page padding class="docs-table">
        <p class="caption">Pagination, sorting & filtering happens on the server</p>
        <q-table
                ref="table"
                color="primary"
                title="Server-side Pagination"
                :data="serverData"
                :columns="columns"
                :filter="filter"
                :visible-columns="visibleColumns"
                selection="multiple"
                :selected.sync="selected"
                row-key="name"
                :pagination.sync="serverPagination"
                @request="request"
                :loading="loading"
        >
            <template slot="top-right" slot-scope="props">
                <q-search hide-underline v-model="filter"/>
                <q-table-columns
                        color="secondary"
                        class="q-mr-sm"
                        v-model="visibleColumns"
                        :columns="columns"
                />
                <!--<q-select
                        color="secondary"
                        v-model="actions"
                        :options="[
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Cell', value: 'cell' },
            { label: 'None', value: 'none' }
          ]"
                        hide-underline
                />-->
                <q-btn color="negative" flat round icon="delete" @click="deleteRow" />
            </template>
            <q-tr slot="body" slot-scope="props" :props="props">
                <q-td auto-width>
                    <q-checkbox color="primary" v-model="props.selected" />
                </q-td>
                <q-td key="desc" :props="props">
                    {{ props.row.name }}
                    <q-popup-edit v-model="props.row.name">
                        <q-field count>
                            <q-input v-model="props.row.name" />
                        </q-field>
                    </q-popup-edit>
                </q-td>
                <q-td key="calories" :props="props">
                    {{ props.row.calories }}
                    <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
                        <q-input type="number" v-model="props.row.calories" />
                    </q-popup-edit>
                </q-td>
                <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
                <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
                <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
                <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
                <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
                <q-td key="action" :props="props">
                    <q-td key="action" :props="props">
                        <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
                            <q-input type="number" v-model="props.row.calories" />
                        </q-popup-edit>
                    </q-td>
                </q-td>
            </q-tr>
        </q-table>
    </q-page>


</template>

<script>
    import tableData from 'assets/table-data'

    export default {
        data() {
            return {
                serverData: [],
                serverPagination: {
                    page: 1,
                    rowsNumber: 10 // specifying this determines pagination is server-side
                },
                columns: [
                    {
                        name: 'desc',
                        required: true,
                        label: 'Dessert (100g serving)',
                        align: 'left',
                        field: 'name',
                        sortable: true
                    },
                    {name: 'calories', label: 'Calories', field: 'calories', sortable: true},
                    {name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true},
                    {name: 'carbs', label: 'Carbs (g)', field: 'carbs'},
                    {name: 'protein', label: 'Protein (g)', field: 'protein'},
                    {name: 'sodium', label: 'Sodium (mg)', field: 'sodium'},
                    {
                        name: 'calcium',
                        label: 'Calcium (%)',
                        field: 'calcium',
                        sortable: true,
                        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
                    },
                    {
                        name: 'iron',
                        label: 'Iron (%)',
                        field: 'iron',
                        sortable: true,
                        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
                    },
                    {name: 'action', label: 'Acciones', field: 'action'},
                ],
                filter: '',
                visibleColumns: ['desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron','action'],
                selected: [
                ],
                loading: false
            }
        },
        methods: {
            request(props) {
                this.loading = true
                setTimeout(() => {
                    this.serverPagination = props.pagination
                    let
                        table = this.$refs.table,
                        rows = tableData.slice(),
                        {page, rowsPerPage, sortBy, descending} = props.pagination
                    if (props.filter) {
                        rows = table.filterMethod(rows, props.filter)
                    }
                    if (sortBy) {
                        rows = table.sortMethod(rows, sortBy, descending)
                    }
                    this.serverPagination.rowsNumber = rows.length
                    if (rowsPerPage) {
                        rows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                    }
                    this.serverData = rows
                    this.loading = false
                }, 1500)
            }
        },
        mounted() {
            this.request({
                pagination: this.serverPagination,
                filter: this.filter
            })
        }
    }
</script>

<style lang="stylus">

</style>