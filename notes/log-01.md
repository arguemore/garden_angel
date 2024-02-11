# Progress Logs

I'm documenting my learnings from this project just in case it would come in handy to someone in the future. I will express in detail errors I encountered and how I solved them.

**Disclaimer:** I have a Computer Science degree but it was only by the grace of God that I was able to get it. I suck at programming but am now re-learning everything unlike when I did during my undergrad years. Note that the source being me in the logs below means I f!cked around and found out.

### February 11, 2024

| Hurdle          | Solution       | Source | Status |
| :-------------: | :---------------------: | ------ | ------ |
| Need new studio in forked repo | Lucky I had a spare Studio project | Me | Resolved |
| Studio port incorrect |  Set devcontainer appPort variable to 3333 | [Link](https://www.sanity.io/answers/troubleshooting-github-codespaces-and-sanity-integration) | Resolved |
| Output directory 'public' not found | Adjust outDir to /src | Me  | Resolved |
| Can't build project | Made sure @sveltejs/kit and @svelte/adapter-vercel were the same release (use --legacy-peer-deps flag upon installation) | Me | Resolved |
| Outdated deployment config variable | Took out `edge:false` variable | [Link](https://kit.svelte.dev/docs/adapter-vercel) | Resolved |
| Cannot find '@sveltejs/kit' on prod build | Delete ./vercel folder and include folder in .gitignore | [Link](https://github.com/sveltejs/kit/issues/6988) | Resolved |
| Cannot access /studio | Forgot to build for hosting | [Link](https://www.sanity.io/docs/deployment#289addefbae7) | Resolved |
