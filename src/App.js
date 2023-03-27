import Blog from './components/Blog'
import './App.css';
import DescriptionList from './components/DescriptionList';
import Darkmode from './components/Darkmode';
import Banner from './components/Banner'
import Input from './components/Input';
import JobCard from './components/JobCard';
import Checkout from './components/Checkout'

function App() {

  return (
    <>
    <Banner></Banner>
    <Blog></Blog>
    <DescriptionList></DescriptionList>
    <Darkmode></Darkmode>
    <Input></Input>
    <JobCard></JobCard>
    <Checkout></Checkout>
    </>
  );
}

export default App;
