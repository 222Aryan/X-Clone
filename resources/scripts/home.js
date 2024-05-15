let likes_list = [{'imgUrl':'resources/images/amazon_logo.png',
                'title':'Amazon',
                'link':'www.amazon.com'},
                {
                'imgUrl':'resources/images/google_logo.png',
                'title':'Google',
                'link':'www.google.com'}]

let event_list = [{'imgUrl':'resources/images/music_event.png',
                'title':'Coachella 2024',
                'content':'Music festival'},
                {
                'imgUrl':'resources/images/google_logo.png',
                'title':'Google',
                'content':''}]

let tweets_list = [{'imgUrl':'resources/images/psit_logo.png',
                'title':'PSIT Kanpur',
                'content':'Sample tweet'},
                {
                'imgUrl':'resources/images/psit_logo.png',
                'title':'Another Sample Tweet',
                'content':'Another Sample Tweet'}]


function renderPagesToLike(){
    let pagesToLikeHTML = '';
    for (ele of likes_list){
        pagesToLikeHTML += `
        <div>
            <img src=${ele.imgUrl}>
            <a href="${ele.link}">${ele.title}</a>
        </div>
        `  }
    document.getElementById('').innerHTML=eventsHTML;

}

function renderEvents(){
    eventsHTML = '';
    for (ele of  tweets_list ){
    eventsHTML += `
    <div>
        <img src=${ele.imgUrl}>
        <h2>${ele.title}</h2>
        <p>${ele.content}</p>
    </div>
    `}  
    document.getElementById('events').innerHTML=eventsHTML;

}

function renderTweets(){
    let tweetsHTML = '';
    for (ele of tweets_list){
        tweetsHTML += `
        <div id="events_ele">
            <img src=${ele.imgUrl}>
            <div id="events_ele_content">
                <h2>${ele.title}</h2>
                <p2>${ele.content}</p>
            </div>
        </div>
        `  }
    document.getElementById('').innerHTML=eventsHTML;

}

function logoutHandler(){
    localStorage.setItem('is_user_logged_in',false);
    location.href='index.html';
}

const is_user_logged_in = localStorage.getItem('is_user_logged_in');
console.log('is_user_logged_in',is_user_logged_in);
if (is_user_logged_in === 'false'){
    location.href = 'index.html'
}
    