const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_body = document.querySelector('input[name="comment-body"]').value.trim();

    if (comment_body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ review_id, comment_body }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create a comment');
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);