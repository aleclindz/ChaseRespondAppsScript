# ChaseRespond
A simple Apps Script / gmail organization methodology

## What it does
Automatically applies one of two labels, 'Chase' and 'Respond', to all 'starred' threads and emails in your Gmail inbox.

If the last email in a starred thread was sent by **you**, the script will star that email and apply the *Chase* label, so that it remains flagged for you to chase for a response and keep driving processes forward.

If the last email in a starred thread was **not sent by you**, the script will star that email and apply the *Respond* label, so that you know that you owe a response.

If a thread is 'starred', but the last email itself is not the 'starred' email in the thread, then the script automatically moves the star to the last email in the thread and updates the label appropriately.

By creating these two labels, and then organizing your Inbox into 4 sections (one for all emails with the 'Chase' label, one for all emails with the 'Respond' label, all unread messages, and everything else), you may feel more control over your unrelenting firehose of email.

#### The end resulting inbox, with messages sorted nicely: ####

![ChaseRespond Inbox](/ChaseRespondInboxScreenshot.png?raw=true "Example Screenshot")

## How to Install:

### Pre-install steps in your Gmail: ###
1) In your Gmail inbox, click the 'gear' icon, go to 'Labels' in your settings, and create two new labels: "Chase" and "Respond"
2) Go to your 'Inbox' settings and choose 'Priority Inbox'
3) Create four sections in your inbox: "All Chase", "All Respond", "All Unread", and "Everything Else"

#### It should look like this: ####

![Inbox setting screenshot](/PriorityInbox4SectionFinalScreenshot.png?raw=true "Final Inbox Section Setup")


### To install the script: ###

1) Create a new script by going to [https://script.google.com/create] .
2) Replace the contents of the script editor with the code in this repo.
3) Click File > Save, name your project “ChaseRespond”, and click OK.
4) Enable the Gmail API advanced service in your script. [https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services]
5) In the Apps Script editor, click Run > ChaseRespond. The first time you run it, it will prompt you to authorize access: Click the Continue button, and then click the Accept button.
6) Finally, set a time-based trigger for the script to have it run every 30 minutes - it seems this is the maximum frequency before reaching the Apps Script quota.

#### How to get to Trigger settings: ####

![Trigger button location](/TimeTriggerButtonScreenshot.png?raw=true "Trigger button")

#### What your time-based trigger settings should look like: ####

![Time trigger settings](/TimeBasedTriggerSetupScreenshot.png?raw=true "Time trigger settings")

## Why I Made This:
As a co-founder at a startup that very quickly raised money and began running fast, my email inbox, predictably, became overwhelming to manage. 

I got into the habit of responding to every email ASAP, but hated the pressure and expectation that this habit created. I found myself less and less effectively undertaking intellectually demanding tasks, because my mind was always on my inbox, never wanting to delay a response, and constantly anxious when waiting for replies from others.

I understood that having visibility into both of these categories of emails - responses I needed to give, and processes I needed to 'chase' in order to drive a timeline - would be critical as the company grew. In the latter category, I would put outbound emails to sales prospects, follow-ups on time-sensitive partnerships, and nudges to slow vendors; in the former category, I would gives some longer-term customer support responses, as well as internal (legal / finance / HR) threads that required my response but weren't deserving of immediate attention. 

Manually assigning filters seemed intimidating, and I had gotten used to Gmail's 'starring' function, but I felt these two categories were distinct enough that I had to keep them separated in my inbox to have a clear view of my priorities. Hence, Iwrote this script to use Gmail stars as a one-click way to mark an email (or thread) as important, and then sort the thread into those I needed to either *respond* to or *chase*. 

Please note that on the Gmail mobile app, (at least on iOS) you can only 'star' threads, though on Gmail web individual messages are shown as starred.

As seen above, I organized my Gmail inbox to show all 'Respond' emails in the first section, followed by 'Chase' emails, followed by all unread, followed by everything else. I find seeing my 'Respond' emails first is a good reminder to never let threads sit for too long.

Please enjoy / try out this Google Apps Script and let me know what you think, whether about the (probably crummy) code or this inbox organizational philosophy and how it could be expanded or anything else!
