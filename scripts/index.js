document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector(".hammy");


hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('showtime');
    navigation.classList.toggle('showtime');
});



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourseCard(courses);
addCourseCard(courses);



const allLink = document.querySelector('#all');

allLink.addEventListener('click', () => {
    document.querySelector('.cards-container').innerHTML = '';
    const allCourses = courses.filter(course => course.subject.includes(""));
    createCourseCard(allCourses);
    addCourseCard(allCourses);


});

const cseLink = document.querySelector('#cse');

cseLink.addEventListener('click', () => {
    document.querySelector('.cards-container').innerHTML = '';
    const cseCourses = courses.filter(course => course.subject.includes("CSE"));
    createCourseCard(cseCourses);
    addCourseCard(cseCourses);



});

const wddLink = document.querySelector('#wdd');

wddLink.addEventListener('click', () => {
    document.querySelector('.cards-container').innerHTML = '';
    const wddCourses = courses.filter(course => course.subject.includes("WDD"));
    createCourseCard(wddCourses);
    addCourseCard(wddCourses);


});

function createCourseCard(filteredCourses) {
    filteredCourses.forEach(course => {
        let card = document.createElement('section');
        let subject = document.createElement('h3');
        let number = document.createElement('p');
        if (course.completed === true) {
            card.style.backgroundColor = "aqua"
            card.style.color = "black"
        }
        else {
            card.style.backgroundColor = "darkgrey"
            card.style.color = "black"
        };


        subject.innerHTML = `${course.subject}`;
        number.innerHTML = `${course.number}`;


        card.appendChild(subject);
        card.appendChild(number);




        document.querySelector('.cards-container').appendChild(card);
        card.style.display = "flex";
        card.style.justifyContent = "center";
        card.style.border = "1px solid black";
        
        

    });
}

function addCourseCard(courseArray) {
    const totalCredits = courseArray.reduce((sum, course) => {
        return sum + course.credits
    }, 0);


    document.querySelector('.total').innerHTML = `Total Credits: ${totalCredits}`;
}












