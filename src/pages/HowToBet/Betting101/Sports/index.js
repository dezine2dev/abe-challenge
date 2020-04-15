import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { ScrollTopButton } from '../../../../components';

export default () => {
  return (
    <Fragment>
      <Card className="subnav-card p-5">
        <h3>
          Sports Betting Basics:
          <br />
          Moneyline, Point Spread and Total
        </h3>
        <p>
          Congratulations on taking your first step towards becoming a sports betting
          expert!
        </p>
        <p>
          Lesson 1 will introduce you to the three main bet types you'll encounter along
          your sports betting journey: moneyline, spread and total (also referred to as
          the over/under). Before we start digging into jargon, let's take a moment to
          consider why you're here in the first place.
        </p>
        <h4>Why do people bet on sports?</h4>
        <p>
          Betting makes watching sports more exciting, gives you something new to debate
          with friends and lets you prove your sports-brain superiority to the world.
        </p>
        <p>
          In a{' '}
          <span className="text-primary font-weight-semibold">
            2019 interview on NPR's <i>Fresh Air</i>
          </span>
          , actor/comedian Adam Sandler described the sheer excitement of sports betting
          to host Terry Gross.
        </p>
        <p>
          "When you bet on a game, [and] I do bet sometimes," Sandler said, "you watch so
          close when you have money on a game, and it means something to you. [But] it's
          not only the money. You made this decision in your head. You told everyone on
          the planet, this is going to happen."
        </p>
        <p>
          Sandler continued, "So you're watching the game with a different energy. And
          honest to God, when you make a bet on something and the game starts at 7:05,
          your body is shaking at two in the afternoon going, it's coming. It's coming.
          When you get to that actual game, there is so much excitement, you can't contain
          it."
        </p>
        <p>Sounds awesome, right?</p>
        <p>Well, it is.</p>
        <p>
          As we get ready to dive into the world of wagering, it's critical to understand
          the three basic types of bets you'll encounter in the sports betting world:
          moneyline, point spread (often just referred to as a "spread" or "spread
          betting") and total (sometimes called the over/under).
        </p>
        <p>
          Once you master the three main bet types, you'll be one step closer to becoming
          a sports betting samurai, armed with the knowledge you need to take on the
          competition.
        </p>
        <h4>What is a moneyline bet?</h4>
        <p>
          When you make a moneyline bet (some spell it "money line"), you're making an
          outright wager on which team will win in a head-to-head matchup (except in the
          rare case of European Football, in which you can also bet on a tie). Betting
          terminology can be confusing, so it may be helpful to remember that in a
          moneyline bet, you're putting your money on the line in anticipation of your
          chosen team winning the game.
        </p>
        <p>
          While determining the outcome of a moneyline bet is extremely straightforward -
          you win the bet if your chosen team wins - moneyline odds, or payouts, require
          some further explanation.
        </p>
        <h5>How to read moneyline odds</h5>
        <p>
          The first thing you'll notice when looking at a moneyline bet is that one team
          will have a positive value next to its name (Chicago Bulls +120, for example),
          and the other team will have a negative value next to its name (such as Toronto
          Raptors -150). This type of notation is called "American odds," and while it can
          be counter-intuitive for newcomers, it's the standard way sportsbook express
          moneyline odds.
        </p>
        <p>
          The team with a positive value next to its name (Chicago) is the underdog. The
          +120 tells us that if you bet $100 on the Bulls, you'll win $120 if you choose
          correctly. Since your $100 bet pays off more than $100 if it hits, that means
          you're getting better than 1:1 odds, which indicates that bettors think Chicago
          has a {'<'}50% chance of winning. Therefore Chicago is the underdog.
        </p>
        <p>
          The team with a negative value next to its name (Toronto) is the favorite. The
          -150 tells us that you need to bet $150 on the Raptors to win $100 if you choose
          correctly. Since your $150 bet only pays off $100 if it hits, that means you're
          getting 2:3 odds, which indicates that bettors think the Raptors have a ~66%
          chance of winning. Therefore Toronto is the favorite.
        </p>
        <p>
          We know that{' '}
          <span className="text-primary font-weight-semibold">
            storytelling helps us remember
          </span>
          , so if you have trouble recalling which team is the favorite and which is the
          underdog, as many do, try this little trick: "I'm positive I left my keys under
          the dog. When it's negative degrees outside, I put on my favorite sweater.
        </p>
        <p>
          We'll delve deeper into moneyline odds and implied probability in the Advanced
          Betting module, which you can jump to{' '}
          <span className="text-primary font-weight-semibold">here</span> if you feel
          ready.
        </p>
        <h4>What is a spread bet?</h4>
        <p>
          A great equalizer, point spreads add even more intrigue to the betting
          proceedings, often turning a lopsided game into a thrill ride. If you're
          familiar with golf handicaps, this is a similar concept. The spread aims to
          level out the playing field by adding or subtracting points from a team's actual
          score in order to determine their score for betting purposes.
        </p>
        <p>
          To illustrate, let's take a trip over to Gillette Stadium in Foxboro, MA. Even a
          casual sports watcher knows that the New England Patriots are usually good at
          football, and the Detroit Lions, not so much. Past and current performance would
          dictate that if the Lions are visiting the Pats in Massachusetts, they'll likely
          get smacked around a whole bunch, so if payouts were even, you'd bet on New
          England.
        </p>
        <p>
          But when there's a point spread involved, you need to know just how much
          smacking the Patriots have in store for Detroit's finest.
        </p>
        <h5>How do I read a spread betting line?</h5>
        <p>
          If an oddsmaker believes New England is two touchdowns better than the Lions, it
          will be expressed as, "The Patriots are -14 favorites over the Lions" or "The
          Lions are +14 underdogs to the Patriots." The -14 tells us that we subtract that
          number from the Patriots final score in order to determine who won the game for
          betting purposes (or conversely, add 14 to the Lions' score).
        </p>
        <p>
          As a spread bettor, it's your job to decide whether the Lions will win or lose
          by more or less than 14 points. If you took the Pats and they grab a W with a
          final of 24-13, you lose the bet because the margin of victory was 11, which our
          calculator tells is a lower number than 14.
        </p>
        <p>
          But if the Patriots win 73-0 -- hey, anything's possible -- you win. Big time.
        </p>
        <h4>What is a total or over/under bet?</h4>
        <p>
          Also known as over/under, total bets are a simple concept: The oddsmaker sets a
          total for what they believe will be the combined final score of the contest, and
          you decide whether you think the teams in question will score more or less than
          that total.
        </p>
        <p>
          Let's go to the NBA, where the Denver Nuggets and the Houston Rockets have been
          known to score a point or two. The oddsmakers (and their algorithms) might
          examine the teams' respective stats from the past couple of weeks and decide,
          "Denver's gonna put up 115, and Houston will score 110, so the over/under on the
          game will be 225." It's then up to you whether you believe the two teams will
          play a high scoring game (in which case you take the over) or whether good
          defense will keep the scoring low (take the under).
        </p>
        <p>
          When it comes to moneyline vs. point spread betting vs. total bets, there's no
          right or wrong -- it's all about personal preference. But regardless of which
          direction you go, Adam Sandler will probably be right there with you.
        </p>
      </Card>
      <p className="mb-5 go-to-next text-right pr-4 pt-4">
        <Link to="/how-to-bet/betting-101/odds">next: betting odds</Link>
      </p>
      <p className="text-right">
        <ScrollTopButton />
      </p>
    </Fragment>
  );
};
