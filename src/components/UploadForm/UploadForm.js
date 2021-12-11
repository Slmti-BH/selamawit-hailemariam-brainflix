import "./UploadForm";

function UploadForm(){
    return (
      <form action="">
        <label htmlFor="title">TITLE YOUR VIDEO</label>
        <input type="text" name="title" />
        <label htmlFor="content">ADD A VIDEO DESCRIPTION</label>
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="Add a description to your video"
        ></textarea>
        <button>PUBLISH</button>
        <button>CANCEL</button>
      </form>
    );
}

export default UploadForm;