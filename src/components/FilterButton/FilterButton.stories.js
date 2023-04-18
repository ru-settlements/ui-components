import FilterButton from './FilterButton.vue'

export default {
  title: 'BaseUI/FilterButtons',
  component: FilterButton
}

const Template = (args) => ({
  template: '<FilterButton :date-from="args.dateFrom" :date-to="args.dateTo" />',
  components: { FilterButton },
  setup() {
    return { args }
  }
})

export const Default = Template.bind({})
Default.args = {
  dateFrom: '20.03.23',
  dateTo: '20.06.23',
}
