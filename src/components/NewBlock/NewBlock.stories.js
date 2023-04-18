import NewBlock from './NewBlock.vue'
const args = {
  title: 'Бабка поймала большого сома',
  description: `
  И нет сомнений, что ключевые особенности
            структуры проекта формируют глобальную 
            экономическую сеть и при этом — рассмотрены
              
            исключительно в разрезе маркетинговых и 
            финансовых предпосылок. 
            <br>
            <br>
            И нет сомнений, что ключевые особенности
            структуры проекта формируют глобальную 
            экономическую сеть и при этом — рассмотрены
            исключительно в разрезе маркетинговых и 
            финансовых предпосылок.`,
  date: '20.03.2023',
  imgLink: '/src/assets/pics/babka.png',
  tags: [{
    color: 'blue',
    name: 'медведица'
  },
    {
      color: 'green',
      name: 'рыбалка'
    }]
}

export default {
  title: 'News/NewBlock',
  component: NewBlock,
}

const Template = (args) => ({
  components: { NewBlock },
  setup() {
    return { args }
  },

  template: '<NewBlock v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = args
