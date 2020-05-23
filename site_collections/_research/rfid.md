---
title: Lightweight Authentication in RFID Systems
image: /assets/images/rfid.jpg
abstract: |
    This project involved building lightweight authentication system focusing on RFID technologies such as MIFARE etc.
    `Currently Progressing`<br>

    Great 🍺
    ---
    Follow our progress by starring out repo for the latest commits.

layout: research_layout 
github: https://github.com/theboxahaan/loauth   
---



*loauth* is a lightweight extensible library designed to provide ease of implementations using challenge-response communication protocols.
Written in python, we are actively looking at developers to port it for various hardware platforms. Below is a test snippet for the Base Class of the loauth authentication library. 
```

import hashlib
import hmac as hm
import Cijfer
class test(Cijfer.cijfer):
    def sign(self, key, msg):
        return hm.new(key, msg, hashlib.sha256).digest()

    def verify(self, key, msg, sign):
        return hm.compare_digest(sign, hm.new(key, msg, hashlib.sha256).digest() )

```

### In packet MathJax Support

$$ \sum_{i=0}^n i = \frac{n(n+1)}{2}$$

<h3 class="heading">Custom css Support also present</h3>