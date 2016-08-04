var bio =
{
    name : "Jonathan D. Peterson",
    role : "Graphic Designer, Full-Stack Web Developer, Programmer",
    contacts :
    [
        {
            mobile: "",
            email: "jonathan@jpdesigns316.com",
            github: "jpdesigns316",
            twitter: "@jpdesigns316",
            location: "Las Vegas, NV",
        }
    ]
    welcomeMessage: "I love coding beautifully designed websites!",
    skills: ["CSS", "HTML", "Python", "Warcraft", "Java", "Javascript"],
    biopic: "",
    display: function
    {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedName + formattedRole);
        $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
        $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        for (var e in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
        $("#skills").append(formattedSkill);

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
            "name" : "Coleman Univeristy",
            "location" : "San Marcos, CA",
            "degree" : "certificate",
            "majors" : "Web Media Design",
            "dates" : "May 2011 - August 2012",
            url : "http://www.colman.edu"
        }],
    "classes" :
    [
        {
            "title" : "Intro to Linux",
            "school" : "College of Southern Nevada",
            "city" : "Las Vegas",
            "dates" : "January 2016 - May 2016",
            "url" : "http://www.csn.edu"
        },
        {
            "title" : "Network+",
            "school" : "College of Southern Nevada",
            "city" : "Las Vegas",
            "dates" : "January 2016 - May 2016",
            "url" : "http://www.csn.edu"
        },
        {
            "title" : "Intro to Java II",
            "school" : "Miracosta College",
            "city" : "Oceanside, CA"
            "dates" : "August 2015 - December 2015",
            "url" : "http://www.Miracosta.edu"
        },
        "title" : "Intro to Java I",
        "school" : "Miracosta College",
        "city" : "Oceanside, CA"
        "dates" : "January 2015 - May 2015",
        "url" : "http://www.Miracosta.edu"
    }],
    "onlineClasses" :
    [
        {
            "title" : "Using Databases with Python",
            "school" : "Coursera",
            "certificate_url" : "https://www.coursera.org/account/accomplishments/verify/JC7YGGCKB2XY"
            "dates" : "December 2015 - December 2015",
            "url" : "https://www.coursera.org/specializations/python"
        },
        {
            "title" : "Using Python to Access Web Data",
            "school" : "Coursera",
            "certificate_url" : "https://www.coursera.org/account/accomplishments/verify/FA6W28NB9E3R"
            "dates" : "November 2015 - November 2015",
            "url" : "https://www.coursera.org/specializations/python"
        },
        {
            "title" : "Python for Everybody (Python)",
            "school" : "Coursera",
            "certificate_url" : "https://www.coursera.org/account/accomplishments/verify/NM6UR8VP3Y"
            "dates" : "August 2015 - September 2015",
            "url" : "https://www.coursera.org/specializations/python"
        },
        {
            "title" : "An Introduction to Interactive Programming in Python (Part 1)",
            "school" : "Coursera",
            "certificate_url" : "https://www.coursera.org/account/accomplishments/verify/P2A3EBTF7N"
            "dates" : "December 2015 - December 2015",
            "url" : "https://www.coursera.org/specializations/python"
        },
        {
            "title" : "Java Swing (GUI) Programming: From Beginner to Expert",
            "school" : "Udemy",
            "dates" : "2014",
            "url" : "http://www.udemy.com/java-swing-complete"
        },
        {
            "title" : "Java Tutorial for Complete Beginners",
            "school" : "Udemy",
            "dates" : "2014",
            "url" : "http://www.udemy.com/java-tutorial"
        }

    ]
};

var projects = {
    "projects" :
    [
        {
            "title" : "Programming by Reading",
            "url" : "",
            "dates" : "June 2016 - August 2016",
            "description" : "A website that lists books that could help a person learn to program. ",
            "image" : ""
        },
        {
            "title" : "Personal Portfolio Website",
            "url" : "http://www.jpdesigns316.com",
            "dates" : "June 2016 - June 2016",
            "description" : "A portfolio page",
            "image" : ""
        },
        {
            "title" : "Multi-User Blog",
            "url" : "http://maze-1335.appspot.com/",
            "dates" : "June 2016 - June 2016",
            "description" : "A blog written using Google App Engine",
            "image" : ""
        },
        {
            "title" : "Math Calulator (GUI)",
            "url" : "",
            "dates" : "December 2015",
            "description" : "A calculator written using the Java Swing library to calulate mathematical formulas",
            "image" : ""
        }
    ]

};

for(skill in bio.skills)
{
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0])
    $("#skills").append(formattedSkill)
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1])
    $("#skills").append(formattedSkill)
};

bio.display();
