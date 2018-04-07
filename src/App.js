import React from 'react'
import into from './img/intro.jpg'
import kiwi from './img/kiwi.png'
import sausage from './img/sausage.png'
import flower1 from './img/flower1.png'
import flower2 from './img/flower2.png'
import ms from './img/ms.jpg'
import birds from './img/birds.png'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <section
          style={{
            background: `url(${into}) no-repeat bottom center`,
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
            <h4 style={{ letterSpacing: '1em' }}>JANUARY 9 2019</h4>
          </div>
        </section>

        <section>
          <h2 style={{ color: '#90b9ee' }}>Micke and Sarah</h2>
          <img
            src={sausage}
            style={{
              height: '30px',
              transform: 'rotate(45deg)'
            }}
          />
          <img src={kiwi} style={{ height: '80px' }} />

          <p>
            Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
            shankle short loin jerky kielbasa turducken pork loin. Ball tip rump
            swine filet mignon shoulder alcatra. Shank frankfurter spare ribs,
            bacon ribeye biltong alcatra pork chop short ribs ham hock. Corned
            beef shank strip steak swine boudin shankle chuck doner bacon ground
            round ribeye ham capicola tail spare ribs.
          </p>
          <img src={ms} style={{ maxHeight: '100%' }} />
        </section>

        <section style={{}} className="the-day">
          <h2>The day</h2>

          {/* <img src={birds} className="birds" /> */}
          <div>
            <h3>Transport</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin. Ball tip
              rump swine filet mignon shoulder alcatra. Shank frankfurter spare
              ribs, bacon ribeye biltong alcatra pork chop short ribs ham hock.
              Corned beef shank strip steak swine boudin shankle chuck doner
              bacon ground round ribeye ham capicola tail spare ribs.
            </p>
          </div>

          <div>
            <h3>Kauri Bay Boomrock</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin. Ball tip
              rump swine filet mignon shoulder alcatra. Shank frankfurter spare
              ribs, bacon ribeye biltong alcatra pork chop short ribs ham hock.
              Corned beef shank strip steak swine boudin shankle chuck doner
              bacon ground round ribeye ham capicola tail spare ribs.
            </p>
          </div>

          <div>
            <h3>Dresscode</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin. Ball tip
              rump swine filet mignon shoulder alcatra. Shank frankfurter spare
              ribs, bacon ribeye biltong alcatra pork chop short ribs ham hock.
              Corned beef shank strip steak swine boudin shankle chuck doner
              bacon ground round ribeye ham capicola tail spare ribs.
            </p>
          </div>

          <div>
            <h3>Gifts</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin.
            </p>
          </div>

          <div>
            <h3>Speeches</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin.
            </p>
          </div>

          <div>
            <h3>Photos</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin.
            </p>
          </div>

          <div>
            <h3>Flowers</h3>
            <img src={flower1} style={{ height: '2em' }} />
            <img src={flower2} style={{ height: '2em' }} />
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin.
            </p>
          </div>

          <div>
            <h3>Kids</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin.
            </p>
          </div>

          <div>
            <h3>Bridal party</h3>
            <p>
              Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
              shankle short loin jerky kielbasa turducken pork loin.
            </p>
          </div>
        </section>
        <section>
          <h2>RSVP</h2>
          <p>
            Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
            shankle short loin jerky kielbasa turducken pork loin. Ball tip rump
            swine filet mignon shoulder alcatra. Shank frankfurter spare ribs,
            bacon ribeye biltong alcatra pork chop short ribs ham hock. Corned
            beef shank strip steak swine boudin shankle chuck doner bacon ground
            round ribeye ham capicola tail spare ribs.
          </p>
        </section>

        <section>
          <h2>Bra att veta om New Zeeland</h2>
          <p>
            Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
            shankle short loin jerky kielbasa turducken pork loin. Ball tip rump
            swine filet mignon shoulder alcatra. Shank frankfurter spare ribs,
            bacon ribeye biltong alcatra pork chop short ribs ham hock. Corned
            beef shank strip steak swine boudin shankle chuck doner bacon ground
            round ribeye ham capicola tail spare ribs.
          </p>
        </section>

        <section>
          <h2>Good to know about Sweden</h2>
          <p>
            Bacon ipsum dolor amet buffalo bresaola t-bone, pancetta bacon
            shankle short loin jerky kielbasa turducken pork loin. Ball tip rump
            swine filet mignon shoulder alcatra. Shank frankfurter spare ribs,
            bacon ribeye biltong alcatra pork chop short ribs ham hock. Corned
            beef shank strip steak swine boudin shankle chuck doner bacon ground
            round ribeye ham capicola tail spare ribs.
          </p>
        </section>
      </div>
    )
  }
}
