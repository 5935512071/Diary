
import Header from "../../Components/Header/Header";
import Post from "../../Components/Post/Post";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
    return (
        <>
        <Header />
        <div className="home">
            <Post />
            <Sidebar />
            
        </div>
        </>
    );
}

