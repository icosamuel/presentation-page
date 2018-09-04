<template>
  <div class="hello">

    <!-- HEADER -->
    <presentation-header/>

    <!-- PARALLAX 01 -->
    <div class="parallax-container">
      <v-parallax src="/static/img/parallax_sport.png" class="parallax-window"></v-parallax>
    </div>

    <two-columns-layout>
      <template slot="A">
        <img src="/static/img/portait_begin.jpg" style="padding-top:20px;" />
        <h3>Samuel Bégin</h3>
        <p class="note">begs1307@gmail.com</p>

        <h3>{{ $t('whoami.title') }}</h3>
        <p class="note">{{ $t('whoami.note1') }}</p>
        <p class="note">{{ $t('whoami.note2') }}</p>
      </template>
      <template slot="B">
        <work-experience/>
      </template>
    </two-columns-layout>

    <!-- PARALLAX 02 -->
    <div class="parallax-container">
      <v-parallax src="/static/img/parallax_interests.png" class="parallax-window"></v-parallax>
    </div>

    <two-columns-layout>
      <template slot="A">
        <p class="text-header"><b>{{ $t('whyme.title') }}</b></p>
        <p class="note">{{ $t('whyme.note1') }}</p>
        <p class="note">{{ $t('whyme.note2') }}</p>

        <p class="text-header"><b>{{ $t('usefulllinks.title') }}</b></p>
        <p class="note"><a href="https://github.com/icosamuel">{{ $t('usefulllinks.github') }}</a></p>
        <p class="note"><a href="https://stackexchange.com/users/2225224/icosamuel">{{ $t('usefulllinks.stackexchange') }}</a></p>
        <p class="note"><a href="https://www.linkedin.com/in/samuel-begin-3950b861/">{{ $t('usefulllinks.linkedin') }}</a></p>
      </template>
      <template slot="B">
        <formation/>
      </template>
    </two-columns-layout>

    <!-- PARALLAX 03 -->
    <div class="parallax-container">
      <v-parallax src="/static/img/parallax_music.png" class="parallax-window"></v-parallax>
    </div>

    <!-- FOOTER -->
    <div class="container" style="height:215px; position:relative;">
      <div style="position:absolute; bottom:10px;">
        <p>© {{ currentYear }} Samuel Bégin</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  .parallax-window {
    height: 600px;
  }

  .elevated-row {
    padding: 50px 0;
  }

  .elevated-row .v-card {
    box-shadow: none;
    background: none;
  }
</style>

<script>
  import workExperience from './workExperience';
  import formation from './formation';
  import presentationHeader from './presentationHeader';
  import twoColumnsLayout from './twoColumnsLayout';

  export default {
    name: 'HelloWorld',
    components: { workExperience, formation, presentationHeader, twoColumnsLayout },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        currentYear: new Date().getFullYear(),
      };
    },
  };
</script>
