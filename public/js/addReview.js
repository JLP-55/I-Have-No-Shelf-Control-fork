


///////////////////////////////////

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="review-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value;
  
    if (title && content) {
    const response = await fetch(`/api/review-routes`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create a review');
    }
  };
  };
  
document.querySelector('#new-review-form').addEventListener('submit', newFormHandler);