import { fetchTeacherList } from '@/services/homepage';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import TeacherManageForm from './TeacherManageForm';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '教师介绍',
    dataIndex: 'info',
    width: 200,
    ellipsis: true,
  },
  {
    title: '课程数',
    dataIndex: 'coursesCount',
    align: 'center',
    width: 80,
  },
  {
    title: '学生数',
    dataIndex: 'studentsCount',
    align: 'center',
    width: 80,
  },
  {
    title: '教师头像',
    dataIndex: 'avatarUrl',
    align: 'center',
    width: 80,
    valueType: 'image',
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    width: 160,
    render: (_, row) => (
      <>
        <TeacherManageForm
          title="编辑教师"
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
    <ProTable
      pagination={null}
      rowKey="id"
      columns={columns}
      search={false}
      toolBarRender={() => <TeacherManageForm />}
      request={fetchTeacherList}
      scroll={{ y: 510 }}
    />
  );
};
