/* Set date */

const currentDate = new Date();
const dateString = currentDate.toDateString();
const paragraph = document.querySelector('.current-time');
paragraph.textContent = dateString;

/* Display match data */

async function displayMatches() {
  const eventList = document.querySelector('.event-list');

  const data = await fetch('http://localhost:8000/api/matches');
  const { matches } = await data.json();

  console.log(matches);

  try {
    matches.forEach(match => {

      console.log(match);

      const eventCard = document.createElement('div');
      eventCard.classList.add('event-card');

      const teamALogo = document.createElement('img');
      teamALogo.classList.add('team-logo');
      teamALogo.src = `assets/${match.TeamA.logo_url}`;

      const teamBLogo = document.createElement('img');
      teamBLogo.classList.add('team-logo');
      teamBLogo.src = `assets/${match.TeamB.logo_url}`;

      const matchInfo = document.createElement('div');
      matchInfo.classList.add('match-info');

      const matchTitle = document.createElement('h1');
      matchTitle.textContent = `${match.TeamA.name} vs ${match.TeamB.name}`;

      const matchDate = document.createElement('h2');
      const formattedDate = new Date(match.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      matchDate.innerHTML = `${formattedDate}`;

      const matchVenue = document.createElement('h3');
      matchVenue.textContent = match.venue;

      const status = document.createElement('b');
      status.classList.add('status', 'available');
      status.textContent = 'Tickets available';

      // Append elements to the event card
      matchInfo.appendChild(matchTitle);
      matchInfo.appendChild(matchDate);
      matchInfo.appendChild(matchVenue);
      matchInfo.appendChild(status);

      eventCard.appendChild(teamALogo);
      eventCard.appendChild(matchInfo);
      eventCard.appendChild(teamBLogo);

      // Append the event card to the event list
      eventList.appendChild(eventCard);

      console.log(eventList);
      console.log(eventCard);
    }) 
  } catch (e) {
    console.log(e);
  }
};

// Call the function to display matches
displayMatches();





