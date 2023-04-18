import FilterBlock from './FilterBlock.vue'

export default {
  title: 'News/FilterBlocks',
  component: FilterBlock
}

const Template = (args) => ({
  template: '<FilterBlock :date-from="args.dateFrom" :date-to="args.dateTo" />',
  components: { FilterBlock },
  setup() {
    return { args }
  }
})

export const Default = Template.bind({})
Default.args = {
  dateFrom: '20.03.23',
  dateTo: '20.06.23',
}
