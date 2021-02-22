# Accenture-Challenge

This project is inspired by Accenture's Code.Now! challenge. I discovered this challenge only after the submission deadline, but I still gave it a try.
Credits go to the Open AQ Platform API who's air quality data I am using for this challenge.

Below are Accenture's specific requirements. 

### In the Frontend:

The web app should display the air quality index and other relevant properties for countries, its cities and its locations. The frontend should be user friendly and fulfill the following requirements:

- Responsive UI   `✅ CSS @media queries ensure a responsive design.`
- Clean and modern design   `✅ Minimalistic design, but there is certainly room for improvement.`
- The following attributes need to be displayed in the order given: `❌ I omitted local date, time and location to ensure a cleaner design`
  - the location name
  - the city and country name
  - the air pollution value and its measurement unit and particulate matter parameter
  - the location's longitude and latitude value
  - the local date and time value
  - The list must support infinite scrolling and should be sortable by each attribute(ASC and DESC)
 
Additionally, the client demands a solution capable of filtering the data by: `✅ Search by country code or city name.`
- one country
- one city

### In the Backend:

The backend needs to be capable to:

- Fetch data from AQ public API `✅ The backend server queries the AQ public API.`
- Insert AQ API data into a database `❌ This would have useless for this app.`
- Provide endpoint to serve AQ data to the frontend `✅ Express server provides the endpoint.`

## Conclusion:

This challenge was a great way to test my fullstack programming skills. I'm happy with the final result.
