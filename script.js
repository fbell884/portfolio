const inViewport = (entries) => {
    entries.forEach(entry => {
      if (entry.target.classList.contains('card')) {
        entry.target.classList.toggle("card-animation", entry.isIntersecting);
      }
    });
  };
  
  const observer = new IntersectionObserver(inViewport);
  
  // Attach observer to every [data-inviewport] element:
  const cardsInViewport = document.querySelectorAll('.card');
  cardsInViewport.forEach(cards => {
    observer.observe(cards);
  });

  


//   PAGINATION SCRIPT
// get elements
const dropdownContainer = document.querySelector('.dropdown-menu')
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
const listOfSkills = document.getElementById("paginate");
const pageNums = document.getElementById("pagination-numbers");


// stop propogation to not close on click
dropdownContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});

let currentPage = 1;
let skillsPerPage = 5;

const skillObj = [
    { skills: "HTML" },
    { skills: "CSS" },
    { skills: "JavaScript" },
    { skills: "Git" },
    { skills: "Accessibility" },
    { skills: "SEO" },
    { skills: "JIRA" },
    { skills: "Bootstrap" },
    { skills: "React" },
    { skills: "jQuery" },
    { skills: "Node.js" },
    { skills: "MongoDB" },
    { skills: "SQL Server" },
    { skills: "Debugging" },
    { skills: "CMS" }
]; 

let numPages = Math.ceil(skillObj.length / skillsPerPage);

nextBtn.addEventListener("click", nextPage);

prevBtn.addEventListener("click", prevPage);

function changePage(page)
{
    // Validate page
    if (page < 1) {
        page = 1;
    }

    if (page > numPages) {
        page = numPages;
    }

    listOfSkills.innerHTML = "";

    for (let i = (page-1) * skillsPerPage; i < (page * skillsPerPage) && i < skillObj.length; i++) {
        listOfSkills.innerHTML += `<li>${skillObj[i].skills}</li>`;
    }
    pageNums.innerHTML = page + "/" + numPages;

    // Button Handler Function
    btnVisibilityHandler(page);

}

// Functions
function btnVisibilityHandler(pages) {
    if (pages == 1) {
        prevBtn.classList.add('invisible');
        prevBtn.classList.remove('visible');
    } 
    else {
        prevBtn.classList.remove('invisible');
        prevBtn.classList.add('visible');
    }

    if (pages == numPages) {
        nextBtn.classList.add('invisible');
        nextBtn.classList.remove('visible');
    } 
    else {
        nextBtn.classList.remove('invisible');
        nextBtn.classList.add('visible');
    }
}

function prevPage()
{
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

function nextPage()
{
    if (currentPage < numPages) {
        currentPage++;
        changePage(currentPage);
    }
}

window.onload = () => {
    changePage(1);
};

// Close dropdown on mouseout
const dropdownArea = document.querySelector('.navbar');
const dropdownButton = document.getElementById('skills');

dropdownArea.addEventListener('mouseleave', () => {
    if (dropdownButton.classList.contains("show")) {
        dropdownButton.click();
    }
});