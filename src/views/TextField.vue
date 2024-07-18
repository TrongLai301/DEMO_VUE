<!-- FORM V-MODEL VALIDATION -->
<!-- COMPOSITION API -->
<script setup>
import router from "@/router/router";
import { computed, ref } from "vue";

const startValidation = ref(false);
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const name = ref("");

function register() {
  startValidation.value = true;
  console.log(isValidEmail, isValidPassword, isValidPasswordConfirm);
  if (
    isValidEmail.value === true &&
    isValidPassword.value === true &&
    isValidPasswordConfirm.value === true
  ) {
    console.log(true);
    router.push("/home");
  }
}

const isValidEmail = computed(() => {
  return startValidation.value
    ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    : null;
});
const isValidPassword = computed(() => {
  return startValidation.value
    ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)
    : null;
});

const isValidPasswordConfirm = computed(() => {
  console.log("a:" + passwordConfirm.value);
  return startValidation.value && passwordConfirm.value != ""
    ? password.value === passwordConfirm.value
    : null;
});
</script>

<template>
  <div class="form">
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="name" />
      <br />
      <input
        :class="{ valid: isValidEmail == true, inValid: isValidEmail == false }"
        type="text"
        v-model="email"
        placeholder="email"
      />
      <p class="a-p" v-if="isValidEmail == false">
        Tài khoản gmail không hợp lệ
      </p>
      <br />
      <input
        :class="{
          valid: isValidPassword == true,
          inValid: isValidPassword == false,
        }"
        type="password"
        v-model="password"
        placeholder="password"
      />
      <p class="a-p" v-if="isValidPassword == false">
        Mật khẩu phải có số, ký tự chữ cái viết hoa, thường
      </p>
      <br />
      <input
        :class="{
          valid: isValidPasswordConfirm == true,
          inValid: isValidPasswordConfirm == false,
        }"
        type="password"
        v-model="passwordConfirm"
        placeholder="confirm"
      />
      <p class="a-p" v-if="isValidPasswordConfirm == false">
        Mật khẩu không trùng khớp
      </p>
      <br />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<style scoped>
.valid,
.inValid:focus,
.inValid:focus-visible {
  outline: none;
  border-color: blue;
}

.inValid,
.inValid:focus,
.inValid:focus-visible {
  border-color: red;
  outline: none;
}
.form {
}
form {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
input {
  border-width: 1px;
  border-radius: 4px;
  margin: 4px;
  width: 250px;
  height: 40px;
  padding: 10px;
}
input:focus-visible {
  outline: none;
}

input:hover {
  border-color: rgb(60, 78, 240);
  transition: 0.2s;
}
.a-p {
  animation-name: displayText;
  animation-duration: 0.4s;
  animation-timing-function: ease;
  color: red;
  margin: 2px;
  padding-left: 1rem;
  position: relative;
}
@keyframes displayText {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-0.5deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(0.5deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(0.5deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-0.5deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-0.5deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(0.5deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-0.5deg);
  }
}
</style>
