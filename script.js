// ==================================
// MODULE 1: CAMPUS NAVIGATOR
// ==================================

const campusLocations = [

    {
        name: "Central Library",
        category: "Library",
        block: "Main Academic Block",
        description: "Books, reference materials and study spaces."
    },

    {
        name: "Computer Laboratory",
        category: "Laboratory",
        block: "Engineering Block",
        description: "Computers and programming laboratory."
    },

    {
        name: "Physics Laboratory",
        category: "Laboratory",
        block: "Science Block",
        description: "Physics practical sessions and experiments."
    },

    {
        name: "Administrative Office",
        category: "Office",
        block: "Main Building",
        description: "Student administration and enquiries."
    },

    {
        name: "Auditorium",
        category: "Facility",
        block: "Central Campus",
        description: "College events, seminars and functions."
    }

];


function displayCampusLocations(locations) {

    const campusList = document.getElementById("campusList");

    campusList.innerHTML = "";

    if (locations.length === 0) {
        campusList.textContent = "No locations found.";
        return;
    }

    locations.forEach(location => {

        campusList.innerHTML += `
            <div class="card">
                <h3>${location.name}</h3>
                <p>${location.description}</p>
                <small>Category: ${location.category}</small>
                <p><strong>Location:</strong> ${location.block}</p>
            </div>
        `;

    });

}


// Campus search

document.getElementById("campusSearch")
.addEventListener("input", function() {

    const searchValue = this.value.toLowerCase();

    const filteredLocations = campusLocations.filter(location =>
        location.name.toLowerCase().includes(searchValue) ||
        location.category.toLowerCase().includes(searchValue) ||
        location.block.toLowerCase().includes(searchValue)
    );

    displayCampusLocations(filteredLocations);

});


// ==================================
// MODULE 2: ACADEMIC RESOURCES
// ==================================

const resources = [

    {
        title: "Engineering Mathematics Notes",
        subject: "Mathematics",
        description: "First semester mathematics study materials.",
        file: ""
    },

    {
        title: "Engineering Physics Notes",
        subject: "Physics",
        description: "Physics concepts and study materials.",
        file: ""
    },

    {
        title: "Introduction to C Programming",
        subject: "Programming",
        description: "Basic programming concepts and examples.",
        file: ""
    },

    {
        title: "Basic Electronics Notes",
        subject: "Electronics",
        description: "Fundamentals of electronic circuits.",
        file: ""
    }

];


function displayResources(resourceItems) {

    const resourceList = document.getElementById("resourceList");

    resourceList.innerHTML = "";

    if (resourceItems.length === 0) {
        resourceList.textContent = "No resources found.";
        return;
    }

    resourceItems.forEach(resource => {

        const downloadLink = resource.file
            ? `<a href="${resource.file}" download>Download PDF</a>`
            : `<small>PDF upload pending</small>`;

        resourceList.innerHTML += `
            <div class="card">
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <small>Subject: ${resource.subject}</small>
                <br>
                ${downloadLink}
            </div>
        `;

    });

}


// Subject filter

document.getElementById("subjectFilter")
.addEventListener("change", function() {

    const selectedSubject = this.value;

    if (selectedSubject === "all") {
        displayResources(resources);
    }
    else {

        const filteredResources = resources.filter(resource =>
            resource.subject === selectedSubject
        );

        displayResources(filteredResources);

    }

});


// ==================================
// MODULE 3: EVENTS AND OPPORTUNITIES
// ==================================

const events = [

    {
        title: "National Level Hackathon",
        type: "Hackathon",
        description: "A platform to develop innovative technology solutions.",
        link: ""
    },

    {
        title: "Coding Competition",
        type: "Competition",
        description: "Test your programming and problem-solving skills.",
        link: ""
    },

    {
        title: "Technical Workshop",
        type: "Workshop",
        description: "Learn new technologies from industry professionals.",
        link: ""
    },

    {
        title: "Student Internship Opportunities",
        type: "Internship",
        description: "Explore practical learning and industry exposure.",
        link: ""
    }

];


function displayEvents() {

    const eventList = document.getElementById("eventList");

    eventList.innerHTML = "";

    events.forEach(event => {

        const registration = event.link
            ? `<a href="${event.link}" target="_blank" rel="noopener noreferrer">Register / Learn More</a>`
            : `<small>Registration link to be added</small>`;

        eventList.innerHTML += `
            <div class="card">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <small>Category: ${event.type}</small>
                <br>
                ${registration}
            </div>
        `;

    });

}


// ==================================
// MODULE 4: COLLEGE NOTICE BOARD
// ==================================

const notices = [

    {
        title: "Semester Examination Update",
        message: "Important examination information will be announced here.",
        category: "Examination"
    },

    {
        title: "Technical Club Announcement",
        message: "Updates about upcoming technical club activities.",
        category: "Club Activity"
    },

    {
        title: "Workshop Registration",
        message: "Details about upcoming college workshops.",
        category: "Events"
    }

];


function displayNotices() {

    const noticeList = document.getElementById("noticeList");

    noticeList.innerHTML = "";

    notices.forEach(notice => {

        noticeList.innerHTML += `
            <div class="notice">
                <h3>${notice.title}</h3>
                <p>${notice.message}</p>
                <small>Category: ${notice.category}</small>
            </div>
        `;

    });

}


// ==================================
// GLOBAL WEBSITE SEARCH
// ==================================

function searchWebsite() {

    const searchValue = document
        .getElementById("searchBox")
        .value
        .toLowerCase()
        .trim();

    if (searchValue === "") {
        alert("Please enter something to search!");
        return;
    }

    const sections = [
        { id: "campus", data: campusLocations },
        { id: "resources", data: resources },
        { id: "opportunities", data: events },
        { id: "notices", data: notices }
    ];

    for (const section of sections) {

        const found = section.data.some(item =>
            Object.values(item).some(value =>
                String(value).toLowerCase().includes(searchValue)
            )
        );

        if (found) {

            document.getElementById(section.id)
                .scrollIntoView({ behavior: "smooth" });

            return;

        }

    }

    alert("No matching information found.");

}


// ==================================
// INITIALISE ALL MODULES
// ==================================

displayCampusLocations(campusLocations);

displayResources(resources);

displayEvents();

displayNotices();

// BMSIT campus map
const bmsitCenter = [13.1339, 77.56802];

const campusMap = L.map("campusMap").setView(bmsitCenter, 18);

// OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(campusMap);

// Animated student icon
const studentIcon = L.divIcon({
    className: "",
    html: '<div class="student-marker">🧑‍🎓</div>',
    iconSize: [42, 48],
    iconAnchor: [21, 42]
});

let studentMarker = null;
let locationCircle = null;
let watchId = null;

// Start tracking the phone's location
function startTracking() {
    const status = document.getElementById("locationStatus");

    if (!navigator.geolocation) {
        status.textContent = "Your browser does not support GPS location.";
        return;
    }

    if (watchId !== null) {
        return;
    }

    status.textContent = "Finding your location...";

    watchId = navigator.geolocation.watchPosition(
        function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            const currentPosition = [latitude, longitude];

            if (!studentMarker) {
                studentMarker = L.marker(currentPosition, {
                    icon: studentIcon
                }).addTo(campusMap);

                studentMarker.bindPopup("You are here! 🎓");
            } else {
                studentMarker.setLatLng(currentPosition);
            }

            if (!locationCircle) {
                locationCircle = L.circle(currentPosition, {
                    radius: accuracy,
                    color: "#2563eb",
                    fillOpacity: 0.12
                }).addTo(campusMap);
            } else {
                locationCircle.setLatLng(currentPosition);
                locationCircle.setRadius(accuracy);
            }

            campusMap.panTo(currentPosition);

            status.textContent =
                "Live location active. GPS accuracy: approximately " +
                Math.round(accuracy) + " metres.";
        },

        function(error) {
            status.textContent =
                "Could not access location. Please allow location permission and try again.";

            stopTracking();
        },

        {
            enableHighAccuracy: true,
            maximumAge: 2000,
            timeout: 15000
        }
    );
}

// Stop tracking
function stopTracking() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }

    document.getElementById("locationStatus").textContent =
        "Live location stopped.";
}