import { PageContainer } from '@ant-design/pro-components';
import OrgHomepageManage from './components/OrgHomepageManage';
import TeacherList from './components/TeacherList';

export default () => {
  return (
    <PageContainer
      tabList={[
        {
          tab: '机构首页',
          key: 'orgHomepage',
          children: <OrgHomepageManage />,
        },
        {
          tab: '授课名师',
          key: 'teacher',
          children: <TeacherList />,
        },
      ]}
    />
  );
};
