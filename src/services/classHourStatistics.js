import { request } from '@umijs/max';

export async function fetchClassroomList() {
  return request('/seller/api/courses', { params: { 'clientId.in': 385 } });
}
