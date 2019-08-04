const fs = require('fs');

const faves = [
  "angular",
  "aspx",
  "aws",
  "azure",
  "babel2",
  "bitbucketpipeline",
  "bolt",
  "confluence",
  "csharp",
  "eslint2",
  "git",
  "graphql",
  "handlebars",
  "js official",
  "json",
  "json official",
  "light font",
  "light prettier",
  "markdown",
  "meteor",
  "mongo",
  "netlify",
  "node",
  "npm",
  "nuget",
  "nunjucks",
  "nuxt",
  "onenote",
  "powershell",
  "python",
  "razor",
  "reactjs",
  "script",
  "shell",
  "sln",
  "source",
  "sql",
  "svg",
  "toml",
  "typescript official",
  "vscode",
  "vue",
  "webpack",
  "xml",
  "yarn"
]

module.exports =  function() {
  const iconFolder = './icons/';

  let icons = fs.readdirSync(iconFolder)
                .filter(el => !el.includes("folder") && !el.includes(".png"))
                .map((el) => {
    let path = `${iconFolder}${el}`;
    let name = el.replace(".svg","")
                 .replace("default_","")
                 .replace("file_type_","")
                 .replace(/_/g, " ");
    let isFavorite = faves.includes(name);
    let className = isFavorite ? "favorite" : "";

    return { path, name, className } ;
  });

  return icons;
};