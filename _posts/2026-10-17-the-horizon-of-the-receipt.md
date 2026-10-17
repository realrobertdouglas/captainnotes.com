---
layout: post
title:  "The Horizon of the Receipt"
subtitle: "When no reply can return within a lifetime, the proof never forms. Past that line the protocol pays for carriage toward silence, and commerce becomes gift."
date:   2026-10-17 09:00:00 +0000
categories: [future]
comments: false
---

The essays before this one pushed the delay out, and each found something in the protocol that bent. This one pushes it past the point where anything bends, to the distance at which no reply comes back while the sender is still there to receive it. The paper's claim is that distance changes how long it takes to make a proof and not what the proof is. That is true up to a horizon. It is worth finding where the horizon is, because the bench, the Moon, Mars and the stars are not all on the same side of it.

## Where the receipt is made

A receipt needs two signatures: the payer's, for the bytes it signed for, and the relay's, countersigning the count. On a route of many hops each link makes its own receipt, and the recipient closes the chain. The payer learns that its bytes arrived when the last receipt comes back along the route, so the time to make the whole proof is the route's round trip.

Below a lifetime the round trip is a loan, as [the first essay](/future/2026/10/17/every-delayed-exchange-is-a-loan.html) in this set argued, and the holding in the middle is custody, as [the second](/future/2026/10/17/custody-across-a-contact-that-may-never-come.html) showed. Both can be priced. Above a lifetime there is nobody to repay the loan to. A payer that opens a window and is gone before the receipt returns has signed for bytes nobody will collect on. A relay that carries them across a link whose far end answers after the relay's operator is gone carries them for an heir.

## What the protocol does past the line

[Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay) gives the protocol's answer at any distance: a window per contact, prepaid, settled one link at a time. Each relay is paid for its link by its link's receipt, which is made when the bytes cross that link, not when they reach the end. That is honest. It pays for bytes a payer signed for and a relay carried, link by link, which is the only thing the paper ever promised to pay for.

What changes past the horizon is not the rule. It is the reason. The paper's central sentence is that the only party who cannot be fooled about whether bytes arrived is the one who paid for them. Inside the horizon the payer is the one who wanted the bytes, and the receipt tells it they came. Past the horizon the one who wanted the bytes cannot have paid, because the payment would have to precede the delivery by more than a lifetime. So the sender pays, for carriage toward an end it will never hear from, and the recipient receives bytes it paid nothing for. The one who cannot be fooled about arrival is nobody. The one who can be fooled is paying.

In 1974 the Arecibo dish sent a message toward a star cluster twenty-five thousand light-years away. The dish was paid for. The engineers were paid. Nobody was paid for delivery and nobody ever will be. The message was sent for the sender's reasons, and whatever receives it will receive a gift. The [essay on communication](/future/2026/10/17/communication-commerce-and-coordination.html) in this series said a twenty-year message cannot carry an order but can carry a blueprint. Past the horizon, nobody is paid for carrying the blueprint either. It is given, link by link, by a payer buying carriage toward silence.

## What this tests

First, Appendix A's last line says distance changes how long it takes to make a proof, not what it is. The paper should add the boundary: that holds while the route's round trip is inside the payer's horizon. Past it, the protocol is still a sound way for an institution to pay relays per link. But the payer is no longer the party that cannot be fooled, and the phrase that names the whole design no longer describes what is happening.

Second, the Sybil argument of [Section 3.3](https://bandwidthswap.com/docs/paper.html#the-sybil-condition) survives the horizon, and it is worth saying why. A relay that carries a sender's bytes toward silence cannot be told from one carrying them toward a reader, and the per-link receipt does not care. But the sender's money is real and the burn is a ratio, so carrying bytes to yourself past the horizon costs five percent of every window, exactly as it does on the bench. The protection was never that the recipient would complain. It was that the payer's loss is certain.

Third, who the payer is. The paper assumes the recipient pays and the field note on light delay keeps that assumption to Proxima. Past the horizon the sender pays, and two-way traffic becomes two one-way gifts with ledgers. Each side prepays windows for what it sends, and the Mints of [Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay) net the two when a link exists. The paper should say which party opens a window on a link that long, since everything about bonds, custody and clocks follows from the answer.

Fourth, where the line is. For a person the horizon is a few decades of round trip. The Moon and Mars are well inside it, and so is the nearest star, at eight and a half years there and back. For an institution the horizon is however long the institution lasts, and the [earlier essay](/future/2026/10/17/anarchy-across-the-stars.html) on distance put the limit of any polity where a reply takes longer than a government lasts. The table of scales in the field note has four rows. The paper should say which of them are commerce.

Inside the horizon the payment is the proof. At the horizon the payment is the hope. There is nothing wrong with hope, and most of what has ever been sent a long way was sent on it. But a paper whose first principle is that nothing is paid for except delivery should say where delivery stops being something anyone can be paid for. It should also say what the protocol is on the far side of that line.
