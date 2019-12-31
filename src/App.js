import React from "react";
import "./App.css";

const logo = require("./logo.png");
const instagram = require("./instagram.svg");

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={logo} alt="logo" style={{width: 320, height: 'auto'}} />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column",
            margin: 20
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: 24 }}>
              Sitio en construcción
            </p>
            <div style={{ display: "flex", justifyContent: 'center' }}>
              <a
                className="instagramButton"
                target="_blank"
                rel="noopener noreferrer"
                href="http://instagram.com/poker.beermvd"
                style={{
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  fontSize: 22,
                }}
              >
                <img
                  style={{ width: 32, height: 32 }}
                  src={instagram}
                  alt="instagram"
                />
                <p
                  style={{
                    marign: 0,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  /poker.beermvd
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
