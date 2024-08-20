<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="price_block">
        <div class="price_card" v-for="price in price" :key="price.id">
            <p>{{ price.cena }}<span>₽</span></p>
            <h3>{{ price.category }}</h3>
            <h4>{{ price.description }}</h4>
            <ul>
                <li v-for="list in price.list" :key="list.id">
                        <label class="container">
                            <input checked="checked" type="checkbox">
                            <div class="checkmark"></div>
                        </label>
                        <span>{{ list.article }}</span>
                </li>
            </ul>
            <button>Заказать</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            price: {
                type: Array,
                required: true
            }
        }
        
    }
</script>

<style scoped>
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #ffeded38;
  transition: all 0.2s ease;
}

.checkmark {
  opacity: 0.4;
}

.container input:checked ~ .checkmark {
  background: linear-gradient(144deg,#af40ff,#5b42f3 50%,#00ddeb);
  opacity: 0.9;
  transition: all 0.2s ease;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 0.61em;
  top: 0.43em;
  width: 4px;
  height: 6px;
  border: solid rgb(255, 255, 255);
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}
.price_block {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 24px;
    gap: 16px;
    box-sizing: border-box;
    border-radius: 32px;
    background: rgba(255, 255, 255, .3);
    backdrop-filter: blur(6px);
}
.price_card {
    width: calc(33% - 16px);
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    border-radius: 32px;
    transition: all 200ms ease-in-out;
    color: rgba(56, 56, 56, 1);
}
.price_card ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* color: rgba(56, 56, 56, 1); */
    font-weight: 500;
    line-height: 100%;
}
.price_card ul li {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
}
.price_card p {
    font-size: 36px;
    line-height: 100%;
    font-weight: 900;
    /* color: rgba(56, 56, 56, 1); */
}
.price_card p span {
    font-size: 18px;
    font-weight: 700;
}
.price_card h3 {
    font-size: 24px;
    /* color: rgba(56, 56, 56, 1); */
    font-weight: 500;
}
.price_card h4 {
    font-size: 12px;
    /* color: rgba(56, 56, 56, 1); */
}
.price_card button {
    padding: 12px 0px;
    width: 100%;
    background: rgba(134, 126, 157, 1);
    border: none;
    border-radius: 32px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
}
.price_card:hover {
    color: beige;
    background: rgba(22, 18, 55, 1);
    box-shadow: 4px 4px 16px 1px rgba(0, 0, 0, .5);
    transform: translateY(-48px);
}
.price_card:hover button {
    background: rgba(186, 106, 216, 1);
}
</style>