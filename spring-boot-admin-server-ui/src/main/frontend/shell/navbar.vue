<!--
  - Copyright 2014-2018 the original author or authors.
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -     http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
  <nav id="navigation" class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item logo" to="/" v-html="brand" />

        <div class="navbar-burger burger" @click.stop="showMenu = !showMenu">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-menu" :class="{'is-active' : showMenu}">
        <div class="navbar-end">
          <router-link class="navbar-item" v-for="view in enabledViews" :to="{name: view.name}" :key="view.name">
            <span v-if="!view.handle.props">{{$t('menu.'+view.name)}}</span>
            <component v-else :is="view.handle" :applications="applications" :error="error"/>
          </router-link>

          <div class="navbar-item has-dropdown is-hoverable" v-if="userName">
            <a class="navbar-link">
              <font-awesome-icon icon="user-circle" size="lg" />&nbsp;<span v-text="userName" />
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <form action="logout" method="post">
                  <input v-if="csrfToken" type="hidden" :name="csrfParameterName" :value="csrfToken">
                  <button class="button is-icon" type="submit" value="logout">
                    <font-awesome-icon icon="sign-out-alt" />&nbsp;{{$t('navbar.log_out')}}
                  </button>
                </form>
              </a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span>{{$i18n.locale}}</span>&nbsp;
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" v-for="lang in $i18n.availableLocales" :key="lang" @click="setLanguage(lang)" v-if="lang !== $i18n.locale">
                {{lang}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import {compareBy} from '@/utils/collections';

  const readCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return (match ? decodeURIComponent(match[3]) : null);
  };

  export default {
    data: () => ({
      showMenu: false,
      brand: '<img src="assets/img/icon-spring-boot-admin.svg"><span>Spring Boot Admin</span>',
      userName: null,
      csrfToken: null,
      csrfParameterName: null
    }),
    props: {
      views: {
        type: Array,
        default: () => []
      },
      applications: {
        type: Array,
        default: () => [],
      },
      error: {
        type: Error,
        default: null
      }
    },
    methods:{
      setLanguage: function (lang) {
        console.log('lang-', lang);
        this.$i18n.locale = lang;
      }
    },
    computed: {
      enabledViews() {
        return [...this.views].filter(
          view => view.handle && (typeof view.isEnabled === 'undefined' || view.isEnabled())
        ).sort(compareBy(v => v.order));
      }
    },
    created() {
      if (global.SBA) {
        if (global.SBA.uiSettings) {
          this.brand = global.SBA.uiSettings.brand || this.brand;
        }

        if (global.SBA.user) {
          this.userName = global.SBA.user.name;
        }
      }
      this.csrfToken = readCookie('XSRF-TOKEN');
      this.csrfParameterName = (global.SBA && global.SBA.csrf && global.SBA.csrf.parameterName) || '_csrf';
    },
    mounted() {
      document.documentElement.classList.add('has-navbar-fixed-top');
    },
    beforeDestroy() {
      document.documentElement.classList.remove('has-navbar-fixed-top')
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/css/utilities";

  .logo {
    align-self: center;
    flex-basis: 12em;
    flex-basis: content;
    max-height: 2.25em;
    padding: 0.5em 1em 0.5em 0.5em;
    font-size: 1.5em;
    font-weight: 600;
    white-space: nowrap;

    img {
      margin-right: 0.5em;
    }
  }
</style>
