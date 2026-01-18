// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoading = submitButton.querySelector('.button-loading');
    const successMessage = document.getElementById('successMessage');

    // Form validation
    function validateForm() {
        let isValid = true;
        
        // Clear previous errors
        clearErrors();
        
        // Validate full name
        const fullName = document.getElementById('fullName').value.trim();
        if (!fullName) {
            showError('fullNameError', 'Full name is required');
            isValid = false;
        } else if (fullName.length < 2) {
            showError('fullNameError', 'Full name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showError('emailError', 'Email address is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate message
        const message = document.getElementById('message').value.trim();
        if (!message) {
            showError('messageError', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none';
        });
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        let isValid = true;
        
        // Clear previous error for this field
        const errorElement = document.getElementById(fieldName + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        
        switch (fieldName) {
            case 'fullName':
                if (!value) {
                    showError('fullNameError', 'Full name is required');
                    isValid = false;
                } else if (value.length < 2) {
                    showError('fullNameError', 'Full name must be at least 2 characters');
                    isValid = false;
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    showError('emailError', 'Email address is required');
                    isValid = false;
                } else if (!emailRegex.test(value)) {
                    showError('emailError', 'Please enter a valid email address');
                    isValid = false;
                }
                break;
                
            case 'message':
                if (!value) {
                    showError('messageError', 'Message is required');
                    isValid = false;
                } else if (value.length < 10) {
                    showError('messageError', 'Message must be at least 10 characters');
                    isValid = false;
                }
                break;
        }
        
        if (isValid) {
            field.classList.remove('error');
        } else {
            field.classList.add('error');
        }
        
        return isValid;
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Show loading state
            submitButton.disabled = true;
            buttonText.style.display = 'none';
            buttonLoading.style.display = 'inline';
            
            // Simulate form submission (since this is a static site)
            setTimeout(() => {
                // Get form data
                const formData = new FormData(form);
                const data = {
                    fullName: formData.get('fullName'),
                    email: formData.get('email'),
                    subject: formData.get('subject') || 'General Inquiry',
                    message: formData.get('message')
                };
                
                // In a real application, you would send this data to a server
                // For now, we'll just show the success message and prepare an email
                showSuccessMessage(data);
                
                // Reset button state
                submitButton.disabled = false;
                buttonText.style.display = 'inline';
                buttonLoading.style.display = 'none';
                
                // Reset form
                form.reset();
                clearErrors();
            }, 2000);
        }
    });
    
    function showSuccessMessage(data) {
        // Hide the form
        form.style.display = 'none';
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Create mailto link for the user to send email manually
        const subject = encodeURIComponent(`PDF Converter - ${data.subject}`);
        const body = encodeURIComponent(
            `Name: ${data.fullName}\n` +
            `Email: ${data.email}\n` +
            `Subject: ${data.subject}\n\n` +
            `Message:\n${data.message}\n\n` +
            `---\n` +
            `This message was composed using the PDF Converter contact form.`
        );
        
        const mailtoLink = `mailto:mbansode@icloud.com?subject=${subject}&body=${body}`;
        
        // Add a button to open email client
        const emailButton = document.createElement('button');
        emailButton.textContent = 'Open Email Client';
        emailButton.className = 'submit-button';
        emailButton.style.marginTop = '1rem';
        emailButton.onclick = function() {
            window.location.href = mailtoLink;
        };
        
        successMessage.appendChild(emailButton);
        
        // Add a "Send Another Message" button
        const anotherButton = document.createElement('button');
        anotherButton.textContent = 'Send Another Message';
        anotherButton.className = 'submit-button';
        anotherButton.style.marginTop = '0.5rem';
        anotherButton.style.backgroundColor = 'var(--secondary)';
        anotherButton.style.color = 'var(--secondary-foreground)';
        anotherButton.onclick = function() {
            form.style.display = 'block';
            successMessage.style.display = 'none';
            // Remove the added buttons
            emailButton.remove();
            anotherButton.remove();
        };
        
        successMessage.appendChild(anotherButton);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Character counter for message field
    const messageField = document.getElementById('message');
    const messageLabel = document.querySelector('label[for="message"]');
    
    function updateCharacterCount() {
        const currentLength = messageField.value.length;
        const minLength = 10;
        
        if (currentLength > 0 && currentLength < minLength) {
            messageLabel.textContent = `Message * (${currentLength}/${minLength} minimum characters)`;
        } else {
            messageLabel.textContent = 'Message *';
        }
    }
    
    messageField.addEventListener('input', updateCharacterCount);
    
    // Auto-resize textarea
    messageField.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.max(120, this.scrollHeight) + 'px';
    });
});

// Add some CSS for error states
const style = document.createElement('style');
style.textContent = `
    .form-input.error,
    .form-textarea.error {
        border-color: var(--destructive);
        box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
    }
    
    .error-message {
        display: none;
    }
`;
document.head.appendChild(style);
