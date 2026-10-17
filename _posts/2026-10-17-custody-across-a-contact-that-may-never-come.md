---
layout: post
title:  "Custody Across a Contact That May Never Come"
subtitle: "A relay holding your bytes until the next link opens is doing what caravans and ships always did. The old question is what it is owed if the link never opens."
date:   2026-10-17 04:00:00 +0000
categories: [future]
comments: false
---

Across any gap longer than a single message, somebody holds the goods in the middle. The caravan master between oases, the captain between ports, the relay with a bundle in its store between two passes of an orbiter. None of them bought the goods. All of them are responsible for the goods, and the owner is out of reach. That is custody, and the price of custody when the next contact might never come is the oldest hard problem in long-distance trade.

## The sea loan

Athens in the fourth century BC had an answer, and we know it because Demosthenes argued cases about it. A lender advanced money for a voyage. If the ship was lost, the loan was forgiven. If the ship came home, the lender was repaid with a premium far above the ordinary rate, often a fifth or more for a single season. Rome kept the arrangement under the name *foenus nauticum*. Medieval Europe called it bottomry when the ship was the security and respondentia when the cargo was, and the usury laws that forbade interest left it alone, because the lender was not selling time. The lender was buying the sea.

The premium said in a number what a contact that might never come was worth. The ships that arrived paid for the ships that did not. Genoa split the two halves apart in the fourteenth century and called the second one insurance, but the arithmetic was the same: the price of the voyage included the voyages that would fail.

## The receipt for the goods

The other instrument of custody was the carrier's own signature. A bill of lading is the captain's receipt for what came aboard, and because it names the goods and the holder, it became the title to them. A merchant could sell a cargo while it was still at sea by signing the paper over. Custody was turned into a document that could be checked, transferred and, if the ship was lost, claimed against.

Two things made the system work. The custodian signed for what it held. And the risk of never arriving had a price that was paid in advance.

## The network that dropped custody

Delay-tolerant networking moves data as bundles that a node stores until it has a link to pass them on. It is the method NASA chose for the Moon, and the current version of its Bundle Protocol dropped custody transfer from the core. There was no reliable way to do it, and nothing in the standard said why a stranger's node should accept a bundle at all. A government network does not need the reason. Anything built by many parties does.

Bandwidth Swap gives the reason in [Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay): custody is a window on the next link, and the relay is paid for it by the next link's receipt. A relay accepts the bundle because the next contact's window is already prepaid. That is a real answer. It tells the relay why to hold. It does not tell anyone what happens when the next contact never opens.

Follow the money. The next window was prepaid by the payer, across the delay, before anyone knew whether the link would exist. If the orbiter fails or the far relay is gone, the payer has paid for a window that never settled, and the relay holds bytes it can neither deliver nor be paid for. The sea risk has landed on the payer, and nothing in the paper priced it.

## What this tests

The Athenians put the risk on the lender and charged for it. The protocol puts the risk on the payer and is silent. Three things follow.

First, a prepaid window on a contact that never comes needs a rule. If the relay keeps the prepayment, it has been paid for a contact that carried nothing. That is payment for availability, the one thing [Section 3.3](https://bandwidthswap.com/docs/paper.html#the-sybil-condition) forbids. If the relay refunds it, it held the bundle for nothing and will stop accepting bundles. The sea loan's answer is a premium on the windows that do settle, published as a link parameter, so that the contacts that happen pay for the ones that don't. The purchase commitments of [Section 5.1](https://bandwidthswap.com/docs/paper.html#purchase-commitments) already refund on shortfall. The ordinary window should say what it does.

Second, the relay in custody is holding someone else's property with no stated term. A bill of lading named the port and the voyage. A link's contact plan should name how long a relay must hold a bundle before it may drop it, and that term is part of the price.

Third, the bytes held in custody are not signed for. The receipt is made when the window settles, at the far end. Between the two contacts there is no document that says what the relay holds, so a relay that loses a bundle has lost nothing on paper. The carrier's receipt for what came aboard is the missing instrument: a relay's countersignature on the bundle at the moment it takes custody, which costs a hundred bytes and makes the loss provable.

The protocol's claim is that the same receipt serves a bench and a link years long. The receipt does. The custody between receipts is a different thing, and it was priced two and a half thousand years ago by people who had watched ships not come back.
