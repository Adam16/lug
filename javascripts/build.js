({
    baseUrl: "./",
    mainConfigFile: './main.js',
//    optimize: "uglify2",

    skipDirOptimize: false,
    generateSourceMaps: false,

    useStrict: false,
    preserveLicenseComments: false,
    logLevel: 0,
    throwWhen: {
        optimize: true
    },

    cjsTranslate: true,
    useSourceUrl: true,
    waitSeconds: 10
})
