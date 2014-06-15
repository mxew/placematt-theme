//LETS GET YOUR TWEET, MAN.
function recent_tweets(data) {
    var date0 = data[0].created_at;
    var date1 = new Date(Date.parse(date0.replace(/( +)/, ' UTC$1')));
    var month = date1.getMonth() + 1;
    var day = date1.getDate();
    var year = date1.getFullYear();
    var date = month+'/'+day+'/'+year;
          
    document.getElementById("tweets").innerHTML = data[0].text;
    document.getElementById("twsource").innerHTML = '<a title="tweeted '+date+'" href="http://twitter.com/'+data[0].user.screen_name+'/status/' + (data[0].id_str ? data[0].id_str : data[0].id) +'">@'+data[0].user.screen_name+'</a>';
    document.getElementById("twitter").style.display = 'block';
};