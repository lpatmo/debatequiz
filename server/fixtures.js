// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no questions available create sample data
  if (Questions.find().count() === 0) {

    // create sample questions
    var sampleQuestions = [
      {
        question: 'What was the original question to this statement?',
        choices: [
          { text: 'Possible question #1', votes: 0 },
          { text: 'Possible question #2', votes: 0 },
          { text: 'Possible question #3', votes: 0 },
          { text: 'Possible question #4', votes: 0 },
        ]
      },
      {
        question: '[Insert quotation B]',
        choices: [
          { text: 'Possible question #1', votes: 0 },
          { text: 'Possible question #2', votes: 0 },
          { text: 'Possible question #3', votes: 0 },
          { text: 'Possible question #4', votes: 0 },
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleQuestions, function(question) {
      Questions.insert(question);
    });

  }

});