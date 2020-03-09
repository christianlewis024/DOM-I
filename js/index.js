const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");

// ******* did forEach and for loop, both seem about same work  *********
// ***********                                                 **********

// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
//   navLinks[i].style.color = "green";
// }

// ***************************************************************************
navLinks.forEach(
  (item, i) =>
    (navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`])
);
navLinks.forEach((item, i) => (navLinks[i].style.color = "green"));

// top

//button
const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

// top image

const topImage = document.getElementById("cta-img");
topImage.setAttribute("src", siteContent["cta"]["img-src"]);

// top h1

const topH1 = document.querySelector(".cta-text h1");
topH1.innerHTML = "DOM <br/> Is <br/> Awesome";

// declare all the middle sections
const middleSectionTags = [
  "features",
  "about",
  "services",
  "product",
  "vision",
  "contact"
];

// middle h4 tags

const midH4 = document.getElementsByTagName("h4");
for (let i = 0; i < middleSectionTags.length; i++) {
  midH4[i].textContent =
    siteContent["main-content"][`${middleSectionTags[i]}-h4`] ||
    siteContent["contact"][`${middleSectionTags[i]}-h4`];
}

// middle p tags

const pTags = document.querySelectorAll(".text-content p");
for (let i = 0; i < pTags.length; i++) {
  pTags[i].textContent =
    siteContent["main-content"][`${middleSectionTags[i]}-content`];
}

// middle image

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact @ bottom

//contact h4 already styled from above

// declare the contacts

const diffContacts = ["address", "phone", "email"];

const contactPTags = document.querySelectorAll(".contact p");
contactPTags.forEach(
  (item, i) => (item.textContent = siteContent["contact"][`${diffContacts[i]}`])
);

// appending items to nav bar

// Learn tab

const learn = document.createElement("a");
learn.textContent = "Learn";
learn.style.color = "green";
nav.append(learn);

// Complaints tab
const complaints = document.createElement("a");
complaints.textContent = "Complaints";
complaints.style.color = "green";
nav.prepend(complaints);

// stretch attempts??

function myFunction() {
  var x = document.getElementById("middle-img");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// const showHide = document.createElement("button");
// showHide.value = "myFunction";
// showHide.textContent = "Show/Hide";
// topH1.prepend(showHide);
// showHide.style.margin = "25%";

// function myFunction() {
//   var x = document.getElementsByIdName("middle-img");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
