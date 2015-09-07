Astro.createValidator({
  name: 'number',
  validate: function(value) {
  	return !_.isNaN(value) && _.isNumber(value);
  },
  events: {
    validationerror: function(e) {
      var fieldName = e.data.field;

      e.data.message = 'The "' + fieldName +
        '" field\'s value has to be a number';
    }
  }
});
