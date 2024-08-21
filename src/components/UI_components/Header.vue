<!-- eslint-disable vue/multi-word-component-names -->
<template>
        <div class="header_div">
            <img src="@/assets/full_logo_dark.svg">
            <button class="button" @click="this.$emit('openPop')">
                <span class="button-content">Связаться</span>
            </button>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header_div {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.header_div img {
    height: 48px;
}
.button {
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  background-size: 400%;
  color: #fff;
  border: none;
  cursor: pointer;
}

.button:hover::before {
  transform: scaleX(1);
}

.button-content {
  position: relative;
  z-index: 1;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(
    82.3deg,
    rgba(150, 93, 233, 1) 10.8%,
    rgba(99, 88, 238, 1) 94.3%
  );
  transition: all 0.475s;
}

</style>