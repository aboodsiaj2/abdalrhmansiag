// Handle form submission for comments
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = form.querySelector('input[type="text"]').value;
        const comment = form.querySelector('textarea').value;

        if (name && comment) {
            const commentList = form.nextElementSibling;
            const newComment = document.createElement('div');
            newComment.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;
            commentList.appendChild(newComment);
            form.reset(); // Reset the form fields
        } else {
            alert('Please fill out both fields!');
        }
    });
});

// Handle subscription form
document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        this.reset(); // Reset the form
    } else {
        alert('Please enter a valid email!');
    }
});
