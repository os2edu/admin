import { addListIndex } from '@/utils';
import { request } from '@umijs/max';

export async function fetchTeacherList(params) {
  return request(
    '/seller/api/teachers/getAllTeachersByConditionsWithTotal?clientId=385',
    { params },
  ).then((res) => ({
    data: addListIndex(res.teacherList),
    total: res.totalNum,
  }));
}

export async function fetchHomePageConf() {
  return request('/seller/api/homepages?clientId.equals=385').then(([res]) => ({
    ...res,
    aboutUsImgUrl: [{ url: res.aboutUsImgUrl }],
    consultUrl: [{ url: res.consultUrl }],
    coverUrl: [{ url: res.coverUrl }],
  }));
}

export async function updateHomePageConf(data) {
  return request('/seller/api/homepages/update', {
    method: 'post',
    data,
  });
}
