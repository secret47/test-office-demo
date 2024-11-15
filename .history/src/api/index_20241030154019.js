import reqeuest from '@/utils/request'
export const userLogin = (data) => reqeuest({
    url: '/user/login',
    method: 'post',
    data
});