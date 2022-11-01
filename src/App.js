import './App.css';
import Header from './Components/Header';
import Banner from './Components/Layout/Banner';
import AlbumsList from './Components/Layout/AlbumsList';
import MusicBanner from './Components/Re-usable/MusicBanner';
import Merchandise from './Components/Layout/Merchandise';
import MainFooter from './Components/Footer/MainFooter';
function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <MusicBanner text='MUSIC'/>
      <AlbumsList/>
      <MusicBanner text='MERCHANDISE'/>
      <Merchandise/>
      <MainFooter/>

    </div>
  );
}

export default App;
