let roleUser = ''; // Initialize with an empty string
let nameUser ='';

function setRole(role) {
  roleUser = role;
}

function getRole() {
  return roleUser;
}

function setName(name) {
    nameUser = name;
  }
  
  function getName() {
    return nameUser;
  }

export { setRole, getRole, setName, getName };
