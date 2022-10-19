import { PageContainer } from '@ant-design/pro-components';
import { Statistic } from 'antd';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <Statistic title="购买总时长" value="1260" />
    </PageContainer>
  );
};

export default Dashboard;
