import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const data = [
    {
      "month": "Mar",
      "investment": 100000,
      "sell": 241,
      "revenue": 10401
    },
    {
      "month": "Apr",
      "investment": 200000,
      "sell": 423,
      "revenue": 24500
    },
    {
      "month": "May",
      "investment": 500000,
      "sell": 726,
      "revenue": 67010
    },
    {
      "month": "Jun",
      "investment": 500000,
      "sell": 529,
      "revenue": 40405
    },
    {
      "month": "Jul",
      "investment": 600000,
      "sell": 601,
      "revenue": 50900
    },
    {
      "month": "Aug",
      "investment": 700000,
      "sell": 670,
      "revenue": 61000
    }
  ]
  return (
    <section className='grid justify-items-center grid-cols-1 md:grid-cols-2 p-2 m-2 gap-5 md:mx-20 '>

      <div className='w-4/5 bg-slate-200 rounded-2xl text-center  justify-center items-center'>
        <h1 className='text-lg text-bold text-blue-600 p-2 m-3 text-center'>Month Wise Sell</h1>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            width={450}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey='' />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='w-4/5 bg-slate-200 rounded-2xl text-center  justify-center items-center'>
        <h1 className='text-lg text-bold text-blue-600 p-2 m-3 text-center'>Investment vs Revenue</h1>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart width={350} height={350}>
            <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            <Tooltip />
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='w-4/5 bg-slate-200 rounded-2xl text-center  justify-center items-center'>
        <h1 className='text-lg text-bold text-blue-600 p-2 m-3 text-center'>Investment vs Revenue</h1>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={400}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className='w-4/5 bg-slate-200 rounded-2xl text-center  justify-center items-center'>
        <h1 className='text-lg text-bold text-blue-600 p-2 m-3 text-center'>Investment vs Revenue</h1>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </section>
  );
};


export default Dashboard;