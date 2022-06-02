// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT license") {
    return `![badmath](https://choosealicense.com/licenses/mit/)`
  }

  if (license === "Mozilla Public License 2.0") {
    return `![badmath](https://choosealicense.com/licenses/mpl-2.0/)`
  }

  if (license === "Apache License 2.0") {
    return `![badmath](https://choosealicense.com/licenses/apache-2.0/)`
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
	if (license != 'None') {
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.titleOfProject}

  ${renderLicenseBadge(answers.license)}
  ${renderLicenseLink(answers.license)}

  ## Description
  
 ${answers.description}
  
  
  ## Installation
  
  ${answers.installation}

  ## Usage
  
  ${answers.usage}

  ## Credits

  ${answers.githubUsername}
  ${answers.emailAddress}
  ${answers.contributors}
   

`;
}

module.exports = generateMarkdown;
