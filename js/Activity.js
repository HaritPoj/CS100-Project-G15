function addRow() {
    var nameInput = document.getElementById('fullname');
    var emailInput = document.getElementById('email');
    var stdidInput = document.getElementById('stdid');
    var workTitleInput = document.getElementById('workTitle');
    var activityTypeInput = document.getElementById('activityType');
    var startDateInput = document.getElementById('startDate');
    var endDateInput = document.getElementById('endDate');
    var locationInput = document.getElementById('location');

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var idError = document.getElementById('IDError');
    var workTitleError = document.getElementById('workTitleError');
    var activityTypeError = document.getElementById('activityTypeError');
    var startDateError = document.getElementById('startDateError');
    var endDateError = document.getElementById('endDateError');
    var locationError = document.getElementById('locationError');

    var nameRegex = /^[a-zA-Z\s\-]+$/;
    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Invalid name. Please use only letters, spaces, or hyphens.';
        nameInput.setCustomValidity('Invalid name');
    } else {
        nameError.textContent = '';
        nameInput.setCustomValidity('');
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email. Please enter a valid email address.';
        emailInput.setCustomValidity('Invalid email');
    } else {
        emailError.textContent = '';
        emailInput.setCustomValidity('');
    }

    var idRegex = /^\d{10}$/;
    if (!idRegex.test(stdidInput.value)) {
        idError.textContent = 'Invalid ID. Please enter a 10-digit number.';
        stdidInput.setCustomValidity('Invalid ID');
    } else {
        idError.textContent = '';
        stdidInput.setCustomValidity('');
    }

    if (workTitleInput.value.trim() === '') {
        workTitleError.textContent = 'Please enter a work/activity title.';
        workTitleInput.setCustomValidity('Work/Activity title is required');
    } else {
        workTitleError.textContent = '';
        workTitleInput.setCustomValidity('');
    }

    if (activityTypeInput.value === '') {
        activityTypeError.textContent = 'Please select a type of work/activity.';
        activityTypeInput.setCustomValidity('Type of work/activity is required');
    } else {
        activityTypeError.textContent = '';
        activityTypeInput.setCustomValidity('');
    }

    if (startDateInput.value === '') {
        startDateError.textContent = 'Please enter a start date and time.';
        startDateInput.setCustomValidity('Start date/time is required');
    } else {
        startDateError.textContent = '';
        startDateInput.setCustomValidity('');
    }

    if (endDateInput.value === '') {
        endDateError.textContent = 'Please enter an end date and time.';
        endDateInput.setCustomValidity('End date/time is required');
    } else {
        endDateError.textContent = '';
        endDateInput.setCustomValidity('');
    }
    if (locationInput.value.trim() === '') {
        locationError.textContent = 'Please enter a location.';
        locationInput.setCustomValidity('Location is required');
    } else {
        locationError.textContent = '';
        locationInput.setCustomValidity('');
    }
    if (
        nameInput.checkValidity() &&
        emailInput.checkValidity() &&
        stdidInput.checkValidity() &&
        workTitleInput.checkValidity() &&
        activityTypeInput.checkValidity() &&
        startDateInput.checkValidity() &&
        endDateInput.checkValidity() &&
        locationInput.checkValidity()
    ) {
        var fullname = nameInput.value;
        var email = emailInput.value;
        var stdid = stdidInput.value;
        var workTitle = workTitleInput.value;
        var activityType = activityTypeInput.value;
        var startDate = startDateInput.value;
        var endDate = endDateInput.value;
        var location = locationInput.value;

        var table = document.getElementById('dataTable');

        var newRow = table.insertRow(-1);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);

        cell1.innerHTML = fullname;
        cell2.innerHTML = email;
        cell3.innerHTML = stdid;
        cell4.innerHTML = workTitle;
        cell5.innerHTML = activityType;
        cell6.innerHTML = startDate;
        cell7.innerHTML = endDate;
        cell8.innerHTML = location;

        document.getElementById('myForm').reset();
    }
}

function validateName() {
    var nameInput = document.getElementById('fullname');
    var nameError = document.getElementById('nameError');

    var nameRegex = /^[A-Z][a-zA-Z\s\-]*$/;

    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Invalid name. Please use uppercase as first letter and only letters, spaces, or hyphens required.';
        nameInput.setCustomValidity('Invalid name');
    } else {
        nameError.textContent = '';
        nameInput.setCustomValidity('');
    }
}

function validateID() {
    var stdidInput = document.getElementById('stdid');
    var idError = document.getElementById('IDError');

    var regex = /^6\d{9}$/;

    if (!regex.test(stdidInput.value)) {
        idError.textContent = 'Invalid ID. Please enter a 10-digit number that start with 6.';
        stdidInput.setCustomValidity('Invalid ID');
    } else {
        idError.textContent = '';
        stdidInput.setCustomValidity('');
    }
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailPattern = /^.+@dome\.tu\.ac\.th$/;
    const errorElement = document.getElementById("emailError");
  
    if (!emailPattern.test(emailInput.value)) {
      errorElement.textContent =
        "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
      return false;
    } else {
      errorElement.textContent = ""; // Clear the error message when valid
    }
    return true;
  }