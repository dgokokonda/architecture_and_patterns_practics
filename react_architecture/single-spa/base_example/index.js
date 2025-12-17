import { registerApplication, start } from 'single-spa'
import { bootstrap, mount, unmount } from './src/root.component'

registerApplication(
  'single-spa',
  () => import('./src/root.component'),
  () => true,
  { bootstrap, mount, unmount }
)

start()
