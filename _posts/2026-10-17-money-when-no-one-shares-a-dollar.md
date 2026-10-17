---
layout: post
title:  "Money When No One Shares a Dollar"
subtitle: "The pilot settles in dollars. Two worlds will not. What survives of a protocol's economics without a common unit is whatever was written as a ratio."
date:   2026-10-17 07:00:00 +0000
categories: [future]
comments: false
---

Every price in the Bandwidth Swap paper is in a unit someone has to agree on. The pilot's unit is the dollar: ten cents a gigabyte, invoiced by the month. That works because both ends of the bench are in the same house. Two worlds will not share a dollar. Neither will two valleys whose only connection is the link being sold. So the question is what of the paper's economics is left when there is no common unit, and the answer is older than the dollar.

## Money of account

For centuries after Charlemagne, Europe kept its books in pounds, shillings and pence, and for most of that time no pound coin existed. The pound was a unit for counting. Payment was made in whatever silver was to hand, at a rate. The unit traveled because it was arithmetic, not metal.

When metal did travel, it traveled by weight. The Spanish piece of eight was accepted in Manila and Boston alike from the sixteenth century to the nineteenth, because anyone could weigh it. It was less a currency than a commodity everyone could measure. And when neither arithmetic nor metal would do, trade found a bookkeeper. The Bank of Amsterdam from 1609 kept a bank guilder on its ledger that was worth more than the coins outside, because merchants trusted the ledger more than the mint. Three answers to the same problem: a unit both sides can count, a thing both sides can weigh, or a bookkeeper both sides will believe.

## What the paper prices

The paper has amounts and it has ratios. The amounts: a relay's posted price per byte; a bond, held by a Mint; a purchase commitment's premium per byte, escrowed with the poster's Mint. The ratios: the burn, five percent of every fee; the subsidy bound, a match no larger than the burn; and the settlement rule, which pays the smaller of two counts.

Put a settlement domain on each side of a link and watch which survive. The ratios survive untouched. Five percent is five percent in any unit, so the argument of [Section 3.3](https://bandwidthswap.com/docs/paper.html#the-sybil-condition), that paying yourself is a loss, holds on a link between worlds without anyone converting anything. The smaller-count rule is in bytes, which is the one unit both ends of any link can count. The amounts do not survive. A price in Earth's unit is unreadable on Mars, a bond held on Earth cannot be weighed from Mars, and an escrow in the poster's unit cannot pay a relay that earns in another.

## The byte as a unit of account

On a link, both sides count bytes, and the receipt is written in them. A byte delivered on this link is not a byte delivered on another, so bytes are not money. But on one link they are the obvious unit of account, and a relay that serves two domains can quote in them: so many bytes carried outward for so many carried back. That is barter, and barter is how trade between two currencies has always started.

The relay bonded on both sides of a bridge is, in [Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay), the only party that holds value in both domains. That makes it the money-changer, whether the paper says so or not. The exchange rate between two worlds' units will be set where the bridge relays post their prices, the way the rate between Florence and Bruges was set in the bills the bankers wrote.

## What this tests

First, the paper should mark which of its rules are ratios and which are amounts, because only the ratios cross a border. The burn, the cap and the settlement rule are the protocol. The prices, bonds and escrows are the pilot's choices, and each needs a unit named in the link parameters next to the light time.

Second, the two-sided bond. A relay that posts a bond on each side of a bridge holds capital in two units and earns in both. That is an exchange position, and the relay carries the rate risk. The paper should say that a bridge relay's two bonds are its position and that the prices it posts in each domain embed the rate, so a payer reading a bridge price is reading an exchange rate too.

Third, the token. The paper defers it until there is traffic to denominate. At the first bridge the question returns in its older form, which is not whether to have a token but what the common unit is. The three historical answers are all available. Bytes on the bridge, which both sides can count. A bookkeeper's unit, which a Mint already is. Or a thing both can weigh, which is what a token would be. The deferral stands until the first bridge and not past it.

Fourth, commitments across domains. A purchase commitment of [Section 5.1](https://bandwidthswap.com/docs/paper.html#purchase-commitments) escrows its value with the poster's Mint. A relay on the far side cannot be paid from that escrow without a conversion, and the only party that can convert is the bridge. So a commitment that names a route across a bridge is a commitment the bridge relay prices, and the paper should say so before someone posts one and finds the premium went to the exchange.

The [essay on energy](/future/2026/10/17/energy-matter-and-the-limits-of-rule.html) in this series argued that what stays scarce when atoms are cheap is the organized capacity to rearrange them. What stays shared when units are different is the count. The receipt was written in bytes before anyone asked what a byte costs, and that is why it crosses a border when the dollar does not.
