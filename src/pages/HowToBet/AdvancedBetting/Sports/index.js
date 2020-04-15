import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { ScrollTopButton } from '../../../../components';

export default () => {
  return (
    <Fragment>
      <Card className="subnav-card p-5">
        <h2>
          Viewing Sports Betting
          <br />
          as a Market
        </h2>
        <p>Imagine, if you will, a farmers market.</p>
        <p>
          On one side of the table, you've got a tomato seller, right next to an apple
          seller, right next to a mushroom seller, and so on. On the other side, you've
          got the public purchasing these freshly-grown yummies. The farmers grow the
          food, then sell it to the public, then the public eats it.
        </p>
        <p>
          Now imagine, if you will, a sports betting market. It has little in common with
          a farmers market, and not just because the betting market lacks organic food.
        </p>
        <p>
          For that matter, a betting market has little in common with any market -- okay,
          it's kinda similar to the stock market -- because when it comes to betting
          markets, the buyer is the seller, and the seller is the buyer.
        </p>
        <h4>Wait, what?</h4>
        <p>Let's use the oldest NFL rivalry to illustrate.</p>
        <p>
          Say the Green Bay Packers are hosting the Chicago Bears, and the odds are -150
          on the Pack and +120 on the Bears. Over at your favorite online betting site or
          brick-and-mortar sportsbook, each bet placed on the Pack is a bet against the
          Bears, and each bet placed on the Bears is a bet against the Pack.
        </p>
        <p>
          When it comes to placing the bet, the bettors are giving the sportsbook their
          money, but they're not betting against the sportsbook -- they're betting against
          each other, thus they're buying a bet on their team, and selling a bet against
          the other.
        </p>
        <h4>But what about the sportsbook?</h4>
        <p>The sportsbook facilitates.</p>
        <p>
          The bookmaker acts as an intermediary, taking the action for himself and
          reselling it to the other side at a better price. They provide the liquidity --
          i.e., the amount of money that can be bet on the market -- the pricing, and,
          most importantly, a guarantee that all the winners get their winnings.
        </p>
        <p>
          In order to keep their business afloat, the bookmaker tries to make the odds
          such that Packers and Bears bettors drop juice to place their bet, playing both
          sides for a guaranteed profit.
        </p>
        <p>
          The sportsbook, it should be noted, only makes money if their bookmaker's odds
          are on point. Bad odds lead to sportsbooks selling their product at a
          lower-than-necessary price, thus messing with their bottom line.
        </p>
        <p>
          This isn't particularly good for the betting market, who looks for reliability
          in their bookmakers. A consumer won't go back to the apple stand if they find
          worms in the apple core, and a bettor won't go back to a sportsbook if their
          odds are, um, wormy.
        </p>
        <h4>Discover this</h4>
        <p>Right about now, it's time to talk price discovery.</p>
        <p>
          Not all money in a betting market is considered equal. Sharp money, for
          instance, is notably good money.
        </p>
        <p>
          Oddsmakers will look to see how sharp bettors -- those professional bettors who
          know as much, or more than anybody -- are placing their wagers, then they'll
          adjust their odds accordingly.
        </p>
        <p>
          Leading up to the event in question, a bookmaker's initial odds will be refined
          utilizing a variety of external factors (sharp money, player injuries, and
          inclement weather, to name a few). As it gets closer to game time, the final
          odds will be revealed to the betting market.
        </p>
        <p>
          The more money bet on the event, the more liquid the market, thus the more
          accurate that price will be in relation to a game's true probability, so don't
          be afraid to jump into a crowded betting market.
        </p>
        <p>But don't jump into a crowded farmers market. That could get messy.</p>
      </Card>
      <p className="go-to-next text-right pr-4 pt-4">
        <Link to="/how-to-bet/advanced-betting/implied">next: Implied Probability</Link>
      </p>

      <p className="text-right">
        <ScrollTopButton />
      </p>
    </Fragment>
  );
};
