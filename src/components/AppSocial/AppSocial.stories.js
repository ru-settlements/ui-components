import { AppSocial } from '@/components'

export default {
  title: 'Header/Social',
  component: AppSocial
}

const Template = (args) => ({
  template: '<AppSocial />',
  components: { AppSocial },
  setup() {
    return { args }
  }
})

export const Default = Template.bind({})
