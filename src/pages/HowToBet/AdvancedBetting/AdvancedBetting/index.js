import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import { IconCard, SignupCard } from '../../../../components';
import foxIcon from '../../../../assets/icons/foxbet.svg';
import pointsBetIcon from '../../../../assets/icons/pointsbet.svg';
import imageIcon1 from '../../../../assets/icons/image_icon_1.png';
import imageIcon2 from '../../../../assets/icons/image_icon_2.png';
import youtubeIcon from '../../../../assets/icons/youtube.svg';
import glyphIcon from '../../../../assets/icons/logo_with_star.png';

export default () => {
  return (
    <Fragment>
      <h2>Advanced Betting Concepts</h2>
      <p>
        Aliquet phasellus scelerisque mi turpis amet elit, pharetra sit ut magna augue
        diam natoque sit placerat non semper nascetur in mattis habitant faucibus feugiat
        ultrices dignissim lectus at felis neque, risus, sed gravida quam facilisi congue
        semper ornare faucibus platea mauris volutpat sed accumsan ullamcorper mollis
        gravida tincidunt quam quam donec nec scelerisque lectus sed consectetur
        sollicitudin vel sit vulputate elementum ac felis, vivamus nec accumsan sagittis,
        lectus tempus sed feugiat cursus lectus est quis suspendisse est duis facilisi a
        ut vitae egestas morbi nunc elementum aliquam eget feugiat ut aliquam vitae semper
        sit nunc pharetra ac nunc nulla.
      </p>
      <SignupCard />
      <h4>Want to learn how to bet?</h4>
      <p>
        abe’s fun and fast sports betting tutorial course helps users learn all they need
        to know to place their first bet. Check out our How to Bet module above to brush
        up on the basic and get ready to make your first wager.
      </p>
      <h4>Why do people bet on sports?</h4>
      <p>
        Betting makes watching sports more exciting, gives you something new to debate
        with friends and lets you prove your sports-brain superiority to the world.
      </p>
      <p>
        In a{' '}
        <span className="text-primary font-weight-semibold">
          2019 interview on NPR's Fresh Air
        </span>
        , actor/comedian Adam Sandler described the sheer excitement of sports betting to
        host Terry Gross.
      </p>
      <p>
        "When you bet on a game, [and] I do bet sometimes," Sandler said, "you watch so
        close when you have money on a game, and it means something to you. [But] it's not
        only the money. You made this decision in your head. You told everyone on the
        planet, this is going to happen."
      </p>
      <p>
        Sandler continued, "So you're watching the game with a different energy. And
        honest to God, when you make a bet on something and the game starts at 7:05, your
        body is shaking at two in the afternoon going, it's coming. It's coming. When you
        get to that actual game, there is so much excitement, you can't contain it."
      </p>
      <p>Sounds awesome, right?</p>
      <p>Well, it is.</p>
      <p>
        As we get ready to dive into the world of wagering, it's critical to understand
        the three basic types of bets you'll encounter in the sports betting world:
        moneyline, point spread (often just referred to as a "spread" or "spread betting")
        and total (sometimes called the over/under).
      </p>
      <p>
        Once you master the three main bet types, you'll be one step closer to becoming a
        sports betting samurai, armed with the knowledge you need to take on the
        competition.
      </p>
      <Row className="my-5">
        <Col>
          <IconCard
            iconImage={foxIcon}
            text="$500 Risk-Free Bet + $500 Deposit Bonus"
            buttonIcon="plus"
            circleIcon
          />
        </Col>
        <Col>
          <IconCard
            iconImage={pointsBetIcon}
            text="Up to $250 Deposit Bonus"
            buttonIcon="plus"
            circleIcon
          />
        </Col>
      </Row>
      <h4>What is a moneyline?</h4>
      <p>
        When you make a moneyline bet (some spell it "money line"), you're making an
        outright call on which team will win in a head-to-head contest (except in the rare
        case of European Football, in which you can also bet on a tie). Betting
        terminology can be confusing, so it may be helpful to remember that in a moneyline
        bet, you're putting your money on the line in anticipation of your chosen team
        winning the game.
      </p>
      <p>
        While determining the outcome of a moneyline bet is extremely straightforward -
        you win the bet if your chosen team wins - moneyline odds, or payouts, require
        some further explanation. Check out our detailed explanation of moneyline bets{' '}
        <span className="text-primary font-weight-semibold">here</span> to learn more.
      </p>
      <h4>How do I read a point spread?</h4>
      <p>
        A great equalizer, point spreads add even more intrigue to the betting
        proceedings, often turning a lopsided game into a thrill ride. If you're familiar
        with golf handicaps, this is a similar concept. The spread aims to level out the
        playing field by adding or subtracting points from a team's actual score in order
        to determine their score for betting purposes. When you look at a spread bet,
        you’ll see a plus or minus with a number next to it - the spread - alongside the
        “price” of the bet - typically 100 to 110. Simply take the actual score in the
        game and add or subtract the spread (depending on whether the number is positive
        or negative) in order to arrive at the game’s score for betting purposes.
        Whichever team has the highest spread-adjusted score wins the game for the
        purposes of the bet.{' '}
        <span className="text-primary font-weight-semibold">Click here</span> to learn
        more about spread bets.
      </p>
      <h4>What is an over/under bet?</h4>
      <p>
        An over/under bet is a wager on the total amounts scored by both teams combined.
        If the over/under on an NBA game is 200, for example, and you bet the over, you
        win if the score of both teams added together is greater than 200. If you bet the
        under, you win if the combined scores sum to less than 200.
      </p>
      <Row className="my-5">
        <Col>
          <IconCard
            iconImage={imageIcon1}
            text="$500 Risk-Free Bet + $500 Deposit Bonus"
            buttonIcon="chevron-right"
            tag="insights"
          />
        </Col>
        <Col>
          <IconCard
            iconImage={glyphIcon}
            text="abe’s sportsbooks reviews"
            buttonIcon="chevron-right"
            tag="reviews"
          />
        </Col>
      </Row>
      <h4>What is a total bet?</h4>
      <p>
        A total is another term for an over/under bet since you’re betting on the total
        score of the game.
      </p>
      <h4>What is a parlay?</h4>
      <p>
        A parlay is a single wager with multiple bets, all of which must be fulfilled to
        win. For instance, your parlay from a Houston Rockets/San Antonio Spurs game might
        include the Spurs winning the tipoff, then the Rockets leading at halftime, then
        James Harden scoring more than 25 points. While parlays typically have large
        payouts, they're also inherently lower probability bets given the math behind{' '}
        <span className="text-primary font-weight-semibold">conditional probability</span>
        .
      </p>
      <h4>How do I learn about advanced betting strategies?</h4>
      <p>
        In addition to the how to bet tutorials above, you can also delve into more
        complex betting concepts like{' '}
        <span className="text-primary font-weight-semibold">implied probability</span>,
        synthetic yield and viewing sports betting as market.
      </p>
      <h4>How can I suggest a sports betting topic for abe to cover?</h4>
      <p>
        Shoot an e-mail to{' '}
        <a
          href="mailto:crew@abebets.com"
          target="_top"
          className="text-primary font-weight-semibold"
        >
          crew@abebets.com
        </a>{' '}
        with any questions, suggestions or concerns, and we’ll make sure to address them.
      </p>
      <Row className="my-5">
        <Col>
          <IconCard
            iconImage={imageIcon2}
            text="The shoe fits"
            buttonIcon="chevron-right"
            tag="insights"
          />
        </Col>
        <Col>
          <IconCard
            iconImage={youtubeIcon}
            text="Using Implied Probability to Make Your Bets"
            buttonIcon="chevron-right"
            tag="youtube"
          />
        </Col>
      </Row>
    </Fragment>
  );
};
