import Card from './Card';
import Button from './Button';
import Student from './Student';
import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Button/>
    <Student name="John Rolly Cedillo" age={21} isStudent={true}/>
    <Student name="John Doe" age={30} isStudent={false}/>
    <Student name="Cynthia Aburame" age={80} isStudent={false}/>
    <Student name="Angelica Dogde" age={20} isStudent={true}/>
    <Student name="Larry" age={17} isStudent={true}/>

    <UserGreeting isLoggedIn={true} username="John Rolly"/>
    </>
  );
  }

export default App;
