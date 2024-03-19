//const loginFormHandler = async (event) => {
   // event.preventDefault();
  
    // Collect values from the login form
    //const email = document.querySelector('#email-login').value.trim();
    //const password = document.querySelector('#password-login').value.trim();
  
   //if (email && password) {
      // Send a POST request to the API endpoint
     // const response = await fetch('/api/users/login', {
      //  method: 'POST',
       // body: JSON.stringify({ email, password }),
      //  headers: { 'Content-Type': 'application/json' },
      //});
  
      //if (response.ok) {
        // If successful, redirect the browser to the profile page
      //  document.location.replace('/profile');
      //} else {
      //  alert(response.statusText);
     // }
    //}
 //; };

  // ================== Add a Book Event Handler =================== //
  
  const addBookHandler = async () => {

    const bookTitle = document.querySelector('#book-title').value.trim();
    const bookAuthor = document.querySelector('#book-author').value.trim();
    const bookGenre = document.querySelector('input[name=genre]:checked').value;
    const bookYear = document.querySelector('#book-year').value.trim();
    const bookSummary = document.querySelector('#summary').value.trim();
  
    if (bookTitle && bookAuthor && bookGenre && bookYear && bookSummary) {
      const response = await fetch('/api/add_book-routes', {     // ================== Add a Book Event Handler =================== //
        method: 'POST',
        body: JSON.stringify({ bookTitle, bookAuthor, bookGenre, bookYear, bookSummary }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Please enter all the fields');
      }
    }
  };
// ====================== adding a book function =============== //

const addBook = async () => {
    const response = await fetch("/api/add_book-routes", {
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
  
  //document
    //.querySelector('.signup-form')
   // .addEventListener('submit', signupFormHandler);


  document
    .querySelector('.book-addition').addEventListener('click', addBook);
  