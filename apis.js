const APIKEY = ['4b46f3cc37334fa3bc5e78219ac48c45', 'd9a53722354c4cdcabca1f198af8d2cd'];

const web_url = `https://newsapi.org/v2/everything?q=web%20development&apiKey=${APIKEY[1]}`;
const mobile_url = `https://newsapi.org/v2/everything?q=web%20development&apiKey=${APIKEY[1]}`;
const ml_url = `https://newsapi.org/v2/everything?q=web%20development&apiKey=${APIKEY[1]}`;
const security_url = `https://newsapi.org/v2/everything?q=web%20development&apiKey=${APIKEY[1]}`;

const web_data = [];
const mobile_data = [];
const ml_data = [];
const security_data = [];

const fetchNews = async () => {
    const web_news = await fetch(web_url);
    const mobile_news = await fetch(mobile_url);
    const ml_news = await fetch(ml_url);
    const security_news = await fetch(security_url);

    web_data = await web_news.json();
    mobile_data = await mobile_news.json();
    ml_data = await ml_news.json();
    security_data = await security_news.json();

    return {
        web: web_data,
        mob: mobile_data,
        ml: ml_data,
        sec: security_data,
    };
};

const fetchWebNews = async () => {
    if (web_data.length === 0) {
        await fetchNews();
    }
    // diaplay web news in html page
    document.getElementById('web-news').innerHTML = web_data.articles.map((article) => {
        return `
            <div class="card">
                <img src="${article.urlToImage}" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${article.title}</b></h4>
                    <p>${article.description}</p>
                    <a href="${article.url}">Read More</a>
                </div>
            </div>
        `;
    }
    ).join('');
};

export default {
};