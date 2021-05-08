import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // data
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: { 
    // recordList
    fetchRecords(state) {
      state.recordList =  JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createRecord(state,record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords')
    },
    // tagList
    fetchTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags')
      window.alert('添加成功');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },

    findTag(state,id: string) {
      return state.tagList.filter(t => t.id === id)[0];
    },

    removeTag(id: string) {
      let index = -1;
      for (let i = 0; i < this.tagList.length; i++) {
        if (this.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      this.tagList.splice(index, 1);
      this.saveTags();
      return true;
    },
    updateTag(id: string, name: string) {
      const idList = this.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = this.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          return 'duplicated';
        } else {
          const tag = this.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          this.saveTags();
          return 'success';
        }
      } else {
        return 'not found';
      }
    },

  },
  actions: { // 异步操作，调用mutations
  },
  modules: {
  }
})

export default  store

// 调用mutations
// this.$store.commit("methods",1)