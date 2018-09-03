<template>
  <div class="hello">

    <!-- HEADER -->
    <presentation-header/>

    <!-- PARALLAX 01 -->
    <div class="jumbotron folder">
      <div style="background-image:url('img/parallax_sport.png');"
        class="jumbotron parallax-window"
        data-stellar-background-ratio="0.2"
        data-stellar-vertical-offset="600"></div>
    </div>

    <two-columns-layout>
      <template slot="A">
        <img src="assets/img/portait_begin.jpg" style="padding-top:20px;"/>
        <h3>Samuel Bégin</h3>
        <p class="note">begs1307@gmail.com</p>

        <h3>Qui suis-je?</h3>
        <p class="note">Ayant une méthodologie de travail orienté vers les objectifs, j'aime contribuer à des projets innovateurs tout en portant plusieurs chapeaux.</p>
        <p class="note">Je suis soucieux du travail bien fait et je tends à préférer les tâches significatives.</p>
      </template>
      <template slot="B">
        <work-experience/>
      </template>
    </two-columns-layout>

    <!-- PARALLAX 02 -->
    <div class="jumbotron folder">
      <div style="background-image:url('assets/img/parallax_interests.png');"
        class="jumbotron parallax-window"
        data-stellar-background-ratio="0.2"
        data-stellar-vertical-offset="300"></div>
    </div>

    <two-columns-layout>
      <template slot="A">
        <p class="header"><b>Pourquoi me choisir?</b></p>
        <p class="note">Étant de nature très ouvert et créatif, je fais preuve d’une curiosité et d’une soif d’apprentissage inépuisable. </p>
        <p class="note">Toujours à la recherche de nouveaux défis, j'utilise le plein potentiel des sources d’informations et d'outillages à ma portée.</p>

        <p class="header"><b>Liens utiles</b></p>
        <p class="note"><a href="https://github.com/icosamuel">Mon profil Github</a></p>
        <p class="note"><a href="https://stackexchange.com/users/2225224/icosamuel">Mon profil Stack Exchange</a></p>
        <p class="note"><a href="https://www.linkedin.com/in/samuel-begin-3950b861/">Mon profil LinkedIn</a></p>
      </template>
      <template slot="B">
        <formation/>
      </template>
    </two-columns-layout>

    <!-- PARALLAX 03 -->
    <div class="jumbotron folder">
      <div style="background-image:url('img/parallax_music.png');"
        class="jumbotron parallax-window"
        data-stellar-background-ratio="0.2"
        data-stellar-vertical-offset="750"></div>
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
</style>

<script>
import workExperience from './workExperience';
import formation from './formation';
import presentationHeader from './header';
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
