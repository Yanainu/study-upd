'use strict';

// Здесь показан набросок класса
// с возможностями, которые нам понадобятся
class HoverIntent {

  constructor({
    sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
    interval = 100, // измеряем скорость каждые 100ms: определяем дистанцию между предыдущей и новой позицией.
    elem,
    over,
    out
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    // убедитесь, что "this" сохраняет своё значение для обработчиков.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    // назначаем обработчики
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);

    // продолжите с этого места

  }

  onMouseOver(event) {

    //оно же должно срабатывать если скорость достаточно низкая т.е. sensitivity
    // if (this.sensitivity < 0.1) {
      this.over();
    // }

    
    
  }

  onMouseOut(event) {
    this.out();
  }

  onMouseMove(event) {
    /* ... *///может тут надо замерять эту sensitivity а как бл
    //может надо измерить время между mouseover mouseout
    
  }


  destroy() {
    /* ваш код для отключения функциональности и снятия всех обработчиков */
  }

}


