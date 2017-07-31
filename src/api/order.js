import fetch from '@/utils/fetch';

export function getOrders(params) {
    return fetch({
        url: '/orders',
        method: 'get',
        params
    });
}



