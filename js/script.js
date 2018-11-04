function getRepos(username){
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } throw new err(response.statusText);
    })
    .then(responseJson => displayRepos(responseJson))
    .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`)
    });}

function displayRepos (responseJson) {
    const repoObj = responseJson.map(item => 
        `<li>${item.name}
        <a href="${item.html_url}">GoTO Repo</a></li>`);
    $('.js-results-list').html(repoObj)
}

function watchSearch (){
    $('form').submit(e => {
        e.preventDefault();
        const username = $('.username').val();
        getRepos(username);
    })
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchSearch();
})