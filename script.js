// Toggle accordion sections
function toggle(header) {
  const body = header.nextElementSibling;
  body.classList.toggle("show");
}

// Payment failure popup
function payFail() {
  document.getElementById("popup").style.display = "flex";
}

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Add input validation to show error on blur (optional but shows "something wrong")
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.input-field');
  
  inputs.forEach(input => {
    // Show subtle error styling when user tries to use fields
    input.addEventListener('focus', function() {
      this.style.borderColor = '#ef4444';
    });
    
    input.addEventListener('blur', function() {
      if (this.value.length > 0) {
        this.style.borderColor = '#ef4444';
        this.style.backgroundColor = '#fef2f2';
      } else {
        this.style.borderColor = '#d1d5db';
        this.style.backgroundColor = 'white';
      }
    });
  });
});
