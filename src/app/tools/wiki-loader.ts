export class WikiLoader {
    get_page(){
        // Replace 'your_url_here' with the actual URL you want to fetch data from
        //const apiUrl = 'http://mafeuhnas.ddns.net:8000/getpage';
        const apiUrl = 'http://localhost:8000/getpage'
        // Using the fetch API
        return fetch(apiUrl)
    }

    get_categories(){
        const apiUrl = 'http://mafeuhnas.ddns.net:8000/getcategories';

        return fetch(apiUrl)
    }
}