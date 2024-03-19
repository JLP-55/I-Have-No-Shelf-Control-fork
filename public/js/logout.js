const userInput = document.querySelector("option");
// console.log(userInput);

// for (var i = userInput.length; i >= 0; i++) {
//   console.log("hello");
  // Things[i]
  // if (userInput.id = 2) {
  // };
// };

// ====================== adding a book function =============== //

const addBook = async () => {
  const response = await fetch("/api/addBooks", {
 method: "POST",
   headers: {"Content-type": "applocation/json"},
  });
  if (response.ok) {
    document.location.replace(`/gallery/${4}`);
    console.log("hello");
  } else {
    alert("something went wrong");    
  };
};

// ====================== ===================== =============== //

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
document.querySelector('.book-addition').addEventListener('click', addBook);



///////////////////////////////////////////////////////////////////////


