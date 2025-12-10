export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How it works</h2>

      <div className="how-it-works-grid">
        <div className="how-step">
          <div className="step-number">1</div>
          <h3 className="step-title">Share the moment</h3>
          <p className="step-desc">
            Tell us the occasion and who it's for
          </p>
        </div>

        <div className="how-step">
          <div className="step-number">2</div>
          <h3 className="step-title">We match flowers + words</h3>
          <p className="step-desc">
            We suggest bouquets and card messages that fit
          </p>
        </div>

        <div className="how-step">
          <div className="step-number">3</div>
          <h3 className="step-title">Local florists deliver</h3>
          <p className="step-desc">
            Real florists create and deliver with your message
          </p>
        </div>
      </div>
    </section>
  );
}
