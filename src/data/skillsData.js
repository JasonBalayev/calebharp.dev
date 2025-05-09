// Languages
import pythonImage from "../images/languages/python.png";
import javascriptImage from "../images/languages/js.png";
import cImage from "../images/languages/c.png";
import cppImage from "../images/languages/cpp.png";
import kotlinImage from "../images/languages/kotlin.png";
import javaImage from "../images/languages/java.png";
import luaImage from "../images/languages/lua.png";
import typeScriptImage from "../images/languages/ts.png";
import asmImage from "../images/languages/asm.jpg";
import solImage from "../images/languages/sol.png";
import rustImage from "../images/languages/rust.png";
import latexImage from "../images/languages/latexx.png";
import sqlImage from "../images/languages/sql.png";

// Tools
import awsImage from "../images/tools/aws.png";
import powershellImage from "../images/tools/powershell.png";
import firebaseImage from "../images/tools/firebase.png";
import linuxImage from "../images/tools/linux.png";
import jbImage from "../images/tools/jb.png";
import netImage from "../images/tools/netlify.png";
import junitImage from "../images/tools/junit.png";
import vscodeImage from "../images/tools/vscode.png";
import androidImage from "../images/tools/android.png";
import dockerImage from "../images/tools/docker.png";
import jupyterImage from "../images/tools/jupnb.png";
import colabImage from "../images/tools/colab.png";
import kaggleImage from "../images/tools/kaggle.png";
import robloxImage from "../images/tools/studio.png";

// Frameworks
import angularImage from "../images/frameworks/angular.png";
import gatsbyImage from "../images/frameworks/gatsby.png";
import convexImage from "../images/frameworks/convex.png";
import djangoImage from "../images/frameworks/dj.png";
import expressImage from "../images/frameworks/ex.png";
import flaskImage from "../images/frameworks/flask.png";
import nodejsImage from "../images/frameworks/nodejs.png";
import reactImage from "../images/frameworks/react.png";
import prismaImage from "../images/frameworks/prisma.png";
import nextJsImage from "../images/frameworks/nj.png";
import tailImage from "../images/frameworks/tail.png";

// Placeholder (Git for now)
const placeholders = {
  git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
};

// Default placeholder for missing images
const defaultPlaceholder = "https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-ptyrjxdo.png";

export const languagesData = [
  { name: "Python", image: pythonImage },
  { name: "Java", image: javaImage },
  { name: "Kotlin", image: kotlinImage },
  { name: "LaTeX", image: latexImage },
  { name: "C++", image: cppImage },
  { name: "C", image: cImage },
  { name: "JavaScript", image: javascriptImage },
  { name: "TypeScript", image: typeScriptImage },
  { name: "Assembly", image: asmImage },
  { name: "SQL", image: sqlImage },
  { name: "Lua", image: luaImage },
  { name: "Solidity", image: solImage },
  { name: "Rust", image: rustImage },
];

export const toolsData = [
  { name: "Git/GitHub", image: placeholders.git || defaultPlaceholder },
  { name: "PowerShell", image: powershellImage },
  { name: "Linux", image: linuxImage },
  { name: "Firebase", image: firebaseImage },
  { name: "AWS", image: awsImage },
  { name: "JetBrain IDEs", image: jbImage },
  { name: "Netlify", image: netImage },
  { name: "JUnit Testing", image: junitImage },
  { name: "VS Code", image: vscodeImage },
  { name: "Android Studio", image: androidImage },
  { name: "Docker", image: dockerImage },
  { name: "Jupyter NB", image: jupyterImage },
  { name: "Google Colab", image: colabImage },
  { name: "Kaggle", image: kaggleImage },
  { name: "Roblox Studio", image: robloxImage },
];

export const frameworksData = [
  { name: "NodeJS", image: nodejsImage },
  { name: "NextJS", image: nextJsImage },
  { name: "ExpressJS", image: expressImage },
  { name: "ReactJS", image: reactImage },
  { name: "GatsbyJS", image: gatsbyImage },
  { name: "Convex", image: convexImage },
  { name: "Django", image: djangoImage },
  { name: "Flask", image: flaskImage },
  { name: "Tailwind CSS", image: tailImage },
  { name: "Angular", image: angularImage },
  { name: "Prisma", image: prismaImage }
];
