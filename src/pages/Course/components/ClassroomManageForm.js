import { requiredRule } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button } from 'antd';

const DefaultTrigger = (props) => (
  <Button {...props} key="button" icon={<PlusOutlined />} type="primary">
    新增
  </Button>
);

export default ({ title = '创建课程', Trigger = DefaultTrigger }) => {
  return (
    <DrawerForm
      drawerProps={{ maskClosable: false }}
      title={title}
      trigger={<Trigger />}
      grid
    >
      <ProFormText
        name="className"
        label="课堂名称"
        colProps={{ md: 24, xl: 12 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormSelect
        name="title"
        label="课堂类型"
        colProps={{ md: 24, xl: 12 }}
        required
        placeholder="请选择"
        rules={requiredRule}
        request={async () => [
          { label: '互动直播课', value: 'all' },
          { label: '视屏上传课', value: 'open' },
        ]}
      />
      <ProFormText
        name="location"
        label="上课地点"
        colProps={{ md: 24, xl: 12 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormDateTimePicker
        name="startAt"
        label="开课时间"
        colProps={{ md: 24, xl: 12 }}
        required
        placeholder="请选择"
        rules={requiredRule}
        fieldProps={{ style: { width: '100%' } }}
      />
      <ProFormTextArea
        name="remark"
        label="备注"
        colProps={{ md: 24, xl: 24 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
    </DrawerForm>
  );
};
