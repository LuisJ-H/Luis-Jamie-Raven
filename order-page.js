 function submitForm() {
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = 'Submitting...';

        // Simulate an asynchronous action (e.g., form submission)
        setTimeout(() => {
            // After the action is complete, reset the button text
            submitBtn.textContent = 'Submit';
        }, 2000); // Adjust the duration as needed
    }
    document.getElementById('myForm').addEventListener('submitBtn', function(event) {
        event.preventDefault();
        // Handle form submission without page reload
        // ...
    });
    
    