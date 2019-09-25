function SortChaseRespond() {
  
  var starredThreads = GmailApp.getStarredThreads();
  
  var myEmail = Session.getActiveUser().getEmail();
  
  var ChaseLabel = GmailApp.getUserLabelByName("Chase");
  
  var RespondLabel = GmailApp.getUserLabelByName("Respond");
  
  var starredThreadsLength = starredThreads.length;
  
  for(var i = 0; i< starredThreadsLength; i++) {
    
    var starredThread = starredThreads[i];
    
    var starredThreadLabels = starredThread.getLabels();
    
    var starredThreadMessageCount = starredThread.getMessageCount();
               
    var starredThreadMessages = starredThread.getMessages();
    
    var lastMessage = starredThreadMessages[starredThreadMessageCount -1];
    
    if(!lastMessage.isStarred()) {
      for(var j = 0; j < starredThreadMessageCount-1; j++) {
      
        if(starredThreadMessages[j].isStarred) {
          starredThreadMessages[j].unstar();
        }
      }
     lastMessage.star();
    } else if(lastMessage.isStarred()) {
      for(var j = 0; j < starredThreadMessageCount-1; j++) {
      
        if(starredThreadMessages[j].isStarred) {
          starredThreadMessages[j].unstar();
        }
      }
    }
    
    
    Logger.log(lastMessage.getFrom());
    
    var cleanEmailOfLastMessageSender = returnEmail(lastMessage.getFrom());
    
    if(cleanEmailOfLastMessageSender == myEmail) {
      
      Logger.log("I sent the last email. Need to add a Chase label.");
      
      if(threadHasLabel(starredThreadLabels, RespondLabel)) {
        starredThread.removeLabel(RespondLabel);
        Logger.log("removing respond label");
      }
      
      if(!threadHasLabel(starredThreadLabels, ChaseLabel)) {
        starredThread.addLabel(ChaseLabel);
        Logger.log("Adding chase label");
      }
      
    } else {
      
      Logger.log("I didn't send the last email. Need to add a respond label.");
      
      if(threadHasLabel(starredThreadLabels, ChaseLabel)) {
        starredThread.removeLabel(ChaseLabel);
        Logger.log("Removing chase label");
      }
      
      if(!threadHasLabel(starredThreadLabels, RespondLabel)){
         starredThread.addLabel(RespondLabel);
         Logger.log("Adding respond label");
      }
    }
  }
  
  var chaseArray = ChaseLabel.getThreads();
  Logger.log("chaseArray length = " + chaseArray.length);
  var unstarredChaseArray = chaseArray.filter(isNotStarred);
  Logger.log("unstarredChaseArray length = " + unstarredChaseArray.length);
  
  unstarredChaseArray.forEach(function(thread) {
    thread.removeLabel(ChaseLabel);
  });
  
  var respondArray = RespondLabel.getThreads();
  Logger.log("respondArray length = " + respondArray.length);
  var unstarredrespondArray = respondArray.filter(isNotStarred);
  Logger.log("Before forEach is run, the unstarredrespondArray length = " + unstarredrespondArray.length);
  
  unstarredrespondArray.forEach(function(thread) {
    thread.removeLabel(RespondLabel);
  });
  
  Logger.log("After the forEach is run, the unstarredrespondArray length = " + unstarredrespondArray.length);
  
}
    
function isNotStarred(someThread) {
  return !someThread.hasStarredMessages();
}

function threadHasLabel(threadLabelArray, label) {
  
  Logger.log(threadLabelArray.length);
  
  if(threadLabelArray.length == 0){
    return;
  }
  
  for(var z = 0; z < threadLabelArray.length; z++){
    Logger.log(threadLabelArray[z].getName());
    Logger.log(label.getName());
    Logger.log(threadLabelArray[z] == label);
    
    if(threadLabelArray[z].getName() == label.getName()){
      return true;
    }
  }
  
  return false;
}

function returnEmail(gmailUserString) {
  var startIndex = gmailUserString.indexOf('<');
  if(startIndex == -1) {
    return gmailUserString;
  }
  var endIndex = gmailUserString.indexOf('>');
  var pureEmailString = gmailUserString.slice(startIndex + 1, endIndex);
  return pureEmailString;
}
