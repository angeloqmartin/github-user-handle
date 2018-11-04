function getRepos(username){
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(responseJson => displayRepos(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

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