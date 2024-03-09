const currentDate = new Date();
const dateString = currentDate.toDateString();
const paragraph = document.querySelector('.current-time');
paragraph.textContent = dateString;