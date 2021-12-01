import "./Mydiary.css";

export default function Mydiary() {
  return (
    <div className="write">
        <img
        className="myImg"
        src="https://www.premium-pen.com/wp-content/uploads/2020/03/Blog-002-02.jpg"
        alt=""
        />
        <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
          </div>
          <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
     </form>
    </div>
  );
}