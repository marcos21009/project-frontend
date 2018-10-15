import { findValue } from 'src/utils'
import api from './api'
import sidebar from  './sidebar'

export default function (value = '', fallback = null) {
  const values = {
    api,
    sidebar
  };
  return findValue(value, values) || fallback
}
