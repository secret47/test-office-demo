import reqeuest from '@/utils/request'

console.log(reqeuest,"--")

export const userLogin = (data) => reqeuest({
    url: '/user/login',
    method: 'post',
    data
});