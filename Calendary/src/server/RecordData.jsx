// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditRecord = () => {
//  const [record, setRecord] = useState({ id: '', date: '', name: '' });

//  useEffect(() => {
//     fetchRecord();
//  }, []);

//  const fetchRecord = async () => {
//     const result = await axios.get('https://date.nager.at/api/v3/publicholidays/2023/SG');
//     setRecord(result.data);
//  };

//  const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecord({ ...record, [name]: value });
//  };

//  const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Airtable API update code
//     const apiKey = 'pat4Rf1s2QfBrJ2aE.bcfcb087a4f9861a22a7eaaed48f1b51067dbb1f78ce1a0f7c0b488aff387803';
//     const baseId = 'appgXtQByGQw5vxnL';
//     const tableName = 'tbl9MqQHf9mjQZA6Q';

//     await axios.patch(
//       `https://api.airtable.com/v0/${baseId}/${tableName}/${record.id}`,
//       {
//         fields: {
//           'date': record.date,
//           'name': record.name,
//         },
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json',
//         },
//       },
//     );

//     fetchRecord();
//  };

// };

// export default EditRecord;