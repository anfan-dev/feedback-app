import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return <Card>
    <div className="about">
      <h1>About This Project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto voluptas numquam, tempore laborum temporibus aspernatur vitae fugiat itaque saepe.</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </div>
  </Card>;
}

export default AboutPage;
