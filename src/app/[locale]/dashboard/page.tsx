'use client';

import { useEffect, useState } from 'react';
import { Table } from 'antd';

interface RsvpData {
  fullname: string;
  attending: string;
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
        rowKey={(record) => record.fullname + record.submittedAt}
        columns={[
          { title: 'Full Name', dataIndex: 'fullname', key: 'fullname' },
          { title: 'Attending', dataIndex: 'attending', key: 'attending' },
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
