// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no questions available create sample data
  if (Choices.find().count() === 0) {

    // create sample questions
    var sampleChoices = [
      {
        choices: [
          { text: 'Why are you a better choice than your opponent to create the kinds of jobs that will put more money into the pockets of American works?', votes: 0 },
          { text: 'In the last couple of weeks, you acknowledged what most Americans have accepted for years: The president was born in the United States. Can you tell us what took you so long?', votes: 0 },
          { text: 'Our institutions are under cyber attack, and our secrets are being stolen. So my question is, who\'s behind it? And how do we fight it?', votes: 0 },
          { text: 'Tell us specifically how you would prevent homegrown attacks by American citizens?', votes: 0 },
        ]
      },
      {
        choices: [
          { text: 'Possible question #1', votes: 0 },
          { text: 'Possible question #2', votes: 0 },
          { text: 'Possible question #3', votes: 0 },
          { text: 'Possible question #4', votes: 0 },
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleChoices, function(choice) {
      Choices.insert(question);
    });

  }

});