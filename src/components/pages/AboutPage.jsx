import Card from '../shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About</h1>
        <p>This is React project</p>
        <p>
          <a href='/'>Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
