import Card from './Card';
import Button from './Button';
import Student from './Student';

function App() {
  return (
    <>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Button/>
    <Student name="John Rolly Cedillo" age="hello" isStudent={true}/>
    <Student name="John Doe" age={30} isStudent={false}/>
    <Student name="Cynthia Aburame" age={80} isStudent={false}/>
    <Student name="Angelica Dogde" age={20} isStudent={true}/>
    <Student name="Larry" age={17} isStudent={true}/>
    </>
  );
}

export default App;
