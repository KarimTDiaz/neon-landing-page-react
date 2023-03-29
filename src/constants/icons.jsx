"loader: { '.js': 'jsx' }"
import { withBaseIcon } from "react-icons-kit";
import { heart } from 'react-icons-kit/fa/heart'
import { powerOff } from 'react-icons-kit/fa/powerOff'
import { tags } from 'react-icons-kit/fa/tags'
import { plane } from 'react-icons-kit/fa/plane'


const SideIconContainer = withBaseIcon({ size: 10, style: { color: 'white', marginRight: '5px' } })

export const HeartIcon = () => <SideIconContainer icon={heart} />
export const PowerOffIcon = () => <SideIconContainer icon={powerOff} />
export const TagsIcon = () => <SideIconContainer icon={tags} />
export const PlaneIcon = () => <SideIconContainer icon={plane} />

