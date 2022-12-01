(function(){
    document.forms.As10.noValidate = true;

    var form = document.getElementById('As10');
    
    var elements = form.elements;
    var valid = {};
    var isValid;
    var isFormValid;

    var submit = document.getElementById('submit');
    var submitted = false;
    submit.disabled = true;
    submit.className = 'disabled';
    
    //Looping through elements to display error message if needed

    var i;
    for (i = 0; i < elements.length; i++) {
        isValid = validateRequired(elements[i]);
        if(!isValid) {
            showErrorMessage(elements[i]);
        } else {
            removeErrorMessage(elements[i]);
        }
        valid[elements[i].id] = isValid;
    }

    //Calling to validation methods defined later on

    if(!validateUsername) {
        showErrorMessage(document.getElementById('username'));
        valid.username = false;
    } else {
        removeErrorMessage(document.getElementById('username'))
    }

    if(!validatePassword) {
        showErrorMessage(document.getElementById('password1'));
        valid.password1 = false;
    } else {
        removeErrorMessage(document.getElementById('password1'))
    }

    if(!confirmPassword) {
        showErrorMessage(document.getElementById('password2'));
        valid.password2 = false;
    } else {
        removeErrorMessage(document.getElementById('password2'))
    }

    if(!validateCheckbox) {
        showErrorMessage(document.getElementById('terms'));
        valid.checkbox = false;
    } else {
        removeErrorMessage(document.getElementById('terms'))
    }

    if(!validateCountry) {
        showErrorMessage(document.getElementById('country'));
        valid.select = false;
    } else {
        removeErrorMessage(document.getElementById('country'))
    }

    //Checking 'valid' object if each value is true, submit form
    for (var field in valid) {
        if(!valid[field]) {
            isFormValid = false;
            break;
        }
        isFormValid = true;
    }
    //if form is not valid
    if(!isFormValid) {
        submitted = false;
        submit.disabled = true;
        submit.className = 'disabled';
    } else {
        submitted.disabled = false;
        submit.removeClass();
    }
    //each change made check if submit.disabled is changed

    $('select').each(function(){
        addEvent(this, 'change', function(e){
            var target = e.target || e.srcElement;
            submit.disabled = submitted || !target.value;
            submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
        });
    });
    //on submit disable submit button for another attempt

    addEvent(form, 'submit', function(e){
        submit.disabled = true;
        submitted = true;
        submit.className = 'disabled';
        var username = document.getElementById('username');
        var select = document.getElementById('country');
        e.preventDefault();
        alert('Welcome ' + username.value + '! The country code you selected is ' + select.value);
    });
    
    //check if validation is required  (needs following 2 methods)

    function validateRequired(val) {
        if(isRequired(val)) {
            var valid = !isEmpty(val);
            if(!valid) {
                setErrorMessage(val, 'Field is required');
            }
            return valid;
        }
        return true;
    }
    function isRequired(val) {
        return ((typeof val.required === 'boolean') && val.required) || (typeof val.required === 'string');
    }
    function isEmpty(val) {
        return !val.value || val.value === val.placeholder;
    }

    //VALIDATION FOR INPUTS 

    function validateUsername() {
        var username = document.getElementById('username');
        var valid = username.value.length < 0;
        if (!valid) {
            setErrorMessage(username, 'Please enter a username');
        }
        return valid;
    }
    function validatePassword() {
        var password1 = document.getElementById('password1');
        var valid = password1.value >= 12;
        if(!valid) {
            setErrorMessage(password1, "Password must be a minimum of 8 characters");
        }
        return valid;
    }
    function confirmPassword() {
        var password1 = document.getElementById('password1');
        var password2 = document.getElementById('password2');
        var valid = password1.value === password2.value;
        if(!valid) {
            setErrorMessage(password2, "Passwords must match");
        }
        return valid;
    }
    function validateCheckbox() {
        var checkbox = document.getElementById('terms');
        var valid = checkbox.checked;
        if(!valid) {
            setErrorMessage(checkbox, "You must consent to our Terms of Service");
        }
        return valid;
    }
    function validateCountry() {
        var select = document.getElementById('country');
        var defaultSelect = select.firstChild; 
        var valid = !defaultSelect;
        if (!valid) {
            setErrorMessage(select, "You must select a country");
        }
        return valid;
    }

    //Error message helper methods

    function setErrorMessage(val, message) {
        $(val).data('errorMessage', message);
      }
      function getErrorMessage(val) {
        return $(val).data('errorMessage') || val.title; 
      }
      function showErrorMessage(val) {
        var $val = $(val);
        var errorContainer = $val.siblings('.error.message');
    
        if (!errorContainer.length) {
           errorContainer = $('<span class="error message"></span>').insertAfter($val);
        }
        errorContainer.text(getErrorMessage(val));
      }
      function removeErrorMessage(val) {
        var errorContainer = $(val).siblings('.error.message');
        errorContainer.remove();
      }
}());