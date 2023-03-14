import Blog from './components/Blog'
import './App.css';
import DescriptionList from './components/DescriptionList';
import Darkmode from './components/Darkmode';
import Banner from './components/Banner'

function App() {
  return (
    <>
    <Banner></Banner>
    <Blog></Blog>
    <DescriptionList></DescriptionList>
    <Darkmode></Darkmode>
    </>
  );
}

export default App;
