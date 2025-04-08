<template>
  <div class="feedback">
    {{ messageUser }}
    <a :href="githubUrl" target="_blank">
      {{ messageEditGitHub }}
    </a>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import LocaleHelper from "./LocaleHelper"

const baseUrl = 'https://github.com/quantiacs/documentation'

const githubUrl = computed(() => {
  const locale = LocaleHelper.getCurrentLocale()
  const repositoryFile = '/tree/master/' + locale
  return baseUrl + repositoryFile
})

const messageUser = 'Caught a mistake or want to contribute to the documentation?'
const messageEditGitHub = 'Edit this on GitHub!'
</script>

<style scoped>
.feedback {
  margin-top: 12px;
  margin-bottom: 6px;
}
</style>
