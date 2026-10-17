---
layout: post
title:  "Proof That Outlives Its Signer"
subtitle: "A receipt is proof for as long as its signature is believed. Over decades keys break and institutions vanish, and old proofs survive only by being recorded again."
date:   2026-10-17 06:00:00 +0000
categories: [future]
comments: false
---

Two signatures on a hundred bytes prove that bytes crossed a link. They prove it today, to anyone with the two public keys. Over the years it takes a dispute to reach a Mint on another world, the question slowly changes. It stops being whether the signature is valid and becomes whether it is still believed. Proof has a half-life, and the long-distance trades of the past knew it.

## How a deed survived

A medieval Italian notary did not hand the parties the authoritative document. He wrote the act into his register, and the parchment the parties took away was a copy. Lose the copy and the register would issue another. The register outlived the notary, passing to a successor or to the city. A deed from a dead man's hand could be verified a century later by someone who had never seen his handwriting, because the question had become whether the register was genuine, not whether he was.

Land registries finished the thought. Under the Torrens system, adopted in South Australia in 1858, the registry's entry is the title. A deed that is not registered proves nothing, and a registered one needs no other proof. When a jurisdiction changes hands, deeds are recorded again under the new one. Durable proof has never been a document. It has been an institution that outlives the parties and re-attests at intervals.

## What breaks in a signature

A digital signature is a claim relative to a key and an algorithm. Keys are lost, stolen and retired. Algorithms weaken: MD5 fell in 2004, SHA-1 in 2017, and a sufficiently large quantum computer breaks the curve Bandwidth Swap's receipts are signed on outright. After a break, a signature made before it is indistinguishable from one forged after it.

The archival answer is the notary's register again. Before an algorithm weakens, the signed document is timestamped with a stronger one by a party whose records are kept, so the question becomes whether the signature existed before the break. A chain of timestamps answers that for as long as someone keeps extending the chain. Long-term validation of signed documents works this way today. Proof of signing decays. Proof of time can be renewed.

## The protocol's register

The receipt is signed by the payer and countersigned by the relay. The Mint signs what it settles and publishes a Merkle commitment of it, in [Section 4](https://bandwidthswap.com/docs/paper.html#mints). That commitment is a timestamp, if it is published somewhere that will still exist when it is needed. The paper says the settlement layer holds Mint summaries. The pilot has no settlement layer, so today a receipt's durability is the Mint's database and its backups.

Consider a receipt presented to a Mint ten years after it was signed, by which time the relay's key has leaked. If the receipt was in a commitment, the commitment decides it: it was settled then, and the key's later fate does not matter. If the receipt never reached a Mint, which the [field note on light delay](https://bandwidthswap.com/notes/receipts-across-the-light-delay.html) calls the safe failure, its two signatures are all it has, and they have aged with the key. The protocol's safe failure is safe for the network. It is not safe for the relay that carried the bytes and kept the paper.

## What this tests

First, the paper has no lifetime for a receipt and no way to change the signature scheme. Both belong in the link parameters of [Appendix A](https://bandwidthswap.com/docs/paper.html#appendix-a.-links-with-delay), next to the light time: the algorithm the link's receipts use, and how long a receipt stays presentable. A relay on a link whose receipts take years to settle needs a longer lifetime and a stronger scheme than the bench, and it should be able to say so.

Second, a commitment needs a register that outlives the Mint. Appendix A already makes Mints reconcile their commitments whenever a link exists. If each Mint includes the others' commitments in its own, every Mint is a notary for every other, and a Mint that disappears leaves its register deposited with the rest. That is what the cities did with the notaries' registers. The paper should say that reconciliation is for keeping, not only for checking.

Third, which clock is proof. The receipt carries the payer's timestamp, which is a claim. The commitment carries the Mint's, which is a record. The clock rule in Section 3.5 is about the first; the durability of a proof rests on the second, and the paper does not yet distinguish them.

The [essay on communication](/future/2026/10/17/communication-commerce-and-coordination.html) in this series said that what crosses a long distance is a record, not an order. A record is a sentence that someone will still be able to check. Across a long enough time, the checking is the whole job, and it has to be arranged before the signer is gone.
