import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState("👧");
  const [error, setError] = useState("");

  const { onUserLogin } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !username.replace(/\s/g, "").length) {
      setError("Please enter your name");
    } else {
      setError(null);
      onUserLogin(username, avatar);
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper">
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <div>
                <label htmlFor="name" className="nameAvatar">Name</label>
              </div>
              <input
                className="form__username-input"
                type="text"
                maxLength="20"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="form__error-message">{error}</div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="avatar" className="nameAvatar">Avatar</label>
              </div>
              <select
                className="form__avatar-input"
                onChange={(e) => setAvatar(e.target.value)}
              >
                <option value="👧">👧</option>
                <option value="🧒">🧒</option>
                <option value="😈">😈</option>
                <option value="🤖">🤖</option>
                <option value="🎃">🎃</option>
                <option value="👽">👽</option>
                <option value="👻">👻</option>
                <option value="🌸">🌸</option>
                <option value="🦔">🦔</option>
                <option value="🐸">🐸</option>
              </select>
            </div>
            <div className="form-control">
              <button type="submit" className="form__login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}