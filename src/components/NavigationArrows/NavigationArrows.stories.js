import NavigationArrows from './NavigationArrows.vue'

export default {
  title: 'BaseUI/NavigationArrows',
  component: NavigationArrows
}

const Template = (args) => ({
  template: '<NavigationArrows v-bind="args" />',
  components: { NavigationArrows },
  setup() {
    return { args }
  }
})

export const Default = Template.bind({})
