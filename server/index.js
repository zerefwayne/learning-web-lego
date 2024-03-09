const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Match = require('./models/Match');
const Team = require('./models/Team');

const db = require('./config/database');

const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

(async () => {
  try {
    Team.hasMany(Match, { foreignKey: 'team_a_code', as: 'MatchesA', sourceKey: 'code' });
    Team.hasMany(Match, { foreignKey: 'team_b_code', as: 'MatchesB', sourceKey: 'code' });

    Match.belongsTo(Team, { foreignKey: 'team_a_code', as: 'TeamA', targetKey: 'code' });
    Match.belongsTo(Team, { foreignKey: 'team_b_code', as: 'TeamB', targetKey: 'code' });

    await db.sync();

    console.log('Database synchronized.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

app.get('/api/matches', async (req, res) => {
  console.log('/api/matches');

  try {
    // Fetch matches with associated teams
    const matches = await Match.findAll({
      include: [
        { model: Team, as: 'TeamA' },
        { model: Team, as: 'TeamB' },
      ],
    });

    // Convert Sequelize model instances to plain objects
    const matchesData = matches.map(match => match.toJSON());

    res.json({ matches: matchesData });
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
