<template>
    <div id="landselect">
       <q-modal v-model="modalShow">
            <h4>Seleccione su finca </h4>
            <q-select
                    v-model="land"
                    float-label="Fincas"
                    radio @input="selectLand()"
                    :options="landsOptions"></q-select>
        </q-modal>
        <q-select
                v-model="land"
                radio @input="selectLand()"
                color="cyan-1" inverted
                :options="landsOptions"></q-select>
    </div>

</template>

<script>
    import {helper} from '@imagina/qhelper/_plugins/helper'

    export default {
        props: {},
        components: {},
        watch: {},
        mounted() {
            this.$nextTick(function () {
                this.getData()
            })
        },
        data() {
            return {
                land: false,
                modalShow: false,
                landsOptions: [
                    {
                        label: 'Google',
                        value: '1'
                    },
                    {
                        label: 'Facebook',
                        value: '2'
                    }
                ],
            }
        },
        methods: {
            getData(){
                helper.storage.get.item('landSelected').then((land)=>{
                    if(!land){
                        this.modalShow = true
                    }
                })
            },
            selectLand(){
                let land = this.land

                helper.storage.set('landSelected',land).then(() => {
                    this.modalShow = false
                })
            }
        }
    }
</script>

<style>

</style>