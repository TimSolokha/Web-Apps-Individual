/* Dynamic HTML 
   TODO: NEEDS TO BE FIXED ASAP
*/

// Course objects that will be used within an array
class Course {
    constructor(term, year, courseDesignator, courseName) {
        this.term = term;
        this.year = year;
        this.courseDesignator = courseDesignator;
        this.courseName = courseName;
    }
}

// Plan object class
class Plan {
    constructor(planName, 
                catalogYear, 
                major, 
                studentName, 
                currentSemester, 
                courses) {
        this.planName = planName;
        this.catalogYear = catalogYear;
        this.major = major;
        this.studentName = studentName;
        this.currentSemester = currentSemester;
        this.courses = courses;
    }

    findYears() {
        let yearObj = {};

        this.courses.forEach((course) => {
            let schoolYear;
            if(course.term !== "Fall") {
                schoolYear = course.year - 1;
            }
            else {
                schoolYear = course.year;
            }
            if (!yearObj.hasOwnProperty(schoolYear)) {
                yearObj[schoolYear] = { "Fall": [], "Spring": [], "Summer": [] };
            }
            yearObj[schoolYear][course.term].push(course);
        });

        return yearObj;
    }
}

//Displays the html dynamically
function displayPlan(myplan) {
    // Look at the plan of the html
    const coursePlan = document.getElementById("course-flex-table");

    Object.entries(myplan.findYears()).forEach((year) => {
        const [yearName, terms] = year;

        let courseRowDiv = document.createElement("div");
        courseRowDiv.classList.add("course-row");
        coursePlan.appendChild(courseRowDiv);


        Object.entries(terms).forEach(term => {
            const [termName, courses] = term;

            // Adds the 4 rows for the years
            let courseRowItem = document.createElement("div");
            courseRowItem.classList.add("course-row-item");
            courseRowDiv.appendChild(courseRowItem);

            // Adds the semester to the boxes
            const semesterDiv = document.createElement("div");
            semesterDiv.classList.add("semester");
            courseRowItem.appendChild(semesterDiv);

            // Adds the header to the semesters
            const header = document.createElement("h3");
            const modYear = parseInt(yearName) + (termName === "Fall" ? 0 : 1);
            header.textContent = `${termName} ${modYear}`;
            semesterDiv.appendChild(header);

            courses.forEach((course) => {
            const courseContent = document.createElement("p");
            courseContent.textContent = `${course.courseDesignator} ${course.courseName}`;
            semesterDiv.appendChild(courseContent);
            });
        });
    });
}

// Load the Plan that is to be used with the displayPlan function
let plan = new Plan("My Plan", 2018, "Comp. Sci.", "Tim", "Spring",
[
    new Course("Fall", 2018, "CS-1210", "C++ Programming"),
    new Course("Fall", 2018, "HUM-1400", "Intro to Humanities"),
    new Course("Fall", 2018, "MATH-1710", "Calculus I"),
    new Course("Spring", 2019, "CS-1220", "Obj-Orient Design"),
    new Course("Spring", 2019, "PHYS-2110", "General Physics I"),
    new Course("Spring", 2019, "MATH-1720" ,"Calculus II"),
    new Course("Summer", 2019, "SOC-1300", "Intro to Sociology"),
    new Course("Summer", 2019, "BTGE-1725", "Bible & the Gospel"),
    new Course("Fall", 2019, "CS-1220", "Data Struct Using Java"),
    new Course("Fall", 2019, "CS-3350", "Foundations of Computer Security"),
    new Course("Fall", 2019, "PHYS-2120", "General Physics II"),
    new Course("Spring", 2020, "CS-3310", "Operating Systems"),
    new Course("Spring", 2020, "EGCP-3210", "Computer Architecture"),
    new Course("Spring", 2020, "MATH-2520", "Discrete Math"),
    new Course("Summer", 2020, "LIT-2340", "Western Literature"),
    new Course("Summer", 2020, "BTGE-2730", "Old Testament"),
    new Course("Summer", 2020, "BTGE-2740", "New Testament"),
    new Course("Fall", 2020, "CS-3210", "Programming Language Survey"),
    new Course("Fall", 2020, "CS-3410", "Algorithms"),
    new Course("Fall", 2020, "EGCP-4310", "Computer Networks"),
    new Course("Spring", 2021, "CS-3220", "Web Applications"),
    new Course("Spring", 2021, "CS-3610", "Database Org"),
    new Course("Spring", 2021, "CS-4430", "Machine Learning/Intelligent Agents"),
    new Course("Summer", 2021, "BTHE-3755", "Theology I"),
    new Course("Summer", 2021,"BTGE-3765", "Theology II"),
    new Course("Summer", 2021, "VCD-1050", "Applied Design"),
    new Course("Fall", 2021, "EGGN-4010", "Senior Seminar"),
    new Course("Fall", 2021, "CS-4810", "Software Engineering I"),
    new Course("Fall", 2021, "VCD-2200", "Typography"),
    new Course("Spring", 2022, "CS-4820", "Software Engineering II"),
    new Course("Spring", 2022, "CS-3510", "Compiler Theory"),
    new Course("Spring", 2021, "VCD-2400", "Graphic Design I"),
    new Course("Summer", 2022, "ENG-1400", "Composition"),
    new Course("Summer", 2022, "GBIO-1000", "Prin of Biology"),
    new Course("Summer", 2022, "HIST-1110", "US History I")
]);

displayPlan(plan);

/* JQuery UI Accordion */
$(document).ready(function() {
    $("#accordion").accordion({
        collapsible: true
    });
});