const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const geeting = document.querySelector("#geeting");
const geetingSub = document.querySelector("#geeting-sub");
const hidden = "hidden";
const username_key = "username";

function handle(e) {
  e.preventDefault();
  loginForm.classList.add(hidden);
  const username_input = loginFormInput.value;
  localStorage.setItem(username_key, username_input);
  geeting.innerText = "Hello " + username_input;
  geetingSub.innerText = " What's your plan for today?";
  geeting.classList.remove(hidden);
}

const savename = localStorage.getItem(username_key);

if (savename === null) {
  loginForm.classList.remove(hidden);
  loginForm.addEventListener("submit", handle);
} else {
  geeting.innerText = "Hello " + savename;
  geetingSub.innerText = " What's your plan for today?";
  geeting.classList.remove(hidden);
  geetingSub.classList.remove(hidden);
}
