const RegisterErrorHandler = (email, pseudo, password, confirmPassword, name, phone, age) => {
    var errorMsg = "";

    const ComparePassword = (password, confirmPassword) => {
        if (password != confirmPassword) {
            errorMsg += "Les mots de passe ne correspondent pas.\n"
        }
    }

    const WhichArgIsMissing = (email, pseudo, password, confirmPassword, name, phone, age) => {
        if (email == "") {
            errorMsg += "Le champs 'Email' est vide.\n";
        }
        if (pseudo == "") {
            errorMsg += "Le champs 'Pseudo' est vide.\n";
        }
        if (password == "") {
            errorMsg += "Le champs 'Password' est vide.\n";
        }
        if (confirmPassword == "") {
            errorMsg += "Le champs 'ConfirmPassword' est vide.\n";
        }
        if (name == "") {
            errorMsg += "Le champs 'Name' est vide.\n";
        }
        if (phone == "") {
            errorMsg += "Le champs 'Phone Number' est vide.\n";
        }
        if (age == "") {
            errorMsg += "Le champs 'Age' est vide.\n";
        }
    }

    ComparePassword(password, confirmPassword)
    WhichArgIsMissing(email, pseudo, password, confirmPassword, name, phone, age)

    return errorMsg
}

export default RegisterErrorHandler