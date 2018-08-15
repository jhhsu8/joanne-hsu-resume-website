"use strict";

var routerApp = angular.module("routerApp");

//define a service called aboutMeFactory 
routerApp.service("aboutMeFactory", function() {
		var aboutMe = [{
			name: "A Bold Leap-Forward",
            css: "leap-forward"
		}, {
			name: "Keen Interest in Web Development",
            css: "web-development"
		}, {
			name: "Perseverance and diligence",
            css: "perseverance"
		}];
    
    //implement the function called getAboutMe
    this.getAboutMe = function() {
        return aboutMe;
    };
})

//define a service called resumeFactory 
routerApp.service("resumeFactory", function() {
		var resume = [{
			name: "Objective",
            css: "objective"
		}, {
			name: "Web Development Skills",
            css: "skills"
		}, {
			name: "Education",
            css: "education"
		}, {
			name: "Work and Research Experience",
            css: "experience"
		}, {
			name: "Awards/Honors",
            css: "awards"
		}];
    
    //implement the function called getResume
    this.getResume = function() {
        return resume;
    };
})

//define a service called webappsFactory
routerApp.service("webappsFactory", function() {
    
		var webApps = [{
			name: "Seattle City Website",
            description: "A website about Seattle City created in HTML5, CSS and AngularJS using Bower with Gulp. The website provides tourists and potential migrants from other parts of the country with essential information about the City of Seattle, Washington state. It covers several topics about the city, such as culture, climate, public transportation system, housing, expansion in technology industry, and recreational places.",
            design: "HTML5, CSS and AngularJS; Non-responsive web design",
			link: "http://joahsu.com/seattle-city/index.html",
            code: "https://github.com/jhhsu8/seattle-city",
			image: "../images/seattle.jpg",
            css: "seattle"
		}, {
			name: "Berkeley Classic Vehicles Website",
            description: "A fictional Berkeley Classic Vehicles website created in HTML5, CSS and PHP. Developing this website involves the creation of forms, storage of form data in the database, use of data from databases, and web application security.",
            design: "HTML5, CSS and PHP; Non-responsive web design",
			link: "http://joahsu.com/berkeley-classic-vehicles/login.php",
            code: "https://github.com/jhhsu8/classic-vehicles-website",
			image: "../images/classic-car.jpg",
            css: "classic"
		}, {
			name: "Travel Budget Calculator",
            description: "A travel budget calculator created in HTML5, CSS, Bootstrap and AngularJS using Bower with Gulp. The user enters the cost and count of each item and clicks on the calculate button to find the total cost. Numbers entered must be positive. Invalid entries will trigger a warning.",
            design: "HTML5, CSS, Bootstrap and AngularJS; Responsive web design",
			link: "http://www.joahsu.com/travel-budget-calculator/index.html",
            code: "https://github.com/jhhsu8/travel-budget-calculator",
			image: "../images/travel.jpg",
            css: "calculator"
		}, {
			name: "Stopwatch/Countdown Timer",
            description: "A stopwatch/countdown timer created in XHTML, CSS and JavaScript. The application allows the user to start either a stopwatch or a countdown timer.",
            design: "XHTML, CSS and JavaScript; Non-responsive web design",
			link: "http://joahsu.com/timers/timers.html",
            code: "https://github.com/jhhsu8/timers",
			image: "../images/stopwatch.jpg",
            css: "timers"
		}, {
			name: "Guess Number Game",
            description: "A guess number game created in XHTML, CSS and JavaScript. In the game, the user enters a whole number from 1 to 999 in the box and presses the 'Guess the Number' button to guess the number entered in the box. The user will then be informed if the number guessed is greater than, less than or equal to the user's number. The total number of guesses will not exceed 10 times.",
            design: "XHTML, CSS and JavaScript; Non-responsive web design",
			link: "http://joahsu.com/guess-number-game/guess-number.html",
            code: "https://github.com/jhhsu8/guess-number-game",
			image: "../images/numbers.jpg",
            css: "guessnumber"
		}, {
			name: "CAPTCHA Creation Form",
            description: "A CAPTCHA creation form created in HTML5, CSS and PHP. The application allows the user to create a CAPTCHA by inputing characters.",
            design: "HTML5, CSS and PHP; Non-responsive web design",
            link: "http://joahsu.com/captcha/captcha.php",
            code: "https://github.com/jhhsu8/captcha-creation",
			image: "../images/captcha.png",
            css: "captcha"
		}, {
			name: "Widget Order Form",
            description: "An order processing form created in XHTML, CSS and JavaScript. Regular expressions are used to validate input fields.",
            design: "XHTML, CSS and JavaScript; Non-responsive web design",
			link: "http://joahsu.com/widget-order-form/widgetOrderForm.html",
            code: "https://github.com/jhhsu8/widget-order-form",
			image: "../images/widgets.jpg",
            css: "orderform"
		}];
    //implement the function called webApps
    this.getWebApps = function() {
        return webApps;
    };
})

//define a service called javaappsFactory
routerApp.service("javaappsFactory", function() {
    
    var javaApps = [{
			name: "Finding All Genes (Java)",
            description: "Exercise from a Coursera course, 'Java Programming: Solving Problems with Software'. The program takes a DNA string and prints the number of genes found, the number of genes with longer than 60 bases, the number of genes whose CG-ratio is higher than 0.35, and the longest gene length found.",
			code: "https://github.com/jhhsu8/finding-all-genes/blob/master/FindAllGenes.java",
			image: "../images/genes.jpg",
            css: "genes"
		}, {
			name: "Baby Names (Java)",
            description: "Exercise from a Coursera course, 'Java Programming: Solving Problems with Software'. The program finds the numbers and ranks of baby names from the United States.",
			code: "https://github.com/jhhsu8/babynames/blob/master/BabyBirths.java",
			image: "../images/babynames.jpg",
            css: "names"
		}, {
			name: "Temperatures (Java)",
            description: "Exercise from a Coursera course, 'Java Programming: Solving Problems with Software'. The program finds the date with the coldest temperature and lowest humidity in a file and among files.",
			code: "https://github.com/jhhsu8/temperatures/blob/master/MinTemp.java",
			image: "../images/thermometer.jpg",
            css: "weather"
		}];
    
    //implement the function called javaApps
    this.getJavaApps = function() {
        return javaApps;
    };
})

//define a service called referencesFactory 
routerApp.service("referencesFactory", function() {
		var references = [{
            id: 0,
            name: "Professor Brett Martin, HTML/CSS and PHP at UC Davis's Web Development Certification Program",
            quote: "Her level of insight to the materials is not common in my teaching experience.",
            image: "../images/brett-martin-reference.jpg"
		}, {
            id: 1,
            name: "Professor Matthew Quinton, JavaScript at UC Davis's Web Development Certification Program",
            quote: "Her understanding of programming and design is tied to a passion for developing websites.",
            image: "../images/matthew-quinton-reference.jpg"
		}];
    
    //implement the functions called getReferences and getReference
    this.getReferences = function() {
        return references;
    };
    
    this.getReference = function(index) {
        return references[index];
    };
});