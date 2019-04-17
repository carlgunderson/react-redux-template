import { getJson, patchJson, putJson, postJson, deleteJson } from './baseApi'

export const fetchData = url => getJson(url)