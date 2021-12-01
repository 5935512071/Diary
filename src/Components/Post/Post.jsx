import "./Post.css"
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://travelxpress.navasun.co.th/agent/wp-content/uploads/phuket-big-buddha-3-1024x575.jpg"               
                alt=""
             />
        <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="postlink" to="/posts?cat=สถานที่ท่องเที่ยว">
              สถานที่ท่องเที่ยว
            </Link></span>
        </div>
            <span className="postsTitle">
            <Link to="/post/abc" className="postlink">
              
            "วัดพระใหญ่"
          </Link></span>
        <hr/>
            <span className="postsDate">1 ชั่วโมงที่แล้ว</span>
        </div>
        <p>
            วัดพระใหญ่ หรือชื่อเรียก "พระพุทธมิ่งมงคลเอกนาคคีรี" ตั้งอยู่บนยอดเขานาคเกิด ตำบลกะรน อำเภอเมืองภูเก็ต จังหวัดภูเก็ต
        </p>
    </div>
    );
}