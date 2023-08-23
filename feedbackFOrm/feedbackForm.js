window.onload = function() {
    console.log("hello");
    // Get the feedback form and add a submit event listener
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get the form data
        const formData = new FormData(feedbackForm);
        
        // Check for errors
        let errorMessage = '';
        if (!formData.get('first-name')) {
            errorMessage += 'First name is required.<br>';
        }
        if (!formData.get('last-name')) {
            errorMessage += 'Last name is required.<br>';
        }
        if (!formData.get('email')) {
            errorMessage += 'Email is required.<br>';
        } else {
            // Check email format
            const emailFormat = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (!emailFormat.test(formData.get('email'))) {
                errorMessage += 'Email format is invalid.<br>';
            }
        }
        if (!formData.get('occupation')) {
            errorMessage += 'Occupation is required.<br>';
        }
        if (!formData.get('section')) {
            errorMessage += 'Section is required.<br>';
        }
        if (!formData.get('comment')) {
            errorMessage += 'Comment is required.<br>';
        }
        
        // Display error message if there are any errors
        const errorMessageDiv = document.getElementById('error-message');
        if (errorMessage) {
            errorMessageDiv.innerHTML = errorMessage;
        } else {
            errorMessageDiv.innerHTML = '';
            
            // Create object to store form data
            const feedback = {
                firstName: formData.get('first-name'),
                lastName: formData.get('last-name'),
                email: formData.get('email'),
                occupation: formData.get('occupation'),
                section: formData.get('section'),
                comment: formData.get('comment')
            };
            
            // Save feedback data to local storage
            localStorage.setItem('feedback', JSON.stringify(feedback));
            
            // Clear the form
            feedbackForm.reset();
            
            // Display success message
            alert('Thank you for your feedback!');
        }
    });
    const feedback = JSON.parse(localStorage.getItem('feedback'));
    console.log(feedback);
};