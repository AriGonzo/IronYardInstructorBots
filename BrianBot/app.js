/* Davidbot app.js */

function play(){
  var think = document.getElementById('think');
  think.play();
  }

function search(){
  var newURL = "https://rubygems.org/search?query=" + $('#question').val();
  chrome.tabs.create({ url: newURL });
  return false;
};

function delay(fnc, time){
  setTimeout(fnc, time);
  return false;
};

document.addEventListener('DOMContentLoaded', function() {
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function(){
      event.preventDefault();
      search()
      setTimeout(search, 2000);
      });
  });

var apiBase = 'https://slack.com/api/chat.postMessage?token=xoxp-3520991751-3717813329-3719698362-6afcf8&channel=C03JNHJ2R&text='

document.addEventListener('DOMContentLoaded', function() {
  var linkToShare = '';
  var currentTab = document.getElementById('hipchat');
  currentTab.addEventListener('click', function(){
    event.preventDefault();
      event.preventDefault();
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      $.ajax({
        type: 'POST',
        url: apiBase + $('#question').val() + " " + tabs[0].url + '&username=BrianBot&icon_url=http://i.imgur.com/NsTWOAa.png',
        error: function(e){
          console.log(e);
        },
        dataType: "json",
        contentType: "application/json"
        });
      });
    return false;
  });
});


$("#hat").on('click', function(){
  $('#amerikitty').toggleClass('hidden')
  });

