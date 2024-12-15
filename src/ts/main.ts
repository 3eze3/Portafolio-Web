import { displayProjects } from './logic/projects/projects.mjs'
import { switchLanguage } from './logic/loadLanguage/loadLanguage.mjs'
import { filtertech } from './logic/filter/filter.mjs'
import { tiltEfect } from './animations/tiltEfect.mjs'
import { copyClipBoard } from './logic/clip-board/copyClipboard.mjs'
import { slide } from './animations/slideCards.mjs'
displayProjects()
switchLanguage()
filtertech()
slide()
copyClipBoard()
tiltEfect()
