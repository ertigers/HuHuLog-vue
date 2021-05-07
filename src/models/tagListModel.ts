const localStorageKeyName = 'tagList'
type TagListModel = {
  data: string[]
  fetch:()=>string[]
  create:(name:string)=>string
  save:()=>void
}
const tagListModel:TagListModel = {
  data:[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    return this.data
  },
  create(name:string) {
    this.data.push(name)
    this.save()
    return name
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data))
  },
}
export default tagListModel


