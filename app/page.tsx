"use client";

import { useState } from "react";

const confetti = Array.from({ length: 38 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 0.08}s`,
  color: ["#ff4b32", "#ffd84d", "#f7f1e3", "#74d6c5"][index % 4],
  rotate: `${(index * 47) % 180}deg`,
}));

const wishes = [
  ["01", "Денег", "Чтобы хватало не только на важное, но и на откровенно прекрасную ерунду."],
  ["02", "Приключений", "Таких, которые начинаются с «а давай» и заканчиваются легендарной историей."],
  ["03", "Своих людей", "Тех, с кем можно смеяться до слёз и молчать без неловкости."],
];

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      <section className="hero">
        <div className="topline"><span>Спецвыпуск</span><span>Сегодня</span><span>Только для своих</span></div>
        {opened && <div className="confetti" aria-hidden="true">{confetti.map((piece, index) => <i key={index} style={{ left: piece.left, animationDelay: piece.delay, background: piece.color, transform: `rotate(${piece.rotate})` }} />)}</div>}
        <div className="hero-copy">
          <p className="eyebrow">Внимание: сегодня официально разрешено всё</p>
          <h1>С днём<br /><em>рождения,</em><br />легенда!</h1>
        </div>
        <div className={`gift-card ${opened ? "is-open" : ""}`}>
          <div className="sticker">18+ опыта</div>
          <div className="gift-top"><span>Твой подарок</span><span>↘</span></div>
          <div className="gift-body" aria-live="polite">
            {!opened ? <>
              <div className="gift-icon" aria-hidden="true">🎁</div>
              <p>Внутри кое-что важное.<br />И нет, это не носки.</p>
              <button onClick={() => setOpened(true)}>Открыть подарок</button>
            </> : <div className="message">
              <span className="message-mark">!</span>
              <h2>Ты — подарок.</h2>
              <p>Серьёзно. Спасибо, что ты есть — настоящий и совершенно уникальный. Пусть новый год жизни будет твоим лучшим сезоном.</p>
              <button className="again" onClick={() => setOpened(false)}>Свернуть обратно</button>
            </div>}
          </div>
        </div>
        <a className="scroll-cue" href="#wishes" aria-label="Перейти к пожеланиям">Листай ниже <span>↓</span></a>
      </section>

      <section className="wishes" id="wishes">
        <div className="section-heading">
          <p>Минимальный план на новый год жизни</p>
          <h2>Желаю тебе<br /><i>вот этого всего</i></h2>
        </div>
        <div className="wish-grid">{wishes.map(([number, title, text]) => <article key={number}>
          <span className="number">{number}</span><h3>{title}</h3><p>{text}</p>
        </article>)}</div>
      </section>

      <section className="toast">
        <p>И главное</p>
        <blockquote>Не становись взрослее.<br />Становись <em>счастливее.</em></blockquote>
        <div className="glasses" aria-hidden="true">🥂</div>
      </section>

      <footer><span>С любовью от человека, который ПОЧТИ помнит эту дату</span><span>С днём рождения ♥</span></footer>
    </main>
  );
}
