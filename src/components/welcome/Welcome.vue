<template>
  <div class="welcome">
    <div class="blur-background"></div>
    <!-- <div class="main-background"></div> -->
    <div class="content">
      <h1 class="text">Headless Client</h1>
      <p class="wip-text">Name still WIP</p>
      <h2 class="text">Alpha Test</h2>
      <p class="text" id="text-body">
        Headless Client is a live 3D viewer for
        <a
            href="https://store.steampowered.com/app/667970/VTOL_VR/"
            target="_blank"
        >VTOL VR</a
        >
        that allows you to spectate a running match
        <br/><br/><span class="bold">Developers:</span><br/>
      <table class="devs-table">
        <tr>
          <td><a href="https://github.com/Strikeeaglechase" target="_blank"
          >Strikeeaglechase</a
          ></td>
          <td>Lead Developer</td>
        </tr>
        <tr>
          <td><a href="https://github.com/AlexAndHisScripts" target="_blank"
          >IHave</a
          ></td>
          <td>
            UI/UX Design
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/Temperz87" target="_blank"
            >Temperz</a
            >
          </td>
          <td>
            Backend/Reverse Engineering
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://github.com/LSantos2003" target="_blank"
            >C-137</a
            >
          </td>
          <td>
            Backend/Reverse Engineering
          </td>
        </tr>
      </table>

      <br/>

      <span class="bold">Special Thanks To:</span> <br/>
      BahamutoD - For making an amazing game and putting up with our
      shenanigans <br/>
      </p>
      <WelcomeStartButton/>
    </div>
    <WelcomeBottomBar/>
  </div>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import WelcomeBottomBar from "./WelcomeBottomBar.vue";
import WelcomeStartButton from "./WelcomeStartButton.vue";

@Component({components: {WelcomeBottomBar, WelcomeStartButton}})
export default class Welcome extends Vue {
}
</script>

<style scoped>
.content {
  font-size: 14px;
}

h1 {
  font-size: 36px;
}

a {
  color: white;
  font-weight: bold;
}

/* Im using an ID here because I don't know to CSS */
#text-body {
  max-width: 500px;
  padding-top: 20px;
}

.bold {
  font-weight: bold;
  font-size: 15px;
}

button {
  /* font-weight: bold; */
  font-family: monospace;
  background-color: transparent;
  color: #ffffff;
  border: 1px white solid;
  font-size: 1.2em;

  padding: 15px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
}

button:hover {
  background-color: white;
  color: rgb(41, 41, 41);
}

.wip-text {
  font-size: 10px;
  margin-top: 0px;
}

.text,
p {
  color: white;
  font-family: monospace;
  text-align: center;

  padding: 0px;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
}

.blur-background {
  background-image: url("preview-edit.png");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  filter: blur(2px) brightness(0.8);
  width: 100%;
  height: 100%;
  position: absolute;
}

.content {
  z-index: 1;
  position: absolute;
}

.welcome {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.devs-table {
  margin: auto;
}

.devs-table td {
  padding-left: 12px;
  padding-right: 12px;
}

.devs-table td:nth-child(odd) {
  text-align: left;
}

.devs-table td:nth-child(even) {
  text-align: right;
}
</style>
