import React from 'react'
import Table from '../components/Table';

function TablePage() {
  const data = [
    {name: 'Orange', color: 'bg-orange-500', score: 10},
    {name: 'Banana', color: 'bg-green-500', score: 5},
    {name: 'Apple', color: 'bg-blue-500', score: 2},
    {name: 'Cherry', color: 'bg-yellow-500', score: 6},
    {name: 'Lime', color: 'bg-red-500', score: 4},
  ];

  const config = [
    {
      label: 'Name',
      render: (s) => s.name,
    },
    {
      label: 'Color',
      render: (s) => <div className={`p-3 m-2 ${s.color}`}></div>,
    },
    {
      label: 'Score',
      render: (s) => s.score,
    },
  ];

  const keyFn = (s) => {
    return s.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  )
}


export default TablePage;