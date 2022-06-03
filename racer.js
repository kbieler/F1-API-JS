//function to make api call
const getRacers = async (season, round) => {
        let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
        console.log(response)
        return response.data
};

//function to translate data from api to html table
let loadRacers = async (season, round) => {
    let data = await getRacers(season, round);
    console.log(data);
    if (typeof data === 'object') {
        let stat_table = `<table class="table table-warning table-striped">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Driver Name</th>
            <th scope="col">Nationality</th>
            <th scope="col">Sponsor</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position}</th>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points}</td>
          </tr>
          <tr>
            <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position}</th>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points}</td>
          </tr>
          <tr>
            <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position}</th>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points}</td>
          </tr>
          <tr>
            <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position}</th>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points}</td>
          </tr>
          <tr>
            <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position}</th>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points}</td>
          </tr>
          <tr>
            <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position}</th>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points}</td>
          </tr>
          <tr>
            <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position}</th>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name}</td>
            <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points}</td>
          </tr>
        </tbody>
      </table>`;
      document.getElementById('container-2').insertAdjacentHTML('afterbegin', stat_table);
    } else {
        errors.innerHTML = 'Please enter a valid year and round.';
        errors.hidden =false;
    }
};

//tie api call to an event
const form = document.querySelector('#searchf1');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    loadRacers(season, round);
    errors.hidden = true;
    form.reset(); 
});