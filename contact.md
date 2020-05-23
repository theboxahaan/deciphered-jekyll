---
title: Contact
order: 5
layout: default
css: [/assets/css/style_home.css]
---
{% include navbar.html %}
<div class="spacer-small"></div>
<div class="row">
    <div class="eight columns">
        <h3 class="heading">News</h3>
        These is a history of all the news updates on de.ci.phe.red LABS' website.
        <div class="spacer-small"></div> 
        <div class="row">
            {% for news in site.categories.news %}
                <div class="news-item row">
                    <h3 class="heading no-border">{{news.date | date: '%B %d, %Y'}}</h3>
                    <div class="row">
                        {{news.content}}
                    </div>
                </div>
            {% endfor %}
        </div>  
    </div>
    <div class="four columns">
        <h3 class="heading">Contact</h3>
        <div class="row">
            <h3 class="heading small no-border">Mailing Address</h3>
            <p> Room 206,<br>
                Indian Institute Of Technology (IIT), Bhilai<br>
                GEC Campus, Sejbahar,<br>
                Raipur, Chhattisgarh<br>
                India - 492015<br>
                <b>Phone - </b>0771-2973618</p>    
        </div>
        <div class="row">
        </div>
    </div>      
    <div class="spacer-small"></div>  
</div>
