const kebabToPascalCase = (str) => {
  const res = str
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
  return res;
};
console.log("kebabToPascalCase", kebabToPascalCase("hello-world"));
