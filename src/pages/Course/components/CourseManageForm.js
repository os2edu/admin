import { requiredRule } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Button, Col, Form } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DefaultTrigger = (props) => (
  <Button {...props} key="button" icon={<PlusOutlined />} type="primary">
    创建课程
  </Button>
);

export default ({ title = '创建课程', Trigger = DefaultTrigger }) => {
  return (
    <DrawerForm
      drawerProps={{ maskClosable: false }}
      width="60%"
      title={title}
      trigger={<Trigger />}
      grid
      initialValues={{
        web_site_name: 'all',
      }}
    >
      <ProFormText
        name="title"
        label="课程名称"
        colProps={{ md: 24, xl: 24 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormText
        name="summary"
        label="一句话简介"
        colProps={{ md: 24, xl: 24 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormSelect
        label="课程类型"
        name="type"
        colProps={{ md: 12, xl: 8 }}
        required
        placeholder="请选择"
        rules={requiredRule}
        request={async () => [
          { label: '小班课(15人以下)', value: 'all' },
          { label: '大班课(16人以上)', value: 'open' },
        ]}
      />
      <ProFormSelect
        label="热门/非热门"
        name="tag"
        colProps={{ md: 12, xl: 8 }}
        required
        placeholder="请选择"
        rules={requiredRule}
        request={async () => [
          { label: '热门', value: 'all' },
          { label: '非热门', value: 'open' },
        ]}
      />
      <ProFormDigit
        name="courseIndex"
        label="排序"
        colProps={{ md: 12, xl: 8 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormDigit
        name="oldPrice"
        label="原价"
        colProps={{ md: 12, xl: 8 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormDigit
        name="price"
        label="现价"
        colProps={{ md: 12, xl: 8 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
      <ProFormUploadButton
        name="coverUrl"
        label="课程图片"
        max={1}
        required
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        rules={requiredRule}
        action="/upload.do"
        extra="建议图片比例为16:9"
      />
      <Col span={24}>
        <Form.Item
          label="课程介绍"
          name="introduction"
          required
          rules={requiredRule}
        >
          <ReactQuill theme="snow" style={{ height: 210 }} />
        </Form.Item>
      </Col>
    </DrawerForm>
  );
};
