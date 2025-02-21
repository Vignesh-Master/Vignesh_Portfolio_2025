document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typing", {
      strings: ["Network Engineer", "C++ Programmer", "Cloud Enthusiast", "SDN/SD-WAN Learner"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

  function removeBackSection() {
      allSection.forEach(section => section.classList.remove("back-section"));
  }

  function addBackSection(num) {
      allSection[num].classList.add("back-section");
  }

  function showSection(element) {
      allSection.forEach(section => section.classList.remove("active"));
      const target = element.getAttribute("href").split("#")[1];
      document.querySelector("#" + target).classList.add("active");
  }

  function updateNav(element) {
      navList.forEach(item => item.querySelector("a").classList.remove("active"));
      const target = element.getAttribute("href").split("#")[1];
      navList.forEach(item => {
          if (target === item.querySelector("a").getAttribute("href").split("#")[1]) {
              item.querySelector("a").classList.add("active");
          }
      });
  }

  navList.forEach((navItem, i) => {
      const a = navItem.querySelector("a");
      a.addEventListener("click", function (event) {
          event.preventDefault();
          removeBackSection();
          if (navItem.querySelector("a").classList.contains("active")) {
              addBackSection(i);
          }
          this.classList.add("active");
          showSection(this);
          if (window.innerWidth < 1200) {
              asideSectionTogglerBtn();
          }
          updateNav(this);
      });
  });

  document.querySelector(".hire-me").addEventListener("click", function () {
      const sectionIndex = this.getAttribute("data-section-index");
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(sectionIndex);
  });

  const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

  function asideSectionTogglerBtn() {
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      allSection.forEach(section => section.classList.toggle("open"));
  }

  function changeActiveSectionOnScroll() {
      let currentSection = "";
      allSection.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute("id");
          }
      });

      navList.forEach((navItem) => {
          const link = navItem.querySelector("a");
          link.classList.remove("active");
          if (link.getAttribute("href").includes(currentSection)) {
              link.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", changeActiveSectionOnScroll);
});
