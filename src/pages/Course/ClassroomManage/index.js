import { fetchClassroomList } from '@/services/course';
import {
  PageContainer,
  ProForm,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Switch } from 'antd';
import { history } from 'umi';
import ClassroomManageForm from '../components/ClassroomManageForm';

const columns = [
  {
    title: '课堂状态',
    dataIndex: 'classroomStatus',
    search: true,
    hideInTable: true,
    valueType: 'select',
    initialValue: ['0'],
    fieldProps: {
      allowClear: false,
      options: [
        { label: '已结束的课堂', value: '0' },
        { label: '未开始的课堂', value: '1' },
        { label: '上课中的课堂', value: '2' },
        { label: '上传视频的课堂', value: '3' },
      ],
    },
  },
  {
    title: '序号',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
  {
    title: '课堂名称',
    dataIndex: 'classroomName',
    width: 180,
    ellipsis: true,
    render: (_, row) => (
      <Button
        onClick={() => window.open(row.choseUrl)}
        size="small"
        type="link"
      >
        {row.className}
      </Button>
    ),
  },
  {
    title: '上课时间',
    dataIndex: 'startAt',
    align: 'center',
    valueType: 'dateTime',
    width: 140,
  },
  {
    title: '结束时间',
    dataIndex: 'endAt',
    align: 'center',
    valueType: 'dateTime',
    width: 140,
  },
  {
    title: '时长',
    dataIndex: 'duration',
    align: 'center',
  },
  {
    title: '上课地点',
    dataIndex: 'location',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '上架/下架',
    dataIndex: 'status',
    align: 'center',
    render: (val) => <Switch defaultChecked={val === '1'} />,
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    width: 200,
    fixed: 'right',
    render: (_, row) => (
      <>
        <ClassroomManageForm
          title="编辑课堂"
          Trigger={(props) => (
            <Button {...props} size="small" type="link">
              编辑
            </Button>
          )}
        />
        <Button size="small" type="link" danger>
          删除
        </Button>
        <Button
          size="small"
          type="link"
          onClick={() =>
            history.push(`/course/classroom-manage/${row.courseId}`)
          }
        >
          布置作业
        </Button>
      </>
    ),
  },
].map((item) => ({ search: false, width: 120, ...item }));

export default () => {
  return (
    <PageContainer
      header={{
        title: '课堂管理',
        onBack: () => history.back(),
      }}
    >
      <ProForm
        readonly
        render={null}
        submitter={{ render: () => null }}
        layout="horizontal"
        grid
        request={async () => ({
          courseName: 'Rust 编程零基础班',
          classroomNum: '100385101',
        })}
      >
        <ProFormText
          colProps={{ span: 6 }}
          name="courseName"
          label="课程名称"
        />
        <ProFormText
          colProps={{ span: 6 }}
          name="classroomNum"
          label="教室号"
        />
      </ProForm>
      <ProTable
        pagination={null}
        rowKey="id"
        columns={columns}
        request={fetchClassroomList}
        scroll={{ y: 400 }}
        toolBarRender={() => <ClassroomManageForm />}
      />
    </PageContainer>
  );
};
