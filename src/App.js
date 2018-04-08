import React from 'react'
import Image from './Image'
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
          <h2>Micke and Sarah</h2>
          <Image src="kiwiandkorv.png" style={{ height: '4em' }} />
          <p>
            We can’t wait to celebrate our marriage with you!<br />
            Guaranteed yummy food, booze and bad dance moves :)<br />
            <br />
            xx<br />
            the kiwi & the korv
          </p>
          <Image src="ms.jpg" style={{ height: '30vh' }} />
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
              A beautiful venue overlooking the Hauraki Gulf perched on a
              hillside half an hour south of Auckland.
            </p>
          </div>

          <div>
            <h3>Dresscode</h3>
            <p>A bit dressy.</p>
          </div>

          <div>
            <h3>Flowers</h3>
            <Image src="flower1.png" style={{ height: '4em' }} />
            <p>
              Please bring one or a few flowers to the ceremony. Choose
              something meaningful or simply what you like the look of. You are
              helping us create our ceremony centrepiece.
            </p>
          </div>

          <div>
            <h3>Key times</h3>
            <p>
              The ceremony starts at 3.30pm!<br /> The dancing finishes at
              midnight.
            </p>
          </div>

          <div>
            <h3>Gifts</h3>
            <p>
              We are blessed with not needing much and Sarah collects too much
              stuff as it is! But we will have a minimal registrty set up later
              in the year for items we need. Otherwise please give the gift of
              your presence and write us a nice card.
            </p>
          </div>

          <div>
            <h3>Transport</h3>
            <p>
              Buses will depart Auckland CBD at 2:00 pm and<br />
              make one stop at Green Lane.
              <br />
            </p>
          </div>

          <div>
            <h3>Photos</h3>
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
              the number of little people to just the bridal party and those
              travelling from abroad.
            </p>
          </div>
        </section>

        <section>
          <h2>RSVP</h2>
          <Image
            src="dotsred.png"
            style={{
              height: '20vh',
              marginBottom: '-5vh'
            }}
          />
          <p>
            By November 1st<br />
            Please email{' '}
            <a href="mailto:rsvp@otlinders.com">rsvp@otlinders.com</a> with your
            rsvp and<br /> include any food requests and if you have special
            transport needs.
          </p>
        </section>

        <section>
          <h2>The day after</h2>
          <Image
            src="egg.png"
            style={{
              marginBottom: '-2em',
              height: '20vh'
            }}
          />
          <p>
            <a
              href="https://www.google.com/maps/place/44+Mission+Bay+Pavilion/@-36.8473136,174.7946299,13z/data=!4m5!3m4!1s0x6d0d49dbe101286b:0xe8ae375eeb3c5e6!8m2!3d-36.8473136!4d174.8296488"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mission Bay Pavillion
            </a>{' '}
            <br /> drop in between 12:00pm & 4:00pm and enjoy brunch by the
            beach.<br /> We've reserved some tables.<br /> Bring your wallet and
            togs/badbyxor to this one :)
          </p>
        </section>

        <section>
          <h2>
            Bra att veta om<br /> Nya Zeeland
          </h2>
          <Image src="kiwi2.png" style={{ height: '20vh' }} />
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
            <strong>
              IKEA MEATBALLS EATEN EVERY DAY<br /> AROUND THE WORLD
            </strong>
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

        <section>
          <Image src="birds.png" style={{ width: '80%' }} />
          <h4 style={{ marginTop: '50px' }}>
            Please check here for final details in December
          </h4>
          <h2>See you there </h2>
        </section>
      </div>
    )
  }
}
