//This is the title for your window tab, and your Radar
document.title = "My Personal Technology Radar (October 2015)";


//This is the concentic circles that want on your radar
var radar_arcs = [{'r':100,'name':'Adopt'}
  ,{'r':200,'name':'Trial'}
  ,{'r':300,'name':'Assess'}
  ,{'r':400,'name':'Hold'}
  // ,{'r':500,'name':'Possible Extra if you want it'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques, Blogs, Books, Learning, Conferences",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            // Adopt            
            { 'name': 'Git flow / Pull Requests', 'pc': { 'r': 20, 't': 120}, 'movement': 'c'},
            { 'name': 'codeschool.com', 'pc': { 'r': 50, 't': 120}, 'movement': 'c'},
            { 'name': 'MidwestJS', 'pc': { 'r': 50, 't': 150}, 'movement': 'c'},
            { 'name': 'FrontEnd Masters', 'pc': { 'r': 50, 't': 170}, 'movement': 'c'},
            { 'name': 'InfoQ: Software Development News, Videos & Books', 'pc': { 'r': 80, 't': 110}, 'movement': 'c'},
            { 'name': 'ThoughtWorks', 'pc': { 'r': 80, 't': 130}, 'movement': 'c'},
            { 'name': 'OReilly Media', 'pc': { 'r': 80, 't': 165}, 'movement': 'c'},
            // Trial
            { 'name': 'Behavior Driven Development (BDD)', 'pc': { 'r': 130, 't': 120},'movement': 'c'},  
            { 'name': 'Agile', 'pc': { 'r': 150, 't': 100}, 'movement': 'c'},  
            // Assess
            { 'name': 'codeacademy.com', 'pc': { 'r': 220, 't': 140}, 'movement': 'c'}, 
            { 'name': 'Test Driven Development (TDD)', 'pc': { 'r': 230, 't': 133 }, 'movement': 'c' },
            { 'name': 'Microservices', 'pc': { 'r': 250, 't': 143 }, 'movement': 'c' } ,
            { 'name': 'Kanban', 'pc': { 'r': 260, 't': 100}, 'movement': 'c'},  
            { 'name': 'No Fluff Just Stuff', 'pc': { 'r': 250, 't': 120}, 'movement': 'c'}, 
            // Hold
            { 'name': 'CODE magazine', 'pc': { 'r': 350, 't': 120}, 'movement': 'c'}
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
            // Adopt
            { 'name': 'TeamCity',     'pc': { 'r': 20, 't': 50 },    'movement': 'c'},
            { 'name': 'jshint',       'pc': { 'r': 40, 't': 50 },    'movement': 'c' },
            { 'name': 'ember-cli',    'pc': { 'r': 40, 't': 76 },    'movement': 'c' },
            { 'name': 'Broccoli',     'pc': { 'r': 50, 't': 20 },    'movement': 'c' },
            { 'name': 'Git',          'pc': { 'r': 60, 't': 35 },    'movement': 'c' },
            { 'name': 'SourceTree',   'pc': { 'r': 60, 't': 70 },    'movement': 'c' },
            { 'name': 'Selenium Webdriver',    'pc': { 'r': 70, 't': 10 },    'movement': 'c' },
            { 'name': 'LESS',         'pc': { 'r': 80, 't': 80 },    'movement': 'c' },
            { 'name': 'Postman',      'pc': { 'r': 80, 't': 56 },    'movement': 'c' },
            { 'name': 'Mockito',      'pc': { 'r': 85, 't': 25 },    'movement': 'c'},
            // Trial
            { 'name': 'Cucumber JVM + Gherkin',    'pc': { 'r': 150, 't': 80 },    'movement': 'c' },
            { 'name': 'DropWizard',   'pc': { 'r': 130, 't': 70 },    'movement': 'c' },
            { 'name': 'Grunt',        'pc': { 'r': 140, 't': 60 },    'movement': 'c' },
            { 'name': 'Grunt connect-prism',    'pc': { 'r': 150, 't': 50 },    'movement': 'c' },
            { 'name': 'Slack',        'pc': { 'r': 120, 't': 40 },    'movement': 'c' },
            { 'name': 'SASS/SCSS',    'pc': { 'r': 170, 't': 25 },    'movement': 'c' },          
            // Assess
            { 'name': 'Docker',       'pc': { 'r': 240, 't': 84 },    'movement': 'c' },
            { 'name': 'Appium',       'pc': { 'r': 210, 't': 80 },    'movement': 'c'}, 
            { 'name': 'eslint',       'pc': { 'r': 210, 't': 70 },    'movement': 'c' },
            { 'name': 'csslint',      'pc': { 'r': 270, 't': 70 },    'movement': 'c'}, 
            { 'name': 'Webpack ^',      'pc': { 'r': 280, 't': 65 },    'movement': 'c'},
            { 'name': 'Gulp ^',         'pc': { 'r': 250, 't': 60 },    'movement': 'c' },
            { 'name': 'Qunit',        'pc': { 'r': 230, 't': 55 },    'movement': 'c' },
            { 'name': 'Karma ^',        'pc': { 'r': 280, 't': 50 },    'movement': 'c', 'url': 'http://karma-runner.github.io/0.13/index.html'},
            { 'name': 'Mocha ^',        'pc': { 'r': 260, 't': 48 },    'movement': 'c', 'url': 'http://karma-runner.github.io/0.13/index.html'},
            { 'name': 'Jasmine ^',      'pc': { 'r': 220, 't': 45 },    'movement': 'c', 'url': 'http://karma-runner.github.io/0.13/index.html'},
            { 'name': 'Testem ^',       'pc': { 'r': 270, 't': 40 },    'movement': 'c', 'url': 'https://github.com/airportyh/testem' },  
            { 'name': 'Zuul ^',         'pc': { 'r': 220, 't': 34 },    'movement': 'c', 'url': 'https://github.com/defunctzombie/zuul'},
            { 'name': 'Intern ^',       'pc': { 'r': 260, 't': 30 },    'movement': 'c', 'url': 'https://theintern.github.io/'},
            { 'name': 'PhantomJS',    'pc': { 'r': 220, 't': 25 },    'movement': 'c', 'url': 'https://theintern.github.io/'},
            { 'name': 'BrowserStack/Sauce Labs/TestingBot ^',    'pc': { 'r': 280, 't': 20 },    'movement': 'c', 'url': 'https://www.browserstack.com/'},
            { 'name': 'Jenkins',      'pc': { 'r': 270, 't': 15 },    'movement': 'c', 'url': 'https://jenkins-ci.org/' }, 
            { 'name': 'ember-intl',   'pc': { 'r': 280, 't': 10 },    'movement': 'c' },
            { 'name': 'Charles HTTP Proxy',    'pc': { 'r': 250, 't': 5 },    'movement': 'c' },
            // Hold
            { 'name': 'ember-react',  'pc': { 'r': 330, 't': 75 },    'movement': 'c' },
            { 'name': 'Mercurial',    'pc': { 'r': 330, 't': 55 },     'movement': 'c' }, 
            { 'name': 'Subversion',   'pc': { 'r': 330, 't': 45 },    'movement': 'c' },
            { 'name': 'Bower',        'pc': { 'r': 365, 't': 35 },    'movement': 'c' }
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
        "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            // Adopt
            { 'name': 'Meteor',             'pc': { 'r': 30, 't': 225},'movement': 'c'},
            { 'name': 'Heroku',             'pc': { 'r': 90, 't': 245},'movement': 'c'},   
            // Trial
            { 'name': 'AWS',                'pc': { 'r': 130, 't': 250},'movement': 'c'} ,   
            { 'name': 'SailsJS',            'pc': { 'r': 130, 't': 230},'movement': 'c'},
            // Assess
            { 'name': 'Azure',              'pc': { 'r': 230, 't': 235},'movement': 'c'},   
            { 'name': 'Ruby On Rails',      'pc': { 'r': 250, 't': 215},'movement': 'c'},
            { 'name': 'Google App Engine',  'pc': { 'r': 260, 't': 255},'movement': 'c'}
            // Hold
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200 + 30),
        "top" :   (h/2 + 30),
        "items" : [ 
            // Adopt
            { 'name': 'Ember 1.x', 'pc': { 'r': 40, 't': 290 },  'movement': 'c' },
            { 'name': 'Java 8', 'pc': { 'r': 40, 't': 320 },  'movement': 'c' },
            { 'name': 'Mustache/Handlebars template',   'pc': { 'r': 60, 't': 305 },              'movement': 'c',              domain: 'template' },
            // Trial
            { 'name': 'Ember 2.x', 'pc': { 'r': 130, 't': 330},'movement': 'c'},   
            { 'name': 'React', 'pc': { 'r': 150, 't': 300},'movement': 'c'},
            // Assess
            { 'name': 'Swift', 'pc': { 'r': 270, 't': 280},'movement': 'c'},
            { 'name': 'Scala', 'pc': { 'r': 260, 't': 290},'movement': 'c'},   
            { 'name': 'Coffeescript', 'pc': { 'r': 270, 't': 300},'movement': 'c'},
            { 'name': 'Typescript', 'pc': { 'r': 240, 't': 320},'movement': 'c'},
            { 'name': 'Web Components', 'pc': { 'r': 260, 't': 340 },  'movement': 'c' },
            // Hold
            { 'name': 'Angular 1.x', 'pc': { 'r': 350, 't': 290 },  'movement': 'c' },
            { 'name': 'ExtJS 4.x', 'pc': { 'r': 350, 't': 300 },  'movement': 'c' },
            { 'name': 'Python', 'pc': { 'r': 320, 't': 310 },  'movement': 'c' },
            { 'name': 'Clojure', 'pc': { 'r': 360, 't': 320 },  'movement': 'c' },
            { 'name': 'Clojurescript', 'pc': { 'r': 370, 't': 330},'movement': 'c'}
        ]
    }
];
