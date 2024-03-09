/* Set date */

const currentDate = new Date();
const dateString = currentDate.toDateString();
const paragraph = document.querySelector('.current-time');
paragraph.textContent = dateString;

/* Display match data */
const matches = [
    {
        "team_a_code": "BAY",
        "team_b_code": "DOR",
        "date": "2024-03-15T17:00:00.000Z",
        "venue": "Allianz Arena",
        "tickets_available": true
    },
    {
        "team_a_code": "BAY",
        "team_b_code": "RBL",
        "date": "2024-03-24T17:00:00.000Z",
        "venue": "Allianz Arena",
        "tickets_available": false
    },
    {
        "team_a_code": "DOR",
        "team_b_code": "RBL",
        "date": "2024-03-28T17:00:00.000Z",
        "venue": "Signal Iduna Park",
        "tickets_available": true
    }
];

const teams = [
    {
        "BAY": {
            "name": "FC Bayern Munchen",
            "logo_url": "logo_munchen.png"
        },
        "DOR": {
            "name": "Borussia Dortmund",
            "logo_url": "logo_bvb.png"
        },
        "RBL": {
            "name": "RB Leipzeig",
            "logo_url": "logo_rbl.png"
        }
    }
]

function displayMatches() {
    const eventList = document.querySelector('.event-list');
  
    matches.forEach(match => {
      const teamA = teams.find(team => team[match.team_a_code]);
      const teamB = teams.find(team => team[match.team_b_code]);
  
      const eventCard = document.createElement('div');
      eventCard.classList.add('event-card');
  
      const teamALogo = document.createElement('img');
      teamALogo.classList.add('team-logo');
      teamALogo.src = `assets/${teamA[match.team_a_code].logo_url}`;
  
      const teamBLogo = document.createElement('img');
      teamBLogo.classList.add('team-logo');
      teamBLogo.src = `assets/${teamB[match.team_b_code].logo_url}`;
  
      const matchInfo = document.createElement('div');
      matchInfo.classList.add('match-info');
  
      const matchTitle = document.createElement('h1');
      matchTitle.textContent = `${teamA[match.team_a_code].name} vs ${teamB[match.team_b_code].name}`;
  
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
      status.classList.add('status', match.tickets_available ? 'available' : 'unavailable');
      status.textContent = match.tickets_available ? 'Tickets available' : 'Tickets unavailable';
  
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
    });
  }
  
  // Call the function to display matches
  displayMatches();
  




