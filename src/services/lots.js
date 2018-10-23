import {Cookies, LocalStorage} from 'quasar'
import config from 'src/config/index'
import http from "axios"
import {helper} from "@imagina/qhelper/_plugins/helper"
import {remember} from "@imagina/qhelper/_plugins/remember"

export default {

    /**
     * Get lots
     */
    index() {
        return new Promise((resolve, reject) => {
            http.get(config('api.api_url') + '/agrocont/lots')
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject([]);
                })
        });
    },

    /**
     * Get a PreLead
     *
     * @param id{int} required
     */
    show(id) {
        return new Promise((resolve, reject) => {
            http.get(config('api.api_url') + '/lots/' + id, {
                params: {}
            })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject([]);
                })
        });
    },

    /**
     * Create PreLead
     *
     * @param dataPrelead {object} require
     * @returns {object}
     */
    create(data) {
        return new Promise((resolve, reject) => {
            http.post(config('api.api_url') + '/lots', data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    /**
     * Update PreLead
     * @param id {int} require
     * @param data {object} require
     * @returns {object}
     */
    update(data, id) {
        return new Promise((resolve, reject) => {
            http.put(config('api.api_url') + '/lots/' + id, data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    /**
     * Data for dashboard
     *
     * @param reports{array} requiere
     * @param filter{object}
     * @returns {Promise<any>}
     */
    async dashBoard(reports, filter) {
        filter ? true : filter = {} //If no exist filter
        let departmentSelected = await helper.storage.get.item("depSelected")
        if (!departmentSelected)
            filter.departmentId = await helper.storage.get.item('userData').departments[0].id;
        else if (departmentSelected != 'all')
            filter.departmentId = departmentSelected//Add department ID
        auth.hasAccess('fhia.roles.dept-manager') ? true :
            filter.userId = await helper.storage.get.item("userId") //Add user id

        return new Promise((resolve, reject) => {
            remember.async('preleadDashborad' + JSON.stringify(filter), 3600 * 3, () => {
                return http.get(config('api.api_url') + '/lots/dashboard', {
                    params: {
                        reports: JSON.stringify(reports),
                        filter: JSON.stringify(filter)
                    }
                })
            }).then(response => {
                resolve(response.data);
            })
                .catch(error => {
                    reject([]);
                });
        });
    },
}