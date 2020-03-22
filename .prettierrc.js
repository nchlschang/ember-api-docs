module.exports = {
  printWidth: 100,
  singleQuote: true,
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false
      }
    }
  ]
};
