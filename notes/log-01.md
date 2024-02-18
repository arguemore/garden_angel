# Progress Logs

I'm documenting my learnings from this project just in case it would come in handy to someone in the future. I will express in detail errors I encountered and how I solved them.

**Disclaimer:** I have a Computer Science degree but it was only by the grace of God that I was able to get it. I suck at programming but am now re-learning everything unlike when I did during my undergrad years. Note that the source being me in the logs below means I f!cked around and found out.

### February 11, 2024
I wanted to be as specific as I can with the hurdles (errors) but I made these logs after I did everything which was my mistake.

| Hurdle          | Solution       | Source | Status |
| :-------------: | :---------------------: | ------ | ------ |
| Need new studio in forked repo | Lucky I had a spare Studio project | Me | Resolved |
| Studio port incorrect |  Set devcontainer appPort variable to 3333 | [Link](https://www.sanity.io/answers/troubleshooting-github-codespaces-and-sanity-integration) | Resolved |
| Output directory 'public' not found | Adjust outDir to /src | Me  | Resolved |
| Can't build project | Made sure @sveltejs/kit and @svelte/adapter-vercel were the same release (use --legacy-peer-deps flag upon installation) | Me | Resolved |
| Outdated deployment config variable | Took out `edge:false` variable | [Link](https://kit.svelte.dev/docs/adapter-vercel) | Resolved |
| Cannot find '@sveltejs/kit' on production build | Delete ./vercel folder and include folder in .gitignore | [Link](https://github.com/sveltejs/kit/issues/6988) | Resolved |
| Cannot access /studio | Forgot to build /studio for hosting | [Link](https://www.sanity.io/docs/deployment#289addefbae7) | Resolved |

### February 12, 2024

| Hurdle          | Solution                | Source | Status |
| :-------------: | :---------------------: | ------ | ------ |
| Cannot access /studio | Adjust outDir to . | [Link](https://stackoverflow.com/questions/75348347/problem-when-deploying-sveltekit-project-to-vercel) |  |

### February 19, 2024

| Hurdle          | Solution                | Source | Status |
| :-------------: | :---------------------: | ------ | ------ |
| Cannot access /studio | Deploy /studio separately with root directory as 'studio', no overrides | Suggestion from app maker | Still unresolved |
| Sanity Studio won't load (Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html") | App is still building root directory, not subfolder | [Link](https://stackoverflow.com/questions/72070748/failed-to-load-module-script-expected-a-javascript-module-script-but-the-server) | Didn't work for me |


