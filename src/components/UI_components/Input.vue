<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <input required :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" name="text" class="input">
        <label class="label">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        props: {
                label: {
                    type: String,
                    required: true
                },
                modelValue: {
                    type: String,
                    default: ''
                }
        },
        data() {
            return {
            }
        },
        
    }
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
  color: white;
  box-sizing: border-box;
}

.container .label {
  font-size: 15px;
  padding-left: 10px;
  position: absolute;
  top: 13px;
  transition: 0.3s;
  pointer-events: none;
}

.input {
  width: 100%;
  height: 46px;
  border: none;
  outline: none;
  padding: 0px 7px;
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  background-color: transparent;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
}

.input:focus {
  border: 2px solid transparent;
  color: #fff;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4),
  inset 3px 3px 10px rgba(0,0,0,1),
  inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.container .input:valid ~ .label,
.container .input:focus ~ .label {
  transition: 0.3s;
  padding-left: 2px;
  transform: translateY(-35px);
}

.container .input:valid,
.container .input:focus {
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4),
  inset 3px 3px 10px rgba(0,0,0,1),
  inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}
@media all and (max-width: 440px) {
  .container {
    width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
  color: white;
  box-sizing: border-box;
  padding: 0px 10px;
}

.container .label {
  font-size: 15px;
  padding-left: 10px;
  position: absolute;
  top: 13px;
  transition: 0.3s;
  pointer-events: none;
}

.input {
  width: 100%;
  height: 45px;
  border: none;
  outline: none;
  padding: 0px 7px;
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  background-color: transparent;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
}

.input:focus {
  border: 2px solid transparent;
  color: #fff;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4),
  inset 3px 3px 10px rgba(0,0,0,1),
  inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.container .input:valid ~ .label,
.container .input:focus ~ .label {
  transition: 0.3s;
  padding-left: 2px;
  transform: translateY(-35px);
}

.container .input:valid,
.container .input:focus {
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4),
  inset 3px 3px 10px rgba(0,0,0,1),
  inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}
}
</style>