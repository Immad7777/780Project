// Assuming 'myBtn' is the ID of an element that when clicked should prompt for a name.
document.getElementById("myBtn").onclick = function() {
    var name = prompt("Please enter your name:", "");
    if (name != null && name != "") {
        // Replace 'Heads' with the actual ID where you want to display the name.
        document.getElementById("Heads").innerHTML = "Hello, " + name;
    }
};

// Assuming 'myDP' is the ID of an element that when clicked should toggle an image zoom.
document.getElementById("myDP").onclick = function() {
    var img = this.getElementsByTagName('img')[0];
    if (img) {
        img.classList.toggle("Zoomed");
    }
};

// Function to show the dropdown, ensure 'ecDropdown' is the correct ID of your dropdown.
function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.style.display = 'block';
    }
}

// Function to hide the dropdown, ensure 'ecDropdown' is the correct ID of your dropdown.
function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

// Event listener for form submission, replace 'yourFormId' if your form has an ID.
window.addEventListener('load', function() {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
            
            // Collect form data, ensuring IDs match your form input IDs.
            var formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                age: document.getElementById('age').value,
                phone: document.getElementById('phone').value,
                improvement: document.querySelector('input[name="improvement"]:checked') ? document.querySelector('input[name="improvement"]:checked').value : '',
                multimedia: Array.from(document.querySelectorAll('input[name="multimedia"]:checked')).map(input => input.value),
                favoriteColor: document.getElementById('colors').value,
                submissionDate: document.getElementById('date').value,
                favoriteWebElementFile: document.getElementById('file').files.length > 0 ? document.getElementById('file').files[0].name : '',
                favoriteWebsite: document.getElementById('url').value
            };

            // Store data in local storage
            localStorage.setItem('formData', JSON.stringify(formData));

            // Optionally, redirect to another page or show a submission success message
            // window.location.href = 'results.html';
            alert('Form data saved!');
        });
    }
});
