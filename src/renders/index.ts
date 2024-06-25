import { StoryOptions } from 'src/types'
import * as VueDemi from 'vue-demi';
const { Slots } = VueDemi;
import h, { slot as slotDemi } from '../utils/h-demi'
import Image from './Image'
import Video from './Video'
// export { Image }

const getRender = (type: string) => {
  switch (type) {
    case 'image':
      return Image
    case 'video':
      return Video
    default:
      throw new Error(`Did not find a render for type ${type}`)
  }
}

interface RenderProps {
  story: StoryOptions
  onAction: (action: string, data?: any) => void
  isPaused: boolean
}

const render = ({ story, isPaused, onAction }: RenderProps, $slots: Slots) => {

  const attrs = { props: { story, isPaused }, on: { action: onAction } }

  const { type, template } = story
  if (template) {
    const slot = $slots[template]
    if (!slot) throw new Error(`unable to find the template '${template}'`)

    return slotDemi(slot, attrs)
  }

  return h(getRender(type), attrs)
}

export default render