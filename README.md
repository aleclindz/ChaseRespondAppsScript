# ChaseRespond
A simple Apps Script / gmail organization methodology

# Why I Made This:
As the founding COO of a startup that very quickly raised money and began running fast, my email inbox ecame overwhelming. 

When you're building an early stage company, and *especially* when you are leading any kind of business development, partnership, or sales efforts, I found that two categories of email generally created anxiety: 

1) Threads that I needed to respond to but hadn't yet, either because A) I didn't have the required information to respond or B) hadn't yet made time;

2) Emails which I had send, the respondents of which I needed to 'chase' for a response.

I understood that having visibility into both of these categories would be critical as the company grew. I needed some easy way to keep track of the threads that I needed to keep driving (outbound to sales prospects, time-sensitive partnerships, slow vendors) as well as those messages, mostly internal, that required my response. 

I wrote this script to take advantage of Gmail's 'star' button and use it as a one-click way to mark an email (or thread) as important. Critically, on the Gmail app, you can only 'star' threads, though in the Gmail API and on Gmail web individual messages are shown as starred.

If the last message in a starred thread was sent by the user, then the label 'Chase' is applied. If the last message in a starred thread was sent by someone other than the user, then the label 'Respond' is applied. If somebody replies to a 'Chase' thread, then the label is changed from 'Chase' to 'Respond'; if the user replies to a 'Respond' thread, vice versa.

As seen below, I organized my Gmail inbox to show all 'Respond' emails in the first pane, followed by 'Chase' emails, followed by all unread, followed by everything else. I find it a helpful way to not lose track of important threads, and seeing my 'Respond' emails first is a good reminder to never let threads sit for too long.

Please enjoy / try out this Google Apps Script and let me know what you think, whether about the (probably crummy) code or this inbox organizational philosophy and how it could be expanded or anything else!
