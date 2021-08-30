"use strict";

// Definition of Student type
class Student {
    // ID of the student
    id;
    // Name of the student
    name;

    // Creates a new Student object
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
 // Get's the mainApp section of the HTML document
var mainApp = angular.module("mainApp", []);

// Creates the controller for the main application.
mainApp.controller("studentController", function($scope) {
    // Sets a new model value -- student.
    $scope.studentDetails = [{
        id: '001',
        name: 'Zabrina Osborne',
},    {
        id: '002',
        name: 'Michelle Osborne',
},    {
        id: '003',
        name: 'Clayton Osborne',
},    {
        id: '004',
        name: 'Donzaleigh Wilson',
},    {
        id: '005',
        name: 'Rodlyn Osborne',
}
];

});

