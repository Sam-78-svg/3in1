document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default submit
  const alertBox = document.getElementById("alertBox");
  alertBox.innerHTML = ""; // clear message

  const name = document.getElementById("name");
  const email = document.getElementById("Email"); // Ensure your input id matches
  const age = document.getElementById("age");

  try {
    if (name.value.trim() === "") {
      throw new Error("Name is required");
    }

    if (email.value.trim() === "") {
      throw new Error("Email is required");
    }

    if (age.value.trim() === "") {
      throw new Error("Age is required");
    }

    if (isNaN(age.value)) {
      throw new Error("Age must be a number");
    }

    const ageNum = parseInt(age.value);
    if (ageNum < 18 || ageNum > 100) {
      throw new Error("Age must be between 18 and 100 only");
    }

    // if all is well
    showAlert("Registration has successfully completed", "success");
  } catch (error) {
    showAlert(error.message, "danger");
  } finally {
    console.log("Validation is completed");
  }
});

function showAlert(message, typeOfExecution) {
  const alertBox = document.getElementById("alertBox");
  const alertHtml = `<div class='alert alert-${typeOfExecution} alert-dismissible fade show' role='alert'>
    ${message}
    <button type='button' class='btn-close' data-bs-dismiss='alert'></button>
    </div>`;
  alertBox.innerHTML = alertHtml;
}