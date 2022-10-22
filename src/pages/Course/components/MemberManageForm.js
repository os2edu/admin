import { requiredRule } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';

const CreateButton = (props) => (
  <Button {...props} icon={<PlusOutlined />} type="primary">
    新建
  </Button>
);

export default ({ title = '添加成员', Trigger = CreateButton }) => {
  return (
    <DrawerForm
      drawerProps={{ maskClosable: false }}
      title={title}
      trigger={<Trigger />}
      grid
    >
      <ProFormText
        name="name"
        label="昵称"
        colProps={{ md: 24, xl: 12 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormText
        name="phone"
        label="手机号"
        colProps={{ md: 24, xl: 12 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormText
        name="role"
        label="角色"
        colProps={{ md: 24, xl: 12 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormRadio.Group
        name="gender"
        label="性别"
        colProps={{ md: 24, xl: 12 }}
        options={[
          {
            label: '男',
            value: 'male',
          },
          {
            label: '女',
            value: 'female',
          },
        ]}
      />
      <ProFormSelect
        label="年级"
        name="age"
        colProps={{ md: 24, xl: 12 }}
        placeholder="请选择"
        request={async () => []}
      />
      <ProFormSwitch
        name="allowEntry"
        label="是否允许进入课堂"
        checkedChildren="允许"
        unCheckedChildren="不允许"
        colProps={{ md: 24, xl: 12 }}
      />
    </DrawerForm>
  );
};
