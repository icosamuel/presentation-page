<template>
  <div>
    <h3>{{ $t('formation.title') }}</h3>
    <p class="text-header"><b>2016-2017</b> – {{ $t('formation.cran.where') }} –
      <a href="https://www.ulaval.ca/les-etudes/programmes/repertoire/details/certificat-en-realisation-audionumerique.html"><i>{{
          $t('formation.cran.title') }}</i></a>
    </p>

    <p class="text-header"><b>2009-2013</b> – {{ $t('formation.cegep.where') }} –
      <a href="https://www.cegeplimoilou.ca/formations/diplomes-d-etudes-collegiales-dec-technique/420a1-techniques-de-l-informatique-informatique-de-gestion/"><i>{{
          $t('formation.cegep.title') }}</i></a>
    </p>
    <ul>
      <li>{{ $t('formation.cegep.note') }}</li>
    </ul>

    <p class="text-header"><b>2004-2009</b> – {{ $t('formation.secondaire.where') }} – <i>{{ $t('formation.secondaire.title')
        }}</i></p>
    <ul>
      <li><a href="http://www.courvilloise.ca/programme-education-internationale">{{ $t('formation.secondaire.note') }}</a></li>
    </ul>

    <p class="text-header"><b>{{ $t('experience.title') }}</b></p>
    <ul>
      <li>{{ $t('experience.builddrones') }} <a href="/static/img/drone_pic_01.png">[1]</a> <a href="/static/img/drone_pic_02.png">[2]</a>.</li>
      <li>{{ $t('experience.videos') }} <a href="https://www.youtube.com/user/begs1307">[1]</a>.</li>
      <li>{{ $t('experience.unity') }}</li>
      <li>{{ $t('experience.gamejams') }}
        <a href="http://sat.qc.ca/fr/nouvelles/bivouac-urbain">Bivouac Urbain</a> (2011, 2012) {{ $t('shared.and') }}
        <a href="http://pixelchallenge.strikingly.com/">Pixel Challenge</a> (2013, 2014).
      </li>
    </ul>

    <p class="text-header"><b>{{ $t('competences.title') }}</b></p>
    <ul>
      <li>{{ $t('competences.photogrametry') }} <a href="/vid/pump_up_intro_lowres.avi">[1]</a> <a href="/static/img/0200_wireframe.png">[2]</a>.</li>
      <li>{{ $t('competences.loveschallenge') }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'formation',
  };
</script>
