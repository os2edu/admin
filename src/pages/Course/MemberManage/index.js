import { fetchMemberList } from '@/services/course';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Switch } from 'antd';
import MemberManageForm from '../components/MemberManageForm';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 80,
    align: 'center',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    search: true,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    align: 'center',
  },
  {
    title: '年级',
    dataIndex: 'age',
  },
  {
    title: '角色',
    dataIndex: 'role',
  },
  {
    title: '进入课堂',
    dataIndex: 'allowEntry',
    render: (val) => (
      <Switch
        checkedChildren="允许"
        unCheckedChildren="不允许"
        defaultChecked={val}
      />
    ),
  },
  {
    title: '课堂链接',
    dataIndex: 'url',
  },
  {
    title: '备注',
    dataIndex: 'tag',
    width: 200,
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    width: 200,
    fixed: 'right',
    render: () => (
      <>
        <MemberManageForm
          title="编辑成员"
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
  const { courseId } = useParams();
  return (
    <PageContainer
      header={{
        title: '成员管理',
        onBack: () => history.back(),
      }}
    >
      <ProTable
        pagination={{ pageSize: 20 }}
        rowKey="id"
        columns={columns}
        request={(params) => fetchMemberList({ ...params, courseId })}
        scroll={{ y: 458 }}
        toolBarRender={() => <MemberManageForm />}
      />
    </PageContainer>
  );
};
