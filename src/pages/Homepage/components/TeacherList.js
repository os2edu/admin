import { deleteTeacherInfo, fetchTeacherList } from '@/services/homepage';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';
import TeacherManageForm from './TeacherManageForm';

const columns = (openEditForm, tableRef) =>
  [
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
          <Button
            onClick={() => openEditForm({ visible: true, id: row.id })}
            size="small"
            type="link"
          >
            编辑
          </Button>
          <Popconfirm
            title="确定删除?"
            onConfirm={() =>
              deleteTeacherInfo(row.id).then(() => {
                tableRef.current.reload();
                message.success('操作成功');
              })
            }
          >
            <Button size="small" type="link" danger>
              删除
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ].map((item) => ({ search: false, width: 120, ...item }));

export default () => {
  const [drawerProps, setDrawerProps] = useState({ visible: false });
  const tableRef = useRef();
  return (
    <>
      <ProTable
        actionRef={tableRef}
        pagination={null}
        rowKey="id"
        columns={columns(setDrawerProps, tableRef)}
        search={false}
        toolBarRender={() => (
          <Button
            onClick={() => setDrawerProps({ visible: true })}
            type="primary"
            icon={<PlusOutlined />}
          >
            新增
          </Button>
        )}
        request={fetchTeacherList}
        scroll={{ y: 510 }}
      />
      <TeacherManageForm
        {...drawerProps}
        tableReload={() => tableRef.current.reload()}
        handleClose={() => setDrawerProps({ visible: false })}
      />
    </>
  );
};
