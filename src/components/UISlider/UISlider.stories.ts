import { UISlider } from '@/components'
import { UISlide, UITagStyle } from '@/components/UISlider/UISlide.types.js'
import { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'UI/UISlider',
  component: UISlider,
} satisfies Meta<typeof UISlider>

const slides = [
  {
    title: 'Медведица затопила',
    text: 'Проводятся спасательные мероприятия. Администрация выделила пострадавшим миску риса',
    tag: {
      style: UITagStyle.Black,
      text: 'происшествия'
    },
    imgLink: 'https://shorturl.at/xEM48'
  }
]

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    slides
  }
}

export default meta

