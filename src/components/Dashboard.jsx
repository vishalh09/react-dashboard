import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = [
  {"timestamp":"2019-01-02T03:50:09.097718","flow_id":52373568,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65036,"dest_ip":"138.68.3.71","dest_port":3306,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010937,"rev":3,"signature":"ET SCAN Suspicious inbound to mySQL port 3306","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.386108","flow_id":52491840,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65386,"dest_ip":"138.68.3.71","dest_port":5915,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2002911,"rev":5,"signature":"ET SCAN Potential VNC Scan 5900-5920","category":"Attempted Information Leak","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.421359","flow_id":52507296,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65438,"dest_ip":"138.68.3.71","dest_port":5432,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010939,"rev":3,"signature":"ET SCAN Suspicious inbound to PostgreSQL port 5432","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.576769","flow_id":52568784,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49238,"dest_ip":"138.68.3.71","dest_port":1433,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010935,"rev":3,"signature":"ET SCAN Suspicious inbound to MSSQL port 1433","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.585758","flow_id":52576512,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49269,"dest_ip":"138.68.3.71","dest_port":1521,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010936,"rev":3,"signature":"ET SCAN Suspicious inbound to Oracle SQL port 1521","category":"Potentially Bad Traffic","severity":2}},
  {"timestamp":"2019-01-02T03:50:10.621656","flow_id":52589280,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49306,"dest_ip":"138.68.3.71","dest_port":5811,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2002910,"rev":5,"signature":"ET SCAN Potential VNC Scan 5800-5820","category":"Attempted Information Leak","severity":2}},
  {"timestamp":"2019-01-02T03:50:11.315110","flow_id":52710912,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":49678,"dest_ip":"138.68.3.71","dest_port":22,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2001219,"rev":19,"signature":"ET SCAN Potential SSH Scan","category":"Attempted Information Leak","severity":2}},
  {"timestamp":"2019-01-02T03:51:01.124914","flow_id":52713600,"in_iface":"eth0","event_type":"alert","src_ip":"61.176.222.167","src_port":59947,"dest_ip":"138.68.3.71","dest_port":1433,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010935,"rev":3,"signature":"ET SCAN Suspicious inbound to MSSQL port 1433","category":"Potentially Bad Traffic","severity":2}}
];

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Prepare chart data
  const timestamps = data.map(item => item.timestamp);
  const severities = data.map(item => item.alert.severity);

  const lineChartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Alert Severities Over Time',
        data: severities,
        fill: false,
        borderColor: '#4A90E2',
        backgroundColor: '#4A90E2',
      },
    ],
  };

  const barChartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Alert Severities Over Time',
        data: severities,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="container mx-auto p-6 dark:bg-gray-900 dark:text-white min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold py-4 m-2.5">Alert Dashboard</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Toggle Dark Mode
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
            <thead>
              <tr>
                {['Timestamp', 'Flow ID', 'Source IP', 'Source Port', 'Destination IP', 'Destination Port', 'Protocol', 'Signature', 'Category', 'Severity'].map((heading, index) => (
                  <th key={index} className="px-4 py-2 border dark:border-gray-700 font-medium bg-gray-200 dark:bg-gray-700">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 m-7 dark:hover:bg-gray-700">
                  <td className="px-4 py-2 border dark:border-gray-700">{item.timestamp}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.flow_id}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.src_ip}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.src_port}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.dest_ip}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.dest_port}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.proto}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.alert.signature}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.alert.category}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.alert.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Line Chart</h2>
            <Line data={lineChartData} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
            <Bar data={barChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
