fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    var select = document.getElementById("countries");
    data.forEach((country) => {
      let option = document.createElement("option");
      let country_name = country.name.common;
      option.innerHTML = country_name;
      select.appendChild(option);
    });
  });
