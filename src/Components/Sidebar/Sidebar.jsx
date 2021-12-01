import "./Sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT DIARY</span>
                    <img
                        className="sideImg"
                        src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/family-2611748_960_720.jpg"
                        alt=""
                    />
                    <p>
                        ความสุขถ้าแบ่งปันกันก็จะเพิ่มเป็นสองเท่า แต่ความทุกข์ถ้าแบ่งปันกันจะลดลงครึ่งนึงเสมอ
                    </p>
                    </div>
                    <div className="sidebarItem">
                        <span className="sidebarTitle">CATEGORIES</span>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                            <Link className="link1" to="/posts?cat=สถานที่ท่องเที่ยว">
                            สถานที่ท่องเที่ยว
                            </Link></li>
                            <li className="sidebarListItem">
                            <Link className="link1" to="/posts?cat=ที่พัก&โรงแรม">
                            ที่พัก&โรงแรม
                            </Link></li>
                            <li className="sidebarListItem">
                            <Link className="link1" to="/posts?cat=สินค้า">
                            สินค้า
                            </Link></li>
                            <li className="sidebarListItem">
                            <Link className="link1" to="/posts?cat=อาหาร">
                            อาหาร
                            </Link></li>
                            <li className="sidebarListItem">
                            <Link className="link1" to="/posts?cat=กิจกรรม">
                            กิจกรรม
                            </Link></li>
                        </ul>
                    </div> 
                 
        </div>
    );
}