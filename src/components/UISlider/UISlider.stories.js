import UISlider from './UISlider.vue'

export default {
  title: 'BaseUI/UISlider',
  component: UISlider,
}

const Template = (args) => ({
  template: '<UISlider v-bind="args" />',
  components: { UISlider },
  setup() {
    return { args }
  }
})

export const Default = Template.bind({})
Default.args = {}