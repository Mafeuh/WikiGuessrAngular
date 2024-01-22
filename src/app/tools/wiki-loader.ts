export class WikiLoader {
    get_page() {
        return {
            'title': "Passeport italien",
            'paragraphs': [
                "Le passeport italien (en italien : passaporto italiano) est un document de voyage international délivré aux ressortissants italiens, et qui peut aussi servir de preuve de la citoyenneté italienne.",
                "En janvier 2024, les citoyens italiens peuvent entrer sans visa préalable (soit absence de visa, soit visa délivré lors de l'arrivée sur le territoire) dans 194 pays et territoires pour des voyages d'affaires ou touristiques de courte durée. Selon l'étude de Henley & Partners, le passeport italien est le plus puissant du monde (à égalité avec les passeports allemand, espagnol, français, japonais et singapourien) en termes de liberté de voyages internationaux.",
                "Dans le passeport italien, les informations sur l'identité du titulaire se trouvent à la page 2 du document et comprennent les informations suivantes dans l'ordre de leur énumération"
            ]
        }
    }

    get_page2(){
        // Replace 'your_url_here' with the actual URL you want to fetch data from
        const apiUrl = 'http://mafeuhnas.ddns.net:8000/getpage';

        // Using the fetch API
        return fetch(apiUrl)
    }
}