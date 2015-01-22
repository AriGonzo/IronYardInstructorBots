/* Davidbot app.js */

function play(){
  var think = document.getElementById('think');
  think.play();
  }

function search(){
  var newURL = "http://lmgtfy.com/?q=" + $('#question').val();
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
      play()
      setTimeout(search, 2000);
      });
  });

var apiBase = 'http://api.hipchat.com/v2/room/1093325/notification?auth_token='
var auth_token = 'TOAf8J4LiaP6fz7a63WRix6d6I5BcHHGbiZTyrhT'

document.addEventListener('DOMContentLoaded', function() {
  var linkToShare = '';
  var currentTab = document.getElementById('hipchat');
  currentTab.addEventListener('click', function(){
    event.preventDefault();
      event.preventDefault();
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      $.ajax({
        type: 'POST',
        url: apiBase + auth_token,
        data: JSON.stringify({
          'message' : $('#question').val() + " " + tabs[0].url,
          'color'   : 'purple',
          "message_format" : 'text'
        }),
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
  $('#davidHat').toggleClass('hidden')
  });

