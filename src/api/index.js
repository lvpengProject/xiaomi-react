
import http from '../util/http';


export let CategoryAPI = {
    getAll: fid => http({ url: '/category/list/' + fid, method: 'get' }),
}

export let ListAPI = {
    get: data => http({ url: '/product/list', method: 'post', data })
}

export let UserAPI = {
    login: data => http({ url: '/user/login_pwd', method: 'post', data }),
}

export let AddressAPI = {
    get: () => http({ url: '/address/list', options:{  } }),
    setDefault: id => http({ url: '/address/set_default/' + id, }),
    remove: id => http({ url: '/address/remove/' + id,  }),
    add: data => http({ url: '/address/add', method: 'post', data }),
    update: data => http({ url: '/address/update', method: 'post', data }),
}
export let CartAPI = {
    get: () => http({ url: '/cart/list', method: 'post', }),
    increase: id => http({ url: '/cart/increase/' + id, method: 'post' }),
    decrease: id => http({ url: '/cart/decrease/' + id, method: 'post' }),
    remove: ids => http({ url: '/cart/remove', method: 'post', data: { ids } }),
}

