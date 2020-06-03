---
title: DESIV- Differential Fault Analysis of SIV-Rijndael256 with a Single Fault
image: /assets/images/sivD.png

abstract: |
    Here we mounted a *Differential Fault Attack (DFA)* on NIST LWC Round-1 candidate [**SIV-Rijndael256 AEAD**](https://csrc.nist.gov/CSRC/media/Projects/Lightweight-Cryptography/documents/round-1/spec-doc/SIV-Rijndael256-Spec.pdf) and thus we completely recovered the master-key inducing only one fault in the internal state of the SIV-Rijndael256 AEAD. Moreover, we have used key-scheduling algorithm of *Rijndael256* to make our DFA more stronger.
    
layout: research_layout
---

>- Joint Work : Aikata, Banashri Karmakar, Dhiman Saha
>- Accepted in **HOST 2020**

Here we mounted a *Differential Fault Attack (DFA)* on NIST LWC Round-1 candidate [**SIV-Rijndael256 AEAD**](https://csrc.nist.gov/CSRC/media/Projects/Lightweight-Cryptography/documents/round-1/spec-doc/SIV-Rijndael256-Spec.pdf) and thus we completely recovered the master-key inducing only one fault in the internal state of the SIV-Rijndael256 AEAD. Moreover, we have used key-scheduling algorithm of *Rijndael256* to make our DFA more stronger.

### Contributions
- 3-round fault diffusion property of Rijndael256.
- Exploitation of *Release of Unverified Plaintexts (RUP)* and *Nonce Misuse Resistance (NMR)* property of SIV-Rijndael256 AEAD.
- Emphasis on the fact that the Rijndael256 like large state size is actually prone to the fault attack.
- Recovery of master-key of SIV-Rijndael256 AEAD using DFA with only one fault in the internal state.
- Use of key-scheduling algorithm of Rijndael256 in conjunction with the classical DFA for the key-recovery attack presented here.

### Brief Description of SIV-Rijndael256 AEAD
-  *Block size (n)* : 256 bits
-  *Key size (k)* : 128 bits
-  *Tag size (\|T\|)* : 256 bits
-  *Nonce length (\|N\|)* : 128 bits
-  *Associated data length (\|A\|)* : any bit length $$\geq 0$$
-  *Message length (\|M\|)* : any bit length $$\geq 0$$
-  *Underlying block cipher (E)* : Rijndael256 (parent of AES)

#### General Structure of SIV.Enc (Encryption Algorithm of SIV-Rijndael256 AEAD)

<p align="center">
<img src="/assets/images/sivE.png" alt="sivE" width=500px>
</p>

#### General Structure of SIV.Dec (Decryption Algorithm of SIV-Rijndael256 AEAD)
<p align="center">
<img src="/assets/images/sivD.png" alt="sivD" width=500px>
</p>

#### Brief Description of Rijndael256
- *State size* : 256 bits
- *Master-key size* : 128 bits
- *Round-key size* : 256 bits
- *No. of rounds* : 14
- *Key-scheduling algorithm* : Same like AES

Each round of modified Rijndael256 executes following steps (almost like AES):
1. *AddTweak (AT)* : In this step a 3-bit *tweak* is XORed with each byte of the second column of the state.
1. *SubBytes (SB)* : Same like the SubBytes operation of AES.
1. *ShiftRows (SR)* : The shift offsets for rows 0, 1, 2, 3 are determined by the shift-offset vector $$\sigma$$ = {0, 1, 3, 4}
1. *MixColumns (MC)* : Same like the MixColumns operation of AES.
1. *AddRoundKey (ARK)* : In this linear step, each byte of the state is exclusive-ORed with the corresponding byte of the round key.

Round structure of modified Rijndael256 is as follows:
<p align="center">
<img src="/assets/images/roundStructure.png" alt="roundStructure" width=650px>
</p>

### 3-round Fault Diffusion Property of Rijndael256
*Diagonal*: A diagonal is the set of four bytes of the state which maps to the same column under SR operation.
>  $$j^\text{th} (0 \le j \le 7) diagonal = D_j$$


3-round fault diffusion with a single-byte fault in the diagonal $$D_7$$:
<p align="center">
<img src="/assets/images/RoundPropagation.png" alt="RoundPropagation" width=650px>
</p>