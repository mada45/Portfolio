const languagesDiv = document.querySelector(".project-languages");

class Project {
	constructor(
		name,
		languageOne,
		languageTwo,
		languageThree,
		languageFour,
		languageFive
	) {
		(this.name = name),
			(this.languages = [
				languageOne,
				languageTwo,
				languageThree,
				languageFour,
				languageFive,
			]);
	}
}

const projects = [
	new Project("twitter-clone", "JavaScript", "PHP", "MySQL", "CSS", "HTML"),
	new Project("architecturequote", "JavaScript", "CSS", "HTML", "WordPress"),
	new Project("nodesk", "Vue", "Firebase", "Bootstrap", "SASS", "HTML"),
	new Project("moncsi", "JavaScript", "CSS", "HTML", "WordPress"),
	new Project("48", "JavaScript", "Bootstrap", "CSS", "HTML"),
	new Project("cfa", "JavaScript", "CSS", "HTML"),
	new Project("wedding", "JavaScript", "CSS", "HTML"),
];

projects.forEach((project) => {
	if (location.href == `https://adamtoth.dev/projects/${project.name}.html`) {
		project.languages.forEach((language) => {
			if (language == undefined) {
				return;
			}
			let languageDiv = `
				<div class="language-container">
					<div class="language">
						<h3>${language}</h3>
					</div>
				</div>
				`;
			if (languagesDiv) {
				languagesDiv.insertAdjacentHTML("beforeend", languageDiv);
			}
		});
	}
});
