---
layout: post
title:  "The Only Bridge"
subtitle: "A link that is the sole way across a gap earns the whole route. That is the incentive to build it and the definition of a monopoly, and for a long time the two are the same fact."
date:   2026-10-17 08:00:00 +0000
categories: [future]
comments: false
---

The part of Bandwidth Swap that is still original is the price. A hop's share of a route is set by what it would cost to go around it. One of five parallel paths earns a fifth. The only way across a gap earns everything. The paper offers this as the incentive to build where nothing exists, and it is. It is also a description of every toll that ever stood at a strait, and those lasted a long time.

## The Sound

From 1429 the Danish crown charged every ship entering or leaving the Baltic a toll at Helsingør, where the Sound narrows to a few kilometers. There was no other way in that Denmark did not also hold. For four centuries the Sound Dues were the crown's largest single income. Every nation that traded with the Baltic paid them, complained about them, and paid them again, because the cost of going around was a war.

The toll had a rule worth noticing. It was charged as a share of the cargo's declared value, and the crown reserved the right to buy the cargo at the value declared. Declare low and you might lose your cargo cheap; declare high and you paid more toll. Neither side gained by lying, and nobody had to inspect the hold. Bandwidth Swap's settlement rule, which pays the smaller of two signed counts, is the same idea in a different century: a rule under which the truth is the best strategy for both parties, so no judge is needed.

The Dues ended in 1857, and the way they ended matters. The trading nations did not seize the Sound. They bought the toll out with a single payment to Denmark in exchange for free passage forever. The users of the bridge paid its owner the present value of the toll, once, and the bridge became a road.

## Going around

Suez opened in 1869 and the toll on it was set, as such tolls are, just under the cost of the Cape. When the canal closed in 1967 the world went around, and the going around changed the ships: tankers grew until a voyage round the Cape in a very large one cost less than the canal had. By the time Suez reopened, part of its monopoly was gone, not because a second canal was dug but because the alternative had been made cheap. The [essay on energy](/future/2026/10/17/energy-matter-and-the-limits-of-rule.html) in this series says the leverage of a deposit ends when substitution is cheap. The leverage of a bridge ends the same way.

## The protocol's bridge

[Section 5](https://bandwidthswap.com/docs/paper.html#operators-relays-and-endpoints) of the paper lets a relay post its own price and uses the opportunity-cost figure to split subsidies, so the sole bridge charges what the market bears, up to the cost of going around. There is no cap. What the paper sets against a monopoly is entry: anyone may build a second bridge, and [Section 5.1](https://bandwidthswap.com/docs/paper.html#purchase-commitments) lets anyone post a commitment to buy bandwidth on a route that does not exist yet, which is how a second bridge gets funded before it earns.

So the bridge's toll is its own bounty. The higher the price, the sooner a neighbor strings a second radio across the valley, and at the scale of a valley that takes a season. At the scale of light-years the second bridge costs more than the toll for a very long time, and the toll stands as long as the Sound Dues did. The protocol does not prevent that. Nothing does. What a protocol can do is make sure the second bridge is always being built, and say plainly what the first one is while it waits.

## What this tests

First, the paper names the pricing rule as an incentive and never names its other face. It should say that a sole bridge is a monopoly by design, that its price is bounded only by the cost of the next bridge, and that a purchase commitment on a route is a bid against a toll. That turns Section 5.1 from a subsidy mechanism into the market's answer to the Sound.

Second, reconciliation. In [Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay), Mints on either side of a bridge reconcile their commitments whenever a link exists. When the only link is one relay, the ledgers of two worlds reconcile through a monopolist, and a bridge that can delay or drop reconciliation can hold both Mints' audits hostage. The [essay on enforcement](/future/2026/10/17/enforcement-at-a-distance-is-exclusion.html) said a boycott works through the bridge relays' bonds. A bridge that is also the only path for the boycott's evidence is a different problem, and the paper should require that reconciliation traffic be carried at a posted price like any other, so that refusing it is a provable, slashable act.

Third, the buy-out. The Sound Dues ended when the users paid once for passage forever. A commitment with no end date, which Section 5.1 calls a pipe, is that payment in the protocol, and the paper's picture of the treasury as the first customer, buying bandwidth on links it wants to exist, is the 1857 treaty in different clothes. The paper should notice that a perpetual commitment is how a community retires a toll, and ask what the bridge owes in return, since Denmark gave up the right to charge and a relay that takes a pipe has given up nothing.

A bridge earns the whole route until there are two. The paper's job is not to prevent the first one. It is to make sure the second is always on its way, and to be honest about who is paying while it comes.
