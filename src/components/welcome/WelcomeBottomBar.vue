<template>
  <div class="navbar">
    <div class="valign">
      <DiscordLogo/>
    </div>
    <div class="valign">
      <GithubLogo/>
    </div>
    <div class="contact">
      <p>Contact me on Discord: Strikeeaglechase#0001</p>
    </div>
    <span style="width: 100%"></span>
    <div class="disclaimer">
      <p class="disclaimer-text">
        Headless Client is a community project and
        is not affiliated or endorsed by Boundless Dynamics
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import DiscordLogo from "./DiscordLogo.vue";
import GithubLogo from "./GithubLogo.vue";

@Component({components: {GithubLogo, DiscordLogo}})
export default class WelcomeBottomBar extends Vue {
}
</script>

<style>
.navbar {
  position: absolute;
  bottom: 0px;
  width: 100%;

  display: flex;
  justify-items: stretch;

  background-color: #2d333b;
}

.disclaimer {
  text-align: right;
  align-self: flex-end;

  padding-right: 10px;
}

.disclaimer-text {
  text-align: right;
}

.contact {
  align-self: flex-start;
  text-align: left;

  display: flex;

  padding-left: 10px;
}

p {
  color: white;
  font-family: monospace;
  text-align: center;
}

.valign {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
</style>
