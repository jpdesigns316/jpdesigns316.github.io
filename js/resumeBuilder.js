var bio =
{
    "name": "Jonathan D. Peterson",
    "role": "Graphic Designer, Full-Stack Web Developer, Programmer",
    "contacts":
    {
        "mobile":"",
        "email": "jonathan@jpdesigns316.com",
        "github": "jpdesigns316",
        "twitter": "@jpdesigns316",
        "location": "Las Vegas, NV"
    },
    "welcomeMessage": "I'm highly detail oriented, and I love coding and designing!",
    "skills":["CSS", "HTML", "Python", "Warcraft", "Java", "Javascript"],
    "bioPic":"images/jonathan.jpg",
    display:function()
    {
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        var profileMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        var pic = HTMLbioPic.replace("%data%",bio.bioPic)
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


        $("#header").prepend(name + role);
        $("#topContacts").prepend(email + twitter + gitHub + location);
        $("#header").append(pic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        for (var e in bio.skills) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
          $("#skills").append(formattedSkill);
        }
    }
};

var education =
{
    "schools" :
    [
        {
            "name" : "Udacity",
            "location" : "Online",
            "degree" : "nanodegree",
            "majors" : "Full-Stack Web Developer",
            "dates" : "pursuing",
            "url" : ""
        },
        {
            "name" : "Miracosta College",
            "location" : "Oceanside, CA",
            "degree" : "DROPOUT",
            "majors" : "Computer Science",
            "dates" : "January 2014 - December 2015",
            "url" : "http://www.miracosta.edu"
        },
        {
            "name" : "Coleman Univeristy",
            "location" : "San Marcos, CA",
            "degree" : "certificate",
            "majors" : "Web Media Design <span style:color: red;>(No longer offered)</span>",
            "dates" : "May 2011 - August 2012",
            "url" : "http://www.colman.edu"
        }
    ],
    "liveCourses":
    [
        {
            "title" : "Intro to Linux",
            "school" : "College of Southern Nevada",
            "city" : "Las Vegas, NV",
            "dates" : "January 2016 - May 2016",
            "url" : "http://www.csn.edu"
        },
        {
            "title" : "Network+",
            "school" : "College of Southern Nevada",
            "city" : "Las Vegas, NV",
            "dates" : "January 2016 - May 2016",
            "url" : "http://www.csn.edu"
        },
        {
            "title" : "Intro to Java II",
            "school" : "Miracosta College",
            "city" : "Oceanside, CA",
            "dates" : "August 2015 - December 2015",
            "url" : "http://www.Miracosta.edu"
        },
        {
            "title" : "Intro to Java I",
            "school" : "Miracosta College",
            "city" : "Oceanside, CA",
            "dates" : "January 2015 - May 2015",
            "url" : "http://www.Miracosta.edu"
        }
    ],
    "onlineCourses":
    [
        {
            "title" : "Java Tutorial for Complete Beginners",
            "school" : "Udemy",
            "dates" : "2014",
            "url" : "http://www.udemy.com/java-tutorial"
        },
        {
            "title" : "Programming Foundations with Python",
            "school" : "Udacity",
            "dates" : "June 2016",
            "url" : "https://www.udacity.com/course/programming-foundations-with-python--ud036"
        },
        {
            "title" : "Responsive Web Design Fundamentals",
            "school" : "Udacity",
            "dates" : "June 2016",
            "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title" : "Responsive Images",
            "school" : "Udacity",
            "dates" : "June 2016",
            "url" : "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title" : "Intro to Backend",
            "school" : "Udacity",
            "dates" : "June 2016",
            "url" : "https://www.udacity.com/course/intro-to-backend--ud171"
        },
        {
            "title" : "Introduction to Relational Databases",
            "school" : "Udacity",
            "dates" : "July 2016",
            "url" : "https://www.udacity.com/course/intro-to-relational-databases--ud197"
        },
        {
            "title" : "Full Stack Foundations",
            "school" : "Udacity",
            "dates" : "July 2016-August-2016",
            "url" : "https://www.udacity.com/course/full-stack-foundations--ud088"
        },
        {
            "title" : "Authentication & Authorization: OAuth",
            "school" : "Udacity",
            "dates" : "July 2016-August-2016",
            "url" : "https://www.udacity.com/course/authentication-authorization-oauth--ud330"
        },
        {
            "title" : "How to use Git and GitHub",
            "school" : "Udacity",
            "dates" : "June 2016",
            "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "dates" : "July 2016-August-2016",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title" : "Typography - DSN130",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Internet Programming I - COM287",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Internent Programing II - COM288",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Design Principles - DSN110",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "User Interface Design - DSN120",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Digital Images - DSN140",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Computer Foundations - COM100",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Web Design I - DSN150",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Professional Practices - DSN160",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Custom Web Graphics - DSN170",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Animation - DSN180",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Digital Design II - DSN200",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Digital Layout - DSN210",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Creative Concepts - DSN220",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Web Design II - DSN230",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Animation - DSN240",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
            "title" : "Digital Portfolio - DSN290",
            "school" : "Coleman Univeristy",
            "dates" : "2011",
            "url" : ""
        },
        {
        "title" : "Intro to Computer Science (CS111)",
        "school" : "Miracosta College"
        },
        {
        "title" : "Drawing and Composition (ART100)",
        "school" : "Miracosta College"
        },
        {
        "title" : "Digital Imaging: Adobe Photoshop (MAT110)",
        "school" : "Miracosta College"
        },

        {
        "title" : "Intro to Computer Science II (CS112)",
        "school" : "Miracosta College"
        }

    ],
    displaySchools: function()
    {
        for (var e in education.schools)
        {
            $("#education").append(dropDownSchoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[e].name);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[e].majors);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[e].dates);
            $(".education-entry:last").append(formattedName + " - " + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajors);

            if (education.onlineCourses.length > 0)
            {
                for (var c in education.onlineCourses)
                {
                    if(education.schools[e].name == education.onlineCourses[c].school)
                    {
                        var classTitle = dropDownTitle.replace("%data%", education.onlineCourses[c].title);
                        classTitle = classTitle.replace("#", education.onlineCourses[c].url);
                        var classDates = dropDownDates.replace("%dates%", education.onlineCourses[c].dates);
                        $(".nav-bar:last").append(classTitle);

                    }
                }
            }

        }
 }


};


var project = {
  "projects":
  [
      {
          "title" : "Programming by Reading",
          "url" : "",
          "dates" : "June 2016 - August 2016",
          "points" :
          [
            "Designed a book cata log that utilized the functions of the Python modules SQLalcehemy and Flask",
            "Created responsive temlates the access on mobile and desktop platforms.",
            "Put into effect the methods of the OAth2 module to allow login from thrid-party sites."
          ],
          "image" : ""
      },
      {
          "title" : "Multi-User Blog",
          "url" : "http://maze-1335.appspot.com/",
          "dates" : "June 2016 - June 2016",
          "points" :
          [
            "• Designed and implemented a simple blog using Google App Engine and Python 2.7.",
            "• Ceated dual-error checking for increased security.",
            "• Increased scalability by creating an object-oriented structure for easy modification."
          ],
          "image" : ""
      },
      {
          "title" : "Personal Portfolio",
          "url" : "https://jpdesigns316.github.io/#Portfolio",
          "dates" : "June 2016 - June 2016",
          "points" :
          [
            "• Designed a page based on a mock-up.",
            "• Using Python 2.7, utilized data modals to display information about projects and to make interactive.",
            "• Using graphic design principles, cerated a color palette of colors for the website based on the logo."
          ],
          "image" : ""
      },
      {
          "title" : "Movie Trailer Website",
          "url" : "http://maze-1335.appspot.com/",
          "dates" : "June 2016 - June 2016",
          "points" :
          [
            "• Designed and wrtitten in Python 2.7 to implemented code which showed trailers to selected movies.",
            "• Created a psuedo-database of Python objects that contained data about the movies.",
            "• Used string manipulation methods to implement the data into a template."
          ],
          "image" : ""
      },
      {
          "title" : "Multi-User Blog",
          "url" : "http://maze-1335.appspot.com/",
          "dates" : "June 2016 - June 2016",
          "points" :
          [
            "• Designed and implemented a simple blog using Google App Engine and Python 2.7.",
            "• Created dual-error checking for increased security.",
            "• Increased scalability by creating an object-oriented structure for easy modification."
          ],
          "image" : ""
      }
    ],
    display: function()
    {
        for (var e in project.projects)
        {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[e].title);
            formattedTitle = formattedTitle.replace("#", project.projects[e].url);
            var formattedDates = HTMLprojectDates.replace("%data%", project.projects[e].dates);
            var formattedImage = HTMLprojectImage.replace("%data%", project.projects[e].image);
            $(".project-entry:last").append(formattedTitle + formattedDates);
            $(".project-entry:last").append(HTMLprojectPoints);
            var point = HTMLpojectPointsDesc.replace('%one%', project.projects[e].points[0]);
            point = point.replace('%two%', project.projects[e].points[1]);
            point = point.replace('%three%', project.projects[e].points[2]);
            $(".points:last").append(point);

        }
    }
};




var des = "<div class='summary'><p>Coding is something that comes easy for me to do. The two programming languages \
that I have a strong proficentcy in is Python and Java. I like to see how much I can improve code in. I am an avid learner \
and push myself hard to continue to learn new things about the languages that I know. </p>\
<p>I have an attention to detail and always want to see different ways I can improve code. This does not extend \
to just writing code, but to designing thing; both digitally and through the use of wireframes.</p></div>" ;

var summary = {
  "description": des,
  display: function() {
    $("#summary").append(HTMLsumStart);
    var formattedDescription = HTMLsumDescription.replace("%data%", summary.description);
    $(".sum-entry:last").append(formattedDescription);
  }
}
bio.display();
summary.display();
project.display();
education.displaySchools();
//education.displayLiveCourses();
/*
This is empty on purpose! Your code to build the resume will go here.
 */
