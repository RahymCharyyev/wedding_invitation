'use client';

import { useEffect, useState } from 'react';
import { Table } from 'antd';

interface RsvpData {
  fullName: string;
  isAttending: string;
  site: string;
  submittedAt: string;
}

const AdminPage = () => {
  const [data, setData] = useState<RsvpData[]>([]);

  useEffect(() => {
    fetch('/api/rsvp')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>RSVP Submissions</h1>
      <Table
        dataSource={data}
        rowKey={(record) => record.fullName + record.submittedAt}
        columns={[
          { title: '№', dataIndex: 'id', key: 'id' },
          { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
          { title: 'Attending', dataIndex: 'isAttending', key: 'isAttending' },
          { title: 'Site', dataIndex: 'site', key: 'site' },
          {
            title: 'Submitted At',
            dataIndex: 'submittedAt',
            key: 'submittedAt',
            render: (value) => new Date(value).toLocaleString(),
          },
        ]}
      />
    </div>
  );
};

export default AdminPage;
