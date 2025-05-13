// Local Storage for User Data
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Register Form
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;

  // Simpan ke local storage
  localStorage.setItem('currentUser', JSON.stringify({ name, number }));
  alert('Pendaftaran berhasil!');
  window.location.href = 'home.html';
});

// Add Contact Modal
const addContactModal = document.getElementById('addContactModal');
document.getElementById('addContactBtn')?.addEventListener('click', () => {
  addContactModal.style.display = 'block';
});

document.querySelector('.close')?.addEventListener('click', () => {
  addContactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === addContactModal) {
    addContactModal.style.display = 'none';
  }
});

// Add Contact Form
document.getElementById('addContactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const contactNumber = document.getElementById('newContactNumber').value;
  const contactName = document.getElementById('newContactName').value;

  // Simpan kontak ke local storage
  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push({ number: contactNumber, name: contactName });
  localStorage.setItem('contacts', JSON.stringify(contacts));

  alert('Kontak berhasil ditambahkan!');
  addContactModal.style.display = 'none';
  loadContacts();
});

// Load Contacts
function loadContacts() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  contacts.forEach((contact) => {
    const li = document.createElement('li');
    li.textContent = `${contact.name} (${contact.number})`;
    contactList.appendChild(li);
  });
}

// Search Contacts
document.getElementById('searchContact')?.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const contactList = document.getElementById('contactList');
  Array.from(contactList.children).forEach((li) => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(query) ? 'block' : 'none';
  });
});

// Load Contacts on Page Load
if (document.getElementById('contactList')) {
  loadContacts();
}
