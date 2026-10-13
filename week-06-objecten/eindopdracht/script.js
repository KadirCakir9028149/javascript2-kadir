const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const showUsers = (users) => {
  const usersContainer = document.getElementById('users');
  const userCards = users.map((user) => {
    const { name, email, role, active } = user;
    const article = document.createElement('article');
    const heading = document.createElement('h3');
    const emailParagraph = document.createElement('p');
    const roleParagraph = document.createElement('p');
    const statusParagraph = document.createElement('p');

    heading.textContent = name;
    emailParagraph.textContent = email;
    roleParagraph.textContent = `Rol: ${role}`;
    statusParagraph.textContent = `Status: ${active ? 'Actief' : 'Inactief'}`;

    article.append(heading, emailParagraph, roleParagraph, statusParagraph);
    return article;
  });

  usersContainer.replaceChildren(...userCards);
};

const filterUsers = () => {
  const filteredUsers = filter === 'admin'
    ? users.filter(({ role }) => role === 'admin')
    : users;

  showUsers(filteredUsers);
};

document.getElementById('filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.getElementById('filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

document.getElementById('user-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const role = document.getElementById('role').value;
  const defaultUser = { name: '', email: '', role: 'user', active: true };
  const newUser = { ...defaultUser, name, email, role };

  users.push(newUser);
  event.currentTarget.reset();
  filterUsers();
});

filterUsers();
