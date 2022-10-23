import { requiredRule } from '@/utils';
import {
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';

export default () => {
  return (
    <ProForm labelCol={8} layout="horizontal" style={{ marginTop: 20 }} grid>
      <ProFormTextArea
        name="desc"
        label="机构介绍"
        colProps={{ md: 24, xl: 24 }}
        required
        placeholder="请输入"
        labelCol={{ span: 2 }}
        fieldProps={{ maxLength: 300, showCount: true }}
        rules={requiredRule}
      />
      <ProFormUploadButton
        name="coverUrl"
        label="机构介绍图片"
        max={1}
        required
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        labelCol={{ span: 2 }}
        rules={requiredRule}
        action="/upload.do"
        extra="建议图片比例为16:9"
      />
      <ProFormUploadButton
        name="coverUrl"
        label="机构Logo"
        max={1}
        required
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        labelCol={{ span: 2 }}
        rules={requiredRule}
        action="/upload.do"
        extra="建议图片比例为16:9"
      />
      <ProFormUploadButton
        name="coverUrl"
        label="封面图"
        max={1}
        required
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        labelCol={{ span: 2 }}
        rules={requiredRule}
        action="/upload.do"
        extra="建议图片比例为16:9"
      />
      <ProFormText
        name="location"
        label="一句话简介"
        labelCol={{ span: 2 }}
        required
        placeholder="请输入"
        rules={requiredRule}
      />
    </ProForm>
  );
};
