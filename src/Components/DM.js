import React from "react";

function DM() {
  return (
    <div class="container">
      <h2>V1 Made By: Red</h2>

      <div class="user-box">
        <input
          style={{
            position: "absolute",
            top: "450px",
            left: "150px",
            padding: "10px 0px",
            fontSize: "16px",
            color: "#fff",
            transition: "0.5s",
            width: "800px",
          }}
          id="passwordInput"
          type="password"
          name=""
          required=""
        />

        <label style={{ top: "450px" }}>Message User</label>

        <form>
          <a style={{ top: 410, left: 980, fontSize: " 16px" }} id="submit" href="/main/Home.html#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send
          </a>

          <a style="top: 410; left: 1000;  font-size: 16px;" href="/main/Home.html#">
            &#x1F4E2
          </a>

          <a style="top: 410; left: 1010;  font-size: 16px;" href="/main/settings.html">
            &#9881
          </a>
        </form>
      </div>
    </div>
  );
}

export default DM;
