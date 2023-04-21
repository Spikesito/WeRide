const isValidDate = (dateString) => {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!regex.test(dateString)) {
    return false;
  }

  const [_, day, month, year] = regex.exec(dateString);
  const date = new Date(year, parseInt(month) - 1, day);
  if (date.getFullYear() !== parseInt(year) || date.getMonth() + 1 !== parseInt(month) || date.getDate() !== parseInt(day)) {
    return false;
  }

  return true;
};

const isFormComplete = (title, description, departureDate, departure, arrival) => {
    if (title === '' || description === '' || departureDate === '' || departure === '' || arrival === '') {
        return false;
    } else {
        return true;
    }
};

const errorHandler = (setter, title, description, departureDate, departure, arrival) => {
    if (!isFormComplete(title, description, departureDate, departure, arrival)) {
        setter("Tous le champs ne sont pas remplis. Veuillez vérifier avant de renvoyer.")
        return false;
    } else if (!isValidDate(departureDate)) {
        setter("Le format de la date n'est pas valide. Veuillez vérifier avant de renvoyer.")
        return false;
    }
    return true;
}

export {errorHandler};