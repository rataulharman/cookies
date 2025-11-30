'use strict';

export function getElement(selector, scope = document) {
  return scope.getElementById(selector);
}

export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

export function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

export function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

export function create(element) {
  return document.createElement(element);
}

export function initArray(n) {
  return Array.from(Array(n).keys());
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

export function print(...args) {
  args.forEach(arg => console.log(arg));
}
