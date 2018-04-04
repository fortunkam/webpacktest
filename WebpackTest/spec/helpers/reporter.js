const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
console.warn("SPECREPORTER");
jasmine.getEnv().clearReporters();               // remove default reporter logs
jasmine.getEnv().addReporter(new SpecReporter({  // add jasmine-spec-reporter
    spec: {
        displayPending: true
    }
}));