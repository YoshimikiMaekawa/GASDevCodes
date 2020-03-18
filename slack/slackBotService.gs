function doPost(e) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var slackApp = SlackApp.create(token);
  var botToken = "***************"; //write Outgoing WebHooks' Token here.
  var channelID;
  var message;
  var userName;
  var iconUrl;
  
  if(botToken == e.parameter.token){
    channelID = "****"; //channel ID
    message = "Hello!!";
    userName = "Test Service";
    iconUrl = "https://2.bp.blogspot.com/--tK6L-RmW-Y/WxvJot722lI/AAAAAAABMio/eKmnsWVyybAs7fZVuuDiNBbDXSSyZ7cgQCLcBGAs/s800/bird_menfukurou.png";
  }else {
    channelID = "****"; //channel ID
    message = "Warning: Possibility of unauthorized access";
    userName = "Warning Message";
    iconUrl = "https://1.bp.blogspot.com/-JgjGUdCLrIg/UUQ0qXejRiI/AAAAAAAAO3k/LGEKQA3rFd8/s1600/Tyrannosaurus.png";
  }
  
  slackApp.postMessage(
    channelID, 
    message, 
    {
      username: userName,
      icon_url: iconUrl
    }
  );
}