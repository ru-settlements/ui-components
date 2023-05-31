import { UISearchBar } from '@/components'
import { ref } from 'vue'

export default {
  title: 'Header/UISearchBar',
  component: UISearchBar,
}

const Template = (args) => ({
  template: '<UISearchBar v-bind="args" v-model="value" />',
  components: { UISearchBar },
  setup() {
    const value = ref('')

    return { args, value }
  }
})

export const Default = Template.bind({})
Default.args = {}