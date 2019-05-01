<template>
  <f7-page>
    <f7-navbar title="Left Panel"></f7-navbar>
    <f7-block strong>
      <p>Left panel content goes here</p>
    </f7-block>

    <f7-block strong>
        <f7-block strong>
  <f7-block-title>Some items</f7-block-title>
  <f7-block v-for="(cat, n) in getCats" :key="n">
    <span>{{ cat }}</span>
    <f7-button fill color="red" @click="removeCat(n)">Delete Cat</f7-button>
  </f7-block>
  <f7-list form>
    <f7-list-input :value="tempCat" type="text" placeholder="Заметка"></f7-list-input>
    <f7-button fill color="blue" @click="addCat(tempCat)">Add some item</f7-button>
  </f7-list>
</f7-block>
    <!-- <f7-block-title>Some items</f7-block-title>
      <f7-block v-for="(cat, n) in getCats" :key="n">
          <span>{{ cat }}</span>
          <f7-button fill color="red" @click="removeCat(n)">Delete Cat</f7-button>
      </f7-block>

        <f7-list form>
            <f7-list-input
              :value="tempCat"
              type="text"
              placeholder="Заметка"
            ></f7-list-input>
            <f7-button fill color="blue" @click="addCat(tempCat)">Add some item</f7-button>
        </f7-list> -->
  </f7-block>

  <f7-block strong>
      <f7-block-title>Некие товары</f7-block-title>
      <f7-block strong>

      </f7-block>
  </f7-block>

  </f7-page>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return {
      tempCat: '',
    };
  },
  computed:{
    ...mapGetters([
      'getCats',
    ]),
  },
  methods: {
    ...mapActions([
      'addCat',
      'removeCat',
    ])
  }
}
</script>
