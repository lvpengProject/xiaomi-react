import axios from 'axios';

async function http(data, withLoading = true) {
    data.headers = { 'Content-Type': 'application/json' };
    data.headers = Object.assign(
        { Authorization: sessionStorage.getItem('token') },
        data.headers || {}
    )

       await new Promise(resolve => setTimeout(() => resolve(), 1000))
        return axios(data)
                .then( res => {
                if(res.status === 200) {
                        // let result = res.data;
                        switch(res.data.code) {
                        case 200:
                                // if (withLoading)  Vue.prototype.$miLoading.close();
                        return res.data.data;
                        case 401:
                        case 199:
                        case 500:
                        case 404:
                        throw new Error(res.data.msg); // 有错，显示抛出异常直达下面的catch
                        }
                        } else {
                                throw new Error(res.statusText);
                        }
                })
                .catch(function(error) {
                        // if(withLoading) Vue.prototype.$miLoading.close();
                        alert(error.message);	// catch这里统一对错误进行提示处理
                        // return new Promise(() => {}); // 返回一个永远是pending的Promise对象
                        return Promise.reject(error.message);
                });


    // return fetch(data.url,data.options)
    //
    //     .then(r => {
    //         console.log(data.options)
    //         if(r.status === 200) return r.json();
    //         else {
    //             throw new Error(r.statusText)
    //         }
    // })
    //     .then(
    //         res => {
    //             switch (res.code) {
    //                 case 200:
    //                     return res.data;
    //                 case 401:
    //                     // sessionStorage.removeItem('token');
    //                     // sessionStorage.removeItem('name');
    //                     // return;
    //                 case 199:
    //                 case 500:
    //                 case 404:
    //                     throw new Error(res.msg)
    //             }
    //         }
    //     )
    //     .catch(e => {
    //         alert(e.message)
    //         return Promise.reject(e.message)
    //     })
}

export default http;
