import {UIInput} from "@/components";

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

const TemplatePassword = (args) => ({
  components: { UIInput },
  setup() {
    return { args }
  },
  template: '<UIInput v-bind="args"><template #hint><a href="/">Забыли пароль?</a></template></UIInput>'
})

export const Text = Template.bind({})
Text.args = {
  label: 'Текст',
  type: 'text'
}

export const Password = TemplatePassword.bind({})
Password.args = {
  label: 'Пароль',
  type: 'password'
}
