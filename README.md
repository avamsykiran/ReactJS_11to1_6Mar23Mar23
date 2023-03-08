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

                            all globally installed packages will goto 'node_module' of 'users' folder
                            all locally installed packages will goto 'node_module' of your project.

        npm install         will create a node_modules folder in the project and downloads
                            all the libraries listed in package.json

        
    Create a React App

        npx create-react-app proj-name

        (or)

        npm intall -g create-react-app
        create-react-app proj-name

    JSX ?

        JavaScript XML (JavaScript eXtended MarkUp Language)

            1. this script allows us to assign html elements directly 
                to a javascript variable.
            2. this script allows interpolation {} to embed javascript inside html.
            3. We can use a set of paranthesis to compose multi-line html.
            4. we can use operators like &&, || and ?: for conditional formatting.
            5. it is completly case sensitive and all html elements must be in lower case.
            6. All html attributes must follow camel case as hypens are not allowed:

                'onclick'  is writeen as 'onClick'
                'aris-media'    is written as 'arisMedia'

            7. the html 'class' attribute is not allowed, instead we use 'className'.

                let userName = "Vamsy";
                let myPara = <p> {userName} </p>;

                let p=23000;
                let r=3.2;
                let t=236;
                let myPara2 = <p> Interest to be paid is { (p*t*r)/100 } </p>;

                let friends = ["Vamsy","Sagar","Suseela","Kiran"];
                let frdsList = friends.length===0 ? <p>No Freidns</p> : (
                    <ol>
                        { friends.map( ele => <li>{ele}</li> ) }
                    </ol>
                );

    React Components

        reactjs offers html extendability meaning we can create our own html elements (tags) an attributes in
        reactjs, such react elements are called components.

        Function Components
        Class Components

    Function Components

        is are known as state-less components

        is a javascript function that returns a single JSX element and can accept an optional arg 'props'.

        react components must be following initial capitalization.

        const Header = () => <h3>My First React SPA</h3>;

        <Header></Header>

    props ?

        is an object that carries data from parent component into a child component through attributes.

    Class Components

        is known as state-ful component.

        is a javascript class that extends React.Component.

            React.Component offers
                1. state
                2. setState()
                3. componentDidMount()
                4. render()
                5. componentDidUpdate()
                6. componentDidCatch()
                7. componentWillUnMount()

            class Dashboard extends React.Component{

            }

        state ?

            is a field used to hold all the related data of a component.
            the state field is initialized in the component constructor.





