import { BsCurrencyExchange, BsFillFileBinaryFill } from 'react-icons/bs';
import { GiComputerFan } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import product5 from './product5.jpg';
export const earningData = [
  {
    icon: <BsCurrencyExchange />,
    amount: '512',
    percentage: '78%',
    title: 'Forex Signals',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsFillFileBinaryFill />,
    amount: '320',
    percentage: '+84%',
    title: 'Binary Options Signals',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <GiComputerFan />,
    amount: '259',
    percentage: '+76%',
    title: 'Synthetic Indices Signals',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyExchange />,
    amount: '+$350',
    title: 'Forex',
    desc: 'Signals and Robots',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsFillFileBinaryFill />,
    amount: '-$560',
    desc: 'Binary Options',
    title: 'Signals and Robots',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <GiComputerFan />,
    amount: '+$350',
    title: 'Synthetic Indices',
    desc: 'Signals and Robots',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
];
export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Forex',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },

  {
    dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Binary Options',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },

  {
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Synthetic Indices',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
];

// stacked chart
export const stackedChartData = [
  [
    { x: 'Jan', y: 320.1 },
    { x: 'Feb', y: 450.3 },
    { x: 'Mar', y: 250.4 },
    { x: 'Apr', y: 340.9 },
    { x: 'May', y: 290.9 },
    { x: 'Jun', y: 400.9 },
    { x: 'July', y: 270.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];
export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Profit',
    type: 'StackingColumn',
    background: 'blue',
  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Loss',
    type: 'StackingColumn',
    background: 'red',
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};
export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 600,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

// Customers
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar,
    ProjectName: 'Facebook',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Whatsapp',
    Status: 'Active',
    CustomerImage: avatar,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Twitter',
    Status: 'Pending',
    CustomerImage: avatar,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'Instagram',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Liberty Mutabvuri',
    Status: 'Cancel',
    CustomerImage: avatar,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar,
    ProjectName: 'Telegram',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Google',
    Status: 'Active',
    CustomerImage: avatar,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
];

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center',
  },
  {
    field: 'ProjectName',
    headerText: 'Referrer',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus,
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center',
  },
  {
    field: 'Budget',
    headerText: 'Investment',
    width: '100',
    format: 'yMd',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },

  // {
  //   field: 'CustomerID',
  //   headerText: 'Customer ID',
  //   width: '120',
  //   textAlign: 'Center',
  //   isPrimaryKey: true,
  // },
];

// Employees
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Liberty Mutabvuri',
    Title: 'Technology Head',
    HireDate: '09/09/2022',
    Country: 'South Africa',
    ReportsTo: 'Self',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Tinashe Taderera',
    Title: 'Marketing Head',
    HireDate: '09/09/2022',
    Country: 'South Africa',
    ReportsTo: 'Self',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 3,
    Name: 'Clever Matambo',
    Title: 'Operations Head',
    HireDate: '09/09/2022',
    Country: 'South Africa',
    ReportsTo: 'Self',
    EmployeeImage: avatar,
  },
];

export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center',
  },
  { field: 'Name', headerText: '', width: '0', textAlign: 'Center' },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry,
  },

  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center',
  },

  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center',
  },
];

// Orders
export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];
export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];
export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Forex Signals',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: product5,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Binary Bot',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Quick Strategy',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product5,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Lesson',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product5,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Vola Indicator',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product5,
  },
];

//Robot
export const gridRobotStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
export const gridRobotImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.RobotImage}
      alt="robot-item"
    />
  </div>
);
export const robotsGrid = [
  {
    headerText: 'Image',
    template: gridRobotImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'RobotName',
    headerText: 'RobotName',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },

  {
    field: 'AccountBalance',
    headerText: 'Account Balance',
    format: 'C2',
    textAlign: 'Center',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridRobotStatus,
    field: 'RobotName',
    textAlign: 'Center',
    width: '120',
  },
];

export const robotsData = [
  {
    RobotID: 10248,
    CustomerName: 'Liberty Mutabvuri',
    AccountBalance: 332.38,
    RobotName: 'Rich and Rise',
    Status: 'waiting',
    StatusBg: '#FB9678',
    RobotImage: product5,
  },
  {
    RobotID: 10235,
    CustomerName: 'Carson Darrin',
    AccountBalance: 5002.38,
    RobotName: 'Binary Bot',
    Status: 'complete',
    StatusBg: '#8BE78B',
    RobotImage: product5,
  },
  {
    RobotID: 390457,
    CustomerName: 'Fran Perez',
    AccountBalance: 202.38,
    RobotName: 'Quickbucks',
    Status: 'active',
    StatusBg: '#03C9D7',
    RobotImage: product5,
  },
];
