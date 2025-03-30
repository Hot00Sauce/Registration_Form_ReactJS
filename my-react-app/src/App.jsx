import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

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

    <List/>
    </>
  );
  }

export default App;
