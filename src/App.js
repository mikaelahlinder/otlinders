import React from 'react'
import Image from './Image'
import Icon from './Icon'
import intro from './img/intro.jpg'
import landscape from './img/landscape.png'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <section
          style={{
            background: `url(${intro}) no-repeat bottom center`,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 'calc(110vh - 40px)'
          }}
        >
          <div style={{ marginTop: '-25vh' }}>
            <h1 style={{ color: '#fff' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '-0.8em',
                  fontSize: '0.5em'
                }}
              >
                The
              </span>Otlinders
            </h1>
            <Image src="date.png" style={{ maxHeight: '20vh' }} />
          </div>
        </section>

        <section>
          <h2>Sarah and Micke</h2>
          <Image src="ms.jpg" style={{ height: '30vh' }} />
          <p>
            We can’t wait to celebrate our marriage with you!<br />
            Guaranteed yummy food, booze and bad dance moves :)<br />
            <br />
            xx<br />
            the kiwi & the korv
          </p>
          <Image src="kiwiandkorv.png" style={{ height: '4em' }} />
        </section>

        <section
          className="the-day"
          style={{
            background: `url(${landscape}) no-repeat top center`,
            backgroundSize: 'contain'
          }}
        >
          <h2>The day</h2>
          <div>
            <h3>Kauri Bay Boomrock</h3>
            <p>
              This is a beautiful venue perched on a hillside half an hour south
              of Auckland.
            </p>
          </div>

          <div>
            <h3>Dresscode</h3>
            <p>A bit dressy</p>
          </div>

          <div>
            <h3>Flowers</h3>
            <p>
              Please bring one or a few flowers to the ceremony. Choose
              something meaningful or simply what you like the look of. These
              will be brought together into a bouquet next to which we will have
              the ceremony.
            </p>
          </div>

          <div>
            <h3>Gifts</h3>
            <p>
              We are blessed with not needing much and Sarah collects too much
              stuff as it is! But we have two minimal gift registries at{' '}
              <a
                target="_blank"
                href="http://www.cervera.se"
                rel="noopener noreferrer"
              >
                Cervera
              </a>{' '}
              and{' '}
              <a
                target="_blank"
                href="http://www.royaldesign.se"
                rel="noopener noreferrer"
              >
                Royal Design
              </a>{' '}
              for items we need. Otherwise please give the gift of your presence
              and write us a nice card.
            </p>
          </div>

          <div>
            <h3>Transport</h3>
            <p>
              Buses will depart central Auckland at 2:00 pm and<br />
              stop at Green Lane to pick up more peeps.
              <br />
            </p>
          </div>

          <div>
            <Image src="flower2.png" style={{ height: '8em' }} />
            <h3>Photos</h3>
            <Image src="flower1.png" style={{ height: '8em' }} />
            <p>
              Our ceremony will be unplugged, only designated photographers will
              have devices in hand :) Throughout the rest of the day, use{' '}
              <a
                target="_blank"
                href="https://www.instagram.com/explore/tags/theotlinders/"
                rel="noopener noreferrer"
              >
                #theotlinders
              </a>{' '}
              as much as you wish!
            </p>
          </div>

          <div>
            <h3>Kids</h3>
            <Image src="deer.png" style={{ height: '30vh' }} />
            <p>
              We love your children! But for this event, we have chosen to limit
              the number of little people to the bridal party and those
              travelling from abroad.
            </p>
          </div>
        </section>
        <section>
          <h2>RSVP</h2>
          <Image
            src="korv.png"
            style={{
              transform: 'rotate(-25deg)',
              marginTop: '2vh',
              height: '5vw'
            }}
          />
          <p>
            By October 25th 2018<br />
            Please email{' '}
            <a href="mailto:rsvp@otlinders.com">rsvp@otlinders.com</a> with your
            rsvp and<br /> include any food requests and if you have special
            transport needs.
          </p>
        </section>

        <section>
          <h2>
            Bra att veta om<br /> Nya Zeeland
          </h2>
          <Image
            src="kiwihill.png"
            style={{
              height: '50vh',
              marginBottom: '-10vh'
            }}
          />
          <p>
            <strong>THE SUN</strong>
            <br />
            Is intense. Wear sunblock!
            <br />
            <br />
            <strong>THE SEA</strong>
            <br />
            Can be dangerous. Swim between the flags!
            <br />
            <br />
            <strong>THE DRIVING</strong>
            <br /> Is on the other side of the road. Keep left!
            <br />
            <br />
            <strong>THE JETLAG</strong>
            <br /> Can mess you around a bit.<br /> Stay up as long as possible
            on the first day and you’ll be right after a few sleeps!
            <br />
            <br />
            <strong>THE FOOD</strong>
            <br /> Oh there is so much to savour...
            <br /> Flat white coffees and fish n chips...
            <br />The fresh fruit, the fresh seafood...
            <br /> The coconut yoghurt section in the supermarket offers more
            than your average fil aisle.
            <br />The affordable and readily available Asian food in central
            Auckland.
            <br />And don’t forget to pair some kiwi wines with your meal.
            <br />
            <br />Note there is no ready mixed baby formula here,<br /> it’s all
            powdered so pack some Semper if you want to have an emergency
            supply.
            <br />
            <br />Smaklig måltid!
          </p>
        </section>

        <section>
          <h2>Good to know about Sweden</h2>
          <Image src="moose.png" style={{ height: '30vh' }} />
          <p>
            <strong>POPULATION</strong>
            <br />
            10 million
            <br />
            <br />
            <strong>MIDNIGHT SUN</strong>
            <br />
            56 days
            <br />
            <br />
            <strong>MOOSE IN THE WILD</strong>
            <br />
            400 000
            <br />
            <br />
            <strong>LAKES</strong>
            <br />
            95 700
            <br />
            <br />
            <strong>RECORD TEMPERATURE</strong>
            <br />
            38°C<br /> -53°C
            <br />
            <br />
            <strong>IKEA MEATBALLS EATEN EVERY DAY</strong>
            <br />
            2 million
            <br />
            <br />
            ABBA, Volvo, Ikea, Spotify, Zlatan Ibrahimovich, Socialism:{' '}
            <strong>YES</strong>
            <br />
            Cheese with holes, chocolate, watch industry, really wealthy:{' '}
            <strong>NO, that's Switzerland!</strong>
          </p>
        </section>

        {/* <Image src="birds.png" style={{ width: '100%' }} /> */}

        {/* <Icon icon="heart" />
        <Icon icon="hand-holding-heart" />
        <Icon icon="glass-martini" />
        <Icon icon="beer" />
        <Icon icon="wine-glass" />
        <Icon icon="plane" />
                 <Icon icon="female" />
            <Icon icon="male" />
        <Icon icon="paper-plane" />
            <Icon icon="gift" />
        
        <Icon icon="pagelines" />
        <Icon icon="bell" />
        <Icon icon="angellist" />
        <Icon icon="bed" />
        <Icon icon="female" />
        <Icon icon="male" />
        <Icon icon="image" />
        <Icon icon="exclamation" />
            <Icon icon="bus" />
        
        <Icon icon="paper-plane" />

        <Icon icon="tree" />
        <Icon icon="umbrella" />
        <Icon icon="utensils" />
        <Icon icon="hashtag" />
        <Icon icon="smile" prefix="far" /> */}
      </div>
    )
  }
}
