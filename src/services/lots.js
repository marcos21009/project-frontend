import {Cookies, LocalStorage} from 'quasar'
import config from 'src/config/index'
import http from "axios"
import {helper} from "@imagina/qhelper/_plugins/helper"
import {remember} from '@imagina/qhelper/_plugins/remember'

export default {
  
  index(filter, take, page, fields, include) {
    
    filter = JSON.stringify(filter);
    let key = ":"+JSON.stringify(filter + take + page + fields + include);
    key = key==":null" ? "" : key;
    return new Promise((resolve, reject) => {
      remember.async("agrocount"+key, 3600 * 3, () => {
        return http.get(config('api.api_url') + '/agrocont/lots', {
          params: {
            filter: filter,
            take: take,
            page: page,
            fields: fields,
            include: include
          }
        })
      }).then(response => {
        resolve(response);
      })
        .catch(error => {
          reject(error);
        });
    });
  },
  
  
  show(id,filter, fields, include) {
    filter = JSON.stringify(filter);
    let key = JSON.stringify(filter + fields + include + id);
    return new Promise((resolve, reject) => {
      //remember.async(key, 3600 * 3, () => {
      return http.get(config('api.api_url') + '/agrocont/lots/' + id, {
        params: {
          filter: filter,
          fields: fields,
          include: include
        }
        /* })*/
      }).then(response => {
        resolve(response.data);
      })
        .catch(error => {
          reject(error);
        });
    });
  },
  
  update(data,id) {
    return new Promise((resolve, reject) => {
      http.put(config('api.api_url') + '/agrocont/lots/'+id, data)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  
  create(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      http.post(config('api.api_url') + '/agrocont/lots', data)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  
  delete(id) {
    return new Promise((resolve, reject) => {
      http.delete(config('api.api_url') + '/agrocont/lots/'+id)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  

}