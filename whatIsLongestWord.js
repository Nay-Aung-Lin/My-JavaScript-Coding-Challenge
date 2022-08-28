let data = [
  "HTML",
  "CSS",
  "BOOTSTRAP",
  "JAVASCRIPT",
  "PYTHON",
  "RUBY",
  "PHP",
  "JAVA",
  "C/C++",
  "TAILWIND"
];

let longestString = "";

data.forEach((value) => {
  if (value.length > longestString.length) longestString = value;
  return longestString;
});
