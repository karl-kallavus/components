(function () {
  'use strict';

  class Menu {
    constructor ({el}) {
      this.el = el;
      this._onClick = this._onClick.bind(this);

      this._initEvents();
    }

    _initEvents () {
      this.el.addEventListener('click', this._onClick);
      this.el.querySelector('.menu__delete')
        .addEventListener('click', this._onRemoveClick.bind(this));
    }

    _isItem (el) {
      return el.classList.contains('menu__item');
    }

    _onClick (event) {
      if (this._isItem(event.target)) {
        this._onItemClick(event);
      }
    }

    _onItemClick (event) {
      console.log(event.target.innerHTML);
    }

    _onRemoveClick (event) {
      let $menuItem = event.target.closest('.menu__item');

      if (this._isItem($menuItem)) {
        $menuItem.removeEventListener('click', this._onClick);
        $menuItem.remove();
      }
    }
  }

  //export
  window.Menu = Menu;

})();
