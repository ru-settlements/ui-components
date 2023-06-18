export enum UITagStyle {
  Black = 'black'
}

export interface UITag {
  style: UITagStyle,
  text: string
}

export interface UISlide {
  title: string
  text: string
  tag: UITag,
  imgLink: string
}