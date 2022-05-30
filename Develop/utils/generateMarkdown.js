// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT license") {
    return `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`
  }

  if (license === "Mozilla Public License 2.0") {
    return `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`
  }

  if (license === "Common Development and Distribution License") {
    return `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`
  }

  if (license === "None") {
  }

  else {
    return 'You must choose one of the following options'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license != 'none') {
		return `
# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Testing](#testing)
5. [Questions](#questions)
6. [License](#license)
		`;
	} else {
		return `
# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Testing](#testing)
5. [Questions](#questions)
		`;
	};
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	// console.log('renderLicenseSection', license);
	if (license === 'MIT License') {
		return `
# License
[MIT](https://choosealicense.com/licenses/mit/)
		`;
	};

	if (license === 'Apache License 2.0') {
		return `
# License
[Apache](https://choosealicense.com/licenses/apache-2.0/)
		`;
	};

	if (license === 'Mozilla Public License 2.0') {
		return `
# License
[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)
		`;
	};

	if (license === 'none') {
		return ``;
	};
	// if there is a license show section title and badge
	// if there is no license we want to get rid of it so add empty string
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.titleOfProject}

  ## Description
  
 ${answers.description}
  
  
  ## Installation
  
  ${answers.installiation}

  ## Usage
  
  ${answers.usage}

  ## Credits
  
  ${answers.contributors}
  
  ## License
  
${renderLicenseBadge(answers.license)}
${renderLicenseLink(answers.license)}

  

`;
}

module.exports = generateMarkdown;
