document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var lifeExpectancy = getLifeExpectancy(gender);
    var summersLeft = lifeExpectancy - age;
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Based on the average life expectancy of a " + gender + ", you have about " + summersLeft + " summers left on earth.   <br><br>The 'Present' is a gift from God, so be that change you want to see in the world!</p>";
  });
  
  function getLifeExpectancy(gender) {
    // Average life expectancy in years
    if (gender === "male") {
      return 76;
    } if (gender === "female") {
      return 81;
    }
  }
  
