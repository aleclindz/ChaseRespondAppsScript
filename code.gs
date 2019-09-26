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
     
      if(threadHasLabel(starredThreadLabels, RespondLabel)) {
        starredThread.removeLabel(RespondLabel);
      }
      
      if(!threadHasLabel(starredThreadLabels, ChaseLabel)) {
        starredThread.addLabel(ChaseLabel);
      }
      
    } else {
      
      if(threadHasLabel(starredThreadLabels, ChaseLabel)) {
        starredThread.removeLabel(ChaseLabel);
      }
      
      if(!threadHasLabel(starredThreadLabels, RespondLabel)){
         starredThread.addLabel(RespondLabel);
      }
    }
  }
  
  var chaseArray = ChaseLabel.getThreads();
  var unstarredChaseArray = chaseArray.filter(isNotStarred);
  
  unstarredChaseArray.forEach(function(thread) {
    thread.removeLabel(ChaseLabel);
  });
  
  var respondArray = RespondLabel.getThreads();
  var unstarredrespondArray = respondArray.filter(isNotStarred);
  
  unstarredrespondArray.forEach(function(thread) {
    thread.removeLabel(RespondLabel);
  });
}
    
function isNotStarred(someThread) {
  return !someThread.hasStarredMessages();
}

function threadHasLabel(threadLabelArray, label) {
  
  if(threadLabelArray.length == 0){
    return;
  }
  
  for(var z = 0; z < threadLabelArray.length; z++){
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
