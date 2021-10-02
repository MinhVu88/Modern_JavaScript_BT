export const es2015 = {
  name: 'Adam Jones',
  age: 54,
  email: 'jones@tool.com'
};

export function greet() {
  return `Hello ${es2015.name}`;
};

// default export: 
// the import statement in the file that imports this module doesn't need {}
const song = 'Stinkfist';
export default song;