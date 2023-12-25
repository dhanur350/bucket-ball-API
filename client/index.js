const bucketForm = document.getElementById("bucket-form");
const ballForm = document.getElementById("ball-form");
const bucketSuggestions = document.getElementById("bucket-suggestions");

bucketForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submittedData = new FormData(bucketForm);
  const formDataObject = Object.fromEntries(submittedData);
  console.log(formDataObject);

  try {
    const response = await fetch("http://localhost:4000/bucket-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
});

ballForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submittedData = new FormData(ballForm);
  const formDataObject = Object.fromEntries(submittedData);
  console.log(formDataObject);
  ///balls-entry
  try {
    const response = await fetch("http://localhost:4000/balls-entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
});

bucketSuggestions.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submittedData = new FormData(bucketSuggestions);
  const formDataObject = Object.fromEntries(submittedData);
  console.log(formDataObject);
});


function getAllBuckets() {
  try {
    fetch('http://localhost:4000/all-buckets')
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data);
    })
  } catch (error) {
    
  }
}

getAllBuckets()