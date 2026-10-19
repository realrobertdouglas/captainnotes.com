---
layout: post
title:  "You Still Have to Know How Things Work"
subtitle: "AI made making things cheap. Judging them still takes knowing how they work, and the people who skip that part are about to make a lot of slop."
date:   2026-10-19 16:43:13 +0000
categories: [notes]
comments: false
---

## The fix that wasn't

On July 30, the software my plumbing company runs on froze three times in one afternoon. Every screen in the office hung at once.

Each time, we restarted the database. Each time, it came back. So the restart was the fix, right?

It wasn't. When we finally looked, the numbers didn't fit the obvious story. The CPU peaked at 12% all day, memory was fine, and nothing had crashed.

The database wasn't overloaded. It was waiting. One connection was holding a lock, and every ordinary request in the app lined up behind it until it timed out.

The restart only looked like a fix because it killed the connection holding the lock. It also erased every clue about which one that was.

Ask an AI how to fix a frozen database, and "restart it" is a reasonable answer. It even works, for a while. You can only see that it's the wrong answer if you know what a lock is.

That's this whole article in one story. AI can do more of the work than ever. You still have to know how things work.

## The hard part moved

AI didn't remove the hard part of the work. It moved it.

Making something used to be slow, and the slowness taught you. You wrote it, it broke, and you learned why. By the time a thing worked, you understood it.

Now the making is nearly free. You describe what you want, and something shows up that looks finished. What's left is judging it. Is this right? Will it hold? What did it get wrong?

Judging is the part that needs the knowledge. You can't check an answer against a picture you don't have in your head.

I build software with AI every day, and a model typed most of the code our company runs on. The model is not what keeps it working. Knowing what to check is.

## Fast to 80%, lost at 81%

People say AI makes everything faster. For the first draft, they're right.

The slowness comes after. When the output is wrong and you don't know why, every fix is a guess. You paste the error back in. You get something different that's also wrong. You paste that error back in.

Each round feels like progress because something changed. It isn't progress, because you can't tell whether the change was the right one. You're not steering. You're rolling dice.

Someone who knows how the thing works reads the same error and sees the cause. A lock, not a load problem. A wrong assumption about the data, not a typo. They fix it once, and it stays fixed.

Both of those people got to 80% in an afternoon. Only one of them is ever going to get to done.

## Faking it got easier

Faking it used to hit a wall fast. If you didn't know how to build the thing, you couldn't build it, and everyone found out.

That wall moved. Someone who doesn't understand the work can now produce something that looks finished. A website, a report, an app, a business plan.

The failure doesn't go away. It moves downstream. It shows up later, it's bigger, and it lands on someone else: the customer, the boss, the person who has to maintain it.

The trades have always known this. A drain run with the wrong slope looks fine the day it goes in. It drains, and it passes a glance. The trouble shows up months later, in somebody's house, long after the installer is gone.

That's what slop is. It isn't work that looks bad. It's work that looks fine and isn't, made by someone who couldn't tell the difference.

We're about to see a lot more of it. AI lets people get much further before they hit the wall, and the wall costs a lot more when they hit it that late.

## Know one layer down

None of this means you have to understand everything down to the metal. Nobody does. I don't know how a database writes bytes to disk, and I don't need to.

What you need is to know one layer below where you work. That's enough to carry a picture in your head that you can check the output against. If you write software, know what the database is doing. If you hire a contractor, know what the finished job should look like.

Here's the part people miss: AI is a great way to learn that layer. Ask it why, not just how. Make it explain a fix before you take it. When something breaks, find out what actually happened instead of re-prompting until the error goes away.

After those freezes, we didn't write a faster restart script. We learned how locks work, and that changed the rules. Nobody restarts the database now until they've checked who is holding a lock.

Every database change we ship also gives up after three seconds of waiting, instead of making the whole app wait in line behind it. Those rules came from understanding the mechanism. You don't get there by re-prompting.

## Knowing is worth more now

It's unfortunate. A lot of people are going to fake their way further than ever, and a lot of other people are going to pay for it.

But it cuts the other way too. When anyone can make something that looks finished, looking finished stops being worth much. What's worth something is knowing whether it actually is.

AI doesn't take that skill from you. It makes that skill worth more. So use the tools, every day if you want. Just don't hand them the one part that has to stay yours. You still have to know how things work.
