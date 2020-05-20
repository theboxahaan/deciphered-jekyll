---
title: Home
js: ['/assets/js/typewriter.js', '/assets/js/parallax.js']
css: ['/assets/css/style_home.css']
layout: default
order: 1
---

<section class="header">
<div class="row">
    <div class="five columns">
        <h1>de.ci.phe.red<div class="name-small">LABS</div></h1>
        <br>
        <h3 class="heading">plaintext  or <span class="typewriter">'%#*@(*$)'</span></h3>
    </div>
    <div class="motivation seven columns">
        <h3 class=" heading">What We Do</h3>
        <p>
        Nothing Of Much Importance. We dabble in security , crypto and generally hava good time.
        Join Us. <strike>No I did not make this using Jekyll</strike>
        </p>
        <div class="tag">
            <p class="heading small">"Random" Noise of .NET's System.Random() Call</p>
        </div>
    </div>
</div>            
</section>
{% include navbar.html %}
<div class="row">
    <div class="spacer-small"></div>
</div>
<div class="row">
<h1>Welcome to The Lab</h1>
Very glad to have you here.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et odio nisi. Etiam rhoncus elementum dolor at viverra.
Nam quis eros vitae lacus sagittis tristique. Integer iaculis pretium metus et maximus. Nunc condimentum,
enim vitae ultricies vulputate, leo est sodales elit, sed pretium arcu nunc commodo odio. Donec eu tortor in arcu tempor tincidunt quis quis massa. Donec rutrum gravida aliquet.
Nam quis eros vitae lacus sagittis tristique. Integer iaculis pretium metus et maximus. Nunc condimentum,
enim vitae ultricies vulputate, leo est sodales elit, sed pretium arcu nunc commodo odio. Donec eu tortor in arcu tempor tincidunt quis quis massa. Donec rutrum gravida aliquet.
</div>
<div class="spacer-small"></div>
<div class="row">
    <h3 class="heading">News From The Lab</h3>
    <div class="half columns">&nbsp;</div>
    <div class="intro seven columns">
            {% include news.html %}
            <div class="row">
                <div class="spacer"></div>
            </div>
    </div>
    <div class="four columns">
        <div style="float:right;">
            <a class="twitter-timeline" data-lang="en" data-width="22em" data-height="50em" data-theme="dark" href="https://twitter.com/decipheredLabs?ref_src=twsrc%5Etfw">Tweets by decipheredLabs</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <!-- <img style="float:left;max-width: 100%;" src="https://imgs.xkcd.com/comics/password_strength.png"> -->
    </div>
</div>

<div class="row">
    <h3 class="heading">Ongoing Research</h3>
    <div class="six columns">
        <p>
            Ongoing Research at our lab is focused towards all things security. If you are into security research, we are interested !!!
            Having said that, in broad terms we have the following projects going on at IIT Bhilai right now
            <ul>
                <li>Cryptography</li>
                <li>Lightweight Authentication Over RFID</li>
                <li>Secure Boot in Embedded Devices</li>
            </ul>
            Head Over to Our <b>under construction</b> Research Page for more information.
        </p>        
    </div>
    <div class="five columns">
        <img style=" margin:1em; float:right;max-width: 100%;" src="https://imgs.xkcd.com/comics/security.png">
    </div>
</div>

<div class="row">
    <div class="spacer-small"></div>
</div>

<div class="row">
    <h3 class="heading">Affiliations</h3>
    <img class="logo" src="/assets/images/iitbh.png">
</div>