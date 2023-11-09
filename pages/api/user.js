const users = [
  { id: 1,name:'Admin', email: 'admin@admin.com', password: 'admin123' },
];

function findByEmail(email) {
  return users.find(user => user.email === email);
}

export { users, findByEmail };
