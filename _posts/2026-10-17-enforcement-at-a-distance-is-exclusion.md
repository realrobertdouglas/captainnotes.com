---
layout: post
title:  "Enforcement at a Distance Is Exclusion"
subtitle: "Bonds and slashing assume someone can reach the offender. Across a settlement domain the only penalty left is refusal to deal, which is how stateless trade has always policed itself."
date:   2026-10-17 05:00:00 +0000
categories: [future]
comments: false
---

A penalty needs someone to apply it. Inside one settlement domain Bandwidth Swap has that someone: the Mint holds a relay's bond, a fraud proof takes it, and the matter is closed within the hour. Across domains the Mint that holds the bond is the one the cheated party cannot reach for months. Every trading network that has had to work without a reachable enforcer has hit this wall, and every one of them found the same tool on the other side of it.

## The coalition

In the eleventh century, Jewish merchants of the Maghrib traded across the Mediterranean through agents they could not watch. Their letters survive in the Cairo Geniza. In Avner Greif's reading of them, the merchants worked as a coalition: an agent who cheated one merchant was not hired again by any of them, the news traveled by the same letters that carried the orders, and the penalty was the loss of every future commission. No court sat. None was needed, as long as the agent expected to work again.

The fairs of Champagne a century later had private judges, and Milgrom, North and Weingast showed what the judges were for. They could not enforce a judgment against a merchant who had gone home. What they could do was keep a record of judgments unpaid, and a merchant could ask, before dealing, whether the other party had one. The record did the enforcing. The Hanseatic League ran the same method at the scale of cities: a merchant who broke the rules was put out of the Hansa, and a city that broke a privilege was boycotted until it relented. Bruges learned this more than once.

The penalty was always the same. You are out.

## The protocol's bond

[Section 4](https://bandwidthswap.com/docs/paper.html#mints) of the paper gives a Mint a bond, a published Merkle commitment of what it settled, and a fraud proof that takes the bond when the commitment is shown to be false. [Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay) extends this across worlds. A relay on a link between two domains posts a bond with the Mint on each side. Mints reconcile their published commitments whenever a link between them exists. A Mint whose commitments do not reconcile, or that has burned less than the rule requires, is slashable by the other from its own publications.

Slashable by whom? A Mint on Mars cannot reach into a bond held on Earth. What it can do is publish the proof and stop reconciling. Every relay bonded with both Mints then has to choose which one to keep dealing with, and the honest Mint can slash any relay on its side that keeps settling with the condemned one. The paper's word is slashing. The mechanism is the Hansa's: a boycott, enforced through the members who have something to lose on the honest side.

That is not a weakness. It is the only enforcement that has ever worked across a distance, and the protocol has one piece the Hansa lacked. The bridge relays are bonded on both sides, so a boycott costs them directly and at once. The merchants of the coalition had to be persuaded to shun a cheat. The relays are already holding collateral with the party doing the shunning.

## What this tests

Three claims come under pressure.

First, the word. Across domains, slashable means excludable, and the paper should say so, because the two have different economics. A bond is taken once. An exclusion is worth the discounted value of every future deal, which is a lot for a Mint that reconciles daily and very little for one whose next contact is years away. Greif's coalitions worked because the merchants dealt every season. The paper's reconciliation measured in years is the weakest case for exclusion, and in that case the two-sided bond on the bridge relays has to carry the whole weight. It can, if the bonds are large enough, and the paper should say how large.

Second, the record. The law merchant worked because a judgment could be queried before a deal. The receipt graph and the Mint commitments are that record, and the fraud proof is a judgment. The paper treats publication of a fraud proof as the step before a penalty. Across domains, publication *is* the penalty, so the proofs need to be where any payer can find them before opening a window, not only where the slashing Mint can act on them.

Third, the open relay. The [earlier essay](/future/2026/10/17/anarchy-across-the-stars.html) names open entry as one of three things trade needs to hold off predation. A boycott is a closed door, and a network that polices by closing doors has to be careful which doors. The pilot is a membership. The paper's Section 10 leaves open relays open. The history says a coalition that cannot readmit is a cartel, and a cartel is a ruler by another name.

Violence stays the final authority, as the first essay in this series said. Across a delay it is not available. What is available is the door, and the protocol already has one on each side of every bridge.
