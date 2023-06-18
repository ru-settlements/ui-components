import { UIButton } from '@/components'
import Icon from './img/telegram.svg'
import { Meta, StoryObj } from '@storybook/vue3'

// todo create template

const meta = {
  title: 'UI/UIButton',
  component: UIButton
} satisfies Meta

type Story = StoryObj<typeof UIButton>

export const Default: Story = {
  render: (args) => ({
    components: { UIButton },
    setup: () => ({ args }),
    template: '<UIButton v-bind="args">{{ args.defaultSlot }}</UIButton>'
  }),
  args: {
    defaultSlot: 'Зарегестрироваться',
  }
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { UIButton },
    setup: () => ({ args }),
    template: '<UIButton v-bind="args">{{ args.defaultSlot }}</UIButton>'
  }),
  args: {
    defaultSlot: 'Зарегестрироваться',
    icon: Icon
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { UIButton },
    setup: () => ({ args }),
    template: '<UIButton v-bind="args">{{ args.defaultSlot }}</UIButton>'
  }),
  args: {
    defaultSlot: 'Зарегестрироваться',
    disabled: true
  }
}

export const WithSubLink: Story = {
  render: (args) => ({
    components: { UIButton },
    setup: () => ({ args }),
    template: '<UIButton v-bind="args">{{ args.defaultSlot }}</UIButton>'
  }),
  args: {
    defaultSlot: 'Зарегестрироваться',
    icon: Icon,
    subLink: '#',
    subLinkLabel: 'войти'
  }
}

export default meta