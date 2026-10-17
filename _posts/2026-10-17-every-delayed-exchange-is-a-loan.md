---
layout: post
title:  "Every Delayed Exchange Is a Loan"
subtitle: "Whoever performs first across a delay is lending for the length of it. Long-distance trade became possible when that loan got a price."
date:   2026-10-17 03:00:00 +0000
categories: [future]
comments: false
---

A sale is two events. One side performs, the other side performs, and between the two somebody is holding value that belongs to the other. Across a shop counter the gap is a second and nobody notices. Across a sea voyage it is a year. Across light-years it is longer than the people involved. The gap is a loan, whatever the paperwork calls it, and the history of trade over distance is mostly the history of pricing that loan.

## The merchant's instrument

In the thirteenth century a Genoese merchant buying wool in Flanders had a problem that was not the wool. Coin was heavy, robbed on the road, and the wrong coin at the far end. The answer was the bill of exchange. The merchant paid a banker at home; the banker wrote a note; a correspondent in Bruges paid the seller on presentation, after a customary delay called the usance, typically a month or two. One piece of paper carried the money across the distance, extended credit for the usance, and converted the currency. The interest was hidden in the exchange rate, because the Church forbade charging for time and allowed charging for exchange.

The instrument survived because it priced the delay honestly while calling it something else. Nobody carried silver. Everybody paid for the wait.

The Dutch East India Company faced a longer gap. A voyage to the Indies and back took about two years, and before 1602 each voyage was financed on its own and wound up when the ships returned, if they returned. The Company's charter locked the investors' capital in for ten years, and when the ten years ended the Company kept it. That was the invention: a thing that lasted longer than any one delay, so that the delay could be lent across.

## What the lender charges

Across any delay the lender's price has three parts. The time itself, which is interest. The chance the other party never performs, which is credit. And the chance that nobody could perform because the ship sank, which is a separate matter and the subject of [the next essay](/future/2026/10/17/custody-across-a-contact-that-may-never-come.html).

At a year, all three are a few percent and the trade goes on. At twenty years, the first alone decides whether the deal exists. At a human lifetime there is no rate that pays, and the only lenders left are institutions: the Company, the Church, the city. The [earlier essay](/future/2026/10/17/anarchy-across-the-stars.html) said nobody rules from twenty light-years away. Nobody lends from there either, unless something outlives them.

## The protocol's loan

Bandwidth Swap pays a relay when the person who paid for the bytes has signed for them. On the bench that signature comes an hour after the bytes, so the relay fronts an hour of carriage, bounded by what the payer prepaid. [Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay) says what happens as the delay grows. Below a light time the membership sets, each hop is paid when the next hop acknowledges, with a lock that must run at least the round trip. Above it, windows are prepaid and there is no lock.

Both arrangements are loans. The lock ties the relay's capital to a timer for the length of the round trip; the relay is the lender. The prepaid window ties the payer's money to a contact that has not happened yet; the payer is the lender. The appendix chooses which side lends on which kind of link, and it chooses well. What it does not do is say what the loan costs.

A relay's announcement carries a posted price per byte. Nothing in it is a price per day of waiting. On a bench that is fine, because the wait is an hour and the price absorbs it. On a link whose window closes a year after it opens, a price per byte is half a price. The paper's own list of what stays open includes the question of what an unused reservation should pay. That is this question in other words: it is the interest on the window.

## What this tests

Three claims in the paper come under strain here.

First, that a prepaid window does the same work as a lock without the timer. For security it does. For cost it only moves the lender to the other side of the link and stops counting.

Second, that a posted price per byte is a complete price. It is complete for a link with no delay. For any other link it needs a second term, the carry, published by the relay as a link parameter alongside the light time it already publishes.

Third, that distance changes how long it takes to make a proof and not what the proof is. That is true of the proof. It is not true of the payment. A payment that arrives twenty years late is a smaller payment, discounted by every year of the wait. A protocol that does not say so has let its relays set the discount inside the posted price, where nobody can read it.

None of this touches the receipt. Two signatures still prove delivery. What changes is that on a long link the window around them has to carry a rate, as the bill of exchange did inside its exchange rate. Trade never waited for the delay to shrink. It priced the delay and went.
