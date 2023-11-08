const getAccounts = async () => {
	const response = await fetch("./assets/script/account.json");
	const accounts = await response.json();
	return accounts;
};

const form = document.querySelector("form");
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");

function resetForm() {
	usernameField.value = "";
	passwordField.value = "";
}

username.addEventListener("input", () => {
	if (username.value.length > 0) {
		password.removeAttribute("disabled");
	} else {
		password.setAttribute("disabled", "");
	}
});

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const username = usernameField.value;
	const password = passwordField.value;

	const accounts = await getAccounts();
	const account = accounts.find((account) => account.username === username && account.password === password);
	if (account != null) {
		if (account.isAdmin === true) {
			alert("Login Berhasil");
			resetForm();
			window.location.href = "dashboard.html?admin=true";
		} else {
			alert("Login Berhasil");
			resetForm();
			window.location.href = "dashboard.html";
		}
	} else {
		alert("User tidak terdaftar");
		resetForm();
	}
});
