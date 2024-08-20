<template>
    <button>
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
            >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
            </svg>
            </div>
        </div>
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    button {
  font-family: inherit;
  font-size: 16px;
  background: royalblue;
  color: white;
  padding: 8px 20px;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4);
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(170%) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(200%);
}

button:active {
  transform: scale(0.9);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}

</style>