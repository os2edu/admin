import { addListIndex } from '@/utils';
import { request } from '@umijs/max';

export async function fetchCourseList(params) {
  return request(
    '/seller/api/coursesget/getAllCoursesByConditionsWithTotal?clientId=385',
    {
      params,
    },
  ).then((res) => ({
    data: addListIndex(res.courseList, params),
    total: res.totalNum,
    success: true,
  }));
}

export async function fetchMemberList(params) {
  return request(
    '/seller/api/students/getAllStudentsByConditionsWithTotal?clientId=385',
    { params },
  ).then((res) => ({
    data: addListIndex(res.studentList, params),
    total: res.totalNum,
    success: true,
  }));
}

export async function fetchClassroomList(params) {
  return request(
    '/seller/api/course-classes?page=0&size=1000&courseId.equals=101&clientId.equals=385&sort=startAt,desc&hasHomework=1',
    { params },
  ).then((res) => ({
    data: addListIndex(res, params),
    success: true,
  }));
}
