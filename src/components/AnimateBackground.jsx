import { useEffect, useRef } from 'react';

export default function AnimateBackground () {
  const ballsContainer = useRef([])
  
  useEffect(() => {
    const colors = [ "#786DF0", "#5F6363",];
    const numBalls = 30;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random() * 10}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      ballsContainer.current.appendChild(ball);
    }

    // Keyframes
    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      // eslint-disable-next-line no-unused-vars
      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 3000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });

    return () => {
      // Realiza cualquier limpieza necesaria cuando el componente se desmonte
      // Por ejemplo, puedes eliminar los elementos creados en el DOM
      balls.forEach((ball) => {
        ball.remove();
      });
    };
  }, []);

  return <div ref={ballsContainer} className="fondo-animado"></div>;
}