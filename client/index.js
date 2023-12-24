const form = document.getElementById('bucket-form');

form.addEventListener('submit',async (event)=> {
  event.preventDefault();
  const submittedData = new FormData(form);
  const formDataObject = Object.fromEntries(submittedData);
  console.log(formDataObject);
})


