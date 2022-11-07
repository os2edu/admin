import { fetchClassroomList } from "@/services/course";
import { ProTable } from "@ant-design/pro-components";

const columns = [
  {
    title: '角色',
    dataIndex: 'index',
    hideInTable: true,
    search: true,
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '老师', value: 'teacher' },
        { label: '学生', value: 'student' },
        { label: '助教', value: 'ta' },
      ],
    },
  },
  {
    title: '教室号',
    dataIndex: 'index',
    hideInTable: true,
    search: true,
    request: fetchClassroomList
  },
  {
    title: '学生数',
    dataIndex: 'index',
    hideInTable: true,
    search: true,
  },
  {
    title: '当日课程时长',
    dataIndex: 'index',
    hideInTable: true,
    search: true,
  },
  {
    title: '用户上课时长',
    dataIndex: 'index',
    hideInTable: true,
    search: true,
  },
  {
    title: '排序',
    dataIndex: 'index',
    hideInTable: true,
    search: true,
  },
  {
    title: '时间',
    dataIndex: 'index',
    hideInTable: true,
    search: true,
  },
  {
    title: '序号',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
  {
    title: '姓名',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
  {
    title: '出勤次数',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
  {
    title: '上课时长',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
  {
    title: '序号',
    dataIndex: 'index',
    align: 'center',
    width: 80,
  },
].map((item) => ({
  search: false,
  ...item,
}));

export default () => {
  return (
    <ProTable
      columns={columns}
      search={{ labelWidth: 100 }}
      headerTitle={<span style={{ color: '#1890ff' }}>时长统计 79小时10分9秒</span>}
    />
  );
}