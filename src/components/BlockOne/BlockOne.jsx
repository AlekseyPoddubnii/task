import "./BlockOne.css";

function BlockOne() {
  return (
    <section className="blockOne">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="blockOne-item item--black">
              <p className="blockOne-item__title">1</p>
              <p className="blockOne-item__info">height: 200px</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blockOne-item item--grey">
              <p className="blockOne-item__title">1</p>
              <p className="blockOne-item__info">height: 200px</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="blockOne-item item--black">
              <p className="blockOne-item__title">1</p>
              <p className="blockOne-item__info">height: 200px</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <div className="blockOne-item item--grey">
                  <p className="blockOne-item__title">1</p>
                  <p className="blockOne-item__info">height: 200px</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blockOne-item item--black">
                  <p className="blockOne-item__title">1</p>
                  <p className="blockOne-item__info">height: 200px</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="blockOne-item item--grey">
              <p className="blockOne-item__title">1</p>
              <p className="blockOne-item__info">height: 200px</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockOne;
