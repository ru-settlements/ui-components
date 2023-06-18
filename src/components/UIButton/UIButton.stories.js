import UIButton from './UIButton.vue'
import Icon from './img/telegram.svg'

export default {
  title: 'UI/UIButton',
  component: UIButton
}

const Template = (args) => ({
  template: '<UIButton v-bind="args">{{ args.defaultSlot }}</UIButton>',
  components: { UIButton },
  setup() {
    return { args }
  }
})

export const Default = Template.bind({})
Default.args = {
  defaultSlot: 'Зарегестрироваться',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  defaultSlot: 'Зарегестрироваться',
  icon: Icon
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultSlot: 'Зарегестрироваться',
  disabled: true
}

export const WithSubLink = Template.bind({})
WithSubLink.args = {
  defaultSlot: 'Зарегестрироваться',
  icon: Icon,
  subLink: '#',
  subLinkLabel: 'войти'
}
