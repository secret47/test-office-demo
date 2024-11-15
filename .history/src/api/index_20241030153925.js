import reqeuest from '@/utils/request'
export const login = (data) => reqeuest({
    url: '/user/login',
    method: 'post',
    data
});