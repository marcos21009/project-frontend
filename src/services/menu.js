import {Cookies, LocalStorage} from 'quasar'
import config from 'src/config/index'
import http from "axios"
import {helper} from "@imagina/qhelper/_plugins/helper"
import {remember} from "@imagina/qhelper/_plugins/remember"

export default {

  /**
   * Get preleads
   */
  index() {
    return new Promise((resolve, reject) => {
      http.get(config('api.api_url') + '/menu')
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
      http.get(config('api.api_url') + '/preleads/' + id, {
        params: {
          include: 'comments'
        }
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
  create(dataPrelead) {
    return new Promise((resolve, reject) => {
      http.post(config('api.api_url') + '/preleads', dataPrelead)
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
   * @param dataPrelead {object} require
   * @returns {object}
   */
  update(dataPrelead, id) {
    return new Promise((resolve, reject) => {
      http.put(config('api.api_url') + '/preleads/' + id, dataPrelead)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  /**
   * Assing PreLeads
   *
   * @param take{int} require: Number of preleads to assing
   * @param time{int} require: Number of hours after last comment
   * @returns {Promise<any>}
   */
  assign(take, department) {
    return new Promise((resolve, reject) => {
      http.post(config('api.api_url') + '/preleads/assign', {
        take: take,
        department_id: department,
        include: 'comments'
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject([]);
        });
    });
  },

  /**
   * UnLock PreLead
   *
   * @param idPrelead{int} requiere
   * @returns {Promise<any>}
   */
  unlock(idPrelead) {
    return new Promise((resolve, reject) => {
      http.post(config('api.api_url') + '/preleads/' + idPrelead + '/unlock')
        .then(response => {
          resolve(response);
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
    if(!departmentSelected)
      filter.departmentId = await helper.storage.get.item('userData').departments[0].id;
    else
      if(departmentSelected != 'all')
       filter.departmentId = departmentSelected//Add department ID
    auth.hasAccess('fhia.roles.dept-manager') ? true :
      filter.userId = await helper.storage.get.item("userId") //Add user id

    return new Promise((resolve, reject) => {
      remember.async('preleadDashborad'+JSON.stringify(filter), 3600 * 3, () => {
        return http.get(config('api.api_url') + '/preleads/dashboard', {
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

  //Return all Branch Offices from FHIA
  statuses() {
    return new Promise((resolve, reject) => {
      remember.async('preleadsStatuses', 3600 * 3, () => {
        return http.get(config('api.api_url') + '/preleads/statuses')
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject([])
      });
    })
  },
}
