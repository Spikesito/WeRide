import axios from "axios";

const handleAddressChange = (text, setter, setterSugg, setterShow) => {
  setter(text);

  axios
    .get(`https://api-adresse.data.gouv.fr/search/?q=${text}`)
    .then((response) => {
      const suggestions = response.data.features.map((feature) => {
        return {
          label: feature.properties.label,
        };
      });
      setterSugg(suggestions);
      setterShow(suggestions.length > 0);
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleAddressSelect = (item, setter, setterSugg, setterShow) => {
  setter(item.label);
  setterSugg([]);
  setterShow(false);
};

export { handleAddressChange, handleAddressSelect };