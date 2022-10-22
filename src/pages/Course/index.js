import { fetchCourseList } from '@/services/course';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button } from 'antd';
import CourseManageForm from './components/CourseManageForm';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
  {
    title: '课程名称',
    dataIndex: 'title',
    width: 400,
    search: true,
  },
  {
    title: '教室ID',
    dataIndex: 'roomId',
    align: 'center',
  },
  {
    title: '主讲教师',
    dataIndex: 'teacher',
    align: 'center',
  },
  {
    title: '报名人数',
    dataIndex: 'applyCount',
    align: 'center',
  },
  {
    title: '课程价格',
    dataIndex: 'price',
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    width: 200,
    fixed: 'right',
    render: (_, row) => (
      <>
        <Button
          size="small"
          type="link"
          onClick={() => history.push(`/course/member-manage/${row.courseId}`)}
        >
          成员管理
        </Button>
        <Button
          size="small"
          type="link"
          onClick={() =>
            history.push(`/course/classroom-manage/${row.courseId}`)
          }
        >
          课堂管理
        </Button>
        <CourseManageForm
          title="编辑课程"
          Trigger={(props) => (
            <Button {...props} size="small" type="link">
              编辑
            </Button>
          )}
        />
        <Button size="small" type="link" danger>
          删除
        </Button>
      </>
    ),
  },
].map((item) => ({ search: false, width: 120, ...item }));

export default () => {
  return (
    <PageContainer>
      <ProTable
        pagination={{ pageSize: 20 }}
        rowKey="id"
        columns={columns}
        request={fetchCourseList}
        scroll={{ y: 458 }}
        toolBarRender={() => <CourseManageForm />}
      />
    </PageContainer>
  );
};
