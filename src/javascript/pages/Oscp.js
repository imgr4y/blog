import React from 'react';
import { Link } from 'react-router-dom';

export default class Oscp extends React.Component {
  componentDidMount() {
    document.title = 'gr4y.me | oscp links';
  }

  render() {
    return (
      <section className="container fadeInUp">
        <div>
          <p>organized list for those interested in following my study procress:</p>
          <h6><Link to={'/post/nov0717'}> day 1</Link></h6>
          <h6><Link to={'/post/nov0817'}> day 2</Link></h6>
          <h6><Link to={'/post/nov0917'}> day 3</Link></h6>
          <h6><Link to={'/post/nov1017'}> day 4</Link></h6>
          <h6><Link to={'/post/nov1117'}> day 5</Link></h6>     
        </div>
      </section>
    )
  }
}