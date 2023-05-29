import { NavigationMenu } from '@/components'

export default {
  title: 'Header/NavigationMenu',
  component: NavigationMenu,
}

const Template = (args) => ({
  template: '<NavigationMenu v-bind="args" />',
  components: { NavigationMenu },
  setup() {
    return { args }
  }
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      link: '#',
      name: 'Новости',
    },
    {
      link: '#',
      name: 'Информация',
    },
    {
      link: '#',
      name: 'Объявления',
    },
    {
      link: '#',
      name: 'История',
    },
    {
      link: '#',
      name: 'Туристу',
    }
  ]
}
