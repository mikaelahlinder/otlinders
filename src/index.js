import React from 'react'
import { render } from 'react-snapshot'
import intro from './img/intro.jpg'
import red from './img/red.png'
import landscape from './img/landscape.png'
import floating from './img/floating.png'

const Image = ({ src, ...rest }) => (
  <img src={require(`./img/${src}`)} {...rest} alt="" />
)

const App = () => (
  <div>
    <section
      style={{
        background: `url(${intro}) no-repeat bottom center`,
        backgroundSize: 'cover',
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
          </span>
          Otlinders
        </h1>
        <Image src="date.png" style={{ maxHeight: '20vh' }} />
      </div>
    </section>

    <section>
      <h2>Sarah and Micke</h2>
      <Image src="kiwiandkorv.png" style={{ height: '4em' }} />
      <p>
        We can’t wait to celebrate our marriage with you!
        <br />
        Guaranteed yummy food, booze and bad dance moves :)
        <br />
        <br />
        xx
        <br />
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
          A beautiful{' '}
          <a
            href="https://www.kauribayboomrock.co.nz/"
            rel="noopener noreferrer"
            target="_blank"
          >
            venue
          </a>{' '}
          perched on a hillside. <br />
          Half an hour south of Auckland.
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
        <Image src="flowers.png" style={{ height: '4em' }} />
        <p>
          Please bring one or a few flowers to the ceremony. Choose something
          meaningful or simply what you like the look of. You are helping us to
          create our ceremony centrepiece.
        </p>
      </div>

      <div>
        <h3>Key Times</h3>
        <p>
          The ceremony starts at 2.30pm &<br /> the dancing finishes at
          midnight!
        </p>
      </div>

      <div
        style={{
          background: `url(${floating}) no-repeat top center`,
          backgroundSize: 'contain'
        }}
      >
        <h3>Transport</h3>
        <p>
          The car parking at Boomrock is limited to suppliers and staff. Please
          do not drive to the venue. Instead, please taxi or drive to one of the
          bus pick up points.
          <br /> <br />
          The buses will leave{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/54+Hobson+St,+Auckland,+1010,+Nya+Zeeland/@-36.846926,174.7449157,14z/data=!4m5!3m4!1s0x6d0d47f08705f039:0xd3689b7d298dc9b4!8m2!3d-36.8469303!4d174.7624252"
          >
            54 Hobson St
          </a>
          , opposite the Heritage Hotel at 1pm. Second stop will be at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Opp+205+Great+South+Rd/@-36.8899412,174.79386,19z/data=!4m13!1m7!3m6!1s0x6d0d48f37ac0a6b5:0xdf09f403cbd3ba3!2s127+Urban+Route+9,+Greenlane,+Auckland+1051,+Nya+Zeeland!3b1!8m2!3d-36.8894491!4d174.7960698!3m4!1s0x6d0d488cc9a3215f:0x87c1f56a9a6748fd!8m2!3d-36.8901451!4d174.7937901"
          >
            Greenlane{' '}
          </a>
          coach stop outside Countdown soon after. Returning buses to Greenlane
          and Hobson St will depart the venue at midnight. Due to it’s remote
          location, any taxis must be prebooked. <br /> <br />
          Please include any special travel requirements in your R.S.V.P and we
          can make the best plan together.
          <br />
        </p>
      </div>

      <div>
        <h3>Gifts</h3>
        <p>
          We are blessed with not needing much and Sarah collects too much stuff
          as it is!
          <br /> <br /> We are planning to build a new room in our townhouse;
          for you to stay and maybe eventually for a sibling to Lou. If you
          would like to contribute to our Fifth Room Family Fund, we would be so
          grateful!
        </p>
      </div>

      <div>
        <h3>Photos</h3>
        <Image
          src="eyes.png"
          style={{ height: '2em', margin: '0 0 -5px 5px' }}
        />
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
          number of little people to just immediate family and those travelling
          from abroad.
        </p>
      </div>

      <div>
        <h3>Speeches</h3>
        <p>
          We're gonna do this the Swedish way, meaning anyone who wants to talk
          can. Contact{' '}
          <a href="mailto:anna@otlinders.com" rel="noopener noreferrer">
            Anna Cottle
          </a>{' '}
          for more information.
        </p>
      </div>
    </section>

    <section>
      <h2>
        R
        <span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>
        S
        <span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>
        V
        <span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>
        P
        <span style={{ fontFamily: 'Futura', color: 'red', fontSize: '1em' }}>
          .
        </span>
      </h2>

      <p>
        By November 1st to{' '}
        <a href="mailto:rsvp@otlinders.com">rsvp@otlinders.com</a>
        <br />
        We need four pieces of information from you.
        <br />
        1. Are you coming?
        <br />
        2. Which bus pickup point suits you?
        <br />
        3. Do you have any special food requests?
        <br />
        4. Do you want to go home around 10pm or midnight?
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
          href="https://www.google.com/maps/place/ampersand+eatery/@-36.8630569,174.8075956,17z/data=!3m1!4b1!4m5!3m4!1s0x6d0d484a1b580747:0x10b300ff016fdaff!8m2!3d-36.8630569!4d174.8097843"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ampersand Eatery
        </a>{' '}
        <br /> Drop in between 12:00pm & 4:00pm and enjoy brunch.
        <br /> We've reserved some tables.
        <br /> Bring your wallet to this one :)
      </p>
    </section>

    <section>
      <h2>
        Bra att veta om
        <br /> Nya Zeeland
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
        <br /> Can mess you around a bit.
        <br /> Stay up as long as possible on the first day and you’ll be right
        after a few sleeps!
        <br />
        <br />
        <strong>THE FOOD</strong>
        <br /> Oh there is so much to savour...
        <br /> Flat white coffees and fish n chips...
        <br />
        The fresh fruit, the fresh seafood...
        <br /> The coconut yoghurt section in the supermarket offers more than
        your average fil aisle.
        <br />
        The affordable and readily available Asian food in central Auckland.
        <br />
        And don’t forget to pair some kiwi wines with your meal.
        <br />
        <br />
        Smaklig måltid!
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
          IKEA MEATBALLS EATEN EVERY DAY
          <br /> AROUND THE WORLD
        </strong>
        <br />2 million
        <br />
        <br />
        ABBA, Volvo, Ikea, H&M, Spotify, Skype, Zlatan Ibrahimovic, Socialism:{' '}
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
