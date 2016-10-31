// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no questions available create sample data
  if (Quotes.find().count() === 0) {

    // create sample questions
    var sampleQuotes = [
      /* 
       * QUESTION:
       * Why are you a better choice than your opponent to create the kinds of jobs that will put more money into the pockets of American works?
       */
      {
        /* CLINTON */quote: "I want us to invest in you. I want us to invest in your future. That means jobs in infrastructure, in advanced manufacturing, innovation and technology, clean, renewable energy, and small business, because most of the new jobs will come from small business. We also have to make the economy fairer. That starts with raising the national minimum wage and also guarantee, finally, equal pay for women\'s work."
      },
      {
        /* CLINTON */quote: "I also want to see more companies do profit-sharing. If you help create the profits, you should be able to share in them, not just the executives at the top."
      },
      {
        /* TRUMP */quote: "Our jobs are fleeing the country. They\'re going to Mexico. They\'re going to many other countries. You look at what China is doing to our country in terms of making our product. They\'re devaluing their currency, and there\'s nobody in our government to fight them. And we have a very good fight. And we have a winning fight. Because they\'re using our country as a piggy bank to rebuild China, and many other countries are doing the same thing."
      },
      {
        /* TRUMP */quote: "But we have to stop our jobs from being stolen from us. We have to stop our companies from leaving the United States and, with it, firing all of their people. All you have to do is take a look at Carrier air conditioning in Indianapolis. They left -- fired 1,400 people. They\'re going to Mexico. So many hundreds and hundreds of companies are doing this."
      },
      /* 
       * QUESTION:
       * In the last couple of weeks, you acknowledged what most Americans have accepted for years: The president was born in the United States. Can you tell us what took you so long?
       */
      {
        /* CLINTON */quote: "...There was absolutely no evidence for it, but he persisted, he persisted year after year, because some of his supporters, people that he was trying to bring into his fold, apparently believed it or wanted to believe it."
      },
      {
        /* CLINTON */quote: "And the birther lie was a very hurtful one. You know, Barack Obama is a man of great dignity. And I could tell how much it bothered him and annoyed him that this was being touted and used against him."
      },
      {
        /* TRUMP */quote: "When I got involved, I didn't fail. I got him to give the birth certificate. So I'm satisfied with it. And I'll tell you why I'm satisfied with it."
      },
      {
        /* TRUMP */quote: "...Well, nobody was pressing it, nobody was caring much about it. I figured you'd ask the question tonight, of course. But nobody was caring much about it. But I was the one that got him to produce the birth certificate. And I think I did a good job."
      },
      /* 
       * QUESTION:
       * Our institutions are under cyber attack, and our secrets are being stolen. So my question is, who\'s behind it? And how do we fight it?
       */
      {
        /* CLINTON */quote: "Well, I think cyber security, cyber warfare will be one of the biggest challenges facing the next president, because clearly we're facing at this point two different kinds of adversaries. There are the independent hacking groups that do it mostly for commercial reasons to try to steal information that they can use to make money."
      },
      {
        /* CLINTON */quote: "We need to make it very clear -- whether it's Russia, China, Iran or anybody else -- the United States has much greater capacity. And we are not going to sit idly by and permit state actors to go after our information, our private-sector information or our public-sector information."
      },
      {
        /* TRUMP */quote: "I do want to say that I was just endorsed -- and more are coming next week -- it will be over 200 admirals, many of them here -- admirals and generals endorsed me to lead this country. That just happened, and many more are coming. And I'm very proud of it."
      },
      {
        /* TRUMP */quote: "...I mean, I'll take the admirals and I'll take the generals any day over the political hacks that I see that have led our country so brilliantly over the last 10 years with their knowledge. OK? Because look at the mess that we're in. Look at the mess that we're in."
      },
      /* 
       * QUESTION:
       * Tell us specifically how you would prevent homegrown attacks by American citizens?
       */
       {
         /* CLINTON */quote: "But the larger point -- and he says this constantly -- is George W. Bush made the agreement about when American troops would leave Iraq, not Barack Obama."
       },
       {
         /* CLINTON */quote: "And I think we've got to have an intelligence surge, where we are looking for every scrap of information."
       },
       {
         /* TRUMP */quote: "...Or, as I've been saying for a long time, and I think you'll agree, because I said it to you once, had we taken the oil -- and we should have taken the oil -- ISIS would not have been able to form either, because the oil was their primary source of income."
       },
       {
         /* TRUMP */quote: "...But they wouldn't have even been formed if they left some troops behind, like 10,000 or maybe something more than that. And then you wouldn't have had them."
       },
       /* 
        * QUESTION:
        * How are you going to bring back the industries that have left this country for cheaper labor overseas?
        */
        {
          /* CLINTON */quote: "Well, let's stop for a second and remember where we were eight years ago. We had the worst financial crisis, the Great Recession, the worst since the 1930s. That was in large part because of tax policies that slashed taxes on the wealthy, failed to invest in the middle class, took their eyes off of Wall Street, and created a perfect storm."
        },
        {
          /* CLINTON */quote: "...Now, we have come back from that abyss. And it has not been easy. So we're now on the precipice of having a potentially much better economy, but the last thing we need to do is to go back to the policies that failed us in the first place."
        },
        {
          /* TRUMP */quote: "Well, for one thing -- and before we start on that -- my father gave me a very small loan in 1975, and I built it into a company that's worth many, many billions of dollars, with some of the greatest assets in the world, and I say that only because that's the kind of thinking that our country needs."
        },
        {
          /* TRUMP */quote: "Our country's in deep trouble. We don't know what we're doing when it comes to devaluations and all of these countries all over the world, especially China."
        },
        /* 
         * QUESTION:
         * ...the reason nominees have released their returns for decades is so that voters will know if their potential president owes money to -- who he owes it to and any business conflicts. Don't Americans have a right to know if there are any conflicts of interest?
         */
         {
           /* CLINTON */quote: "...And the financial disclosure statements, they don't give you the tax rate. They don't give you all the details that tax returns would. And it just seems to me that this is something that the American people deserve to see."
         },
         {
           /* CLINTON */quote: "For 40 years, everyone running for president has released their tax returns. You can go and see nearly, I think, 39, 40 years of our tax returns, but everyone has done it."
         },
         {
           /* TRUMP */quote: " will release my tax returns -- against my lawyer's wishes -- when she releases her 33,000 e-mails that have been deleted. As soon as she releases them, I will release."
         },
         {
           /* TRUMP */quote: "But that's the kind of thinking that our country needs. When we have a country that's doing so badly, that's being ripped off by every single country in the world, it's the kind of thinking that our country needs,"
         }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleQuotes, function(quote) {
      Quotes.insert(quote);
    });
  }

  if (Choices.find().count() === 0) {

    // create sample questions
    var sampleChoices = [
      {
        choices: [
          { text: 'Why are you a better choice than your opponent to create the kinds of jobs that will put more money into the pockets of American works?', votes: 0 },
          { text: 'In the last couple of weeks, you acknowledged what most Americans have accepted for years: The president was born in the United States. Can you tell us what took you so long?', votes: 0 },
          { text: `Our institutions are under cyber attack, and our secrets are being stolen. So my question is, who's behind it? And how do we fight it?`, votes: 0 },
          { text: 'Tell us specifically how you would prevent homegrown attacks by American citizens?', votes: 0 },
          { text: 'How are you going to bring back the industries that have left this country for cheaper labor overseas?', votes: 0 },
          { text: "...the reason nominees have released their returns for decades is so that voters will know if their potential president owes money to -- who he owes it to and any business conflicts. Don't Americans have a right to know if there are any conflicts of interest?", votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleChoices, function(choice) {
      Choices.insert(choice);
    });

  }

});