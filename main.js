@import url("https://fonts.googleapis.com/css2?family=bungee+inline:wght@400;500;600&display=swap");

:root {
  --main-color: #fc302b;
  --font: "Space Grotesk", sans-serif;
  --border-color: #08090a;
}

* {
  box-sizing: border-box;
  outline: none;
}

img {
  max-width: 100%;
}

body {
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  color: #08090a;
  display: grid;
  place-items: center;
  background-color: #d0d0d0;
  font-family: var(--font);
  background-image: url("picture/food\ back\ ground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-blend-mode: overlay;
  padding: 0 80px;
}
@media (max-width: 980px) {
  body {
    padding: 0;
  }
}

.container {
  max-width: 1250px;
  border-radius: 6px;
  overflow-x: auto;
  overflow-y: hidden;
  max-height: 960px;
  height: 90vh;
  width: 100%;
  display: flex;
  scroll-behavior: smooth;
  background-color: #f6f5f7;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.4);
}
@media (max-width: 980px) {
  .container {
    max-height: none;
    border-radius: 0;
    height: 100%;
  }
}

.nav {
  width: 100px;
  height: 100%;
  background-color: #08090a;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.nav__shop {
  width: 24px;
}
.nav__cart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.nav__cart span {
  background-color: var(--main-color);
  border: 2px solid #08090a;
  height: 20px;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  width: 20px;
  color: #fff;
  line-height: 1;
  right: -6px;
  top: -8px;
  position: absolute;
}

.logo {
  color: var(--main-color);
  width: 32px;
}

.cover {
  background-image: url("picture/wood.jpg");
  width: 500px;
  display: flex;  
  justify-content: center;
  font-size: 48px;
  color: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  background-position: center;
  text-align: center;
  font-weight: 500;
  flex-shrink: 0;
  font-family: 'bungee inline';
}
@media (max-width: 768px) {
  .cover {
    width: 300px;
  }
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  background-color: #fff;
  width: 310px;
  overflow-y: auto;
  scroll-behavior: smooth;
  transition: 0.6s;
  flex-shrink: 0;
}
.product + .product {
  margin-left: 6px;
}
.product__img {
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  margin: 40px 0;
  max-width: 500px;
  transition: 0.3s;
}
.product__title {
  max-width: 12ch;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0;
  transition: 0.6s;
}

.product__price {
  margin-bottom: 30px;
  transition: 0.6s;
}
.product__subtitle {
  color: #414041;
  line-height: 1.5em;
  font-size: 14px;
  margin-bottom: 20px;
}
.product__subtitle--expanded {
  display: none;
}
.product__detail {
  margin-top: auto;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
}
.product__detail-img {
  display: none;
}
.product__buttons {
  align-items: center;
  display: none;
  min-width: 80%;
  margin-bottom: 36px;
}
@media (max-width: 1010px) {
  .product__buttons {
    flex-direction: column;
    justify-content: center;
  }
}
.product__options {
  display: flex;
  align-items: center;
}
.product__option {
  background-color: transparent;
  border: 1px solid var(--border-color);
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: var(--font);
  margin-right: -1px;
}
@media (max-width: 650px) {
  .product__option {
    padding: 8px 16px;
  }
}
.product__option:first-child {
  border-radius: 4px 0 0 4px;
}
.product__option:last-child {
  border-radius: 0 4px 4px 0;
}
.product__option--active {
  background-color: var(--border-color);
  color: #fff;
  border-color: var(--border-color);
}
.product__option.product__add {
  background-color: var(--main-color);
  color: #fff;
  margin-left: 16px;
  flex-grow: 1;
  border-radius: 4px;
  border-color: var(--main-color);
}
@media (max-width: 1010px) {
  .product__option.product__add {
    margin-left: 0;
    margin-top: 16px;
  }
}

.product--active {
  width: 70%;
  padding-left: 70px;
  padding-right: 70px;
  overflow-y: auto;
  padding-bottom: 0;
}
@media (max-width: 650px) {
  .product--active {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
}
.product--active .product__title {
  font-size: 44px;
  max-width: none;
}
@media (max-width: 650px) {
  .product--active .product__title {
    font-size: 28px;
  }
}
.product--active .product__detail {
  display: none;
}
.product--active .product__price {
  font-size: 24px;
}

.product--active .product__subtitle {
  display: none;
}
.product--active .product__detail-img {
  display: block;
  margin-top: 20px;
  margin: 20px -70px 0;
  max-width: none;
  width: calc(100% + 140px);
}
@media (max-width: 650px) {
  .product--active .product__detail-img {
    width: calc(100% + 60px);
  }
}
.product--active .product__subtitle--expanded {
  display: block;
  animation-name: transform;
  animation-duration: 0.6s;
  animation-delay: var(--delay);
  animation-fill-mode: both;
}
.product--active .product__buttons {
  display: flex;
  animation-name: transform;
  animation-duration: 0.6s;
  animation-delay: var(--delay);
  animation-fill-mode: both;
}
.product--active .product__table,
.product--active .product__grid,
.product--active .product__close {
  display: flex;
}

@media (max-width: 650px) {
  .product__table-cell:first-child {
    width: auto;
    margin-bottom: 2px;
  }
}
.product__table .product__option {
  border-color: #323132;
  border-radius: 4px;
  text-align: center;
  margin-top: 30px;
  background-color: #323132;
}

@keyframes transform {
  0% {
    opacity: 0;
    transform: translatey(100px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.product__grid {
  display: flex;
  margin: 0 -70px;
  width: calc(100% + 140px);
  flex-wrap: wrap;
  display: none;
}
@media (max-width: 650px) {
  .product__grid {
    width: calc(100% + 60px);
  }
}
.product__grid img {
  width: 33.333%;
  max-height: 320px;
  -o-object-fit: cover;
  object-fit: cover;
}
.product__grid img:nth-child(3) ~ img {
  width: 50%;
  max-height: none;
}

.product__close {
  position: sticky;
  display: none;
  z-index: 1;
  top: 0;
  margin-right: -40px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: auto;
  color: transparent;
  flex-shrink: 0;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%23fff' stroke-width='2' fill='%23fff' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  white-space: nowrap;
  border: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
}
@media (max-width: 650px) {
  .product__close {
    margin-top: -26px;
    margin-right: 0;
  }
}

.product__overlay {
  width: 80%;
  display: none;
  overflow: hidden;
  height: 40px;
  background-color: red;
  flex-shrink: 0;
}

.container--detail .product:not(.product--active) {
  opacity: 0.3;
}
.container--detail .product:not(.product--active):hover {
  opacity: 0.7;
}

.container:not(.container--detail) .product:hover {
  box-shadow: 0 4px 0 0 var(--main-color) inset;
}

.container:not(.container--detail) .product:hover .product__img {
  transform: scale(1.07);
}
