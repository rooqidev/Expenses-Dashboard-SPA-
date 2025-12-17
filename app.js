import { router } from './router.js';
import { Home } from './home.js';
import { Tracks } from './tracks.js';
import { Dashboard } from './dashboard.js';
import { Settings } from './settings.js';

window.addEventListener("load", () => {
  router({
    '/home': Home,
    '/tracks': Tracks,
    '/dashboard': Dashboard,
    '/settings': Settings,
  });
});
 