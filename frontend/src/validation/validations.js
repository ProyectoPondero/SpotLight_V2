const validateName = (name) => {
    const regexp = /^[a-zA-Z ]+$/;
    return regexp.test(name) ? name : false;
}

const validatePhone = (phone) => {
    const regexp = /^[0-9]{10}$/;
    return regexp.test(phone) ? phone : false;
}

const validateEmail = (email) => {
    const regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexp.test(email) ? email : false;
}

const validatePassword = (password) => {
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regexp.test(password) ? password : false;
}

export { validateName, validatePhone, validateEmail, validatePassword };