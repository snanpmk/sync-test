export const MOCK_USERS = [
    { id: '1', name: 'Alex Johnson', email: 'alex@example.com', role: 'Customer', status: 'Active', createdAt: '2023-10-01' },
    { id: '2', name: 'Sarah Williams', email: 'sarah@example.com', role: 'Admin', status: 'Active', createdAt: '2023-09-15' },
    { id: '3', name: 'Michael Chen', email: 'michael@example.com', role: 'Customer', status: 'Inactive', createdAt: '2023-11-20' },
    { id: '4', name: 'Emma Davis', email: 'emma@example.com', role: 'Customer', status: 'Active', createdAt: '2023-10-12' },
    { id: '5', name: 'James Wilson', email: 'james@example.com', role: 'Customer', status: 'Active', createdAt: '2023-12-05' },
];

export const MOCK_ORDERS = [
    { id: '1024', customer: 'Alex Johnson', date: 'Oct 24, 2023', total: 129.00, status: 'Processing' },
    { id: '1025', customer: 'Emma Davis', date: 'Oct 25, 2023', total: 249.50, status: 'Completed' },
    { id: '1026', customer: 'Michael Chen', date: 'Oct 26, 2023', total: 89.99, status: 'Pending' },
    { id: '1027', customer: 'Sarah Williams', date: 'Oct 27, 2023', total: 450.00, status: 'Shipped' },
    { id: '1028', customer: 'James Wilson', date: 'Oct 28, 2023', total: 15.00, status: 'Cancelled' },
];

export const MOCK_INVENTORY = [
    { id: '1', name: 'Premium Card V1', sku: 'SKU-001', category: 'Premium', stock: 45, price: 49.99 },
    { id: '2', name: 'Review Stand Pro', sku: 'SKU-002', category: 'Reviews', stock: 12, price: 89.99 },
    { id: '3', name: 'Basic Tag', sku: 'SKU-003', category: 'Essentials', stock: 150, price: 19.99 },
    { id: '4', name: 'Business Bundle', sku: 'SKU-004', category: 'Premium', stock: 5, price: 199.99 },
    { id: '5', name: 'Custom Keychain', sku: 'SKU-005', category: 'Custom', stock: 0, price: 29.99 },
];

export const SALES_DATA = [
    { name: 'Mon', amount: 2400 },
    { name: 'Tue', amount: 1398 },
    { name: 'Wed', amount: 9800 },
    { name: 'Thu', amount: 3908 },
    { name: 'Fri', amount: 4800 },
    { name: 'Sat', amount: 3800 },
    { name: 'Sun', amount: 4300 },
];

export const USER_GROWTH_DATA = [
    { name: 'Sep', users: 400 },
    { name: 'Oct', users: 800 },
    { name: 'Nov', users: 1200 },
    { name: 'Dec', users: 1500 },
];
