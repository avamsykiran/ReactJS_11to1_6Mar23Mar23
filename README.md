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

    NodeJS?

        is a javascript runtime to enable javascript to execute in a stand alone mode without any browser.

        while developing a reactjs app, we have to

            compose                     IDE             VSCode
            build and package           build tool      NPM     (part of NodeJS)
            manage dependencies         build tool      NPM     (part of NodeJS)
            test                        testing lib     Jest    is a JS library (has to run on NodeJS)
            deploy /host                Dev Server      react-scripts server    (has to run on NodeJS)
            execute                     browser         chrome

        hence we need nodejs.

    NPM

        node package manager.

        each app is called a package in nodejs. 

        npm --version

        npm init                is used to initialize a folder as a node project.
        npm init -y             is used to initialize a folder as a node project skipping the wizard.

        package.json            is the build config file. contains project meta data, list
                                of dependencies and a few scripts.

                                npm start               is used to build and execute the app
                                npm test                is used to build and run test cases
                                npm build               is used to build and pack
                                npm run <custom-script>

        npm install library-name --save     is used to install a library local to the project.
        npm install library-name --save -g  is used to install a library globally on the dev-machine
        npm install library-name --save-dev is used to install a library local to the project but not
                                                include it in the final bundle.

        node_modules        is available in each project and only in our 'users' folder.

                            all globally installed packages will goto 'node_module' of 'users' fodler
                            all locally installed packages will goto 'node_module' of your project.

        npm install         will create a node_modules folder in the project and downloads
                            all the libraries listed in package.json

        
        
