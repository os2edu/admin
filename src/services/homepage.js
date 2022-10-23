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
