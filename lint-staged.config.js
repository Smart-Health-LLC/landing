module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'tsc-files --noEmit --pretty',
  '*.json': ['prettier --write'],
};
