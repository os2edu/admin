import { requiredRule } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProFormDigit,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Button } from 'antd';

const DefaultTrigger = (props) => (
  <Button {...props} key="button" icon={<PlusOutlined />} type="primary">
    新增教师
  </Button>
);

export default ({ Trigger = DefaultTrigger, title = '新增教师' }) => {
  return (
    <DrawerForm
      drawerProps={{ maskClosable: false }}
      title={title}
      trigger={<Trigger />}
      grid
      width="35%"
      layout="horizontal"
    >
      <ProFormText
        name="location"
        label="姓名"
        labelCol={{ span: 4 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormTextArea
        name="desc"
        label="教师介绍"
        required
        placeholder="请输入"
        labelCol={{ span: 4 }}
        fieldProps={{ maxLength: 110, showCount: true }}
        rules={requiredRule}
      />
      <ProFormDigit
        name="oldPrice"
        label="课程数"
        required
        labelCol={{ span: 4 }}
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormDigit
        name="oldPrice"
        label="学生数"
        required
        labelCol={{ span: 4 }}
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormUploadButton
        name="coverUrl"
        label="教师头像"
        max={1}
        required
        labelCol={{ span: 4 }}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        rules={requiredRule}
        action="/upload.do"
        extra="建议图片比例为1:1"
      />
    </DrawerForm>
  );
};
