requirejs.config({
    "baseUrl": "javascripts",
    "paths": {
        "app": "app",
        "jquery": "vendor/jquery"
    },
    shim: {
        "foundation/foundation": {
            deps: ["jquery"]
        }
    },
    "out": "main.min.js",
    "name": "main"
});

// Load the main app module to start the app
requirejs(["app/main"]);
