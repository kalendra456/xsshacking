const jsonFileURL = 'https://raw.githubusercontent.com/kalendra456/xsshacking/main/json%20xss.json';

// Fetch the JSON data
fetch(jsonFileURL)
  .then((response) => response.json())
  .then((data) => {
    // Process and use the JSON data
    console.log('JSON data:', data);

    // You can perform actions with the JSON data here
    // For example, display it in the HTML or manipulate it
  })
  .catch((error) => {
    console.error("Error loading JSON data:", error);
  });