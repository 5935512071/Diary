import "./SinglePost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
            src="https://travelxpress.navasun.co.th/agent/wp-content/uploads/phuket-big-buddha-3-1024x575.jpg"               
            alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
                วัดพระใหญ่
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Sudarat">
                Sudarat
              </Link>
            </b>
          </span>
          <span className="singlePostDate">1 ชั่วโมงที่แล้ว</span>
    </div>
        <p>
            วัดพระใหญ่ หรือชื่อเรียก "พระพุทธมิ่งมงคลเอกนาคคีรี" ตั้งอยู่บนยอดเขานาคเกิด ตำบลกะรน อำเภอเมืองภูเก็ต จังหวัดภูเก็ต
        </p>
    </div>
    </div>
  );
}