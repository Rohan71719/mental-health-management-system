// Function to open the Edit Profile Modal with animation
function openEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    modal.style.display = "block";
    setTimeout(() => modal.classList.add("show"), 10); // Smooth animation
  }
  
  // Function to close the Edit Profile Modal with animation
  function closeEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300); // Delay hiding after animation
  }
  
  // Close the modal when clicking anywhere outside of it
  window.onclick = function(event) {
    if (event.target === document.getElementById('edit-profile-modal')) {
      closeEditProfileModal();
    }
  }
  
 // Profile Edit Form Submission
document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Validate form fields
  const name = document.getElementById('new-name').value.trim();
  const age = document.getElementById('new-age').value.trim();
  const contact = document.getElementById('new-contact').value.trim();
  const email = document.getElementById('new-email').value.trim();

  // Name validation: should not contain numbers
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!name || !nameRegex.test(name)) {
    alert('Please enter a valid name (letters and spaces only).');
    return;
  }

  // Age validation: must be a positive number
  if (!age || isNaN(age) || age <= 0) {
    alert('Please enter a valid positive number for age.');
    return;
  }

  // Contact validation: must be numeric
  const contactRegex = /^[0-9]+$/;
  if (!contact || !contactRegex.test(contact)) {
    alert('Please enter a valid numeric mobile number.');
    return;
  }

  // Email validation: must be a Gmail address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!email || !emailRegex.test(email)) {
    alert('Please enter a valid Gmail address (e.g., example@gmail.com).');
    return;
  }

  // Update profile information dynamically
  document.getElementById('profile-name').textContent = name;
  document.getElementById('profile-age').textContent = age;
  document.getElementById('profile-contact').textContent = contact;
  document.getElementById('profile-email').textContent = email;

  // Display success message
  showNotification('Profile updated successfully!', 'success');

  // Close modal
  closeEditProfileModal();

  // Reset the form
  document.getElementById('edit-profile-form').reset();
});

// Show notifications
function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.classList.add('notification', type);
  notification.textContent = message;
  document.body.appendChild(notification);

  // Automatically remove notification after 3 seconds
  setTimeout(() => notification.remove(), 3000);
}

// Toggle the additional tips in Wellness Tips Section
function toggleTips() {
  const additionalTips = document.getElementById('additional-tips');
  additionalTips.classList.toggle('hidden');
}

// Example function for profile picture upload (can be expanded)
document.getElementById('profile-picture-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profile-picture').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Example of making an API call to fetch updated status or other data (simulated)
function fetchLatestStatus() {
  // Simulating an API call with setTimeout
  setTimeout(() => {
    document.getElementById('recent-status').innerHTML = `
      <h2>Recent Status</h2>
      <div class="dashboard-card recent-status">
        <p><strong>Status:</strong> Improved</p>
        <p><strong>Last Update:</strong> December 3, 2024</p>
        <p><strong>Notes:</strong> Therapy sessions are progressing well, medication is effective.</p>
      </div>
    `;
    showNotification('Status updated successfully!', 'info');
  }, 2000);
}

// Run the function to fetch the latest status as an example
fetchLatestStatus();
