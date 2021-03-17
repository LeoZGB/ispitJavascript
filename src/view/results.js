export default (rez) => {
  if(rez.data.length){
    return `<h3>Rezultati za Vaš upit</h3>
          <table>
            <thead>
              <tr>
                <th>Artist name</th>
                <th>Song name</th>
              </tr>
            </thead>
            <tbody>
              ${rez.data.map((elem) => {
                  return `<tr><td>${elem.artist.name}</td><td>${elem.title}</td></tr>`;
                }).join('')}
            </tbody>
          </table>`;
    } else {
      return '<h3>Nema rezultata za traženi pojam.</h3>';
    }
};