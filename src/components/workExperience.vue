<template>
  <div>
    <h3>{{ $t('workExp.title') }}</h3>

    <p class="text-header">
      <b>2017</b> – {{ $t('workExp.sarbakan.title') }}
      <a href="http://sarbakan.com/"><b>{{ $t('workExp.sarbakan.name') }}</b></a>
    </p>
    <ul>
      <li>{{ $t('workExp.sarbakan.task1') }}
        <a href="https://mementosmartframe.com">Memento Smart Frame</a> {{ $t('shared.and') }}
        <a href="http://aagames.com">Adrenaline Amusements</a>
      </li>
      <li>{{ $t('workExp.sarbakan.task2') }}
        <a href="https://rocket.chat/">Rocket Chat</a> {{ $t('shared.and') }}
        <a href="https://desktop.github.com/">Github Desktop</a>
      </li>
      <li>{{ $t('workExp.sarbakan.task3') }} <a href="https://www.docker.com/">Docker</a></li>
      <li>{{ $t('workExp.sarbakan.task4') }}</li>
    </ul>

    <p class="text-header">
      <b>2016</b> – {{ $t('workExp.rocgyms.title') }}
      <a href="http://rocgyms.com/"><b>{{ $t('workExp.rocgyms.name') }}</b></a>
    </p>
    <ul>
      <li>{{ $t('workExp.rocgyms.task1') }}</li>
      <li>{{ $t('workExp.rocgyms.task2') }}</li>
      <li>{{ $t('workExp.rocgyms.task3') }}</li>
    </ul>

    <p class="text-header">
      <b>2013 à 2015</b> – {{ $t('workExp.teknome.title') }}
      <a href="http://www.teknome.com/"><b>{{ $t('workExp.teknome.name') }}</b></a>
    </p>
    <ul>
      <li>{{ $t('workExp.teknome.task1') }}</li>
      <li>{{ $t('workExp.teknome.task2') }}</li>
      <li>{{ $t('workExp.teknome.task3') }}</li>
    </ul>

    <p class="text-header">
      <b>2012</b> – {{ $t('workExp.amf.title') }}
      <a href="https://www.lautorite.qc.ca/en/"><b>{{ $t('workExp.amf.name') }}</b></a>
    </p>
    <ul>
      <li>{{ $t('workExp.amf.task1') }}</li>
      <li>{{ $t('workExp.amf.task2') }}</li>
      <li>{{ $t('workExp.amf.task3') }}</li>
    </ul>

    <p class="text-header">
      <b>2011</b> – {{ $t('workExp.caa.title') }}
      <a href="https://www.caaquebec.com/en/"><b>{{ $t('workExp.caa.name') }}</b></a>
    </p>
    <ul>
      <li>{{ $t('workExp.caa.task1') }}</li>
      <li>{{ $t('workExp.caa.task2') }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'work-experience',
  };
</script>
