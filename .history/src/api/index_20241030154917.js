import request from '../utils/reqeust'

export const userLogin = (data) => request({
    url: '/user/login',
    method: 'post',
    data
});