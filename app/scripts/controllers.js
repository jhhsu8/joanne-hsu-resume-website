"use strict";

var routerApp = angular.module("routerApp");

routerApp.run(["$anchorScroll", function($anchorScroll) {
  $anchorScroll.yOffset = 60;   // scroll by 60 extra pixels
    
}])

routerApp.controller("JoanneController", ["$anchorScroll", "$location", "$scope", "aboutMeFactory", "resumeFactory", "webappsFactory", "javaappsFactory", "referencesFactory", function($anchorScroll, $location, $scope, aboutMeFactory, resumeFactory, webappsFactory, javaappsFactory, referencesFactory) {
    
    //create itemized lists
    $scope.interests = aboutMeFactory.getAboutMe();
    $scope.skills = resumeFactory.getResume();
    $scope.webApps = webappsFactory.getWebApps();
    $scope.javaApps = javaappsFactory.getJavaApps();
    $scope.references = referencesFactory.getReferences();
    
    //when clicked, the page will move to a section with specified id.
    $scope.gotoAnchor = function(id) {
      var newHash = id;
      if ($location.hash() !== newHash) {
        $location.hash(id);
      } else {
        $anchorScroll();
      }
    };
    
    $scope.nextButton = false
    $scope.previousButton = true;
    
    //create a slideshow
    $scope.references = referencesFactory.getReferences();
    var length = $scope.references.length;
    var current_index = 0;
    $scope.current_reference = referencesFactory.getReference(current_index);
    
    //disable or enable button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        } else {
            $scope.nextButton = false;
        }
        
        if (curr_idx > 0) {
            $scope.previousButton = false;
        } else {
            $scope.previousButton = true;
        }
    }
    
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_reference = referencesFactory.getReference(next_index);
            current_index++;
        }
        
        button(current_index); 
    };

    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 0) {
            $scope.current_reference = referencesFactory.getReference(previous_index);
            current_index--;
        }
        
        button(current_index); 
    };
}]);