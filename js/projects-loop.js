const landingProjectsDiv = document.querySelector(".landing-projects");
const newProjectsDiv = document.querySelector("#new-projects");
const oldProjectsDiv = document.querySelector("#old-projects");

class Project {
	constructor(image, name, link, description, old) {
		this.image = image;
		this.name = name;
		this.link = link;
		this.description = description;
		this.old = old;
	}
}

let projects = [
	new Project(
		"wedding/wedding.png",
		"Wedding planner",
		"wedding.html",
		"Prototype website for a wedding planner company developed and designed by me and my classmates.",
		true
	),
	new Project(
		"48/48.png",
		"48 hour festival",
		"48.html",
		"Website prototype for the festival called 48 timer festival located in Copenhagen.",
		true
	),
	new Project(
		"moncsi/moncsi.png",
		"Moncsi Dekor",
		"moncsi.html",
		"E-commerce website for a flower/decoration shop. It is made with HTML, CSS, JavaScript with a Woocommerce base in WordPress.",
		false
	),
	new Project(
		"cfa/cfa.png",
		"Center for Autisme",
		"cfa.html",
		"A website created for the Copenhagen based organization called Center for Autisme. This website's goal is to spread information and knowledge as well as giving a platform to people who want to help others in need.",
		true
	),
	new Project(
		"nodesk/nodesk.png",
		"Nodesk",
		"nodesk.html",
		"Shopping list application created with Vue.js, Firebase and Node.js. This app helps you never forget again what you have to buy.",
		false
	),
	new Project(
		"aq/architecturequote.png",
		"ArchitectureQuote",
		"architecturequote.html",
		"Website for the platform called ArchitectureQuote where you can find architects, get quotes and network.",
		false
	),
	new Project(
		"twitter/twitter.png",
		"Twitter clone",
		"twitter-clone.html",
		"Full stack web application built with JavaScript, PHP and MySQL. Inspired by the famous social media platform, Twitter.",
		false
	),
];

let index = 0;
projects.reverse().forEach((project) => {
	index = index + 1;
	if (landingProjectsDiv && index >= 3) {
		return;
	}
	let projectDiv = `
		<div class="landing-project">
			<a href="projects/${project.link}">
				<img src="images/${project.image}" alt="${project.name}">
				<div class="landing-project-text">
					<h3>${project.name}</h3>
					<p>${project.description}</p>
					<button class="btn">SEE MORE</button>
				</div>
			</a>
		</div>
		`;
	if (landingProjectsDiv) {
		landingProjectsDiv.childNodes[3].insertAdjacentHTML(
			"beforeend",
			projectDiv
		);
	} else if (newProjectsDiv) {
		if (project.old == false) {
			newProjectsDiv.insertAdjacentHTML("beforeend", projectDiv);
		} else {
			oldProjectsDiv.insertAdjacentHTML("beforeend", projectDiv);
		}
	}
});
