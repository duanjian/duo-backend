import fetch from '@/utils/fetch';

export function getList(params) {
  return fetch({
    url: '/table/list',
    method: 'get',
    params
  });
}

export function insertMerchant() {
    return fetch({
        url: '/merchant',
        method: 'post',
        par
    })
}


