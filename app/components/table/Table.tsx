'use client'

import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  matCode: number;
  brand: string;
  assort: string;
  note: string;
  sumInf: string;
  mtrd: string;
  cat: string;
  restrict: string;
  channel: string;
  start: string; //aq unda eweros tarigi aqciis dawyebis - sworia?
  end: string; // aq unda eweros tarigi aqciis dasrulebis - sworia?
  description: string;
}

const columns: ColumnsType<DataType> = [

  {
    title: 'კოდი',
    dataIndex: 'matCode',
    sorter: (a, b) => a.matCode - b.matCode,
  },
  
  {
    title: 'ბრენდი',
    dataIndex: 'brand',
    filters: [
      {
        text: 'აკოჯე',
        value: 'აკოჯე',
      },
      {
        text: 'აჰავა',
        value: 'აჰავა',
      },
      {
        text: 'ვინი',
        value: 'ვინი',
      },
      {
        text: 'ბეტერი',
        value: 'ბეტერი',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string, record) => record.brand.startsWith(value),
    width: '10%',
  },
  {
    title: 'ასორტიმენტი',
    dataIndex: 'assort',
    filters: [
      { text: 'შერჩევითი', value: 'შერჩევითი' }, //?
      { text: 'სრული', value: 'სრული' }, //?
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string, record) => record.assort.startsWith(value),
    width: '20%',

  },

  
  {
    title: 'მინიშნება',
    dataIndex: 'note',
    key: 'მინიშნება',
  },
  Table.EXPAND_COLUMN,
  {
    title: 'მოკლე შინაარსი',
    dataIndex: 'sumInf',
  },
  {
    title: 'მტრედი',
    dataIndex: 'mtrd',
    filters: [
      { text: 'კი', value: 'კი' }, //?
      { text: 'არა', value: 'არა' },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string, record) => record.mtrd.startsWith(value),
    width: '20%',
  },
  {
    title: 'კატეგორია',
    dataIndex: 'cat',
    filters: [
      { text: 'თავის მოვლა', value: 'თავის მოვლა' }, //?
      { text: 'ბავშვის მოვლა', value: 'ბავშვის მოვლა' },
      { text: 'ბავშვის კვება', value: 'ბავშვის კვება' }, //?
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string, record) => record.cat.startsWith(value),
    width: '20%',
  },
  {
    title: 'შეზღუდვა',
    dataIndex: 'restrict',
    filters: [
      { text: 'კი', value: 'კი' }, //?
      { text: 'არა', value: 'არა' },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value: string, record) => record.restrict.startsWith(value),
    width: '20%',
  },
  {
    title: 'არხი',
    dataIndex: 'channel',
  },
  {
    title: 'დაწყება',
    dataIndex: 'start',
  },
  {
    title: 'დასრულება',
    dataIndex: 'end',
  },
];

const data: DataType[] = [
  {
    key: '1',
    matCode: 96777,
    brand: 'აკოჯე',
    assort: 'შერჩევითი',
    note: 'სპეცფასი',
    sumInf: 'დამატებითი პროდუქტი',
    description:'საჩუქრად მიიღებს ლაკალუტის კბილის პასტას ფტორით 75მლ და შუბლზე კოცნას',
    mtrd: 'კი',
    cat: 'თავის მოვლა',
    restrict: 'კი',
    channel: 'ქსელი სრულად',
    start: '21/05/2023',
    end: '22/05/2023',

  },
  {
    key: '2',
    matCode: 96767,
    brand: 'აკოჯე',
    assort: 'სრული',
    note: '1+1 საჩუქარი',
    sumInf: 'საჩუქრად ინფორმაცია',
    description:'ოტორინოლარინგოლოგთან ვიზიტისას, ექიმმა შეიძლება დაგინიშნოს ანტიბიოტიკო-თერაპია',
    mtrd: 'კი',
    cat: 'თავის მოვლა',
    restrict: 'არა',
    channel: 'ქსელი სრულად',
    start: '21/05/2023',
    end: '22/05/2023',
  },
  {
    key: '3',
    matCode: 96777,
    brand: 'აკოჯე',
    assort: 'შერჩევითი',
    note: 'საჩუქარი',
    sumInf: 'საჩუქრად',
    description:'ბლაბლაბლაბლა',
    mtrd: 'კი',
    cat: 'თავის მოვლა',
    restrict: 'არა',
    channel: 'ქსელი სრულად',
    start: '21/05/2023',
    end: '22/05/2023',
  },
  {
    key: '4',
    matCode: 96757,
    brand: 'აკოჯე',
    assort: 'შერჩევითი',
    note: '3+2 საჩუქარი',
    description:'ბლაბლაბლაბლა',
    sumInf: 'დამ. ინფო',
    mtrd: 'კი',
    cat: 'თავის მოვლა',
    restrict: 'კი',
    channel: 'ქსელი სრულად',
    start: '21/05/2023',
    end: '22/05/2023',
  },
  {
    key: '5',
    matCode: 96727,
    brand: 'აკოჯე',
    assort: 'შერჩევითი',
    note: 'სპეცფასი',
    description:'ბლაბლაბლაბლა',
    sumInf: 'ასევეასევე',
    mtrd: 'კი',
    cat: 'თავის მოვლა',
    restrict: 'კი',
    channel: 'ქსელი სრულად',
    start: '21/05/2023',
    end: '22/05/2023',
  },
  {
    key: '6',
    matCode: 96771,
    brand: 'აკოჯე',
    assort: 'შერჩევითი',
    note: 'სპეცფასი',
    description:'ბლაბლაბლაბლა',
    sumInf: 'ასევეასევე',
    mtrd: 'კი',
    cat: 'თავის მოვლა',
    restrict: 'კი',
    channel: 'ქსელი სრულად',
    start: '21/05/2023',
    end: '22/05/2023',

  },
  {
    key: '7',
    matCode: 96377,
    brand: 'აკოჯე',
    assort: 'შერჩევითი',
    note: 'სპეცფასი',
    description:'ბლაბლაბლაბლა',
    sumInf: 'საჩუქრად 1 ნიფხავი',
    mtrd: 'კი',
    cat: 'თავის მოვლა',
    restrict: 'კი',
    channel: 'ქსელი სრულად',
    start: '21/05/2023',
    end: '22/05/2023',

  },
  
];


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => {

return(
<>
<Table 
    columns={columns} 
    dataSource={data} 
    onChange={onChange} 
    rowSelection={{}}
      expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
        }}
        pagination={{pageSize: 4}}
    />;
</>
)
}

export default App;