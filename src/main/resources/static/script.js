// =====================================================
// JOB PORTAL - MAIN JAVASCRIPT
// =====================================================


// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // ================= HOME =================

    if (
        document.getElementById("homeTotalJobs") ||
        document.getElementById("homeTotalCompanies")
    ) {
        loadHomeStats();
    }


    // ================= JOBS =================

    if (document.getElementById("jobList")) {
        loadJobs();
    }


    // ================= JOB DETAILS =================

    if (document.getElementById("detailJobTitle")) {
        loadJobDetails();
    }


    // ================= LOGIN =================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", loginUser);
    }


    // ================= REGISTER =================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", registerUser);
    }


    // ================= FORGOT PASSWORD =================

    const forgotPasswordForm =
        document.getElementById("forgotPasswordForm");

    if (forgotPasswordForm) {

        forgotPasswordForm.addEventListener(
            "submit",
            resetPassword
        );

    }


    // ================= DASHBOARD =================

    const dashboardName =
        document.getElementById("dashboardName");

    const dashboardEmail =
        document.getElementById("dashboardEmail");

    if (dashboardName || dashboardEmail) {
        loadDashboard();
    }


    // ================= LOGOUT USER =================

    const logoutButton =
        document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutUser);
    }


    // ================= ADMIN LOGIN =================

    const adminLoginForm =
        document.getElementById("adminLoginForm");

    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", loginAdmin);
    }


    // ================= ADMIN DASHBOARD =================

    if (
        document.getElementById("adminUsers") ||
        document.getElementById("adminApplications") ||
        document.getElementById("adminJobList")
    ) {
        loadAdminDashboard();
    }


    // ================= ADMIN JOBS =================

    if (document.getElementById("adminJobList")) {
        loadAdminJobs();
    }


    // ================= ADMIN QUICK ACTIONS =================

    const adminAddJobButton =
        document.getElementById("adminAddJobButton");

    const viewJobsButton =
        document.getElementById("viewJobsButton");

    const viewUsersButton =
        document.getElementById("viewUsersButton");

    const viewApplicationsButton =
        document.getElementById("viewApplicationsButton");

    const addJobSection =
        document.getElementById("addJobSection");

    const manageJobsSection =
        document.getElementById("manageJobsSection");

    const usersSection =
        document.getElementById("usersSection");

    const applicationsSection =
        document.getElementById("applicationsSection");


    // ADD NEW JOB BUTTON

    if (adminAddJobButton) {

        adminAddJobButton.addEventListener(
            "click",
            function () {

                if (addJobSection) {

                    addJobSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // MANAGE JOBS BUTTON

    if (viewJobsButton) {

        viewJobsButton.addEventListener(
            "click",
            function () {

                if (manageJobsSection) {

                    manageJobsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // VIEW USERS BUTTON

    if (viewUsersButton) {

        viewUsersButton.addEventListener(
            "click",
            function () {

                if (usersSection) {

                    usersSection.style.display = "block";

                    usersSection.scrollIntoView({
                        behavior: "smooth"
                    });

                    loadAdminUsers();

                }

            }
        );

    }


    // VIEW APPLICATIONS BUTTON

    if (viewApplicationsButton) {

        viewApplicationsButton.addEventListener(
            "click",
            function () {

                if (applicationsSection) {

                    applicationsSection.style.display = "block";

                    applicationsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                    loadAdminApplications();

                }

            }
        );

    }


    // ================= ADD JOB FORM =================

    const addJobForm =
        document.getElementById("addJobForm");

    if (addJobForm) {

        addJobForm.addEventListener(
            "submit",
            addJob
        );

    }


    // ================= ADMIN LOGOUT =================

    const adminLogoutButton =
        document.getElementById("adminLogoutButton");

    if (adminLogoutButton) {

        adminLogoutButton.addEventListener(
            "click",
            logoutAdmin
        );

    }


    // ================= JOB SEARCH =================

    const searchButton =
        document.getElementById("searchButton");

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            applyJobFilters
        );

    }


    // ================= TITLE SEARCH =================

    const titleSearch =
        document.getElementById("titleSearch");

    if (titleSearch) {

        titleSearch.addEventListener(
            "keyup",
            function (event) {

                if (event.key === "Enter") {
                    applyJobFilters();
                }

            }
        );

    }


    // ================= LOCATION SEARCH =================

    const locationSearch =
        document.getElementById("locationSearch");

    if (locationSearch) {

        locationSearch.addEventListener(
            "keyup",
            function (event) {

                if (event.key === "Enter") {
                    applyJobFilters();
                }

            }
        );

    }


    // ================= JOB TYPE FILTER =================

    document
        .querySelectorAll(".job-type-filter")
        .forEach(function (checkbox) {

            checkbox.addEventListener(
                "change",
                applyJobFilters
            );

        });


    // ================= EXPERIENCE FILTER =================

    document
        .querySelectorAll(".experience-filter")
        .forEach(function (checkbox) {

            checkbox.addEventListener(
                "change",
                applyJobFilters
            );

        });


    // ================= LOCATION FILTER =================

    document
        .querySelectorAll(".location-filter")
        .forEach(function (checkbox) {

            checkbox.addEventListener(
                "change",
                applyJobFilters
            );

        });


    // ================= CLEAR FILTERS =================

    const clearFiltersButton =
        document.getElementById("clearFilters");

    if (clearFiltersButton) {

        clearFiltersButton.addEventListener(
            "click",
            clearFilters
        );

    }


    // ================= SORT =================

    const sortJobs =
        document.getElementById("sortJobs");

    if (sortJobs) {

        sortJobs.addEventListener(
            "change",
            sortJobCards
        );

    }

});


// =====================================================
// HOME PAGE STATS
// =====================================================

async function loadHomeStats() {

    try {

        const response =
            await fetch("/job-stats");

        if (!response.ok) {
            throw new Error("Unable to load statistics");
        }

        const stats =
            await response.json();

        const totalJobs =
            document.getElementById("homeTotalJobs");

        const totalCompanies =
            document.getElementById("homeTotalCompanies");

        if (totalJobs) {
            totalJobs.textContent =
                stats.totalJobs;
        }

        if (totalCompanies) {
            totalCompanies.textContent =
                stats.totalCompanies;
        }

    } catch (error) {

        console.error(
            "Home stats error:",
            error
        );

    }

}


// =====================================================
// LOAD ALL JOBS
// =====================================================

async function loadJobs() {

    const jobList =
        document.getElementById("jobList");

    if (!jobList) {
        return;
    }

    try {

        const response =
            await fetch("/jobs");

        if (!response.ok) {
            throw new Error("Unable to load jobs");
        }

        const jobs =
            await response.json();

        jobList.innerHTML = "";

        if (jobs.length === 0) {

            showNoJobs();

            return;

        }

        jobs.forEach(function (job) {

            jobList.innerHTML +=
                createJobCard(job);

        });

        updateJobCount();


        // Apply category from Home page

        const params =
            new URLSearchParams(
                window.location.search
            );

        const category =
            params.get("category");

        if (category) {
            applyJobFilters();
        }

    } catch (error) {

        console.error(
            "Jobs loading error:",
            error
        );

        jobList.innerHTML =
            "<p>Unable to load jobs.</p>";

    }

}


// =====================================================
// CREATE JOB CARD
// =====================================================

function createJobCard(job) {

    return `

        <div
            class="job-card"

            data-category="${job.category || ""}"

            data-job-type="${job.jobType || ""}"

            data-experience="${job.experience || ""}"

            data-location="${job.location || ""}"

            data-title="${job.title || ""}"

            data-company="${job.company || ""}"

            data-id="${job.id}"
        >

            <div class="job-card-content">

                <div class="job-card-header">

                    <div>

                        <h3>
                            ${job.title || "Job Title"}
                        </h3>

                        <p class="job-company">
                            ${job.company || "Company"}
                        </p>

                    </div>

                </div>


                <div class="job-info">

                    <span>
                        📍 ${job.location || "-"}
                    </span>

                    <span>
                        💼 ${job.jobType || "-"}
                    </span>

                    <span>
                        💰 ${job.salary || "-"}
                    </span>

                </div>


                <div class="job-experience">

                    <strong>
                        Experience:
                    </strong>

                    ${job.experience || "Fresher"}

                </div>


                <div class="job-skills">

                    ${job.skills || "Skills not specified"}

                </div>


                <div class="job-card-buttons">

                    <button
                        type="button"
                        onclick="viewJobDetails(${job.id})"
                        class="view-details-button"
                    >
                        View Details
                    </button>


                    <button
                        type="button"
                        onclick="applyForJob(${job.id})"
                        class="apply-job-button"
                    >
                        Apply
                    </button>


                    <button
                        type="button"
                        onclick="saveJob(${job.id})"
                        class="save-job-button"
                    >
                        ⭐ Save
                    </button>

                </div>

            </div>

        </div>

    `;

}


// =====================================================
// VIEW JOB DETAILS
// =====================================================

function viewJobDetails(jobId) {

    window.location.href =
        "job-details.html?id=" + jobId;

}


// =====================================================
// LOAD JOB DETAILS
// =====================================================

async function loadJobDetails() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const jobId =
        params.get("id");

    if (!jobId) {
        return;
    }

    try {

        const response =
            await fetch("/jobs/" + jobId);

        if (!response.ok) {
            throw new Error("Job not found");
        }

        const job =
            await response.json();


        const title =
            document.getElementById("detailJobTitle");

        const company =
            document.getElementById("detailCompany");

        const location =
            document.getElementById("detailLocation");

        const jobType =
            document.getElementById("detailJobType");

        const salary =
            document.getElementById("detailSalary");

        const experience =
            document.getElementById("detailExperience");

        const skills =
            document.getElementById("detailSkills");

        const description =
            document.getElementById("detailDescription");


        if (title) {
            title.textContent =
                job.title || "Job Details";
        }

        if (company) {
            company.textContent =
                job.company || "Company";
        }

        if (location) {
            location.textContent =
                job.location || "-";
        }

        if (jobType) {
            jobType.textContent =
                job.jobType || "-";
        }

        if (salary) {
            salary.textContent =
                job.salary || "-";
        }

        if (experience) {
            experience.textContent =
                job.experience || "-";
        }

        if (skills) {
            skills.textContent =
                job.skills || "-";
        }

        if (description) {
            description.textContent =
                job.description || "-";
        }


        const applyButton =
            document.getElementById(
                "detailApplyButton"
            );

        if (applyButton) {

            applyButton.onclick =
                function () {

                    applyForJob(job.id);

                };

        }


        const saveButton =
            document.getElementById(
                "detailSaveButton"
            );

        if (saveButton) {

            saveButton.onclick =
                function () {

                    saveJob(job.id);

                };

        }

    } catch (error) {

        console.error(
            "Job details error:",
            error
        );

    }

}


// =====================================================
// APPLY FOR JOB
// =====================================================

async function applyForJob(jobId) {

    const user =
        JSON.parse(
            localStorage.getItem(
                "loggedInUser"
            )
        );


    if (!user) {

        alert(
            "Please login first to apply for a job."
        );

        window.location.href =
            "login.html";

        return;

    }


    try {

        const response =
            await fetch(
                "/applications",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        userId: user.id,

                        jobId: jobId

                    })

                }
            );


        const text =
            await response.text();


        let result;

        try {
            result = JSON.parse(text);
        } catch {
            result = text;
        }


        if (typeof result === "string") {

            alert(result);

        } else {

            alert(
                "Application submitted successfully!"
            );

        }

    } catch (error) {

        console.error(
            "Application error:",
            error
        );

        alert(
            "Something went wrong."
        );

    }

}


// =====================================================
// SAVE JOB
// =====================================================

async function saveJob(jobId) {

    const user =
        JSON.parse(
            localStorage.getItem(
                "loggedInUser"
            )
        );


    if (!user) {

        alert(
            "Please login first to save jobs."
        );

        window.location.href =
            "login.html";

        return;

    }


    try {

        const response =
            await fetch(
                "/saved-jobs",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        userId: user.id,

                        jobId: jobId

                    })

                }
            );


        const text =
            await response.text();


        let result;

        try {
            result = JSON.parse(text);
        } catch {
            result = text;
        }


        if (typeof result === "string") {

            alert(result);

        } else {

            alert(
                "Job saved successfully!"
            );

        }

    } catch (error) {

        console.error(
            "Save job error:",
            error
        );

        alert(
            "Something went wrong."
        );

    }

}


// =====================================================
// JOB FILTERS
// =====================================================

function applyJobFilters() {

    const jobCards =
        document.querySelectorAll(
            ".job-card"
        );


    if (jobCards.length === 0) {
        return;
    }


    // ================= SEARCH =================

    const titleSearch =
        document.getElementById(
            "titleSearch"
        );

    const locationSearch =
        document.getElementById(
            "locationSearch"
        );


    const searchTitle =
        titleSearch
            ? titleSearch.value
                .toLowerCase()
                .trim()
            : "";


    const searchLocation =
        locationSearch
            ? locationSearch.value
                .toLowerCase()
                .trim()
            : "";


    // ================= JOB TYPE =================

    const selectedJobTypes =
        Array.from(
            document.querySelectorAll(
                ".job-type-filter:checked"
            )
        ).map(function (checkbox) {

            return checkbox.value
                .toLowerCase();

        });


    // ================= EXPERIENCE =================

    const selectedExperiences =
        Array.from(
            document.querySelectorAll(
                ".experience-filter:checked"
            )
        ).map(function (checkbox) {

            return checkbox.value
                .toLowerCase();

        });


    // ================= LOCATION =================

    const selectedLocations =
        Array.from(
            document.querySelectorAll(
                ".location-filter:checked"
            )
        ).map(function (checkbox) {

            return checkbox.value
                .toLowerCase();

        });


    // ================= CATEGORY =================

    const params =
        new URLSearchParams(
            window.location.search
        );

    const category =
        params.get("category");

    const selectedCategory =
        category
            ? category.toLowerCase().trim()
            : "";


    let visibleCount = 0;


    // ================= CHECK EACH JOB =================

    jobCards.forEach(function (card) {

        const cardTitle =
            (card.dataset.title || "")
                .toLowerCase();

        const cardCompany =
            (card.dataset.company || "")
                .toLowerCase();

        const cardLocation =
            (card.dataset.location || "")
                .toLowerCase();

        const cardJobType =
            (card.dataset.jobType || "")
                .toLowerCase();

        const cardExperience =
            (card.dataset.experience || "")
                .toLowerCase();

        const cardCategory =
            (card.dataset.category || "")
                .toLowerCase();

        const cardSkills =
            card.innerText.toLowerCase();


        let show = true;


        // ================= TITLE / KEYWORD SEARCH =================

        if (searchTitle) {

            const searchableText =
                cardTitle +
                " " +
                cardCompany +
                " " +
                cardLocation +
                " " +
                cardSkills +
                " " +
                cardCategory;


            if (
                !searchableText.includes(
                    searchTitle
                )
            ) {

                show = false;

            }

        }


        // ================= LOCATION SEARCH =================

        if (searchLocation) {

            if (
                !cardLocation.includes(
                    searchLocation
                )
            ) {

                show = false;

            }

        }


        // ================= JOB TYPE =================

        if (
            selectedJobTypes.length > 0
        ) {

            const matchesJobType =
                selectedJobTypes.some(
                    function (type) {

                        return cardJobType
                            .includes(type);

                    }
                );


            if (!matchesJobType) {
                show = false;
            }

        }


        // ================= EXPERIENCE =================

        if (
            selectedExperiences.length > 0
        ) {

            const matchesExperience =
                selectedExperiences.some(
                    function (experience) {

                        if (
                            experience === "fresher"
                        ) {

                            return cardExperience
                                .includes(
                                    "fresher"
                                );

                        }


                        if (
                            experience === "0-2"
                        ) {

                            return (
                                cardExperience
                                    .includes("0-2") ||
                                cardExperience
                                    .includes("0–2")
                            );

                        }


                        if (
                            experience === "2-4"
                        ) {

                            return (
                                cardExperience
                                    .includes("2-4") ||
                                cardExperience
                                    .includes("2–4")
                            );

                        }


                        if (
                            experience === "4+"
                        ) {

                            return (
                                cardExperience.includes("4") ||
                                cardExperience.includes("5") ||
                                cardExperience.includes("6") ||
                                cardExperience.includes("7") ||
                                cardExperience.includes("8")
                            );

                        }


                        return cardExperience
                            .includes(experience);

                    }
                );


            if (!matchesExperience) {
                show = false;
            }

        }


        // ================= LOCATION CHECKBOX =================

        if (
            selectedLocations.length > 0
        ) {

            const matchesLocation =
                selectedLocations.some(
                    function (location) {

                        return cardLocation
                            .includes(location);

                    }
                );


            if (!matchesLocation) {
                show = false;
            }

        }


        // ================= CATEGORY =================

        if (selectedCategory) {

            if (
                cardCategory !==
                selectedCategory
            ) {

                show = false;

            }

        }


        // ================= SHOW / HIDE =================

        if (show) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    // ================= COUNT =================

    const jobCount =
        document.getElementById(
            "jobCount"
        );

    if (jobCount) {

        jobCount.textContent =
            visibleCount +
            " jobs found";

    }


    // ================= NO JOBS =================

    const noJobs =
        document.getElementById(
            "noJobs"
        );

    if (noJobs) {

        noJobs.style.display =
            visibleCount === 0
                ? "block"
                : "none";

    }

}


// =====================================================
// UPDATE JOB COUNT
// =====================================================

function updateJobCount() {

    const jobCards =
        document.querySelectorAll(
            ".job-card"
        );

    const jobCount =
        document.getElementById(
            "jobCount"
        );

    if (jobCount) {

        jobCount.textContent =
            jobCards.length +
            " jobs found";

    }

    const noJobs =
        document.getElementById(
            "noJobs"
        );

    if (noJobs) {

        noJobs.style.display =
            jobCards.length === 0
                ? "block"
                : "none";

    }

}


// =====================================================
// SHOW NO JOBS
// =====================================================

function showNoJobs() {

    const jobCount =
        document.getElementById(
            "jobCount"
        );

    if (jobCount) {

        jobCount.textContent =
            "0 jobs found";

    }


    const noJobs =
        document.getElementById(
            "noJobs"
        );

    if (noJobs) {

        noJobs.style.display =
            "block";

    }

}


// =====================================================
// CLEAR FILTERS
// =====================================================

function clearFilters() {

    const titleSearch =
        document.getElementById(
            "titleSearch"
        );

    const locationSearch =
        document.getElementById(
            "locationSearch"
        );


    if (titleSearch) {
        titleSearch.value = "";
    }

    if (locationSearch) {
        locationSearch.value = "";
    }


    document
        .querySelectorAll(
            ".job-type-filter"
        )
        .forEach(function (checkbox) {

            checkbox.checked = false;

        });


    document
        .querySelectorAll(
            ".experience-filter"
        )
        .forEach(function (checkbox) {

            checkbox.checked = false;

        });


    document
        .querySelectorAll(
            ".location-filter"
        )
        .forEach(function (checkbox) {

            checkbox.checked = false;

        });


    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );


    const jobCards =
        document.querySelectorAll(
            ".job-card"
        );


    jobCards.forEach(function (card) {

        card.style.display = "";

    });


    updateJobCount();

}


// =====================================================
// SORT JOBS
// =====================================================

function sortJobCards() {

    const jobList =
        document.getElementById(
            "jobList"
        );

    const sortJobs =
        document.getElementById(
            "sortJobs"
        );


    if (!jobList || !sortJobs) {
        return;
    }


    const cards =
        Array.from(
            jobList.querySelectorAll(
                ".job-card"
            )
        );


    const sortValue =
        sortJobs.value;


    cards.sort(function (a, b) {

        if (sortValue === "company") {

            return (
                a.dataset.company || ""
            ).localeCompare(
                b.dataset.company || ""
            );

        }


        if (sortValue === "title") {

            return (
                a.dataset.title || ""
            ).localeCompare(
                b.dataset.title || ""
            );

        }


        // Most Recent = highest ID first

        if (sortValue === "latest") {

            return (
                Number(b.dataset.id) -
                Number(a.dataset.id)
            );

        }


        return 0;

    });


    cards.forEach(function (card) {

        jobList.appendChild(card);

    });


    applyJobFilters();

}


// =====================================================
// REGISTER USER
// =====================================================

async function registerUser(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "registerName"
        ).value;

    const email =
        document.getElementById(
            "registerEmail"
        ).value;

    const password =
        document.getElementById(
            "registerPassword"
        ).value;

    const message =
        document.getElementById(
            "registerMessage"
        );


    try {

        const response =
            await fetch(
                "/users/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        name: name,

                        email: email,

                        password: password

                    })

                }
            );


        const text =
            await response.text();


        let result;

        try {
            result = JSON.parse(text);
        } catch {
            result = text;
        }


        if (typeof result === "string") {

            if (message) {
                message.textContent = result;
            }

            return;

        }


        if (message) {

            message.textContent =
                "Registration successful!";

        }


        setTimeout(function () {

            window.location.href =
                "login.html";

        }, 1000);


    } catch (error) {

        console.error(
            "Registration error:",
            error
        );


        if (message) {

            message.textContent =
                "Registration failed.";

        }

    }

}


// =====================================================
// LOGIN USER
// =====================================================

async function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "loginEmail"
        ).value;

    const password =
        document.getElementById(
            "loginPassword"
        ).value;

    const message =
        document.getElementById(
            "loginMessage"
        );


    try {

        const response =
            await fetch(
                "/users/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        email: email,

                        password: password

                    })

                }
            );


        const text =
            await response.text();


        let result;

        try {
            result = JSON.parse(text);
        } catch {
            result = text;
        }


        if (typeof result === "string") {

            if (message) {
                message.textContent = result;
            }

            return;

        }


        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(result)
        );


        if (message) {

            message.textContent =
                "Login successful!";

        }


        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 500);


    } catch (error) {

        console.error(
            "Login error:",
            error
        );


        if (message) {

            message.textContent =
                "Login failed.";

        }

    }

}


// =====================================================
// LOAD DASHBOARD
// =====================================================

async function loadDashboard() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "loggedInUser"
            )
        );


    if (!user) {

        window.location.href =
            "login.html";

        return;

    }


    const nameElement =
        document.getElementById(
            "dashboardName"
        );

    const emailElement =
        document.getElementById(
            "dashboardEmail"
        );


    if (nameElement) {

        nameElement.textContent =
            user.name || "User";

    }


    if (emailElement) {

        emailElement.textContent =
            user.email || "";

    }


    loadUserApplications(
        user.id
    );


    loadSavedJobs(
        user.id
    );

}


// =====================================================
// LOAD USER APPLICATIONS
// =====================================================

async function loadUserApplications(userId) {

    try {

        const response =
            await fetch(
                "/applications/user/" +
                userId
            );


        const applications =
            await response.json();


        const applicationContainer =
            document.getElementById(
                "myApplications"
            );


        if (!applicationContainer) {
            return;
        }


        applicationContainer.innerHTML = "";


        if (applications.length === 0) {

            applicationContainer.innerHTML = `

                <p class="dashboard-empty">
                    No applications yet.
                </p>

            `;

            return;

        }


        applications.forEach(
            function (application) {

                applicationContainer.innerHTML += `

                    <div class="application-item">

                        <strong>
                            Application #${application.id}
                        </strong>

                        <span>
                            Job ID: ${application.jobId}
                        </span>

                        <span>
                            Status: ${application.status}
                        </span>

                    </div>

                `;

            }
        );


    } catch (error) {

        console.error(
            "Applications error:",
            error
        );

    }

}


// =====================================================
// LOAD SAVED JOBS
// =====================================================

async function loadSavedJobs(userId) {

    try {

        const response =
            await fetch(
                "/saved-jobs/user/" +
                userId
            );


        const savedJobs =
            await response.json();


        const savedJobContainer =
            document.getElementById(
                "savedJobs"
            );


        if (!savedJobContainer) {
            return;
        }


        savedJobContainer.innerHTML = "";


        if (savedJobs.length === 0) {

            savedJobContainer.innerHTML = `

                <p class="dashboard-empty">
                    No saved jobs.
                </p>

            `;

            return;

        }


        savedJobs.forEach(
            function (savedJob) {

                savedJobContainer.innerHTML += `

                    <div class="saved-job-item">

                        ⭐ Job ID:
                        ${savedJob.jobId}

                    </div>

                `;

            }
        );


    } catch (error) {

        console.error(
            "Saved jobs error:",
            error
        );

    }

}


// =====================================================
// ADMIN LOGIN
// =====================================================

async function loginAdmin(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "adminEmail"
        ).value;

    const password =
        document.getElementById(
            "adminPassword"
        ).value;

    const message =
        document.getElementById(
            "adminLoginMessage"
        );


    try {

        const response =
            await fetch(
                "/admin/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        email: email,

                        password: password

                    })

                }
            );


        const text =
            await response.text();


        let result;

        try {
            result = JSON.parse(text);
        } catch {
            result = text;
        }


        if (typeof result === "string") {

            if (message) {
                message.textContent = result;
            }

            return;

        }


        localStorage.setItem(
            "loggedInAdmin",
            JSON.stringify(result)
        );


        window.location.href =
            "admin-dashboard.html";


    } catch (error) {

        console.error(
            "Admin login error:",
            error
        );


        if (message) {

            message.textContent =
                "Admin login failed.";

        }

    }

}


// =====================================================
// ADMIN DASHBOARD
// =====================================================

async function loadAdminDashboard() {

    loadAdminDashboardStats();

    loadAdminUsers();

    loadAdminApplications();

}


// =====================================================
// ADMIN STATS
// =====================================================

async function loadAdminDashboardStats() {

    try {

        const statsResponse =
            await fetch(
                "/job-stats"
            );


        const stats =
            await statsResponse.json();


        const totalJobs =
            document.getElementById(
                "totalJobs"
            );


        const totalCompanies =
            document.getElementById(
                "totalCompanies"
            );


        if (totalJobs) {

            totalJobs.textContent =
                stats.totalJobs;

        }


        if (totalCompanies) {

            totalCompanies.textContent =
                stats.totalCompanies;

        }


        const usersResponse =
            await fetch(
                "/admin/users"
            );


        const users =
            await usersResponse.json();


        const totalUsers =
            document.getElementById(
                "totalUsers"
            );


        if (totalUsers) {

            totalUsers.textContent =
                users.length;

        }


        const applicationsResponse =
            await fetch(
                "/admin/applications"
            );


        const applications =
            await applicationsResponse.json();


        const totalApplications =
            document.getElementById(
                "totalApplications"
            );


        if (totalApplications) {

            totalApplications.textContent =
                applications.length;

        }


    } catch (error) {

        console.error(
            "Admin stats error:",
            error
        );

    }

}


// =====================================================
// ADMIN STATS ALIAS
// =====================================================

function loadAdminStats() {

    loadAdminDashboardStats();

}


// =====================================================
// ADMIN USERS
// =====================================================

async function loadAdminUsers() {

    try {

        const response =
            await fetch(
                "/admin/users"
            );


        const users =
            await response.json();


        const container =
            document.getElementById(
                "adminUsers"
            );


        if (!container) {
            return;
        }


        container.innerHTML = "";


        if (users.length === 0) {

            container.innerHTML = `

                <p class="dashboard-empty">
                    No registered users.
                </p>

            `;

            return;

        }


        users.forEach(
            function (user) {

                container.innerHTML += `

                    <div class="admin-user-item">

                        <strong>
                            ${user.name}
                        </strong>

                        <span>
                            ${user.email}
                        </span>

                    </div>

                `;

            }
        );


    } catch (error) {

        console.error(
            "Admin users error:",
            error
        );

    }

}


// =====================================================
// ADMIN APPLICATIONS
// =====================================================

async function loadAdminApplications() {

    try {

        const response =
            await fetch(
                "/admin/applications"
            );


        const applications =
            await response.json();


        const container =
            document.getElementById(
                "adminApplications"
            );


        if (!container) {
            return;
        }


        container.innerHTML = "";


        if (applications.length === 0) {

            container.innerHTML = `

                <p class="dashboard-empty">
                    No applications yet.
                </p>

            `;

            return;

        }


        applications.forEach(
            function (application) {

                container.innerHTML += `

                    <div class="admin-application-item">

                        <strong>
                            Application #${application.id}
                        </strong>

                        <span>
                            User ID:
                            ${application.userId}
                        </span>

                        <span>
                            Job ID:
                            ${application.jobId}
                        </span>

                        <span>
                            Status:
                            ${application.status}
                        </span>

                    </div>

                `;

            }
        );


    } catch (error) {

        console.error(
            "Admin applications error:",
            error
        );

    }

}


// =====================================================
// ADMIN JOBS
// =====================================================

async function loadAdminJobs() {

    const adminJobList =
        document.getElementById(
            "adminJobList"
        );


    if (!adminJobList) {
        return;
    }


    try {

        const response =
            await fetch(
                "/jobs"
            );


        const jobs =
            await response.json();


        adminJobList.innerHTML = "";


        if (jobs.length === 0) {

            adminJobList.innerHTML = `

                <p class="dashboard-empty">
                    No jobs available.
                </p>

            `;

            return;

        }


        jobs.forEach(
            function (job) {

                adminJobList.innerHTML += `

                    <div class="admin-job-item">

                        <div>

                            <strong>
                                ${job.title}
                            </strong>

                            <p>
                                ${job.company}
                                -
                                ${job.location}
                            </p>

                        </div>


                        <div>

                            <button
                                type="button"
                                onclick="editJob(${job.id})"
                            >
                                Edit
                            </button>


                            <button
                                type="button"
                                onclick="deleteJob(${job.id})"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                `;

            }
        );


    } catch (error) {

        console.error(
            "Admin jobs error:",
            error
        );

    }

}


// =====================================================
// ADD JOB
// =====================================================

async function addJob(event) {

    event.preventDefault();


    const title =
        document.getElementById(
            "jobTitle"
        ).value;


    const company =
        document.getElementById(
            "jobCompany"
        ).value;


    const location =
        document.getElementById(
            "jobLocation"
        ).value;


    const jobType =
        document.getElementById(
            "jobType"
        ).value;


    const salary =
        document.getElementById(
            "jobSalary"
        ).value;


    const experience =
        document.getElementById(
            "jobExperience"
        ).value;


    const skills =
        document.getElementById(
            "jobSkills"
        ).value;


    const description =
        document.getElementById(
            "jobDescription"
        ).value;


    const categoryElement =
        document.getElementById(
            "jobCategory"
        );


    const category =
        categoryElement
            ? categoryElement.value
            : "Software Development";


    try {

        const response =
            await fetch(
                "/jobs",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        title: title,

                        company: company,

                        location: location,

                        jobType: jobType,

                        salary: salary,

                        experience: experience,

                        skills: skills,

                        description: description,

                        category: category

                    })

                }
            );


        if (!response.ok) {

            throw new Error(
                "Failed to add job"
            );

        }


        alert(
            "Job added successfully!"
        );


        const form =
            document.getElementById(
                "addJobForm"
            );


        if (form) {
            form.reset();
        }


        loadAdminJobs();

        loadAdminDashboardStats();


    } catch (error) {

        console.error(
            "Add job error:",
            error
        );


        alert(
            "Unable to add job."
        );

    }

}


// =====================================================
// DELETE JOB
// =====================================================

async function deleteJob(jobId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this job?"
        );


    if (!confirmDelete) {
        return;
    }


    try {

        const response =
            await fetch(
                "/jobs/" + jobId,
                {
                    method: "DELETE"
                }
            );


        const result =
            await response.text();


        alert(result);


        loadAdminJobs();

        loadAdminDashboardStats();


    } catch (error) {

        console.error(
            "Delete job error:",
            error
        );


        alert(
            "Unable to delete job."
        );

    }

}


// =====================================================
// EDIT JOB
// =====================================================

async function editJob(jobId) {

    try {

        const response =
            await fetch(
                "/jobs/" + jobId
            );


        const job =
            await response.json();


        const title =
            prompt(
                "Job Title:",
                job.title
            );


        if (title === null) return;


        const company =
            prompt(
                "Company:",
                job.company
            );


        if (company === null) return;


        const location =
            prompt(
                "Location:",
                job.location
            );


        if (location === null) return;


        const jobType =
            prompt(
                "Job Type:",
                job.jobType
            );


        if (jobType === null) return;


        const salary =
            prompt(
                "Salary:",
                job.salary
            );


        if (salary === null) return;


        const experience =
            prompt(
                "Experience:",
                job.experience
            );


        if (experience === null) return;


        const skills =
            prompt(
                "Skills:",
                job.skills
            );


        if (skills === null) return;


        const description =
            prompt(
                "Description:",
                job.description
            );


        if (description === null) return;


        const category =
            prompt(
                "Category:",
                job.category
            );


        if (category === null) return;


        const updateResponse =
            await fetch(
                "/jobs/" + jobId,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        title: title,

                        company: company,

                        location: location,

                        jobType: jobType,

                        salary: salary,

                        experience: experience,

                        skills: skills,

                        description: description,

                        category: category

                    })

                }
            );


        if (!updateResponse.ok) {

            throw new Error(
                "Update failed"
            );

        }


        alert(
            "Job updated successfully!"
        );


        loadAdminJobs();

        loadAdminDashboardStats();


    } catch (error) {

        console.error(
            "Edit job error:",
            error
        );


        alert(
            "Unable to update job."
        );

    }

}


// =====================================================
// UPDATE APPLICATION STATUS
// =====================================================

async function updateApplicationStatus(
    applicationId,
    status
) {

    try {

        const response =
            await fetch(
                "/applications/" +
                applicationId +
                "/status",
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        status: status

                    })

                }
            );


        if (!response.ok) {

            throw new Error(
                "Status update failed"
            );

        }


        alert(
            "Application status updated."
        );


        loadAdminApplications();


    } catch (error) {

        console.error(
            "Status update error:",
            error
        );

    }

}


// =====================================================
// LOGOUT USER
// =====================================================

function logoutUser() {

    localStorage.removeItem(
        "loggedInUser"
    );


    window.location.href =
        "login.html";

}


// =====================================================
// LOGOUT ADMIN
// =====================================================

function logoutAdmin() {

    localStorage.removeItem(
        "loggedInAdmin"
    );


    window.location.href =
        "admin.html";

}


// =====================================================
// HOME CATEGORY
// =====================================================

function openCategory(category) {

    window.location.href =
        "jobs.html?category=" +
        encodeURIComponent(category);

}


// =====================================================
// RESET PASSWORD
// =====================================================

async function resetPassword(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "forgotEmail"
        ).value.trim();


    const newPassword =
        document.getElementById(
            "newPassword"
        ).value;


    const confirmPassword =
        document.getElementById(
            "confirmPassword"
        ).value;


    const message =
        document.getElementById(
            "forgotPasswordMessage"
        );


    // Check password match

    if (newPassword !== confirmPassword) {

        if (message) {

            message.textContent =
                "Passwords do not match.";

        }

        return;

    }


    try {

        const response =
            await fetch(
                "/users/reset-password",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        email: email,

                        newPassword:
                            newPassword,

                        confirmPassword:
                            confirmPassword

                    })

                }
            );


        const result =
            await response.text();


        if (message) {

            message.textContent =
                result;

        }


        if (
            result ===
            "Password reset successfully!"
        ) {

            setTimeout(function () {

                window.location.href =
                    "login.html";

            }, 1200);

        }


    } catch (error) {

        console.error(
            "Password reset error:",
            error
        );


        if (message) {

            message.textContent =
                "Unable to reset password.";

        }

    }

}