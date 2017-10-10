// Import Dependencies
//--------------------------------------------------------
const compile = require("../utils/compiler.2/compiler.js");
const fse = require('fs-extra');

// Sample Template
//--------------------------------------------------------
// const jobNum = Math.floor(Math.random() * 10000000000)  


const jobNum = 9;
const sample = {
    jobNum: jobNum,

    App: {
        name: "App",
        test: "App.test.js",
        children:[
                {
                name: "Container",
                className: "container",
                js: {
                    type: "Smart",
                    tag: "div",
                },
                css: {
                    width: "auto",
                    "background-color": "green"
                },
                children: [
                    {
                        name: "Row",
                        className: "row",
                        js: {
                            type: "Dumb",
                            tag: "div" 
                        },
                        css: {
                            "background-color": "yellow"
                        },
                        children: [
                            {
                                name: "Title",
                                className: "title",
                                js: {
                                    type: "Dumb",
                                    tag: "h1",
                                    value: "Welcome to the PRC Application"
                                },
                                css: {
                                    color: "black"
                                }
                            }
                        ]
                    },
                    {
                        name: "Row",
                        className: "row",
                        js: {
                            type: "Dumb",
                            tag: "div" 
                        },
                        css: {
                            "background-color": "yellow"
                        },
                        children: [
                            {
                                name: "Col",
                                className: "col-5",
                                js: {
                                    type: "Dumb",
                                    tag: "div" 
                                },
                                css: {
                                    width: "auto",
                                    "background-color": "blue"
                                },
                                children: [
                                    {
                                        name: "Paragraph",
                                        className: "paragraph",
                                        js: {
                                            type: "Dumb",
                                            tag: "p",
                                            value: "This is a sample view generated by the application"
                                        },
                                        css: {
                                            "font-size": "1rem"
                                        }
                                    },
                                    {
                                        name: "Paragraph",
                                        className: "paragraph",
                                        js: {
                                            type: "Dumb",
                                            tag: "p",
                                            value: "This is a sample view generated by the application"
                                        },
                                        css: {
                                            "font-size": "1rem"
                                        }
                                    }
                                ]
                            }
                        ]
                    }         
                ]
            }
        ]
    }
}

compile(sample)