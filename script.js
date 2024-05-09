const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);
const counters = document.querySelectorAll('.counter');
let scrolStarted = false;

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  // to know the position on the y axis when scrolling
  const scrollPos = window.scrollY;

  console.log(scrollPos);

  if (scrollPos > 100 && !scrolStarted) {
    countUp();
    scrolStarted = true;
  } else if (scrollPos < 100 && scrolStarted) {
    reset();
    scrolStarted = false;
  }
}

function countUp() {
  counters.forEach((count) => {
    count.innerHTML = 0;

    const updateCounter = () => {
      // get count target
      const target = Number(count.getAttribute('data-target'));
      // get current counter value
      const c = Number(count.innerHTML);
      // create Increments
      const increment = target / 10;

      // if counter is less than target, add increment
      if (c < target) {
        // round up set counter value
        count.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((count) => (count.innerHTML = '0'));
}
