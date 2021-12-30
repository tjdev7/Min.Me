import "../App.css";
// import { useState } from "react";
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

// function unfollow() {
//     alert('User unfollowed');
// }

function following() {
  return (
    <div>
      <main className="followArticle">
        <article className="followsStyle">
          <span className="avatarStyle">👧🏽 </span>
          <span>aqfgu</span>
          {/* <span> <button className="userOption" onClick={unfollow}>❌</button></span> */}
          <br />
          <span>Coffee fanatic</span>
          <br />
          <span>•I’d rather steal your dessert than your boyfriend</span>
        </article>
        <article className="followsStyle">
          <span className="avatarStyle">👦 </span>
          <span>znqfa</span>
          {/* <span> <button className="userOption" onClick={unfollow}>❌</button></span> */}
          <br />
          <span>•Bacon expert</span>
          <br />
          <span>Stay weird</span>
        </article>
        <article className="followsStyle">
          <span className="avatarStyle">😶 </span>
          <span>buevx</span>
          {/* <span> <button className="userOption" onClick={unfollow}>❌</button></span> */}
          <br />
          <span>General alcohol buff</span>
          <br />
          <span>"Message"</span>
        </article>
        <article className="followsStyle">
          <span className="avatarStyle">👦🏿 </span>
          <span>btmgw</span>
          <br />
          <span>•Student</span>
          <br />
          <span>•L💖VE is in the air</span>
        </article>

        <article className="followsStyle">
          <span className="avatarStyle">👧🏼 </span>
          <span>mgqpu</span>
          <br />
          <span>•Pop culture geek</span>
          <br />
          <span>•Making history</span>
        </article>

        <article className="followsStyle">
          <span className="avatarStyle">🐶 </span>
          <span>ccaux</span>
          <br />
          <span>•Total music aficionado</span>
          <br />
          <span>•A very caffeine-dependent life form</span>
        </article>

        <article className="followsStyle">
          <span className="avatarStyle">🧑‍🦱 </span>
          <span>Zpmmg</span>
          <br />
          <span>•Friendly social media nerd</span>
          <br />
          <span>•Welcome to my world</span>
        </article>

        <article className="followsStyle">
          <span className="avatarStyle">🧑‍🦰 </span>
          <span>VS3fzjn</span>
          <br />
          <span>•Web aficionado</span>
          <br />
          <span>•This is me</span>
        </article>
      </main>
    </div>
  );
}

export default following;
