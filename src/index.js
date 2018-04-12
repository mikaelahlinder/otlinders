import React from 'react'
import { render } from 'react-snapshot'
import intro from './img/intro.jpg'
import red from './img/red.png'
import pink from './img/pink.png'
import landscape from './img/landscape.png'
import './index.css'

const Image = ({ src, ...rest }) => (
  <img src={require(`./img/${src}`)} {...rest} alt="" />
)

const App = () => (
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
      <Image src="kiwiandkorv.png" style={{ height: '4em' }} />
      <p>
        We can’t wait to celebrate our marriage with you!<br />
        Guaranteed yummy food, booze and bad dance moves :)<br />
        <br />
        xx<br />
        the kiwi & the korv
      </p>
      <Image
        src="ms.jpg"
        style={{ transform: 'rotateY(-180deg)', height: '30vh' }}
      />
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
          A beautiful rural venue perched on a hillside. Half an hour south of
          Auckland.
        </p>
      </div>

      <div>
        <h3>Dresscode</h3>
        <p>
          A bit dressy
          <Image
            src="highheel.png"
            style={{ height: '2em', margin: '0 0 -5px 5px' }}
          />
        </p>
      </div>

      <div>
        <h3>Flowers</h3>
        <Image src="flower1.png" style={{ height: '4em' }} />
        <p>
          Please bring one or a few flowers to the ceremony. Choose something
          meaningful or simply what you like the look of. You are helping us to
          create our ceremony centrepiece.
        </p>
      </div>

      <div>
        <h3>Key Times</h3>
        <p>
          The ceremony starts at 3.30pm &<br /> the dancing finishes at
          midnight!
        </p>
      </div>

      <div>
        <h3>Gifts</h3>
        <p>
          We are blessed with not needing much and Sarah collects too much stuff
          as it is! But we will have a minimal registrty set up later in the
          year for items we need. Otherwise please give the gift of your
          presence and write us a nice card.
        </p>
      </div>

      <div
        style={{
          background: `url(${pink}) no-repeat center center`,
          backgroundSize: 'contain'
        }}
      >
        <h3>Transport</h3>
        <p>
          The car parking at Boomrock is limited to suppliers and staff. Please
          do not drive to the venue. Instead, please taxi or drive to one of the
          bus pick up points.
          <br /> <br />Two buses will leave 54 Hobson St, Auckland Central at
          2pm. They then stop at Greenlane (more specific location tbc).
          Returning busses to Greenlane and Hobson St will depart the venue at
          10pm and midnight. Due to it’s remote location, any taxis must be
          prebooked. <br /> <br />Please include any special travel requirements
          in your R.S.V.P and we can make the best plan together.
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
          We love your children! But for this event, we have chosen to limit the
          number of little people to just familiy and those travelling from
          abroad.
        </p>
      </div>
    </section>

    <section>
      <h2>
        R<span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>S
        <span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>V
        <span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>P
        <span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>
      </h2>

      <p>
        By November 1st to{' '}
        <a href="mailto:rsvp@otlinders.com">rsvp@otlinders.com</a>
        <br />Please including any food and transport needs.
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
        <br /> Drop in between 12:00pm & 4:00pm and enjoy brunch by the beach.<br />{' '}
        We've reserved some tables.<br /> Bring your wallet and togs/badbyxor to
        this one :)
      </p>
    </section>

    <section>
      <h2>
        Bra att veta om<br /> Nya Zeeland
      </h2>
      <Image src="kiwi2.png" style={{ height: '20vh' }} />
      <p>
        <strong>SHEEP</strong>
        <br />
        60 000 000
        <br />
        <br />
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
        <br /> Can mess you around a bit.<br /> Stay up as long as possible on
        the first day and you’ll be right after a few sleeps!
        <br />
        <br />
        <strong>THE FOOD</strong>
        <br /> Oh there is so much to savour...
        <br /> Flat white coffees and fish n chips...
        <br />The fresh fruit, the fresh seafood...
        <br /> The coconut yoghurt section in the supermarket offers more than
        your average fil aisle.
        <br />The affordable and readily available Asian food in central
        Auckland.
        <br />And don’t forget to pair some kiwi wines with your meal.
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
      <h4
        style={{
          marginTop: '50px',
          padding: '50px',
          background: `url(${red}) no-repeat center center`,
          backgroundSize: 'contain'
        }}
      >
        Please check here for final details in December
      </h4>
      <h2>See you there </h2>
      <Image
        src="heart.png"
        style={{
          marginTop: '100px',
          height: '20px'
        }}
      />
    </section>
  </div>
)

render(<App />, document.getElementById('root'))
