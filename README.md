# ChaseRespond
A simple Apps Script / gmail organization methodology

## What it does
Automatically applies one of two labels, 'Chase' and 'Respond', to all 'starred' threads and emails in your Gmail inbox.

If the last email in a starred thread was sent by **you**, the script will star that email and apply the *Chase* label, so that it remains flagged for you to chase for a response and keep driving processes forward.

If the last email in a starred thread was **not sent by you**, the script will star that email and apply the *Respond* label, so that you know that you owe a response.

By creating these two labels, and then organizing your Inbox into 4 sections (one for all emails with the 'Chase' label, one for all emails with the 'Respond' label, all unread messages, and everything else), you may feel more control over your unrelenting firehose of email.

## How to Install:

Pre-install steps in your Gmail:
1) In your Gmail inbox, click the 'gear' icon, go to 'Labels' in your settings, and create two new labels: "Chase" and "Respond"
2) Go to your 'Inbox' settings and create four sections in your inbox: "All Chase", "All Respond", "All Unread", and "Everything Else"


To install the script: 
1) Create a new script by going to [https://script.google.com/create] .
2) Replace the contents of the script editor with the code in this repo.
3) Click File > Save, name your project “ChaseRespond”, and click OK.
4) Enable the Gmail API advanced service in your script.[https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services]
5) In the Apps Script editor, click Run > ChaseRespond. The first time you run it, it will prompt you to authorize access: Click the Continue button, and then click the Accept button.
6) Finally, set a time-based trigger for the script to have it run every 30 minutes - it seems this is the maximum frequency before reaching the Apps Script quota.


## Why I Made This:
As a co-founder at a startup that very quickly raised money and began running fast, my email inbox, predictably, became overwhelming to manage. 

When you're in a high-stress role, and *especially* when you are involved with any kind of business development, partnership, or sales efforts, I find that two categories of email generally create anxiety: 

1) Threads to which you need to respond, but haven't yet, because either A) you don't have the required information to respond or B) you haven't yet made time;

2) Emails which you send, the respondents of which you need to 'chase' for a response.

I understood that having visibility into both of these categories would be critical as the company grew. I needed some easy way to keep track of the threads that I needed to keep driving (outbound to sales prospects, time-sensitive partnerships, slow vendors) as well as those messages, mostly internal, (but also early customer support, legal / finance / HR topics that are less urgent) that required my response but weren't deserving of immediate attention. 

I wrote this script to take advantage of Gmail's 'star' button and use it as a one-click way to mark an email (or thread) as important. Critically, on the Gmail app, you can only 'star' threads, though on Gmail web individual messages are shown as starred.

If the last message in a starred thread was sent by the user, then the label 'Chase' is applied. If the last message in a starred thread was sent by someone other than the user, then the label 'Respond' is applied. If somebody replies to a 'Chase' thread, then the label is changed from 'Chase' to 'Respond'; if the user replies to a 'Respond' thread, vice versa.

As seen below, I organized my Gmail inbox to show all 'Respond' emails in the first pane, followed by 'Chase' emails, followed by all unread, followed by everything else. I find it a helpful way to not lose track of important threads, and seeing my 'Respond' emails first is a good reminder to never let threads sit for too long.

Please enjoy / try out this Google Apps Script and let me know what you think, whether about the (probably crummy) code or this inbox organizational philosophy and how it could be expanded or anything else!
