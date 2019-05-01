<template>
  <f7-page ptr @ptr:refresh="loadMore">

    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:arrow_back_ios" panel-open="left"></f7-link>
      </f7-nav-left>

      <f7-nav-title>NewApp</f7-nav-title>

    <f7-list>
       <f7-list-item link="/login/" title="Log In"></f7-list-item>
     </f7-list>


      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:arrow_forward_ios" panel-open="right"></f7-link>
      </f7-nav-right>


    </f7-navbar>

    <f7-panel right cover theme-dark>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block strong>
            <p>Right panel content goes here</p>
          </f7-block>
          <f7-block-title>Load page in panel</f7-block-title>
          <f7-list>
            <f7-list-item link="/about/" title="About"></f7-list-item>
            <f7-list-item link="/form/" title="Form"></f7-list-item>
          </f7-list>
          <f7-block-title>Load page in main view</f7-block-title>
          <f7-list>
            <f7-list-item link="/about/" title="About" view="#main-view" panel-close></f7-list-item>
            <f7-list-item link="/form/" title="Form" view="#main-view" panel-close></f7-list-item>
          </f7-list>
        </f7-page>
    </f7-panel>

    <f7-block strong>
      <p>List of clients:</p>
    </f7-block>

    <f7-list
      media-list
      virtual-list
      :virtual-list-params="{ items, renderExternal, height: $theme.ios ? 63 : ($theme.md ? 73 : 46)}"
    >
      <ul>
        <f7-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          link="#"
          :title="item.title"
          :subtitle="item.subtitle"
          :style="`top: ${vlData.topPosition}px`"
        >
        <f7-block strong>
          <p>Name:{{" "+randomNameFunc()}}</p>
          <p>Surname:{{" "+randomSurnameFunc()}}</p>
        </f7-block>
        </f7-list-item>
      </ul>
    </f7-list>

  </f7-page>
</template>
<script>
export default {
    data() {

  const items = []
  for (let i = 1; i <= 10000; i += 1) {
    items.push({
      title: `UserID ${i}`,
      // subtitle: `SurName ${i}`,
    });
  }
  return {
     Names: [ "Bogdan", "Vladimir", "Nikolay", "Stepan", "Sergey", "Igor", "Vladislav", "Miroslav", "Nikita", "Alexander", "Ivan", "Ruslan", "Maria", "Victoria", "Angella", "Zhanna", "Irina", "Marina", "Yulya", "Olya", "Dasha", "Natasha", "Masha"],
      Surname: [ "Borovik", "Zulu", "Kolesnik", "Smolnik", "Ivanchuk", "Rezno", "Filipenko", "Matvienko", "Boroda", "Stecenko", "Magar", "Artish", "Guber", "Vinec", "Zeratool", "Skripnik", "Gaas", "Melnik"],
    items,
    vlData: {
      items: [],
    },
  };
},
methods: {
  renderExternal(vl, vlData) {
    this.vlData = vlData;
  },
  loadMore(event, done) {
      window.location.reload();  //обновление свайпом
  },
  randomNameFunc(){
      return this.Names[Math.floor(Math.random() * this.Names.length)]
  },
  randomSurnameFunc(){
      return this.Surname[Math.floor(Math.random() * this.Surname.length)]
  },
},

}
</script>
