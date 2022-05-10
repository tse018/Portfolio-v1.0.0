<template>
   <article>
      <header class="tabs">
         <ul>
            <li v-for="(tab, index) in tabs" :key="index">
               <div  class="nav-item" :class="{ 'is-active': tab.isActive }" @click="selected(tab)">
                  {{ tab.name }}
               </div>
            </li>
         </ul>
      </header>

      <section class="tabs-details">
         <slot />
      </section>
   </article>
</template>

<script>
export default {
   data() {
      return {
         tabs: [],
      }
   },

   created() {
      this.tabs = this.$children;
   },

   methods: {
      selectTab(selectedTab) {
         this.tabs.foreach(tab => {
            tab.isActive = tab.name === selectedTab.name;
         })
      }
   },

}
</script>

<style>
.tabs {
   border-bottom: 1px solid red;
   margin: 0 10px;
}

.tabs-details {
   padding: 10px;
}

ul {
   display: flex;
}

li {
   margin: 0 0 0 40px;
}

.nav-item {
   cursor: pointer;
}

.nav-item {
   color: red;
}

.is-active {
   color: red;
}
</style>