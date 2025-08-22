<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from "vue";
import Select from 'primevue/select';

const {t, locale, availableLocales } = useI18n({
  locale: 'en',
  messages: {
    en: {
      msg: 'hello',
      named: '{msg} world!',
      list: '{0} to you!',
      literal: "{'goodbye'} world!",
      the_world: 'the world',
      dio: 'DIO:',
      linked: '@:dio @:the_world !!!!',
      banana: 'no bananas | {n} banana | {n} bananas',
    },
    ja: {
      msg: 'こんにちは',
      named: '{msg} 世界！',
      list: '{0} 世界！',
      literal: "{'こんにちは'} 世界！",
      the_world: 'ザ・ワールド！',
      dio: 'ディオ:',
      linked: '@:dio @:the_world ！！！！',
      banana: 'バナナ',
    },
  }
})

const msg = computed(() => t('msg'))
</script>

<template>
  <div>
    <Select v-model="locale" :options="availableLocales" />
  </div>
  <div>
    <p>{{ t('named', {msg}) }}</p>
    <p>{{ t('list', [msg]) }}</p>
    <p>{{ t('literal') }}</p>
    <p>{{ t('linked') }}</p>
  </div>
  <div>
    <p>{{ t('banana', 1, { named: { n: 1 } }) }}</p>
    <p>{{ t('banana', 1) }}</p>
    <p>{{ t('banana', 100, { named: { n: 'too many' } }) }}</p>
  </div>
</template>

<style scoped></style>
