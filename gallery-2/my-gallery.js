new Swiper(".swiper-container", {
    speed: 400,
    spaceBtween: 100,
    effect:"cube",
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    } 
})

//navigation pshysics

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.leftheader');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });