ReactJS
---------------------------------------------------------------------------------------------------

    Pre-Requisites
        Html 5      Typography, tables, lists, forms, validation attributes, event attributes
                    html 5 api
        
        CSS 3      Selectors, Selector Operators, the regular css-properties

        JavaScript (ECMAScript 6)
                Object, Math, String, Date, docuemnt, window
                functions   closures, maxims, call backs, arrow functions
                arrays and array prototype function like reduce, map , filter ..etc.,
                ES6 concepts like   spread operators, template literals, classes,
                objects, json, inheretence, modules, asynchronosu programming (Promise, async
                and await)

    Lab Setup

        VSCode      IDE
        NodeJS      Development Environment
        Chrome      Browser

    Introduction

        is a javascript based SPA library.

        WebSite (static)    -------------> Dynamic Web Applications --------------> SPA

        Dynamic Web Application

            Server                                                  Client/Browser
                ServletsJSP/        <-------------REQ---------------
                ASP.net / PHP
                                process the request
                                generate html content dynamically

                                    ---------RESP (html content) ------>

                                                                    html is received and loaded on the browser, after unloading any prev content.

                                                                    in case of an event / form submition / a link click
                                <-------------REQ---------------
                                process the request
                                generate html content dynamically

                                 ---------RESP (html content) ------> 

        SPA - Single Page Application ?

            Server                                                  Client/Browser
                spa-bundle        <-------------REQ---------------
                (index.html + *.js + *.css)
                          
                                ---------RESP (spa-bundle) ------>  the entire spa-bundle.

                                                                    index.html along with the assosiated JS
                                                                    is laoded.

                                                                    all evetns / form submitions/ links ..etc.,
                                                                    are handled on the cleint itself by the JS.

                                                                    any needed new html content is also
                                                                    generated on the client and it repalces
                                                                    the old content of index.html which eliminates
                                                                    loading and unloading.

                rest-api    <-----data operation (xml/json)------>  data opertions like CRUD.

    