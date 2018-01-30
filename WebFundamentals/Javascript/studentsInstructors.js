var students = [
     { first_name: 'Michael', last_name: 'Jordan' },
     { first_name: 'John', last_name: 'Rosales' },
     { first_name: 'Mark', last_name: 'Guillen' },
     { first_name: 'KB', last_name: 'Tonel' }
];

function dojoStudents(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i].first_name, array[i].last_name);
    }
}

dojoStudents(students);

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}

function studentsAndInstructors(obj) {
    for (var type in users) {
        console.log(type);
        for (var i = 0; i < users[type].length; i++) {
            console.log((i + 1) + " - " + users.Students[i].first_name, users.Students[i].last_name + " - " + (users.Students[i].first_name.length + users.Students[i].last_name.length));
        }
    }
}







