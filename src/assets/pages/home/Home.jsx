
import './home.css'
import TopBar from '../../../components/topbar/TopBar';
import Sidebar from '../../../components/sidebar/Sidebar';
import Feed from '../../../components/feed/Feed';
import Rightbar from '../../../components/rightbar/Rightbar';

function Home() {
  return (
    <>
        <TopBar></TopBar>
    <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
    </div>
    </>
  )
}

export default Home