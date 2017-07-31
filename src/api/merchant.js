import fetch from '@/utils/fetch';

export function getMerchants(params) {
    return fetch({
        url: '/merchants',
        method: 'get',
        params
    });
}

export function insertMerchant(params) {
    return fetch({
        url: '/merchant',
        method: 'post',
        params
    })
}

