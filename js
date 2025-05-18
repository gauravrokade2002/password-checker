document.getElementById('password').addEventListener('input', function() {
    const password = this.value;

    // Basic criteria
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Additional criteria
    const noSingleCharRepeat = !/(.)\1/.test(password); // No double repeated characters
    const noTripleCharRepeat = !/(.)\1\1/.test(password); // No triple repeated characters
    const noSequentialChars = !/(012|123|234|345|456|567|678|789|890|12|23|34|45|56|67|78|89|1234|12345|ab|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|wxy|xyz)/.test(password); // No sequential characters

    // Check for forbidden patterns: single, double, or triple repetitions
    const noForbiddenPatterns = !(/(\d)\1{2,}|([a-zA-Z])\2{2,}|(.)(?=.*\1{2,})/.test(password));
    
    // Update feedback UI
    document.getElementById('length').classList.toggle('valid', lengthCriteria);
    document.getElementById('uppercase').classList.toggle('valid', uppercaseCriteria);
    document.getElementById('lowercase').classList.toggle('valid', lowercaseCriteria);
    document.getElementById('number').classList.toggle('valid', numberCriteria);
    document.getElementById('special').classList.toggle('valid', specialCriteria);

    // Calculate number of criteria met
    const criteriaMet = [
        lengthCriteria, 
        uppercaseCriteria, 
        lowercaseCriteria, 
        numberCriteria, 
        specialCriteria, 
        noSingleCharRepeat, 
        noTripleCharRepeat, 
        noSequentialChars,
        noForbiddenPatterns
    ].filter(Boolean).length;

    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    strengthBar.className = '';
    strengthText.className = '';

    // Determine password strength
    if (criteriaMet === 0) {
        strengthBar.style.width = '0';
        strengthText.textContent = '';
    } else if (criteriaMet <= 2) {
        strengthBar.classList.add('weak');
        strengthText.textContent = 'Weak';
        strengthText.classList.add('weak-text');
    } else if (criteriaMet <= 4) {
        strengthBar.classList.add('fair');
        strengthText.textContent = 'Fair';
        strengthText.classList.add('fair-text');
    } else if (criteriaMet <= 6) {
        strengthBar.classList.add('good');
        strengthText.textContent = 'Good';
        strengthText.classList.add('good-text');
    } else if (criteriaMet <= 7) {
        strengthBar.classList.add('strong');
        strengthText.textContent = 'Strong';
        strengthText.classList.add('strong-text');
    } else if (criteriaMet === 8) {
        strengthBar.classList.add('very-strong');
        strengthText.textContent = 'Very Strong';
        strengthText.classList.add('very-strong-text');
    }
});
