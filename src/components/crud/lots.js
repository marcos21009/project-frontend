import {format} from 'date-fns'
import exportFromJSON from 'export-from-json'
import {alert} from '@imagina/qhelper/_plugins/alert'
import {required, email, sameAs, minLength} from 'vuelidate/lib/validators';
import _pick from 'lodash.pick'
import service from "src/services/lots";


export const crudActions = {
    permission: 'agrocont.lots',
    actionsData: {
        add: {
            icon: 'add',
            tooltip: '',
            //permission:''
        },
        export: {
            icon: 'fas fa-download',
            tooltip: '',
            //permission:''
        },
        delete: {
            icon: 'delete',
            tooltip: '',
            //permission:''
        },
        edit: {
            icon: 'edit',
            tooltip: '',
            //permission:''
        }
    }

}


/**
 *
 * @type {{inline: null, headers: *[], formatters: (function(*, *): *)}}
 */
export const crudTable = {
    headers: [
        {text: 'Nombre', value: 'name'},
        {text: 'Area', value: 'area'},
        {text: 'Created At', value: 'created_at'}
    ]

}

/**
 *
 * @type {{
 * fieldsData: {
 *  db_column: {
 *    type: 'text' or 'select',
 *    label: string,
 *    name: string,
 *    placeHolder: string,
 *    multiple: boolean,
 *    filter: boolean,
 *    chips: boolean,
 *    radio: boolean,
 *    options: [
 *      {
 *        label: string,
 *        icon: string,
 *        value: string or integer
 *      }
 *    optionsFn: async function,
 *    viewPosition: 'left' or 'right',
 *    value: string or integer,
 *    rules: { vuelidate rules }
 *  }
 * }
 * }}
 *
 */
export const crudFields = {
    fieldsData: {
        name: {
            type: 'text',
            label: 'Nombre',
            name: 'name',
            placeHolder: '',
            viewPosition: 'left',
            rules: {
                required,
            }
        },
        status: {
            type: 'text',
            label: 'Estado',
            name: 'name',
            placeHolder: '',
            viewPosition: 'left',
            radio: true,
            options: [
                {
                    label: 'Inactivo',
                    // icon: string,
                    value: 0
                },
                {
                    label: 'Activo',
                    // icon: string,
                    value: 1
                }
            ],
            rules: {
                required,
            }
        },
        area: {
            type: 'number',
            label: 'Area',
            name: 'area',
            placeHolder: '',
            viewPosition: 'left',
            rules: {
                required,
            }
        },
        slope: {
            type: 'number',
            label: 'Inclincaion del lote',
            name: 'slope',
            placeHolder: '%',
            viewPosition: 'left',
            rules: {
                required,
            }
        },
        texture: {
            type: 'select',
            label: 'Textura del terreno',
            name: 'texture',
            placeHolder: '',
            viewPosition: 'left',
            radio: true,
            options: [
                {
                    label: 'Arenoso',
                    // icon: string,
                    value: 0
                },
                {
                    label: 'Arenoso-Franco',
                    // icon: string,
                    value: 1
                },
                {
                    label: 'Franco-Arenoso',
                    // icon: string,
                    value: 3
                },
                {
                    label: 'Franco',
                    // icon: string,
                    value: 4
                },
                {
                    label: 'Arcilloso',
                    // icon: string,
                    value: 5
                },
                {
                    label: 'Limoso',
                    // icon: string,
                    value: 6
                }
            ],
            rules: {
                required,
            }
        },  
        thickness: {
            type: 'number',
            label: 'Espesor de Tierra negra',
            name: 'slope',
            placeHolder: 'cm',
            viewPosition: 'left',
            rules: {
                required,
            }
        }
        
        /* category_id: {
             type: 'select',
             label: 'Category',
             name: 'category_id',
             viewPosition: 'right',
             rules: {required},
             optionsFn: () =>{
                 let filter = {

                 }
                   return await category.index(filter)
                     .then((response) => {
                       let data = [];
                       response.forEach((element,index) =>{
                           data.push({
                              label: element.title,
                             value: element.id
                            });
                       })

                       return data;

                   }).catch(error => {
                     let errorMessage = error.response.data.error ? error.response.data.error : 'No lots found';
                     alert.error(errorMessage, 'bottom')
                   })
              }),
         }*/
    }
}


/**
 *
 * @type {{
 * FilterVue: (function(): {}),
 * filterData: {
 *  filterName: {
 *    type: 'text' or 'select',
 *    label: string,
 *    name: string,
 *    placeHolder: string,
 *    multiple: boolean,
 *    filter: boolean,
 *    chips: boolean,
 *    radio: boolean,
 *    options: [
 *      {
 *        label: string,
 *        icon: string,
 *        value: string or integer
 *      }
 *    optionsFn: async function,
 *    viewPosition: 'left' or 'right',
 *    value: string or integer,
 *    rules: { vuelidate rules }
 *  }
 * }
 * }}
 *
 */
export const crudFilter = {
    FilterVue: () => ({ // you can set your custom filter view
        //component: import('./departmentFilter.vue')
    }),
    filterData: {
        search: {
            type: 'text',
            label: '',
            placeHolder: 'Text Search',
            value: '',
            cols: '4',

        }
    }
}


/**
 *
 * @type {{FormVue: (function(): {}), defaultRec: (function(): {})}}
 */
export const crudForm = {
    FormVue: () => ({
        //component: import('./configurationForm.vue')
    }),
    defaultRec: () => ({ // here you can put de initial values for the record
        name: '',
        area:'',
        slope:'',
        texture:0,
        thickness:''
    })
}


export const crudOps = { // CRUD
    export: async (payload) => {
        const {filterData, crudTable} = payload // pagination
        let filter = {};
        for (var key in filterData)
            filter[key] = filterData[key].value

        let headers = []
        crudTable.headers.forEach(element => {
            headers.push(element.value);
        })
        console.log("headers", headers)

        let headerData = [];
        await service.index(filter)
            .then((response) => {

                response.data.forEach((element, index) => {

                    headerData.push(_pick(element, headers))
                })

                const data = headerData
                const fileName = 'Lots'
                const exportType = 'xls'
                exportFromJSON({data, fileName, exportType})
            })
            .catch((error) => {
                let errorMessage = error.response.data.error ? error.response.data.error : 'No Lots found';
                alert.error(errorMessage, 'bottom')
            })
    },

    delete: async (payload) => {
        let {id, ...attributes} = payload

        await service.delete(id)
            .then((response) => {
                alert.success('Lot Deleted', 'top')
            }).catch(error => {
                let errorMessage = error.response.data.error ? error.response.data.error : 'Delete failed';
                alert.error(errorMessage, 'bottom')
            })

    },

    index: async (payload) => {
        let data = []
        const {pagination, filterData} = payload
        let filter = {};

        for (var key in filterData)
            filter[key] = filterData[key].value


        let page = pagination.page ? pagination.page : 1;

        await service.index(filter, 10, page)
            .then((response) => {
                data = response;
            }).catch(error => {
                let errorMessage = error.response.data.error ? error.response.data.error : 'No lots found';
                alert.error(errorMessage, 'bottom')
            })
        return {records: data.data, pagination: data.meta}
    },


    show: async (payload) => {
        const {id} = payload
        let record = {}
        let fields = ''
        await service.show(id, null, fields)
            .then((response) => {
                record = response.data;
            }).catch(error => {
                let errorMessage = error.response.data.error ? error.response.data.error : 'lot not found';
                alert.error(errorMessage, 'bottom')
            })
        return record
    },


    create: async (payload) => {
        const {record: {id, ...attributes}} = payload
        let data = {
            attributes: attributes
        }
        await service.create(data)
            .then((response) => {
                alert.success('Lot Created', 'top')
            }).catch(error => {
                let errorMessage = error.response.data.error ? error.response.data.error : 'Create failed';
                alert.error(errorMessage, 'bottom')
            })

    },

    update: async (payload) => {
        let {record: {id, ...attributes}} = payload
        let data = {
            id: id,
            attributes: attributes
        }
        await service.update(data, data.id)
            .then((response) => {
                alert.success('Lot Updated', 'top')
            }).catch(error => {
                let errorMessage = error.response.data.error ? error.response.data.error : 'Update failed';
                alert.error(errorMessage, 'bottom')
            })

    }

}
