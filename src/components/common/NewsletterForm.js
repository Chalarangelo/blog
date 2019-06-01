import React from 'react'

const NewsletterForm = () => (
  <div className="container">
    <section className="newsletter-container">
      <form className="newsletter-form" action="https://tinyletter.com/chalarangelo" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/chalarangelo', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <h3>Join the Newsletter</h3>
        <input type="text" className="newsletter-input" name="email" id="tlemail" placeholder="Email address"/>
        <input type="hidden" value="1" name="embed" />
        <p>
          I won't spam you, unsubscribe at any time. <br />
          <input type="submit" value="Subscribe" className="newsletter-submit" /> <br />
          Powered by <a href="https://tinyletter.com" target="_blank" rel="noopener noreferrer">TinyLetter</a>
        </p>
      </form>
    </section>
  </div>
)

export default NewsletterForm
