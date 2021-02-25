<template>
  <div class="feedback">
    {{ messageUser }}
    <a :href=githubUrl target="_blank">
      {{ messageEditGitHub }}
    </a>
  </div>
</template>

<script>
import LocaleHelper from "./LocaleHelper";

export default {
  computed: {
    githubUrl() {
      const baseUrl = 'https://github.com/quantiacs/documentation';
      const locale = LocaleHelper.getCurrentLocale();
      const repositoryFile = '/tree/master/' + locale;
      return baseUrl + repositoryFile;
    },
    messageUser() {
      return 'Caught a mistake or want to contribute to the documentation?';
    },
    messageEditGitHub() {
      return 'Edit this on GitHub!';
    }
  }
}

</script>

<style scoped>
.feedback {
  margin-top: 12px;
  margin-bottom: 6px;
}
</style>
