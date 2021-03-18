const landingSkillsDiv = document.querySelector(".skills");

class Skill {
	constructor(name, percent) {
		this.name = name;
		this.percent = percent;
	}

	createSkills() {
		if (this.percent) {
			return `
            <div class="skill">
                <h3>${this.name}</h3>
                <span>${this.percent}%</span>
            </div>
            `;
		}
		return `
        <div class="skill-learning">
            <h3>${this.name}</h3>
            <span>Currently learning</span>
        </div>`;
	}
}

const skills = [
	new Skill("JavaScript", "78"),
	new Skill("PHP", "70"),
	new Skill("MySQL", "68"),
	new Skill("CSS", "94"),
	new Skill("HTML", "99"),
	new Skill("React"),
	new Skill("Django"),
	new Skill("Docker"),
];
if (landingSkillsDiv) {
	skills.forEach((item) => {
		landingSkillsDiv.insertAdjacentHTML("beforeend", item.createSkills());
	});
}
