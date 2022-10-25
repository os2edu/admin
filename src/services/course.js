import { addListIndex } from '@/utils';
import { request } from '@umijs/max';

export async function fetchCourseList(params) {
  return request(
    '/seller/api/coursesget/getAllCoursesByConditionsWithTotal?clientId=385',
    {
      params: {
        ...params,
        isDelete: 1,
      },
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

export async function createCourse(data) {
  console.log('###############');
  return request('/seller/api/courses', {
    method: 'post',
    data: {
      teacher: '',
      clientId: '385',
      client: {},
      isDelete: 1,
      ...data,
    },
  });
}

export async function updateCourse(data) {
  return request('/seller/api/courses/update', {
    method: 'post',
    data,
  });
}

export async function fetchAllCourse() {
  return request(
    '/seller/api/coursesget/getAllCoursesByConditionsWithTotal?clientId=385',
  ).then((res) => res.totalNum);
}

export async function fetchCourseInfo(id) {
  return request(`/seller/api/courses/${id}`).then(({ coverUrl, ...res }) => ({
    coverUrl: [{ url: coverUrl }],
    ...res,
  }));
}
