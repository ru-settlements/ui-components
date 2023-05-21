import {UIInput} from "@/components/index.js";

export default {
  title: 'BaseUI/UIInput',
  component: UIInput,
  argTypes: {
    label: {
      control: 'Label',
      type: String,
      default: 'Биба'
    },
    type: {
      control: 'Type',
      default: 'text',
      options: ['text', 'password']
    }
  }
}

const Template = (args) => ({
  components: { UIInput },
  setup() {
    return { args }
  },
  template: '<UIInput v-bind="args" />'
})

export const Text = Template.bind({})
Text.args = {
  label: 'Текст',
  type: 'text'
}

export const Password = Template.bind({})
Text.args = {
  label: 'Пароль',
  type: 'text'
}
