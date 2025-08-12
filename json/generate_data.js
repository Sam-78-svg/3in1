const fs = require('fs');

const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'India', 'Japan', 'China', 'Brazil'];
const fieldsOfStudy = ['Computer Science', 'Engineering', 'Business Administration', 'Marketing', 'Psychology', 'Biology', 'History', 'Physics'];
const educationLevels = ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD'];

const generateRandomData = () => {
  const people = [];

  for (let i = 1; i <= 1000; i++) {
    const age = Math.floor(Math.random() * 50) + 20; // Age between 20 and 70
    const yearsExperience = Math.floor(Math.random() * (age - 19)); // Experience up to age - 19
    
    const person = {
      id: i,
      name: `Person ${i}`,
      address: `123 Main St, City ${i}`,
      country: countries[Math.floor(Math.random() * countries.length)],
      mobile_no: `+1-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      education: educationLevels[Math.floor(Math.random() * educationLevels.length)],
      experience: `${yearsExperience} years`,
      field_of_study: fieldsOfStudy[Math.floor(Math.random() * fieldsOfStudy.length)],
      age: age
    };
    people.push(person);
  }
  return people;
};

const data = generateRandomData();
fs.writeFileSync('people_data.json', JSON.stringify(data, null, 2));

console.log('Successfully created people_data.json with 1000 entries.');